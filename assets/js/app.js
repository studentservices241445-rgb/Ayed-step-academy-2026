const ticker = document.getElementById('newsContent');
const countdownEl = document.getElementById('countdown');
const countdownPricingEl = document.getElementById('countdownPricing');
const seatsRemainingEls = [
  document.getElementById('seatsRemaining'),
  document.getElementById('seatsRemainingPricing')
];
const seatsProgressEls = [
  document.getElementById('seatsProgress'),
  document.getElementById('seatsProgressPricing')
];

function updateTicker() {
  let index = 0;
  ticker.textContent = tickerMessages[index];
  setInterval(() => {
    index = (index + 1) % tickerMessages.length;
    ticker.textContent = tickerMessages[index];
  }, 5000);
}

function updateCountdown() {
  const target = new Date('2026-01-29T23:59:00+03:00');
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) {
    countdownEl.textContent = 'انتهى العرض';
    countdownPricingEl.textContent = 'انتهى العرض';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const text = `${days} يوم ${hours} س ${minutes} د ${seconds} ث`;
  countdownEl.textContent = text;
  countdownPricingEl.textContent = text;
}

function updateSeats() {
  const percent = ((seatsConfig.total - seatsConfig.remaining) / seatsConfig.total) * 100;
  seatsRemainingEls.forEach((el) => {
    if (el) el.textContent = seatsConfig.remaining;
  });
  seatsProgressEls.forEach((el) => {
    if (el) el.style.width = `${percent}%`;
  });
}

function createToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}

function cycleToasts() {
  createToast(notifications[Math.floor(Math.random() * notifications.length)]);
  const interval = 8000 + Math.floor(Math.random() * 4000);
  setTimeout(cycleToasts, interval);
}

function setupPlanForm() {
  const form = document.getElementById('planForm');
  const result = document.getElementById('planResult');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const examTime = data.get('examTime');
    const plan = plans[examTime] || plans['30'];
    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="card p-6 space-y-3">
        <h3 class="text-xl font-bold text-gold">${plan.title}</h3>
        <p class="text-muted">${plan.description}</p>
        <ul class="list-disc list-inside text-sm text-muted space-y-1">
          ${plan.details.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <a href="#payment" class="bg-gold text-ink px-4 py-2 rounded-full font-semibold inline-flex">سجّل الآن</a>
      </div>
    `;
    document.querySelector('input[name="planRecommended"]').value = plan.title;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setupFaq() {
  const list = document.getElementById('faqList');
  faqItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card p-4';
    card.innerHTML = `
      <button class="w-full flex items-center justify-between" aria-expanded="false">
        <span>${item.question}</span>
        <i class="fa-solid fa-chevron-down text-gold"></i>
      </button>
      <div class="hidden mt-3 text-sm text-muted">${item.answer}</div>
    `;
    const button = card.querySelector('button');
    const answer = card.querySelector('div');
    button.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      answer.classList.toggle('hidden');
      button.setAttribute('aria-expanded', String(!isOpen));
    });
    list.appendChild(card);
  });
}

function setupTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  testimonials.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card p-5 space-y-3';
    card.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
          <i class="fa-solid fa-user-check"></i>
        </div>
        <div class="text-gold flex items-center gap-2">
          <i class="fa-solid fa-star"></i>
          <span>${item.name}</span>
        </div>
      </div>
      <p class="text-sm text-muted">${item.text}</p>
    `;
    grid.appendChild(card);
  });
}

function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        createToast('تم نسخ البيان! يرجى رفع إيصال التحويل لإتمام التسجيل.');
      } catch (error) {
        createToast('لم نتمكن من النسخ، انسخ يدوياً.');
      }
    });
  });
}

function setupRegistrationForm() {
  const form = document.getElementById('registrationForm');
  const success = document.getElementById('successScreen');
  const telegramMessage = document.getElementById('telegramMessage');
  const telegramLink = document.getElementById('telegramLink');
  const summary = document.getElementById('successSummary');

  const hiddenPlan = document.createElement('input');
  hiddenPlan.type = 'hidden';
  hiddenPlan.name = 'planRecommended';
  hiddenPlan.value = 'خطة 30 يوم';
  form.appendChild(hiddenPlan);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = `السلام عليكم ورحمة الله وبركاته 🌿\nتم التحويل لدورة STEP المكثفة 2026 (أكاديمية عايد الرسمية)، وهذه بياناتي للتأكيد النهائي:\n\n- الاسم: ${data.get('fullName')}\n- موعد الاختبار: ${data.get('examDate') || 'لسا ما حجزت'}\n- المنطقة (اختياري): ${data.get('region') || 'غير محدد'}\n- وسيلة التواصل: ${data.get('contactMethod')} ${data.get('contactValue') || ''}\n- سبق اختبرت؟ ${data.get('prevExam')} | الدرجة السابقة: ${data.get('prevScore') || 'غير محددة'}\n- الدرجة المستهدفة: ${data.get('targetScore')}\n- مستواي الحالي: ${data.get('level')}\n- أصعب قسم عندي: ${data.get('hardestSection')}\n- وقت مذاكرتي اليومي: ${data.get('dailyTime')}\n- الخطة المقترحة لي: ${data.get('planRecommended')}\n\n📎 ملاحظة: سأرفق الإيصال الآن في نفس المحادثة (صورة/‏PDF) للتأكيد النهائي.\n\n_______\nتنبيه: تم إرسال الرسالة مرة واحدة فقط. في حال تأخر الرد، فضلاً لا تكرر الرسائل حتى لا يتأخر التفعيل.`;

    telegramMessage.textContent = message;
    summary.innerHTML = `
      <p class="font-semibold text-gold mb-2">ملخص سريع:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>الاسم: ${data.get('fullName')}</li>
        <li>الخطة المقترحة: ${data.get('planRecommended')}</li>
        <li>موعد الاختبار: ${data.get('examDate') || 'لسا ما حجزت'}</li>
        <li>وسيلة التواصل: ${data.get('contactMethod')} ${data.get('contactValue') || ''}</li>
      </ul>
    `;
    const url = `https://t.me/Ayed_Academy_2026?text=${encodeURIComponent(message)}`;
    telegramLink.href = url;
    success.classList.remove('hidden');
    success.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setupModal() {
  const modal = document.getElementById('policyModal');
  const modalBody = document.getElementById('modalBody');
  const close = document.getElementById('closeModal');

  document.querySelectorAll('[data-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-modal');
      modalBody.textContent = policyContent[type];
      modal.classList.remove('hidden');
    });
  });
  close.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.add('hidden');
  });
}

function setupAssistant() {
  const toggle = document.getElementById('assistantToggle');
  const panel = document.getElementById('assistantPanel');
  const body = document.getElementById('assistantBody');

  assistantActions.forEach((action) => {
    const button = document.createElement('button');
    button.textContent = action.label;
    button.addEventListener('click', () => {
      createToast(action.response);
      if (action.link.startsWith('http')) {
        window.open(action.link, '_blank');
      } else {
        document.querySelector(action.link).scrollIntoView({ behavior: 'smooth' });
      }
    });
    body.appendChild(button);
  });

  toggle.addEventListener('click', () => {
    panel.classList.toggle('hidden');
  });
}

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupShare() {
  const btn = document.getElementById('shareBtn');
  const list = document.getElementById('shareTexts');

  shareMessages.forEach((message) => {
    const item = document.createElement('div');
    item.className = 'copy-line';
    item.innerHTML = `<span>${message}</span><button class="copy-btn" data-copy="${message}">نسخ</button>`;
    list.appendChild(item);
  });
  setupCopyButtons();

  btn.addEventListener('click', async () => {
    const text = shareMessages[0];
    if (navigator.share) {
      await navigator.share({
        title: 'دورة STEP المكثفة 2026',
        text
      });
    } else {
      await navigator.clipboard.writeText(text);
      createToast('تم نسخ نص المشاركة.');
    }
  });
}

function setupInstallPrompt() {
  const installBtn = document.getElementById('installBtn');
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.classList.remove('hidden');
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.classList.add('hidden');
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js');
  }
}


updateTicker();
updateCountdown();
updateSeats();
cycleToasts();
setupPlanForm();
setupFaq();
setupTestimonials();
setupRegistrationForm();
setupModal();
setupAssistant();
setupBackToTop();
setupShare();
setupInstallPrompt();
registerServiceWorker();
setInterval(updateCountdown, 1000);
