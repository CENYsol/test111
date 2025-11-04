/* ===== Stats counter (+) ===== */
const counters = document.querySelectorAll(".stat__value");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const startTime = performance.now();
    const step = (now)=>{
      const p = Math.min(1, (now - startTime)/duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.floor(eased * target);
      el.textContent = value + "+";
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    io.unobserve(el);
  });
}, { threshold: 0.35 });
counters.forEach(c=> io.observe(c));

/* ===== i18n ===== */
const dict = {
  en: {
    "nav.works": "Works",
    "nav.services": "Services",
    "nav.cta": "Order!",
    "hero.eyebrow": "Pixel art & creative design",
    "hero.h1.top": "Pixels",
    "hero.h1.bottom": "are art",
    "hero.subtitle": "Artworks are your visual story",
    "hero.cta": "Enter the world of pixels",
    "intro.left":
      "Do you want to make your project stand out, strengthen its visual identity, or make the product truly memorable? My works create a unique pixel character and a modern emotion: they catch the eye, set the mood, and leave a mark in viewers’ memory.",
    "intro.right":
      "I believe visual style is the first thing that speaks to the world about you. Every artwork is not just a picture — it’s a carefully crafted story in every pixel.",
    "works.title": "Works",
    "stats.years": "Years of experience",
    "stats.projects": "Original works",
    "stats.countries": "Successful NFT projects",
    "services.eyebrow": "Services",
    "services.card1.title": "Visual branding",
    "services.card1.text": "Pixel art as a brand and a unique product image.",
    "services.card2.title": "Product visuals",
    "services.card2.text": "Product cards, banners and promo in a distinctive pixel style.",
    "services.card3.title": "Startups & games",
    "services.card3.text": "Avatars, characters, UI elements and landing visuals — fast and to spec.",
    "services.card4.title": "NFT & communities",
    "services.card4.text": "Collections, covers and media assets prepared for release and promotion.",
    "cta.title": "I’ll craft your next big project",
    "cta.button": "Order",
    "footer.note": "Pixel-built with love"
  },
  ru: {
    "nav.works": "Работы",
    "nav.services": "Услуги",
    "nav.cta": "Заказать!",
    "hero.eyebrow": "PIXEL ART & креативный дизайн",
    "hero.h1.top": "Пиксели",
    "hero.h1.bottom": "— это искусство",
    "hero.subtitle": "Работы — ваша визуальная история",
    "hero.cta": "Войти в мир пикселей",
    "intro.left":
      "Хотите выделить свой проект, усилить визуальную идентичность или сделать продукт запоминающимся? Мои работы создают уникальный пиксельный характер и современную эмоцию: они притягивают взгляд, формируют настроение и оставляют след в памяти зрителя.",
    "intro.right":
      "Я верю, что визуальный стиль — это первое, что говорит миру о вас. Поэтому каждый арт — это не просто картинка, а детально продуманная история в каждом пикселе.",
    "works.title": "Работы",
    "stats.years": "Года опыта",
    "stats.projects": "Оригинальных работ",
    "stats.countries": "Успешных проектов для NFT",
    "services.eyebrow": "Услуги",
    "services.card1.title": "Визуальный брендинг",
    "services.card1.text": "Пиксель-арт как бренд и уникального образа продукта.",
    "services.card2.title": "Товарные визуалы",
    "services.card2.text": "Карточки, баннеры и промо в узнаваемом пиксель-стиле.",
    "services.card3.title": "Стартапы и игры",
    "services.card3.text": "Аватары, персонажи, UI-элементы и визуалы для лендингов — быстро и по ТЗ.",
    "services.card4.title": "NFT и комьюнити",
    "services.card4.text": "Коллекции, обложки и медиа-ассеты, подготовленные к релизу и продвижению.",
    "cta.title": "Сделаю ваш следующий большой проект",
    "cta.button": "Заказать",
    "footer.note": "Построено пикселями с любовью"
  }
};

const htmlEl = document.documentElement;
function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(n=>{
    const key = n.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (val) n.innerHTML = val;
  });
  htmlEl.setAttribute("lang", lang);
  document.body.setAttribute("data-lang", lang);
  document.querySelector(".lang-switch").setAttribute("data-active", lang);
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  localStorage.setItem("lang", lang);
}
applyLang(localStorage.getItem("lang") || "en");
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
});

/* ===== Works carousel: fill and repeat to cover full width ===== */
const images = [
  "https://i.postimg.cc/RCc04n0L/RIK.gif",
  "https://i.postimg.cc/prVp52Gb/bored-szato.gif",
  "https://i.postimg.cc/8zbW50PL/bitboy.gif",
  "https://i.postimg.cc/Z5SX8CPc/Oligarch-banner.png",
  "https://i.postimg.cc/HscTZc75/art4.gif",
  "https://i.postimg.cc/qvFyfCmR/cen111y.png",
  "https://i.postimg.cc/mZ6H19sn/dofamin.gif",
  "https://i.postimg.cc/0NHtBQSC/Daniel.png",
  "https://i.postimg.cc/BQDdPxK7/mr-moon.png",
  "https://i.postimg.cc/x1nFkBYk/ceny-stat.png",
  "https://i.postimg.cc/4nCQTH4W/PPrimates.png",
  "https://i.postimg.cc/wBWPY2Cc/Mario-Nomads2.gif"
];

const row1Imgs = images.filter((_,i)=> i%2===0);
const row2Imgs = images.filter((_,i)=> i%2===1);

function repeatArray(arr, times){
  const out = [];
  for(let t=0;t<times;t++) out.push(...arr);
  return out;
}

function fillRow(containerId, arr){
  const el = document.getElementById(containerId);
  const list = repeatArray(arr, 4); // ×4 хватит даже для широких экранов
  const frag = document.createDocumentFragment();
  list.forEach(src=>{
    const img = document.createElement("img");
    img.src = src;
    img.alt = "work";
    img.className = "tile";
    img.loading = "lazy";
    frag.appendChild(img);
  });
  el.replaceChildren(frag);
}
fillRow("row1", row1Imgs);
fillRow("row2", row2Imgs);
