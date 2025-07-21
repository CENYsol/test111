const exploreBtn = document.getElementById('exploreBtn');
const section2 = document.getElementById('section2');
const description = document.getElementById('description');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');
const langBtn = document.getElementById('langBtn');

let currentLang = 'en';

window.addEventListener('DOMContentLoaded', () => {
  animateTitle();
  setTimeout(() => {
    description.classList.add('show-description');
  }, 1200);
  setTimeout(() => {
    exploreBtn.classList.add('show-button');
  }, 1800);
});

exploreBtn.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const isOutOfView = hero.getBoundingClientRect().bottom <= 100;

  navbar.classList.toggle('hidden', isOutOfView);
  exploreBtn.classList.toggle('show-button', !isOutOfView);
  description.classList.toggle('show-description', !isOutOfView);
});

langBtn.addEventListener('click', (e) => {
  e.preventDefault();
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  langBtn.textContent = currentLang.toUpperCase();

  const isRu = currentLang === 'ru';

  title.innerHTML = isRu
    ? `
      <span class="letter">П</span><span class="letter">и</span><span class="letter">к</span><span class="letter">с</span><span class="letter">е</span><span class="letter">л</span><span class="letter">и</span>
      <span class="letter">.</span><span class="letter">&nbsp;</span>
      <span class="letter">Д</span><span class="letter">и</span><span class="letter">з</span><span class="letter">а</span><span class="letter">й</span><span class="letter">н</span>
      <span class="letter">.</span><span class="letter">&nbsp;</span>
      <span class="letter">К</span><span class="letter">р</span><span class="letter">и</span><span class="letter">п</span><span class="letter">т</span><span class="letter">а</span>
      <span class="letter">.</span>
    `
    : `
      <span class="letter">P</span><span class="letter">i</span><span class="letter">x</span><span class="letter">e</span><span class="letter">l</span><span class="letter">s</span>
      <span class="letter">.</span><span class="letter">&nbsp;</span>
      <span class="letter">D</span><span class="letter">e</span><span class="letter">s</span><span class="letter">i</span><span class="letter">g</span><span class="letter">n</span>
      <span class="letter">.</span><span class="letter">&nbsp;</span>
      <span class="letter">C</span><span class="letter">r</span><span class="letter">y</span><span class="letter">p</span><span class="letter">t</span><span class="letter">o</span>
      <span class="letter">.</span>
    `;

  animateTitle();

  description.innerHTML = isRu
    ? `
      <span>Интерфейсный дизайн, визуалы для NFT и пиксельная графика —</span><br />
      <span>крипто-концепты в тёмном, минималистичном оформлении.</span>
    `
    : `
      <span>Interface design, NFT-ready visuals, and pixel craftsmanship —</span><br />
      <span>crypto concepts in a dark, minimal layout inspired by digital culture.</span>
    `;

  description.classList.remove('show-description');
  exploreBtn.classList.remove('show-button');
  setTimeout(() => {
    description.classList.add('show-description');
  }, 1200);
  setTimeout(() => {
    exploreBtn.classList.add('show-button');
  }, 1800);

  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks.length >= 5) {
    navLinks[0].textContent = isRu ? 'Главная' : 'Home';
    navLinks[1].textContent = isRu ? 'Обо мне' : 'About';
    navLinks[2].textContent = isRu ? 'Работы' : 'Work';
    navLinks[3].textContent = isRu ? 'Контакты' : 'Contact';
  }
});

function animateTitle() {
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter, index) => {
    letter.style.opacity = 0;
    letter.style.filter = 'blur(6px)';
    letter.style.setProperty('--i', index);
    letter.style.animation = 'fadeInLetter 0.6s forwards';
    letter.style.animationDelay = `${index * 0.05}s`;
  });
}
