const phrases = ["Best Pawtection Gear", "Paw Approved", "Comfort Meets Safety"];
const typingSpeed = 120;
const erasingSpeed = 80;
const delayBetweenPhrases = 2000;

const typedText = document.querySelector(".typing-text");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (!isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenPhrases);
      return;
    }
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
