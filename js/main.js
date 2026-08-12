
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

const hero=document.querySelector('.hero'), avatar=document.querySelector('.avatar');
if(hero&&avatar&&matchMedia('(pointer:fine)').matches){
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;avatar.style.transform=`translate(${x*9}px,${y*7}px)`});
  hero.addEventListener('pointerleave',()=>avatar.style.transform='');
}
