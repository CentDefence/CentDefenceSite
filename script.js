// Reveal animation: white -> theme
document.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(()=>{
    // hide preload white
    const preload = document.getElementById('preload');
    if(preload) preload.style.display = 'none';
    // reveal page
    const page = document.getElementById('page');
    page.classList.add('revealed');
    document.body.style.background = 'linear-gradient(180deg,#071029 0%, #071b2b 60%)';
  }, 900);

  // small float-in for elements
  const fadeEls = document.querySelectorAll('.lead, .btn, .card, .price-block, .big-btn');
  fadeEls.forEach((el,i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(()=>{
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 300 + i*80);
  });

  // set year
  const yearEl = document.querySelector('.copyright');
  if(yearEl) yearEl.textContent = '© 2025 CentDefence. All rights reserved.';
});

// actions
function openAdapter(){ window.open('https://t.me/CentAdapter','_blank'); }
function copyUsername(){ const text='@httpsCent'; navigator.clipboard.writeText(text).then(()=>toast('Ник скопирован: '+text), ()=>toast('Копировать не удалось')); }
function copyTiktok(){ const text='https://www.tiktok.com/@itznotcent'; navigator.clipboard.writeText(text).then(()=>toast('TikTok ссылка скопирована'), ()=>toast('Копировать не удалось')); }

// toast
function toast(msg){
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style,{position:'fixed',right:'18px',bottom:'18px',padding:'10px 14px',background:'rgba(0,0,0,0.7)',color:'white',borderRadius:'10px',zIndex:9999,fontWeight:700});
  document.body.appendChild(t);
  setTimeout(()=>{ t.style.transition='opacity .4s ease'; t.style.opacity=0; setTimeout(()=>t.remove(),450); },1600);
}
