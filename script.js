/* ═══════════════════════════════════════════
   BOSTON BROTHERS — script.js
   ═══════════════════════════════════════════ */

// ── YEAR ─────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── CUSTOM CURSOR ─────────────────────────────
const cursor = document.getElementById('cursor');
if (window.matchMedia('(pointer: fine)').matches && cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
}

// ── NAVBAR SCROLL STATE ───────────────────────
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── MOBILE MENU ───────────────────────────────
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose= document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
};

mobileClose.addEventListener('click', closeMenu);

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ── SMOOTH SCROLL (legacy support) ───────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ── GALLERY LIGHTBOX ──────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');

// Collect real <img> tags in gallery items
let galleryImgs = [];
let lbIndex = 0;

function buildGalleryList() {
  galleryImgs = Array.from(
    document.querySelectorAll('.gallery-item img')
  );
}

function openLightbox(index) {
  if (!galleryImgs.length) return;
  lbIndex = index;
  lbImg.src = galleryImgs[lbIndex].src;
  lbImg.alt = galleryImgs[lbIndex].alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function lbStep(dir) {
  lbIndex = (lbIndex + dir + galleryImgs.length) % galleryImgs.length;
  lbImg.src = galleryImgs[lbIndex].src;
}

// Attach click to each gallery item (works after images are added)
function initGalleryClicks() {
  buildGalleryList();
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => {
      buildGalleryList(); // refresh in case DOM changed
      // find the img index in this item
      const img = item.querySelector('img');
      if (img) {
        const idx = galleryImgs.indexOf(img);
        openLightbox(idx >= 0 ? idx : 0);
      }
    });
  });
}
initGalleryClicks();

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => lbStep(-1));
lbNext.addEventListener('click', () => lbStep(1));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')       closeLightbox();
  if (e.key === 'ArrowLeft')    lbStep(-1);
  if (e.key === 'ArrowRight')   lbStep(1);
});

// ── CONTACT FORM ──────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async send — replace this with your real form handler
  // e.g. Formspree: change <form action="https://formspree.io/f/YOUR_ID" method="POST">
  // and remove this JS handler entirely, or use fetch() for AJAX submission.
  setTimeout(() => {
    success.classList.add('visible');
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
    setTimeout(() => success.classList.remove('visible'), 6000);
  }, 1200);
}

// ── SCROLL-TRIGGERED FADE-UPS ─────────────────
const fadeEls = document.querySelectorAll(
  '.about-inner, .media-card, .show-row, .section-header, ' +
  '.contact-left, .contact-form, .gallery-item'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach(el => io.observe(el));

// ── PARALLAX HERO ─────────────────────────────
const heroMedia = document.querySelector('.hero-media');
if (heroMedia) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroMedia.style.transform = `translateY(${y * 0.35}px)`;
  }, { passive: true });
}
