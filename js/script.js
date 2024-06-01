// HAMBURGER MENU

function menu() {
  var x = document.getElementById("menu");

  if (window.getComputedStyle(x).visibility === "visible") {
    x.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  }
}

// DISABLE SCROLLING WHEN HAM-MENU IS OPEN MOBILE

function checkScroll() {
  var x = document.getElementById("menu");
  if (
    x.classList.contains("active") &&
    window.getComputedStyle(x).visibility === "visible"
  ) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

// SCROLL REVEAL ANIMATIONS GLOBAL

ScrollReveal({
  reset: true,
  cleanup: true,
  distance: "10%",
  duration: "1000",
  // delay: "200",
  // origin: "left",
});

// SEPERATOR

ScrollReveal().reveal(".seperator", { delay: "600" });

// HOME

ScrollReveal().reveal(".img01", { origin: "right", delay: "300" });
ScrollReveal().reveal(".sub01", { origin: "left", delay: "600" });
ScrollReveal().reveal(".title", { origin: "right", delay: "900" });
ScrollReveal().reveal(".home-d01", { origin: "bottom", delay: "1200" });

// ABOUT

ScrollReveal().reveal(".img02", { origin: "left", delay: "300" });
ScrollReveal().reveal(".sub02", { origin: "right", delay: "600" });
ScrollReveal().reveal(".s01-p01", { origin: "right", delay: "700" });
ScrollReveal().reveal(".s01-p02", { origin: "right", delay: "750" });
ScrollReveal().reveal(".s01-p03", { origin: "right", delay: "800" });

// CONTACT

ScrollReveal().reveal(".img03", { origin: "left", delay: "300" });
ScrollReveal().reveal(".sub03", { origin: "right", delay: "600" });
ScrollReveal().reveal(".contact-form", { origin: "right", delay: "700" });
