const giftPlan = [
  {
    date: "2026-05-11",
    title: "第一格：两只小朋友报到",
    gift: "两个玩偶的盲盒",
    message: "今天先把烦恼存起来，小礼物来接班。两只小朋友先替我来见你。",
    romance: "不用急着给我们的关系起名字，能慢慢靠近，本身就已经很珍贵了。",
    comfort: "如果今天有点焦虑，就先把它暂时放进盒子里。你不用一直很好，偶尔低电量也没关系。",
    game: "worryBox",
    photos: ["./assets/photos/first-gift-countryside-growth.jpg", "./assets/photos/first-gift-carebear-bg.jpg"],
    stickers: [
      "./assets/cutouts/selected/labubu-cocoa.png",
      "./assets/cutouts/selected/zsiga-redhood.png",
      "./assets/stickers/flower-daisy.svg",
      "./assets/stickers/anime-puppy.svg",
    ],
    worries: ["有点焦虑", "想太多", "小疲惫", "不安感", "坏心情"],
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
    luckyBeans: ["好运豆", "安心豆", "睡好觉豆", "少焦虑豆", "开心豆"],
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
    date: "2026-05-14",
    title: "第三格：今日小纸条",
    gift: "拉布布的大夏玩偶",
    message: "今天的小纸条被你抽到了。礼物还是负责可爱，纸条负责让我们更懂一点彼此。",
    romance: "我很喜欢这种慢慢交换边界和喜好的感觉，不急着靠近很多，但每次都更真一点。",
    comfort: "你可以按自己的节奏回答，也可以只收下这张纸条。被了解不应该有压力，舒服才最重要。",
    game: "paperNote",
    photos: ["./assets/photos/second-gift-labubu-summer.jpg"],
    stickers: [
      "./assets/cutouts/selected/star-pudding.png",
      "./assets/cutouts/selected/hirono-panda.png",
      "./assets/stickers/flower-bouquet.svg",
      "./assets/stickers/anime-cat.svg",
    ],
    notes: [
      {
        label: "粉色纸条",
        text: "今天的问题：你最喜欢别人用什么方式关心你？",
        hint: "可以是记得小事、轻轻问候、陪你待着，也可以是给你一点空间。",
      },
      {
        label: "黄色纸条",
        text: "今天的问题：你有点累的时候，希望别人靠近一点，还是安静一点？",
        hint: "这不是考试，只是让我以后更懂怎么不打扰地关心你。",
      },
      {
        label: "蓝色纸条",
        text: "今天的问题：什么样的小事会让你突然觉得被认真放在心上？",
        hint: "有些喜欢很轻，但记住它的人会显得很珍贵。",
      },
    ],
    stamps: [
      {
        label: "记得小事",
        text: "原来你会被细节接住。那我以后要更认真一点点。",
      },
      {
        label: "轻轻问候",
        text: "那我会学着不吵闹地出现，像一盏不会晃眼的小灯。",
      },
      {
        label: "陪你待着",
        text: "有时候不需要很多话，只要有人在旁边就好了。",
      },
      {
        label: "给点空间",
        text: "收到。喜欢你，也要尊重你的节奏和安静。",
      },
    ],
  },
  {
    date: "2026-05-20",
    title: "最终格：520收藏盒",
    gift: "最后的 520 礼盒",
    message: "谢谢蓉蓉参与这本小小收藏档案。你每点开一格，都像认真收下了我藏起来的一点心意。",
    romance: "这次先到这里，尽情期待下次惊喜。偷偷问一句：如果以后有一个很认真的表白，你会希望它发生在什么地方？",
    comfort: "不用现在回答，也不用把它当成压力。只是我想慢慢知道，你心里觉得浪漫又安心的地方长什么样。",
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
    syncTheme: "主题：一个会让人觉得浪漫又安心的地方",
    syncIntro: "这一关是半心有灵犀：先知道主题，但不要互相看具体内容。一个人写问题，一个人写答案，写完后拍一拍对方。",
  },
];

const STORAGE_KEY = "gift-quest-progress-v5";
const ANSWER_KEY = "gift-quest-answers-v4";
const FINAL_DAY = "2026-05-20";
const PREVIEW_ALL = new URLSearchParams(location.search).get("preview") === "1";
const SYNC_CONFIG = {
  provider: "cloudbase",
  supabaseUrl: "https://znicrtdkhevmkcqeyuqq.supabase.co",
  supabaseAnonKey: "sb_publishable_o0RZgcLbW6K29H0X9ylgWg_n2dUx-p5",
  supabaseTable: "gift_records",
  leanCloudAppId: "",
  leanCloudAppKey: "",
  leanCloudServerUrl: "",
  leanCloudClass: "GiftRecord",
  cloudBaseEnvId: "rongrong0319-d1gz2i7rp82781b18",
  cloudBaseSubmitFunction: "submitRecord",
  cloudBaseListFunction: "listRecords",
  pairId: "rongrong-520-live",
};
const ACTIVE_PAIR_ID = PREVIEW_ALL ? `${SYNC_CONFIG.pairId}-preview` : SYNC_CONFIG.pairId;

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
  syncDialogRecord: document.querySelector("#syncDialogRecord"),
  closeDialog: document.querySelector("#closeDialog"),
  syncStatus: document.querySelector("#syncStatus"),
  syncList: document.querySelector("#syncList"),
  refreshSync: document.querySelector("#refreshSync"),
};

let progress = readJson(STORAGE_KEY);
let savedAnswers = readJson(ANSWER_KEY);
let selectedIndex = getCurrentIndex();
let activeDialogLevel = null;
let cloudBaseApp = null;

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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isSyncReady() {
  return Boolean(activeSyncProvider());
}

function isCloudBaseReady() {
  return Boolean(SYNC_CONFIG.cloudBaseEnvId && window.cloudbase);
}

function isLeanCloudReady() {
  return Boolean(SYNC_CONFIG.leanCloudAppId && SYNC_CONFIG.leanCloudAppKey && SYNC_CONFIG.leanCloudServerUrl);
}

function isSupabaseReady() {
  return Boolean(SYNC_CONFIG.supabaseUrl && SYNC_CONFIG.supabaseAnonKey);
}

function activeSyncProvider() {
  if (SYNC_CONFIG.provider === "cloudbase" && isCloudBaseReady()) return "cloudbase";
  if (SYNC_CONFIG.provider === "leancloud" && isLeanCloudReady()) return "leancloud";
  if (isSupabaseReady()) return "supabase";
  if (isCloudBaseReady()) return "cloudbase";
  if (isLeanCloudReady()) return "leancloud";
  return "";
}

async function getCloudBaseApp() {
  if (cloudBaseApp) return cloudBaseApp;
  cloudBaseApp = window.cloudbase.init({
    env: SYNC_CONFIG.cloudBaseEnvId,
  });
  await cloudBaseApp.auth().signInAnonymously();
  return cloudBaseApp;
}

function syncEndpoint(query = "") {
  const base = SYNC_CONFIG.supabaseUrl.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
  return `${base}/rest/v1/${SYNC_CONFIG.supabaseTable}${query}`;
}

function syncHeaders(extra = {}) {
  const headers = {
    apikey: SYNC_CONFIG.supabaseAnonKey,
    ...extra,
  };
  if (!SYNC_CONFIG.supabaseAnonKey.startsWith("sb_publishable_")) {
    headers.Authorization = `Bearer ${SYNC_CONFIG.supabaseAnonKey}`;
  }
  return headers;
}

function leanCloudEndpoint(query = "") {
  const base = SYNC_CONFIG.leanCloudServerUrl.replace(/\/$/, "");
  return `${base}/1.1/classes/${SYNC_CONFIG.leanCloudClass}${query}`;
}

function leanCloudHeaders(extra = {}) {
  return {
    "X-LC-Id": SYNC_CONFIG.leanCloudAppId,
    "X-LC-Key": SYNC_CONFIG.leanCloudAppKey,
    ...extra,
  };
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
  if (PREVIEW_ALL) return false;
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
  if (level.game === "worryBox") renderWorryBoxGame(level);
  if (level.game === "answerBottle") renderAnswerBottleGame(level);
  if (level.game === "mood") renderMoodGame(level);
  if (level.game === "paperNote") renderPaperNoteGame(level);
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
        ${record ? `<button class="ghost-button" type="button" id="syncCompleted">同步给他</button>` : ""}
        ${nextIndex >= 0 && nextIndex !== selectedIndex ? `<button class="ghost-button" type="button" id="nextLevel">读取下一格</button>` : ""}
      </div>
    </div>
  `;
  document.querySelector("#reviewGift").addEventListener("click", () => openGift(level));
  const syncButton = document.querySelector("#syncCompleted");
  if (syncButton) syncButton.addEventListener("click", () => syncRecord(level, syncButton));
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

function renderWorryBoxGame(level) {
  const required = Math.min(3, level.worries.length);
  const collected = new Set();

  const draw = () => {
    dom.gameArea.innerHTML = `
      <div class="game-panel worry-panel">
        <div class="game-intro">
          <p>点几个小烦恼泡泡，把它们丢进盒子里。收好以后，第一份小礼物来接班。</p>
          <span class="mini-counter">${collected.size} / ${required}</span>
        </div>
        <div class="worry-playground">
          <div class="worry-bubbles">
            ${level.worries
              .map(
                (worry, index) => `
                  <button class="worry-bubble ${collected.has(worry) ? "stored" : ""}" type="button" data-worry="${worry}" style="--i:${index}">
                    ${collected.has(worry) ? "已存好" : worry}
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="worry-box ${collected.size >= required ? "ready" : ""}" aria-hidden="true">
            <span>烦恼暂存盒</span>
            <strong>${collected.size >= required ? "READY" : "SAVE"}</strong>
          </div>
        </div>
        <p class="soft-note" id="worryNote">
          ${collected.size >= required ? "今天先把烦恼存起来，小礼物来接班。" : "不用解决所有事，先放下几个也很好。"}
        </p>
        ${collected.size >= required ? `<button class="primary-button" type="button" id="openWorryGift">让小礼物来接班</button>` : ""}
      </div>
    `;

    document.querySelectorAll(".worry-bubble").forEach((button) => {
      button.addEventListener("click", () => {
        collected.add(button.dataset.worry);
        draw();
      });
    });

    const finishButton = document.querySelector("#openWorryGift");
    if (finishButton) {
      finishButton.addEventListener("click", () => {
        finishLevel(level, `她暂时存好了：${Array.from(collected).join(" / ")}`);
      });
    }
  };

  draw();
}

function renderAnswerBottleGame(level) {
  const luckyBeans = level.luckyBeans || [];
  const picked = new Set();
  const required = luckyBeans.length ? 3 : 0;

  const drawBottle = () => {
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
          const prefix = picked.size ? `她先收集了：${Array.from(picked).join(" / ")}。` : "";
          const summary = value ? `${prefix}她留下的答案：${value}` : `${prefix}她先收下了这个问题：${prompt.question}`;
          finishLevel(level, summary);
        });
      });
    });
  };

  if (!required) {
    drawBottle();
    return;
  }

  const drawLuck = () => {
    dom.gameArea.innerHTML = `
      <div class="game-panel lucky-panel">
        <div class="game-intro">
          <p>先摇一摇好运小罐，点 ${required} 颗小金豆，再打开今天的问题纸条。</p>
          <span class="mini-counter">${picked.size} / ${required}</span>
        </div>
        <div class="lucky-jar">
          ${luckyBeans
            .map(
              (bean, index) => `
                <button class="lucky-bean ${picked.has(bean) ? "picked" : ""}" type="button" data-bean="${bean}" style="--i:${index}">
                  ${picked.has(bean) ? "已收下" : bean}
                </button>
              `,
            )
            .join("")}
        </div>
        <p class="soft-note">${picked.size >= required ? "好运已装好，可以打开问题纸条啦。" : "今天先收一点点好运，剩下的慢慢来。"}</p>
        ${picked.size >= required ? `<button class="primary-button" type="button" id="openBottle">打开答案瓶</button>` : ""}
      </div>
    `;

    document.querySelectorAll(".lucky-bean").forEach((button) => {
      button.addEventListener("click", () => {
        picked.add(button.dataset.bean);
        drawLuck();
      });
    });

    const openButton = document.querySelector("#openBottle");
    if (openButton) openButton.addEventListener("click", drawBottle);
  };

  drawLuck();
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

function renderPaperNoteGame(level) {
  dom.gameArea.innerHTML = `
    <div class="game-panel paper-note-panel">
      <div class="game-intro">
        <p>点开一张小纸条，再盖一个小印章。它不是要你立刻说很多，只是让我更懂你一点。</p>
        <span class="mini-counter">今日小纸条</span>
      </div>
      <div class="paper-grid">
        ${level.notes
          .map(
            (note, index) => `
              <button class="paper-card paper-${index + 1}" type="button" data-index="${index}">
                <span>${note.label}</span>
                <strong>CLICK</strong>
              </button>
            `,
          )
          .join("")}
      </div>
      <div class="question-card paper-opened" id="paperOpened" hidden></div>
    </div>
  `;

  document.querySelectorAll(".paper-card").forEach((button) => {
    button.addEventListener("click", () => {
      const note = level.notes[Number(button.dataset.index)];
      const panel = document.querySelector("#paperOpened");
      panel.hidden = false;
      document.querySelectorAll(".paper-card").forEach((item) => {
        item.disabled = true;
        item.classList.toggle("selected", item === button);
      });
      panel.innerHTML = `
        <span class="sync-role">轻轻的话</span>
        <h3>${note.text}</h3>
        <p class="saved-note">${note.hint}</p>
        <div class="stamp-grid">
          ${level.stamps
            .map(
              (stamp) => `
                <button class="stamp-button" type="button" data-label="${stamp.label}" data-text="${stamp.text}">
                  ${stamp.label}
                </button>
              `,
            )
            .join("")}
        </div>
        <p class="soft-note" id="stampReply">选一个最接近你的答案的小印章。</p>
      `;

      document.querySelectorAll(".stamp-button").forEach((stampButton) => {
        stampButton.addEventListener("click", () => {
          document.querySelectorAll(".stamp-button").forEach((item) => {
            item.disabled = true;
            item.classList.toggle("selected", item === stampButton);
          });
          document.querySelector("#stampReply").textContent = stampButton.dataset.text;
          window.setTimeout(() => {
            finishLevel(level, `今日小纸条：${note.text} / 她盖下了「${stampButton.dataset.label}」`);
          }, 900);
        });
      });
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
      <div class="sync-theme-card">
        <span>本关主题</span>
        <strong>${level.syncTheme}</strong>
        <p>可以想一个地点、一个画面，或者一种让你觉得舒服的氛围。</p>
      </div>
      <div class="sync-grid">
        <div class="sync-card" data-side="question">
          <span class="sync-role">写问题的人</span>
          <h3>先写一个问题</h3>
          <textarea id="syncQuestion" maxlength="80" placeholder="比如：如果以后有一句很重要的话，你希望在哪里听到？"></textarea>
          <button class="tap-button" type="button" data-tap="question">我写完了，拍一下</button>
        </div>
        <div class="sync-card" data-side="answer">
          <span class="sync-role">写答案的人</span>
          <h3>不看问题，先写答案</h3>
          <textarea id="syncAnswer" maxlength="80" placeholder="比如：有晚风、能慢慢说话、不用赶时间的地方。"></textarea>
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
  activeDialogLevel = level;
  const record = savedAnswers[level.date];
  dom.giftTitle.textContent = level.gift;
  dom.giftMessage.textContent = [level.message, level.romance, level.comfort].filter(Boolean).join("\n\n");
  dom.giftMedia.innerHTML = mediaMarkup(level, true);
  dom.syncDialogRecord.hidden = !record;
  dom.syncDialogRecord.textContent = "同步给他";
  if (typeof dom.dialog.showModal === "function") {
    dom.dialog.showModal();
  } else {
    alert(`${level.gift}\n${dom.giftMessage.textContent}`);
  }
}

async function syncRecord(level, button) {
  const record = savedAnswers[level.date];
  if (!record) return;

  if (!isSyncReady()) {
    const text = `小记录｜${level.title}\n${record.summary}`;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "已复制，先发微信";
    } catch {
      button.textContent = "未连接云端";
    }
    renderSyncBoard("还没连接云端。已尽量复制小纸条，可以先微信发给你。");
    return;
  }

  button.disabled = true;
  button.textContent = "同步中...";
  try {
    const payload = {
      pair_id: ACTIVE_PAIR_ID,
      level_date: level.date,
      level_title: level.title,
      gift: level.gift,
      summary: record.summary,
    };
    if (activeSyncProvider() === "cloudbase") {
      const app = await getCloudBaseApp();
      const response = await app.callFunction({
        name: SYNC_CONFIG.cloudBaseSubmitFunction,
        data: payload,
      });
      if (response.result && response.result.ok === false) throw new Error(response.result.message || "CloudBase failed");
    } else if (activeSyncProvider() === "leancloud") {
      const response = await fetch(leanCloudEndpoint(), {
        method: "POST",
        headers: leanCloudHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    } else {
      const response = await fetch(syncEndpoint(), {
        method: "POST",
        headers: syncHeaders({
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        }),
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
    }
    button.textContent = "已同步";
    await loadSyncRecords();
  } catch {
    button.disabled = false;
    button.textContent = "同步失败，再试一次";
  }
}

function renderSyncBoard(message = "") {
  if (!isSyncReady()) {
    dom.syncStatus.textContent = "未连接云端";
    dom.syncList.innerHTML = `
      <p class="sync-empty">${message || "同步功能已做好，填入 Supabase URL 和 anon key 后就能使用。"}</p>
    `;
    return;
  }
  const providerNames = {
    cloudbase: "腾讯云 CloudBase",
    leancloud: "LeanCloud",
    supabase: "Supabase",
  };
  const provider = providerNames[activeSyncProvider()] || "云端";
  dom.syncStatus.textContent = message || `已连接 ${provider}`;
}

async function loadSyncRecords() {
  if (!isSyncReady()) {
    renderSyncBoard();
    return;
  }

  dom.syncStatus.textContent = "读取中...";
  try {
    let records = [];
    if (activeSyncProvider() === "cloudbase") {
      const app = await getCloudBaseApp();
      const response = await app.callFunction({
        name: SYNC_CONFIG.cloudBaseListFunction,
        data: { pair_id: ACTIVE_PAIR_ID },
      });
      if (response.result && response.result.ok === false) throw new Error(response.result.message || "CloudBase failed");
      records = response.result.records || [];
    } else if (activeSyncProvider() === "leancloud") {
      const where = encodeURIComponent(JSON.stringify({ pair_id: ACTIVE_PAIR_ID }));
      const query = `?where=${where}&order=-createdAt&limit=20`;
      const response = await fetch(leanCloudEndpoint(query), {
        headers: leanCloudHeaders(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      records = data.results || [];
    } else {
      const query = `?pair_id=eq.${encodeURIComponent(ACTIVE_PAIR_ID)}&select=level_date,level_title,gift,summary,created_at&order=created_at.desc&limit=20`;
      const response = await fetch(syncEndpoint(query), {
        headers: syncHeaders(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      records = await response.json();
    }
    dom.syncStatus.textContent = records.length ? `共 ${records.length} 条` : "暂无记录";
    dom.syncList.innerHTML = records.length
      ? records
          .map(
            (record) => `
              <article class="sync-record">
                <span>${escapeHtml(record.level_date || "")}</span>
                <strong>${escapeHtml(record.level_title || record.gift || "小记录")}</strong>
                <p>${escapeHtml(record.summary || "")}</p>
              </article>
            `,
          )
          .join("")
      : `<p class="sync-empty">还没有收到记录。</p>`;
  } catch {
    renderSyncBoard("云端读取失败，检查 Supabase 配置和表权限。");
  }
}

function render() {
  updateCountdown();
  renderProgress();
  renderLevels();
  renderStage();
}

dom.closeDialog.addEventListener("click", () => dom.dialog.close());
dom.syncDialogRecord.addEventListener("click", () => {
  if (activeDialogLevel) syncRecord(activeDialogLevel, dom.syncDialogRecord);
});
dom.refreshSync.addEventListener("click", loadSyncRecords);
dom.resetBtn.addEventListener("click", () => {
  progress = {};
  savedAnswers = {};
  writeJson(STORAGE_KEY, progress);
  writeJson(ANSWER_KEY, savedAnswers);
  selectedIndex = getCurrentIndex();
  render();
});

render();
loadSyncRecords();
