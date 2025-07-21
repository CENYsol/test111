document.addEventListener("DOMContentLoaded", () => {
  // Добавляем класс для появления пузырей
  document.getElementById("blobs").classList.add("blobs-loaded");

  animateTitle();
});

function animateTitle() {
  const title = document.getElementById("title");
  const letters = title.querySelectorAll(".letter");
  const description = document.getElementById("description");
  const button = document.getElementById("exploreBtn");

  letters.forEach((letter, i) => {
    letter.style.setProperty("--i", i);
    letter.classList.remove("fade");
    letter.classList.add("letter");
  });

  // Удаляем эффекты перед повторной анимацией
  description.classList.remove("show-description");
  button.classList.remove("show-button");

  // Показываем описание и кнопку после титульника
  setTimeout(() => {
    description.classList.add("show-description");
  }, letters.length * 50 + 300);

  setTimeout(() => {
    button.classList.add("show-button");
  }, letters.length * 50 + 800);
}

// Переключение языка
let currentLang = "en";

const translations = {
  en: {
    title: "Pixels. Design. Crypto.",
    description: [
      "Interface design, NFT-ready visuals, and pixel craftsmanship —",
      "crypto concepts in a dark, minimal layout inspired by digital culture."
    ],
    nav: ["Home", "About", "Work", "Contact", "EN"],
    button: "Explore More"
  },
  ru: {
    title: "Пиксели. Дизайн. Крипта.",
    description: [
      "Интерфейсы, пиксель-арт и NFT-графика —",
      "крипто-идеи в тёмном минималистичном оформлении, вдохновлённом цифровой культурой."
    ],
    nav: ["Главная", "Обо мне", "Работы", "Контакты", "RU"],
    button: "Смотреть больше"
  }
};

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ru" : "en";

  const { title, description, nav, button } = translations[currentLang];

  // Обновляем заголовок
  const titleContainer = document.getElementById("title");
  titleContainer.innerHTML = "";

  [...title].forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.style.setProperty("--i", i);
    span.textContent = char;
    titleContainer.appendChild(span);
  });

  // Обновляем описание
  const descriptionElement = document.getElementById("description");
  descriptionElement.innerHTML = description.join("<br>");

  // Обновляем кнопку
  const exploreBtn = document.getElementById("exploreBtn");
  exploreBtn.textContent = button;

  // Обновляем навигацию
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link, index) => {
    if (index < nav.length) link.textContent = nav[index];
  });

  // Повторяем анимации
  animateTitle();
});
