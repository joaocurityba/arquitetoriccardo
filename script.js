let slideIndex = 1;

function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    showSlide(slideIndex);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Menu Mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajuste para o header fixo
                behavior: 'smooth'
            });
        }
    });
});

// script.js
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > lastScrollY) {
    // Rolando para baixo
    navbar.classList.add('hidden');
  } else {
    // Rolando para cima
    navbar.classList.remove('hidden');
  }
  
  lastScrollY = window.scrollY;
});
