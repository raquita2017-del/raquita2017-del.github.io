// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

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

// Form → mailto
function enviarOrcamento() {
  const nome    = document.getElementById('nome').value.trim();
  const tel     = document.getElementById('tel').value.trim();
  const email   = document.getElementById('email').value.trim();
  const local   = document.getElementById('local').value.trim();
  const tipo    = document.getElementById('tipo').value;
  const prazo   = document.getElementById('prazo').value;
  const desc    = document.getElementById('desc').value.trim();

  if (!nome || !tel) {
    alert('Por favor preencha pelo menos o nome e telefone.');
    return;
  }

  const assunto = encodeURIComponent('Pedido de Orçamento — ' + tipo);
  const corpo   = encodeURIComponent(
    'Nome: ' + nome + '\n' +
    'Telefone: ' + tel + '\n' +
    'Email: ' + (email || '—') + '\n' +
    'Localidade: ' + (local || '—') + '\n' +
    'Tipo de trabalho: ' + tipo + '\n' +
    'Prazo pretendido: ' + prazo + '\n\n' +
    'Descrição:\n' + (desc || '—')
  );

  window.location.href = 'mailto:leoneldaviwoz@gmail.com?subject=' + assunto + '&body=' + corpo;
}
