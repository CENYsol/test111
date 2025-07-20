const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");
const desc = document.getElementById("description");
const btn = document.getElementById("exploreBtn");

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

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ru" : "en";
  langBtn.textContent = currentLang.toUpperCase();
  title.innerHTML = translations[currentLang].title;
  desc.innerHTML = translations[currentLang].desc;
  btn.textContent = translations[currentLang].button;
});
