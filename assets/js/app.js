const ticker = document.getElementById('newsContent');
const inlineNews = document.getElementById('inlineNews');
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
  }, 6000);
}

function updateInlineNews() {
  inlineNews.textContent = inlineNewsItems[0];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % inlineNewsItems.length;
    inlineNews.textContent = inlineNewsItems[index];
  }, 8000);
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
  const remaining = Math.max(seatsConfig.maxSeats - seatsConfig.reservedSeats, 0);
  const percent = (seatsConfig.reservedSeats / seatsConfig.maxSeats) * 100;
  seatsRemainingEls.forEach((el) => {
    if (el) el.textContent = remaining;
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
  const interval = 10000 + Math.floor(Math.random() * 8000);
  setTimeout(cycleToasts, interval);
}

function sampleQuestions(list, count) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const quizState = {
  currentStep: 0,
  steps: [],
  selections: {},
  completed: false,
  picked: {
    grammar: [],
    reading: [],
    listening: [],
    vocab: []
  }
};

function buildQuizSteps() {
  quizState.picked.grammar = sampleQuestions(quizBank.grammar, 10);
  quizState.picked.reading = sampleQuestions(quizBank.reading, 10);
  quizState.picked.listening = sampleQuestions(quizBank.listening, 10);
  quizState.picked.vocab = sampleQuestions(quizBank.vocab, 10);

  quizState.steps = [
    { id: 'general', title: 'الأسئلة السريعة', type: 'general' },
    { id: 'grammar', title: 'Grammar Questions', type: 'section', items: quizState.picked.grammar },
    { id: 'reading', title: 'Reading Questions', type: 'section', items: quizState.picked.reading },
    { id: 'listening', title: 'Listening Questions', type: 'section', items: quizState.picked.listening },
    { id: 'vocab', title: 'Vocabulary Questions', type: 'section', items: quizState.picked.vocab }
  ];
}

function renderQuizStepper() {
  const stepper = document.getElementById('quizStepper');
  stepper.innerHTML = '';
  quizState.steps.forEach((step, index) => {
    const pill = document.createElement('div');
    pill.className = `step-pill ${index === quizState.currentStep ? 'active' : ''}`;
    pill.textContent = step.title;
    stepper.appendChild(pill);
  });
}

function renderGeneralQuestions(form) {
  generalQuestions.forEach((q) => {
    const field = document.createElement('div');
    field.className = 'space-y-2';
    const label = document.createElement('label');
    label.className = 'block font-semibold';
    label.textContent = q.title;
    field.appendChild(label);

    if (q.type === 'radio') {
      q.options.forEach((opt) => {
        const wrapper = document.createElement('label');
        wrapper.className = 'block text-sm text-muted';
        wrapper.innerHTML = `<input type="radio" name="${q.id}" value="${opt}" required> ${opt}`;
        field.appendChild(wrapper);
      });
    }

    if (q.type === 'text') {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = q.id;
      input.placeholder = q.placeholder || '';
      input.className = 'form-input';
      field.appendChild(input);
    }

    if (q.type === 'select') {
      const select = document.createElement('select');
      select.name = q.id;
      select.className = 'form-input';
      select.innerHTML = '<option value="">اختر</option>' + q.options.map((opt) => `<option value="${opt}">${opt}</option>`).join('');
      field.appendChild(select);
    }

    form.appendChild(field);
  });
}

function renderSectionQuestions(form, items, sectionKey) {
  items.forEach((item, index) => {
    const field = document.createElement('div');
    field.className = 'space-y-2';
    const label = document.createElement('label');
    label.className = 'block font-semibold';
    label.textContent = `${index + 1}. ${item.q}`;
    field.appendChild(label);

    item.options.forEach((opt, optIndex) => {
      const wrapper = document.createElement('label');
      wrapper.className = 'block text-sm text-muted';
      wrapper.innerHTML = `<input type="radio" name="${sectionKey}-${index}" value="${optIndex}" required> ${opt}`;
      field.appendChild(wrapper);
    });

    form.appendChild(field);
  });
}

function renderQuizStep() {
  const form = document.getElementById('quizForm');
  const step = quizState.steps[quizState.currentStep];
  form.innerHTML = '';

  if (step.type === 'general') {
    renderGeneralQuestions(form);
  }

  if (step.type === 'section') {
    renderSectionQuestions(form, step.items, step.id);
  }
  hydrateQuizSelections(form);

  renderQuizStepper();
  document.getElementById('prevQuiz').style.display = quizState.currentStep === 0 ? 'none' : 'inline-flex';
  document.getElementById('nextQuiz').style.display = quizState.currentStep < quizState.steps.length - 1 ? 'inline-flex' : 'none';
  document.getElementById('submitQuiz').classList.toggle('hidden', quizState.currentStep !== quizState.steps.length - 1);
}

function hydrateQuizSelections(form) {
  Object.entries(quizState.selections).forEach(([key, value]) => {
    const field = form.querySelector(`[name="${key}"]`);
    if (!field) return;
    if (field.type === 'radio') {
      const radios = form.querySelectorAll(`[name="${key}"]`);
      radios.forEach((radio) => {
        if (radio.value === value) radio.checked = true;
      });
      return;
    }
    field.value = value;
  });
}

function validateQuizStep() {
  const form = document.getElementById('quizForm');
  return form.reportValidity();
}

function collectQuizAnswers() {
  const form = document.getElementById('quizForm');
  const data = new FormData(form);
  for (const [key, value] of data.entries()) {
    quizState.selections[key] = value;
  }
}

function evaluateSection(sectionKey, items) {
  let correct = 0;
  const mistakes = [];
  items.forEach((item, index) => {
    const selected = quizState.selections[`${sectionKey}-${index}`];
    const selectedIndex = selected ? parseInt(selected, 10) : -1;
    if (selectedIndex === item.answer) {
      correct += 1;
    } else {
      mistakes.push({
        question: item.q,
        correct: item.options[item.answer],
        chosen: selectedIndex >= 0 ? item.options[selectedIndex] : 'لم يتم الاختيار',
        explanation: item.explanation
      });
    }
  });
  return { correct, total: items.length, mistakes };
}

function determinePlan(general) {
  const timing = general.examDateRange;
  if (timing === 'أقل من 3 أيام' || timing === 'من 4 إلى 7 أيام') {
    return planDetails.rescue7;
  }
  if (timing === 'من 8 إلى 15 يوم') {
    return planDetails.plan15;
  }
  if (timing === 'من 16 إلى 23 يوم') {
    return planDetails.plan23;
  }
  if (general.level && general.level.includes('مبتدئ')) {
    return planDetails.plan30;
  }
  if (timing === 'من 24 إلى 30 يوم') {
    return planDetails.plan30;
  }
  return planDetails.plan30;
}

function renderQuizResult() {
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  quizState.completed = true;

  const general = {
    examDateRange: quizState.selections.examDateRange,
    level: quizState.selections.level,
    prevExam: quizState.selections.prevExam,
    prevScore: quizState.selections.prevScore,
    targetScore: quizState.selections.targetScore,
    weakSection: quizState.selections.weakSection,
    dailyTime: quizState.selections.dailyTime,
    studyMethod: quizState.selections.studyMethod
  };

  const grammarEval = evaluateSection('grammar', quizState.picked.grammar);
  const readingEval = evaluateSection('reading', quizState.picked.reading);
  const listeningEval = evaluateSection('listening', quizState.picked.listening);
  const vocabEval = evaluateSection('vocab', quizState.picked.vocab);

  const weaknesses = [];
  const sections = [
    { name: 'Grammar', data: grammarEval },
    { name: 'Reading', data: readingEval },
    { name: 'Listening', data: listeningEval },
    { name: 'Vocab', data: vocabEval }
  ];

  sections.forEach((section) => {
    const score = Math.round((section.data.correct / section.data.total) * 100);
    if (score < 70) {
      weaknesses.push(`${section.name} (${score}%)`);
    }
  });

  const plan = determinePlan(general);

  const mistakesHtml = sections.map((section) => {
    if (section.data.mistakes.length === 0) {
      return `<div class="card p-4"><strong>${section.name}:</strong> ممتاز! ما عندك أخطاء هنا.</div>`;
    }
    return `
      <div class="card p-4 space-y-2">
        <strong>${section.name}:</strong>
        ${section.data.mistakes.map((m) => `
          <div class="text-sm text-muted">
            <p>السؤال: ${m.question}</p>
            <p>اختيارك: ${m.chosen}</p>
            <p>الإجابة الصحيحة: ${m.correct}</p>
            <p>الشرح: ${m.explanation}</p>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');

  result.innerHTML = `
    <div class="card p-6 space-y-4">
      <h3 class="text-xl font-bold text-accent">نتيجة اختبار الخطة الذكية</h3>
      <p class="text-muted">نقاط ضعفك الحالية: ${weaknesses.length ? weaknesses.join('، ') : 'مستواك متوازن، ركز على المراجعة النهائية.'}</p>
      <div>
        <h4 class="font-bold">${plan.title}</h4>
        <p class="text-muted">${plan.description}</p>
        <ul class="list-disc list-inside text-sm text-muted space-y-1">
          ${plan.steps.map((step) => `<li>${step}</li>`).join('')}
        </ul>
        ${plan.note ? `<p class="text-sm text-accent mt-2">${plan.note}</p>` : ''}
      </div>
      <div class="space-y-3">
        <h4 class="font-bold">تحليل الأخطاء (مع الشرح)</h4>
        ${mistakesHtml}
      </div>
      <div class="flex flex-wrap gap-3">
        <a href="#register" class="bg-accent text-primary px-4 py-2 rounded-full font-semibold">تمام، أبي أسجّل وأطبق الخطة 🔥</a>
        <a href="#payment" class="border border-accent/60 text-accent px-4 py-2 rounded-full">حوّل الرسوم الآن</a>
      </div>
    </div>
  `;

  const planField = document.querySelector('input[name="planRecommended"]');
  if (planField) {
    planField.value = plan.title;
  }
}

function setupQuizWizard() {
  const startBtn = document.getElementById('startQuiz');
  const wizard = document.getElementById('quizWizard');
  const nextBtn = document.getElementById('nextQuiz');
  const prevBtn = document.getElementById('prevQuiz');
  const submitBtn = document.getElementById('submitQuiz');

  buildQuizSteps();

  startBtn.addEventListener('click', () => {
    wizard.classList.remove('hidden');
    renderQuizStep();
    wizard.scrollIntoView({ behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    if (!validateQuizStep()) return;
    collectQuizAnswers();
    quizState.currentStep += 1;
    renderQuizStep();
  });

  prevBtn.addEventListener('click', () => {
    quizState.currentStep = Math.max(quizState.currentStep - 1, 0);
    renderQuizStep();
  });

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!validateQuizStep()) return;
    collectQuizAnswers();
    renderQuizResult();
  });
}

function setupTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  testimonials.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card p-5 space-y-3';
    card.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center text-accent">
          <i class="fa-solid fa-user-check"></i>
        </div>
        <div class="text-accent flex items-center gap-2">
          <i class="fa-solid fa-star"></i>
          <span>${item.name}</span>
        </div>
      </div>
      <p class="text-sm text-muted">${item.text}</p>
    `;
    grid.appendChild(card);
  });
}

function setupGallery() {
  const grid = document.getElementById('galleryGrid');
  const modal = document.getElementById('galleryModal');
  const content = document.getElementById('galleryContent');
  const close = document.getElementById('closeGallery');

  galleryItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.innerHTML = `
      <div class="gallery-icon"><i class="fa-solid fa-image"></i></div>
      <div>
        <p class="font-semibold">${item.title}</p>
        <p class="text-xs text-muted">${item.description}</p>
      </div>
    `;
    card.addEventListener('click', () => {
      content.innerHTML = `
        <div class="space-y-3">
          <div class="gallery-icon"><i class="fa-solid fa-image"></i></div>
          <h3 class="font-bold">${item.title}</h3>
          <p class="text-sm text-muted">${item.description}</p>
          <p class="text-xs text-muted">ملاحظة: الصور الشخصية تُرفع من الإدارة عند توفرها.</p>
        </div>
      `;
      modal.classList.remove('hidden');
    });
    grid.appendChild(card);
  });

  close.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.classList.add('hidden');
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
        <i class="fa-solid fa-chevron-down text-accent"></i>
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

function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
        createToast('تم النسخ ✅');
      } catch (error) {
        createToast('لم نتمكن من النسخ، انسخ يدويًا.');
      }
    });
  });
}

const formState = { currentStep: 0, values: {} };

const formSteps = [
  {
    title: 'معلومات الطالب',
    render: () => `
      <div class="space-y-4">
        <div>
          <label class="block mb-2">الاسم الكامل (إلزامي)</label>
          <input type="text" name="fullName" class="form-input" placeholder="مثال: محمد عبدالله القحطاني" required>
        </div>
        <div>
          <label class="block mb-2">اختر وسيلة التواصل (إلزامي)</label>
          <select name="contactType" class="form-input" required>
            <option value="تلجرام">تلجرام</option>
            <option value="واتساب">واتساب</option>
            <option value="إيميل">إيميل</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">بيانات التواصل (اختياري لكن مستحسن)</label>
          <input type="text" name="contactValue" class="form-input" placeholder="@username أو رقم الجوال أو example@mail.com">
          <p class="text-xs text-muted mt-2">وسيلة التواصل اختيارية لكنها تساعدنا نتواصل معك إذا صار أي نقص في البيانات أو الإيصال.</p>
        </div>
      </div>
    `
  },
  {
    title: 'معلومات الاختبار',
    render: () => `
      <div class="space-y-4">
        <div>
          <label class="block mb-2">هل حجزت موعد الاختبار؟</label>
          <select name="booked" class="form-input" required>
            <option value="نعم">نعم</option>
            <option value="لسا ما حجزت">لسا ما حجزت</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">موعد الاختبار (إذا نعم)</label>
          <input type="date" name="examDate" class="form-input">
        </div>
        <div>
          <label class="block mb-2">منطقة الاختبار (اختياري)</label>
          <select name="region" class="form-input">
            <option value="">اختر المنطقة</option>
            <option value="الرياض">الرياض</option>
            <option value="جدة">جدة</option>
            <option value="الشرقية">الشرقية</option>
            <option value="القصيم">القصيم</option>
            <option value="المدينة">المدينة</option>
            <option value="مكة">مكة</option>
            <option value="أبها">أبها</option>
            <option value="تبوك">تبوك</option>
            <option value="حائل">حائل</option>
            <option value="جازان">جازان</option>
            <option value="نجران">نجران</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">هل اختبرت قبل؟</label>
          <select name="prevExam" class="form-input" required>
            <option value="نعم">نعم</option>
            <option value="لا">لا</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">درجتك السابقة (اختياري)</label>
          <input type="text" name="prevScore" class="form-input">
        </div>
        <div>
          <label class="block mb-2">درجتك المستهدفة</label>
          <select name="targetScore" class="form-input" required>
            <option value="60–70">60–70</option>
            <option value="70–80">70–80</option>
            <option value="80–90">80–90</option>
            <option value="90+">90+</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">مستواك الحالي</label>
          <select name="level" class="form-input" required>
            <option value="مبتدئ">مبتدئ</option>
            <option value="متوسط">متوسط</option>
            <option value="جيد">جيد</option>
            <option value="ممتاز">ممتاز</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">أكثر شيء متعبك</label>
          <div class="grid sm:grid-cols-2 gap-2 text-sm text-muted">
            <label><input type="checkbox" name="weakAreas" value="Grammar"> Grammar</label>
            <label><input type="checkbox" name="weakAreas" value="Reading"> Reading</label>
            <label><input type="checkbox" name="weakAreas" value="Listening"> Listening</label>
            <label><input type="checkbox" name="weakAreas" value="Vocab"> Vocab</label>
            <label><input type="checkbox" name="weakAreas" value="Time"> إدارة الوقت</label>
          </div>
        </div>
        <div>
          <label class="block mb-2">كم تذاكر يوميًا؟</label>
          <select name="dailyTime" class="form-input" required>
            <option value="أقل من ساعة">أقل من ساعة</option>
            <option value="1–2 ساعة">1–2 ساعة</option>
            <option value="2–3 ساعات">2–3 ساعات</option>
            <option value="3–5 ساعات">3–5 ساعات</option>
            <option value="أكثر من 5 ساعات">أكثر من 5 ساعات</option>
          </select>
        </div>
        <div>
          <label class="block mb-2">ملاحظات إضافية (اختياري)</label>
          <textarea name="notes" class="form-input" rows="3"></textarea>
        </div>
      </div>
    `
  },
  {
    title: 'إرفاق الإيصال (إلزامي)',
    render: () => `
      <div class="space-y-4">
        <label class="block mb-2">Upload receipt (JPG/PNG/PDF)</label>
        <input type="file" name="receipt" class="form-input" accept="image/*,.pdf" required>
        <p class="text-xs text-danger hidden" id="receiptError">لازم ترفق الإيصال أولًا ✅ — إذا ما حولت للحين، ارجع لقسم بيانات التحويل.</p>
      </div>
    `
  },
  {
    title: 'تعهد وإقرار',
    render: () => `
      <div class="space-y-3 text-sm">
        <label class="flex items-start gap-2"><input type="checkbox" name="pledge1" required> أتعهد بعدم مشاركة أو تسريب محتوى الدورة نهائيًا، وأفهم أن إدارة الدورة يحق لها إلغاء الاشتراك عند مخالفة ذلك.</label>
        <label class="flex items-start gap-2"><input type="checkbox" name="pledge2" required> أؤكد أن التحويل تم على البيانات الرسمية المذكورة بالموقع.</label>
        <label class="flex items-start gap-2"><input type="checkbox" name="pledge3" required> أفهم أن التفعيل النهائي يتم بعد إرسال الإيصال مرة ثانية في تلجرام للحساب الرسمي.</label>
      </div>
    `
  }
];

function hydrateFormValues(form) {
  Object.entries(formState.values).forEach(([key, value]) => {
    const field = form.querySelector(`[name="${key}"]`);
    if (!field) return;
    if (field.type === 'checkbox') {
      const fields = form.querySelectorAll(`[name="${key}"]`);
      fields.forEach((checkbox) => {
        if (Array.isArray(value) && value.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });
      return;
    }
    if (field.type === 'radio') {
      const radios = form.querySelectorAll(`[name="${key}"]`);
      radios.forEach((radio) => {
        if (radio.value === value) radio.checked = true;
      });
      return;
    }
    field.value = value;
  });
}

function storeFormValues(form) {
  const data = new FormData(form);
  data.forEach((value, key) => {
    if (form.querySelectorAll(`[name="${key}"]`).length > 1) {
      const values = data.getAll(key);
      formState.values[key] = values;
    } else {
      formState.values[key] = value;
    }
  });
}

function renderFormStep() {
  const form = document.getElementById('registrationForm');
  form.innerHTML = formSteps[formState.currentStep].render();
  hydrateFormValues(form);
  renderFormStepper();
  document.getElementById('prevForm').style.display = formState.currentStep === 0 ? 'none' : 'inline-flex';
  document.getElementById('nextForm').style.display = formState.currentStep < formSteps.length - 1 ? 'inline-flex' : 'none';
  document.getElementById('submitForm').classList.toggle('hidden', formState.currentStep !== formSteps.length - 1);
}

function renderFormStepper() {
  const stepper = document.getElementById('formStepper');
  stepper.innerHTML = '';
  formSteps.forEach((step, index) => {
    const pill = document.createElement('div');
    pill.className = `step-pill ${index === formState.currentStep ? 'active' : ''}`;
    pill.textContent = step.title;
    stepper.appendChild(pill);
  });
}

function validateFormStep() {
  const form = document.getElementById('registrationForm');
  const isValid = form.reportValidity();
  const receiptError = document.getElementById('receiptError');
  if (receiptError) {
    const receiptInput = form.querySelector('input[name="receipt"]');
    if (!receiptInput || !receiptInput.files.length) {
      receiptError.classList.remove('hidden');
    } else {
      receiptError.classList.add('hidden');
    }
  }
  return isValid;
}

function setupRegistrationForm() {
  const form = document.getElementById('registrationForm');
  const prev = document.getElementById('prevForm');
  const next = document.getElementById('nextForm');
  const submit = document.getElementById('submitForm');
  const success = document.getElementById('successScreen');
  const telegramMessage = document.getElementById('telegramMessage');
  const telegramLink = document.getElementById('telegramLink');
  const summary = document.getElementById('successSummary');

  const hiddenPlan = document.createElement('input');
  hiddenPlan.type = 'hidden';
  hiddenPlan.name = 'planRecommended';
  hiddenPlan.value = 'خطة 30 يوم — تأسيس ثم نماذج';
  form.appendChild(hiddenPlan);

  renderFormStep();

  next.addEventListener('click', () => {
    if (!validateFormStep()) return;
    storeFormValues(form);
    formState.currentStep += 1;
    renderFormStep();
  });

  prev.addEventListener('click', () => {
    storeFormValues(form);
    formState.currentStep = Math.max(formState.currentStep - 1, 0);
    renderFormStep();
  });

  submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!quizState.completed) {
      createToast('الرجاء إكمال اختبار الخطة الذكية أولاً قبل التسجيل.');
      document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (!validateFormStep()) return;
    storeFormValues(form);
    const data = new FormData(form);
    const weakAreas = data.getAll('weakAreas').join(' / ') || '-';
    const message = `السلام عليكم ورحمة الله وبركاته 🌿\nأبي تأكيد اشتراكي في **دورة STEP المكثفة 2026 (أكاديمية عايد الرسمية)**.\n\n**الاسم:** ${data.get('fullName')}\n**هل حجزت موعد الاختبار؟** ${data.get('booked')}\n**موعد الاختبار:** ${data.get('examDate') || 'لسا ما حجزت'}\n**منطقة الاختبار (اختياري):** ${data.get('region') || '-'}\n**هل اختبرت قبل؟** ${data.get('prevExam')}\n**الدرجة السابقة (اختياري):** ${data.get('prevScore') || '-'}\n**الدرجة المستهدفة:** ${data.get('targetScore')}\n**مستواي الحالي:** ${data.get('level')}\n**أكثر قسم متعبني:** ${weakAreas}\n**وقت مذاكرتي اليومي:** ${data.get('dailyTime')}\n**وسيلة التواصل (اختياري):** ${data.get('contactType')} — ${data.get('contactValue') || '-'}\n**الخطة المقترحة من الموقع:** ${data.get('planRecommended')}\n\n⚠️ **مهم جدًا:** أرفقت الإيصال في الموقع للتأكد،\nوالآن **أرفق الإيصال هنا مرة ثانية (صورة أو PDF)** للتأكيد النهائي وتفعيل الاشتراك.\n\n📌 **بيانات التحويل الرسمية اللي حولت عليها:**\n- بنك الإنماء\n- الحساب: 68206067557000\n- الآيبان: SA4905000068206067557000\n- المستفيد: مؤسسة كريتيفا جلوبال لتقنية المعلومات\n\n__________\nملاحظة: فضلاً **لا أرسل أكثر من رسالة** عشان ما يتأخر الرد 🙏\nوبأنتظر تأكيدكم بأقرب وقت.`;

    telegramMessage.textContent = message;
    summary.innerHTML = `
      <p class="font-semibold text-accent mb-2">ملخص سريع:</p>
      <ul class="list-disc list-inside space-y-1">
        <li>الاسم: ${data.get('fullName')}</li>
        <li>الخطة المقترحة: ${data.get('planRecommended')}</li>
        <li>موعد الاختبار: ${data.get('examDate') || 'لسا ما حجزت'}</li>
        <li>وسيلة التواصل: ${data.get('contactType')} ${data.get('contactValue') || ''}</li>
      </ul>
    `;
    telegramLink.href = `https://t.me/Ayed_Academy_2026?text=${encodeURIComponent(message)}`;
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
    const wrapper = document.createElement('div');
    wrapper.className = 'card p-3';
    wrapper.innerHTML = `<p class="text-sm">${action.label}</p><p class="text-xs text-muted">${action.response}</p>`;
    const buttons = document.createElement('div');
    buttons.className = 'flex flex-wrap gap-2 mt-2';
    action.links.forEach((link) => {
      const btn = document.createElement('button');
      btn.textContent = link.text;
      btn.addEventListener('click', () => {
        if (link.href.startsWith('http')) {
          window.open(link.href, '_blank');
        } else {
          document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
        }
      });
      buttons.appendChild(btn);
    });
    wrapper.appendChild(buttons);
    body.appendChild(wrapper);
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
      await navigator.share({ title: 'دورة STEP المكثفة 2026', text });
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
updateInlineNews();
updateCountdown();
updateSeats();
cycleToasts();
setupQuizWizard();
setupTestimonials();
setupGallery();
setupFaq();
setupCopyButtons();
setupRegistrationForm();
setupModal();
setupAssistant();
setupBackToTop();
setupShare();
setupInstallPrompt();
registerServiceWorker();
setInterval(updateCountdown, 1000);
