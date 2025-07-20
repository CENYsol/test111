// Постепенное появление текста на главной
document.addEventListener("DOMContentLoaded", () => {
  const title = "Captivating Portfolio";
  const titleElement = document.getElementById("title");

  title.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.style.setProperty("--i", index);
    span.textContent = letter;
    titleElement.appendChild(span);
  });

  setTimeout(() => {
    document.getElementById("description").classList.add("show-description");
  }, title.length * 50 + 300);

  setTimeout(() => {
    document.getElementById("exploreBtn").classList.add("show-button");
  }, title.length * 50 + 1000);
});

// Прокрутка к секции при нажатии на Explore More
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });

  // Показать подложку
  const section2 = document.querySelector(".section-2-content");
  section2.classList.add("visible");
});

// Плавное появление подложки при скролле
window.addEventListener("scroll", () => {
  const section2 = document.querySelector(".section-2-content");
  const section2Top = section2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (section2Top < windowHeight - 100) {
    section2.classList.add("visible");
  }
});

// Переключение языка
const langBtn = document.getElementById("langBtn");
let currentLang = "en";

langBtn.addEventListener("click", () => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const exploreBtn = document.getElementById("exploreBtn");
  const sectionTitle = document.querySelector(".section-2 h2");
  const sectionText = document.querySelector(".section-2 p");

  if (currentLang === "en") {
    // Перевод на русский
    title.innerHTML = "";
    "Впечатляющее портфолио".split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.style.setProperty("--i", index);
      span.textContent = letter;
      title.appendChild(span);
    });

    description.textContent = "Исследуйте искусство: погрузитесь в минималистичное тёмное портфолио с яркими зелёными акцентами.";
    exploreBtn.textContent = "Подробнее";
    langBtn.textContent = "RU";
    sectionTitle.textContent = "Обо мне";
    sectionText.textContent = "Здесь будет описание второй секции. Например: краткая биография, навыки, опыт, ссылки и т.д.";

    currentLang = "ru";
  } else {
    // Перевод на английский
    title.innerHTML = "";
    "Captivating Portfolio".split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.style.setProperty("--i", index);
      span.textContent = letter;
      title.appendChild(span);
    });

    description.textContent = "Discover the Artistry: Immerse Yourself in a Minimalist Dark-Themed Portfolio Site with Vibrant Green Accents";
    exploreBtn.textContent = "Explore More";
    langBtn.textContent = "EN";
    sectionTitle.textContent = "About Me";
    sectionText.textContent = "This will be the description of the second section. For example: short bio, skills, experience, links, etc.";

    currentLang = "en";
  }

  // Переанимация текста после смены языка
  setTimeout(() => {
    document.getElementById("description").classList.add("show-description");
    document.getElementById("exploreBtn").classList.add("show-button");
  }, 500);
});
