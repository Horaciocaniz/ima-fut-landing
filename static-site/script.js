/* ===========================
   NAVBAR MENU TOGGLE
   =========================== */
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Toggle menu
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.add('hidden');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    if (!navbar.contains(event.target)) {
      menuToggle.classList.remove('active');
      mobileMenu.classList.add('hidden');
    }
  });

  /* ===========================
     SMOOTH SCROLL BEHAVIOR
     =========================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop;
        
        window.scrollTo({
          top: offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ===========================
     INTERSECTION OBSERVER PARA ANIMACIONES
     =========================== */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos con animaciones
  document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
    observer.observe(el);
  });

  /* ===========================
     NAVBAR STICKY BEHAVIOR
     =========================== */
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    lastScrollTop = window.scrollY;
    
    // Cambiar estilo del navbar basado en scroll
    if (lastScrollTop > 100) {
      navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  /* ===========================
     LAZY LOADING DE IMÁGENES
     =========================== */
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('img').forEach(img => {
      imageObserver.observe(img);
    });
  }

  /* ===========================
     ACTIVE NAVBAR LINK
     =========================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  /* ===========================
     ENVÍO DE FORMULARIOS (si aplica)
     =========================== */
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aquí puedes agregar lógica de envío de formularios
      console.log('Formulario enviado');
    });
  });
});

/* ===========================
   UTILIDADES
   =========================== */

// Función para agregar clase cuando está visible
function addVisibleClass(element) {
  element.classList.add('visible');
}

// Función para remover clase
function removeVisibleClass(element) {
  element.classList.remove('visible');
}

// Scroll al principio
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Detectar si está en mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Event listener para cambios de tamaño
window.addEventListener('resize', function() {
  // Manejar cambios responsivos si es necesario
});
