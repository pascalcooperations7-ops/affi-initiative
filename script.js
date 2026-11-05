document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-header');

  if (nav) {
    const updateHeaderState = () => {
      if (window.scrollY > 20) {
        nav.style.opacity = '0.96';
      } else {
        nav.style.opacity = '1';
      }
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }
});
