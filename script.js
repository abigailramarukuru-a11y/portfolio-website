// Rotating role text in the hero section.
const roles = [
  'Software Developer in Progress',
  'Ethical Hacking Enthusiast',
  'Web Development Learner',
  'Network Analysis Explorer',
  'Digital Forensics Student'
];
const typedRole = document.getElementById('typed-role');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typedRole && !reducedMotion) {
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;
  function animateRole() {
    const role = roles[roleIndex];
    if (deleting) {
      characterIndex--;
      typedRole.textContent = role.slice(0, characterIndex);
      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(animateRole, 350);
        return;
      }
    } else {
      characterIndex++;
      typedRole.textContent = roles[roleIndex].slice(0, characterIndex);
      if (characterIndex === roles[roleIndex].length) {
        deleting = true;
        setTimeout(animateRole, 1900);
        return;
      }
    }
    setTimeout(animateRole, deleting ? 35 : 65);
  }
  setTimeout(animateRole, 1700);
}

// Accessible mobile navigation.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
