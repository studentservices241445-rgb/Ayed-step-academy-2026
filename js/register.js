// js/register.js
import { CONFIG } from "./config.js";

function $(q){return document.querySelector(q);}

function gate(){
  const done = localStorage.getItem("ayed_leveltest_done") === "1";
  const gateBox = $("#gateBox");
  const form = $("#regForm");
  if(CONFIG.REQUIRE_LEVEL_TEST_BEFORE_REGISTER && !done){
    gateBox.style.display = "block";
    form.style.display = "none";
    return false;
  }
  return true;
}

function encodeTelegram(text){
  return encodeURIComponent(text);
}

function buildMessage(data){
  const profile = JSON.parse(localStorage.getItem("ayed_leveltest_profile") || "{}");
  const scores = JSON.parse(localStorage.getItem("ayed_leveltest_scores") || "{}");
  const plan = localStorage.getItem("ayed_leveltest_plan") || "";

  return `
السلام عليكم ورحمة الله وبركاته 🌿
أبغى تفعيل اشتراكي في **دورة STEP المكثفة 2026**.

**بياناتي:**
- الاسم: ${data.fullName}
- منطقة الاختبار: ${data.region || "—"}
- موعد الاختبار: ${data.examDate || profile.examDate || "—"}
- سبق اختبرت؟: ${data.prevExam}
- درجتي السابقة: ${data.prevScore || "—"}
- الدرجة المستهدفة: ${data.target}

**التواصل (اختياري):**
- الطريقة: ${data.contactMethod || "—"}
- البيانات: ${data.contactValue || "—"}

**نتيجة اختبار تحديد المستوى (من الموقع):**
- Grammar: ${scores.grammar ?? "—"}%
- Reading: ${scores.reading ?? "—"}%
- Listening: ${scores.listening ?? "—"}%
- Vocabulary: ${scores.vocab ?? "—"}%

**الخطة المقترحة:**
${plan ? plan : "تم عمل الاختبار — الخطة غير متاحة هنا"}

**ملاحظات:**
${data.notes || "—"}

__________
✅ *مهم جدًا*: أرفقت الإيصال في الموقع، وبرجع أرفقه هنا مرة ثانية الآن للتأكيد النهائي (صورة/ PDF).
📌 أرجو تأكيد الاشتراك بأقرب وقت، وبإذن الله ما أرسل أكثر من رسالة عشان ما يتأخر الرد عليّ.
جزاكم الله خير 🌟
`.trim();
}

function validate(){
  if(!$("#fullName").value.trim()) return "اكتب اسمك الكامل.";
  if(!$("#receipt").files[0]) return "ارفق الإيصال (إجباري).";
  if(!$("#pledge1").checked || !$("#pledge2").checked || !$("#pledge3").checked)
    return "لازم توافق على التعهدات.";
  return null;
}

function init(){
  if(!gate()) return;

  $("#regForm").addEventListener("submit", (e)=>{
    e.preventDefault();

    const err = validate();
    if(err){ alert(err); return; }

    const data = {
      fullName: $("#fullName").value.trim(),
      region: $("#region").value.trim(),
      examDate: $("#examDate").value,
      contactMethod: $("#contactMethod").value,
      contactValue: $("#contactValue").value.trim(),
      prevExam: $("#prevExam").value,
      prevScore: $("#prevScore").value.trim(),
      target: $("#target").value,
      notes: $("#notes").value.trim()
    };

    const msg = buildMessage(data);
    const url = `https://t.me/${CONFIG.OFFICIAL_USERNAME}?text=${encodeTelegram(msg)}`;

    alert("باقي خطوة وحدة ✅\nبيفتح لك تيليجرام برسالة جاهزة… وبعدها أرفق الإيصال مرة ثانية داخل تيليجرام للتأكيد النهائي.");
    window.open(url, "_blank", "noopener");
  });
}

init();
