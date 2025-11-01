
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn && menuBtn.addEventListener('click', ()=> {
  if (nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});
