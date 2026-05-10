const giftPlan = [
  {
    date: "2026-05-11",
    title: "第一格：两只小朋友报到",
    gift: "两个玩偶的盲盒",
    message: "两只小朋友先替我来见你。盲盒拆开前有期待，认识一个人好像也是。",
    romance: "不用急着给我们的关系起名字，能慢慢靠近，本身就已经很珍贵了。",
    comfort: "如果今天有点焦虑，就先把呼吸放慢一点。你不用表现得一直很好，我也不会因为你偶尔低电量就离开。",
    game: "eitherOr",
    photos: ["./assets/photos/first-gift-countryside-growth.jpg", "./assets/photos/first-gift-carebear-bg.jpg"],
    stickers: [
      "./assets/cutouts/selected/labubu-cocoa.png",
      "./assets/cutouts/selected/zsiga-redhood.png",
      "./assets/stickers/flower-daisy.svg",
      "./assets/stickers/anime-puppy.svg",
    ],
    questions: [
      {
        text: "如果今天有一小段空闲，你更想怎么过？",
        options: ["安静待一会儿", "出去走一走"],
        myAnswer: "我大概率会想出去走走，但如果你累了，我也很愿意安静陪着。",
      },
      {
        text: "收到小惊喜时，你更喜欢哪一种？",
        options: ["直接告诉我", "留一点悬念"],
        myAnswer: "我喜欢留一点悬念，因为期待本身也挺可爱的。",
      },
      {
        text: "两只玩偶里，你会先拆哪一只？",
        options: ["看起来乖的", "看起来有个性的"],
        myAnswer: "我会先拆那只看起来有个性的，像是在认识一个小脾气。",
      },
    ],
  },
  {
    date: "2026-05-12",
    title: "第二格：好运小罐",
    gift: "小金豆",
    message: "一颗小小的好运豆，放在今天刚刚好。希望它能把你的心情垫高一点点。",
    romance: "我想把好运分你一点，把温柔也分你一点。不是很多，但每天都可以有一点。",
    comfort: "焦虑来的时候，先别急着责怪自己。你只是太认真地面对生活了，今天可以先少想一点。",
    game: "answerBottle",
    photos: ["./assets/photos/gold-bean-anime.svg"],
    stickers: [
      "./assets/cutouts/selected/labubu-prince.png",
      "./assets/cutouts/selected/star-pizza.png",
      "./assets/cutouts/selected/zsiga-blue.png",
      "./assets/stickers/flower-tulip.svg",
    ],
    prompts: [
      {
        question: "我不开心的时候，通常会……",
        myAnswer: "我可能会先安静一会儿，但其实也希望有人能轻轻问一句：要不要说说？",
      },
      {
        question: "我觉得舒服的聊天频率是……",
        myAnswer: "不用一直秒回，但我喜欢有来有回，有认真接住对方的话。",
      },
      {
        question: "我被关心时，最吃哪一种方式……",
        myAnswer: "不是很夸张的表达，是记得我随口说过的小事。",
      },
    ],
  },
  {
    date: "2026-05-16",
    title: "第三格：陪伴员",
    gift: "拉布布的大夏玩偶",
    message: "这一份大一点，像一个不会催你的陪伴员。它负责可爱，我负责慢慢了解你。",
    romance: "我喜欢那种不用用力证明的靠近，像晚风一样，轻轻在身边就好。",
    comfort: "你可以有很多小情绪，也可以有很多不确定。慢慢来，我不催你，也不把你的沉默理解成拒绝。",
    game: "mood",
    photos: ["./assets/photos/second-gift-labubu-summer.jpg"],
    stickers: [
      "./assets/cutouts/selected/star-pudding.png",
      "./assets/cutouts/selected/hirono-panda.png",
      "./assets/stickers/flower-bouquet.svg",
      "./assets/stickers/anime-cat.svg",
    ],
    moods: [
      {
        label: "晴天",
        text: "那今天就把快乐再放大一点。这个小礼物，算是给好心情加一颗糖。",
      },
      {
        label: "阴天",
        text: "那今天不用勉强开心。小礼物先放在这里，等你想打开的时候再打开。",
      },
      {
        label: "有点累",
        text: "那今天就不打扰你太久，只把这个小礼物轻轻放这儿。",
      },
      {
        label: "还不错",
        text: "那就很好。普通但舒服的一天，也值得有一个小小的奖励。",
      },
    ],
  },
  {
    date: "2026-05-20",
    title: "最终格：520收藏盒",
    gift: "最后的 520 礼盒",
    message: "这不是要你立刻回答什么，只是把这段时间准备的小心意，认真放进一个盒子里。",
    romance: "如果以后我们真的更靠近一点，我希望那不是因为某一句话逼出来的，而是因为相处本身让我们都觉得安心。",
    comfort: "不管你现在有没有答案，都没关系。你不用马上确定什么，也不用为了照顾谁的期待而紧张。",
    game: "heartSync",
    photos: ["./assets/photos/final-box-anime.svg"],
    stickers: [
      "./assets/cutouts/selected/labubu-big.png",
      "./assets/cutouts/selected/star-hidden.png",
      "./assets/cutouts/selected/hirono-tv.png",
      "./assets/cutouts/selected/zsiga-redhood.png",
      "./assets/stickers/flower-bouquet.svg",
      "./assets/stickers/anime-puppy.svg",
    ],
    syncIntro: "一个人写问题，一个人写答案。写完后拍一拍对方，等两个人都拍过，再让问题和答案相遇。",
  },
];

const STORAGE_KEY = "gift-quest-progress-v5";
const ANSWER_KEY = "gift-quest-answers-v4";
const FINAL_DAY = "2026-05-20";
const PREVIEW_ALL = new URLSearchParams(location.search).get("preview") === "1";

const dom = {
  daysLeft: document.querySelector("#daysLeft"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  resetBtn: document.querySelector("#resetBtn"),
  levelList: document.querySelector("#levelList"),
  stageDate: document.querySelector("#stageDate"),
  stageTitle: document.querySelector("#stageTitle"),
  stageStatus: document.querySelector("#stageStatus"),
  gameArea: document.querySelector("#gameArea"),
  dialog: document.querySelector("#giftDialog"),
  giftTitle: document.querySelector("#giftTitle"),
  giftMessage: document.querySelector("#giftMessage"),
  giftMedia: document.querySelector("#giftMedia"),
  closeDialog: document.querySelector("#closeDialog"),
};

let progress = readJson(STORAGE_KEY);
let savedAnswers = readJson(ANSWER_KEY);
let selectedIndex = getCurrentIndex();

function readJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function todayKey() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function dateToLocalNoon(key) {
  return new Date(`${key}T12:00:00+08:00`);
}

function isDateLocked(dateKey) {
  return !PREVIEW_ALL && dateKey > todayKey();
}

function isStepLocked(index) {
  return index > 0 && !progress[giftPlan[index - 1].date];
}

function isHidden(index) {
  return isStepLocked(index);
}

function getCurrentIndex() {
  const firstUnfinished = giftPlan.findIndex((level, index) => !progress[level.date] && !isStepLocked(index));
  if (firstUnfinished >= 0) return firstUnfinished;
  return giftPlan.length - 1;
}

function formatDate(dateKey) {
  const date = dateToLocalNoon(dateKey);
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function updateCountdown() {
  const today = dateToLocalNoon(todayKey());
  const final = dateToLocalNoon(FINAL_DAY);
  const left = Math.max(0, Math.ceil((final - today) / 86400000));
  dom.daysLeft.textContent = String(left).padStart(2, "0");
}

function renderLevels() {
  dom.levelList.innerHTML = "";
  giftPlan.forEach((level, index) => {
    const hidden = isHidden(index);
    const dateLocked = isDateLocked(level.date) && !hidden;
    const done = Boolean(progress[level.date]);
    const active = index === selectedIndex;
    const button = document.createElement("button");
    button.className = `level-card ${hidden ? "hidden-level" : ""} ${dateLocked ? "locked" : ""} ${done ? "done" : ""} ${active ? "active" : ""}`;
    button.type = "button";
    button.disabled = hidden;
    button.innerHTML = `
      <span class="level-icon">${done ? "OK" : hidden ? "??" : String(index + 1).padStart(2, "0")}</span>
      <span class="level-meta">
        <strong>${hidden ? "未解锁档案" : level.title}</strong>
        <span>${hidden ? "完成上一格后显示" : `${formatDate(level.date)} 到货`}</span>
      </span>
      <span class="level-badge">${hidden ? "隐藏" : dateLocked ? "待到货" : done ? "已收藏" : "当前"}</span>
    `;
    button.addEventListener("click", () => {
      if (hidden) return;
      selectedIndex = index;
      render();
    });
    dom.levelList.append(button);
  });
}

function renderProgress() {
  const done = giftPlan.filter((level) => progress[level.date]).length;
  dom.progressText.textContent = `${done} / ${giftPlan.length}`;
  dom.progressBar.style.width = `${(done / giftPlan.length) * 100}%`;
}

function renderStage() {
  const level = giftPlan[selectedIndex];
  const hidden = isHidden(selectedIndex);
  const dateLocked = isDateLocked(level.date);
  const done = Boolean(progress[level.date]);

  if (hidden) {
    dom.stageDate.textContent = "LOCKED FILE";
    dom.stageTitle.textContent = "未解锁档案";
    dom.stageStatus.textContent = "隐藏";
    renderHidden();
    return;
  }

  dom.stageDate.textContent = `${formatDate(level.date)} 到货`;
  dom.stageTitle.textContent = level.title;
  dom.stageStatus.textContent = dateLocked ? "待到货" : done ? "已收藏" : "等待打开";

  if (dateLocked) {
    renderDateLocked(level);
    return;
  }

  if (done) {
    renderCompleted(level);
    return;
  }

  if (level.game === "eitherOr") renderEitherOrGame(level);
  if (level.game === "answerBottle") renderAnswerBottleGame(level);
  if (level.game === "mood") renderMoodGame(level);
  if (level.game === "heartSync") renderHeartSyncGame(level);
}

function mediaMarkup(level, compact = false) {
  const photos = level.photos || [];
  const stickers = level.stickers || [];
  const photoItems = photos
    .map(
      (src) => `
        <figure class="photo-frame ${compact ? "compact" : ""}">
          <img src="${src}" alt="${level.gift} 的照片" />
        </figure>
      `,
    )
    .join("");
  const stickerItems = stickers
    .map(
      (src) => `
        <img class="meme-sticker" src="${src}" alt="可爱贴纸" />
      `,
    )
    .join("");

  if (!photoItems && !stickerItems) return "";
  return `
    <div class="media-shelf ${compact ? "compact" : ""}">
      ${photoItems}
      ${stickerItems ? `<div class="sticker-row">${stickerItems}</div>` : ""}
    </div>
  `;
}

function renderHidden() {
  dom.gameArea.innerHTML = `
    <div class="empty-state terminal-card">
      <div class="pixel-lock">LOCK</div>
      <p>后续档案已隐藏。完成当前格子后，下一份礼物才会出现。</p>
    </div>
  `;
}

function renderDateLocked(level) {
  dom.gameArea.innerHTML = `
    <div class="empty-state terminal-card">
      <div class="pixel-lock">WAIT</div>
      <p>${formatDate(level.date)} 到货后，这一格会自动打开。现在先把期待放进收藏册。</p>
    </div>
  `;
}

function renderCompleted(level) {
  const record = savedAnswers[level.date];
  const nextIndex = giftPlan.findIndex((item) => !progress[item.date]);
  dom.gameArea.innerHTML = `
    <div class="empty-state terminal-card completed-card">
      ${mediaMarkup(level)}
      <p>已收进收藏册：${level.gift}</p>
      ${record ? `<p class="saved-note">${record.summary}</p>` : ""}
      <div class="button-row">
        <button class="primary-button" type="button" id="reviewGift">查看这一份</button>
        ${nextIndex >= 0 && nextIndex !== selectedIndex ? `<button class="ghost-button" type="button" id="nextLevel">读取下一格</button>` : ""}
      </div>
    </div>
  `;
  document.querySelector("#reviewGift").addEventListener("click", () => openGift(level));
  const nextButton = document.querySelector("#nextLevel");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      selectedIndex = nextIndex;
      render();
    });
  }
}

function renderEitherOrGame(level) {
  let step = 0;
  const answers = [];

  const draw = () => {
    const current = level.questions[step];
    dom.gameArea.innerHTML = `
      <div class="game-panel">
        <div class="game-intro">
          <p>没有标准答案，只是交换一点点偏好。</p>
          <span class="mini-counter">${step + 1} / ${level.questions.length}</span>
        </div>
        <div class="question-card">
          <h3>${current.text}</h3>
          <div class="choice-grid">
            ${current.options
              .map(
                (option) => `
                  <button class="choice-button" type="button" data-answer="${option}">
                    ${option}
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="answer-reveal" id="answerReveal" hidden>
            <span>我的答案</span>
            <p>${current.myAnswer}</p>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll(".choice-button").forEach((button) => {
      button.addEventListener("click", () => {
        answers.push(`${current.text}：${button.dataset.answer}`);
        document.querySelectorAll(".choice-button").forEach((item) => {
          item.disabled = true;
          item.classList.toggle("selected", item === button);
        });
        document.querySelector("#answerReveal").hidden = false;
        window.setTimeout(() => {
          step += 1;
          if (step >= level.questions.length) {
            finishLevel(level, `她的选择：${answers.join(" / ")}`);
          } else {
            draw();
          }
        }, 1100);
      });
    });
  };

  draw();
}

function renderAnswerBottleGame(level) {
  dom.gameArea.innerHTML = `
    <div class="game-panel">
      <div class="game-intro">
        <p>选一张问题纸条，写不写都可以。重点不是答题，是更懂彼此一点。</p>
      </div>
      <div class="bottle-grid">
        ${level.prompts
          .map(
            (prompt, index) => `
              <button class="bottle-card" type="button" data-index="${index}">
                <span>纸条 ${index + 1}</span>
                <strong>${prompt.question}</strong>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="question-card bottle-answer" id="bottleAnswer" hidden></div>
    </div>
  `;

  document.querySelectorAll(".bottle-card").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = level.prompts[Number(button.dataset.index)];
      const panel = document.querySelector("#bottleAnswer");
      panel.hidden = false;
      panel.innerHTML = `
        <h3>${prompt.question}</h3>
        <textarea id="bottleText" maxlength="120" placeholder="可以写一句你的答案，也可以先留空。"></textarea>
        <div class="answer-reveal">
          <span>我的答案</span>
          <p>${prompt.myAnswer}</p>
        </div>
        <button class="primary-button" type="button" id="saveBottle">保存纸条</button>
      `;
      document.querySelectorAll(".bottle-card").forEach((item) => item.classList.toggle("selected", item === button));
      document.querySelector("#saveBottle").addEventListener("click", () => {
        const value = document.querySelector("#bottleText").value.trim();
        const summary = value ? `她留下的答案：${value}` : `她先收下了这个问题：${prompt.question}`;
        finishLevel(level, summary);
      });
    });
  });
}

function renderMoodGame(level) {
  dom.gameArea.innerHTML = `
    <div class="game-panel">
      <div class="game-intro">
        <p>点一下今天的心情，我会用更合适的方式把礼物放到你面前。</p>
      </div>
      <div class="mood-grid">
        ${level.moods
          .map(
            (mood) => `
              <button class="mood-button" type="button" data-label="${mood.label}" data-text="${mood.text}">
                <span>${mood.label}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <p class="soft-note" id="moodNote">不用每天都很好，真实一点也没关系。</p>
    </div>
  `;

  document.querySelectorAll(".mood-button").forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.dataset.label;
      const text = button.dataset.text;
      document.querySelectorAll(".mood-button").forEach((item) => {
        item.disabled = true;
        item.classList.toggle("selected", item === button);
      });
      document.querySelector("#moodNote").textContent = text;
      level.message = text;
      window.setTimeout(() => finishLevel(level, `今天的心情：${label}`), 900);
    });
  });
}

function renderHeartSyncGame(level) {
  dom.gameArea.innerHTML = `
    <div class="game-panel heart-sync-panel">
      <div class="game-intro">
        <p>${level.syncIntro}</p>
        <span class="mini-counter">心有灵犀</span>
      </div>
      <div class="sync-grid">
        <div class="sync-card" data-side="question">
          <span class="sync-role">写问题的人</span>
          <h3>先写一个问题</h3>
          <textarea id="syncQuestion" maxlength="80" placeholder="比如：如果今天像一种天气，会是什么？"></textarea>
          <button class="tap-button" type="button" data-tap="question">我写完了，拍一下</button>
        </div>
        <div class="sync-card" data-side="answer">
          <span class="sync-role">写答案的人</span>
          <h3>不看问题，先写答案</h3>
          <textarea id="syncAnswer" maxlength="80" placeholder="比如：一杯温热的奶茶，和一点点风。"></textarea>
          <button class="tap-button" type="button" data-tap="answer">我写完了，拍一下</button>
        </div>
      </div>
      <div class="soft-note sync-note" id="syncNote">
        两个人都拍过以后，写问题的人先发问题，写答案的人再发答案。违和也没关系，有时候会像短诗。
      </div>
      <div class="sync-reveal" id="syncReveal" hidden></div>
    </div>
  `;

  const state = { question: false, answer: false };
  const update = () => {
    const question = document.querySelector("#syncQuestion").value.trim();
    const answer = document.querySelector("#syncAnswer").value.trim();
    const bothReady = state.question && state.answer;
    const reveal = document.querySelector("#syncReveal");
    const note = document.querySelector("#syncNote");

    if (!bothReady) {
      const readyText = [
        state.question ? "问题已拍" : "问题还在路上",
        state.answer ? "答案已拍" : "答案还在路上",
      ].join(" / ");
      note.textContent = readyText;
      return;
    }

    reveal.hidden = false;
    reveal.innerHTML = `
      <div class="answer-reveal">
        <span>先发出问题</span>
        <p>${question || "她还没写问题，但这份空白也很像一个小小的悬念。"}</p>
      </div>
      <div class="answer-reveal answer-poem">
        <span>再发出答案</span>
        <p>${answer || "她还没写答案，那就把答案留给下一次靠近。"}</p>
      </div>
      <button class="primary-button" type="button" id="finishSync">收下这次默契</button>
    `;
    note.textContent = "问题和答案见面了。契合也好，错位也好，都很可爱。";
    document.querySelector("#finishSync").addEventListener("click", () => {
      finishLevel(level, `心有灵犀：${question || "未写问题"} / ${answer || "未写答案"}`);
    });
  };

  document.querySelectorAll(".tap-button").forEach((button) => {
    button.addEventListener("click", () => {
      const side = button.dataset.tap;
      state[side] = true;
      button.classList.add("selected");
      button.textContent = side === "question" ? "问题写完了" : "答案写完了";
      update();
    });
  });
}

function finishLevel(level, summary) {
  progress[level.date] = true;
  savedAnswers[level.date] = { summary };
  writeJson(STORAGE_KEY, progress);
  writeJson(ANSWER_KEY, savedAnswers);
  openGift(level);
  selectedIndex = getCurrentIndex();
  render();
}

function openGift(level) {
  dom.giftTitle.textContent = level.gift;
  dom.giftMessage.textContent = [level.message, level.romance, level.comfort].filter(Boolean).join("\n\n");
  dom.giftMedia.innerHTML = mediaMarkup(level, true);
  if (typeof dom.dialog.showModal === "function") {
    dom.dialog.showModal();
  } else {
    alert(`${level.gift}\n${dom.giftMessage.textContent}`);
  }
}

function render() {
  updateCountdown();
  renderProgress();
  renderLevels();
  renderStage();
}

dom.closeDialog.addEventListener("click", () => dom.dialog.close());
dom.resetBtn.addEventListener("click", () => {
  progress = {};
  savedAnswers = {};
  writeJson(STORAGE_KEY, progress);
  writeJson(ANSWER_KEY, savedAnswers);
  selectedIndex = getCurrentIndex();
  render();
});

render();
