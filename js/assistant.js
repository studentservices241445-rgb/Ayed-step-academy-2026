// js/assistant.js
const answers = [
  {
    q: "كيف أسجل؟",
    a: "سهل: (1) اختبر مستواك أولًا 🎯 (2) شف خطتك (3) ادخل صفحة الدفع وارفع الإيصال (4) سجل ويفتح لك تيليجرام برسالة جاهزة."
  },
  {
    q: "ليش اختبار المستوى إلزامي؟",
    a: "عشان ما نمشيك عشوائي. الاختبار يطلع ضعفك الحقيقي ويقترح لك خطة على قد وقت اختبارك."
  },
  {
    q: "هل روابط القنوات موجودة هنا؟",
    a: "لا. الروابط الخاصة بالمحتوى تُرسل بعد التأكيد النهائي عبر الحساب الرسمي حفاظًا على الخصوصية والتنظيم."
  },
  {
    q: "وش أكتب في غرض التحويل؟",
    a: "اكتب: مشتريات دورة STEP المكثفة – منصة عايد الرسمية (ولو ما ضبط: مشتريات دورة STEP المكثفة)."
  },
  {
    q: "إذا تأخر الرد؟",
    a: "ترسل رسالة وحدة مرتبة + الإيصال. كثرة الرسائل ممكن تأخر الرد عليك. وإذا عندك مشكلة استخدم صفحة (طلبات/شكاوى)."
  }
];

function $(q){return document.querySelector(q);}

function render(){
  const body = $("#assistantBody");
  if(!body) return;
  body.innerHTML = `
    <p style="margin-top:0;color:#eaeaea">اختر سؤالك وبجاوبك بسرعة 👇</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      ${answers.map((x,i)=>`<button class="btn small" data-i="${i}">${x.q}</button>`).join("")}
      <a class="btn small ghost" href="./level-test.html">ابدأ اختبار المستوى</a>
      <a class="btn small ghost" href="./payment.html">الدفع والتحويل</a>
      <a class="btn small ghost" href="./register.html">التسجيل</a>
    </div>
    <div id="ansBox" style="margin-top:12px" class="note">اختر سؤال…</div>
  `;
  body.querySelectorAll("button[data-i]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const i = Number(btn.getAttribute("data-i"));
      body.querySelector("#ansBox").textContent = answers[i].a;
    });
  });
}

function init(){
  const btn = $("#assistantBtn");
  const modal = $("#assistantModal");
  const close = $("#assistantClose");
  if(!btn || !modal || !close) return;

  render();

  btn.addEventListener("click", ()=>{ modal.style.display="grid"; });
  close.addEventListener("click", ()=>{ modal.style.display="none"; });
  modal.addEventListener("click", (e)=>{ if(e.target === modal) modal.style.display="none"; });
}
init();
