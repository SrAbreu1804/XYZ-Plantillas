/* ═══════════════════════════════════════════════════
   1. NAVBAR & SCROLL
═══════════════════════════════════════════════════ */
const mainNav = document.getElementById('main-nav');
const toggler = document.getElementById('nav-toggler');
const navLinks = document.getElementById('nav-links');
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  if (mainNav) mainNav.classList.toggle('scrolled', window.scrollY > 40);
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 300);
});

if (toggler) {
  toggler.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggler.classList.toggle('open', open);
    toggler.setAttribute('aria-expanded', open);
  });
}

document.querySelectorAll('.dropdown-trigger').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const li = btn.closest('li');
    li.classList.toggle('drop-open');
  });
});

/* ═══════════════════════════════════════════════════
   2. HERO CAROUSEL (Solo en index.html)
═══════════════════════════════════════════════════ */
const hero = document.getElementById('hero');
if (hero) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#hero-dots button');
  let current = 0;
  let autoTimer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() { autoTimer = setInterval(() => goToSlide(current + 1), 5500); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  document.getElementById('hero-prev').addEventListener('click', () => { goToSlide(current - 1); resetAuto(); });
  document.getElementById('hero-next').addEventListener('click', () => { goToSlide(current + 1); resetAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goToSlide(i); resetAuto(); }));

  let touchStartX = 0;
  hero.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { goToSlide(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  });
  startAuto();
}

/* ═══════════════════════════════════════════════════
   3. MENU TABS (Solo en carta.html)
═══════════════════════════════════════════════════ */
const menuTabs = document.querySelectorAll('.menu-tab');
if (menuTabs.length > 0) {
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════
   4. GALLERY LIGHTBOX
═══════════════════════════════════════════════════ */
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

/* ═══════════════════════════════════════════════════
   5. RESERVATION FORM (En reservas.html)
═══════════════════════════════════════════════════ */
const submitReserva = document.getElementById('submit-reserva');
if (submitReserva) {
  // Set min date for date input
  const dateInput = document.getElementById('r-fecha');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  submitReserva.addEventListener('click', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('r-nombre').value.trim();
    const tel    = document.getElementById('r-tel').value.trim();
    const fecha  = document.getElementById('r-fecha').value;
    const hora   = document.getElementById('r-hora').value;

    if (!nombre || !tel || !fecha || !hora) {
      alert('Por favor, completa los campos obligatorios (*).');
      return;
    }
    document.getElementById('reserva-form').style.display = 'none';
    document.getElementById('reserva-success').style.display = 'block';
    
    // Reset form for next time after a few seconds
    setTimeout(() => {
      document.getElementById('reserva-form').style.display = 'block';
      document.getElementById('reserva-success').style.display = 'none';
      document.getElementById('r-nombre').value = '';
      document.getElementById('r-tel').value = '';
      document.getElementById('r-fecha').value = '';
      document.getElementById('r-hora').value = '';
      document.getElementById('r-notas').value = '';
    }, 5000);
  });
}

/* ═══════════════════════════════════════════════════
   6. SCROLL REVEAL & BACK TO TOP
═══════════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

if (backTop) {
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* Smooth Scroll local links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    if(navLinks) navLinks.classList.remove('open');
    if(toggler) toggler.classList.remove('open');
  });
});