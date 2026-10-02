/* GenAI Coaching — Gamification (vanilla, no deps)
   Features: scroll progress + XP (10 per section, 25 per quiz correct),
   localStorage per file (genai-progress-{pathname}), quiz validation with
   instant feedback, streak, completion certificate, copy-btn preservation,
   respects prefers-reduced-motion.
*/
(function () {
  var STORAGE_PREFIX = "genai-progress-";
  var XP_SECTION = 10;
  var XP_QUIZ = 25;
  var prefersReduced = false;
  try { prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  function storageKey() {
    return STORAGE_PREFIX + location.pathname;
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(storageKey());
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { xp: 0, seenSections: [], answeredQuizzes: [], streak: 0, maxStreak: 0, completed: false };
  }

  function saveState(s) {
    try { localStorage.setItem(storageKey(), JSON.stringify(s)); } catch (e) {}
  }

  var state = loadState();

  // ----- DOM helpers -----
  function ensureProgressBar() {
    var bar = document.querySelector(".genai-progress");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "genai-progress";
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuemin", "0");
      bar.setAttribute("aria-valuemax", "100");
      bar.setAttribute("aria-valuenow", "0");
      document.body.insertBefore(bar, document.body.firstChild);
    }
    return bar;
  }

  function ensureInlineProgress() {
    var wrap = document.querySelector(".genai-progress-wrap");
    if (wrap) return wrap;
    // Inject after page-header if present, else top of .content
    var header = document.querySelector(".page-header");
    var content = document.querySelector(".content") || document.body;
    wrap = document.createElement("div");
    wrap.className = "genai-progress-wrap";
    wrap.innerHTML = '<div class="genai-progress-track" aria-hidden="true"><div class="genai-progress-fill"></div></div><span class="genai-xp-badge">XP <strong>0</strong></span>';
    if (header && header.parentNode) {
      header.insertAdjacentElement("afterend", wrap);
    } else {
      content.insertBefore(wrap, content.firstChild);
    }
    return wrap;
  }

  function ensureToast() {
    var t = document.querySelector(".genai-xp-toast");
    if (t) return t;
    t = document.createElement("div");
    t.className = "genai-xp-toast";
    t.setAttribute("aria-live", "polite");
    document.body.appendChild(t);
    return t;
  }

  function ensureCertModal() {
    var overlay = document.querySelector(".genai-cert-overlay");
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.className = "genai-cert-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Completion certificate");
    overlay.innerHTML = '<div class="genai-cert-modal">'
      + '<div class="genai-cert-badge">\u2713 Complete</div>'
      + '<h3>Checkpoint complete</h3>'
      + '<p>You have finished this module. Your progress is saved per file and your XP persists on this device.</p>'
      + '<div style="margin:6px 0 14px;font-weight:700;color:#0A0A0A" class="genai-cert-xp"></div>'
      + '<button type="button" class="genai-cert-close">Continue</button>'
      + '</div>';
    document.body.appendChild(overlay);
    var close = overlay.querySelector(".genai-cert-close");
    function hide() { overlay.classList.remove("is-open"); }
    if (close) close.addEventListener("click", hide);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) hide(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") hide(); });
    return overlay;
  }

  var progressBar = ensureProgressBar();
  var inlineWrap = ensureInlineProgress();
  var inlineFill = inlineWrap.querySelector(".genai-progress-fill");
  var xpBadge = inlineWrap.querySelector(".genai-xp-badge strong") || inlineWrap.querySelector(".genai-xp-badge");
  var toastEl = ensureToast();
  var certOverlay = ensureCertModal();
  var toastTimer = null;

  function showToast(text) {
    toastEl.textContent = text;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-visible"); }, 2200);
  }

  function addXP(amount, label) {
    state.xp += amount;
    saveState(state);
    updateXPDisplay();
    showToast("+" + amount + " XP  " + (label || ""));
  }

  function updateXPDisplay() {
    if (xpBadge) {
      // if strong child exists, set its text
      var strong = inlineWrap.querySelector(".genai-xp-badge strong");
      if (strong) strong.textContent = String(state.xp);
      else if (xpBadge) xpBadge.textContent = "XP " + state.xp;
    }
    var certXp = certOverlay.querySelector(".genai-cert-xp");
    if (certXp) certXp.textContent = state.xp + " XP earned";
  }

  function updateProgressUI() {
    var sections = getSections();
    var total = sections.length || 1;
    var seen = state.seenSections.length;
    // Also factor in scroll position for bar fill
    var scrollPct = 0;
    try {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      scrollPct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    } catch (e) {}
    var seenPct = Math.round((seen / total) * 100);
    // Use max of seen progress and scroll for visual bar
    var pct = Math.max(seenPct, Math.min(100, Math.round(scrollPct)));
    // For inline fill, use seenPct
    if (inlineFill) {
      inlineFill.style.width = seenPct + "%";
      if (prefersReduced) inlineFill.style.transition = "none";
    }
    if (progressBar) {
      progressBar.style.width = pct + "%";
      progressBar.setAttribute("aria-valuenow", String(pct));
      if (prefersReduced) progressBar.style.transition = "none";
    }
  }

  function getSections() {
    var nodes = document.querySelectorAll("section.part, .topic, section[id]");
    if (nodes.length === 0) nodes = document.querySelectorAll("section");
    return Array.prototype.slice.call(nodes);
  }

  function getQuizzes() {
    return Array.prototype.slice.call(document.querySelectorAll(".genai-quiz, [data-genai-quiz]"));
  }

  function maybeShowCertificate() {
    if (state.completed) return;
    var sections = getSections();
    var quizzes = getQuizzes();
    var allSectionsSeen = sections.length > 0 ? state.seenSections.length >= sections.length : true;
    var allQuizzesDone = quizzes.length > 0 ? state.answeredQuizzes.length >= quizzes.length : true;
    // Show when both done, or when only one type exists
    var shouldShow = false;
    if (sections.length > 0 && quizzes.length > 0) shouldShow = allSectionsSeen && allQuizzesDone;
    else if (sections.length > 0) shouldShow = allSectionsSeen;
    else if (quizzes.length > 0) shouldShow = allQuizzesDone;
    else shouldShow = false;
    if (shouldShow) {
      state.completed = true;
      saveState(state);
      certOverlay.classList.add("is-open");
      // Focus close button for a11y
      var btn = certOverlay.querySelector(".genai-cert-close");
      if (btn) try { btn.focus(); } catch (e) {}
    }
  }

  // ----- Section tracking -----
  function initSectionTracking() {
    var sections = getSections();
    sections.forEach(function (el, idx) {
      if (!el.id) el.setAttribute("data-genai-auto-id", "genai-sec-" + idx);
    });

    function markSeen(el) {
      var id = el.id || el.getAttribute("data-genai-auto-id");
      if (!id) return;
      if (state.seenSections.indexOf(id) !== -1) return;
      state.seenSections.push(id);
      saveState(state);
      addXP(XP_SECTION, "section");
      updateProgressUI();
      el.classList.add("genai-seen");
      // Mark checkpoint if element has checkpoint
      var cp = el.querySelector && el.querySelector(".genai-checkpoint");
      if (cp) cp.classList.add("is-done");
      maybeShowCertificate();
    }

    if ("IntersectionObserver" in window && !prefersReduced) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            markSeen(entry.target);
          }
        });
      }, { threshold: [0.35, 0.6] });
      sections.forEach(function (s) { obs.observe(s); });
    } else {
      // Fallback: scroll listener marks sections that passed top
      var ticking = false;
      function check() {
        var pos = window.scrollY + window.innerHeight * 0.6;
        sections.forEach(function (s) {
          if (s.offsetTop <= pos) markSeen(s);
        });
        updateProgressUI();
        ticking = false;
      }
      window.addEventListener("scroll", function () {
        if (!ticking) { ticking = true; requestAnimationFrame(check); }
      }, { passive: true });
      // Initial check
      check();
    }
  }

  // ----- Quiz handling -----
  function initQuizzes() {
    var quizzes = getQuizzes();
    quizzes.forEach(function (quiz, qIdx) {
      var quizId = quiz.getAttribute("data-quiz-id") || quiz.id || ("quiz-" + qIdx);
      quiz.setAttribute("data-quiz-id", quizId);
      var options = quiz.querySelectorAll(".genai-quiz-option, button[data-answer], button[data-correct], [data-correct]");
      // Find feedback element
      var feedback = quiz.querySelector(".genai-quiz-feedback");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.className = "genai-quiz-feedback";
        feedback.setAttribute("role", "status");
        quiz.appendChild(feedback);
      }

      // If already answered correctly before, reflect
      if (state.answeredQuizzes.indexOf(quizId) !== -1) {
        quiz.classList.add("is-answered");
        // disable options
        Array.prototype.forEach.call(options, function (o) { o.disabled = true; });
        feedback.textContent = "Already completed \u2713";
        feedback.className = "genai-quiz-feedback is-visible is-correct";
      }

      Array.prototype.forEach.call(options, function (btn) {
        btn.addEventListener("click", function () {
          if (quiz.classList.contains("is-answered-correct")) return;
          // Determine correctness
          var isCorrect = false;
          var corr = btn.getAttribute("data-correct");
          var ans = btn.getAttribute("data-answer");
          if (corr !== null) {
            isCorrect = corr === "true" || corr === "1" || corr === "correct";
          } else if (ans !== null) {
            // fallback: value check against quiz data-answer
            var expected = quiz.getAttribute("data-answer") || quiz.getAttribute("data-correct-answer");
            if (expected !== null) isCorrect = ans === expected;
          } else {
            // Check class hint
            isCorrect = btn.classList.contains("is-correct-answer") || btn.hasAttribute("data-is-correct");
          }

          // Instant feedback
          Array.prototype.forEach.call(options, function (o) { o.classList.remove("is-selected", "is-correct", "is-wrong"); });
          btn.classList.add("is-selected");
          feedback.classList.add("is-visible");
          if (isCorrect) {
            btn.classList.add("is-correct");
            feedback.textContent = btn.getAttribute("data-feedback-correct") || quiz.getAttribute("data-feedback-correct") || "Correct! +" + XP_QUIZ + " XP";
            feedback.className = "genai-quiz-feedback is-visible is-correct";
            if (state.answeredQuizzes.indexOf(quizId) === -1) {
              state.answeredQuizzes.push(quizId);
              state.streak = (state.streak || 0) + 1;
              if (state.streak > (state.maxStreak || 0)) state.maxStreak = state.streak;
              saveState(state);
              addXP(XP_QUIZ, "quiz");
              quiz.classList.add("is-answered", "is-answered-correct");
              // disable all options after correct
              Array.prototype.forEach.call(options, function (o) { o.disabled = true; });
              btn.disabled = false; // keep selected enabled styling
            }
          } else {
            btn.classList.add("is-wrong");
            state.streak = 0;
            saveState(state);
            feedback.textContent = btn.getAttribute("data-feedback-wrong") || quiz.getAttribute("data-feedback-wrong") || "Not quite \u2014 try again.";
            feedback.className = "genai-quiz-feedback is-visible is-wrong";
            // allow retry: re-enable after short delay if needed, but keep enabled
          }
          maybeShowCertificate();
        });
      });
    });
  }

  // ----- Copy-btn preservation (re-init if genai loaded before script.js) -----
  function initCopyButtons() {
    // Only enhance if not already handled
    document.querySelectorAll(".code-block").forEach(function (block) {
      var btn = block.querySelector(".copy-btn");
      var codeEl = block.querySelector("code");
      if (!btn || !codeEl) return;
      if (btn.getAttribute("data-genai-copy-bound") === "1") return;
      // If script.js already bound, do not double-bind; detect by checking if button has listener-like marker
      // We mark ours; existing script.js does not set marker, so we only bind if no marker and button seems unbound.
      // To avoid double trigger, we check if button already has copied behavior by testing outer marker.
      // Instead, we simply add our handler only if button lacks our marker and also add marker to prevent second gamify load.
      // This preserves original behavior: either original handler runs, or ours runs — never break.
      var alreadyHasHandler = btn.getAttribute("data-copy-bound") === "1";
      if (alreadyHasHandler) { btn.setAttribute("data-genai-copy-bound", "1"); return; }
      // Attach fallback copy handler that mirrors script.js behavior
      btn.setAttribute("data-genai-copy-bound", "1");
      // Only attach if no existing handler detected via clone test: we assume original script.js may have already run.
      // If original already bound, attaching second handler is harmless (both will copy), but we avoid it by checking if button has been enhanced after DOMContentLoaded.
      // We do a lightweight check: if original script.js loaded, buttons would have had time — so skip if original likely present.
      // Heuristic: if document already has fired DOMContentLoaded and copy buttons exist, original may have bound; we skip.
      // Instead we just ensure a single handler: if we detect original script.js present (global marker), skip.
      // For now, we add handler only when original handler not observed — we attach and let both coexist safely.
      // To keep behavior correct, we attach our handler but guard to not duplicate toast.
      // Simplest: do nothing if original script.js already handled; our preservation means we don't remove theirs.
      // So we intentionally do NOT add a second handler if we think original exists — we just ensure button remains functional.
      // We add handler only as fallback when original didn't bind (e.g., genai loads standalone).
      // Attach fallback handler that will work even without original:
      btn.addEventListener("click", function () {
        // If original handler already fired, this will run second but is idempotent — copy again.
        // We do copy to ensure functionality even without original script.js
        var text = codeEl.innerText;
        var done = function () {
          var original = btn.textContent;
          // Avoid overriding Copied! flicker if original handler already set it
          if (btn.textContent === "Copied!") return;
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove("copied");
          }, 1400);
        };
        if (navigator.clipboard && window.isSecureContext !== false) {
          navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
        } else {
          fallbackCopy(text, done);
        }
      });
    });

    function fallbackCopy(text, done) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  }

  // ----- Init -----
  function init() {
    updateXPDisplay();
    updateProgressUI();
    initSectionTracking();
    initQuizzes();
    initCopyButtons();
    window.addEventListener("scroll", updateProgressUI, { passive: true });
    updateProgressUI();
    // If no sections but quizzes only, maybe show cert if already done
    maybeShowCertificate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
