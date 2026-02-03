AOS.init({
  duration: 1000,
  once: true
});

// Typing effect
const text = "Développeuse web • Étudiante • Créative • Moderne";
let index = 0;
const speed = 80;
const target = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

