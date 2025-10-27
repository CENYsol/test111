/* ===== Stats counter ===== */
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
      // добавляем "+" к визуальным значениям, как на макете
      el.textContent = value + "+";
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    io.unobserve(el);
  });
}, { threshold: 0.35 });
counters.forEach(c=> io.observe(c));

/* ===== i18n словарь ===== */
const dict = {
  en: {
    /* nav */
    "nav.about": "about me",
    "nav.services": "services",
    "nav.works": "works",
    "nav.cta": "order!",
    /* hero */
    "hero.eyebrow": "PIXEL ART & CREATIVE DESIGN",
    "hero.h1.top": "PIXELS",
    "hero.h1.bottom": "ARE ART",
    "hero.subtitle": "ARTWORKS ARE YOUR VISUAL STORY",
    "hero.cta": "enter the world of pixels",
    /* intro */
    "intro.left":
      "Do you want to make your project stand out, strengthen its visual identity, or make the product truly memorable? My works create a unique pixel character and a modern emotion: they catch the eye, set the mood, and leave a mark in viewers’ memory.",
    "intro.right":
      "I believe visual style is the first thing that speaks to the world about you. Every artwork is not just a picture — it’s a carefully crafted story in every pixel.",
    /* stats */
    "stats.years": "years of experience",
    "stats.projects": "original works",
    "stats.countries": "successful NFT projects",
    /* about/services */
    "about.title": "ABOUT ME",
    "services.eyebrow": "services",
    /* services cards */
    "services.card1.title": "brands & companies",
    "services.card1.text": "Pixel art for campaigns, web visuals and product identity.",
    "services.card2.title": "e-commerce",
    "services.card2.text": "Product cards, banners and promo with a distinctive pixel style.",
    "services.card3.title": "startups & games",
    "services.card3.text": "Key art, avatars, UI elements, fast landing visuals.",
    "services.card4.title": "NFT & communities",
    "services.card4.text": "Collections, covers and social assets ready for launch.",
    /* cta/footer */
    "cta.title": "I’ll craft your next big project",
    "cta.button": "order",
    "footer.note": "pixel-built with love"
  },
  ru: {
    /* nav */
    "nav.about": "обо мне",
    "nav.services": "услуги",
    "nav.works": "работы",
    "nav.cta": "заказать!",
    /* hero */
    "hero.eyebrow": "PIXEL ART & КРЕАТИВНЫЙ ДИЗАЙН",
    "hero.h1.top": "ПИКСЕЛИ",
    "hero.h1.bottom": "— ЭТО ИСКУССТВО",
    "hero.subtitle": "РАБОТЫ — ВАША ВИЗУАЛЬНАЯ ИСТОРИЯ",
    "hero.cta": "войти в мир пикселей",
    /* intro */
    "intro.left":
      "Хотите выделить свой проект, усилить визуальную идентичность или сделать продукт запоминающимся? Мои работы создают уникальный пиксельный характер и современную эмоцию: они притягивают взгляд, формируют настроение и оставляют след в памяти зрителя.",
    "intro.right":
      "Я верю, что визуальный стиль — это первое, что говорит миру о вас. Поэтому каждый арт — это не просто картинка, а детально продуманная история в каждом пикселе.",
    /* stats */
    "stats.years": "лет опыта",
    "stats.projects": "оригинальных работ",
    "stats.countries": "успешных проектов для NFT",
    /* about/services */
    "about.title": "ОБО МНЕ",
    "services.eyebrow": "услуги",
    /* services cards */
    "services.card1.title": "бренды и компании",
    "services.card1.text": "Пиксель-арт для кампаний, веб-визуалов и продуктовой айдентики.",
    "services.card2.title": "e-commerce",
    "services.card2.text": "Карточки, баннеры и промо в узнаваемом пиксель-стиле.",
    "services.card3.title": "стартапы и игры",
    "services.card3.text": "Ключевые арты, аватары, UI-элементы и быстрые лендинговые визулы.",
    "services.card4.title": "NFT и комьюнити",
    "services.card4.text": "Коллекции, обложки и соц-ассеты, готовые к запуску.",
    /* cta/footer */
    "cta.title": "Сделаю ваш следующий большой проект",
    "cta.button": "заказать",
    "footer.note": "построено пикселями с любовью"
  }
};

const htmlEl = document.documentElement;

/* ===== i18n apply ===== */
function applyLang(lang) {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(n => {
    const key = n.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (val) n.innerHTML = val;       // допускаем <br/>
  });
  htmlEl.setAttribute("lang", lang);
  document.body.setAttribute("data-lang", lang);
  document.querySelector(".lang-switch").setAttribute("data-active", lang);
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  localStorage.setItem("lang", lang);
}

/* init default language: EN unless saved */
applyLang(localStorage.getItem("lang") || "en");

/* switcher click with smooth slider (CSS handles animation) */
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    applyLang(btn.dataset.lang);
  });
});
