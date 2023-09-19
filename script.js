var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 15 + "px";
  crsr.style.top = dets.y + 15 + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000 ",
  duration: 0.5,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -60%",
    scrub: 2,
  },
});




gsap.to("#page2", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end: "top -90%",
    scrub: 2,
  },
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    (crsr.style.scale = 3),
      (crsr.style.border = "1px solid #fff"),
      (crsr.style.backgroundColor = "transparent");
  });

  elem.addEventListener("mouseleave", function () {
    (crsr.style.scale = 1),
      (crsr.style.border = "0px solid rgba(255, 255, 255, 0.521)"),
      (crsr.style.backgroundColor = "rgba(255, 255, 255, 0.521)");
  });
});

gsap.from("#about-us img, #about-us-in", {
  y: 50,
  scale: 0.5,

  opacity: 0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from("#card1, #card2, #card3", {
  y: 50,
  scale: 0.5,

  opacity: 0,
  duration: 1,
  // stagger:0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 3,
  },
});

gsap.from(".card", {
  scale: 0.5,
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: +70,
  x: +70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".board", {
  scale: 0.5,
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".board",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// In your JavaScript (style.js)
// Use event listeners to associate functions with user interactions

// Scroll to the top function (for "Back to Top" button)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Get a reference to the button element
const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

// Add a click event listener to the button
scrollToBottomBtn.addEventListener('click', function () {
  // Scroll to the bottom of the page smoothly
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
