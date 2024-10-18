const hamburger = document.querySelector(".hamburger");
function openLinkMenu() {
  setTimeout(function () {
    window.open("https://online.fliphtml5.com/qnpjy/hsht/", "_blank");
  }, 500);
}
function openLinkEvents() {
  setTimeout(function () {
    window.open("https://www.facebook.com/hiddencaffebar", "_blank");
  }, 500);
}
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"), navMenu.classList.toggle("active");
}),
  document.querySelectorAll(".nav-link").forEach((e) =>
    e.addEventListener("click", () => {
      hamburger.classList.remove("active");
    })
  ),
  (src = "https://code.jquery.com/jquery-3.7.1.min.js"),
  (integrity = "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="),
  (crossorigin = "anonymous"),
  (src = "jquery.flipster.min.js"),
  $(".carousel").flipster({ style: "carousel", spacing: -0.3 });
