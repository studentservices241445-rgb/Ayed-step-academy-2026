// js/requests.js
import { CONFIG } from "./config.js";

function $(q){return document.querySelector(q);}

function init(){
  $("#reqForm").addEventListener("submit",(e)=>{
    e.preventDefault();

    const msg = `
السلام عليكم ورحمة الله وبركاته 🌿
عندي **${$("#type").value}** بخصوص دورة STEP المكثفة 2026.

- الاسم: ${$("#name").value.trim()}
- مرجع التحويل (إن وجد): ${$("#ref").value.trim() || "—"}
- سبق أرسلت الإيصال؟: ${$("#sent").value}

**وصف المشكلة:**
${$("#desc").value.trim()}

__________
✅ ملاحظة: برفق أي إثبات/إيصال هنا لتسريع حل المشكلة.
جزاكم الله خير.
`.trim();

    const url = `https://t.me/${CONFIG.OFFICIAL_USERNAME}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
  });
}
init();
