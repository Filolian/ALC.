const drunkMap = [-2, -1, 0, 1, 2];

const questions = [
  { q:"คุณดื่มบ่อยแค่ไหน?", 
    c:["ไม่เคยดื่ม","แทบไม่ดื่ม","เฉพาะโอกาส","เดือนละไม่กี่ครั้ง","แทบทุกสัปดาห์"],
    comments:["˙𐃷˙ : ใสจนคนอื่นเริ่มสงสัยแล้วนะ","˙𐃷˙ : ยังพอหนีทันนะครับ","˙𐃷˙ : กลางๆ แต่เริ่มเอียงแล้ว","˙𐃷˙ : เหมือนจะเริ่มติดบรรยากาศ","˙𐃷˙ : อันนี้ไม่ใช่โอกาสพิเศษแล้วนะ"] },

  { q:"ถ้ามีคนชวนดื่ม?", 
    c:["ปฏิเสธทันที","ลังเล","ไปแต่ดื่มนิดเดียว","ไปและดื่มตามบรรยากาศ","ไปแน่นอน"],
    comments:["˙𐃷˙ : ใจแข็งหรือไม่มีใครชวน","˙𐃷˙ : ดูเหมือนอยากไปอยู่นะ","˙𐃷˙ : คุมตัวเองเก่ง…มั้ง","˙𐃷˙ : บรรยากาศพาไปตลอดเลยนะ","˙𐃷˙ : ไม่ต้องชวนก็ไปอยู่แล้ว"] },

  { q:"สไตล์การดื่มของคุณ?", 
    c:["ไม่ดื่ม","จิบเล็กน้อย","ดื่มเรื่อยๆ","ชนแก้วบ่อย","หมดเร็ว"],
    comments:["˙𐃷˙ : ปลอดภัยเกินไปหน่อย","˙𐃷˙ : ดูมีคลาสนะครับ","˙𐃷˙ : มาเรื่อยๆ เดี๋ยวก็ไป","˙𐃷˙ : เหมือนจะสนุกเกินเหตุ","˙𐃷˙ : รีบไปไหนก่อนครับ"] },

  { q:"เครื่องดื่มที่เลือก?", 
    c:["ไม่ดื่ม","ไม่มีแอลกอฮอล์","ค็อกเทลเบาๆ","เบียร์/ไวน์","สายแรง"],
    comments:["˙𐃷˙ : โลกนี้ยังมีคุณอยู่","˙𐃷˙ : เลี่ยงเก่งนะครับ","˙𐃷˙ : เริ่มเปิดใจแล้ว","˙𐃷˙ : ดูโตขึ้นทันที","˙𐃷˙ : เอาให้สุดจริงๆ"] },

  { q:"ระดับการเมา?", 
    c:["ไม่เคยเมา","มึนเล็กน้อย","กรึ่มๆ","เมาชัด","เมาหนัก"],
    comments:["˙𐃷˙ : น่านับถือจริงๆ","˙𐃷˙ : ยังมีสติอยู่","˙𐃷˙ : จุดเริ่มต้นของเรื่องเล่า","˙𐃷˙ : เพื่อนเริ่มจำคุณได้","˙𐃷˙ : คุณอาจจำอะไรไม่ได้"] },

  { q:"หลังดื่มคุณจะ?", 
    c:["ไม่เปลี่ยน","คุยมากขึ้น","ขำง่าย","มั่นใจขึ้น","ควบคุมยาก"],
    comments:["˙𐃷˙ : นิ่งจนผิดปกติ","˙𐃷˙ : เก็บมานานสินะ","˙𐃷˙ : หัวเราะง่ายไปหน่อย","˙𐃷˙ : กล้าแบบไม่มีเบรก","˙𐃷˙ : เพื่อนเริ่มถ่ายคลิปแล้ว"] },

  { q:"บทบาทในวงเหล้า?", 
    c:["ไม่อยู่ในวง","นั่งเงียบ","ร่วมวง","สร้างสีสัน","ตัวหลัก"],
    comments:["˙𐃷˙ : หลุดธีมเฉยเลย","˙𐃷˙ : นั่งดูเขาสนุก","˙𐃷˙ : พอมีบทบาท","˙𐃷˙ : ขาดคุณแล้วกร่อย","˙𐃷˙ : งานนี้มีคุณเป็นเหตุ"] },

  { q:"คุณดื่มเพื่อ?", 
    c:["ไม่ดื่ม","ลองเฉยๆ","เข้าสังคม","ผ่อนคลาย","ลืมบางอย่าง"],
    comments:["˙𐃷˙ : แน่วแน่ดีครับ","˙𐃷˙ : ฟังดูยังใสอยู่","˙𐃷˙ : เหตุผลยอดฮิต","˙𐃷˙ : เริ่มพึ่งแล้วนะ","˙𐃷˙ : อันนี้น่าเป็นห่วงนิด"] },

  { q:"ดื่มคนเดียว?", 
    c:["ไม่เคย","ไม่ชอบ","เฉยๆ","ชอบ","ประจำ"],
    comments:["˙𐃷˙ : ดีแล้วครับ","˙𐃷˙ : ยังมีสังคมอยู่","˙𐃷˙ : แล้วแต่อารมณ์","˙𐃷˙ : โลกส่วนตัวเริ่มชัด","˙𐃷˙ : เพื่อนหายไปไหน"] },

  { q:"งบต่อครั้ง?", 
    c:["0 บาท","ต่ำมาก","ปานกลาง","ค่อนข้างสูง","ไม่จำกัด"],
    comments:["˙𐃷˙ : กระเป๋าปลอดภัย","˙𐃷˙ : ยังยั้งได้","˙𐃷˙ : พอดีๆ","˙𐃷˙ : เริ่มจริงจัง","˙𐃷˙ : เงินไปไหนหมด"] },

  { q:"เวลาว่างคุณชอบ?", 
    c:["พักเงียบๆ","ดูอะไรชิลๆ","ออกไปข้างนอก","เจอเพื่อน","ปาร์ตี้"],
    comments:["˙𐃷˙ : สงบเกินไปหน่อย","˙𐃷˙ : ชิลจริง","˙𐃷˙ : เริ่มไม่อยู่บ้านแล้ว","˙𐃷˙ : ชอบความวุ่นวาย","˙𐃷˙ : ไม่พักเลยใช่ไหม"] },

  { q:"สไตล์ชีวิต?", 
    c:["เรียบง่าย","เป็นระบบ","ยืดหยุ่น","สนุก","สุดทาง"],
    comments:["˙𐃷˙ : มินิมอลของจริง","˙𐃷˙ : เป๊ะเกินไปนิด","˙𐃷˙ : เอาอยู่ทุกสถานการณ์","˙𐃷˙ : ใช้ชีวิตคุ้ม","˙𐃷˙ : ไม่เบรกเลยนะ"] },

  { q:"เวลานอน?", 
    c:["ก่อน4ทุ่ม","5ทุ่ม","เที่ยงคืน","ตี1-2","ไม่แน่นอน"],
    comments:["˙𐃷˙ : สุขภาพดีมาก","˙𐃷˙ : ยังโอเค","˙𐃷˙ : เริ่มดึก","˙𐃷˙ : สายกลางคืน","˙𐃷˙ : ร่างกายงงแล้ว"] },

  { q:"เพื่อนคุณเป็นแบบไหน?", 
    c:["ไม่มีเพื่อน","ไม่เที่ยว","ชิล","ปาร์ตี้","ตัวตึง"],
    comments:["˙𐃷˙ : ไหงงั้น","˙𐃷˙ : เที่ยวบ้าง","˙𐃷˙ : ยังควบคุมได้","˙𐃷˙ : สนุกแน่","˙𐃷˙ : ตัวปัญหาทั้งวง"] },

  { q:"เวลาเครียด?", 
    c:["นอน","ทำอย่างอื่น","คุยเพื่อน","ออกไปข้างนอก","ดื่ม"],
    comments:["˙𐃷˙ : ทางออกดี","˙𐃷˙ : ยังมีทางเลือก","˙𐃷˙ : ดีที่ไม่เก็บไว้คนเดียว","˙𐃷˙ : เปลี่ยนบรรยากาศ","˙𐃷˙ : กลับมาที่เดิม"] },

  { q:"ใช้เงินกับอะไร?", 
    c:["ของจำเป็น","บันเทิงเล็กน้อย","กินเที่ยว","สังสรรค์","จัดเต็ม"],
    comments:["˙𐃷˙ : คุมเก่ง","˙𐃷˙ : ยังพอดี","˙𐃷˙ : ใช้ชีวิตนะ","˙𐃷˙ : เริ่มจริงจัง","˙𐃷˙ : ไม่เหลือแน่"] },

  { q:"คุณเป็นคนแบบไหนในกลุ่ม?", 
    c:["เงียบ","ฟัง","ร่วมวง","คุยเก่ง","ตัวปั่น"],
    comments:["˙𐃷˙ : นิ่งเกินไปไหม","˙𐃷˙ : ฟังอย่างเดียว","˙𐃷˙ : กลางๆ","˙𐃷˙ : มีสีสัน","˙𐃷˙ : ตัวต้นเรื่อง"] },

  { q:"ชอบบรรยากาศ?", 
    c:["เงียบ","สบาย","คึกคัก","เสียงดัง","วุ่นวาย"],
    comments:["˙𐃷˙ : สงบดี","˙𐃷˙ : ผ่อนคลาย","˙𐃷˙ : เริ่มมัน","˙𐃷˙ : อินจัด","˙𐃷˙ : เกินไปนิด"] },

  { q:"ตัดสินใจยังไง?", 
    c:["คิดเยอะ","คิดพอ","ตามสถานการณ์","ตามอารมณ์","ไม่คิด"],
    comments:["˙𐃷˙ : รอบคอบเกิน","˙𐃷˙ : สมดุลดี","˙𐃷˙ : เอาตัวรอดเก่ง","˙𐃷˙ : อารมณ์นำ","˙𐃷˙ : กล้าเกินไป"] },

  { q:"คุณมองตัวเองว่า?", 
    c:["สายใส","เรียบร้อย","ปกติ","สายชิล","สายสุด"],
    comments:["˙𐃷˙ : ใสจริงหรือเปล่า","˙𐃷˙ : ยังดูดีอยู่","˙𐃷˙ : กลางๆนะ","˙𐃷˙ : เริ่มไหล","˙𐃷˙ : ยอมรับแล้วสินะ"] },
];

function getDrunkResult(score) {
  if (score >= -40 && score <= -11) return {
    title: "น้ำเปล่า", tag: "เด็กน้อยวัยอนุบาล",
    desc: "ความใสระดับนี้...ไม่แน่ใจว่าโลกนี้เหมาะกับคุณ หรือคุณเหมาะกับโลกนี้กันแน่",
    color: "#4FC3F7", bg: "#E1F5FE", border: "#81D4FA", img: "img1.jpg"
  };
  if (score >= -10 && score <= 0) return {
    title: "น้ำอัดลม", tag: "น้องๆวัยประถม",
    desc: "ดูเรียบร้อย...แต่เหมือนจะเริ่มมีอะไรซ่อนอยู่เบาๆ",
    color: "#FF7043", bg: "#FBE9E7", border: "#FFAB91", img: "img2.jpg"
  };
  if (score >= 1 && score <= 5) return {
    title: "ค็อกเทล", tag: "มัธยมหัดผสม",
    desc: "ภายนอกดูน่ารักดีครับ ภายในนี่…คงไม่ธรรมดาเท่าไรนะ",
    color: "#AB47BC", bg: "#F3E5F5", border: "#CE93D8", img: "img3.jpg"
  };
  if (score >= 6 && score <= 10) return {
    title: "เบียร์", tag: "มหาลัยชินแล้ว",
    desc: "ดูสบายๆ แต่ถ้าเริ่มแล้ว...น่าจะหยุดยากพอตัว",
    color: "#F9A825", bg: "#FFFDE7", border: "#FFE082", img: "img4.jpg"
  };
  if (score >= 11 && score <= 20) return {
    title: "ไวน์", tag: "ดูดีมีอะไร",
    desc: "ภาพลักษณ์ดีมากครับ แต่ลึกๆแล้ว... 🍷",
    color: "#C62828", bg: "#FFEBEE", border: "#EF9A9A", img: "img5.jpg"
  };
  if (score >= 21 && score <= 30) return {
    title: "สุราขาว", tag: "ลุงแถวบ้าน",
    desc: "สมัยอ้าย อ้ายซั่วมาก่อนเจ้าอีก",
    color: "#37474F", bg: "#ECEFF1", border: "#B0BEC5", img: "img6.jpg"
  };
  if (score >= 31 && score <= 35) return {
    title: "Gin", tag: "รุ่นใหญ่วงการ",
    desc: "ดูสุขุม ผ่านอะไรมาไม่น้อย...หรืออาจจะมากไปนิดหนึ่ง",
    color: "#2E7D32", bg: "#E8F5E9", border: "#A5D6A7", img: "img7.jpg"
  };
  if (score >= 36 && score <= 37) return {
    title: "Vodka", tag: "ฅนตื่นเหล้า",
    desc: "ภายนอกดูปกติ...แต่คนใกล้ตัวน่าจะมีเรื่องเล่าเยอะอยู่",
    color: "#1565C0", bg: "#E3F2FD", border: "#90CAF9", img: "img8.jpg"
  };
  if (score >= 38 && score <= 40) return {
    title: "Absinthe", tag: "กะเอาตาย",
    desc: "รุ่นนี้กลิ่นออก ควรเว้นระยะห่าง",
    color: "#1B5E20", bg: "#E8F5E9", border: "#66BB6A", img: "img9.jpg"
  };
  if (score > 40) return {
    title: "Absinthe MAX", tag: "สุดทางจริงๆ",
    desc: "คงไม่มีใครควบคุมคุณได้แล้วครับ…รวมถึงตัวคุณเองด้วย 🔥",
    color: "#1B5E20", bg: "#E8F5E9", border: "#66BB6A", img: "img9.jpg"
  };
  return {
    title: "น้ำเปล่า", tag: "ใสแบบน่าสงสัย",
    desc: "ใสขนาดนี้…แอบคิดเหมือนกันนะครับ ว่าจริงหรือเปล่า 😳",
    color: "#4FC3F7", bg: "#E1F5FE", border: "#81D4FA", img: "img1.jpg"
  };
}

function getDrunkColor(score) {
  if (score <= 0) return "#4FC3F7"; 
  const MAX = 40;
  const t = Math.min(score / MAX, 1);
  let r, g, b;
  if (t < 0.5) {
    const u = t / 0.5;
    r = Math.round(255);
    g = Math.round(214 + (100 - 214) * u);
    b = Math.round(0);
  } else {
    const u = (t - 0.5) / 0.5;
    r = Math.round(255 + (183 - 255) * u);
    g = Math.round(100 + (28 - 100) * u);
    b = Math.round(0 + (28 - 0) * u);
  }
  return `rgb(${r},${g},${b})`;
}

let answers = {};
let shuffleMaps = [];
let current = 0;
let cards = [];
let isAnimating = false;
let currentResult = null;
let lastComment = {};


function shuffleIndices(n) {
  const arr = Array.from({length: n}, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function computeDrunkScore() {
  let total = 0;
  Object.values(answers).forEach(v => { total += drunkMap[v - 1] ?? 0; });
  return total;
}

function updateDrunkBar() {
  const score = computeDrunkScore();
  const pill = document.getElementById("drunkPill");
  const color = getDrunkColor(score);
  pill.style.color = color;
  pill.style.background = color + "22";
  pill.style.borderColor = color;
  pill.textContent = (score > 0 ? "+" : "") + score;
}

function showComment(qi, choiceOriginalIndex) {
  const comment = questions[qi].comments?.[choiceOriginalIndex];
  if (!comment) return;
  lastComment[qi] = {};
  const emojiMatch = comment.match(/^(\p{Emoji_Presentation}|\p{Extended_Pictographic})/u);
  if (emojiMatch) {
    lastComment[qi].emoji = emojiMatch[0];
    lastComment[qi].text = comment.slice(emojiMatch[0].length).trim();
  } else {
    lastComment[qi].emoji = "💬";
    lastComment[qi].text = comment;
  }
  renderComment(lastComment[qi]);
}

function renderComment(data) {
  const bubble = document.getElementById("footerBubble");
  const emojiEl = document.getElementById("bubbleEmoji");
  const textEl = document.getElementById("bubbleText");
  if (!data) { bubble.classList.remove("show"); return; }
  emojiEl.textContent = data.emoji;
  textEl.textContent = data.text;
  bubble.classList.remove("show");
  requestAnimationFrame(() => requestAnimationFrame(() => bubble.classList.add("show")));
}

function updateCommentBubble() {
  const qi = current;
  if (lastComment[qi]) {
    renderComment(lastComment[qi]);
  }
}

function positionTrack() {
  cards.forEach((c, i) => {
    c.classList.remove("active", "exit-left", "exit-right");
    if (i === current) c.classList.add("active");
  });
}

function buildCards() {
  const track = document.getElementById("cardsTrack");
  track.innerHTML = ""; cards = [];
  const letters = ["A","B","C","D","E"];

  if (shuffleMaps.length === 0) {
    questions.forEach(q => shuffleMaps.push(shuffleIndices(q.c.length)));
  }

  questions.forEach((q, qi) => {
    const card = document.createElement("div");
    card.className = "q-card";

    const header = document.createElement("div");
    header.className = "q-header-area";
    header.innerHTML = `<div class="q-num-label">Question ${String(qi + 1).padStart(2, '0')} of 20</div><div class="q-text">${q.q}</div>`;
    card.appendChild(header);

    const choicesArea = document.createElement("div");
    choicesArea.className = "choices-area";

    const shuffled = shuffleMaps[qi];

    shuffled.forEach((origIdx, displayPos) => {
      const choiceText = q.c[origIdx];
      const row = document.createElement("div");
      row.className = "choice-row";
      const origVal = origIdx + 1;
      row.dataset.val = origVal;
      if (answers[qi] === origVal) row.classList.add("selected");

      row.innerHTML = `
        <div class="choice-dot">${letters[displayPos]}</div>
        <div class="choice-text">${choiceText}</div>
        <svg class="choice-check" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.9)"/>
          <path d="M5 9l3 3 5-5" stroke="#8B3FCF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
      row.onclick = () => {
        if (isAnimating) return;
        choicesArea.querySelectorAll(".choice-row").forEach(r => r.classList.remove("selected"));
        row.classList.add("selected");
        answers[qi] = origVal;
        updateProgress();
        updateDrunkBar();
        showComment(qi, origIdx);
        if (qi < questions.length - 1) {
          setTimeout(() => navigate(1), 480);
        } else {
          updateFooter();
        }
      };
      choicesArea.appendChild(row);
    });

    card.appendChild(choicesArea);
    track.appendChild(card);
    cards.push(card);
  });
}

function updateProgress() {
  const n = Object.keys(answers).length;
  document.getElementById("progFill").style.width = (n / 20 * 100) + "%";
  document.getElementById("progText").textContent = n + " / 20";
  document.getElementById("qCounter").textContent = (current + 1) + " / 20";
  updateFooter();
  if (!isAnimating) positionTrack();
}

function updateFooter() {
  document.getElementById("prevBtn").disabled = current === 0;
  const nb = document.getElementById("nextBtn");
  if (current === questions.length - 1) {
    nb.textContent = "ส่งคำตอบ ✓";
    nb.onclick = submitQuiz;
  } else {
    nb.textContent = "ถัดไป ›";
    nb.onclick = () => navigate(1);
  }
}

function navigate(dir) {
  if (isAnimating) return;
  const next = current + dir;
  if (next < 0 || next >= questions.length) return;
  isAnimating = true;

  const outCard = cards[current];
  const inCard = cards[next];

  outCard.classList.remove("active");
  outCard.classList.add(dir === 1 ? "exit-left" : "exit-right");

  inCard.style.transition = "none";
  inCard.classList.remove("exit-left", "exit-right", "active");
  inCard.style.transform = `translate(-50%, -50%) translateX(${dir === 1 ? "110vw" : "-110vw"})`;
  inCard.style.opacity = "0";
  inCard.getBoundingClientRect();
  inCard.style.transition = "";
  inCard.style.transform = "";
  inCard.style.opacity = "";

  requestAnimationFrame(() => { inCard.classList.add("active"); });

  current = next;
  updateProgress();
  updateCommentBubble();

  setTimeout(() => {
    outCard.classList.remove("exit-left", "exit-right");
    isAnimating = false;
  }, 460);
}

function submitQuiz() {
  const n = Object.keys(answers).length;
  if (n < 20) {
    alert("ทำให้มันครบก่อนดิ (ตอบแล้ว " + n + "/20 ข้อ)");
    return;
  }
  const finalScore = computeDrunkScore();
  showResult(finalScore);
}

function showResult(score) {
  document.getElementById("quizWrap").style.display = "none";
  const rp = document.getElementById("resultPage");
  rp.style.display = "flex";

  const r = getDrunkResult(score);
  currentResult = r;

  document.getElementById("resultCard").innerHTML = `
    <img src="${r.img}" alt="${r.title}" class="result-img">
    <div class="result-tag" style="color:${r.color};background:${r.bg};border-color:${r.border}">${r.tag}</div>
    <div class="result-title">${r.title}</div>
    <div class="result-desc">${r.desc}</div>
  `;

  const sr = document.getElementById("scoreRow");
  sr.innerHTML = `
    <div class="score-pill top" style="background:${r.color};border-color:${r.color}">ค่าความเมา: ${score >= 0 ? "+" : ""}${score}</div>
    <div class="score-pill">ตอบแล้ว: ${Object.keys(answers).length}/20 ข้อ</div>
  `;
}

function retryQuiz() {
  answers = {};
  current = 0;
  isAnimating = false;
  currentResult = null;
  lastComment = {};
  shuffleMaps = [];
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("quizWrap").style.display = "flex";
  document.getElementById("footerBubble").classList.remove("show");
  init();
}

function openShareSheet() {
  document.getElementById("shareOverlay").classList.add("open");
}

function closeShareSheet() {
  document.getElementById("shareOverlay").classList.remove("open");
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("shareOverlay")) {
    closeShareSheet();
  }
}

function getShareText() {
  if (!currentResult) return "ข้าเพิ่งทำ ALC. Rating Levels Test! เสร็จ";
  const score = computeDrunkScore();
  return `ข้าคือ ${currentResult.title} (ค่าความเมา: ${score >= 0 ? "+" : ""}${score}) ในแบบทดสอบ ALC. Rating Levels Test! ไม่เห็นจะเมาเลยย`;
}

async function saveResultImage() {
  closeShareSheet();
  const loading = document.getElementById("saveLoading");
  loading.classList.add("show");

  try {
    const canvas = await html2canvas(document.getElementById("resultPage"), {
      useCORS: true,
      allowTaint: true,
      scale: 2,
      backgroundColor: null,
      logging: false,
      ignoreElements: (el) => el.classList.contains('share-overlay') || el.classList.contains('save-loading')
    });

    loading.classList.remove("show");

    const link = document.createElement("a");
    link.download = "download.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.92);
    link.click();
  } catch (err) {
    loading.classList.remove("show");
    alert("ลองใหม่อีกครั้ง");
    console.error(err);
  }
}

function shareToFacebook() {
  closeShareSheet();
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(getShareText());
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=500');
}

function shareToX() {
  closeShareSheet();
  const text = encodeURIComponent(getShareText());
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=500');
}

function init() {
  buildCards();
  current = 0;
  positionTrack();
  updateProgress();
  updateDrunkBar();
}

let touchStartX = 0;
document.getElementById("cardStage").addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
}, { passive: true });
document.getElementById("cardStage").addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
}, { passive: true });

init();