const fadeElements = document.querySelectorAll(".fade");

function revealSections() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


// Smooth navbar active effect

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

  });
});


// Typing Animation

const roles = [
  "Full Stack Developer",
  "AIML Student",
  "Web Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {

  if (!typingElement) return;

  if (charIndex < roles[roleIndex].length) {

    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(eraseEffect, 1500);

  }
}

function eraseEffect() {

  if (charIndex > 0) {

    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  } else {

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    setTimeout(typeEffect, 300);

  }
}

window.onload = () => {
  revealSections();
  typeEffect();
};