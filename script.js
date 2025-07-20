const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");
const desc = document.getElementById("description");
const btn = document.getElementById("exploreBtn");
const section2 = document.getElementById("section2");
const navbar = document.getElementById("navbar");

// Переводы
const translations = {
  en: {
    title: "Captivating Portfolio",
    desc: "Discover the Artistry: Immerse Yourself in a Minimalist Dark-Themed Portfolio<br />Site with Vibrant Green Accents",
    button: "Explore More",
  },
  ru: {
    title: "Захватывающее Портфолио",
    desc: "Откройте искусство: погрузитесь в минималистичное портфолио в тёмной теме<br />с яркими зелёными акцентами",
    button: "Подробнее",
  }
};

let currentLang = "en";

// Переключение языка
langBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentLang = currentLang === "en" ? "ru" : "en";
  langBtn.textContent = currentLang.toUpperCase();
  title.innerHTML = translations[currentLang].title;
  desc.innerHTML = translations[currentLang].desc;
  btn.textContent = translations[currentLang].button;
});

// Кнопка "Explore More"
btn.addEventListener("click", () => {
  section2.scrollIntoView({ behavior: 'smooth' });
});

// Скрытие навигации при скролле
window.addEventListener('scroll', () => {
  const threshold = window.innerHeight * 0.6;
  if (window.scrollY > threshold) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
});

// АНИМАЦИЯ ТИТУЛЬНИКА — по буквам
window.addEventListener('DOMContentLoaded', () => {
  const letters = document.querySelectorAll('.hero h1 .letter');
  letters.forEach((el, i) => {
    el.style.setProperty('--i', i);
  });

  const totalDelay = letters.length * 50 + 400; // миллисекунды

  // Подзаголовок через задержку
  setTimeout(() => {
    desc.classList.add('show-description');
  }, totalDelay);

  // Кнопка ещё позже
  setTimeout(() => {
    btn.classList.add('show-button');
  }, totalDelay + 600);
});
