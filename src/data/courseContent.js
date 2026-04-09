// Pure data — no JSX. Never modify lessons, exercises, or quotes.
export const CONTENT = {
  0: {
    tagline: "Before empathy research, before prototypes — train your brain to see opportunity in the noise everyone else has normalized.",
    lessons: [
      { title: "Why Most People Miss Opportunities", body: "The brain is an efficiency engine. It categorizes, habituates, and stops questioning familiar things. Every great business opportunity exists inside a frustration most people have accepted as normal. The skill is deliberately suspending normalization — looking at familiar systems and asking 'but why does it have to work this way?' as if for the first time." },
      { title: "Paul Graham: Live in the Future", body: "The future already exists — it's just unevenly distributed. Some people are already living 3–5 years ahead of the mainstream. When you notice something missing from that vantage point, that gap is a startup idea. Go deeper into your domain than anyone else, then look back at what's still broken." },
      { title: "MJ DeMarco: Tune to Pain Language", body: "Listen for: 'I hate when...' · 'Why can't it just...' · 'I always end up doing it manually.' That last one is gold — a workaround is a business hiding in plain sight. These signals are everywhere in Reddit, TikTok comments, App Store reviews. You just need to tune your frequency." },
      { title: "The 5 Opportunity Lenses", body: "Friction (pain language) · Stranger (question the normal) · Leading Edge (live in the future) · Workaround Audit (what do you do manually?) · Intersection (where do your domains collide?). Any one lens can find an opportunity. Used together, they form a radar." },
    ],
    exercises: [
      { num:"00.1", title:"Pain Language Hunt",      desc:"Pick 3 communities in domains you're curious about. Spend 45 min tuned only to pain language. Capture every complaint, workaround, and 'why can't it just' you find.", time:"45 min",  illu:"pain" },
      { num:"00.2", title:"Workaround Diary",        desc:"For 7 days, every time you do something manually that should be automated, write it down. Which workaround appears most often? That frequency is your signal.", time:"7 days",  illu:"observe" },
      { num:"00.3", title:"The 5 Lenses in Practice",desc:"For each of the 5 lenses, write what you look for and your specific observations this week. At least 2 observations per lens before moving to Phase 01.", time:"60 min",  illu:"map" },
      { num:"00.4", title:"Alien Audit",             desc:"Pick any industry. Write 10 things that would seem completely insane to someone seeing it for the first time. Each absurdity is a potential opportunity.", time:"30 min",  illu:"globe" },
      { num:"00.5", title:"Edge User Interview",     desc:"Find someone 3–5 years ahead of the mainstream in a domain you care about. Ask: 'What tools are you using that nobody else is? What's still missing?'", time:"60 min",  illu:"interview" },
      { num:"00.6", title:"Opportunity Hypothesis",  desc:"Write: 'I believe [type of person] has a problem with [situation] because [evidence]. Nobody has solved this well because [observation].' This is your entry to Phase 01.", time:"30 min",  illu:"pov" },
    ],
    quote: { text: "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems — preferably problems you have yourself.", attr: "Paul Graham · Y Combinator" },
  },
  1: {
    tagline: "Great businesses aren't born from spreadsheets. They're born from understanding people at a level that surprises even them.",
    lessons: [
      { title: "Empathy Is Competitive Advantage", body: "Most founders skip this phase. They have an idea, they think they know the customer, and they start building. This is why 90% of startups fail — not from bad execution, but from solving a problem nobody actually has. 10 hours of genuine user research can save you 6 months of building the wrong thing." },
      { title: "The Three Modes of Empathy", body: "Observe: Watch people in their natural environment without interrupting. Note workarounds and unexpected behaviors. Engage: Conduct deep interviews — ask 'why?' five times. Focus on stories, not opinions. The best question: 'Tell me about the last time this happened.' Immerse: Experience the problem yourself." },
      { title: "What You're Really Looking For", body: "Not what people say they want — what they actually do. The gap between what users say and what they do is where the real insight lives. Look for: workarounds (improvised fixes), normalizations (pains they've stopped mentioning), and moments of delight (unexpected positive reactions)." },
    ],
    exercises: [
      { num:"01.1", title:"The 5 Why's Interview",  desc:"Interview one person for 30 minutes. For every answer they give, ask 'why?' five times. Document the full chain. The fifth why is almost always the real problem.", time:"60 min",   illu:"interview" },
      { num:"01.2", title:"Fly on the Wall",        desc:"Observe someone completing a task without speaking. Write 10 raw observations: behaviors, frustrations, workarounds, body language. Don't interpret yet — just capture.", time:"45 min",   illu:"observe" },
      { num:"01.3", title:"Build an Empathy Map",   desc:"Fill in what your user Says, Thinks, Does, and Feels using your research. Add Pains and Gains. Share with someone unfamiliar for a fresh perspective.", time:"30 min",   illu:"map" },
      { num:"01.4", title:"Extreme User Interview", desc:"Find someone who experiences the problem intensely — a power user or someone completely excluded by existing solutions. Edge cases reveal what average users hide.", time:"90 min",   illu:"interview" },
      { num:"01.5", title:"Immersion Challenge",    desc:"For one day, live as your target user. Use only the tools they use. Navigate the friction they face. Write a reflection: what surprised you most?", time:"Full day", illu:"observe" },
      { num:"01.6", title:"Pattern Clustering",     desc:"Write each key observation on a sticky note. Group similar notes. Name each cluster. The cluster that appears most often is your signal pointing toward the real problem.", time:"45 min",   illu:"map" },
    ],
    quote: { text: "Empathy is the radical act of setting aside your own perspective to understand another person's reality — and it's the most powerful tool in business.", attr: "Tim Brown · CEO of IDEO" },
  },
  2: {
    tagline: "A brilliant solution to the wrong problem is still failure. Define the problem so precisely that the solution becomes almost obvious.",
    lessons: [
      { title: "The Point of View Statement", body: "[User] needs [need] because [insight]. A real person (not a demographic), a genuine need (not a feature), and an emotional insight. 'Maria needs an app' is a solution. 'Maria needs a way to share programming without admin overhead because it makes her feel like a secretary, not a coach' is a POV." },
      { title: "'How Might We' Questions", body: "HMW questions are born directly from great POV statements. They reframe the problem as an open, optimistic invitation to ideate — without locking in solutions. A good POV makes the HMW practically write itself. Generate 20 HMW questions before filtering to your top 3." },
      { title: "Map the Friction Peaks", body: "Draw your user's end-to-end journey and rate each step for friction. The highest-friction moments are your product opportunities. Your job is to own one peak pain point and eliminate it completely. The journey map also reveals your competition — the existing workarounds at each friction peak." },
    ],
    exercises: [
      { num:"02.1", title:"Write 5 POV Statements",      desc:"Using your empathy research, write 5 different POV statements for the same user. Each emphasizes a different insight. Read them aloud — which makes you lean forward?", time:"45 min", illu:"pov" },
      { num:"02.2", title:'"How Might We" Sprint',       desc:"Take your best POV. Generate 20 HMW questions in 10 minutes. No filtering. Circle the 3 most exciting. Those 3 questions drive your entire ideation session.", time:"30 min", illu:"hmw" },
      { num:"02.3", title:"Journey Map Audit",           desc:"Draw your user's end-to-end journey. Rate each step 1–10 for friction. Circle the top 3 pain points. Your product opportunity lives at those friction peaks.", time:"60 min", illu:"observe" },
      { num:"02.4", title:"Problem Reframe Challenge",   desc:"Take your POV and rewrite it 10 ways — zoom in, zoom out, flip it, look upstream, downstream. Which reframe reveals a more urgent or larger problem?", time:"30 min", illu:"pov" },
      { num:"02.5", title:"Existing Solutions Audit",    desc:"List every way your user currently solves this problem: apps, spreadsheets, manual workarounds, ignoring it. Each alternative is a competitor. What do they all miss?", time:"45 min", illu:"observe" },
      { num:"02.6", title:"Market-Size Stress Test",     desc:"How many people share this problem? What are they paying today? Multiply. Is this a $100K market or a $100M market? Your ambition level should match the evidence.", time:"45 min", illu:"metric" },
    ],
    quote: { text: "If I had one hour to save the world, I would spend 55 minutes defining the problem and only 5 minutes finding the solution.", attr: "Albert Einstein · cited in IDEO methodology" },
  },
  3: {
    tagline: "The best idea is rarely the first idea. Ideation is a discipline — defer judgment and generate until you surprise yourself.",
    lessons: [
      { title: "Quantity Is the Strategy", body: "The fundamental rule: defer judgment. The moment you evaluate an idea, you stop generating. The best idea is rarely #4 — it's usually #37, and it only exists because you pushed past #20. IDEO's brainstorming rules: go for volume, build on ideas ('yes, and...'), encourage wild ideas, stay on topic, and be visual." },
      { title: "IDEO's Three Lenses: DFV", body: "Desirability: Do people actually want this? Always first. Feasibility: Can we build it with available resources today? Viability: Can we build a sustainable business around it? The sweet spot where all three overlap is where great businesses live. Start with desirability and work outward." },
      { title: "Analogous Inspiration", body: "The best ideas often come from unrelated domains. IDEO asks: how does a hospital solve patient handoffs? How could a restaurant concept apply to software? Borrowing from unrelated industries breaks obvious thinking and reveals unexpected solutions. What would Amazon, Disney, the military, or a theme park do?" },
    ],
    exercises: [
      { num:"03.1", title:"Crazy 8s",           desc:"Fold paper into 8 panels. 8-minute timer. One different concept per panel for your top HMW. No text — rough visuals only. Speed prevents self-censorship.", time:"20 min", illu:"crazy8" },
      { num:"03.2", title:"50 Ideas Sprint",    desc:"Write 50 different ideas for your HMW. Wild, stupid, obvious, impossible — all welcome. The remarkable ideas only appear after you exhaust the obvious first 20.", time:"40 min", illu:"sketch" },
      { num:"03.3", title:"Reverse Brainstorm", desc:"Ask: 'How would I make this problem as bad as possible?' Write 20 terrible ideas. Then flip each one. Best concepts often hide inside the opposites of the worst ideas.", time:"30 min", illu:"pov" },
      { num:"03.4", title:"Analogous World Tour",desc:"Pick 5 unrelated industries. For each, write how they solve a similar problem. What would Amazon, Disney, the military, a hospital, and a pizza chain do? Borrow the best.", time:"45 min", illu:"globe" },
      { num:"03.5", title:"DFV Scoring",        desc:"Take your top 10 ideas. Rate each on Desirability, Feasibility, and Viability (1–10). Highest combined score moves to prototype. Don't let feasibility kill desirability prematurely.", time:"30 min", illu:"metric" },
      { num:"03.6", title:"Concept Poster",     desc:"For your top 2 ideas, create a one-page concept poster: sketch, target user, core benefit, and one empathy research quote that proves the need.", time:"60 min", illu:"sketch" },
    ],
    quote: { text: "Don't think outside the box. Find a better box. Constraints are gifts — they force creativity in directions that unconstrained thinking never reaches.", attr: "Stanford d.school · Design Thinking Bootcamp" },
  },
  4: {
    tagline: "A prototype is a question made physical. The faster you build, the faster you learn — and the less it costs to be wrong.",
    lessons: [
      { title: "The Prototype Mindset", body: "Prototypes are not finished products. They are learning artifacts. The critical question: 'What question am I testing?' If you can't state the question, you're building features, not learning. Never fall in love with your prototype — emotional attachment is the surest sign you've stopped learning." },
      { title: "The Prototype Spectrum", body: "Paper Prototype → Storyboard → Role-Play / Bodystorm → Clickable Wireframe → Concierge MVP → Coded MVP. Always start at the lowest-fidelity prototype that can answer your question. The fidelity of the prototype should match the risk of the assumption being tested." },
      { title: "The Concierge MVP", body: "Do manually what your product would automate. Zappos photographed shoes in stores before building e-commerce infrastructure. Airbnb's founders stayed in their own listings before building booking software. Prove the value, then build the system. The Minimum Lovable Product — not just viable, but genuinely delightful." },
    ],
    exercises: [
      { num:"04.1", title:"Assumption Inventory",      desc:"List every assumption your business rests on. Rate by Impact (H/M/L) and Certainty (H/M/L). High-impact + low-certainty assumptions are your prototype targets — test those first.", time:"30 min",   illu:"assumption" },
      { num:"04.2", title:"5-Minute Paper Prototype",  desc:"Set a 5-minute timer. Draw every screen or touchpoint on paper. Show to a potential user without explanation. Watch them 'use' it. Note every pause and confusion.", time:"20 min",   illu:"paper" },
      { num:"04.3", title:"Storyboard Your Story",     desc:"Draw 8 frames: user's life before → discovers your product → first use → key value moment → transformation. This is your future pitch deck and product spec in one artifact.", time:"45 min",   illu:"sketch" },
      { num:"04.4", title:"Concierge Experiment",      desc:"Design the smallest manual version of your product. Deliver it to one real person this week. Document every observation. What did you learn that you couldn't have assumed?", time:"2–3 days", illu:"interview" },
      { num:"04.5", title:"Clickable Wireframe",       desc:"Build 3–5 core screens in Figma or Keynote. Share with 3 users via screen recording. Watch where they pause, click wrong, or look confused. Every friction = design debt.", time:"3 hrs",    illu:"sketch" },
      { num:"04.6", title:"Fake Door Test",            desc:"Build a landing page before your product exists. Capture emails. Drive 100 visitors. If 10%+ sign up, you have real signal. Under 2%? Your problem definition needs revisiting.", time:"1 day",    illu:"metric" },
    ],
    quote: { text: "Fail faster to succeed sooner. Every prototype that fails is a lesson at the lowest possible cost. Every product that fails at launch is a lesson purchased far too late.", attr: "David Kelley · Founder of IDEO & d.school" },
  },
  5: {
    tagline: "Testing is not validation-seeking. It's truth-seeking. The truth you find in testing is the foundation of everything you'll launch successfully.",
    lessons: [
      { title: "Test to Learn, Not to Confirm", body: "The most common mistake: showing your prototype to people who want to be nice, then interpreting generous feedback as validation. Real testing is uncomfortable. You're looking for what breaks, confuses, and disappoints. IDEO's principle: Show, don't tell. Put the prototype in front of users and watch — don't explain it." },
      { title: "The Think-Aloud Protocol", body: "Ask users to narrate their experience as they interact: 'What are you thinking right now?' 'What do you expect to happen if you tap that?' This surfaces mental models before they disappear. Three users reveal 85% of usability issues — no more needed at this early stage." },
      { title: "Three-Ring Launch Strategy", body: "Ring 1: 10 trusted users (weeks 1–2). Ring 2: 100 early adopters (months 1–2). Ring 3: 1,000+ mainstream (month 3+). Between each ring, collect data, iterate, and rebuild. Design thinking doesn't stop at launch — every support ticket is an empathy interview, every churn event is a failed POV." },
    ],
    exercises: [
      { num:"05.1", title:"3-Person Usability Test",        desc:"Run your prototype in front of 3 real users with Think-Aloud Protocol. Three users reveal 85% of usability issues. Write a Top 5 Findings report after all sessions.", time:"3–4 hrs", illu:"interview" },
      { num:"05.2", title:"North Star Metric",              desc:"What is the ONE metric that proves your product is working? Not revenue (lagging) — the action that creates revenue. Map all other metrics as inputs or outputs from this single north star.", time:"45 min",  illu:"metric" },
      { num:"05.3", title:"Feedback Synthesis Grid",        desc:"Organize testing findings: Worked Well vs. Needs Change, crossed with Easy vs. Hard to Fix. Prioritize top-left: needs change + easy to fix. That's your next sprint.", time:"30 min",  illu:"map" },
      { num:"05.4", title:"Launch Ring Plan",               desc:"Plan Ring 1 (10 trusted), Ring 2 (100 early adopters), Ring 3 (1000+ mainstream). For each: who, what to measure, what to learn, gate condition before moving forward.", time:"60 min",  illu:"rings" },
      { num:"05.5", title:"Willingness-to-Pay Interview",   desc:"'If this worked perfectly, what would you pay monthly?' + 'At what price would you question the quality?' Do this with 5 users. You now have a pricing range with evidence.", time:"30 min",  illu:"interview" },
      { num:"05.6", title:"DT Operating Rhythm",           desc:"Design your post-launch DT cadence: weekly (what feedback came in?), monthly (what needs redefining?), quarterly (are we solving the right problem?). Put it in your calendar now.", time:"30 min",  illu:"rings" },
    ],
    quote: { text: "Design thinking is not a methodology. It's a mindset. Once you see the world as a series of human problems worth solving, you can't unsee it.", attr: "David Kelley · Founder of IDEO & Stanford d.school" },
  },
};
