document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({})
    .add({
      targets: "#appleicon-white",
      opacity: [0, 1],
      translateX: [-200, 0],
      duration: 5000
    })
    .add({
      targets: ".heading",
      opacity: [0, 1],
      translateX: [-800, 0],
      duration: 3000,
      offset: 0
    })
    .add({
      targets: ".heading-two",
      translateY: [-800, 0],
      duration: 4000,
      offset: 200
    })
    .add({
      targets: "#iphone",
      translateX: [-520],
      duration: 4000,
      offset: 2400,
      scale: [0.5, 1],
      offset: 0
    })
    .add({
      targets: "#buy-button, #price",
      opacity: [0, 1],
      duration: 8000,
      delay: 2400,
      offset: 0
    });
});

/* Funktion som visar "back-to-top"-pilen när man är 200px från toppen */
let arrow = document.querySelector("#back-to-top");
let topsection = document.querySelector(".top-section");

window.addEventListener("scroll", () => {
  let rect = topsection.getBoundingClientRect();
  window.innerHeight - rect.top > window.innerHeight + 200
    ? (arrow.style.display = "flex")
    : (arrow.style.display = "none");
});

/* SECTION TWO START */

/* <p> TAG Brilliant. In every way. START */

function checkForVisibility() {
  var headers = document.querySelectorAll(".header-section-two");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("header-visible-section-two");
    } else {
      header.classList.remove("header-visible-section-two");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("scroll", checkForVisibility, false);
}

/* <p> TAG Brilliant. In every way. END */

/* IPHONE IMAGES WITH TEXT START */

var animateHeadersIn = anime({
  targets:
    ".heading-section-two-1, .heading-section-two-2, .heading-section-two-3",
  opacity: [0, 1],
  duration: 8000,
  offset: 0,
  delay: function(el, i, l) {
    return i * 1000;
  }
});

animateHeadersIn.pause();

function checkForVisibilityText() {
  var text = document.querySelectorAll(".hide");
  text.forEach(function(tx) {
    if (isElementInViewport(tx)) {
      tx.classList.add("show");
      }

  })};

function checkForVisibilityImage() {
  var image = document.querySelectorAll(".header-section-two-image");
  image.forEach(function(img) {
    if (isElementInViewport(img)) {
      img.classList.add("header-visible-section-two-image");
      if (animateHeadersIn.paused && !animateHeadersIn.completed)
        animateHeadersIn.play();
    } else {
      animateHeadersIn.play();
      animateHeadersIn.pause();
      img.classList.remove("header-visible-section-two-image");
      anime({
        targets:
          ".heading-section-two-1, .heading-section-two-2, .heading-section-two-3",
        opacity: 0,
        duration: 8000,
        delay: 500,
        offset: 0
      });
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("scroll", checkForVisibilityImage, false);
}

/* IPHONE IMAGES WITH TEXT END */

document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({ loop: true })
    .add({
      targets: ".bigtext",

      translateX: [-300, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text1",
      translateX: [-200, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text2",
      translateX: [-200, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text3",
      translateX: [-200, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text4",
      translateX: [-200, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text6",
      translateX: [-200, 0],
      scale: [0.0, 1],
      duration: 700,
      easing: "easeOutExpo"
    })
    .add({
      targets: ".text6,.text4,.text3,.text2,.text1,.bigtext",
      opacity: 0,
      easing: "linear",
      delay: 3000
    })
    .add({
      duration: 100
    });
});
