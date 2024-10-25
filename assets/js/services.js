function loaderAnimation() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  });
}
loaderAnimation();

function cursorEffect() {
  var page1Content = document.querySelector(".section1");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h5 a, nav button", {
    y: -30,
    duration: 0.5,
    delay: 5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -30%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "subha"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "subha"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "jit"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "jit"
  );
  tl2.from(
    ".elem.line3.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "dhali"
  );
  tl2.from(
    ".elem.line3.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "dhali"
  );
}
page2Animation();

const burger = document.querySelector(".burger");
const navLinks = document.getElementById("navLinks");
const navLinksItems = document.querySelectorAll("#navLinks a");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Animate burger to X shape for open menu
  burger.classList.toggle("open");
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close the menu when a link is clicked
    navLinks.classList.remove("active");
    burger.classList.remove("open");
  });
});
