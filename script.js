// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent-light)' : '';
  });
});

// Form submission feedback
const form = document.querySelector('.orcamento-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'A enviar...';
    btn.disabled = true;
    // Formspree handles the POST; re-enable after 3s as fallback
    setTimeout(() => {
      btn.textContent = 'Enviar pedido de orçamento';
      btn.disabled = false;
    }, 3000);
  });
}
