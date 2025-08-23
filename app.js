// ===== Potiofex Academy app.js =====

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn && menuBtn.addEventListener('click', () => {
  const willHide = !mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(!willHide));
});

// Footer year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Smooth scroll for in-page links (if any)
document.querySelectorAll('a[href^=\"#\"]')?.forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu?.classList.add('hidden');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});

// Quick Enroll modal on Courses page
(function setupQuickEnroll(){
  const dialog = document.getElementById('quickDialog');
  if(!dialog) return;
  const label = document.getElementById('qdCourse');
  document.querySelectorAll('button.btn[data-course]').forEach(btn => {
    btn.addEventListener('click', () => {
      label.textContent = btn.getAttribute('data-course');
      dialog.showModal();
    });
  });
  const cancel = document.getElementById('qdCancel');
  cancel && cancel.addEventListener('click', ()=> dialog.close());
  const form = document.getElementById('quickForm');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    alert(`Thanks, ${fd.get('name')}! We will contact you at ${fd.get('email')} / ${fd.get('phone')}.`);
    dialog.close();
    form.reset();
  });
})();

// Enrollment form handler
(function setupEnrollForm(){
  const form = document.getElementById('enrollForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Enrollment payload', data);
    alert('Application submitted! We will reach out soon.');
    form.reset();
  });
})();

// Contact form handler
(function setupContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.checkValidity()){
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Contact payload', data);
    alert('Message sent! We will reply soon.');
    form.reset();
  });
})();
