document.addEventListener("DOMContentLoaded", function () {
  // ---- copy-to-clipboard (same behavior as script.js, kept self-contained here) ----
  document.querySelectorAll(".code-block").forEach(function (block) {
    var btn = block.querySelector(".copy-btn");
    var codeEl = block.querySelector("code");
    if (!btn || !codeEl) return;
    btn.addEventListener("click", function () {
      var text = codeEl.innerText;
      var done = function () {
        var original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1400);
      };
      if (navigator.clipboard && window.isSecureContext !== false) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text, done);
        });
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

  // ---- slide controller ----
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  var current = 0;
  var numEl = document.getElementById("slideNum");
  var totalEl = document.getElementById("slideTotal");
  var prevBtn = document.getElementById("prevSlide");
  var nextBtn = document.getElementById("nextSlide");
  if (totalEl) totalEl.textContent = slides.length;

  var idToIndex = {};
  slides.forEach(function (s, i) { idToIndex[s.id] = i; });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".sidebar nav a[href^='#']"));

  function show(i, opts) {
    opts = opts || {};
    if (i < 0) i = 0;
    if (i >= slides.length) i = slides.length - 1;
    slides[current].classList.remove("active");
    current = i;
    slides[current].classList.add("active");
    if (numEl) numEl.textContent = current + 1;
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;

    var id = slides[current].id;
    navLinks.forEach(function (a) { a.classList.remove("active"); });
    var link = document.querySelector(".sidebar nav a[href='#" + id + "']");
    if (link) {
      link.classList.add("active");
      link.scrollIntoView({ block: "nearest" });
    }
    if (!opts.skipHash) history.replaceState(null, "", "#" + id);
  }

  navLinks.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var id = a.getAttribute("href").slice(1);
      if (id in idToIndex) show(idToIndex[id]);
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", function () { show(current - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { show(current + 1); });

  document.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); show(current + 1); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); show(current - 1); }
  });

  var startId = location.hash ? location.hash.slice(1) : null;
  if (startId && startId in idToIndex) show(idToIndex[startId], { skipHash: true });
  else show(0, { skipHash: true });
});
