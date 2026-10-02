document.addEventListener("DOMContentLoaded", function () {
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

  var navLinks = document.querySelectorAll(".sidebar nav a[href^='#']");
  var targets = [];
  navLinks.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) targets.push({ link: a, el: el });
  });

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = null;
    targets.forEach(function (t) {
      if (t.el.offsetTop <= pos) current = t;
    });
    navLinks.forEach(function (a) { a.classList.remove("active"); });
    if (current) current.link.classList.add("active");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
