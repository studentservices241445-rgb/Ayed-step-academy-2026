// js/questions.js
// Original practice questions (not official). Difficulty: hard-ish.

export const QUESTION_BANK = {
  grammar: [
    {id:"G1", prompt:"If he ____ earlier, he would have caught the train.", options:["leaves","left","had left","would leave"], answer:2, exp:"Third conditional: had + past participle."},
    {id:"G2", prompt:"No sooner ____ the meeting started than the power went out.", options:["had","has","did","was"], answer:0, exp:"No sooner + had + subject + past participle."},
    {id:"G3", prompt:"She insisted that he ____ the report before noon.", options:["submits","submit","submitted","submitting"], answer:1, exp:"Subjunctive after insist: base form."},
    {id:"G4", prompt:"Hardly ____ when the phone rang again.", options:["I sat down","had I sat down","I had sat down","did I sit down"], answer:1, exp:"Hardly + inversion (had + subject)."},
    {id:"G5", prompt:"The proposal, along with several supporting documents, ____ on the table.", options:["are","were","is","have been"], answer:2, exp:"Main subject 'proposal' singular."},
    {id:"G6", prompt:"Neither the manager nor the assistants ____ willing to stay late.", options:["was","is","are","be"], answer:2, exp:"Nearer subject 'assistants' plural."},
    {id:"G7", prompt:"It’s high time you ____ your priorities straight.", options:["get","got","have got","getting"], answer:1, exp:"It's high time + past simple."},
    {id:"G8", prompt:"By the time we arrived, the show ____.", options:["has started","had started","starts","would start"], answer:1, exp:"Past perfect for earlier past."},
    {id:"G9", prompt:"He acts as if he ____ everything.", options:["knows","knew","had known","knowing"], answer:1, exp:"As if + past simple for unreal present."},
    {id:"G10", prompt:"The more you practice, the ____ you become.", options:["good","better","best","well"], answer:1, exp:"Comparative structure: the + comparative."},
    {id:"G11", prompt:"Not only ____ late, but he also forgot the documents.", options:["he arrived","did he arrive","he did arrive","arrived he"], answer:1, exp:"Not only + inversion."},
    {id:"G12", prompt:"I’d rather you ____ me before making a decision.", options:["tell","told","have told","telling"], answer:1, exp:"Would rather + past simple."},
    {id:"G13", prompt:"The committee suggested that the policy ____ revised.", options:["is","be","was","being"], answer:1, exp:"Suggest + base form (be)."},
    {id:"G14", prompt:"He’s the kind of person ____ never gives up.", options:["which","who","whom","whose"], answer:1, exp:"People → who."},
    {id:"G15", prompt:"This is the first time I ____ such a complicated case.", options:["see","saw","have seen","had seen"], answer:2, exp:"First time + present perfect."},
    {id:"G16", prompt:"The book was so boring that I ____ asleep.", options:["fall","fell","fallen","was falling"], answer:1, exp:"Past simple narrative."},
    {id:"G17", prompt:"Had it not been for your help, we ____.", options:["fail","would fail","would have failed","failed"], answer:2, exp:"Inversion for third conditional."},
    {id:"G18", prompt:"He denied ____ the confidential files.", options:["to access","accessing","access","accessed"], answer:1, exp:"Deny + gerund."},
    {id:"G19", prompt:"I’m not used to ____ up this early.", options:["get","getting","got","have gotten"], answer:1, exp:"Used to + gerund."},
    {id:"G20", prompt:"She apologized for ____ the appointment.", options:["miss","missing","to miss","missed"], answer:1, exp:"Apologize for + gerund."},
    {id:"G21", prompt:"Only after the results were published ____ the truth.", options:["we realized","did we realize","we did realize","realized we"], answer:1, exp:"Only after + inversion."},
    {id:"G22", prompt:"He is believed ____ abroad for years.", options:["to live","to have lived","living","lived"], answer:1, exp:"Perfect infinitive for earlier action."},
    {id:"G23", prompt:"The task must ____ by tomorrow morning.", options:["finish","be finished","finished","finishing"], answer:1, exp:"Passive: be + past participle."},
    {id:"G24", prompt:"I wish I ____ more time last weekend.", options:["have","had","had had","would have"], answer:2, exp:"Wish about past → past perfect."},
    {id:"G25", prompt:"The company, as well as its partners, ____ expanding.", options:["are","is","were","have"], answer:1, exp:"Main subject singular."},
    {id:"G26", prompt:"He prevented me from ____ the truth.", options:["tell","telling","to tell","told"], answer:1, exp:"Prevent from + gerund."},
    {id:"G27", prompt:"Despite ____ tired, she kept working.", options:["be","being","to be","was"], answer:1, exp:"Despite + gerund/noun."},
    {id:"G28", prompt:"He speaks English as though he ____ a native.", options:["is","was","were","being"], answer:2, exp:"As though + were (subjunctive)."},
    {id:"G29", prompt:"Neither of the answers ____ correct.", options:["are","is","were","be"], answer:1, exp:"Neither (singular)."},
    {id:"G30", prompt:"A number of students ____ absent today.", options:["is","was","are","has"], answer:2, exp:"A number of + plural verb."},
    {id:"G31", prompt:"The number of students ____ increasing.", options:["is","are","were","have"], answer:0, exp:"The number of + singular verb."},
    {id:"G32", prompt:"If it ____ tomorrow, we’ll reschedule.", options:["rains","rained","had rained","would rain"], answer:0, exp:"First conditional: present simple."},
    {id:"G33", prompt:"She would have joined us if she ____ earlier.", options:["knows","knew","had known","would know"], answer:2, exp:"Third conditional."},
    {id:"G34", prompt:"I prefer tea ____ coffee.", options:["than","to","over","from"], answer:1, exp:"Prefer A to B."},
    {id:"G35", prompt:"This is the man ____ car was stolen.", options:["who","whom","whose","which"], answer:2, exp:"Possession: whose."},
    {id:"G36", prompt:"The report needs ____ before submission.", options:["review","to review","reviewing","reviewed"], answer:2, exp:"Need + gerund = passive meaning."},
    {id:"G37", prompt:"He had his laptop ____ yesterday.", options:["repair","to repair","repaired","repairing"], answer:2, exp:"Have something done."},
    {id:"G38", prompt:"I’d like to know ____ you did that.", options:["how","which","what","whose"], answer:0, exp:"How = manner."},
    {id:"G39", prompt:"Scarcely ____ when the alarm started.", options:["we arrived","had we arrived","we had arrived","did we arrive"], answer:1, exp:"Scarcely + inversion."},
    {id:"G40", prompt:"The doctor advised that she ____ more water.", options:["drinks","drink","drank","drinking"], answer:1, exp:"Advise + base form."},
    {id:"G41", prompt:"I can’t stand ____ for late people.", options:["wait","waiting","to wait","waited"], answer:1, exp:"Can’t stand + gerund."},
    {id:"G42", prompt:"It was ____ a difficult question that many failed.", options:["so","such","too","very"], answer:1, exp:"Such + noun phrase."},
    {id:"G43", prompt:"He is the only one who ____ the answer.", options:["know","knows","knowing","known"], answer:1, exp:"Singular 'one' → knows."},
    {id:"G44", prompt:"We look forward to ____ from you soon.", options:["hear","hearing","to hear","heard"], answer:1, exp:"Look forward to + gerund."},
    {id:"G45", prompt:"The sooner you start, the ____ it gets.", options:["easy","easier","easiest","easily"], answer:1, exp:"the + comparative."},
    {id:"G46", prompt:"Not until he apologized ____ to speak to him again.", options:["I agreed","did I agree","I did agree","agreed I"], answer:1, exp:"Not until + inversion."},
    {id:"G47", prompt:"She has been working here ____ 2022.", options:["for","since","from","by"], answer:1, exp:"Since + point in time."},
    {id:"G48", prompt:"He has worked here ____ three years.", options:["since","for","by","during"], answer:1, exp:"For + duration."},
    {id:"G49", prompt:"The email was sent ____ mistake.", options:["by","in","on","with"], answer:0, exp:"By mistake (idiom)."},
    {id:"G50", prompt:"You ____ have told me earlier!", options:["should","must","would","might"], answer:0, exp:"Should have + pp = criticism."},
    {id:"G51", prompt:"He ____ be at home; his car is outside.", options:["must","might","should","could"], answer:0, exp:"Must = strong deduction."},
    {id:"G52", prompt:"He ____ be at home; I’m not sure.", options:["must","might","would","shall"], answer:1, exp:"Might = possibility."},
    {id:"G53", prompt:"If I ____ you, I’d focus on weak sections first.", options:["am","were","was","be"], answer:1, exp:"If I were you (subjunctive)."},
    {id:"G54", prompt:"He avoided ____ about the issue.", options:["talk","talking","to talk","talked"], answer:1, exp:"Avoid + gerund."},
    {id:"G55", prompt:"The contract is expected ____ soon.", options:["sign","to sign","to be signed","signing"], answer:2, exp:"Passive infinitive."},
    {id:"G56", prompt:"I’ve got a lot ____ this week.", options:["do","to do","doing","done"], answer:1, exp:"A lot to do."},
    {id:"G57", prompt:"She succeeded in ____ the deadline.", options:["meet","meeting","to meet","met"], answer:1, exp:"Succeed in + gerund."},
    {id:"G58", prompt:"This is ____ information that I can’t ignore it.", options:["so","such","too","very"], answer:1, exp:"Such + noun."},
    {id:"G59", prompt:"He speaks as if he ____ the manager.", options:["is","was","were","being"], answer:2, exp:"As if + were."},
    {id:"G60", prompt:"I’m having my house ____ next month.", options:["paint","painting","painted","to paint"], answer:2, exp:"Have something done."}
  ],

  vocab: [
    {id:"V1", prompt:"Choose the closest meaning to: 'meticulous'", options:["careless","thorough","random","rapid"], answer:1, exp:"Meticulous = very careful and precise."},
    {id:"V2", prompt:"'Inevitable' most nearly means:", options:["avoidable","certain to happen","rare","illegal"], answer:1, exp:"Inevitable = unavoidable."},
    {id:"V3", prompt:"'Reluctant' is closest to:", options:["eager","unwilling","confident","joyful"], answer:1, exp:"Reluctant = not willing."},
    {id:"V4", prompt:"'Alleviate' means:", options:["worsen","reduce","confuse","ignore"], answer:1, exp:"Alleviate = make less severe."},
    {id:"V5", prompt:"'Ambiguous' means:", options:["clear","uncertain","fast","ancient"], answer:1, exp:"Ambiguous = unclear/multiple meanings."},
    {id:"V6", prompt:"'Scarce' most nearly means:", options:["plentiful","rare","tiny","cheap"], answer:1, exp:"Scarce = not enough / rare."},
    {id:"V7", prompt:"'Substantial' means:", options:["minor","significant","empty","late"], answer:1, exp:"Substantial = large/important."},
    {id:"V8", prompt:"'Conceal' means:", options:["hide","show","build","measure"], answer:0, exp:"Conceal = hide."},
    {id:"V9", prompt:"'Deter' means:", options:["encourage","prevent","repair","repeat"], answer:1, exp:"Deter = discourage/prevent."},
    {id:"V10", prompt:"'Implement' means:", options:["carry out","cancel","delay","forget"], answer:0, exp:"Implement = put into action."},
    ...Array.from({length:50}, (_,i)=> {
      const idx = i+11;
      const pairs = [
        ["pragmatic","practical"],
        ["coherent","logical"],
        ["obsolete","outdated"],
        ["resilient","able to recover"],
        ["approximate","rough/close"],
        ["abrupt","sudden"],
        ["comply","obey"],
        ["derive","get from"],
        ["exceed","go beyond"],
        ["facilitate","make easier"]
      ];
      const [w,mean] = pairs[i % pairs.length];
      const wrong = [
        ["dangerous","expensive","silent"],
        ["random","fragile","official"],
        ["modern","accurate","friendly"],
        ["weak","lazy","ordinary"],
        ["exact","invisible","foreign"]
      ][i % 5];
      const opts = [mean, ...wrong].sort(()=>Math.random()-0.5);
      return {
        id:`V${idx}`,
        prompt:`Choose the closest meaning to: '${w}'`,
        options: opts,
        answer: opts.indexOf(mean),
        exp: `${w} ≈ ${mean}`
      };
    })
  ],

  reading: [
    {id:"R1", passage:"A recent survey suggests that people underestimate how much sleep influences memory consolidation.", q:"What is the main idea?", options:["Sleep has no effect on memory.","Sleep can strengthen memory.","Surveys are unreliable.","People remember everything."], answer:1, exp:"Passage says sleep influences memory consolidation."},
    {id:"R2", passage:"Although electric cars reduce local air pollution, their overall impact depends on how electricity is generated.", q:"The overall impact depends on:", options:["car color","battery size only","source of electricity","driver age"], answer:2, exp:"Depends on electricity generation."},
    ...Array.from({length:58},(_,i)=>{
      const id = i+3;
      const topics = [
        ["Urban planners argue that walkable neighborhoods improve public health and reduce traffic congestion.","What is implied?","Walking can benefit health and traffic.","Cars are always faster.","Health is unrelated to cities.","Congestion is unavoidable.",0],
        ["Some scientists warn that correlation does not necessarily indicate causation, especially in complex social data.","The statement emphasizes that:","Links in data may be misleading.","All correlations are causal.","Social data is simple.","Causation is irrelevant.",0],
        ["The company’s new policy aims to enhance transparency by publishing quarterly performance metrics.","The policy aims to:","increase transparency","hide results","delay reports","reduce metrics",0],
        ["Despite limited resources, the team delivered a prototype by prioritizing essential features.","They succeeded by:","focusing on essentials","adding features","waiting longer","avoiding prototypes",0],
        ["Many consumers prefer sustainable packaging, even if it costs slightly more.","Consumers prefer:","eco-friendly packaging","lower prices only","plastic always","no packaging",0],
        ["The historian noted that primary sources often reveal contradictions absent from later summaries.","Primary sources often:","show contradictions","are always perfect","are shorter","lack details",0]
      ];
      const t = topics[i % topics.length];
      const passage = t[0];
      const q = t[1];
      const correct = t[2];
      const wrong1 = t[3], wrong2 = t[4], wrong3 = t[5];
      const opts = [correct, wrong1, wrong2, wrong3].sort(()=>Math.random()-0.5);
      return {
        id:`R${id}`,
        passage,
        q,
        options: opts,
        answer: opts.indexOf(correct),
        exp: "Choose the option that matches the passage meaning."
      };
    })
  ],

  listening: [
    {id:"L1", dialogue:"A: Did you submit the application?\nB: Not yet. I’m waiting for the recommendation letter.", q:"Why hasn’t B submitted the application?", options:["He forgot.","He is waiting for a letter.","He already submitted it.","He lost the form."], answer:1, exp:"B says waiting for recommendation letter."},
    {id:"L2", dialogue:"A: The train leaves in ten minutes.\nB: Then we should take a taxi to the station.", q:"What will they probably do?", options:["Walk slowly.","Take a taxi.","Miss the train on purpose.","Cancel the trip."], answer:1, exp:"They plan to take a taxi."},
    ...Array.from({length:58},(_,i)=>{
      const id = i+3;
      const scenarios = [
        ["A: The lecture was challenging.\nB: True, but the examples made it clearer.","What helped B understand?","Examples","Silence","Music","A phone call",0],
        ["A: Can we reschedule the meeting?\nB: Sure, how about Thursday afternoon?","What is B doing?","Suggesting a new time","Ending the project","Refusing","Asking for money",0],
        ["A: I’m not confident about the reading section.\nB: Focus on skimming first, then scan for keywords.","What advice is given?","Use skimming and scanning","Memorize every word","Skip reading","Only guess randomly",0],
        ["A: The payment didn’t appear in my bank.\nB: Sometimes transfers take time—use instant transfer if possible.","What is the issue?","Transfer delay","Wrong exam date","Lost ID","No internet",0],
        ["A: I keep mixing up 'since' and 'for'.\nB: 'Since' is a point in time, 'for' is a duration.","What is B explaining?","Grammar difference","Pronunciation","Spelling","Vocabulary only",0],
        ["A: Are seats limited?\nB: Yes, once we hit the cap, registration pauses.","What does B mean?","Seats are limited","Unlimited seats","Free access","No registration",0]
      ];
      const s = scenarios[i % scenarios.length];
      const dialogue = s[0];
      const q = s[1];
      const correct = s[2];
      const wrong1 = s[3], wrong2 = s[4], wrong3 = s[5];
      const opts = [correct, wrong1, wrong2, wrong3].sort(()=>Math.random()-0.5);
      return { id:`L${id}`, dialogue, q, options: opts, answer: opts.indexOf(correct), exp:"Pick the option consistent with the dialogue." };
    })
  ]
};
