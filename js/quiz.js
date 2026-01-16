// js/quiz.js
import { QUESTION_BANK } from "./questions.js";

function $(q){return document.querySelector(q);}

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function pick(bank, n){
  return shuffle(bank).slice(0,n);
}

function daysUntil(dateStr){
  const d = new Date(dateStr);
  const ms = d.getTime() - Date.now();
  return Math.ceil(ms / 86400000);
}

function buildPlan(profile, scores){
  const d = daysUntil(profile.examDate);
  const mins = profile.dailyMinutes;
  const weak = Object.entries(scores).sort((a,b)=>a[1]-b[1])[0][0];

  let bucket = "30+";
  if(d<=7) bucket="7";
  else if(d<=14) bucket="14";
  else if(d<=30) bucket="30";
  else if(d<=60) bucket="60";

  const focus = (name)=> ({
    grammar:"Grammar (قواعد)",
    reading:"Reading (فهم المقروء)",
    listening:"Listening (استماع)",
    vocab:"Vocabulary (مفردات)"
  }[name] || name);

  const base = `
**ملخص سريع:**
- باقي على اختبارك: **${d} يوم**
- وقتك اليومي: **${mins} دقيقة**
- أضعف قسم عندك حاليًا: **${focus(weak)}**

**قانون ذهبي (سعودي وبس):**
لا تكثر مصادر… خلك على خطة وحدة وطبّق يوميًا ✅
`;

  const templates = {
    "7": `
**خطة 7 أيام (ضغط محترم 😅):**
- يوميًا: 10 دقايق تهيئة + 40 دقيقة تدريب + 10 دقايق مراجعة أخطاء.
- ركّز 60% على **${focus(weak)}** + 40% على باقي الأقسام.
- آخر يومين: نماذج + مراجعة أخطاء فقط.
**هدفك:** تجمع أكبر قدر من الأنماط المتكررة بسرعة.

`,
    "14": `
**خطة 14 يوم (مناسبة جدًا):**
- 4 أيام أولى: تأسيس سريع + تكنيكات.
- 7 أيام: نماذج/تجميعات مركّزة.
- 3 أيام أخيرة: مراجعة أخطاء + رفع السرعة.
**تركيزك الأساسي:** **${focus(weak)}** + يوميًا مراجعة Vocabulary بسيطة.

`,
    "30": `
**خطة 30 يوم (أفضل توازن):**
- أسبوع 1: تأسيس + تكنيكات (خصوصًا ${focus(weak)}).
- أسبوع 2-3: نماذج + كويزات يومية + دفتر أخطاء.
- أسبوع 4: مراجعة شاملة + محاكاة اختبار.
**مهم:** لا تذاكر بدون تصحيح… الأخطاء هي الذهب.

`,
    "60": `
**خطة 60 يوم (راحة ونتيجة قوية):**
- 10 أيام: تأسيس مضبوط + قواعد/استراتيجيات.
- 30 يوم: نماذج + تدريب متدرج + كويزات.
- 20 يوم: محاكاة + رفع سرعة + سد الثغرات.
**ميزة هالخطة:** ما تنضغط… وتطلع بنتيجة أعلى غالبًا.

`,
    "30+": `
**خطة عامة:**
قسّم وقتك أسبوعيًا: Grammar + Reading + Listening + Vocab مع مراجعة أخطاء ثابتة.

`
  };

  const sectionAdvice = `
**توصيات حسب الأقسام:**
- Grammar: ركّز على الشرطيات، inversion، الأزمنة، والروابط.
- Reading: تدرب على skimming/scanning + أسئلة الفكرة العامة والاستدلال.
- Listening: ركّز على keywords والفكرة الأساسية (حتى لو بدون مقاطع هنا).
- Vocabulary: كل يوم 10-15 كلمة + مراجعة مرادفات.

**وش تسوي لو غلطت؟**
اكتب سبب الغلط بجملة وحدة… وارجع له بعد يوم + بعد 3 أيام.
`;

  return base + templates[bucket] + sectionAdvice;
}

function render(){
  const root = $("#quizRoot");
  if(!root) return;

  root.innerHTML = `
    <div class="grid2">
      <div class="field">
        <label>موعد اختبارك (تقريبي) <span class="req">*</span></label>
        <input id="examDate" type="date" required />
        <div class="help">إذا ما حجزت، حط تاريخ تقريبي عشان نطلع خطة مبدئية.</div>
      </div>

      <div class="field">
        <label>وقت مذاكرتك اليومي (بالدقائق) <span class="req">*</span></label>
        <select id="dailyMinutes">
          <option value="30">30 دقيقة</option>
          <option value="45">45 دقيقة</option>
          <option value="60" selected>60 دقيقة</option>
          <option value="90">90 دقيقة</option>
          <option value="120">120 دقيقة</option>
        </select>
      </div>

      <div class="field">
        <label>هل اختبرت STEP قبل؟</label>
        <select id="prevExam">
          <option value="no" selected>لا</option>
          <option value="yes">نعم</option>
        </select>
      </div>

      <div class="field">
        <label>إذا نعم… كم درجتك السابقة؟ (اختياري)</label>
        <input id="prevScore" type="number" min="0" max="100" placeholder="مثال: 63" />
      </div>

      <div class="field">
        <label>درجتك المستهدفة؟</label>
        <select id="target">
          <option value="70">70+</option>
          <option value="80" selected>80+</option>
          <option value="90">90+</option>
        </select>
      </div>

      <div class="field">
        <label>وش أكثر شيء متعبك؟</label>
        <select id="hardest">
          <option value="grammar">Grammar</option>
          <option value="reading">Reading</option>
          <option value="listening">Listening</option>
          <option value="vocab">Vocabulary</option>
        </select>
      </div>
    </div>

    <div class="btnblock" style="margin-top:12px">
      <button class="btn primary" id="startBtn">ابدأ الاختبار التشخيصي 👇</button>
      <a class="btn ghost" href="./content.html">قبل الاختبار… شوف المحتوى</a>
    </div>

    <hr class="sep"/>

    <div class="note">
      ✅ الاختبار يسحب أسئلة عشوائية من بنك كبير… وكل مرة تختلف الأسئلة عشان ما تحفظها حفظ.
    </div>
  `;

  $("#startBtn").addEventListener("click", ()=>{
    const examDate = $("#examDate").value;
    if(!examDate){
      alert("فضلاً حدّد موعد اختبارك (حتى لو تقريبي).");
      return;
    }
    const profile = {
      examDate,
      dailyMinutes: Number($("#dailyMinutes").value),
      prevExam: $("#prevExam").value,
      prevScore: $("#prevScore").value.trim(),
      target: $("#target").value,
      hardest: $("#hardest").value
    };

    startDiagnostic(profile);
  });
}

function startDiagnostic(profile){
  const root = $("#quizRoot");
  const paper = [
    ...pick(QUESTION_BANK.grammar, 8).map(q=>({...q, cat:"grammar"})),
    ...pick(QUESTION_BANK.reading, 8).map(q=>({...q, cat:"reading"})),
    ...pick(QUESTION_BANK.listening, 8).map(q=>({...q, cat:"listening"})),
    ...pick(QUESTION_BANK.vocab, 6).map(q=>({...q, cat:"vocab"})),
  ];
  const questions = shuffle(paper);

  let idx = 0;
  const answers = new Map();

  function renderQ(){
    const q = questions[idx];
    const isReading = q.cat === "reading";
    const isListening = q.cat === "listening";

    root.innerHTML = `
      <div class="card"><div class="pad">
        <div class="badge">سؤال ${idx+1} / ${questions.length} — ${q.cat.toUpperCase()}</div>
        <hr class="sep"/>

        ${isReading ? `<div class="note"><b>Reading Passage:</b><br/>${q.passage}</div>` : ""}
        ${isListening ? `<div class="note"><b>Listening Transcript:</b><br/><pre style="white-space:pre-wrap;margin:0">${q.dialogue}</pre></div>` : ""}

        <h2 style="margin:10px 0 8px">
          ${isReading ? q.q : isListening ? q.q : q.prompt}
        </h2>

        <div style="display:grid;gap:10px;margin-top:10px">
          ${q.options.map((opt,i)=>`
            <label class="field" style="cursor:pointer">
              <div style="display:flex;gap:10px;align-items:flex-start">
                <input type="radio" name="opt" value="${i}" ${answers.get(q.id)===i ? "checked":""} />
                <div>${opt}</div>
              </div>
            </label>
          `).join("")}
        </div>

        <div class="btnblock" style="margin-top:12px">
          <button class="btn ghost" id="prev" ${idx===0?"disabled":""}>السابق</button>
          <button class="btn primary" id="next">${idx===questions.length-1 ? "اعرض نتيجتي وخطتي ✅" : "التالي"}</button>
        </div>
      </div></div>
    `;

    root.querySelectorAll("input[name='opt']").forEach(r=>{
      r.addEventListener("change", ()=>{
        answers.set(q.id, Number(r.value));
      });
    });

    $("#prev").addEventListener("click", ()=>{
      idx = Math.max(0, idx-1);
      renderQ();
    });

    $("#next").addEventListener("click", ()=>{
      if(!answers.has(q.id)){
        alert("اختر إجابة قبل ما تكمل 🙏");
        return;
      }
      if(idx === questions.length-1){
        finish(profile, questions, answers);
      }else{
        idx++;
        renderQ();
      }
    });
  }

  renderQ();
}

function finish(profile, questions, answers){
  const scores = {grammar:0, reading:0, listening:0, vocab:0};
  const totals = {grammar:0, reading:0, listening:0, vocab:0};

  const wrongDetails = [];

  for(const q of questions){
    totals[q.cat]++;
    const a = answers.get(q.id);
    const correct = q.answer;
    if(a === correct){
      scores[q.cat]++;
    }else{
      wrongDetails.push({
        cat:q.cat,
        q,
        chosen: q.options[a],
        correct: q.options[correct],
        exp: q.exp
      });
    }
  }

  const pct = (cat)=> Math.round((scores[cat]/totals[cat])*100);

  const plan = buildPlan(profile, {
    grammar:pct("grammar"),
    reading:pct("reading"),
    listening:pct("listening"),
    vocab:pct("vocab")
  });

  localStorage.setItem("ayed_leveltest_done","1");
  localStorage.setItem("ayed_leveltest_profile", JSON.stringify(profile));
  localStorage.setItem("ayed_leveltest_scores", JSON.stringify({
    grammar:pct("grammar"), reading:pct("reading"), listening:pct("listening"), vocab:pct("vocab")
  }));
  localStorage.setItem("ayed_leveltest_plan", plan);

  const root = $("#quizRoot");
  root.innerHTML = `
    <div class="card"><div class="pad">
      <h2 style="margin-top:0">نتيجتك + خطتك جاهزة ✅</h2>

      <div class="grid2">
        <div class="kpi"><b>${pct("grammar")}%</b><span>Grammar</span></div>
        <div class="kpi"><b>${pct("reading")}%</b><span>Reading</span></div>
        <div class="kpi"><b>${pct("listening")}%</b><span>Listening</span></div>
        <div class="kpi"><b>${pct("vocab")}%</b><span>Vocabulary</span></div>
      </div>

      <hr class="sep"/>
      <div class="note" style="white-space:pre-wrap">${plan}</div>

      <hr class="sep"/>
      <h2>أخطائي الأهم (عشان تعرف وين تركز)</h2>
      <div style="display:grid;gap:10px">
        ${wrongDetails.slice(0,8).map(w=>`
          <div class="field">
            <b style="color:var(--gold2)">${w.cat.toUpperCase()}</b>
            <div class="help">إجابتك: ${w.chosen}</div>
            <div class="help">الصحيح: <b>${w.correct}</b></div>
            <div class="help">الشرح: ${w.exp}</div>
          </div>
        `).join("")}
      </div>

      <div class="btnblock" style="margin-top:12px">
        <a class="btn primary" href="./payment.html">تمام… خلنا على الدفع والتحويل 🧾</a>
        <a class="btn ghost" href="./register.html">أبي أسجل الآن ✅</a>
        <button class="btn ghost" id="retry">أعيد الاختبار (أسئلة جديدة)</button>
      </div>
    </div></div>
  `;

  $("#retry").addEventListener("click", ()=> location.reload());
}

render();
