// HAMBURGER MENU

function menu() {
  var x = document.getElementById("menu");

  if (window.getComputedStyle(x).visibility === "visible") {
    x.classList.toggle("active");
  }
}

// SCROLL REVEAL GLOBAL

ScrollReveal({
  reset: true,
  distance: "35%",
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
ScrollReveal().reveal(".description", { origin: "bottom", delay: "1200" });

// ABOUT

ScrollReveal().reveal(".img02", { origin: "left", delay: "300" });
ScrollReveal().reveal(".sub02", { origin: "right", delay: "600" });
ScrollReveal().reveal(".s01-p01", { origin: "left", delay: "900" });
ScrollReveal().reveal(".s01-p02", { origin: "right", delay: "1200" });
ScrollReveal().reveal(".s01-p03", { origin: "bottom", delay: "1600" });

// CONTACT

ScrollReveal().reveal(".img03", { origin: "left", delay: "300" });
ScrollReveal().reveal(".sub03", { origin: "right", delay: "600" });
ScrollReveal().reveal(".s03-p01", { origin: "bottom", delay: "900" });
