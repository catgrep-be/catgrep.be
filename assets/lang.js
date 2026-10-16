(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("catgrep-lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  root.lang = lang;

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".lang");
    if (!btn) return;
    var paint = function () { btn.textContent = root.lang === "fr" ? "EN" : "FR"; };
    paint();
    btn.addEventListener("click", function () {
      root.lang = root.lang === "fr" ? "en" : "fr";
      try { localStorage.setItem("catgrep-lang", root.lang); } catch (e) {}
      paint();
    });
  });
})();
