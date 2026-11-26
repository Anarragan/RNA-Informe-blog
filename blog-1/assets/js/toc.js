// Resalta en el índice la sección que se está leyendo.
(function () {
  const sections = Array.from(document.querySelectorAll('.content > .section'));
  const links = Array.from(document.querySelectorAll('.toc a'));
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const currentId = '#' + entry.target.id;
      links.forEach(function (link) {
        if (link.getAttribute('href') === currentId) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
  sections.forEach(function (section) { observer.observe(section); });
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      const mobileMenu = document.querySelector('.mobile-toc');
      if (mobileMenu && window.matchMedia('(max-width: 780px)').matches) mobileMenu.open = false;
    });
  });
})();
