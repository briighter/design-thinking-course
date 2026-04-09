import { P } from '../theme';
import { WriteBox, TwoColBox, FourQuadrant, TableBox, StoryboardGrid } from '../components/workbook/WorkspaceInputs';

export const EXERCISES = {
  0: [
    {
      num: "00.1", title: "Pain Language Hunt", time: "45 min",
      desc: "Pick 3 communities in domains you're curious about. Spend 45 minutes tuned only to pain language. Capture every complaint, workaround, and 'why can't it just' you find.",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Pain Phrase Heard","Source / Where Found","Problem Hypothesis"]} rows={8} color={P.plum} colWidths={["35%","30%","35%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Top 3 patterns I noticed" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.2", title: "Workaround Diary", time: "7 days",
      desc: "For 7 days, every time you do something manually that should be automated, write it down. Which workaround appears most often? That frequency is your signal.",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Day","Manual Task","How Often","Potential Solution"]} rows={10} color={P.plum} colWidths={["10%","35%","20%","35%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Most frequent workaround & what it signals" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.3", title: "The 5 Lenses in Practice", time: "60 min",
      desc: "For each of the 5 lenses, write what you look for and your specific observations. At least 2 observations per lens before moving to Phase 01.",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          {["Friction (Pain Language)","Stranger (Question Normal)","Leading Edge (Live in Future)","Workaround Audit","Intersection (Domain Collision)"].map((lens,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`Lens ${i+1} · ${lens}`} lines={3} color={P.plum}/>
          ))}
        </>
      ),
    },
    {
      num: "00.4", title: "Alien Audit", time: "30 min",
      desc: "Pick any industry or daily process. Write 10 things that would seem completely insane to someone seeing it for the first time. Each absurdity is a potential opportunity.",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Industry or process I'm auditing" lines={1} color={P.plum}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","The Absurdity","Why We Accept It","Opportunity Hidden Inside"]} rows={10} color={P.plum} colWidths={["6%","30%","30%","34%"]}/>
        </>
      ),
    },
    {
      num: "00.5", title: "Edge User Interview", time: "60 min",
      desc: "Find someone 3–5 years ahead of the mainstream in a domain you care about. Ask: 'What tools are you using that nobody else is? What's still missing? What do you do manually?'",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who I interviewed & their context" lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-1`} label="Tools they use that nobody else does" lines={3} color={P.plum}/>
          <WriteBox storageKey={`${kp}-2`} label="What's still missing in their world" lines={3} color={P.plum}/>
          <WriteBox storageKey={`${kp}-3`} label="What they still do manually" lines={3} color={P.plum}/>
        </>
      ),
    },
    {
      num: "00.6", title: "Opportunity Hypothesis", time: "30 min",
      desc: "Write: 'I believe [type of person] has a problem with [situation] because [evidence]. Nobody has solved this well because [observation].' This is your entry to Phase 01.",
      color: P.plum, lightBg: "#F5EEF8", darkBg: "#2D1F3D",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="I believe [type of person]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-1`} label="...has a problem with [specific situation]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-2`} label="...because [evidence from my research]..." lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-3`} label="Nobody has solved this well because [observation]" lines={2} color={P.plum}/>
          <WriteBox storageKey={`${kp}-4`} label="Full hypothesis (combine above into one sentence)" lines={3} color={P.plum}/>
        </>
      ),
    },
  ],
  1: [
    {
      num: "01.1", title: "The 5 Why's Interview", time: "60 min",
      desc: "Interview one person for 30 minutes. For every answer they give, ask 'why?' five times. Document the chain. The fifth why is almost always the real problem.",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who I interviewed & their context" lines={2} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Initial statement (what they said first)" lines={2} color={P.coral}/>
          {["Why #1","Why #2","Why #3","Why #4","Why #5 (the real problem)"].map((l,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i+2}`} label={l} lines={2} color={P.coral}/>
          ))}
          <WriteBox storageKey={`${kp}-7`} label="Key insight from this chain" lines={2} color={P.coral}/>
        </>
      ),
    },
    {
      num: "01.2", title: "Fly on the Wall", time: "45 min",
      desc: "Observe someone completing a task without speaking. Write 10 raw observations: behaviors, frustrations, workarounds, body language. Don't interpret — just capture.",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Context — who, what task, environment" lines={2} color={P.coral}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","Raw Observation","Friction Level (1–10)","Workaround?"]} rows={10} color={P.coral} colWidths={["6%","50%","22%","22%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="Most surprising observation" lines={2} color={P.coral}/>
        </>
      ),
    },
    {
      num: "01.3", title: "Build an Empathy Map", time: "30 min",
      desc: "Fill in what your user Says, Thinks, Does, and Feels using your research. Then add Pains and Gains below.",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <FourQuadrant storageKey={`${kp}-0`} labels={["Says (direct quotes)","Thinks (internal beliefs)","Does (behaviors & actions)","Feels (emotions & states)"]} color={P.coral}/>
          <TwoColBox storageKey={`${kp}-1`} label1="Pains (frustrations, fears)" label2="Gains (goals, desires, wins)" color={P.coral} height={100}/>
        </>
      ),
    },
    {
      num: "01.4", title: "Extreme User Interview", time: "90 min",
      desc: "Find someone who experiences the problem intensely — a power user or someone completely excluded by existing solutions. Edge cases reveal what average users hide.",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Who this person is & why they are 'extreme'" lines={2} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="What they do differently from average users" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="What existing solutions completely fail them" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="Key insights not found in average user research" lines={3} color={P.coral}/>
        </>
      ),
    },
    {
      num: "01.5", title: "Immersion Challenge", time: "Full day",
      desc: "For one day, live as your target user. Use only the tools they use. Navigate the friction they face. Write a reflection: what surprised you most?",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="What I did to immerse (tools used, tasks attempted)" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Moments of friction I experienced" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="What surprised me most" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="What I would fix first if I could" lines={2} color={P.coral}/>
        </>
      ),
    },
    {
      num: "01.6", title: "Pattern Clustering", time: "45 min",
      desc: "Write each key observation on a sticky note. Group similar notes. Name each cluster. The cluster that appears most often is your signal pointing toward the real problem.",
      color: P.coral, lightBg: "#FEF0EB", darkBg: "#3D1A0A",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Cluster 1 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-1`} label="Cluster 2 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-2`} label="Cluster 3 — Name & what it suggests" lines={3} color={P.coral}/>
          <WriteBox storageKey={`${kp}-3`} label="The most frequent cluster & what it means for my product" lines={3} color={P.coral}/>
        </>
      ),
    },
  ],
  2: [
    {
      num: "02.1", title: "Write 5 POV Statements", time: "45 min",
      desc: "Using your empathy research, write 5 different POV statements. [User] needs [need] because [insight]. Each emphasizes a different insight. Which one makes you lean forward?",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          {[1,2,3,4,5].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n-1}`} label={`POV ${n} — [User] needs [need] because [insight]`} lines={2} color={P.sky}/>
          ))}
          <WriteBox storageKey={`${kp}-5`} label="The one I chose & why it resonates" lines={2} color={P.sky}/>
        </>
      ),
    },
    {
      num: "02.2", title: '"How Might We" Sprint', time: "30 min",
      desc: "Take your best POV. Generate 20 HMW questions in 10 minutes. No filtering. Then circle your top 3. Those questions drive your entire ideation session.",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My POV statement going in" lines={2} color={P.sky}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","How Might We...","★ Top 3?"]} rows={20} color={P.sky} colWidths={["8%","78%","14%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="My top 3 HMW questions & why" lines={3} color={P.sky}/>
        </>
      ),
    },
    {
      num: "02.3", title: "Journey Map Audit", time: "60 min",
      desc: "Draw your user's end-to-end journey. Rate each step 1–10 for friction. Circle the top 3 pain points. Your product opportunity lives at those friction peaks.",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Step","What User Does","Emotion","Friction (1–10)","Workaround Used"]} rows={10} color={P.sky} colWidths={["6%","26%","20%","16%","32%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Top 3 friction peaks & why they matter" lines={3} color={P.sky}/>
          <WriteBox storageKey={`${kp}-2`} label="Existing workarounds at each peak (= my competition)" lines={3} color={P.sky}/>
        </>
      ),
    },
    {
      num: "02.4", title: "Problem Reframe Challenge", time: "30 min",
      desc: "Take your POV and rewrite it 10 ways — zoom in, zoom out, flip it, look upstream, downstream. Which reframe reveals a more urgent or larger problem?",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          {["Zoom in (narrower)","Zoom out (bigger)","Flip it (opposite)","Upstream (root cause)","Downstream (consequence)","From user's boss perspective","From user's customer perspective","5 years from now","With unlimited budget","With zero budget"].map((l,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`Reframe ${i+1} — ${l}`} lines={1} color={P.sky}/>
          ))}
          <WriteBox storageKey={`${kp}-10`} label="Best reframe & what it reveals" lines={2} color={P.sky}/>
        </>
      ),
    },
    {
      num: "02.5", title: "Existing Solutions Audit", time: "45 min",
      desc: "List every way your user currently solves this problem: apps, spreadsheets, workarounds, ignoring it. Each is a competitor. What do they all miss?",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["Existing Solution","What It Does Well","What It Misses","User's Frustration With It"]} rows={8} color={P.sky} colWidths={["22%","26%","26%","26%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="The gap ALL existing solutions share — this is my opportunity" lines={3} color={P.sky}/>
        </>
      ),
    },
    {
      num: "02.6", title: "Market-Size Stress Test", time: "45 min",
      desc: "How many people share this problem? What are they paying today? Multiply. Is this a $100K or $100M market? Your ambition level should match the evidence.",
      color: P.sky, lightBg: "#EAF6FD", darkBg: "#0A2330",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Number of people with this problem (estimate + source)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-1`} label="What they pay today (apps, time, hiring someone, doing manually)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-2`} label="Annual market size estimate (people × spend)" lines={2} color={P.sky}/>
          <WriteBox storageKey={`${kp}-3`} label="My realistic slice of that market in year 1 / year 3" lines={2} color={P.sky}/>
        </>
      ),
    },
  ],
  3: [
    {
      num: "03.1", title: "Crazy 8s", time: "20 min",
      desc: "Fold paper into 8 panels. 8-minute timer. One different concept per panel for your top HMW. No text — rough visuals only. Speed prevents self-censorship.",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My HMW question going in" lines={1} color={P.sun}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"16px"}}>
            {[1,2,3,4,5,6,7,8].map(n=>(
              <div key={n} style={{border:`2px solid ${P.sun}44`,borderRadius:"10px",padding:"8px",minHeight:"80px",background:"white",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.55rem",color:P.sun,fontWeight:"bold"}}>CONCEPT {n}</span>
                <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:P.sun,opacity:0.2,fontSize:"1.4rem"}}>✎</div>
              </div>
            ))}
          </div>
          <WriteBox storageKey={`${kp}-1`} label="Which 2 surprised me most & what I'd combine" lines={3} color={P.sun}/>
        </>
      ),
    },
    {
      num: "03.2", title: "50 Ideas Sprint", time: "40 min",
      desc: "Write 50 different ideas for your HMW. Wild, stupid, obvious, impossible — all welcome. The remarkable ideas only appear after you exhaust the ordinary first 20.",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My HMW question" lines={1} color={P.sun}/>
          <TableBox storageKey={`${kp}-1`} headers={["#","Idea","#","Idea"]} rows={25} color={P.sun} colWidths={["5%","45%","5%","45%"]}/>
          <WriteBox storageKey={`${kp}-2`} label="Top 5 ideas that surprised me (circle the ones that came after #20)" lines={3} color={P.sun}/>
        </>
      ),
    },
    {
      num: "03.3", title: "Reverse Brainstorm", time: "30 min",
      desc: "Ask: 'How would I make this problem as bad as possible?' Write 20 terrible ideas. Then flip each one. Best concepts often hide in the opposites.",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <>
          <TwoColBox storageKey={`${kp}-0`} label1="Terrible Ideas (make it worse)" label2="Flipped — Turn Each Around" color={P.sun} height={300}/>
          <WriteBox storageKey={`${kp}-1`} label="Best insight from the flip exercise" lines={2} color={P.sun}/>
        </>
      ),
    },
    {
      num: "03.4", title: "Analogous World Tour", time: "45 min",
      desc: "Pick 5 unrelated industries. For each, write how they solve a similar problem. What would Amazon, Disney, the military, a hospital, and a pizza chain do?",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <>
          {["Amazon / Retail","Disney / Experience Design","Military / Operations","Hospital / Patient Flow","Pizza Chain / Speed & Scale"].map((ind,i)=>(
            <WriteBox key={i} storageKey={`${kp}-${i}`} label={`${ind} — How they'd solve my problem`} lines={2} color={P.sun}/>
          ))}
          <WriteBox storageKey={`${kp}-5`} label="Elements I'm borrowing from other industries" lines={3} color={P.sun}/>
        </>
      ),
    },
    {
      num: "03.5", title: "DFV Scoring", time: "30 min",
      desc: "Take your top 10 ideas. Rate each on Desirability, Feasibility, and Viability (1–10). Highest combined score moves to prototype.",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <TableBox storageKey={`${kp}-0`} headers={["Idea","Desirability /10","Feasibility /10","Viability /10","Total /30"]} rows={10} color={P.sun} colWidths={["40%","15%","15%","15%","15%"]}/>
      ),
    },
    {
      num: "03.6", title: "Concept Poster", time: "60 min",
      desc: "For your top 2 ideas, create a one-page concept poster: sketch, target user, core benefit, and one empathy quote that proves the need.",
      color: P.sun, lightBg: "#FEFBE8", darkBg: "#302800",
      Workspace: ({ kp }) => (
        <>
          {[1,2].map(n=>(
            <div key={n} style={{marginBottom:16}}>
              <div style={{background:P.sun+"22",borderTop:`3px solid ${P.sun}`,padding:"8px 12px",fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:P.sun,fontWeight:"bold",letterSpacing:"0.1em",textTransform:"uppercase"}}>Concept Poster {n}</div>
              <div style={{border:`1px solid ${P.sun}33`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:12,background:"white"}}>
                <WriteBox storageKey={`${kp}-${(n-1)*4+0}`} label="Concept name & sketch description" lines={2} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+1}`} label="Target user" lines={1} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+2}`} label="Core benefit" lines={1} color={P.sun}/>
                <WriteBox storageKey={`${kp}-${(n-1)*4+3}`} label="Empathy quote that proves the need" lines={2} color={P.sun}/>
              </div>
            </div>
          ))}
        </>
      ),
    },
  ],
  4: [
    {
      num: "04.1", title: "Assumption Inventory", time: "30 min",
      desc: "List every assumption your business rests on. Rate by Impact (H/M/L) and Certainty (H/M/L). High-impact + low-certainty = prototype targets.",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <TableBox storageKey={`${kp}-0`} headers={["Assumption","Impact","Certainty","Test How?"]} rows={10} color={P.mint} colWidths={["46%","14%","14%","26%"]}/>
      ),
    },
    {
      num: "04.2", title: "5-Minute Paper Prototype", time: "20 min",
      desc: "Set a 5-minute timer. Draw every screen or touchpoint on paper. Show to a potential user without explanation. Watch them 'use' it. Note every pause and confusion.",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Question I'm testing with this prototype" lines={1} color={P.mint}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:16}}>
            {["Screen 1","Screen 2","Screen 3","Screen 4"].map(s=>(
              <div key={s} style={{border:`2px solid ${P.mint}44`,borderRadius:"10px",minHeight:"90px",background:"white",display:"flex",flexDirection:"column",padding:"8px"}}>
                <span style={{fontFamily:"'Courier New',monospace",fontSize:"0.55rem",color:P.mint,fontWeight:"bold",marginBottom:4}}>{s}</span>
                <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:P.mint,opacity:0.2,fontSize:"1.4rem"}}>✎</div>
              </div>
            ))}
          </div>
          <WriteBox storageKey={`${kp}-1`} label="User reactions — every pause, confusion, surprise" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="What I learned vs. what I assumed" lines={3} color={P.mint}/>
        </>
      ),
    },
    {
      num: "04.3", title: "Storyboard Your Story", time: "45 min",
      desc: "Draw 8 frames: user's life before → discovers your product → first use → key value moment → transformation. This is your pitch deck and product spec in one.",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <StoryboardGrid storageKey={`${kp}-0`} color={P.mint}/>
      ),
    },
    {
      num: "04.4", title: "Concierge Experiment", time: "2–3 days",
      desc: "Design the smallest manual version of your product. Deliver it to one real person this week. Document every observation. What did you learn that you couldn't have assumed?",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My concierge plan — what I'll do manually, for whom, how" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-1`} label="What happened — step by step" lines={4} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="What I learned that I couldn't have assumed" lines={3} color={P.mint}/>
          <WriteBox storageKey={`${kp}-3`} label="What I'll change in the next iteration" lines={2} color={P.mint}/>
        </>
      ),
    },
    {
      num: "04.5", title: "Clickable Wireframe Test", time: "3 hrs",
      desc: "Build 3–5 core screens in Figma or Keynote. Share with 3 users via screen recording. Watch where they pause, click wrong, or look confused.",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="Screens I built & the flow they cover" lines={2} color={P.mint}/>
          {[1,2,3].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n}`} label={`User ${n} — observations, pauses, confusions`} lines={3} color={P.mint}/>
          ))}
          <WriteBox storageKey={`${kp}-4`} label="Top 5 friction points across all 3 users" lines={3} color={P.mint}/>
        </>
      ),
    },
    {
      num: "04.6", title: "Fake Door Test", time: "1 day",
      desc: "Build a landing page before your product exists. Capture emails. Drive 100 visitors. If 10%+ sign up, you have real signal. Under 2%? Problem definition needs revisiting.",
      color: P.mint, lightBg: "#EAF8F4", darkBg: "#0A2D22",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My headline & core value proposition" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-1`} label="How I drove traffic (source & method)" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-2`} label="Results — visitors, signups, signup rate" lines={2} color={P.mint}/>
          <WriteBox storageKey={`${kp}-3`} label="What I conclude from the data" lines={3} color={P.mint}/>
        </>
      ),
    },
  ],
  5: [
    {
      num: "05.1", title: "3-Person Usability Test", time: "3–4 hrs",
      desc: "Run your prototype in front of 3 real users with Think-Aloud Protocol. Three users reveal 85% of usability issues. Write a Top 5 Findings report after all sessions.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          {[1,2,3].map(n=>(
            <WriteBox key={n} storageKey={`${kp}-${n-1}`} label={`User ${n} — observations & key moments`} lines={4} color={P.navy}/>
          ))}
          <WriteBox storageKey={`${kp}-3`} label="Top 5 synthesis findings across all sessions" lines={5} color={P.navy}/>
        </>
      ),
    },
    {
      num: "05.2", title: "North Star Metric", time: "45 min",
      desc: "What is the ONE metric that proves your product is working? Not revenue — the action that creates revenue. Map all other metrics as inputs or outputs.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          <WriteBox storageKey={`${kp}-0`} label="My North Star Metric (the action, not revenue)" lines={2} color={P.navy}/>
          <WriteBox storageKey={`${kp}-1`} label="Why this metric proves real value is being delivered" lines={2} color={P.navy}/>
          <TwoColBox storageKey={`${kp}-2`} label1="Input Metrics (lead to North Star)" label2="Output Metrics (result from North Star)" color={P.navy} height={120}/>
        </>
      ),
    },
    {
      num: "05.3", title: "Feedback Synthesis Grid", time: "30 min",
      desc: "Organize testing findings: Worked Well vs. Needs Change, crossed with Easy vs. Hard to Fix. Prioritize top-left: needs change + easy to fix.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          <FourQuadrant storageKey={`${kp}-0`} labels={["Worked Well","Needs Change (Easy to Fix)","Worked Well (Enhance)","Needs Change (Hard to Fix)"]} color={P.navy}/>
          <WriteBox storageKey={`${kp}-1`} label="My next sprint priorities (from top-left quadrant)" lines={3} color={P.navy}/>
        </>
      ),
    },
    {
      num: "05.4", title: "Launch Ring Plan", time: "60 min",
      desc: "Plan Ring 1 (10 trusted users), Ring 2 (100 early adopters), Ring 3 (1000+ mainstream). For each: who, measure, learn, gate condition.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          {[["Ring 1","10 Trusted Users","Weeks 1–2"],["Ring 2","100 Early Adopters","Months 1–2"],["Ring 3","1000+ Mainstream","Month 3+"]].map(([r,l,t],ri)=>(
            <div key={r} style={{marginBottom:12}}>
              <div style={{background:P.navy+"18",borderTop:`3px solid ${P.navy}`,padding:"8px 12px",fontFamily:"'Courier New',monospace",fontSize:"0.6rem",color:P.navy,fontWeight:"bold",letterSpacing:"0.1em",textTransform:"uppercase"}}>{r} · {l} · {t}</div>
              <div style={{border:`1px solid ${P.navy}33`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:10,background:"white",display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {["Who to target","What to measure","What to learn","Gate condition to advance"].map((f,fi)=>(
                  <WriteBox key={fi} storageKey={`${kp}-${ri*4+fi}`} label={f} lines={2} color={P.navy}/>
                ))}
              </div>
            </div>
          ))}
        </>
      ),
    },
    {
      num: "05.5", title: "Willingness-to-Pay Interview", time: "30 min",
      desc: "'If this worked perfectly, what would you pay monthly?' + 'At what price would you question quality?' Do with 5 users. You now have a pricing range with evidence.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          <TableBox storageKey={`${kp}-0`} headers={["User","Would Pay (monthly)","Too Cheap Threshold","Notes"]} rows={5} color={P.navy} colWidths={["20%","25%","25%","30%"]}/>
          <WriteBox storageKey={`${kp}-1`} label="Price range with evidence & my pricing hypothesis" lines={3} color={P.navy}/>
        </>
      ),
    },
    {
      num: "05.6", title: "DT Operating Rhythm", time: "30 min",
      desc: "Design your post-launch design thinking cadence: weekly, monthly, quarterly. Put it in your calendar today. This is how you build a company that never stops learning.",
      color: P.navy, lightBg: "#EBF0F8", darkBg: "#08111E",
      Workspace: ({ kp }) => (
        <>
          {[["Weekly","What user feedback came in this week?"],["Monthly","What needs redefining based on data?"],["Quarterly","Are we still solving the right problem?"]].map(([cadence,q],i)=>(
            <WriteBox key={cadence} storageKey={`${kp}-${i}`} label={`${cadence} — ${q}`} lines={3} color={P.navy}/>
          ))}
          <WriteBox storageKey={`${kp}-3`} label="Calendar commitment — specific day/time for each cadence" lines={2} color={P.navy}/>
        </>
      ),
    },
  ],
};
