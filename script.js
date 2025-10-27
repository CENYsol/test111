/* ===== Stats counter (adds "+") ===== */
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

/* ===== i18n (restored counters labels) ===== */
const dict = {
  en: {
    /* nav */
    "nav.works": "Works",
    "nav.services": "Services",
    "nav.cta": "Order!",
    /* hero */
    "hero.eyebrow": "Pixel Art & Creative Design",
    "hero.h1.top": "Pixels",
    "hero.h1.bottom": "Are Art",
    "hero.subtitle": "Artworks Are Your Visual Story",
    "hero.cta": "Enter The World Of Pixels",
    /* intro */
    "intro.left":
      "Do You Want To Make Your Project Stand Out, Strengthen Its Visual Identity, Or Make The Product Truly Memorable? My Works Create A Unique Pixel Character And A Modern Emotion: They Catch The Eye, Set The Mood, And Leave A Mark In Viewers’ Memory.",
    "intro.right":
      "I Believe Visual Style Is The First Thing That Speaks To The World About You. Every Artwork Is Not Just A Picture — It’s A Carefully Crafted Story In Every Pixel.",
    /* works */
    "works.title": "Works",
    /* stats labels */
    "stats.years": "Years Of Experience",
    "stats.projects": "Original Works",
    "stats.countries": "Successful NFT Projects",
    /* services */
    "services.eyebrow": "Services",
    "services.card1.title": "Visual Branding",
    "services.card1.text": "Pixel Art As A Brand And A Unique Product Image.",
    "services.card2.title": "Product Visuals",
    "services.card2.text": "Product Cards, Banners And Promo In A Distinctive Pixel Style.",
    "services.card3.title": "Startups & Games",
    "services.card3.text": "Avatars, Characters, UI Elements And Landing Visuals — Fast And To Spec.",
    "services.card4.title": "NFT & Communities",
    "services.card4.text": "Collections, Covers And Media Assets Prepared For Release And Promotion.",
    /* cta/footer */
    "cta.title": "I’ll Craft Your Next Big Project",
    "cta.button": "Order",
    "footer.note": "Pixel-Built With Love"
  },
  ru: {
    /* nav */
    "nav.works": "Работы",
    "nav.services": "Услуги",
    "nav.cta": "Заказать!",
    /* hero */
    "hero.eyebrow": "PIXEL ART & Креативный дизайн",
    "hero.h1.top": "Пиксели",
    "hero.h1.bottom": "— это искусство",
    "hero.subtitle": "Работы — ваша визуальная история",
    "hero.cta": "Войти в мир пикселей",
    /* intro */
    "intro.left":
      "Хотите выделить свой проект, усилить визуальную идентичность или сделать продукт запоминающимся? Мои работы создают уникальный пиксельный характер и современную эмоцию: они притягивают взгляд, формируют настроение и оставляют след в памяти зрителя.",
    "intro.right":
      "Я верю, что визуальный стиль — это первое, что говорит миру о вас. Поэтому каждый арт — это не просто картинка, а детально продуманная история в каждом пикселе.",
    /* works */
    "works.title": "Работы",
    /* stats labels */
    "stats.years": "Лет опыта",
    "stats.projects": "Оригинальных работ",
    "stats.countries": "Успешных проектов для NFT",
    /* services */
    "services.eyebrow": "Услуги",
    "services.card1.title": "Визуальный брендинг",
    "services.card1.text": "Пиксель-арт как бренд и уникального образа продукта.",
    "services.card2.title": "Товарные визуалы",
    "services.card2.text": "Карточки, баннеры и промо в узнаваемом пиксель-стиле.",
    "services.card3.title": "Стартапы и игры",
    "services.card3.text": "Аватары, персонажи, UI-элементы и визуалы для лендингов — быстро и по ТЗ.",
    "services.card4.title": "NFT и комьюнити",
    "services.card4.text": "Коллекции, обложки и медиа-ассеты, подготовленные к релизу и продвижению.",
    /* cta/footer */
    "cta.title": "Сделаю ваш следующий большой проект",
    "cta.button": "Заказать",
    "footer.note": "Построено пикселями с любовью"
  }
};

const htmlEl = document.documentElement;

/* ===== i18n apply ===== */
function applyLang(lang) {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(n => {
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

/* init default language: EN unless saved */
applyLang(localStorage.getItem("lang") || "en");

/* switcher click */
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    applyLang(btn.dataset.lang);
  });
});
