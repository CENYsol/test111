const panels = document.querySelectorAll('.panel');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  panels.forEach((panel, i) => {
    const start = i * vh;
    const end = (i + 1) * vh;

    if (scrollY >= start && scrollY < end) {
      panel.style.transform = 'scale(1)';
      panel.style.opacity = '1';
    } else {
      panel.style.transform = 'scale(0.95)';
      panel.style.opacity = '0.6';
    }
  });
});
