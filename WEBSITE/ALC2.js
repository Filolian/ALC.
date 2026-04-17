const drunkMap = [11, 13, 15, 17, 19];

const questions = [
  { q:"กฤกฟกฤดฤฆ", c:["ดกฟหดดฟหดิอ","้หเ้หกดเกหเ","เดกหดเกหเปแอ","ดฏโปแอผก","กดฆฉปอหก"],
    comments:["˙𐃷˙ : จากวันนั้น","˙𐃷˙ : ฉันเหลือเนื้อไว้ดูด","˙𐃷˙ : เธอเอาไป","˙𐃷˙ : จนฉันไม่เหลืออะไร","˙𐃷˙ : อยากเก็บเอาไว้"] },
  { q:"เหดหกเกหเกหเหก", c:["เหกดเกหเกหเเดเ","เกหเดหเหกกดเเด","ดเกหเดหกเกหเดก","เหกดเหดเกหเเหก","หเกดเกหเหกเหก"],
    comments:["˙𐃷˙ : ฟฏเดกหดเหกดเหเ","˙𐃷˙ : หกเดดเเดดกหดเเหกด","˙𐃷˙ : เกดหดกหดเดเดเเด","˙𐃷˙ : ก้เ้กเ้เ้เ้ไฟไกฟ","˙𐃷˙ : ่ดเ้่ดเ่ดเ่ดเ้่ดเพะ"] },
  { q:"ก่ก่ดเ่กดเกหผั่หผพเด", c:["้ทกเ่กด้่กดเ้กดิืด","หก้าด่กดเ้ปอิ","เหผกพเกดเกหผหเกหดเ","ห้่้ดเกกดเ้กด้กดห","หกดเหกเกหเกหเห"],
    comments:["˙𐃷˙ : หกดเกดหเกหดเกหเ","˙𐃷˙ : หกดเหกเหกเกหดดเ","˙𐃷˙ : เกดหดเหกเดกหเดกหเ","˙𐃷˙ : เ้ก่ก่พะกกดำฟำพ","˙𐃷˙ : ฟำหดฟหกดฟหเ"] },
  { q:"่้่กด้่ดเหกดเหกดเกห", c:["หกเดเเดหกหกดกดา","ดกหเกหเกหเกหเดหก","เกดหหเ่ะพหะัหพพ","้กดเ้กด้กด้กดกด","สกดเ้ด้กด้กด้กด้เกด"],
    comments:["˙𐃷˙ : หกดหดฟกดหฟหดฟ","˙𐃷˙ : ฟหกดฟหดฟหกดฟหด","˙𐃷˙ : เกหด้ะถหำพะ","˙𐃷˙ : พำัไะัำไพะำไพะ","˙𐃷˙ : ะเาั่าีะั่า่่ัะ่้่าเ้าีาะั"] },
  { q:"พ่ัพะ่ัพะ่ัพะ่ัดพะ่หก", c:["ำพะัำพะัำพัะำพะัำพภ","ๆไำๆำๆฑฤฎฑธฤธฌ","๋็๋็ษ็๋ษฌ็ษ๋็ศ๋ษศ๋็฿","ฏโฌฏฆโฌฤฆฏโฌฆฌ","ชฌโฏฆฌ็ฏฆ็ฆฏโฌฏฆฌฏ"],
    comments:["˙𐃷˙ : ฤฏฆโฤฆฏโฤฆโฤฆ","˙𐃷˙ : ฆฎโฆโฏฆโฌฏฆฌฌ","˙𐃷˙ : หฟดกดหดฟห","˙𐃷˙ : ็โฌ็ฏฆฌ็ฆฌฆโฌ","˙𐃷˙ : ฏโฌฏฌ็ฏฆโฌฏฆฌฆฏ"] },
  { q:"ฌโฏโฌ๋็โฌ๋็์ฌ็๋๋ฏฮ", c:["โฏฆฌ็็โฌ็โฌฌฆฑฎฎโฏ","ฏโฌฏฌฏฌฏฌฤธํํธฑธํ","ธฑํฏฆธฌฎฆฑธฌธฆฌ","ั้กดเ้กดเกเกเกเกเ้ก้","กเก้พะ้่ดกก้กดเ้่กด้กห"],
    comments:["˙𐃷˙ : หกเด้พะ้่กด้กด้","˙𐃷˙ : ้้กด้กด้กด้กด้","˙𐃷˙ : ้กด้กด้เกด้","˙𐃷˙ : กดเ้กด้กด้เกด","˙𐃷˙ : ดเ้กด้เกด้เกดดเด"] },
  { q:"ดกเ้ดเ่กด้เหกดเหกดเก", c:["แม่งเอ้ยไอสัส","ฟหกดดเฟหกเกดหเกหเกห","เกดหเกหเกหเกห","หก้่ดเ้่ดเ้หดหกดหก","ฟหกดฟหดฟหดฟหดผป"],
    comments:["˙𐃷˙ : ควยไรวะ","˙𐃷˙ : ฟำดพำหดหกดหด","˙𐃷˙ : ดเกดหเกหเกหเฟไ","˙𐃷˙ : ดฟหำดฟหกดฟหด","˙𐃷˙ : ฟกหดฟหดฟหเ"] },
  { q:"่าดเ่เด้่าดเ่าดเ่้กด", c:["กดเ้กด้กด้กดเ้กด้เ้","กด้เกด้กดเ่กด่ะกะเพ","ะด้กดเ้กด้กด้กดเ้ก","กดเ้กด้กด้ะพเเหเกเกเภ","เก้ักะหกเด่้กดเ้ปด"],
    comments:["˙𐃷˙ : อืม","˙𐃷˙ : อ่อ","˙𐃷˙ : อ่า","˙𐃷˙ : อือ","˙𐃷˙ : แล้วแต่"] },
  { q:"กฟเดหกดเหกดเกหเกหเ้หก", c:["หกดเกหเกหเดกหเกหเกห","หกดเกหดเกหเดกหเดกห","ดเกหดเกหดเกหเหพ","พเหเหกเกดหเกห","หกเพหเกดเกหดเ"],
    comments:["˙𐃷˙ : หพเกหเกหเกหเห","˙𐃷˙ : หพเหกเกหเกหเหก","˙𐃷˙ : พเหกเพกหเกหเก","˙𐃷˙ : หเกพเหพกเกหเ","˙𐃷˙ : ฏฌฏฆโฌฏฆฌโฆฏฌ"] },
  { q:"หกดเกหเกหเกหเกหเ", c:["เหเกดเหกเเกหเ","ดเกหเกหเกหเกหดเกห","หกดเกหเกหเหเหกด","พำหเพหเะหเกหดเ","หเกพหเกหเกหเกพห"],
    comments:["˙𐃷˙ : เกหพเกหเหกเดกห","˙𐃷˙ : กหเพหกเกหเกหเหก","˙𐃷˙ : หเหก้หกดดเหพพเ","˙𐃷˙ : เหกดเหกเหกเหเ","˙𐃷˙ : ดกหเกหดเหเดกหก"] },
  { q:"หกเพหเกพหเกหเกห", c:["หเกพกหเกหเกหเกหกเ","หพกเกหเหกเกหพเ","เพกหเหกเกหเกห","เกหเเ้กดเ้พะพพ","พกหเกหเกดหเกหดเกห"],
    comments:["˙𐃷˙ : ดฟหกดฟหดฟหดฟหดฟ","˙𐃷˙ : หกฟดดฟหดกฟหดฟหด","˙𐃷˙ : ดฟหดฟหดฟหเดหกเ","˙𐃷˙ : เดกหเดกหเหดเกหเห","˙𐃷˙ : กดเกหเเกหดเกเ"] },
  { q:"เหกเหกดเหกก", c:["หกเเกห้เ้ัะหพฟำำ","โฎฤฆโฤฆโฌฤฆโฌฤฆ","ฎโฤฆโฤฆโฤฆโโฤ","โ็๋ฏฌ็ฏโ็ฏโฌ็ฏโ็็","ฑฎโฌฏฆฌฏฆฌฆฏฌโ"],
    comments:["˙𐃷˙ : ฌฑฌฆฌฆฏฌฏฑฆฌฆฏ","˙𐃷˙ : ฑฌฆฌฆฏฑฌฆฏฌฏฆ","˙𐃷˙ : ฆฏฑฌฌฏฆฑฌฏฆฌ","˙𐃷˙ : ฆฏฌฑฌฏ(ฑฌฏฆ","˙𐃷˙ : ฆฌฆฏฌฏฆฌฆฏฌฆฏ"] },
  { q:"ดฟหำดหเกเกหดเกหเดเ", c:["หเกเกหเดกเหกเดกหหก","เกเหกเกเหดเกหดกห","่กด้กด้กด้กด้กดแพพพไำ","ดผหดเ้กหดเกหเดกห","เดกหเหกดเกหพหไำำะเ"],
    comments:["˙𐃷˙ : พหกดเกดเ้หกะหกพ","˙𐃷˙ : หเพหกเหก้ะพหหพ","˙𐃷˙ :เกหเกดหเหกดเกหดเ","˙𐃷˙ : พเหกเดหเหกเเกดหกห","˙𐃷˙ : กฟดฟหดเฟหเฟเฟ"] },
  { q:"ฟกหเฟหเฟหเหเฟหเก", c:["กฟหเฟหเฟหเฟหเฟหเฟห","ฟดำหดฟหดฟหดฟหดฟหด","ดฟหดฟหดฟำหดฟำหดฟหหด","ฟหำดฟหดฟหดฟดฟ","ำฟดฟหดเกดเหกเกหเดกห"],
    comments:["˙𐃷˙ : กูวางฮิปฮอป","˙𐃷˙ : ไว้บนบิ้ง","˙𐃷˙ : สำคัญซะ","˙𐃷˙ : ยิ่งกว่า","˙𐃷˙ : ภารกิจ"] },
  { q:"หหฟดกหฟกดฟห้้เด", c:["้เ้กด้กด้กด้กด้้ก","้กเด้กด้เกด้กด้เกด้เก","กดเ้พหพฟหำพดฟหกดฟหด","หกพเกหะเกหเกดหเหก","หกพเหเกหเกดเกหดเพ"],
    comments:["˙𐃷˙ : ฤฆฎโฤฆโฤฆฎโฤฆโ","˙𐃷˙ : ฤฆโฤฆโฤฆโฤ","˙𐃷˙ : ฤโฤโฤฆฎโฤฆโฤ","˙𐃷˙ : ฤฆโฎฤโฤฆโฤฆ","˙𐃷˙ : ฤโฤฆโฤฆโฤฆโฤฆ"] },
  { q:"พเหกเหกเกหพเกหเพพเเ", c:["หกพเกหเกหเกหเกหพหกพ","ฟำไพฟไำพฟพฟไพำฟำ","โฤฆโฤฆโฤฆฏโฤฆโฤโ","ฤฆโฏฤฆโฤฆโฤฆฏโฤฆโ","ฤโฆฏ็โฌฏฆ็ฏโฌ็็ฆ็"],
    comments:["˙𐃷˙ : ฤฆโฎฤโฤฎโฤฆ","˙𐃷˙ : ฑฏฆฌฆฏฌฏฆฌ","˙𐃷˙ : ฌฑฆฏฌฆฏฌฆฌฏฌ","˙𐃷˙ : ฆฌฆฏฌฌฏฆฌฆฏ","˙𐃷˙ : ฆฌฆฏฑฌฆฌโโโ"] },
  { q:"ฌฆ็ฏโ็ฏโฌ็ฏโ็ฏโ็", c:["ดฟหดฟหดำฟหดฟหดฟ","ฟดหดหดำหดฟหดหำดฟหดฟหดฟ","ฟดำดฟหดฟหดฟหดฟ","ฟดำดหผดหฟดฟหดฟหฟด","ฟดหำดฟหดฟหดฟหดฟหด"],
    comments:["˙𐃷˙ : ฟหดำฟหำดฟหดฟด","˙𐃷˙ : ฟดำฟดำฟหดหห","˙𐃷˙ : ฟหดำฟหดฟดำ","˙𐃷˙ : ฟหดดหดฟดำหดเ้กหเ","˙𐃷˙ : หกดเกหเหกเกดเหกกดเเ"] },
  { q:"ฟหดฟกหดฟหดฟหดฟไำ", c:["ฟดหฟหดำฟหดำไไไำ","ฟหดเกดดฟหำดฟหดฟหด","่กดเะ้กดเ้กด้กด้เกด","พำำไฟพๆไพๆะะ","ำดฟหดฟหดฟหดฟหดฟดฟ"],
    comments:["˙𐃷˙ : ฟำหดฟหดฟหำดฟหำดฟ","˙𐃷˙ : ฟหดฟหดฟหดฟหด","˙𐃷˙ : ฟดหำดฟหดฟหดฟห","˙𐃷˙ : ฟดหฟหดำฟดฟหดฟหด","˙𐃷˙ : หดฟหดฟหดฟหด"] },
  { q:"ฟดหดฟหดฟหดฟหดฟหดห", c:["ดฟหดฟหดฟหดฟหดฟ","ำฟหดฟหดฟหำดำฟหดฟ","ฟหดฟหดฟหดฟหด","หเกเหกเหกเหกเกหกด","หเหกเหกเหกเกหเหกหก"],
    comments:["˙𐃷˙ : เดกหเหดกหหกเ","˙𐃷˙ : กดเกด้กด้กดเก้กด้","˙𐃷˙ : ฟำไไำพฟหกดห","˙𐃷˙ : ดหเ้ด้ด่ดเดก่กดหพ","˙𐃷˙ : หำดหผดฟหดฟหหหด"] },
  { q:"ถามจริง กดมาถึงข้อนี้ได้ไง", c:["เก่ง","เวอร์","อะไรนะ","อ่อ","ไม่รู้"],
    comments:["˙𐃷˙ : หรอ","˙𐃷˙ : เออ","˙𐃷˙ : อะไร","˙𐃷˙ : อ่อ","˙𐃷˙ : เอ้า"] },
];

function getDrunkResult(score) {
  if (score >= -40 && score <= -11) return {
    title: "น้ำเปล่า", tag: "เด็กน้อยวัยอนุบาล",
    desc: "จริงป่ะเนี่ย เก็บความสดใสนี้ไว้นะ",
    color: "#4FC3F7", bg: "#E1F5FE", border: "#81D4FA", img: "img1.jpg"
  };
  if (score >= -10 && score <= 0) return {
    title: "น้ำอัดลม", tag: "น้องๆวัยประถม",
    desc: "เริ่มซ่าแล้วนะเนี่ยๆ",
    color: "#FF7043", bg: "#FBE9E7", border: "#FFAB91", img: "img2.jpg"
  };
  if (score >= 1 && score <= 5) return {
    title: "ค็อกเทล", tag: "มัธยมหัดผสม",
    desc: "แอบเข้าไปซื้อค็อกเทลในเซเว่นเนียนเลยนะ",
    color: "#AB47BC", bg: "#F3E5F5", border: "#CE93D8", img: "img3.jpg"
  };
  if (score >= 6 && score <= 10) return {
    title: "เบียร์", tag: "สายปาร์ตี้",
    desc: "สงกรานต์นี้แก้วเดียวกลับแน่นะ",
    color: "#F9A825", bg: "#FFFDE7", border: "#FFE082", img: "img4.jpg"
  };
  if (score >= 11 && score <= 20) return {
    title: "ไวน์", tag: "ผู้ดี",
    desc: "รวมหลอมกับเลือดพระเยซู",
    color: "#C62828", bg: "#FFEBEE", border: "#EF9A9A", img: "img5.jpg"
  };
  if (score >= 21 && score <= 30) return {
    title: "สุราขาว", tag: "ลุงแถวบ้าน",
    desc: "สมัยอ้าย อ้ายซั่วมาก่อนเจ้าอีก ...",
    color: "#37474F", bg: "#ECEFF1", border: "#B0BEC5", img: "img6.jpg"
  };
  if (score >= 31 && score <= 35) return {
    title: "Gin", tag: "รุ่นใหญ่",
    desc: "กินแล้วอย่าอ้วกก็พอนะพี่นะ",
    color: "#2E7D32", bg: "#E8F5E9", border: "#A5D6A7", img: "img7.jpg"
  };
  if (score >= 36 && score <= 37) return {
    title: "Vodka", tag: "รุ่นใหญ่วงการ",
    desc: "นี่มันระดับฅนตื่นเหล้าไปแล้ว",
    color: "#1565C0", bg: "#E3F2FD", border: "#90CAF9", img: "img8.jpg"
  };
  if (score >= 38 && score <= 40) return {
    title: "Absinthe", tag: "เวอร์ไปป่าว",
    desc: "เพลาๆเลย เดี๋ยวตายไว",
    color: "#1B5E20", bg: "#E8F5E9", border: "#66BB6A", img: "img9.jpg"
  };
  if (score > 40) return {
    title: "ขอบคุณที่มาเล่นครับ ", tag: "ไม่ต้องเป่าก็รู้",
    desc: "อยากได้เกียรติบัตรฟรี ยื่นมหาลัยได้แต่ไม่ติด ทักไอจี l.liupu.u",
    color: "#1B5E20", bg: "#E8F5E9", border: "#66BB6A", img: "img10.jpg"
  };
  return {
    title: "น้ำเปล่า", tag: "ใสมาก",
    desc: "ยิ่งกว่าน้ำแร่",
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