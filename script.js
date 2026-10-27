
const startButton = document.getElementById('startButton');
const letterSection = document.getElementById('letter');
const envelopeButton = document.getElementById('envelopeButton');
const letterContent = document.getElementById('letterContent');
const floatingHearts = document.getElementById('floatingHearts');

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Tombol menuju surat
startButton.addEventListener('click', () => {
  letterSection.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
});

// Buka dan tutup surat
envelopeButton.addEventListener('click', () => {
  const isOpen = letterContent.classList.toggle('open');

  letterContent.setAttribute('aria-hidden', String(!isOpen));

  envelopeButton.querySelector('.envelope-hint').textContent =
    isOpen ? 'Surat terbuka ♡' : 'Tekan untuk membuka';

  envelopeButton.querySelector('.envelope-heart').textContent =
    isOpen ? '♥' : '♡';
});

// Animasi hati
function createHeart() {
  const heart = document.createElement('span');

  heart.className = 'heart-particle';
  heart.textContent = Math.random() > 0.5 ? '♡' : '♥';

  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (13 + Math.random() * 15) + 'px';
  heart.style.animationDuration = (6 + Math.random() * 5) + 's';

  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

if (!prefersReducedMotion) {
  setInterval(createHeart, 850);
}
