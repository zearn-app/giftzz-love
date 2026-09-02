// Maha Bridal Boutique 2005 — demo interactions
// Replace this number with the business WhatsApp number before publishing.
const WHATSAPP_NUMBER = "919999999999";

document.querySelectorAll('a[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const service = link.dataset.service;
    const select = document.getElementById('service');
    if (select) select.value = service;
  });
});

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
    chip.classList.add('active');
  });
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.classList.toggle('hidden', filter !== 'all' && !item.classList.contains(filter));
    });
  });
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value || 'Not specified';
  const message =
`Hello Maha Bridal Boutique 2005 ✨

I would like to enquire about:
Service: ${service}
Name: ${name}
Phone: ${phone}
Event Date: ${date}

I found your website and would like to know the details.`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.menu').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '82px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 7%';
  nav.style.background = '#fffdfb';
  nav.style.flexDirection = 'column';
  nav.style.borderBottom = '1px solid #eadfdc';
});
