// js/main.js
import { CONFIG } from "./config.js";
import { startTicker } from "./notifications.js";

function $(q){ return document.querySelector(q); }

function formatTime(ms){
  const s = Math.max(0, Math.floor(ms/1000));
  const d = Math.floor(s/86400);
  const h = Math.floor((s%86400)/3600);
  const m = Math.floor((s%3600)/60);
  const ss = s%60;
  return {d,h,m,ss};
}

function updatePricing(){
  const deadline = new Date(CONFIG.DEADLINE_DATE_ISO).getTime();
  const now = Date.now();
  const isDiscount = now <= deadline;

  const priceEl = $("#priceNow");
  const afterEl = $("#priceAfter");
  const deadlineEl = $("#deadlineDate");
  const tagEl = $("#priceTag");

  if(priceEl) priceEl.textContent = `${isDiscount ? CONFIG.DISCOUNT_PRICE : CONFIG.REGULAR_PRICE} ${CONFIG.CURRENCY}`;
  if(afterEl) afterEl.textContent = `${CONFIG.REGULAR_PRICE} ${CONFIG.CURRENCY}`;
  if(deadlineEl) deadlineEl.textContent = "29/01/2026";

  if(tagEl){
    tagEl.textContent = isDiscount
      ? `خصم شغال الآن 🔥 ينتهي ${deadlineEl?.textContent || "29/01/2026"}`
      : "الخصم انتهى — التسجيل بالسعر الرسمي ✅";
  }
}

function updateCountdown(){
  const deadline = new Date(CONFIG.DEADLINE_DATE_ISO).getTime();
  const now = Date.now();
  const left = deadline - now;

  const box = $("#countdown");
  if(!box) return;

  if(left <= 0){
    box.innerHTML = `<b style="color:var(--gold2)">انتهى الخصم ✅</b> <small>التسجيل مستمر بالسعر الرسمي</small>`;
    return;
  }

  const t = formatTime(left);
  box.innerHTML = `
    <b>باقي على نهاية الخصم:</b>
    <span style="display:inline-flex;gap:8px;flex-wrap:wrap;margin-inline-start:10px">
      <span class="badge">${t.d} يوم</span>
      <span class="badge">${t.h} ساعة</span>
      <span class="badge">${t.m} دقيقة</span>
      <span class="badge">${t.ss} ثانية</span>
    </span>
  `;
}

function seatsInit(){
  const key = "ayed_seats_left";
  const saved = localStorage.getItem(key);
  if(saved === null){
    localStorage.setItem(key, String(CONFIG.SEATS_LEFT_INITIAL));
  }
}
function renderSeats(){
  const el = $("#seatsLeft");
  if(!el) return;
  const left = Number(localStorage.getItem("ayed_seats_left") || CONFIG.SEATS_LEFT_INITIAL);
  el.textContent = `${left} مقعد`;
}

function navActive(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
}

function pwaInstall(){
  let deferredPrompt = null;
  const btn = $("#installBtn");
  window.addEventListener("beforeinstallprompt", (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    if(btn){ btn.style.display="inline-flex"; }
  });
  if(btn){
    btn.addEventListener("click", async ()=>{
      if(!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      btn.style.display="none";
    });
  }
}

function sw(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  }
}

function init(){
  seatsInit();
  updatePricing();
  updateCountdown();
  renderSeats();
  navActive();
  pwaInstall();
  sw();

  setInterval(()=>{
    updatePricing();
    updateCountdown();
    renderSeats();
  }, 1000);

  startTicker();
}
init();
