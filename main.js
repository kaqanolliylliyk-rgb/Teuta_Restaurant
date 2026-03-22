(function () {
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var resForm = document.getElementById("reservation-form");
  if (resForm) {
    resForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = resForm.getAttribute("data-email") || "";
      var fd = new FormData(resForm);
      var lines = [];
      fd.forEach(function (value, key) {
        if (value) lines.push(key + ": " + value);
      });
      var body = encodeURIComponent(lines.join("\n"));
      var subject = encodeURIComponent("Rezervim tryezë — Restorant Teuta");
      var href = "mailto:" + encodeURIComponent(email) + "?subject=" + subject + "&body=" + body;
      window.location.href = href;
    });
  }
})();
