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
      el.textContent = target >= 1000 ? value.toLocaleString() : value + (target>=12 && target<1000 ? '+' : '');
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
    "nav.about": "who we are",
    "nav.services": "services",
    "nav.work": "work",
    "nav.cta": "let’s start!",
    "hero.eyebrow": "DIGITAL MARKETING & CREATIVE SOLUTIONS",
    "hero.h1.top": "MARKETING",
    "hero.h1.bottom": "IS OUR ART",
    "hero.subtitle": "SUCCESS IS YOUR REALITY",
    "hero.cta": "let’s start!",
    "intro.left":
      "Would you like to increase your brand awareness, attract new customers or improve conversions? Thanks to our creative approach, your website will turn into a real dinosaur in the online space: it will attract eyes, capture hearts and be remembered by every visitor.",
    "intro.right":
      "We understand that first impressions are everything, and we ensure that your website not only meets your needs, but also makes a lasting impression on your target audience.",
    "stats.years": "years of experience",
    "stats.projects": "completed projects",
    "stats.countries": "countries for cooperation",
    "about.title": "WHO WE ARE?",
    "services.eyebrow": "services<br/>for",
    "services.card1.title": "small, medium and large corporations",
    "services.card1.text": "We develop understandable, market-ready brand systems & promo websites.",
    "services.card2.title": "e-commerce platforms",
    "services.card2.text": "UX/UI optimized for conversion, catalogs, PDPs and promo campaigns.",
    "services.card3.title": "startups",
    "services.card3.text": "Fast MVP sites, pitch decks visuals, landing pages that ship this week.",
    "services.card4.title": "charitable organisations",
    "services.card4.text": "Clear storytelling + accessible UI with strong donation flows.",
    "cta.title": "Let’s craft your next big thing",
    "cta.button": "contact us",
    "footer.note": "pixel-built with love"
  },
  ru: {
    "nav.about": "кто мы",
    "nav.services": "услуги",
    "nav.work": "проекты",
    "nav.cta": "начать!",
    "hero.eyebrow": "ЦИФРОВОЙ МАРКЕТИНГ И КРЕАТИВНЫЕ РЕШЕНИЯ",
    "hero.h1.top": "МАРКЕТИНГ",
    "hero.h1.bottom": "— ЭТО ИСКУССТВО",
    "hero.subtitle": "УСПЕХ — ЭТО ВАША РЕАЛЬНОСТЬ",
    "hero.cta": "начать!",
    "intro.left":
      "Хотите повысить узнаваемость бренда, привлечь новых клиентов или улучшить конверсию? Благодаря нашему креативному подходу ваш сайт станет настоящим динозавром в онлайне: будет притягивать взгляд, запоминаться и вызывать эмоции у каждого посетителя.",
    "intro.right":
      "Мы понимаем, что первое впечатление решает всё. Мы гарантируем, что сайт не только решит задачи, но и произведёт сильное впечатление на целевую аудиторию.",
    "stats.years": "лет опыта",
    "stats.projects": "реализованных проектов",
    "stats.countries": "стран для сотрудничества",
    "about.title": "КТО МЫ?",
    "services.eyebrow": "услуги<br/>для",
    "services.card1.title": "малый, средний и крупный бизнес",
    "services.card1.text": "Создаём понятные бренд-системы и промо-сайты, готовые к рынку.",
    "services.card2.title": "e-commerce платформы",
    "services.card2.text": "UX/UI под конверсию: каталоги, карточки товара и промо-кампании.",
    "services.card3.title": "стартапы",
    "services.card3.text": "Быстрые лендинги и визуалы для питча. MVP-сайты за считанные дни.",
    "services.card4.title": "благотворительные организации",
    "services.card4.text": "Понятный сторителлинг и доступный UI с сильными донат-флоу.",
    "cta.title": "Сделаем ваш следующий большой проект",
    "cta.button": "связаться",
    "footer.note": "построено пикселями с любовью"
  }
};

const htmlEl = document.documentElement;

/** Apply language to all [data-i18n] nodes */
function applyLang(lang) {
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(n => {
    const key = n.getAttribute("data-i18n");
    const val = dict[lang]?.[key];
    if (!val) return;
    // допускаем HTML (например, брейки)
    n.innerHTML = val;
  });
  htmlEl.setAttribute("lang", lang);
  document.body.setAttribute("data-lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  localStorage.setItem("lang", lang);
}

/* init default language: EN unless saved RU */
const saved = localStorage.getItem("lang");
applyLang(saved || "en");

/* switcher click */
document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const lang = btn.dataset.lang;
    applyLang(lang);
  });
});
