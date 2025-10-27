// Simple counter animation for stats
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
      el.textContent = target >= 1000 ? value.toLocaleString() + (target<1000?'+':'') : value + (target>=12 && target<1000 ? '+' : '');
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    io.unobserve(el);
  });
}, { threshold: 0.35 });

counters.forEach(c=> io.observe(c));
