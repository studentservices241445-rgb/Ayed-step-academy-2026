const tickerMessages = [
  "⚡ التسجيل مفتوح — السعر الحالي 299 بدل 449",
  "⏳ ينتهي التسجيل يوم 29/01/2026 — المقاعد محدودة",
  "🧠 اختبر مستواك الآن وخذ خطة مذاكرة تلقائية",
  "📌 تذكير: رفع الإيصال إلزامي لتأكيد التسجيل",
  "✅ تحديثات 2026 متوافقة مع آخر تحديثات قياس",
  "✅ التسجيل عبر الحساب الرسمي فقط: @Ayed_Academy_2026",
  "⚠️ التحويل يكون على البيانات الرسمية فقط (أي تحويل خارجها غير معتمد)"
];

const inlineNewsItems = [
  "🆕 تم تحديث قسم خطة 15 يوم داخل الموقع",
  "✅ تم تحسين تجربة الجوال للأزرار والنموذج",
  "🔄 تم تحديث صفحة الأسئلة الشائعة",
  "📌 إضافة تنبيه واضح لإرسال الإيصال مرة ثانية في تلجرام"
];

const seatsConfig = {
  maxSeats: 250,
  reservedSeats: 128
};

const notifications = [
  "شهد المالكي سجّلت بخطة 14 يوم ✅",
  "تركي القحطاني أكمل اختبار المستوى الآن 🎯",
  "نورة العتيبي رفعت الإيصال — قيد المراجعة ⏳",
  "تم إضافة تحديث جديد لقسم Grammar 🔥",
  "تم رفع نموذج جديد للتدريب اليومي 📄",
  "فيصل السبيعي حصل 92 بعد تطبيق خطة 30 يوم 🏆",
  "جود المطيري أنهت تدريب الريدنق اليوم ✅",
  "ريم الدوسري بدأت خطة 7 أيام 🚀",
  "ماجد الشهري نصيحة: لا تقرأ القطعة كاملة أول 👌",
  "سارة الحربي ثبّتت If + Modals اليوم ✅",
  "طالب جديد من جدة سجّل الآن 📍",
  "طالبة من الرياض اختارت تركيز Listening 🔈",
  "تم تحديث قسم الاستثناءات ✅",
  "تذكير: تأكيد التسجيل يتم بعد رفع الإيصال فقط 📌",
  "آخر دفعة تم تفعيلها خلال نفس اليوم ✅",
  "تم فتح مقاعد محدودة للدفعة الحالية ⚠️",
  "خصم التسجيل الحالي فعال حتى 29/01/2026 ⏳",
  "لا تشتت نفسك—خطة واحدة تكفي 👍",
  "نصيحة: حل 20 سؤال يوميًا يفرق معك 💯",
  "نصيحة: سوّ ملف أخطائك وراجع قبل الاختبار 📒",
  "نصيحة: الريدنق يحتاج مؤقت ⏱️",
  "نصيحة: ركز على الأسئلة المتكررة ✅",
  "تم إرسال طلب جديد للتسجيل 📩",
  "تم استلام إيصال — جاري التفعيل ✅",
  "تبقى مقاعد محدودة… سارع بالتسجيل 🎟️",
  "تنبيه: لا ترسل أكثر من رسالة عشان ما يتأخر ردك 🙏",
  "طالب من مكة: محتوى مرتب وواضح 👏",
  "طالبة من القصيم: ارتحت من التشتت ✅",
  "طالب من الدمام: صرت أفهم الريدنق أسرع 💪",
  "تحديث: خطة 14 يوم محسّنة لدفعة 2026 🔥",
  "تحديث: إضافة كويزات تثبيت جديدة ✅",
  "تحديث: ملاحظات قياس مضافة للصفحة 📌",
  "تذكير: الغرض في التحويل (مشتريات دورة STEP المكثفة) 🧾",
  "تم تحديث صفحة FAQ بإجابات أكثر ✅",
  "تم إضافة قسم مشاركة الإعلان 📢",
  "تم إضافة زر تثبيت التطبيق أعلى الصفحة 📲",
  "تم إضافة عداد تنازلي لانتهاء التسجيل ⏳",
  "تم تفعيل عداد المقاعد المتبقية 🎟️",
  "تم إضافة تقييمات نجوم للمشتركين ⭐",
  "طالب: كنت 44 وصرت 71 خلال شهر ✅",
  "طالبة: ثبتت القواعد خلال أسبوعين ✅",
  "طالب: الليسننق صار أسهل بالتدريب اليومي ✅",
  "طالبة: الخطة رتبت وقتي بدون ضغط ✅",
  "طالب: حلّلت أخطائي وفرق معي جدًا ✅",
  "طالبة: ركزت على نموذج جديد ورفع درجتي ✅",
  "طالب: وقفت مصادر كثيرة وارتحت ✅",
  "معلومة: درجة STEP صلاحيتها 3 سنوات ✅",
  "معلومة: الاختبار 100 سؤال خلال 2:30 ساعة 🕒",
  "معلومة: القراءة والقواعد 80% من الدرجة 📌",
  "معلومة: الاستماع 20% من الدرجة 🔈"
];

const generalQuestions = [
  {
    id: 'examDateRange',
    title: 'كم باقي على اختبارك؟',
    type: 'radio',
    options: [
      'أقل من 3 أيام',
      'من 4 إلى 7 أيام',
      'من 8 إلى 15 يوم',
      'من 16 إلى 23 يوم',
      'من 24 إلى 30 يوم',
      'أكثر من شهر',
      'لسا ما حجزت'
    ]
  },
  {
    id: 'level',
    title: 'مستواك الحالي بشكل عام؟',
    type: 'radio',
    options: [
      'مبتدئ (أحتاج تأسيس)',
      'متوسط (أفهم الأساس لكن أغلط كثير)',
      'جيد (أبغى أرفع الدرجة وأركز على النماذج)',
      'ممتاز (أبغى مراجعة وتجميعات فقط)'
    ]
  },
  {
    id: 'prevExam',
    title: 'هل اختبرت STEP قبل؟',
    type: 'radio',
    options: ['نعم', 'لا']
  },
  {
    id: 'prevScore',
    title: 'كم درجتك السابقة؟ (اختياري)',
    type: 'text',
    placeholder: 'مثال: 72'
  },
  {
    id: 'targetScore',
    title: 'درجتك المستهدفة؟',
    type: 'radio',
    options: ['60–70', '70–80', '80–90', '90+']
  },
  {
    id: 'weakSection',
    title: 'أكثر قسم يتعبك؟',
    type: 'radio',
    options: ['القرامر', 'الريدينق', 'الليسنينق', 'إدارة الوقت/التوتر', 'المفردات']
  },
  {
    id: 'dailyTime',
    title: 'كم تقدر تذاكر يوميًا؟',
    type: 'radio',
    options: ['أقل من ساعة', '1–2 ساعة', '2–3 ساعات', '3–5 ساعات', 'أكثر من 5 ساعات']
  },
  {
    id: 'studyMethod',
    title: 'طريقة مذاكرتك المفضلة؟',
    type: 'radio',
    options: ['شروحات ثم تطبيق', 'تطبيق مباشرة ثم أراجع الأخطاء', 'خليط (شروحات + تطبيق يومي)']
  },
  {
    id: 'region',
    title: 'منطقة الاختبار؟ (اختياري)',
    type: 'select',
    options: ['الرياض', 'جدة', 'الشرقية', 'القصيم', 'المدينة', 'مكة', 'أبها', 'تبوك', 'حائل', 'جازان', 'نجران', 'أخرى']
  }
];

const quizBank = {
  grammar: [
    { q: 'Choose the correct verb: She ____ to work every day.', options: ['go', 'goes', 'going', 'gone'], answer: 1, explanation: 'With third-person singular in present simple, use goes.' },
    { q: 'If I ____ you, I would focus on the latest models.', options: ['am', 'was', 'were', 'be'], answer: 2, explanation: 'Second conditional uses were for all subjects.' },
    { q: 'They have lived here ____ 2019.', options: ['since', 'for', 'during', 'by'], answer: 0, explanation: 'Since + specific starting point.' },
    { q: 'The report ____ yesterday.', options: ['submit', 'submitted', 'was submitted', 'submitting'], answer: 2, explanation: 'Passive voice needed.' },
    { q: 'He is the student ____ won the prize.', options: ['who', 'which', 'where', 'when'], answer: 0, explanation: 'Who for people.' },
    { q: 'Neither the coach nor the players ____ ready.', options: ['is', 'are', 'was', 'be'], answer: 1, explanation: 'Nearest subject plural -> are.' },
    { q: 'I will call you when I ____ home.', options: ['get', 'got', 'getting', 'will get'], answer: 0, explanation: 'Present simple after when for future.' },
    { q: 'She has ____ finished the assignment.', options: ['yet', 'already', 'still', 'ever'], answer: 1, explanation: 'Already used in affirmatives.' },
    { q: 'Not only ____ late, but he also forgot the papers.', options: ['he was', 'was he', 'he is', 'is he'], answer: 1, explanation: 'Inversion after Not only.' },
    { q: 'The book is ____ the table.', options: ['in', 'on', 'at', 'by'], answer: 1, explanation: 'On the table.' },
    { q: 'I have two cars. ____ of them are electric.', options: ['Both', 'Either', 'Neither', 'Each'], answer: 0, explanation: 'Both for two items.' },
    { q: 'She suggested ____ earlier.', options: ['to leave', 'leaving', 'leave', 'left'], answer: 1, explanation: 'Suggest + gerund.' },
    { q: 'The meeting was postponed ____ the storm.', options: ['because', 'because of', 'so', 'although'], answer: 1, explanation: 'Because of + noun.' },
    { q: 'By next week, we ____ the project.', options: ['finish', 'will finish', 'will have finished', 'finished'], answer: 2, explanation: 'Future perfect.' },
    { q: 'I prefer tea ____ coffee.', options: ['than', 'to', 'over', 'from'], answer: 1, explanation: 'Prefer A to B.' },
    { q: 'He apologized ____ being late.', options: ['for', 'to', 'about', 'with'], answer: 0, explanation: 'Apologize for + gerund.' },
    { q: 'The number of applicants ____ increasing.', options: ['is', 'are', 'were', 'be'], answer: 0, explanation: 'Number is singular.' },
    { q: 'It’s the best movie I ____ seen.', options: ['have', 'has', 'had', 'am'], answer: 0, explanation: 'I have seen.' },
    { q: 'Hardly ____ started when the lights went out.', options: ['had we', 'we had', 'have we', 'we have'], answer: 0, explanation: 'Hardly + inversion.' },
    { q: 'She doesn’t like coffee, and I don’t ____.', options: ['too', 'either', 'also', 'neither'], answer: 1, explanation: 'Either with negatives.' },
    { q: 'A lot of information ____ missing.', options: ['are', 'is', 'were', 'be'], answer: 1, explanation: 'Information is uncountable.' },
    { q: 'He made me ____ the report again.', options: ['to write', 'write', 'writing', 'written'], answer: 1, explanation: 'Make + base verb.' },
    { q: 'I would rather ____ at home tonight.', options: ['stay', 'stayed', 'staying', 'to stay'], answer: 0, explanation: 'Would rather + base verb.' },
    { q: 'She has been working here ____ two years.', options: ['since', 'for', 'during', 'by'], answer: 1, explanation: 'For + duration.' },
    { q: 'The manager, along with the staff, ____ attending.', options: ['are', 'is', 'were', 'be'], answer: 1, explanation: 'Along with does not change singular subject.' }
  ],
  reading: [
    { q: 'Reading: The passage says Tom missed the train because he ____.', options: ['forgot the ticket', 'overslept', 'left early', 'walked fast'], answer: 1, explanation: 'The passage states he overslept.' },
    { q: 'Reading: The main idea is about ____.', options: ['healthy eating', 'time management', 'travel tips', 'sports'], answer: 1, explanation: 'Focus is on managing time.' },
    { q: 'Reading: The word “benefit” is closest to ____.', options: ['advantage', 'problem', 'delay', 'risk'], answer: 0, explanation: 'Benefit means advantage.' },
    { q: 'Reading: The author suggests that practice should be ____.', options: ['irregular', 'consistent', 'ignored', 'short'], answer: 1, explanation: 'Consistent practice is emphasized.' },
    { q: 'Reading: The example supports the idea of ____.', options: ['planning', 'guessing', 'skipping', 'waiting'], answer: 0, explanation: 'Example illustrates planning.' },
    { q: 'Reading: The passage implies that stress can be reduced by ____.', options: ['sleep', 'organization', 'noise', 'snacks'], answer: 1, explanation: 'Organization reduces stress.' },
    { q: 'Reading: The purpose of the second paragraph is to ____.', options: ['give history', 'provide evidence', 'change topic', 'ask questions'], answer: 1, explanation: 'It provides evidence.' },
    { q: 'Reading: The phrase “set aside” means ____.', options: ['forget', 'reserve', 'lose', 'ignore'], answer: 1, explanation: 'Set aside = reserve.' },
    { q: 'Reading: The author’s tone is ____.', options: ['critical', 'neutral', 'humorous', 'angry'], answer: 1, explanation: 'Tone is neutral.' },
    { q: 'Reading: The best title would be ____.', options: ['Random Tips', 'A Study Plan', 'Holiday Guide', 'Food Choices'], answer: 1, explanation: 'Main idea is study plan.' },
    { q: 'Reading: According to the passage, students who track mistakes ____.', options: ['improve faster', 'slow down', 'quit early', 'forget details'], answer: 0, explanation: 'Tracking mistakes improves faster.' },
    { q: 'Reading: The word “adjust” is closest to ____.', options: ['change', 'ignore', 'break', 'hide'], answer: 0, explanation: 'Adjust means change.' },
    { q: 'Reading: The author mentions “models” to ____.', options: ['confuse readers', 'give examples', 'sell products', 'avoid details'], answer: 1, explanation: 'Models are examples.' },
    { q: 'Reading: The passage suggests using one resource to ____.', options: ['waste time', 'avoid distraction', 'reduce practice', 'skip review'], answer: 1, explanation: 'One resource avoids distraction.' },
    { q: 'Reading: The second sentence indicates ____.', options: ['a contrast', 'a list', 'a cause', 'a conclusion'], answer: 2, explanation: 'It shows cause.' },
    { q: 'Reading: The author implies that time is ____.', options: ['unlimited', 'limited', 'irrelevant', 'optional'], answer: 1, explanation: 'Time is limited.' },
    { q: 'Reading: The word “strategy” is closest to ____.', options: ['plan', 'joke', 'delay', 'risk'], answer: 0, explanation: 'Strategy means plan.' },
    { q: 'Reading: The passage recommends ____ before the exam.', options: ['new sources', 'latest models', 'no review', 'random videos'], answer: 1, explanation: 'Latest models are recommended.' },
    { q: 'Reading: The author uses the phrase “clear path” to mean ____.', options: ['simple route', 'difficult route', 'unknown plan', 'long delay'], answer: 0, explanation: 'Clear path = simple route.' },
    { q: 'Reading: The passage is mainly about ____.', options: ['planning study', 'sports training', 'movie review', 'weather'], answer: 0, explanation: 'Planning study.' },
    { q: 'Reading: The word “focus” is closest to ____.', options: ['attention', 'avoidance', 'silence', 'speed'], answer: 0, explanation: 'Focus means attention.' },
    { q: 'Reading: The passage states that reviewing mistakes ____.', options: ['is optional', 'is essential', 'is useless', 'is risky'], answer: 1, explanation: 'Reviewing mistakes is essential.' },
    { q: 'Reading: The author recommends ____ for listening practice.', options: ['0 minutes', '30 minutes daily', '2 minutes', 'once a week'], answer: 1, explanation: '30 minutes daily.' },
    { q: 'Reading: The word “consistent” is closest to ____.', options: ['steady', 'random', 'rare', 'weak'], answer: 0, explanation: 'Consistent means steady.' },
    { q: 'Reading: The passage implies that stress is caused by ____.', options: ['planning', 'distraction', 'practice', 'review'], answer: 1, explanation: 'Distraction leads to stress.' }
  ],
  listening: [
    { q: 'Listening: Tom: I will finish the report after dinner. What will Tom do after dinner?', options: ['Eat dinner', 'Finish the report', 'Go out', 'Sleep'], answer: 1, explanation: 'He said he will finish the report after dinner.' },
    { q: 'Listening: Sara: The class starts at 7. Why is Sara early?', options: ['She is late', 'She wants to prepare', 'She forgot', 'She is confused'], answer: 1, explanation: 'She wants to prepare early.' },
    { q: 'Listening: The man says the meeting was moved to Friday. When is the meeting now?', options: ['Monday', 'Friday', 'Sunday', 'Saturday'], answer: 1, explanation: 'It was moved to Friday.' },
    { q: 'Listening: The woman suggests reviewing mistakes. What is her advice?', options: ['Skip review', 'Review mistakes', 'Ignore errors', 'Change plan'], answer: 1, explanation: 'She advises reviewing mistakes.' },
    { q: 'Listening: The student says the listening part is hardest. What is his problem?', options: ['Grammar', 'Reading', 'Listening', 'Writing'], answer: 2, explanation: 'Listening part is hardest.' },
    { q: 'Listening: The teacher says practice daily. How often?', options: ['Weekly', 'Monthly', 'Daily', 'Never'], answer: 2, explanation: 'Practice daily.' },
    { q: 'Listening: The speaker mentions two models per day. What is the plan?', options: ['Two models daily', 'One model weekly', 'No models', 'Only reading'], answer: 0, explanation: 'Two models daily.' },
    { q: 'Listening: The man says the fee is 299 now. What is the current price?', options: ['299', '449', '199', '399'], answer: 0, explanation: 'Current price is 299.' },
    { q: 'Listening: The woman asks about the official account. What is needed?', options: ['Random account', 'Official account', 'No account', 'Personal account'], answer: 1, explanation: 'Official account is required.' },
    { q: 'Listening: He says he will send the receipt again. Why?', options: ['For fun', 'For confirmation', 'No reason', 'To delay'], answer: 1, explanation: 'It is for confirmation.' },
    { q: 'Listening: The student plans 30 minutes listening daily. What is the time?', options: ['10', '30', '60', '90'], answer: 1, explanation: '30 minutes daily.' },
    { q: 'Listening: The speaker says don’t repeat messages. Why?', options: ['It delays response', 'It helps faster', 'It is required', 'It is fun'], answer: 0, explanation: 'Repeating delays response.' },
    { q: 'Listening: The caller asks about the plan. What should he do first?', options: ['Ignore', 'Take the quiz', 'Pay later', 'Skip exam'], answer: 1, explanation: 'Take the quiz first.' },
    { q: 'Listening: The teacher says time management is key. What skill?', options: ['Listening', 'Time management', 'Grammar', 'Reading'], answer: 1, explanation: 'Time management is key.' },
    { q: 'Listening: She says she prefers mixed study. What does that mean?', options: ['Only videos', 'Only files', 'Mix of explanation and practice', 'No study'], answer: 2, explanation: 'Mix of explanation and practice.' },
    { q: 'Listening: The message says no backend. What does that imply?', options: ['Files sent automatically', 'Manual confirmation needed', 'No form needed', 'No receipt'], answer: 1, explanation: 'Manual confirmation needed.' },
    { q: 'Listening: The student says reading is hardest. What should he focus on?', options: ['Reading strategies', 'Math', 'Writing', 'Speaking'], answer: 0, explanation: 'Reading strategies.' },
    { q: 'Listening: The instructor says avoid many sources. Why?', options: ['Save time', 'Confuse yourself', 'Increase stress', 'All of these'], answer: 3, explanation: 'All of these are implied.' },
    { q: 'Listening: The plan mentions models 45–50. When?', options: ['Early days', 'Final days', 'Never', 'Anytime'], answer: 1, explanation: 'Final days focus.' },
    { q: 'Listening: The student says he will sleep early before exam. Why?', options: ['Stay up', 'Be fresh', 'Skip exam', 'Watch TV'], answer: 1, explanation: 'Be fresh for exam.' },
    { q: 'Listening: The schedule says two models. How many reading models?', options: ['Two', 'One', 'Five', 'None'], answer: 0, explanation: 'Two.' },
    { q: 'Listening: The announcement mentions official group. What is it for?', options: ['Updates', 'Games', 'Spam', 'Nothing'], answer: 0, explanation: 'Updates.' },
    { q: 'Listening: The student says he will send receipt twice. What is required?', options: ['Receipt twice', 'No receipt', 'Only once', 'Never'], answer: 0, explanation: 'Receipt twice required.' },
    { q: 'Listening: The teacher says track mistakes. What is that called?', options: ['Random list', 'Mistake log', 'Shopping list', 'Agenda'], answer: 1, explanation: 'Mistake log.' },
    { q: 'Listening: The speaker says 90 days access. What is the duration?', options: ['30 days', '60 days', '90 days', '120 days'], answer: 2, explanation: '90 days.' }
  ],
  vocab: [
    { q: 'Vocabulary: “increase” is closest to ____.', options: ['raise', 'lower', 'stop', 'hide'], answer: 0, explanation: 'Increase = raise.' },
    { q: 'Vocabulary: “efficient” means ____.', options: ['effective', 'slow', 'careless', 'empty'], answer: 0, explanation: 'Efficient = effective.' },
    { q: 'Vocabulary: “focus” means ____.', options: ['attention', 'noise', 'delay', 'risk'], answer: 0, explanation: 'Focus = attention.' },
    { q: 'Vocabulary: “schedule” means ____.', options: ['plan', 'mistake', 'break', 'loss'], answer: 0, explanation: 'Schedule = plan.' },
    { q: 'Vocabulary: “strategy” means ____.', options: ['plan', 'joke', 'argument', 'limit'], answer: 0, explanation: 'Strategy = plan.' },
    { q: 'Vocabulary: “review” means ____.', options: ['ignore', 'revise', 'cancel', 'forget'], answer: 1, explanation: 'Review = revise.' },
    { q: 'Vocabulary: “commitment” means ____.', options: ['dedication', 'delay', 'noise', 'escape'], answer: 0, explanation: 'Commitment = dedication.' },
    { q: 'Vocabulary: “benefit” means ____.', options: ['advantage', 'problem', 'stop', 'risk'], answer: 0, explanation: 'Benefit = advantage.' },
    { q: 'Vocabulary: “reduce” means ____.', options: ['decrease', 'increase', 'open', 'build'], answer: 0, explanation: 'Reduce = decrease.' },
    { q: 'Vocabulary: “confirm” means ____.', options: ['verify', 'deny', 'delay', 'forget'], answer: 0, explanation: 'Confirm = verify.' },
    { q: 'Vocabulary: “available” means ____.', options: ['ready', 'hidden', 'busy', 'late'], answer: 0, explanation: 'Available = ready.' },
    { q: 'Vocabulary: “source” means ____.', options: ['origin', 'exit', 'delay', 'limit'], answer: 0, explanation: 'Source = origin.' },
    { q: 'Vocabulary: “clarify” means ____.', options: ['explain', 'hide', 'mix', 'avoid'], answer: 0, explanation: 'Clarify = explain.' },
    { q: 'Vocabulary: “consistency” means ____.', options: ['regularity', 'noise', 'delay', 'risk'], answer: 0, explanation: 'Consistency = regularity.' },
    { q: 'Vocabulary: “practice” means ____.', options: ['training', 'sleep', 'travel', 'break'], answer: 0, explanation: 'Practice = training.' },
    { q: 'Vocabulary: “opportunity” means ____.', options: ['chance', 'mistake', 'rule', 'loss'], answer: 0, explanation: 'Opportunity = chance.' },
    { q: 'Vocabulary: “require” means ____.', options: ['need', 'avoid', 'cancel', 'forget'], answer: 0, explanation: 'Require = need.' },
    { q: 'Vocabulary: “official” means ____.', options: ['authorized', 'casual', 'private', 'random'], answer: 0, explanation: 'Official = authorized.' },
    { q: 'Vocabulary: “deadline” means ____.', options: ['due date', 'vacation', 'arrival', 'reward'], answer: 0, explanation: 'Deadline = due date.' },
    { q: 'Vocabulary: “update” means ____.', options: ['refresh', 'delay', 'cancel', 'stop'], answer: 0, explanation: 'Update = refresh.' },
    { q: 'Vocabulary: “feedback” means ____.', options: ['response', 'silence', 'exit', 'delay'], answer: 0, explanation: 'Feedback = response.' },
    { q: 'Vocabulary: “weakness” means ____.', options: ['flaw', 'strength', 'luck', 'speed'], answer: 0, explanation: 'Weakness = flaw.' },
    { q: 'Vocabulary: “improve” means ____.', options: ['enhance', 'drop', 'lose', 'hide'], answer: 0, explanation: 'Improve = enhance.' },
    { q: 'Vocabulary: “maintain” means ____.', options: ['keep', 'break', 'lose', 'ignore'], answer: 0, explanation: 'Maintain = keep.' },
    { q: 'Vocabulary: “efficiently” means ____.', options: ['effectively', 'slowly', 'randomly', 'carelessly'], answer: 0, explanation: 'Efficiently = effectively.' }
  ]
};

const planDetails = {
  rescue7: {
    title: 'خطة إنقاذ 7 أيام — تركيز عالي بدون تشتت',
    description: 'هذه الخطة للي اختباره قريب… نركز على الأعلى عائدًا: نماذج حديثة + مراجعة الأخطاء + تكنيكات الحل.',
    steps: [
      'يوم 1: تحديد مستوى سريع + قراءة التكنيكات الأساسية + حل نموذج حديث + مراجعة الأخطاء',
      'يوم 2: قرامر الأكثر تكرارًا + مودل حديث + كويز + 30 دقيقة استماع',
      'يوم 3: ريدينق استراتيجيات + مودل حديث + القطع الأكثر تكرارًا + 30 دقيقة استماع',
      'يوم 4: استثناءات القواعد + مراجعة مركزة + مودل + كويز',
      'يوم 5: مودل شامل (محاكاة وقت) + تصحيح مفصل للأخطاء',
      'يوم 6: مراجعة مفردات + تقنيات + نقاط الضعف + استماع 45 دقيقة',
      'يوم 7: مراجعة نهائية خفيفة + تجهيز نفسي + دخول الاختبار بثقة'
    ],
    note: 'حتى لو وقتك ضيق… الالتزام بهالخطة يفرق معك بإذن الله.'
  },
  plan15: {
    title: 'خطة 15 يوم — مركزة (أفضل خيار للي عنده أسبوعين)',
    description: 'قاعدة الخطة اليومية: Reading + Grammar + Listening (نصف ساعة يوميًا).',
    steps: [
      'اليوم 1: نماذج 5–7',
      'اليوم 2: نماذج 8–10',
      'اليوم 3: نماذج 11–14',
      'اليوم 4: نماذج 15–17',
      'اليوم 5: نماذج 18–20',
      'اليوم 6: نماذج 21–23',
      'اليوم 7: نماذج 24–26',
      'اليوم 8: نماذج 27–29',
      'اليوم 9: نماذج 30–32',
      'اليوم 10: نماذج 33–35',
      'اليوم 11: نماذج 36–38',
      'اليوم 12: نماذج 39–41',
      'اليوم 13: نماذج 42–44',
      'اليوم 14: نماذج 45–47',
      'اليوم 15: نماذج 48–50'
    ],
    note: 'بعد كل يوم… لازم تراجع أخطاءك 20–30 دقيقة. الأخطاء هي اللي ترفع درجتك.'
  },
  plan23: {
    title: 'خطة 23 يوم — متوازنة (مناسبة لو عندك وقت أكثر)',
    description: 'قاعدة الخطة اليومية: Reading مودلين + Grammar مودلين + Listening نصف ساعة يوميًا.',
    steps: [
      'اليوم 1: نماذج 5–6',
      'اليوم 2: نماذج 7–8',
      'اليوم 3: نماذج 9–10',
      'اليوم 4: نماذج 11–12',
      'اليوم 5: نماذج 13–14',
      'اليوم 6: نماذج 15–16',
      'اليوم 7: نماذج 17–18',
      'اليوم 8: نماذج 19–20',
      'اليوم 9: نماذج 21–22',
      'اليوم 10: نماذج 23–24',
      'اليوم 11: نماذج 25–26',
      'اليوم 12: نماذج 27–28',
      'اليوم 13: نماذج 29–30',
      'اليوم 14: نماذج 31–32',
      'اليوم 15: نماذج 33–34',
      'اليوم 16: نماذج 35–36',
      'اليوم 17: نماذج 37–38',
      'اليوم 18: نماذج 39–40',
      'اليوم 19: نماذج 41–42',
      'اليوم 20: نماذج 43–44',
      'اليوم 21: نماذج 45–46',
      'اليوم 22: نماذج 47–48',
      'اليوم 23: نماذج 49–50'
    ]
  },
  plan30: {
    title: 'خطة 30 يوم — تأسيس ثم نماذج',
    description: 'أيام 1–5 تأسيس + تكنيكات، ثم نماذج، ثم محاكاة ومراجعة.',
    steps: [
      'أيام 1–5: محاضرات تمهيدية + تكنيكات (Grammar/Reading/Listening)',
      'أيام 6–28: اتباع خطة 23 يوم (وتوزيعها براحتك)',
      'أيام 29–30: محاكاة + مراجعة الأخطاء + أعلى نقاط تكرار'
    ]
  }
};

const testimonials = [
  {
    name: 'شهد المالكي – الرياض',
    rating: '⭐⭐⭐⭐⭐',
    text: 'كنت أعيد الاختبار ودرجاتي ثابتة… اللي فرق معي إنّي وقفت تشتّت وصرت أمشي على خطة 14 يوم. أهم نصيحة: لا تكثر مصادر… خلك على خطة وحدة.',
    result: 'قبل 44 → بعد 71'
  },
  {
    name: 'تركي القحطاني – جدة',
    rating: '⭐⭐⭐⭐⭐',
    text: 'ركزت على المودلز الجديدة + كويزات التثبيت، وصار الحل أسرع بكثير. نصيحة: سوّ مؤقت 45 دقيقة للريدنق يوميًا.',
    result: 'قبل 58 → بعد 83'
  },
  {
    name: 'نورة العتيبي – القصيم',
    rating: '⭐⭐⭐⭐⭐',
    text: 'أنا كنت ضعيفة بالليسنينق… التدريب اليومي هو السر. نصيحتي: لا تسمعين كثير بدون حل—اسمعي وكتبي سبب غلطك.',
    result: 'قبل 49 → بعد 76'
  },
  {
    name: 'سارة الحربي – مكة',
    rating: '⭐⭐⭐⭐⭐',
    text: 'القواعد كانت تخوفني، بس لما مشيت “قاعدة + 20 سؤال” كل يوم، صار الموضوع ممتع. نصيحة: ثبّتي الـ If و Modals و Passive.',
    result: 'قبل 52 → بعد 80'
  },
  {
    name: 'عبدالله الغامدي – الدمام',
    rating: '⭐⭐⭐⭐⭐',
    text: 'أكثر شيء استفدت منه: تحليل أخطائي بعد اختبار تحديد المستوى. نصيحة: كل غلط اكتبه بملف “أخطائي” وارجع له قبل الاختبار.',
    result: 'قبل 60 → بعد 87'
  },
  {
    name: 'ريم الدوسري – الطائف',
    rating: '⭐⭐⭐⭐⭐',
    text: 'كنت أذاكر كثير بس بدون نتيجة… يوم رتّبت وقتي وصرت أخلص “نموذج + مراجعة”، اختلف كل شيء. نصيحة: لا تذاكر بدون مراجعة.',
    result: 'قبل 55 → بعد 79'
  },
  {
    name: 'ماجد الشهري – أبها',
    rating: '⭐⭐⭐⭐⭐',
    text: 'الريدنق كان يسحب وقتّي… تعلمت كيف أطلع الفكرة بسرعة. نصيحة: لا تقرأ القطعة كاملة أول—اقرأ السؤال ثم ارجع للقطعة.',
    result: 'قبل 64 → بعد 90'
  },
  {
    name: 'هلا الزهراني – المدينة',
    rating: '⭐⭐⭐⭐⭐',
    text: 'أنا أول مرة أختبر وكنت متوترة… الخطة عطتني ثقة. نصيحة: خفّفي توتر ليلة الاختبار وخلي آخر يوم مراجعة خفيفة.',
    result: 'قبل 47 → بعد 73'
  },
  {
    name: 'فيصل السبيعي – الرياض',
    rating: '⭐⭐⭐⭐⭐',
    text: 'كنت أحل نماذج بس بدون فهم… يوم بدأت “شرح مختصر + حل” صار مستوى الإجابة أقوى. نصيحة: لا تحفظ إجابات—افهم ليه.',
    result: 'قبل 69 → بعد 92'
  },
  {
    name: 'جود المطيري – حائل',
    rating: '⭐⭐⭐⭐⭐',
    text: 'درجاتي كانت 40-44 دايم… لما ركزت على الأسئلة المتكررة والكويزات اليومية انفتحت معي. نصيحة: لا تستهين بالكويزات—هي اللي تثبت.',
    result: 'قبل 43 → بعد 70'
  }
];

const galleryItems = [
  { title: 'تجربة موثقة', description: 'تم إخفاء البيانات الخاصة حفاظًا على الخصوصية.' },
  { title: 'نتيجة مطمئنة', description: 'خطة واضحة + مراجعة أخطاء = فرق ملحوظ.' },
  { title: 'تجربة طالب', description: 'ترتيب المحتوى خفف التشتت.' },
  { title: 'تجربة طالبة', description: 'الاستراتيجيات ركّزت نقاط الضعف.' },
  { title: 'مراجعة دقيقة', description: 'الكويزات ثبّتت المهارات.' },
  { title: 'خطة مناسبة', description: 'الخطة الذكية اختارت الأنسب للوقت.' },
  { title: 'تجربة مختصرة', description: 'نماذج حديثة + محاكاة وقت.' },
  { title: 'نتيجة مستقرة', description: 'دفتر الأخطاء ساعد في التحسن.' }
];

const faqItems = [
  { question: 'هل الدورة مناسبة للمبتدئين؟', answer: 'نعم، فيها محاضرات تمهيدية + تأسيس سريع، وبعدها تدريب بالنماذج.' },
  { question: 'هل لازم أبدأ بالتمهيدي؟', answer: 'اختياري. إذا مستواك ضعيف ابدأ فيه، وإذا مستواك متوسط ابدأ مباشرة بالقسم اللي يضعفك.' },
  { question: 'كم مدة الوصول للمحتوى؟', answer: '90 يوم من تاريخ التفعيل.' },
  { question: 'هل فيه تحديثات؟', answer: 'نعم، يتم تحديث التجميعات والخطط حسب المستجدات.' },
  { question: 'هل الدورة أونلاين؟', answer: 'نعم بالكامل.' },
  { question: 'هل الدورة فيها نماذج؟', answer: 'نعم، تدريب على نماذج متعددة والتركيز على الأحدث.' },
  { question: 'هل لازم أسوي اختبار الخطة الذكية؟', answer: 'نعم، الاختبار إلزامي لضمان خطة مناسبة بدون تشتت.' },
  { question: 'متى يتم تأكيد اشتراكي؟', answer: 'بأقرب وقت بعد وصول التحويل ومراجعة الإيصال.' },
  { question: 'إذا أرسلت أكثر من رسالة؟', answer: 'يفضل لا. كثرة الرسائل قد تؤخر ترتيب الردود.' },
  { question: 'هل أقدر أحول من تطبيق/تحويل سريع؟', answer: 'يفضل التحويل السريع عشان يوصل أسرع.' },
  { question: 'وش أكتب في خانة الغرض من التحويل؟', answer: 'مشتريات دورة STEP المكثفة – منصة عايد الرسمية (بديل: مشتريات دورة STEP المكثفة).' },
  { question: 'هل لازم أرفق الإيصال بالموقع؟', answer: 'نعم إلزامي لفتح زر الإرسال.' },
  { question: 'ليه أرسله مرة ثانية بتلجرام؟', answer: 'لأن الموقع static وما يرفع الملفات للحساب الرسمي — الإرسال النهائي يتم بتلجرام.' },
  { question: 'هل فيه دعم فني؟', answer: 'نعم خلال مدة الوصول للمحتوى.' },
  { question: 'هل فيه سياسة عدم مشاركة المحتوى؟', answer: 'نعم، ويوجد تعهد واضح قبل الإرسال.' },
  { question: 'هل أقدر أشارك ملفات الدورة مع أحد؟', answer: 'لا.' },
  { question: 'هل الدورة تضمن درجة محددة؟', answer: 'لا يوجد ضمان رقم محدد؛ النتائج تعتمد على التزامك وخطتك.' },
  { question: 'هل فيه جداول مذاكرة؟', answer: 'نعم (15 و23 يوم وغيرها).' },
  { question: 'هل فيه كويزات؟', answer: 'نعم ضمن المحتوى.' },
  { question: 'هل فيه مفردات (Vocab)؟', answer: 'نعم ضمن المكتبة الإضافية.' },
  { question: 'إذا ما حجزت موعد الاختبار؟', answer: 'عادي، اختر “لسا ما حجزت” وبنقترح لك خطة.' },
  { question: 'هل الموقع تابع لقياس؟', answer: 'لا، الموقع تابع لأكاديمية عايد للتدريب فقط.' },
  { question: 'هل أقدر أتواصل واتساب بدل تلجرام؟', answer: 'التأكيد عبر الحساب الرسمي في تلجرام، لكن ممكن تترك وسيلة تواصل إضافية.' },
  { question: 'هل التسجيل محدود؟', answer: 'قد يتم الاكتفاء بعدد محدد من المشتركين، والخصم له تاريخ نهاية واضح.' },
  { question: 'كيف أعرف الحساب الرسمي؟', answer: 'الحساب الرسمي: @Ayed_Academy_2026 فقط.' }
];

const policyContent = {
  privacy: 'نحترم خصوصيتك بشكل كامل. البيانات التي يتم إدخالها في نموذج التسجيل تستخدم فقط لمراجعة طلب الاشتراك وتسريع التأكيد وتحسين الخطة المقترحة. رفع الإيصال داخل الموقع هدفه التأكد قبل فتح زر الإرسال، ولا يتم إرساله تلقائيًا للحساب الرسمي. التأكيد النهائي يتم بإرسال الإيصال للحساب الرسمي في تلجرام.',
  refund: 'نظرًا لأن الدورة محتوى رقمي يتم تفعيله ويُمنح وصولًا للمحتوى: قبل التفعيل يمكن تقديم طلب مراجعة للحساب الرسمي. بعد التفعيل لا يتم الاسترجاع بعد إرسال روابط الدخول وتفعيل الوصول. أي حالة استثنائية يتم النظر فيها حسب تفاصيل الطلب.',
  terms: 'أتعهد بعدم نشر أو مشاركة أو تسريب أي جزء من محتوى الدورة. أفهم أن أي مخالفة قد تؤدي إلى إلغاء الاشتراك دون تعويض. أؤكد أن التحويل تم على البيانات الرسمية المذكورة في الموقع. أفهم أن التأكيد النهائي يتطلب إرسال الإيصال للحساب الرسمي في تلجرام.',
  fraud: 'تنبيه الاحتيال: الحساب الرسمي الوحيد هو @Ayed_Academy_2026 وأي تحويل خارج البيانات الرسمية غير معتمد.'
};

const assistantActions = [
  {
    label: 'كم سعر الدورة؟',
    response: 'السعر الحالي 299 ريال (عرض حتى 29/01/2026) وبعدها يرجع السعر الرسمي 449 ريال.',
    links: [
      { text: 'روح للدفع', href: '#payment' },
      { text: 'ابدأ اختبار الخطة', href: '#quiz' }
    ]
  },
  {
    label: 'طريقة الدفع',
    response: 'التحويل البنكي على بنك الإنماء، مع أزرار نسخ لكل معلومة.',
    links: [
      { text: 'بيانات التحويل', href: '#payment' },
      { text: 'افتح نموذج التسجيل', href: '#register' }
    ]
  },
  {
    label: 'وش محتوى الدورة؟',
    response: 'المحتوى مرتب: تمهيدي + قرامر + ريدينق + ليسننق + استثناءات + مكتبة إضافية.',
    links: [
      { text: 'محتوى الدورة', href: '#modules' }
    ]
  },
  {
    label: 'متى يوصلني الدخول؟',
    response: 'بعد إرسال الإيصال للحساب الرسمي، يتم التأكيد بأقرب وقت بعد وصول التحويل.',
    links: [
      { text: 'افتح تلجرام الرسمي', href: 'https://t.me/Ayed_Academy_2026' }
    ]
  },
  {
    label: 'اختباري قريب… وش أسوي؟',
    response: 'سو اختبار الخطة الذكية وبيعطيك خطة إنقاذ تناسب وقتك.',
    links: [
      { text: 'ابدأ الخطة الذكية الآن', href: '#quiz' }
    ]
  },
  {
    label: 'هل الدورة تناسب المبتدئ؟',
    response: 'نعم، فيها تمهيدي وتأسيس سريع قبل النماذج.',
    links: [
      { text: 'كيف تمشي بالدورة؟', href: '#study' }
    ]
  },
  {
    label: 'سياسة الاسترجاع',
    response: 'الاسترجاع قبل التفعيل فقط، وبعد التفعيل لا يتم الاسترجاع.',
    links: [
      { text: 'سياسة الاسترجاع', href: '#footer' }
    ]
  },
  {
    label: 'التواصل مع الحساب الرسمي',
    response: 'التواصل عبر الحساب الرسمي فقط @Ayed_Academy_2026.',
    links: [
      { text: 'افتح تلجرام الرسمي', href: 'https://t.me/Ayed_Academy_2026' }
    ]
  }
];

const shareMessages = [
  'دورة STEP المكثفة 2026 — خطة عملية + تدريب يومي، التسجيل قبل 29/01 ✅',
  'تبغى ترفع درجتك بدون تشتت؟ اختبر مستواك وخذ خطة تلقائيًا 🎯',
  'السعر الحالي 299 بدل 449 — المقاعد محدودة 🎟️',
  'محتوى 2026 محدث حسب آخر تحديثات قياس ✅'
];
