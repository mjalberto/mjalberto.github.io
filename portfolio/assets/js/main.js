/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

/*========= MENU SHOW =========*/
//Validar se a constante existe
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*========= MENU HIDDEN =========*/
//Validar se a constante existe
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //quando clicado em cada 'nav__link', será removida a classe 'show-menu'
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowlHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowlHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "portfolio_mjalberto",
      "template_lw6v2tn",
      "#contact-form",
      "yx1hzuZJNkC3RIMKZ",
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      },
    );
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]",
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme,
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme,
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: `right` });
sr.reveal(
  `.home__name, .home__info, 
            .about__container, .section__title-1, .about__info,
            .contact__social, .contact__data`,
  { origin: `left` },
);
sr.reveal(`.services__card, .projects__card`, { interval: `100` });

/*=============== IMAGE SLIDER ===============*/
// Project data - Specify the project folder and number of images
// Example: proj-01 folder contains proj-img-01.jpg, proj-img-02.jpg, etc.
const projectsData = [
  { title: "Object Recoloring Study", folder: "proj-01", imageCount: 4 },
  { title: "Product Durability Marks", folder: "proj-02", imageCount: 4 },
  { title: "Material Swap", folder: "proj-03", imageCount: 3 },
  { title: "Lights Compositing", folder: "proj-04", imageCount: 5 },
  { title: "Sample Project", folder: "proj-05", imageCount: 3 },
];

// Function to generate image paths
const generateImagePaths = (folder, imageCount) => {
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    const paddedNumber = String(i).padStart(2, "0");
    images.push(`assets/img/${folder}/proj-img-${paddedNumber}.jpg`);
  }
  return images;
};

// Slider variables
const sliderModal = document.getElementById("slider-modal");
const sliderContainer = document.getElementById("slider-container");
const sliderIndicator = document.getElementById("slider-indicator");
const sliderClose = document.getElementById("slider-close");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
const projectButtons = document.querySelectorAll(".projects__button");

let currentProjectIndex = 0;
let currentSlideIndex = 0;
let totalSlides = 0;

// Initialize slider
const initializeSlider = (projectIndex) => {
  currentProjectIndex = projectIndex;
  currentSlideIndex = 0;
  const project = projectsData[projectIndex];
  const images = generateImagePaths(project.folder, project.imageCount);
  totalSlides = images.length;

  // Clear previous slides
  sliderContainer.innerHTML = "";
  sliderIndicator.innerHTML = "";

  // Create slides
  images.forEach((image) => {
    const slide = document.createElement("div");
    slide.className = "slider__slide";
    slide.innerHTML = `<img src="${image}" alt="Project image">`;
    sliderContainer.appendChild(slide);
  });

  // Create indicator dots
  images.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `slider__dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(index));
    sliderIndicator.appendChild(dot);
  });

  // Open modal
  sliderModal.classList.add("active");
  document.body.style.overflow = "hidden";
  updateSliderPosition();
};

// Update slider position
const updateSliderPosition = () => {
  const offset = -currentSlideIndex * 100;
  sliderContainer.style.transform = `translateX(${offset}%)`;

  // Update active dot
  const dots = document.querySelectorAll(".slider__dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlideIndex);
  });
};

// Go to specific slide
const goToSlide = (index) => {
  if (index >= 0 && index < totalSlides) {
    currentSlideIndex = index;
    updateSliderPosition();
  }
};

// Next slide
const nextSlide = () => {
  if (currentSlideIndex < totalSlides - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateSliderPosition();
};

// Previous slide
const prevSlide = () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = totalSlides - 1;
  }
  updateSliderPosition();
};

// Close slider — reset to first slide then hide
const closeSlider = () => {
  // reset to first slide so next open starts at page 1
  currentSlideIndex = 0;
  updateSliderPosition();

  sliderModal.classList.remove("active");
  document.body.style.overflow = "";
};

// Event listeners for slider
projectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const projectIndex = parseInt(button.dataset.project);
    initializeSlider(projectIndex);
  });
});

// Also allow .projects__link anchors to open the corresponding project slider
const projectLinks = document.querySelectorAll(".projects__link");
projectLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const card = link.closest(".projects__card");
    if (!card) return;

    // Prefer explicit data-project on the card's button if present
    const btn = card.querySelector(".projects__button");
    let projectIndex = null;
    if (btn && btn.dataset && btn.dataset.project) {
      projectIndex = parseInt(btn.dataset.project);
    } else {
      // Fallback: determine index by card position
      const cards = Array.from(document.querySelectorAll(".projects__card"));
      projectIndex = cards.indexOf(card);
    }

    if (projectIndex >= 0) initializeSlider(projectIndex);
  });
});

sliderClose.addEventListener("click", closeSlider);
sliderPrev.addEventListener("click", prevSlide);
sliderNext.addEventListener("click", nextSlide);

// Close slider on backdrop click
sliderModal.addEventListener("click", (e) => {
  if (e.target === sliderModal) {
    closeSlider();
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!sliderModal.classList.contains("active")) return;

  if (e.key === "Escape") closeSlider();
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
