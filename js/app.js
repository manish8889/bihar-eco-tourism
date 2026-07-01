/* Main Orchestrator & UI Interactions */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLenisAndGSAP();
  initCustomCursor();
  initMobileNav();
  initGalleryLightbox();
  initVirtualTour();
  initFallingLeaves();
});

/* --- THEME TOGGLE ENGINE --- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Retrieve saved theme preference, defaulting to dark mode for cinematic feel
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);

    // Play smooth transition wave
    if (window.gsap) {
      window.gsap.fromTo("body", 
        { opacity: 0.95 },
        { opacity: 1, duration: 0.4 }
      );
    }
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  if (theme === 'dark') {
    // Show Sun icon for toggling to light mode
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    // Show Moon icon for toggling to dark mode
    themeToggle.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

/* --- LENIS SMOOTH SCROLL & GSAP TRIGGER --- */
function initLenisAndGSAP() {
  // Check if Lenis is loaded via CDN
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Keep ScrollTrigger synchronized with Lenis scroll updates
    if (window.ScrollTrigger) {
      lenisInstance.on('scroll', ScrollTrigger.update);
    }
  }

  // Navbar background frosted glass toggle on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // GSAP ScrollTrigger Animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Mountain & Clouds inside Hero
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 150,
      opacity: 0.1
    });

    gsap.to('.hero-clouds', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 80
    });

    // Animate stats counter numbers when scrolling into view
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      gsap.fromTo(counter, 
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          snap: { textContent: 1 },
          onUpdate: function() {
            // Append dynamic suffixes (e.g. + or Days)
            const suf = counter.dataset.suffix || "";
            counter.innerHTML = Math.ceil(this.targets()[0].textContent) + suf;
          }
        }
      );
    });

    // Fade-in reveal animations on grid elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }
}

/* --- PREMIUM CURSOR FOLLOWER --- */
function initCustomCursor() {
  const follower = document.querySelector('.custom-cursor-follower');
  if (!follower) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth lerp interpolation for the custom cursor path
  function tick() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    follower.style.left = `${currentX}px`;
    follower.style.top = `${currentY}px`;

    requestAnimationFrame(tick);
  }
  tick();

  // Bloom sizes on hover of links, buttons, and clickable maps
  const interactiveSelector = 'a, button, .btn, .map-path, .map-spot, .wildlife-card, .dest-card, .gallery-item';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      follower.classList.remove('hovering');
    }
  });
}

/* --- MOBILE NAVIGATION DRAWER --- */
function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Animate lines if toggle has span elements
    const spans = toggle.querySelectorAll('span');
    if (spans.length === 3) {
      if (toggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  });

  // Close when clicking nav-links
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      const spans = toggle.querySelectorAll('span');
      if (spans.length === 3) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
}

/* --- LIGHTBOX GALLERY SYSTEM --- */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!items.length) return;

  // 1. Pinterest Style Filter Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        const categories = item.dataset.category.split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'block';
          if (window.gsap) {
            window.gsap.fromTo(item, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 });
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 2. Lightbox Open/Close
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }
}

/* --- VIRTUAL TOUR 360 --- */
function initVirtualTour() {
  const overlay = document.querySelector('.virtual-tour-overlay');
  const playBtn = document.getElementById('virtual-play-btn');
  const iframe = document.getElementById('virtual-tour-iframe');

  if (!playBtn || !overlay || !iframe) return;

  playBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    // Set mock premium panoramic view or high-quality landscape drone tour URL
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.43851509378!2d85.41019685000002!3d25.064390099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f84090b82f9d%3A0xe54fb72d4c062c3f!2sRajgir%20Nature%20Safari!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  });
}

/* --- FLOATING LEAVES BACKGROUND ANIMATIONS --- */
function initFallingLeaves() {
  const container = document.getElementById('leaves-container');
  if (!container) return;

  // We spawn 12 persistent falling leaves flowing across the screen layout
  const maxLeaves = 12;
  const leafTypes = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231B5E20' fill-opacity='0.15'%3E%3Cpath d='M2 22s12-1 16-8c4-7-1-12-1-12S12 1 7 5C1 9 2 22 2 22z'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234CAF50' fill-opacity='0.15'%3E%3Cpath d='M22 2S10 3 6 10C2 17 7 22 7 22s5 1 10-3c6-4 5-17 5-17z'/%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFC107' fill-opacity='0.12'%3E%3Cpath d='M12 2s4.5 4 4.5 10S12 22 12 22s-4.5-4-4.5-10S12 2 12 2z'/%3E%3C/svg%3E"
  ];

  for (let i = 0; i < maxLeaves; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    
    // Choose random layout parameters
    const size = Math.random() * 25 + 15;
    const type = leafTypes[Math.floor(Math.random() * leafTypes.length)];
    const startX = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * -20; // Start midway to avoid clustering at top initially

    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.backgroundImage = `url("${type}")`;
    leaf.style.left = `${startX}vw`;
    leaf.style.animation = `fallAndSway ${duration}s linear infinite`;
    leaf.style.animationDelay = `${delay}s`;

    container.appendChild(leaf);
  }

  // Inject sway keyframes dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fallAndSway {
      0% {
        transform: translateY(-50px) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.7;
      }
      90% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(105vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
