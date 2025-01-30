// GSAP Animation
const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");
const menuItems = document.querySelectorAll(".menu-item");

// Timeline for the menu animation
const tl = gsap.timeline({ paused: true });

// Animation for the overlay sliding down
tl.to(menuOverlay, {
  top: "0%",
  duration: 0.8,
  ease: "power2.inOut"
});

// Animation for menu items fading in
tl.to(menuItems, {
  opacity: 1,
  y: 0,
  stagger: 0.2,
  duration: 0.5,
  ease: "power2.out"
}, "-=0.5");

// Open/Close Menu
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuToggle.classList.toggle("active");

  if (menuOpen) {
    tl.play();
  } else {
    tl.reverse();
  }
});


//  your vision js 
gsap.registerPlugin(TextPlugin);

gsap.to("#test", {
  duration: 2,
  delay:0.3,
  text: "Your Vision",
  ease: "power1.inOut"
});

// spin animation
gsap.to(".fa-bahai", {
  rotation: 360,
  duration: 4, /* Slower spin */
  repeat: -1, /* Infinite loop */
  ease: "linear" /* Smooth rotation */
});


// marquee
gsap.to(".marquee", {
  x: "-100%",
  duration: 4,
  repeat: -1,
  ease: "linear"
});
