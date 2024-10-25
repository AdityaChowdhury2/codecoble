const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});


function page3Animation(){
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
      fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
      fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
      });
    });
}
page3Animation();



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

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
     
    });
}
swiperAnimation();

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