const langBtn = document.getElementById("langBtn");
const langList = document.getElementById("langList");

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

langBtn.addEventListener("click", () => {
  langList.style.display = langList.style.display === "block" ? "none" : "block";
});

langList.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const lang = li.dataset.lang;
    langBtn.textContent = lang.toUpperCase() + " ▾";
    title.innerHTML = translations[lang].title;
    desc.innerHTML = translations[lang].desc;
    btn.textContent = translations[lang].button;
    langList.style.display = "none";
  });
});
