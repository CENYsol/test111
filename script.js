const langToggle = document.getElementById('lang-toggle');
const title = document.getElementById('title');
const description = document.getElementById('description');
const button = document.getElementById('explore-button');
const navLinks = document.querySelectorAll('.nav li');
const header = document.querySelector('header');
const secondSection = document.getElementById('about');

let currentLang = 'en';

const texts = {
  en: {
    title: 'Pixels. Design. Crypto.',
    description: 'Interface design, NFT-ready visuals, and pixel craftsmanship — \ncrypto concepts in a dark, minimal layout inspired by digital culture.',
    button: 'Explore More',
    nav: ['Home', 'About', 'Work', 'Contact', 'EN']
  },
  ru: {
    title: 'Пиксели. Дизайн. Крипта.',
    description: 'Интерфейсы, NFT-образы и пиксельная графика —\nкриптоконцепции в минималистичном тёмном стиле, вдохновлённом цифровой эстетикой.',
    button: 'Подробнее',
    nav: ['Главная', 'Обо мне', 'Работы', 'Контакты', 'RU']
  }
};

function setLanguage(lang) {
  currentLang = lang;
  title.innerHTML = '';
  description.style.opacity = 0;
  description.style.filter = 'blur(10px)';
  button.style.opacity = 0;
  button.style.filter = 'blur(10px)';

  // Анимация заголовка по буквам
  const chars = texts[lang].title.split('');
  chars.forEach((char, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char;
    span.style.animationDelay = `${i * 0.05}s`;
    title.appendChild(span);
  });

  // Анимация описания и кнопки
  setTimeout(() => {
    description.innerText = texts[lang].description;
    description.style.opacity = 1;
    description.style.filter = 'blur(0)';
  }, chars.length * 50 + 500);

  setTimeout(() => {
    button.innerText = texts[lang].button;
    button.style.opacity = 1;
    button.style.filter = 'blur(0)';
  }, chars.length * 50 + 1000);

  // Обновление навигации
  navLinks.forEach((li, i) => {
    if (texts[lang].nav[i]) li.textContent = texts[lang].nav[i];
  });
}

// Переключение языка
langToggle.addEventListener('click', () => {
  const nextLang = currentLang === 'en' ? 'ru' : 'en';
  setLanguage(nextLang);
});

// Скролл при нажатии на Explore More
document.getElementById('explore-button').addEventListener('click', () => {
  secondSection.scrollIntoView({ behavior: 'smooth' });
});

// Скролл при нажатии на About
navLinks.forEach((link) => {
  if (link.textContent === 'About' || link.textContent === 'Обо мне') {
    link.addEventListener('click', () => {
      secondSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Появление и скрытие header при прокрутке
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > window.innerHeight * 0.6) {
    header.classList.add('hide-header');
  } else {
    header.classList.remove('hide-header');
  }
});

// При загрузке
window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
