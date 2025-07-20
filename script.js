const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");
const desc = document.getElementById("description");
const btn = document.getElementById("exploreBtn");
const section2 = document.getElementById("section2");
const navbar = document.getElementById("navbar");

const translations = {
  en: {
    title: "Pixels. Design. Crypto.",
    desc: `<span>Interface design, NFT-ready visuals, and pixel craftsmanship —</span><br /><span>all presented in a dark, minimal layout inspired by digital culture.</span>`,
    button: "Explore More",
  },
  ru: {
    title: "Пиксели. Дизайн. Крипта.",
    desc: `<span>Интерфейсный дизайн, визуалы под NFT и пиксельное мастерство —</span><br /><span>в тёмной, минималистичной обёртке, вдохновлённой цифровой культурой.</span>`,
    button: "Подробнее",
  }
};

let currentLang = "en";

langBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentLang = currentLang === "en" ? "ru" : "en";
  langBtn.textContent = currentLang.toUpperCase();

  title.innerHTML = '';
  desc.classList.remove('show-description');
  btn.classList.remove('show-button');

  const letters = currentLang === 'en'
    ? ['P','i','x','e','l','s','.',' ','D','e','s','i','g','n','.',' ','C','r','y','p','t','o','.']
    : ['П','и','к','с','е','л','и','.',' ','Д','и','з','а','й','н','.',' ','К','р','и','п','т','а','.'];

  letters.forEach((char, i) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.style.setProperty('--i', i);
    span.textContent = char === ' ' ? '\u00A0' : char;
    title.appendChild(span);
  });

  desc.innerHTML = translations[currentLang].desc;
  btn.textContent = translations[currentLang].button;

  animateLetters();
});

btn.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  const threshold = window.innerHeight * 0.6;
  if (window.scrollY > threshold) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
});

function animateLetters() {
  const letters = document.querySelectorAll('.hero h1 .letter');
  letters.forEach((el, i) => {
    el.style.setProperty('--i', i);
  });

  const totalDelay = letters.length * 50 + 400;

  setTimeout(() => {
    desc.classList.add('show-description');
  }, totalDelay);

  setTimeout(() => {
    btn.classList.add('show-button');
  }, totalDelay + 600);
}

window.addEventListener('DOMContentLoaded', () => {
  animateLetters();
});
