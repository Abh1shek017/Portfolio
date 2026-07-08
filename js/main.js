/* ============================================================
   PORTFOLIO — Main Interactions (main.js)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle ---
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleIcon = themeToggle ? themeToggle.querySelector('span') : null;
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleIcon) return;
    if (theme === 'dark') {
      themeToggleIcon.textContent = '☀️'; // Sun icon for switching back to light
      themeToggleIcon.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
      themeToggleIcon.textContent = '🌙'; // Moon icon for switching to dark
      themeToggleIcon.setAttribute('aria-label', 'Switch to Dark Mode');
    }
  }

  // --- Mobile Navigation ---
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const body = document.body;

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      body.classList.toggle('nav-open');
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('.mobile-nav__link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        body.classList.remove('nav-open');
      });
    });
  }

  // --- Typing Animation (Hero Section) ---
  const dynamicText = document.getElementById('dynamic-text');
  if (dynamicText) {
    const words = ['Full Stack Developer', 'Flutter Expert', 'IoT + ML Builder', 'Tech Innovator'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 100;
      } else {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 200;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        delay = 2000; // Pause at full word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500; // Pause before typing next word
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 1000);
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- Back to Top Button ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Screenshot Lightbox / Gallery ---
  const galleryItems = document.querySelectorAll('.gallery__item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox__img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  const lightboxPrev = lightbox ? lightbox.querySelector('.lightbox__nav--prev') : null;
  const lightboxNext = lightbox ? lightbox.querySelector('.lightbox__nav--next') : null;

  let currentImageIndex = -1;
  const imagesList = [];

  if (galleryItems.length > 0 && lightbox && lightboxImg) {
    // Gather all image URLs from gallery
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      if (img) {
        imagesList.push(img.src);
        item.addEventListener('click', () => {
          openLightbox(index);
        });
      }
    });

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close on overlay click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Navigation
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
      });
    }
    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = imagesList[index];
    lightbox.classList.add('open');
    body.style.overflow = 'hidden'; // Lock main scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    body.style.overflow = ''; // Unlock scroll
  }

  function navigateLightbox(direction) {
    if (currentImageIndex === -1) return;
    currentImageIndex = (currentImageIndex + direction + imagesList.length) % imagesList.length;
    lightboxImg.src = imagesList[currentImageIndex];
  }

  // --- Interactive Screen-by-Screen Breakdown ---
  const screenTableRows = document.querySelectorAll('.screen-table tr');
  screenTableRows.forEach(row => {
    // Basic interaction feedback on click, but since we are showing them in a table,
    // we can add expanded descriptions if needed or highlight details
    row.addEventListener('click', () => {
      screenTableRows.forEach(r => r.classList.remove('active-row'));
      row.classList.toggle('active-row');
    });
  });

  // --- Contact Form Submission (Formspree AJAX) ---
  const contactForm = document.getElementById('contact-form');
  const formSuccessMessage = document.getElementById('form-success');

  if (contactForm && formSuccessMessage) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formSuccessMessage.style.display = 'block';
          formSuccessMessage.textContent = 'Thank you! Your message has been sent successfully.';
          contactForm.reset();
        } else {
          const data = await response.json();
          formSuccessMessage.style.display = 'block';
          formSuccessMessage.style.color = '#ef4444';
          formSuccessMessage.style.borderColor = 'rgba(239, 68, 68, 0.3)';
          formSuccessMessage.style.background = 'rgba(239, 68, 68, 0.1)';
          formSuccessMessage.textContent = data.errors ? data.errors.map(err => err.message).join(', ') : 'Oops! There was a problem submitting your form.';
        }
      } catch (error) {
        formSuccessMessage.style.display = 'block';
        formSuccessMessage.style.color = '#ef4444';
        formSuccessMessage.style.borderColor = 'rgba(239, 68, 68, 0.3)';
        formSuccessMessage.style.background = 'rgba(239, 68, 68, 0.1)';
        formSuccessMessage.textContent = 'Oops! There was a network error. Please try again.';
      } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      }
    });
  }
});
