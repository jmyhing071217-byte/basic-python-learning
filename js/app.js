/**
 * PYTHON LAB - NEXT-GEN APP CONTROLLER
 */

const AppState = {
  currentChapterId: "chap-1",
  currentStepIndex: 0,
  completedChapters: new Set(),
  completedSteps: new Set(),
  isDeckExpanded: false,
  activeTab: "tutorial",
  isRunning: false,
  playgroundVisible: true,
  lang: localStorage.getItem("pylab_lang") || "zh"
};
window.AppState = AppState;

// 7. 色彩主题体系映射 (丰富色调层次，支持中英双语分类键名)
const CATEGORY_THEMES = {
  "起步入门": {
    name: "起步入门",
    btnClass: "theme-cyan-btn",
    activeGradient: "bg-gradient-to-r from-sky-500 to-blue-600 shadow-sky-500/35",
    textAccent: "text-sky-400",
    badgeBg: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    dotColor: "bg-sky-400",
    accentHex: "#38bdf8",
  },
  "Getting Started": {
    name: "Getting Started",
    btnClass: "theme-cyan-btn",
    activeGradient: "bg-gradient-to-r from-sky-500 to-blue-600 shadow-sky-500/35",
    textAccent: "text-sky-400",
    badgeBg: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    dotColor: "bg-sky-400",
    accentHex: "#38bdf8",
  },
  "流程控制": {
    name: "流程控制",
    btnClass: "theme-purple-btn",
    activeGradient: "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-purple-500/35",
    textAccent: "text-purple-400",
    badgeBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    dotColor: "bg-purple-400",
    accentHex: "#c084fc",
  },
  "Control Flow": {
    name: "Control Flow",
    btnClass: "theme-purple-btn",
    activeGradient: "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-purple-500/35",
    textAccent: "text-purple-400",
    badgeBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    dotColor: "bg-purple-400",
    accentHex: "#c084fc",
  },
  "数据容器": {
    name: "数据容器",
    btnClass: "theme-emerald-btn",
    activeGradient: "bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/35",
    textAccent: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dotColor: "bg-emerald-400",
    accentHex: "#34d399",
  },
  "Data Structures": {
    name: "Data Structures",
    btnClass: "theme-emerald-btn",
    activeGradient: "bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/35",
    textAccent: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dotColor: "bg-emerald-400",
    accentHex: "#34d399",
  },
  "工程组织": {
    name: "工程组织",
    btnClass: "theme-amber-btn",
    activeGradient: "bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/35",
    textAccent: "text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dotColor: "bg-amber-400",
    accentHex: "#fbbf24",
  },
  "Project Organization": {
    name: "Project Organization",
    btnClass: "theme-amber-btn",
    activeGradient: "bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/35",
    textAccent: "text-amber-400",
    badgeBg: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dotColor: "bg-amber-400",
    accentHex: "#fbbf24",
  },
  "高级特性": {
    name: "高级特性",
    btnClass: "theme-rose-btn",
    activeGradient: "bg-gradient-to-r from-rose-500 to-pink-600 shadow-rose-500/35",
    textAccent: "text-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    dotColor: "bg-rose-400",
    accentHex: "#fb7185",
  },
  "Advanced Features": {
    name: "Advanced Features",
    btnClass: "theme-rose-btn",
    activeGradient: "bg-gradient-to-r from-rose-500 to-pink-600 shadow-rose-500/35",
    textAccent: "text-rose-400",
    badgeBg: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    dotColor: "bg-rose-400",
    accentHex: "#fb7185",
  },
  "实战综合": {
    name: "实战综合",
    btnClass: "theme-gold-btn",
    activeGradient: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-amber-500/40",
    textAccent: "text-amber-300",
    badgeBg: "bg-amber-400/15 text-amber-300 border border-amber-400/30",
    dotColor: "bg-yellow-400",
    accentHex: "#facc15",
  },
  "Practical Projects": {
    name: "Practical Projects",
    btnClass: "theme-gold-btn",
    activeGradient: "bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 shadow-amber-500/40",
    textAccent: "text-amber-300",
    badgeBg: "bg-amber-400/15 text-amber-300 border border-amber-400/30",
    dotColor: "bg-yellow-400",
    accentHex: "#facc15",
  }
};

function getCategoryTheme(category) {
  return CATEGORY_THEMES[category] || CATEGORY_THEMES["起步入门"] || CATEGORY_THEMES["Getting Started"];
}

// 5. 悬停气泡提示 (基于视口绝对定位，避免被滚动条裁剪，高阶毛玻璃微光)
function showRailTooltip(event, number, title, category, stepCount, accentHex) {
  let tooltip = document.getElementById("railFloatingTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "railFloatingTooltip";
    tooltip.className = "fixed pointer-events-none opacity-0 invisible transition-all duration-200 z-50 px-3.5 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-white text-xs shadow-2xl backdrop-blur-2xl flex items-center gap-3 whitespace-nowrap";
    document.body.appendChild(tooltip);
  }

  const chapterLabel = AppState.lang === "en" ? `Chapter ${number}` : `第 ${number} 章`;
  const stepsLabel = AppState.lang === "en" ? `${stepCount} steps` : `${stepCount} 闯关步骤`;

  tooltip.innerHTML = `
    <span class="font-mono font-black px-2 py-0.5 rounded-lg text-xs" style="background: ${accentHex}20; color: ${accentHex}; border: 1px solid ${accentHex}40;">${chapterLabel}</span>
    <div class="flex flex-col">
      <span class="font-extrabold text-slate-100 tracking-tight text-xs">${title}</span>
      <span class="text-[10px] text-slate-400 font-medium mt-0.5">
        <span style="color: ${accentHex}">●</span> ${category} · ${stepsLabel}
      </span>
    </div>
  `;

  const rect = event.currentTarget.getBoundingClientRect();
  tooltip.style.top = `${rect.top + rect.height / 2}px`;
  tooltip.style.right = `${window.innerWidth - rect.left + 12}px`;
  tooltip.style.transform = "translateY(-50%)";
  tooltip.classList.remove("opacity-0", "invisible");
  tooltip.classList.add("opacity-100", "visible");
}

function hideRailTooltip() {
  const tooltip = document.getElementById("railFloatingTooltip");
  if (!tooltip) return;
  tooltip.classList.remove("opacity-100", "visible");
  tooltip.classList.add("opacity-0", "invisible");
}

document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  initTheme();
  // 根据用户偏好语言激活对应题库与代码片段
  if (AppState.lang === "en" && window.CHAPTERS_DATA_EN) {
    CHAPTERS_DATA = window.CHAPTERS_DATA_EN;
    CODE_SNIPPETS = window.CODE_SNIPPETS_EN;
  } else if (window.CHAPTERS_DATA_ZH) {
    CHAPTERS_DATA = window.CHAPTERS_DATA_ZH;
    CODE_SNIPPETS = window.CODE_SNIPPETS_ZH;
  }
  window.CHAPTERS_DATA = CHAPTERS_DATA;
  window.CODE_SNIPPETS = CODE_SNIPPETS;

  applyI18n();
  initSidebar();
  renderRightRail();
  renderCurrentChapter();
  initEditor();
  initSnippets();
  initPlayground();
  initEventListeners();
  initCommandPalette();
  initInertialScroll();
  renderCheatSheet();
  updateProgressUI();

  // 支持 URL 参数快速调试与深链跳转 (?lang=en, ?sidebar=1, ?deck=1, ?chap=chap-2&step=1)
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang")) {
      toggleLanguage(params.get("lang"));
    }
    if (params.get("chap")) {
      const targetStep = parseInt(params.get("step") || "0", 10);
      switchChapter(params.get("chap"), targetStep);
    }
    if (params.get("deck") === "1" || params.get("deck") === "true") {
      AppState.isDeckExpanded = true;
      renderStepNavZone();
      renderStepCardContent();
    }
    if (params.get("sidebar") === "1" || params.get("sidebar") === "true") {
      toggleSidebar(true);
    }
  } catch (err) {
    console.warn("URL params parse warning:", err);
  }
});

function loadProgress() {
  try {
    const saved = localStorage.getItem("pylab_progress");
    if (saved) {
      AppState.completedChapters = new Set(JSON.parse(saved));
    }
    const savedSteps = localStorage.getItem("pylab_completed_steps");
    if (savedSteps) {
      AppState.completedSteps = new Set(JSON.parse(savedSteps));
    }
  } catch (e) {
    console.error("加载进度失败:", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      "pylab_progress",
      JSON.stringify(Array.from(AppState.completedChapters))
    );
    localStorage.setItem(
      "pylab_completed_steps",
      JSON.stringify(Array.from(AppState.completedSteps))
    );
    updateProgressUI();
  } catch (e) {
    console.error("保存进度失败:", e);
  }
}

// 永久锁定暗色星云模式，彻底移除明亮主题
function initTheme() {
  document.documentElement.classList.add("dark");
  document.documentElement.classList.remove("light");
  localStorage.setItem("pylab_theme", "dark");
}

function toggleTheme() {
  // 明亮模式已永久删除，保持顶级暗黑流光美学
  initTheme();
}

function updateThemeIcon() {
  // 主题切换已优化为语言切换
}

function initSidebar(filterQuery = "") {
  const container = document.getElementById("sidebarChapters");
  if (!container) return;

  const query = filterQuery.trim().toLowerCase();
  let html = "";

  const groups = {};
  CHAPTERS_DATA.forEach(chap => {
    if (query) {
      const matchTitle = chap.title.toLowerCase().includes(query);
      const matchSummary = chap.summary.toLowerCase().includes(query);
      const matchStep = chap.steps.some(s => s.title.toLowerCase().includes(query));
      if (!matchTitle && !matchSummary && !matchStep) return;
    }
    if (!groups[chap.category]) groups[chap.category] = [];
    groups[chap.category].push(chap);
  });

  if (Object.keys(groups).length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-xs text-slate-500">${t("sidebar_empty")}</div>`;
    return;
  }

  for (const [category, chaps] of Object.entries(groups)) {
    const theme = getCategoryTheme(category);
    const countLabel = AppState.lang === "en" ? `${chaps.length} chs` : `${chaps.length} 章节`;
    html += `
      <div class="mb-4">
        <div class="px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${theme.textAccent} flex items-center justify-between">
          <span>${category}</span>
          <span class="text-[9px] opacity-70">${countLabel}</span>
        </div>
        <div class="space-y-0.5 mt-1">
    `;

    chaps.forEach(chap => {
      const isActive = chap.id === AppState.currentChapterId;
      const isCompleted = AppState.completedChapters.has(chap.id);

      html += `
        <div onclick="switchChapter('${chap.id}', 0)"
             class="group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
               isActive
                 ? `${theme.activeGradient} text-white shadow-md`
                 : "text-slate-100 hover:bg-white/10 hover:text-white"
             }">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
              isActive ? "bg-white/20 text-white" : "bg-white/10 text-sky-400 border border-white/15"
            }">${chap.number}</span>
            <span class="truncate text-white font-medium">${chap.title}</span>
          </div>
          <div class="flex items-center gap-1 shrink-0 ml-2">
            ${
              isCompleted
                ? `<span class="text-xs ${isActive ? 'text-white' : 'text-emerald-400'} font-bold">✓</span>`
                : `<span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white/70' : 'bg-slate-300 dark:bg-slate-700'}"></span>`
            }
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  }

  container.innerHTML = html;
}

// ==========================================================================
// 1. 庆典礼花与微粒爆炸系统 (Celebration Confetti Particle Engine)
// ==========================================================================
class ConfettiEngine {
  constructor(canvasId = "confettiCanvas") {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth * window.devicePixelRatio;
    this.canvas.height = window.innerHeight * window.devicePixelRatio;
    if (this.ctx) {
      this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }

  burst(originX, originY, count = 75) {
    if (!this.canvas) {
      this.canvas = document.getElementById("confettiCanvas");
      if (this.canvas) this.ctx = this.canvas.getContext("2d");
    }
    if (!this.ctx) return;
    this.resize();

    const colors = ["#38bdf8", "#34d399", "#c084fc", "#fbbf24", "#fb7185", "#ffffff", "#60a5fa", "#a78bfa"];
    const shapes = ["rect", "circle", "star", "diamond"];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.7;
      const speed = Math.random() * 9 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (Math.random() * 4 + 2.5),
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 14,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012,
        gravity: 0.22,
        friction: 0.98
      });
    }

    if (!this.animationId) {
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.rotation += p.rotationSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > window.innerHeight) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.shape === "rect") {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      } else if (p.shape === "circle") {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.shape === "diamond") {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -p.size);
        this.ctx.lineTo(p.size * 0.8, 0);
        this.ctx.lineTo(0, p.size);
        this.ctx.lineTo(-p.size * 0.8, 0);
        this.ctx.closePath();
        this.ctx.fill();
      } else if (p.shape === "star") {
        this.drawStar(this.ctx, 0, 0, 4, p.size, p.size / 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.render());
    } else {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.animationId = null;
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;
      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
  }
}

let confettiInstance = null;
function getConfettiEngine() {
  if (!confettiInstance) {
    confettiInstance = new ConfettiEngine();
  }
  return confettiInstance;
}

let isStepTransitioning = false;

function switchChapter(chapId, stepIndex = 0) {
  const performSwitch = () => {
    AppState.currentChapterId = chapId;
    AppState.currentStepIndex = stepIndex;
    AppState.isDeckExpanded = false; // 换章时默认回到聚焦叠卡
    initSidebar();
    renderRightRail(); // 触发右侧竖轨当前项展开与平滑过渡
    renderCurrentChapter("circular-reveal-enter");
    toggleSidebar(false); // 选完章节自动收起抽屉，立即聚焦学习内容
    const mainView = document.getElementById("tutorialView");
    if (mainView) mainView.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentCard = document.getElementById("activeStepCard");
  if (currentCard && chapId !== AppState.currentChapterId) {
    currentCard.style.transition = "opacity 0.14s ease-out, transform 0.14s ease-out";
    currentCard.style.opacity = "0";
    currentCard.style.transform = "translateY(14px) scale(0.985)";
    setTimeout(performSwitch, 140);
  } else {
    performSwitch();
  }
}

// 6. 圆形扩散转场切换步骤 (Circular Reveal Transition)
function switchStep(stepIndex, clickEvent = null) {
  if (stepIndex === AppState.currentStepIndex && !AppState.isDeckExpanded) return;
  if (isStepTransitioning) return;

  const chap = CHAPTERS_DATA.find(c => c.id === AppState.currentChapterId);
  if (!chap || stepIndex < 0 || stepIndex >= chap.steps.length) return;

  const cardContainer = document.getElementById("stepCardContainer");
  const currentCard = document.getElementById("activeStepCard");

  if (!cardContainer || !currentCard) {
    AppState.currentStepIndex = stepIndex;
    AppState.isDeckExpanded = false;
    renderCurrentChapter("circular-reveal-enter");
    return;
  }

  isStepTransitioning = true;

  // 1. 计算圆形扩散原点 (Origin X & Y for Circular Reveal)
  let originX = "50%";
  let originY = "50%";
  if (clickEvent && cardContainer) {
    const rect = cardContainer.getBoundingClientRect();
    originX = `${Math.max(0, Math.min(rect.width, clickEvent.clientX - rect.left))}px`;
    originY = `${Math.max(0, Math.min(rect.height, clickEvent.clientY - rect.top))}px`;
  }
  cardContainer.style.setProperty("--reveal-x", originX);
  cardContainer.style.setProperty("--reveal-y", originY);

  // 伴生光晕冲击波环 (Luminous Shockwave Ripple)
  const ring = document.createElement("div");
  ring.className = "luminous-shockwave-ring";
  ring.style.setProperty("--reveal-x", originX);
  ring.style.setProperty("--reveal-y", originY);
  cardContainer.appendChild(ring);
  setTimeout(() => ring.remove(), 600);

  // 2. 状态更新与吸附卡画线同步
  AppState.currentStepIndex = stepIndex;
  AppState.isDeckExpanded = false; // 切步自动聚焦单卡
  renderStepNavZone();
  renderChapterFooter();

  // 3. 顺滑回滚视野顶部
  const mainView = document.getElementById("tutorialView");
  if (mainView && mainView.scrollTop > 0) {
    mainView.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 4. 执行圆形扩散转场进入新步骤
  renderStepCardContent("circular-reveal-enter");

  setTimeout(() => {
    isStepTransitioning = false;
  }, 440);
}

// 1. 完成反馈按钮处理 (Completion Feedback Button & Confetti & Linkage)
function handleChapterCompletionFeedback(event, chapId) {
  const btn = event ? event.currentTarget : document.getElementById("completeFeedbackBtn");
  const isCompleted = AppState.completedChapters.has(chapId);
  const chap = CHAPTERS_DATA.find(c => c.id === chapId);
  if (!chap) return;

  // 粒子爆炸原点定位
  let clickX = window.innerWidth / 2;
  let clickY = window.innerHeight / 2;
  if (btn) {
    const rect = btn.getBoundingClientRect();
    clickX = rect.left + rect.width / 2;
    clickY = rect.top + rect.height / 2;
  } else if (event) {
    clickX = event.clientX;
    clickY = event.clientY;
  }

  if (isCompleted) {
    AppState.completedChapters.delete(chapId);
    showToast(AppState.lang === "en" ? "Chapter mastery reset" : "已重置本章节掌握标记", "info");
  } else {
    AppState.completedChapters.add(chapId);
    
    // 2. 勾选联动：自动将本章全部步骤标记为通关
    chap.steps.forEach((s, sIdx) => {
      AppState.completedSteps.add(`${chapId}_${sIdx}`);
    });

    // 触发粒子爆炸
    getConfettiEngine().burst(clickX, clickY, 80);

    // 按钮弹跳与微光光环
    if (btn) {
      btn.classList.add("completion-pop-anim");
      setTimeout(() => btn.classList.remove("completion-pop-anim"), 550);
    }

    showToast(AppState.lang === "en" ? `🎉 Congratulations! Mastered Level ${chap.number} [${chap.title}]!` : `🎉 恭喜达成第 ${chap.number} 关【${chap.title}】全部成就！`, "success");
  }

  saveProgress();
  linkageUpdateAll(true);
}

// 2. 步骤单项勾选联动 (Step-Level Completion Check & Linkage)
function toggleStepComplete(chapId, stepIdx, event) {
  if (event) event.stopPropagation();
  const key = `${chapId}_${stepIdx}`;
  const isDone = AppState.completedSteps.has(key);

  if (isDone) {
    AppState.completedSteps.delete(key);
    showToast(AppState.lang === "en" ? `Undone Step 0${stepIdx + 1}` : `已撤销步骤 0${stepIdx + 1} 勾选`, "info");
  } else {
    AppState.completedSteps.add(key);

    // 微粒子反馈
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      getConfettiEngine().burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
    }
    showToast(AppState.lang === "en" ? `✓ Mastered Step 0${stepIdx + 1}!` : `✓ 已通关步骤 0${stepIdx + 1}！`, "success");

    // 检查是否全章节完成
    const chap = CHAPTERS_DATA.find(c => c.id === chapId);
    if (chap) {
      const allDone = chap.steps.every((s, i) => AppState.completedSteps.has(`${chapId}_${i}`));
      if (allDone && !AppState.completedChapters.has(chapId)) {
        AppState.completedChapters.add(chapId);
        showToast(AppState.lang === "en" ? `🏆 Fantastic! All ${chap.steps.length} steps completed!` : `🏆 太强了！本章全部 ${chap.steps.length} 个步骤已全部通关！`, "success");
        getConfettiEngine().burst(window.innerWidth / 2, window.innerHeight / 3, 90);
      }
    }
  }

  saveProgress();
  linkageUpdateAll(true);
}

// 3. 叠卡展开与收起切换 (Stacked Cards Deck Mode Toggle)
function toggleDeckExpand(event) {
  if (event) event.stopPropagation();
  AppState.isDeckExpanded = !AppState.isDeckExpanded;
  renderStepNavZone();
  renderStepCardContent("circular-reveal-enter");
  showToast(AppState.lang === "en" ? (AppState.isDeckExpanded ? "🗂️ Panoramic cascade view expanded!" : "📖 Collapsed to focused card mode!") : (AppState.isDeckExpanded ? "🗂️ 已展开全景级联卡片视图！" : "📖 已收起为聚焦叠卡模式！"), "info");
}

function selectDeckCard(sIdx, event) {
  if (event) event.stopPropagation();
  AppState.currentStepIndex = sIdx;
  AppState.isDeckExpanded = false;
  renderStepNavZone();
  renderStepCardContent("circular-reveal-enter");
  renderChapterFooter();
  showToast(AppState.lang === "en" ? `Focused on Step 0${sIdx + 1}` : `已聚焦步骤 0${sIdx + 1}`, "info");
}

// 全局勾选联动刷新
function linkageUpdateAll(animated = true) {
  initSidebar();
  renderRightRail();
  renderStepNavZone();
  renderChapterFooter();
  updateProgressUI(animated);
}

function updateProgressUI(animated = true) {
  const total = CHAPTERS_DATA.length;
  const count = AppState.completedChapters.size;
  const percent = Math.round((count / total) * 100);

  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  const countText = document.getElementById("progressCountText");

  if (fill) {
    fill.style.width = `${percent}%`;
    if (animated) {
      fill.classList.remove("linkage-pulse");
      void fill.offsetWidth; // 触发回流重绘
      fill.classList.add("linkage-pulse");
    }
  }

  if (text) {
    if (animated) {
      text.classList.add("number-counter-flip");
      setTimeout(() => text.classList.remove("number-counter-flip"), 350);
    }
    text.textContent = `${percent}%`;
  }

  if (countText) countText.textContent = AppState.lang === "en" ? `${count} / ${total} Chs mastered` : `${count} / ${total} 章达成`;

  // 同步更新右侧竖轨底部进度微章
  const railProg = document.getElementById("railProgressText");
  const railCount = document.getElementById("railProgressCountText");
  if (railProg) {
    railProg.textContent = `${percent}%`;
    if (animated) {
      railProg.classList.add("number-counter-flip");
      setTimeout(() => railProg.classList.remove("number-counter-flip"), 350);
    }
  }
  if (railCount) railCount.textContent = `${count} / ${total} ${t("dock_progress_mastered")}`;
}

// 2. 渲染右侧竖轨菜单 (默认纯数字徽标，3. 当前项展开文字带平滑过渡，5. 悬停气泡提示)
function renderRightRail() {
  const container = document.getElementById("railChapterIcons");
  if (!container) return;

  let html = "";
  CHAPTERS_DATA.forEach(chap => {
    const isActive = chap.id === AppState.currentChapterId;
    const isCompleted = AppState.completedChapters.has(chap.id);
    const theme = getCategoryTheme(chap.category);
    const safeTitle = chap.title.replace(/'/g, "\\'");
    const railBadge = AppState.lang === "en" ? `Ch.${parseInt(chap.number)}` : `第${parseInt(chap.number)}关`;

    if (isActive) {
      // 3. 当前项展开数字与标识：高阶质感与微光光晕
      html += `
        <div class="relative w-full flex justify-center py-0.5">
          <button onclick="switchChapter('${chap.id}', 0)"
                  onmouseenter="showRailTooltip(event, '${chap.number}', '${safeTitle}', '${chap.category}', ${chap.steps.length}, '${theme.accentHex}')"
                  onmouseleave="hideRailTooltip()"
                  class="rail-num-btn active-expanded w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center ${theme.activeGradient} text-white shadow-xl cursor-pointer select-none relative border border-white/40">
            <span class="font-mono text-xs sm:text-[13px] font-black tracking-tight leading-none">${chap.number}</span>
            <span class="text-[8.5px] font-bold opacity-90 mt-0.5 leading-none">${railBadge}</span>
            ${isCompleted ? '<span class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-900 text-[9px] font-black flex items-center justify-center shadow-md">✓</span>' : '<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white neon-dot"></span>'}
          </button>
        </div>
      `;
    } else {
      // 默认纯数字徽标 (清晰标明第几章节) + 5. 悬停弹出详细信息
      html += `
        <div class="group relative w-full flex justify-center py-0.5">
          <button onclick="switchChapter('${chap.id}', 0)"
                  onmouseenter="showRailTooltip(event, '${chap.number}', '${safeTitle}', '${chap.category}', ${chap.steps.length}, '${theme.accentHex}')"
                  onmouseleave="hideRailTooltip()"
                  class="rail-num-btn ${theme.btnClass} w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition cursor-pointer relative select-none shadow-sm">
            <span class="tracking-tighter">${chap.number}</span>
            ${isCompleted ? '<span class="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 neon-dot"></span>' : ''}
          </button>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

function renderCurrentChapter(animClass = "anim-slide-up") {
  const container = document.getElementById("chapterContent");
  if (!container) return;

  const chap = CHAPTERS_DATA.find(c => c.id === AppState.currentChapterId);
  if (!chap) return;

  const stepCount = chap.steps.length;
  if (AppState.currentStepIndex >= stepCount) {
    AppState.currentStepIndex = stepCount - 1;
  }
  const theme = getCategoryTheme(chap.category);

  // 4. 图标配大标题：顶栏与左上角同步展示当前大标题与标签
  const topbarTitle = document.getElementById("topbarChapterTitle");
  if (topbarTitle && chap) {
    topbarTitle.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-xs sm:text-sm font-black text-white flex items-center gap-2 truncate max-w-[260px] sm:max-w-md">
          <span class="${theme.textAccent} font-mono font-bold text-xs px-1.5 py-0.5 rounded-md bg-white/10 border border-white/15">${chap.number}</span>
          <span class="truncate tracking-tight">${chap.title}</span>
        </span>
        <span class="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg} shrink-0">
          ${chap.badge}
        </span>
      </div>
    `;
  }

  const breadcrumbMain = AppState.lang === "en" ? "Course Track" : "课程主线";
  const levelLabel = AppState.lang === "en" ? `Level ${chap.number}` : `第 ${chap.number} 关`;

  container.innerHTML = `
    <!-- 1. 章节头部 (常驻不闪烁) -->
    <div id="chapterHeaderZone" class="mb-6 pb-4 border-b border-white/15">
      <div class="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-300">
        <span class="hover:text-sky-400 cursor-pointer transition" onclick="switchChapter('chap-1', 0)">${breadcrumbMain}</span>
        <span class="text-slate-400">/</span>
        <span class="${theme.textAccent} font-semibold">${chap.category}</span>
        <span class="text-slate-400">/</span>
        <span class="font-mono font-bold" style="color: ${theme.accentHex}">${levelLabel}</span>
        <span class="ml-auto px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg}">
          ${chap.badge}
        </span>
      </div>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
        <span>${chap.title}</span>
      </h1>
      <p class="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl font-medium">
        ${chap.summary}
      </p>
    </div>

    <!-- 2. 步骤流程条与流体进度条 (吸附卡 + 动态激光画线) -->
    <div id="stepNavZone" class="mb-6 p-3 rounded-2xl step-segmented-track sticky-snap-track"></div>

    <!-- 3. 当前步骤核心卡片舞台容器 (支持无缝流体转场与叠卡模式) -->
    <div id="stepCardContainer" class="relative overflow-visible min-h-[280px]"></div>

    <!-- 4. 底部控制栏 -->
    <div id="chapterFooter" class="mt-6"></div>
  `;

  renderStepNavZone();
  renderStepCardContent(animClass);
  renderChapterFooter();
}

function renderStepNavZone() {
  const container = document.getElementById("stepNavZone");
  if (!container) return;

  const chap = CHAPTERS_DATA.find(c => c.id === AppState.currentChapterId);
  if (!chap) return;

  const stepCount = chap.steps.length;
  const theme = getCategoryTheme(chap.category);
  const percent = Math.round(((AppState.currentStepIndex + 1) / stepCount) * 100);

  // 4. 计算吸附卡激光画线坐标端点 (2% 到 98%)
  const lineEndPercent = Math.max(2, Math.min(98, (AppState.currentStepIndex / Math.max(1, stepCount - 1)) * 96 + 2));

  let pillsHtml = "";
  chap.steps.forEach((step, idx) => {
    const isStepActive = idx === AppState.currentStepIndex;
    const isStepDone = AppState.completedSteps.has(`${chap.id}_${idx}`);
    const isStepPassed = idx < AppState.currentStepIndex;
    const defaultStepTag = AppState.lang === "en" ? `Step ${idx + 1}` : `步骤 ${idx + 1}`;

    pillsHtml += `
      <button onclick="switchStep(${idx}, event)"
              class="step-nav-pill py-2 px-3 rounded-xl text-left text-xs font-bold transition flex flex-col gap-0.5 cursor-pointer ${
                isStepActive
                  ? `${theme.activeGradient} text-white shadow-md active scale-[1.02]`
                  : isStepDone
                  ? "bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 backdrop-blur-md"
                  : isStepPassed
                  ? "bg-white/40 dark:bg-slate-800/60 hover:bg-white/60 text-slate-100 border border-white/20 backdrop-blur-md"
                  : "bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 backdrop-blur-md"
              }">
        <span class="text-[10px] uppercase font-mono tracking-wider opacity-90 flex items-center justify-between">
          <span>0${idx + 1}</span>
          ${
            isStepDone
              ? '<span class="text-emerald-400 font-black text-xs linkage-pulse">✓</span>'
              : isStepActive
              ? '<span class="w-1.5 h-1.5 rounded-full bg-white neon-dot"></span>'
              : ''
          }
        </span>
        <span class="truncate text-[11.5px] tracking-tight font-extrabold">${step.tag || defaultStepTag}</span>
      </button>
    `;
  });

  const progressLabel = AppState.lang === "en" ? "Level Progress" : "关卡进度";
  const deckBtnLabel = AppState.isDeckExpanded ? (AppState.lang === "en" ? '📂 Collapse Deck' : '📂 收起叠卡') : (AppState.lang === "en" ? '🗂️ Expand Deck' : '🗂️ 叠卡全景');

  container.innerHTML = `
    <!-- 动态平滑进度条与状态 (Fluid Step Progress Indicator) -->
    <div class="px-2 pb-1.5 flex items-center justify-between text-[11px] font-bold text-slate-300">
      <span class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full ${theme.dotColor}"></span>
        <span>${progressLabel}</span>
        <!-- 3. 叠卡展开全景切换控制 -->
        <button onclick="toggleDeckExpand(event)" class="deck-mode-toggle-btn ml-1 px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-sky-400 text-[10.5px] font-bold border border-white/15 cursor-pointer transition">
          ${deckBtnLabel}
        </button>
      </span>
      <div class="flex items-center gap-2">
        <span class="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-white" style="color: ${theme.accentHex}">${percent}%</span>
        <span class="font-mono font-bold text-white">Step ${AppState.currentStepIndex + 1} / ${stepCount}</span>
      </div>
    </div>

    <!-- 4. 吸附卡动态 SVG 激光画线组件 (Laser Draw Line) -->
    <div class="step-svg-drawline-container">
      <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
        <defs>
          <linearGradient id="stepLaserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#34d399" />
            <stop offset="100%" stop-color="#c084fc" />
          </linearGradient>
        </defs>
        <!-- 导轨底线 -->
        <line x1="2" y1="4" x2="98" y2="4" class="step-svg-track-bg" />
        <!-- 动态激光画线 -->
        <line id="stepLaserLine" x1="2" y1="4" x2="${lineEndPercent}" y2="4" stroke="url(#stepLaserGrad)" class="step-svg-laser-line" />
        <!-- 导轨光斑头 -->
        <circle id="stepLaserSpark" cx="${lineEndPercent}" cy="4" r="3.2" fill="#38bdf8" class="step-svg-laser-spark" />
      </svg>
    </div>

    <div id="stepNavZonePills" class="grid grid-cols-${stepCount > 4 ? '5' : stepCount} gap-1.5 overflow-x-auto">
      ${pillsHtml}
    </div>
  `;
}

function renderStepCardContent(animClass = "") {
  const container = document.getElementById("stepCardContainer");
  if (!container) return;

  const chap = CHAPTERS_DATA.find(c => c.id === AppState.currentChapterId);
  if (!chap) return;

  const stepCount = chap.steps.length;
  if (AppState.currentStepIndex >= stepCount) {
    AppState.currentStepIndex = stepCount - 1;
  }
  const currentStep = chap.steps[AppState.currentStepIndex];
  const theme = getCategoryTheme(chap.category);
  const isStepDone = AppState.completedSteps.has(`${chap.id}_${AppState.currentStepIndex}`);

  // 3. 叠卡展开模式 vs 叠卡聚焦模式 (Deck Cascade vs Stack Mode)
  if (AppState.isDeckExpanded) {
    let cascadeCardsHtml = "";
    chap.steps.forEach((step, sIdx) => {
      const isCurrent = sIdx === AppState.currentStepIndex;
      const isDone = AppState.completedSteps.has(`${chap.id}_${sIdx}`);

      cascadeCardsHtml += `
        <div onclick="selectDeckCard(${sIdx}, event)"
             class="deck-cascade-item glass-surface rounded-2xl p-5 sm:p-6 shadow-xl relative border ${
               isCurrent
                 ? "border-sky-400/60 ring-2 ring-sky-400/30"
                 : "border-white/10 hover:border-white/30"
             }">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                isDone ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-slate-200'
              }">0${sIdx + 1}</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-lg ${theme.badgeBg}">
                ${step.tag || (AppState.lang === "en" ? "Key Concept" : "步骤重点")}
              </span>
              <h3 class="text-base sm:text-lg font-black text-white tracking-tight">${step.title}</h3>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="event.stopPropagation(); toggleStepComplete('${chap.id}', ${sIdx}, event)"
                      class="px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer active:scale-95 ${
                        isDone
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-white/10 hover:bg-white/20 text-slate-300 border-white/15'
                      }">
                <span>${isDone ? (AppState.lang === "en" ? "✓ Mastered" : "✓ 已通关") : (AppState.lang === "en" ? "○ Mark Done" : "○ 标记通关")}</span>
              </button>
              <button onclick="selectDeckCard(${sIdx}, event)"
                      class="px-2.5 py-1 rounded-lg ${isCurrent ? theme.activeGradient : 'bg-white/10 hover:bg-white/20'} text-white text-xs font-bold transition cursor-pointer active:scale-95">
                <span>${isCurrent ? (AppState.lang === "en" ? "Currently Focused" : "正在聚焦") : (AppState.lang === "en" ? "Focus Card →" : "聚焦此卡 →")}</span>
              </button>
            </div>
          </div>
          <div class="text-xs sm:text-sm text-slate-100 leading-relaxed mb-3">${step.content || ''}</div>
          ${
            step.codeExample
              ? `<div class="p-3 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-sky-300 truncate">
                   🐍 ${AppState.lang === "en" ? "Code Example: " : "代码样例："}${step.codeExample.split('\n')[0]}...
                 </div>`
              : ''
          }
        </div>
      `;
    });

    container.innerHTML = `
      <div class="relative py-2">
        <div class="timeline-svg-drawline"></div>
        <div class="deck-expanded-grid pl-6">
          <div class="flex items-center justify-between pb-3 text-xs text-slate-300 font-bold">
            <span class="flex items-center gap-2">
              <span class="text-base">🗂️</span>
              <span>${AppState.lang === "en" ? `Panoramic Cascade (${stepCount} Steps Expanded)` : `全景级联模式 (${stepCount} 个步骤全部展开)`}</span>
            </span>
            <button onclick="toggleDeckExpand(event)" class="deck-mode-toggle-btn px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 cursor-pointer">
              ${AppState.lang === "en" ? "Collapse Deck ✕" : "收起为叠卡 ✕"}
            </button>
          </div>
          ${cascadeCardsHtml}
        </div>
      </div>
    `;
    return;
  }

  // 正常叠卡模式：渲染 3D 深度底衬预览层 (Stacked Deck Preview Layers)
  const peekLayer1 = AppState.currentStepIndex + 1 < stepCount
    ? `<div class="deck-card-layer-1 flex items-center justify-between px-6 pt-2">
         <span class="text-[11px] font-mono font-bold text-slate-300 opacity-80">${AppState.lang === "en" ? "Next Card: Step" : "下一卡片: 步骤"} 0${AppState.currentStepIndex + 2} · ${chap.steps[AppState.currentStepIndex + 1].title}</span>
         <span class="text-[10px] text-sky-400 font-bold bg-white/10 px-2 py-0.5 rounded-md">${AppState.lang === "en" ? "Stack Layer 2" : "叠卡第 2 层"}</span>
       </div>`
    : "";

  const peekLayer2 = AppState.currentStepIndex + 2 < stepCount
    ? `<div class="deck-card-layer-2 flex items-center justify-between px-6 pt-1">
         <span class="text-[10px] font-mono font-bold text-slate-400 opacity-70">${AppState.lang === "en" ? "Subsequent Card: Step" : "后续卡片: 步骤"} 0${AppState.currentStepIndex + 3} · ${chap.steps[AppState.currentStepIndex + 2].title}</span>
         <span class="text-[9px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">${AppState.lang === "en" ? "Stack Layer 3" : "叠卡第 3 层"}</span>
       </div>`
    : "";

  container.innerHTML = `
    <div class="card-stack-stage">
      ${peekLayer2}
      ${peekLayer1}

      <!-- 当前步骤核心卡片 -->
      <div id="activeStepCard" class="step-card-inner ${animClass} glass-surface rounded-2xl p-6 sm:p-8 shadow-2xl relative z-10">
        <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/15">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 text-xs font-bold rounded-lg ${theme.badgeBg}">
              ${currentStep.tag || (AppState.lang === "en" ? "Core Concept" : "核心重点")}
            </span>
            <h2 class="text-xl sm:text-2xl font-black text-white tracking-tight">
              ${currentStep.title}
            </h2>
          </div>
          <div class="flex items-center gap-2.5">
            <!-- 2. 步骤单项勾选联动按钮 -->
            <button onclick="toggleStepComplete('${chap.id}', ${AppState.currentStepIndex}, event)"
                    title="${isStepDone ? (AppState.lang === 'en' ? 'Step mastered (click to undo)' : '本步骤已通关 (点击撤销)') : (AppState.lang === 'en' ? 'Mark step mastered' : '标记本步骤已通关')}"
                    class="step-check-trigger px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer active:scale-95 ${
                      isStepDone
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm shadow-emerald-500/20'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15 hover:border-emerald-400/40'
                    }">
              <span class="${isStepDone ? 'text-emerald-400 font-black' : 'text-slate-400'}">${isStepDone ? '✓' : '○'}</span>
              <span>${isStepDone ? (AppState.lang === 'en' ? 'Step Mastered' : '本步已通关') : (AppState.lang === 'en' ? 'Mark Step' : '打卡本步')}</span>
            </button>

            <!-- 3. 叠卡展开切换按钮 -->
            <button onclick="toggleDeckExpand(event)"
                    title="${AppState.lang === 'en' ? 'Expand all cards into panoramic view' : '展开当前章节所有卡片级联全景'}"
                    class="deck-mode-toggle-btn px-2.5 py-1 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-sky-400 border border-white/15 flex items-center gap-1 cursor-pointer active:scale-95">
              <span>${AppState.lang === 'en' ? '🗂️ Expand Deck' : '🗂️ 叠卡展开'}</span>
            </button>

            <span class="text-xs font-mono text-slate-200 font-bold px-2.5 py-1 rounded-lg bg-white/10 border border-white/15">
              Step ${AppState.currentStepIndex + 1} / ${stepCount}
            </span>
          </div>
        </div>

        <!-- 正文内容 (支持嵌入图解) -->
        ${currentStep.content ? `<div class="text-sm leading-relaxed text-slate-100 mb-5 font-normal">${currentStep.content}</div>` : ""}

        <!-- 步骤关联代码展示窗 (Vercel/Raycast Window Style) -->
        ${
          currentStep.codeExample
            ? `
              <div class="code-window-card my-5 shadow-2xl">
                <div class="code-window-header">
                  <div class="flex items-center gap-2">
                    <div class="flex items-center gap-1.5 mr-1">
                      <span class="mac-dot mac-dot-red"></span>
                      <span class="mac-dot mac-dot-yellow"></span>
                      <span class="mac-dot mac-dot-green"></span>
                    </div>
                    <div class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-mono text-slate-200">
                      <span>🐍</span>
                      <span>snippet_${chap.number}_${AppState.currentStepIndex + 1}.py</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button onclick="copyCode(decodeURIComponent('${encodeURIComponent(currentStep.codeExample)}'), this)"
                            class="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition text-xs flex items-center gap-1 font-semibold cursor-pointer border border-white/15 active:scale-95">
                      <span>📋</span>
                      <span>${t("step_copy")}</span>
                    </button>
                    <button onclick="sendCodeToPlayground(decodeURIComponent('${encodeURIComponent(currentStep.codeExample)}'), true)"
                            class="px-3 py-1 rounded-lg ${theme.activeGradient} hover:opacity-95 text-white transition text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer border border-white/20">
                      <span>${t("step_fill_playground")}</span>
                    </button>
                  </div>
                </div>
                <pre class="language-python"><code class="language-python">${escapeHtml(currentStep.codeExample)}</code></pre>
                ${
                  currentStep.explanation
                    ? `<div class="p-4 bg-black/50 text-xs sm:text-sm text-slate-100 border-t border-white/10 leading-relaxed flex items-start gap-2.5">
                         <span class="shrink-0 text-base">💡</span>
                         <div><strong class="${theme.textAccent}">${AppState.lang === "en" ? "Key Breakdown: " : "精要解析："}</strong>${currentStep.explanation}</div>
                       </div>`
                    : ""
                }
              </div>
            `
            : ""
        }

        <!-- 步骤测验组件 -->
        ${
          currentStep.quizzes && currentStep.quizzes.length > 0
            ? renderQuizGroup(chap.id, currentStep.quizzes, theme)
            : ""
        }
      </div>
    </div>
  `;

  if (window.Prism) {
    Prism.highlightAllUnder(container);
  }
}

function renderQuizGroup(chapId, quizzes, theme = getCategoryTheme("起步入门")) {
  let html = `<div class="space-y-4 my-4">`;
  const optionKeys = ["A", "B", "C", "D"];
  quizzes.forEach((quiz, qIdx) => {
    html += `
      <div class="p-5 rounded-2xl border border-white/15 bg-black/45 backdrop-blur-xl shadow-lg">
        <div class="flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-white mb-3.5">
          <span class="w-6 h-6 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0" style="background: ${theme.accentHex}20; color: ${theme.accentHex}; border: 1px solid ${theme.accentHex}40;">Q${qIdx + 1}</span>
          <span class="leading-snug">${escapeHtml(quiz.question)}</span>
        </div>
        <div class="space-y-2">
    `;

    quiz.options.forEach((opt, oIdx) => {
      html += `
        <button onclick="checkQuizAnswer('${chapId}', ${qIdx}, ${oIdx})"
                id="quiz-opt-${qIdx}-${oIdx}"
                class="quiz-option-card w-full text-left p-3 rounded-xl border flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-lg bg-white/10 text-slate-200 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-white/15">${optionKeys[oIdx] || oIdx + 1}</span>
            <span class="text-sm font-semibold text-slate-100">${escapeHtml(opt)}</span>
          </div>
          <span class="quiz-feedback-icon hidden text-xs font-bold"></span>
        </button>
      `;
    });

    html += `
        </div>
        <div id="quiz-exp-${qIdx}" class="hidden mt-3.5 p-3.5 rounded-xl text-xs leading-relaxed"></div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

function checkQuizAnswer(chapId, quizIndex, selectedOptionIndex) {
  const chap = CHAPTERS_DATA.find(c => c.id === chapId);
  if (!chap) return;
  const currentStep = chap.steps[AppState.currentStepIndex];
  if (!currentStep || !currentStep.quizzes) return;

  const quiz = currentStep.quizzes[quizIndex];
  const isCorrect = selectedOptionIndex === quiz.answerIndex;

  quiz.options.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-opt-${quizIndex}-${idx}`);
    if (!btn) return;
    btn.classList.add("disabled");
    btn.disabled = true;

    if (idx === quiz.answerIndex) {
      btn.className = "quiz-option-card w-full text-left p-3 rounded-xl border-2 border-emerald-500 bg-emerald-500/15 text-emerald-200 text-xs sm:text-[13px] font-semibold flex items-center justify-between shadow-lg shadow-emerald-500/20";
      const icon = btn.querySelector(".quiz-feedback-icon");
      if (icon) {
        icon.classList.remove("hidden");
        icon.innerHTML = AppState.lang === "en" ? "✅ Correct" : "✅ 正确";
      }
    } else if (idx === selectedOptionIndex) {
      btn.className = "quiz-option-card w-full text-left p-3 rounded-xl border-2 border-rose-500 bg-rose-500/15 text-rose-200 text-xs sm:text-[13px] font-semibold flex items-center justify-between shadow-lg shadow-rose-500/20";
      const icon = btn.querySelector(".quiz-feedback-icon");
      if (icon) {
        icon.classList.remove("hidden");
        icon.innerHTML = AppState.lang === "en" ? "❌ Your Choice" : "❌ 你的选择";
      }
    }
  });

  const expBox = document.getElementById(`quiz-exp-${quizIndex}`);
  if (expBox) {
    expBox.classList.remove("hidden");
    if (isCorrect) {
      expBox.className = "quiz-reveal-anim mt-3.5 p-3.5 rounded-xl text-xs leading-relaxed bg-emerald-500/15 text-emerald-200 border border-emerald-500/40 shadow-md";
      expBox.innerHTML = `<strong>💡 ${AppState.lang === "en" ? "Great Job!" : "恭喜答对！"}</strong> ${quiz.explanation}`;
    } else {
      expBox.className = "quiz-reveal-anim mt-3.5 p-3.5 rounded-xl text-xs leading-relaxed bg-rose-500/15 text-rose-200 border border-rose-500/40 shadow-md";
      expBox.innerHTML = `<strong>💡 ${AppState.lang === "en" ? "Explanation:" : "解析思考："}</strong> ${quiz.explanation}`;
    }
  }
}

function renderChapterFooter() {
  const container = document.getElementById("chapterFooter");
  if (!container) return;

  const currentChapIdx = CHAPTERS_DATA.findIndex(c => c.id === AppState.currentChapterId);
  const currentChap = CHAPTERS_DATA[currentChapIdx];
  const theme = getCategoryTheme(currentChap.category);
  const stepCount = currentChap.steps.length;
  const isLastStep = AppState.currentStepIndex >= stepCount - 1;
  const isFirstStep = AppState.currentStepIndex === 0;
  const isCompleted = AppState.completedChapters.has(currentChap.id);

  const nextChap = currentChapIdx < CHAPTERS_DATA.length - 1 ? CHAPTERS_DATA[currentChapIdx + 1] : null;
  const prevChap = currentChapIdx > 0 ? CHAPTERS_DATA[currentChapIdx - 1] : null;

  const prevStepLabel = AppState.lang === "en" ? "← Previous: " : "← 上一步：";
  const prevLevelLabel = AppState.lang === "en" ? "← Prev Level: " : "← 上一关：";
  const defaultPrevTag = AppState.lang === "en" ? "Previous Step" : "上一节";
  const nextStepLabel = AppState.lang === "en" ? "Next: " : "下一步：";
  const nextLevelLabel = AppState.lang === "en" ? "Cleared! Next Chapter: " : "通关！进入下一章：";
  const defaultNextTag = AppState.lang === "en" ? "Continue" : "继续";
  const allCompletedLabel = AppState.lang === "en" ? "🏆 All 15 Chapters Completed!" : "🏆 课程全部达成！";
  const masteredBtnLabel = isCompleted
    ? (AppState.lang === "en" ? "✓ Mastered Whole Chapter" : "✓ 已掌握本章全部")
    : (AppState.lang === "en" ? "Mark Chapter Mastered" : "标记掌握本章");

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="w-full sm:w-auto">
        ${
          !isFirstStep
            ? `<button onclick="switchStep(${AppState.currentStepIndex - 1}, event)"
                      class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95">
                 <span>${prevStepLabel}${currentChap.steps[AppState.currentStepIndex - 1].tag || defaultPrevTag}</span>
               </button>`
            : prevChap
            ? `<button onclick="switchChapter('${prevChap.id}', ${prevChap.steps.length - 1})"
                      class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer active:scale-95">
                 <span>${prevLevelLabel}${prevChap.title}</span>
               </button>`
            : `<div></div>`
        }
      </div>

      <!-- 1. 完成反馈按钮 (Interactive Completion Feedback Button) -->
      <div class="w-full sm:w-auto flex justify-center">
        <button id="completeFeedbackBtn"
                onclick="handleChapterCompletionFeedback(event, '${currentChap.id}')"
                class="completion-feedback-btn w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  isCompleted
                    ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white shadow-emerald-500/35 border border-emerald-400/40"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-emerald-400/40"
                }">
          ${
            isCompleted
              ? `<svg class="w-4 h-4 text-emerald-300 checkmark-draw-path" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                 <span>${masteredBtnLabel}</span>`
              : `<span class="w-2 h-2 rounded-full bg-emerald-400 neon-dot"></span>
                 <span>${masteredBtnLabel}</span>`
          }
        </button>
      </div>

      <div class="w-full sm:w-auto text-right">
        ${
          !isLastStep
            ? `<button onclick="switchStep(${AppState.currentStepIndex + 1}, event)"
                      class="w-full sm:w-auto px-5 py-2.5 rounded-xl ${theme.activeGradient} hover:opacity-90 text-white text-xs font-bold transition shadow-lg flex items-center justify-center gap-1.5 ml-auto cursor-pointer active:scale-95 border border-white/20">
                 <span>${nextStepLabel}${currentChap.steps[AppState.currentStepIndex + 1].tag || defaultNextTag} →</span>
               </button>`
            : nextChap
            ? `<button onclick="switchChapter('${nextChap.id}', 0)"
                      class="w-full sm:w-auto px-5 py-2.5 rounded-xl ${getCategoryTheme(nextChap.category).activeGradient} hover:opacity-90 text-white text-xs font-bold transition shadow-lg flex items-center justify-center gap-1.5 ml-auto cursor-pointer active:scale-95 border border-white/20">
                 <span>${nextLevelLabel}${nextChap.title} →</span>
               </button>`
            : `<button onclick="showToast('${AppState.lang === 'en' ? '🎉 Congratulations on mastering all 15 chapters!' : '🎉 恭喜达成全部 15 个章节！'}', 'success')"
                      class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/30">
                 ${allCompletedLabel}
               </button>`
        }
      </div>
    </div>
  `;
}

function initEditor() {
  const editor = document.getElementById("codeEditor");
  if (!editor) return;

  editor.value = CODE_SNIPPETS["hello"].code;
  updateLineNumbers();

  editor.addEventListener("input", updateLineNumbers);
  editor.addEventListener("scroll", syncEditorScroll);

  editor.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runPythonCode();
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
      updateLineNumbers();
      return;
    }

    if (e.key === "Enter") {
      const start = editor.selectionStart;
      const currentLine = editor.value.substring(0, start).split("\n").pop();
      const match = currentLine.match(/^(\s*)/);
      let indent = match ? match[1] : "";

      if (currentLine.trim().endsWith(":")) {
        indent += "    ";
      }

      if (indent.length > 0) {
        e.preventDefault();
        editor.value = editor.value.substring(0, start) + "\n" + indent + editor.value.substring(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = start + 1 + indent.length;
        updateLineNumbers();
      }
    }
  });
}

function updateLineNumbers() {
  const editor = document.getElementById("codeEditor");
  const lineNumbers = document.getElementById("lineNumbers");
  if (!editor || !lineNumbers) return;

  const lines = editor.value.split("\n").length;
  let html = "";
  for (let i = 1; i <= lines; i++) {
    html += `<div>${i}</div>`;
  }
  lineNumbers.innerHTML = html;
}

function syncEditorScroll() {
  const editor = document.getElementById("codeEditor");
  const lineNumbers = document.getElementById("lineNumbers");
  if (editor && lineNumbers) {
    lineNumbers.scrollTop = editor.scrollTop;
  }
}

function initSnippets() {
  const select = document.getElementById("snippetSelect");
  if (!select) return;

  let html = `<option value="">${t("preset_select_default")}</option>`;
  for (const [key, item] of Object.entries(CODE_SNIPPETS)) {
    html += `<option value="${key}">${item.name}</option>`;
  }
  select.innerHTML = html;

  select.onchange = e => {
    const key = e.target.value;
    if (key && CODE_SNIPPETS[key]) {
      sendCodeToPlayground(CODE_SNIPPETS[key].code, false);
    }
    select.value = "";
  };
}

function sendCodeToPlayground(code, autoRun = false) {
  const editor = document.getElementById("codeEditor");
  if (!editor) return;

  // 关键体验：若演练场当前被隐藏，自动展开演练场！
  if (!AppState.playgroundVisible) {
    togglePlayground(true);
  }

  editor.value = code;
  updateLineNumbers();

  // 仅在移动端窄屏 (<1024px) 才切换 Tab
  if (window.innerWidth < 1024) {
    switchTab("playground");
  }

  // 给编辑器外框添加微光提示与脉冲流体光环，增强操作反馈
  const wrapper = document.querySelector(".editor-wrapper");
  if (wrapper) {
    wrapper.classList.remove("playground-pulse-anim");
    void wrapper.offsetWidth;
    wrapper.classList.add("playground-pulse-anim", "ring-2", "ring-sky-500");
    setTimeout(() => {
      wrapper.classList.remove("ring-2", "ring-sky-500", "playground-pulse-anim");
    }, 850);
  }

  showToast(AppState.lang === "en" ? "Code loaded into playground!" : "代码已成功载入演练场！", "info");

  if (autoRun) {
    setTimeout(() => {
      runPythonCode();
    }, 180);
  }
}

function clearEditor() {
  const editor = document.getElementById("codeEditor");
  if (editor) {
    editor.value = "";
    updateLineNumbers();
  }
}

function clearTerminal() {
  const term = document.getElementById("terminalOutput");
  if (term) term.innerHTML = `<span class="text-slate-500">${t("terminal_waiting")}</span>`;
}

function runPythonCode() {
  if (AppState.isRunning) return;

  // 关键体验：若演练场当前被隐藏，运行代码时自动展开演练场！
  if (!AppState.playgroundVisible) {
    togglePlayground(true);
  }

  const editor = document.getElementById("codeEditor");
  const term = document.getElementById("terminalOutput");
  const statusEl = document.getElementById("runStatus");
  const runBtn = document.getElementById("runBtn");

  if (!editor || !term) return;

  const code = editor.value;
  if (!code.trim()) {
    showToast(AppState.lang === "en" ? "Please enter code before running" : "请输入代码后再运行", "warning");
    return;
  }

  if (typeof Sk === "undefined") {
    term.innerHTML = `<span class="terminal-error">${AppState.lang === "en" ? "Error: Skulpt interpreter not loaded, please check js/skulpt.min.js." : "错误: Skulpt 解释器未加载，请检查 js/skulpt.min.js。"}</span>`;
    return;
  }

  AppState.isRunning = true;
  if (statusEl) statusEl.innerHTML = `<span class="text-amber-400 font-semibold font-mono">⚡ Running...</span>`;
  if (runBtn) {
    runBtn.disabled = true;
    runBtn.classList.add("opacity-70", "cursor-not-allowed");
  }

  term.innerHTML = "";
  const startTime = performance.now();

  Sk.configure({
    output: function (text) {
      term.innerHTML += escapeHtml(text);
      term.scrollTop = term.scrollHeight;
    },
    read: function (file) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined) {
        throw (AppState.lang === "en" ? "File not found: '" : "无法找到文件: '") + file + "'";
      }
      return Sk.builtinFiles["files"][file];
    },
    inputfun: function (prompt) {
      return new Promise((resolve) => {
        handleTerminalInput(prompt, resolve);
      });
    },
    inputfunTakesPrompt: true
  });

  const myPromise = Sk.misceval.asyncToPromise(function () {
    return Sk.importMainWithBody("<stdin>", false, code, true);
  });

  myPromise.then(
    function () {
      const elapsed = Math.round(performance.now() - startTime);
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-emerald-400 font-bold font-mono">✓ Done (${elapsed}ms)</span>`;
      }
      AppState.isRunning = false;
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.classList.remove("opacity-70", "cursor-not-allowed");
      }
    },
    function (err) {
      const elapsed = Math.round(performance.now() - startTime);
      let errMsg = err.toString();
      term.innerHTML += `<div class="mt-2 text-rose-400 font-mono text-xs p-2.5 bg-rose-950/40 rounded-lg border border-rose-800">❌ ${AppState.lang === "en" ? "Runtime Error:" : "运行异常:"}\n${escapeHtml(errMsg)}</div>`;
      term.scrollTop = term.scrollHeight;

      if (statusEl) {
        statusEl.innerHTML = `<span class="text-rose-400 font-bold font-mono">✗ Error (${elapsed}ms)</span>`;
      }
      AppState.isRunning = false;
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.classList.remove("opacity-70", "cursor-not-allowed");
      }
    }
  );
}

function handleTerminalInput(promptText, resolve) {
  const term = document.getElementById("terminalOutput");
  if (!term) {
    resolve(window.prompt(promptText || (AppState.lang === "en" ? "Input:" : "输入:")) || "");
    return;
  }

  if (promptText) {
    term.innerHTML += `<span class="terminal-prompt">${escapeHtml(promptText)}</span>`;
  }

  const inputContainer = document.createElement("div");
  inputContainer.className = "flex items-center gap-2 my-2 p-2 bg-slate-900 rounded-xl border border-sky-500 shadow-lg";
  inputContainer.innerHTML = `
    <span class="text-sky-400 text-xs font-mono font-bold">></span>
    <input type="text" id="activeTerminalInput" placeholder="${AppState.lang === 'en' ? 'Enter input here, press Enter to submit...' : '在此输入，按回车确认...'}" class="flex-1 bg-transparent text-white font-mono text-xs outline-none" autocomplete="off" />
    <button id="submitTerminalInputBtn" class="px-3 py-1 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-xs font-bold">${AppState.lang === 'en' ? 'Submit' : '确认'}</button>
  `;
  term.appendChild(inputContainer);
  term.scrollTop = term.scrollHeight;

  const inputEl = inputContainer.querySelector("#activeTerminalInput");
  const submitBtn = inputContainer.querySelector("#submitTerminalInputBtn");

  inputEl.focus();

  const finish = () => {
    const val = inputEl.value;
    inputContainer.remove();
    term.innerHTML += `<span class="text-slate-300 font-mono">${escapeHtml(val)}\n</span>`;
    term.scrollTop = term.scrollHeight;
    resolve(val);
  };

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      finish();
    }
  });

  submitBtn.addEventListener("click", finish);
}

function copyCode(text, btnElement = null) {
  const onSuccess = () => {
    showToast(t("code_copied_toast"), "success");
    if (btnElement) {
      const origHtml = btnElement.innerHTML;
      btnElement.innerHTML = `<span>✓</span> <span>${AppState.lang === "en" ? "Copied!" : "已复制!"}</span>`;
      btnElement.classList.add("!bg-emerald-600", "!text-white", "!border-emerald-500");
      setTimeout(() => {
        btnElement.innerHTML = origHtml;
        btnElement.classList.remove("!bg-emerald-600", "!text-white", "!border-emerald-500");
      }, 1800);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
      fallbackCopy(text);
      onSuccess();
    });
  } else {
    fallbackCopy(text);
    onSuccess();
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  ta.remove();
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  const bgColors = {
    info: "bg-gradient-to-r from-sky-500 to-blue-600 text-white",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-white",
    error: "bg-rose-600 text-white"
  };

  toast.className = `fixed bottom-6 right-6 px-4 py-2.5 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold z-50 transition-all duration-300 transform translate-y-0 opacity-100 flex items-center gap-2 ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `<span>${message}</span>`;

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.className = "fixed bottom-6 right-6 px-4 py-2.5 rounded-2xl shadow-2xl text-xs sm:text-sm font-bold z-50 transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none";
  }, 2200);
}

function initPlayground() {
  try {
    const saved = localStorage.getItem("pylab_playground_visible");
    if (saved !== null) {
      AppState.playgroundVisible = saved === "true";
    } else {
      AppState.playgroundVisible = window.innerWidth >= 1024;
    }
  } catch (e) {
    AppState.playgroundVisible = true;
  }
  applyPlaygroundVisibility();
}

function togglePlayground(forceState = null) {
  if (forceState !== null) {
    AppState.playgroundVisible = forceState;
  } else {
    AppState.playgroundVisible = !AppState.playgroundVisible;
  }
  try {
    localStorage.setItem("pylab_playground_visible", AppState.playgroundVisible);
  } catch (e) {}

  applyPlaygroundVisibility();

  if (AppState.playgroundVisible) {
    showToast(AppState.lang === "en" ? "💻 Code Playground expanded" : "💻 代码演练场已展开", "info");
  } else {
    showToast(AppState.lang === "en" ? "📖 Code Playground hidden (Press Ctrl+J to toggle)" : "📖 代码演练场已收起，阅读视野已扩展 (按 Ctrl+J 恢复)", "info");
  }
}
window.togglePlayground = togglePlayground;

function applyPlaygroundVisibility() {
  const playgroundView = document.getElementById("playgroundView");
  const contentWrapper = document.getElementById("tutorialContentWrapper");
  const btn = document.getElementById("togglePlaygroundBtn");
  const statusDot = document.getElementById("playgroundStatusDot");
  const btnText = document.getElementById("playgroundBtnText");

  if (!playgroundView) return;

  if (AppState.playgroundVisible) {
    playgroundView.classList.remove("playground-hidden");
    if (contentWrapper) {
      contentWrapper.classList.remove("max-w-5xl");
      contentWrapper.classList.add("max-w-3xl");
    }
    if (statusDot) statusDot.className = "w-2 h-2 rounded-full bg-emerald-400";
    if (btnText) btnText.textContent = t("playground_btn_hide");
    if (btn) {
      btn.classList.add("border-sky-500/40", "bg-sky-500/10", "text-sky-400");
    }
  } else {
    playgroundView.classList.add("playground-hidden");
    if (contentWrapper) {
      contentWrapper.classList.remove("max-w-3xl");
      contentWrapper.classList.add("max-w-5xl");
    }
    if (statusDot) statusDot.className = "w-2 h-2 rounded-full bg-slate-500";
    if (btnText) btnText.textContent = t("playground_btn_show");
    if (btn) {
      btn.classList.remove("border-sky-500/40", "bg-sky-500/10", "text-sky-400");
    }
  }
}

function switchTab(tab) {
  AppState.activeTab = tab;
  const tutorialView = document.getElementById("tutorialView");
  const playgroundView = document.getElementById("playgroundView");
  const tabTut = document.getElementById("tabBtnTutorial");
  const tabPlay = document.getElementById("tabBtnPlayground");

  if (window.innerWidth >= 1024) {
    if (tutorialView) tutorialView.classList.remove("hidden");
    applyPlaygroundVisibility();
    return;
  }

  // 移动端/窄屏切换逻辑 (< 1024px)
  if (!tabTut || !tabPlay || !tutorialView || !playgroundView) return;

  if (tab === "tutorial") {
    AppState.playgroundVisible = false;
    tutorialView.classList.remove("hidden");
    playgroundView.classList.add("playground-hidden");
    tabTut.classList.add("text-sky-500", "font-bold");
    tabTut.classList.remove("text-slate-500");
    tabPlay.classList.remove("text-sky-500", "font-bold");
    tabPlay.classList.add("text-slate-500");
  } else {
    AppState.playgroundVisible = true;
    tutorialView.classList.add("hidden");
    playgroundView.classList.remove("playground-hidden");
    tabPlay.classList.add("text-sky-500", "font-bold");
    tabPlay.classList.remove("text-slate-500");
    tabTut.classList.remove("text-sky-500", "font-bold");
    tabTut.classList.add("text-slate-500");
  }
}

// 监听窗口尺寸变化，防止缩放窗口后布局错乱
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    const tutorialView = document.getElementById("tutorialView");
    if (tutorialView) tutorialView.classList.remove("hidden");
    applyPlaygroundVisibility();
  }
});

function toggleCheatSheet(show) {
  const modal = document.getElementById("cheatsheetModal");
  if (!modal) return;
  if (show) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}

// Command Palette (Ctrl+K 全局极速搜索)
function initCommandPalette() {
  const palette = document.getElementById("commandPaletteModal");
  const paletteInput = document.getElementById("paletteSearchInput");
  const paletteResults = document.getElementById("paletteResults");

  if (!palette || !paletteInput || !paletteResults) return;

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openPalette();
    }
    if (e.key === "Escape") {
      closePalette();
    }
  });

  function openPalette() {
    palette.classList.remove("hidden");
    paletteInput.value = "";
    renderPaletteResults("");
    setTimeout(() => paletteInput.focus(), 50);
  }

  function closePalette() {
    palette.classList.add("hidden");
  }

  window.openCommandPalette = openPalette;
  window.closeCommandPalette = closePalette;

  paletteInput.addEventListener("input", (e) => {
    renderPaletteResults(e.target.value);
  });

  function renderPaletteResults(query) {
    const q = query.trim().toLowerCase();
    let matches = [];

    CHAPTERS_DATA.forEach(chap => {
      chap.steps.forEach((step, sIdx) => {
        if (!q || chap.title.toLowerCase().includes(q) || step.title.toLowerCase().includes(q) || (step.tag && step.tag.toLowerCase().includes(q))) {
          matches.push({ chap, step, sIdx });
        }
      });
    });

    if (matches.length === 0) {
      paletteResults.innerHTML = `<div class="p-6 text-center text-xs text-slate-500">${t("palette_empty")}</div>`;
      return;
    }

    let html = "";
    matches.slice(0, 12).forEach(({ chap, step, sIdx }) => {
      const stepBadge = step.tag || (AppState.lang === "en" ? `Step 0${sIdx + 1}` : `步骤 0${sIdx + 1}`);
      html += `
        <div onclick="switchChapter('${chap.id}', ${sIdx}); closeCommandPalette();"
             class="p-2.5 rounded-xl hover:bg-white/10 cursor-pointer flex items-center justify-between transition">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-sky-400 font-bold border border-white/15">${chap.number}</span>
            <div class="truncate">
              <span class="font-bold text-xs text-white">${chap.title}</span>
              <span class="text-slate-300 text-xs ml-1.5">› ${step.title}</span>
            </div>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-400 font-bold shrink-0">${stepBadge}</span>
        </div>
      `;
    });

    paletteResults.innerHTML = html;
  }
}

// 章节大纲抽屉显隐控制 (非常驻，按需弹出/收起，具备防重防抖与阻断穿透保护)
let lastToggleSidebarTime = 0;
function toggleSidebar(forceState, event) {
  if (event) {
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
  }
  const now = Date.now();
  if (typeof forceState !== "boolean" && now - lastToggleSidebarTime < 180) {
    return;
  }
  lastToggleSidebarTime = now;

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const floatingBtn = document.getElementById("floatingSidebarToggle");
  if (!sidebar) return;

  const isClosed = sidebar.classList.contains("-translate-x-full");
  const shouldOpen = typeof forceState === "boolean" ? forceState : isClosed;

  if (shouldOpen) {
    sidebar.classList.remove("-translate-x-full");
    if (overlay) {
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-100", "pointer-events-auto");
    }
    if (floatingBtn) floatingBtn.classList.add("hidden");
  } else {
    sidebar.classList.add("-translate-x-full");
    if (overlay) {
      overlay.classList.remove("opacity-100", "pointer-events-auto");
      overlay.classList.add("opacity-0", "pointer-events-none");
    }
    if (floatingBtn) floatingBtn.classList.remove("hidden");
  }
}
window.toggleSidebar = toggleSidebar;

function initEventListeners() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      initSidebar(e.target.value);
    };
  }

  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (toggleSidebarBtn) {
    toggleSidebarBtn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleSidebar(undefined, e);
    };
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.onclick = (e) => {
      e.stopPropagation();
      toggleSidebar(false, e);
    };
  }

  if (sidebarOverlay) {
    sidebarOverlay.onclick = (e) => {
      e.stopPropagation();
      toggleSidebar(false, e);
    };
  }

  // 快捷键支持：Ctrl+B 唤出章节目录；Ctrl+J 显隐代码演练场；ESC 退出
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
      e.preventDefault();
      togglePlayground();
    }
    if (e.key === "Escape") {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.classList.contains("-translate-x-full")) {
        toggleSidebar(false);
      }
      const cheat = document.getElementById("cheatsheetModal");
      if (cheat && !cheat.classList.contains("hidden")) {
        toggleCheatSheet(false);
      }
    }
  });
}

function resetAllProgress() {
  if (confirm(t("reset_confirm"))) {
    AppState.completedChapters.clear();
    AppState.completedSteps.clear();
    localStorage.removeItem("pylab_progress");
    localStorage.removeItem("pylab_completed_steps");
    initSidebar();
    renderCurrentChapter();
    updateProgressUI();
    showToast(t("reset_toast"), "info");
  }
}

// 自由切换中英双语版本系统 (Bilingual Switcher Controller)
function toggleLanguage(targetLang) {
  const newLang = targetLang || (AppState.lang === "zh" ? "en" : "zh");
  AppState.lang = newLang;
  localStorage.setItem("pylab_lang", newLang);

  // 切换对应语言章节题库与代码样例
  if (newLang === "en" && window.CHAPTERS_DATA_EN) {
    CHAPTERS_DATA = window.CHAPTERS_DATA_EN;
    CODE_SNIPPETS = window.CODE_SNIPPETS_EN;
  } else if (window.CHAPTERS_DATA_ZH) {
    CHAPTERS_DATA = window.CHAPTERS_DATA_ZH;
    CODE_SNIPPETS = window.CODE_SNIPPETS_ZH;
  }
  window.CHAPTERS_DATA = CHAPTERS_DATA;
  window.CODE_SNIPPETS = CODE_SNIPPETS;

  // 更新所有页面静态文字与占位符
  applyI18n();

  // 联动重新渲染页面所有关键组件
  initSidebar();
  renderRightRail();
  renderCurrentChapter();
  initSnippets();
  updateProgressUI();
  renderCheatSheet();

  showToast(t("toast_lang_switched"), "info");
}
window.toggleLanguage = toggleLanguage;

function renderCheatSheet() {
  const title = document.getElementById("cheatsheetTitle");
  const body = document.getElementById("cheatsheetBody");
  const closeBtn = document.getElementById("cheatsheetCloseBtn");
  const lang = AppState.lang || "zh";
  const data = (window.CHEATSHEET_DATA && window.CHEATSHEET_DATA[lang]) || (window.CHEATSHEET_DATA && window.CHEATSHEET_DATA["zh"]);
  if (!data) return;

  if (title) title.textContent = data.title;
  if (closeBtn) closeBtn.textContent = t("cheatsheet_got_it");

  if (body) {
    let html = "";
    data.sections.forEach(sec => {
      html += `
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-white/10">
          <h4 class="font-bold ${sec.color} mb-2">${sec.title}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-100 font-mono">
      `;
      sec.items.forEach(([code, desc]) => {
        html += `<div><code>${code}</code> ${desc}</div>`;
      });
      html += `</div></div>`;
    });
    body.innerHTML = html;
  }
}
window.renderCheatSheet = renderCheatSheet;

function applyI18n() {
  const lang = AppState.lang || "zh";

  // 顶栏中英切换按钮
  const topbarLangText = document.getElementById("topbarLangText");
  if (topbarLangText) {
    topbarLangText.textContent = lang === "zh" ? "English" : "中文";
  }
  const topbarLangBtn = document.getElementById("topbarLangBtn");
  if (topbarLangBtn) {
    topbarLangBtn.title = t("lang_toggle_title");
  }

  // 右侧悬浮竖轨中英切换按钮
  const railLangIcon = document.getElementById("railLangIcon");
  if (railLangIcon) {
    railLangIcon.textContent = lang === "zh" ? "EN" : "中";
  }
  const railLangTooltip = document.getElementById("railLangTooltip");
  if (railLangTooltip) {
    railLangTooltip.textContent = t("rail_lang_tooltip");
  }

  // 搜索框占位符
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = t("sidebar_filter_placeholder");

  const paletteSearchInput = document.getElementById("paletteSearchInput");
  if (paletteSearchInput) paletteSearchInput.placeholder = t("palette_placeholder");

  const searchBtnText = document.querySelector(".transparent-header button[onclick='openCommandPalette()'] span.text-slate-200");
  if (searchBtnText) searchBtnText.textContent = t("search_input_placeholder");

  // 大纲抽屉标题与徽标
  const sidebarHeaderTitle = document.querySelector("#sidebar .p-4 span.text-white");
  if (sidebarHeaderTitle) sidebarHeaderTitle.textContent = t("sidebar_title");

  const sidebarBadge = document.querySelector("#sidebar .p-4 span.font-mono");
  if (sidebarBadge) sidebarBadge.textContent = t("sidebar_badge");

  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  if (closeSidebarBtn) closeSidebarBtn.title = t("sidebar_close_title");

  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  if (toggleSidebarBtn) toggleSidebarBtn.title = t("sidebar_toggle_title");

  const sidebarEscHint = document.querySelector("#sidebar .p-3.border-t span");
  if (sidebarEscHint) sidebarEscHint.textContent = t("sidebar_esc_hint");

  const sidebarResetBtn = document.querySelector("#sidebar .p-3.border-t button");
  if (sidebarResetBtn) sidebarResetBtn.textContent = t("sidebar_reset_btn");

  // 演练场按钮
  const playgroundBtnText = document.getElementById("playgroundBtnText");
  if (playgroundBtnText) {
    playgroundBtnText.textContent = AppState.playgroundVisible ? t("playground_btn_hide") : t("playground_btn_show");
  }
  const togglePlaygroundBtn = document.getElementById("togglePlaygroundBtn");
  if (togglePlaygroundBtn) togglePlaygroundBtn.title = t("playground_toggle_title");

  // 移动端切换标签
  const tabBtnTutorial = document.getElementById("tabBtnTutorial");
  if (tabBtnTutorial) tabBtnTutorial.textContent = t("tab_tutorial");

  const tabBtnPlayground = document.getElementById("tabBtnPlayground");
  if (tabBtnPlayground) tabBtnPlayground.textContent = t("tab_playground");

  // 代码编辑器
  const codeEditor = document.getElementById("codeEditor");
  if (codeEditor) codeEditor.placeholder = t("editor_placeholder");

  // 运行与控制栏
  const runBtnSpan = document.querySelector("#runBtn span");
  if (runBtnSpan) runBtnSpan.textContent = t("run_btn_text");

  const runStatus = document.getElementById("runStatus");
  if (runStatus && !AppState.isRunning) runStatus.innerHTML = `<span class="text-slate-400">${t("run_status_ready")}</span>`;

  const clearTerminalBtn = document.querySelector("button[onclick='clearTerminal()']");
  if (clearTerminalBtn) clearTerminalBtn.textContent = t("clear_terminal_btn");

  const clearEditorBtn = document.querySelector("button[onclick='clearEditor()']");
  if (clearEditorBtn) clearEditorBtn.title = t("clear_editor_title");

  // 页面标题与品牌
  document.title = lang === "en" ? "PYTHON LAB | Minimalist High-End Interactive Python Course" : "PYTHON LAB | 极简高阶交互式通关教程";

  // 右侧悬浮竖轨快捷按钮与浮动提示
  const railRunBtn = document.querySelector("#rightRail button[onclick*='runPythonCode']");
  if (railRunBtn) railRunBtn.title = t("dock_run_title");
  const railRunTooltip = document.querySelector("#rightRail button[onclick*='runPythonCode'] + .rail-tooltip");
  if (railRunTooltip) railRunTooltip.textContent = t("dock_run_title");

  const railPlaygroundBtn = document.getElementById("railPlaygroundBtn");
  if (railPlaygroundBtn) railPlaygroundBtn.title = t("dock_playground_title");
  const railPlaygroundTooltip = document.querySelector("#railPlaygroundBtn + .rail-tooltip");
  if (railPlaygroundTooltip) railPlaygroundTooltip.textContent = t("dock_playground_title");

  const railSearchBtn = document.querySelector("#rightRail button[onclick*='openCommandPalette']");
  if (railSearchBtn) railSearchBtn.title = t("dock_search_title");
  const railSearchTooltip = document.querySelector("#rightRail button[onclick*='openCommandPalette'] + .rail-tooltip");
  if (railSearchTooltip) railSearchTooltip.textContent = t("dock_search_title");

  const railCheatBtn = document.querySelector("#rightRail button[onclick*='toggleCheatSheet']");
  if (railCheatBtn) railCheatBtn.title = t("dock_cheat_title");
  const railCheatTooltip = document.querySelector("#rightRail button[onclick*='toggleCheatSheet'] + .rail-tooltip");
  if (railCheatTooltip) railCheatTooltip.textContent = t("dock_cheat_title");

  const railVideoBtn = document.querySelector("#rightRail button[onclick*='toggleVideoPlayback']");
  if (railVideoBtn) railVideoBtn.title = t("dock_video_title");
  const railVideoTooltip = document.querySelector("#rightRail button[onclick*='toggleVideoPlayback'] + .rail-tooltip");
  if (railVideoTooltip) railVideoTooltip.textContent = t("dock_video_title");

  const railResetBtn = document.querySelector("#rightRail div[onclick*='resetAllProgress']");
  if (railResetBtn) railResetBtn.title = t("dock_progress_reset_hint");
  const railResetSubtext = document.querySelector("#rightRail .rail-tooltip div.text-\\[10px\\]");
  if (railResetSubtext) railResetSubtext.textContent = t("dock_progress_reset_hint");

  // 移动端演练场返回教程按钮
  const mobileBackBtn = document.querySelector("#playgroundView button[onclick*='switchTab'] span");
  if (mobileBackBtn) mobileBackBtn.textContent = t("back_to_tutorial");

  // 演练场收起按钮提示
  const playgroundHideBtn = document.querySelector("#playgroundView button[onclick*='togglePlayground(false)']");
  if (playgroundHideBtn) playgroundHideBtn.title = lang === "en" ? "Hide Playground (Ctrl+J)" : "隐藏演练场 (按 Ctrl+J 或点击顶栏按钮可恢复展开)";

  // 预设范例下拉默认项
  const snippetSelect = document.getElementById("snippetSelect");
  if (snippetSelect && snippetSelect.options && snippetSelect.options[0]) {
    snippetSelect.options[0].textContent = t("preset_select_default");
  }

  // 终端初始等待提示
  const term = document.getElementById("terminalOutput");
  if (term && term.querySelector("span.text-slate-500")) {
    term.innerHTML = `<span class="text-slate-500">${t("terminal_waiting")}</span>`;
  }

  // 语法速查弹窗
  renderCheatSheet();
}
window.applyI18n = applyI18n;

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 动态微粒星云背景视频控制
function toggleVideoPlayback() {
  const video = document.getElementById("bgVideo");
  const icon = document.getElementById("videoPlayIcon");
  if (!video) return;

  if (video.paused) {
    video.play();
    if (icon) icon.textContent = "✨";
    showToast(t("video_resumed"), "info");
  } else {
    if (!document.body.classList.contains("video-vivid")) {
      document.body.classList.add("video-vivid");
      showToast(t("video_vivid"), "success");
    } else {
      document.body.classList.remove("video-vivid");
      video.pause();
      if (icon) icon.textContent = "⏸";
      showToast(t("video_paused"), "info");
    }
  }
}

// ==========================================================================
// 5. 惯性滚轮控制器 (Inertial Wheel Controller with Momentum & Rubber-Band)
// ==========================================================================
// 5. 步骤导航横向滚动控制器 (取消下滑切步，恢复自然平滑滚动)
// ==========================================================================
class InertiaWheelController {
  constructor() {
    this.container = document.getElementById("tutorialView");
    this.cue = document.getElementById("inertiaStepCue");
    this.init();
  }

  init() {
    // 隐藏/停用惯性切步浮标，完全允许页面自然平滑下滑阅读长图与长章节
    if (this.cue) {
      this.cue.classList.remove("visible");
      this.cue.style.display = "none";
    }

    // 步骤导航条药丸区域水平滚轮支持
    const stepTrack = document.getElementById("stepNavZone");
    if (stepTrack) {
      stepTrack.addEventListener("wheel", (e) => {
        const pills = document.getElementById("stepNavZonePills");
        if (pills && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          pills.scrollLeft += e.deltaY * 0.9;
        }
      }, { passive: false });
    }

    // 全局滚轮自然直达：当鼠标悬停在教程视口外围边距、顶栏空白区域时，自然顺畅下滑教程页面
    window.addEventListener("wheel", (e) => {
      const target = e.target;
      if (!target) return;
      // 若处于独立的滚动容器内（如代码编辑器、终端、大纲列表、速查手册、命令面板等），尊重其自身滚动
      if (target.closest("#codeEditor, #terminalOutput, #sidebarChapters, #cheatSheetModal, #commandPaletteModal, #snippetSelect, #sidebar")) {
        return;
      }
      const tv = document.getElementById("tutorialView");
      if (!tv) return;
      // 如果不在 tutorialView 内部，则转交滚动，让用户在任何空白边距滑轮都能控制页面流畅滚下
      if (!tv.contains(target)) {
        tv.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    }, { passive: true });
  }
}

let inertiaScrollerInstance = null;
function initInertialScroll() {
  if (!inertiaScrollerInstance) {
    inertiaScrollerInstance = new InertiaWheelController();
  }
}

// 全局暴露供 HTML 模板安全调用的核心函数
window.switchStep = switchStep;
window.switchChapter = switchChapter;
window.handleChapterCompletionFeedback = handleChapterCompletionFeedback;
window.toggleStepComplete = toggleStepComplete;
window.toggleDeckExpand = toggleDeckExpand;
window.selectDeckCard = selectDeckCard;
window.toggleChapterComplete = toggleChapterComplete;
window.toggleVideoPlayback = toggleVideoPlayback;
window.toggleTheme = toggleTheme;
window.toggleSidebar = toggleSidebar;
window.toggleCheatSheet = toggleCheatSheet;
window.togglePlayground = togglePlayground;
window.resetAllProgress = resetAllProgress;
window.runPythonCode = runPythonCode;
window.copyCode = copyCode;
window.sendCodeToPlayground = sendCodeToPlayground;
window.initInertialScroll = initInertialScroll;
window.toggleLanguage = toggleLanguage;
window.applyI18n = applyI18n;
window.renderCheatSheet = renderCheatSheet;

