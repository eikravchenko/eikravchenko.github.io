
const nav=document.querySelector('.site-nav');
window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>30),{passive:true});
const toggle=document.querySelector('[data-theme-toggle]');
const saved=localStorage.getItem('theme');
if(saved)document.documentElement.dataset.theme=saved;
if(toggle)toggle.onclick=()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('theme',next);toggle.textContent=next==='light'?'☾':'☀'};
const menu=document.querySelector('[data-mobile-menu]');
document.querySelector('[data-menu-toggle]')?.addEventListener('click',()=>menu?.classList.toggle('open'));
document.querySelectorAll('[data-close-menu]').forEach(a=>a.addEventListener('click',()=>menu?.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

// V4 — restrained premium micro-interactions.
const cursorLight=document.createElement('div');
cursorLight.className='cursor-light';
if(matchMedia('(pointer:fine)').matches) document.body.appendChild(cursorLight);
window.addEventListener('pointermove',e=>{if(cursorLight){cursorLight.style.left=e.clientX+'px';cursorLight.style.top=e.clientY+'px'}});

document.querySelectorAll('a[href]').forEach(a=>{
  const href=a.getAttribute('href');
  if(!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('https://t.me') || a.target==='_blank') return;
  a.addEventListener('click',e=>{
    const url=new URL(href,location.href);
    if(url.origin!==location.origin) return;
    e.preventDefault();
    const veil=document.createElement('div'); veil.className='page-transition'; document.body.appendChild(veil);
    setTimeout(()=>location.href=url.href,520);
  });
});
document.querySelectorAll('.contact,.arrow-link').forEach(el=>el.classList.add('magnetic'));
document.querySelectorAll('.magnetic').forEach(el=>{
  if(!matchMedia('(pointer:fine)').matches)return;
  el.addEventListener('pointermove',e=>{
    const r=el.getBoundingClientRect();
    el.style.transform=`translate(${(e.clientX-(r.left+r.width/2))*.08}px,${(e.clientY-(r.top+r.height/2))*.08}px)`;
  });
  el.addEventListener('pointerleave',()=>el.style.transform='');
});

