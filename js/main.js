(() => {
  const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
  const btn=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
  const c=window.SITE_CONFIG||{};
  document.querySelectorAll('[data-contact="email"]').forEach(a=>{if(c.email){a.href='mailto:'+c.email;a.hidden=false}else a.hidden=true});
  document.querySelectorAll('[data-contact="linkedin"]').forEach(a=>{if(c.linkedin){a.href=c.linkedin;a.hidden=false}else a.hidden=true});
  document.querySelectorAll('[data-contact="github"]').forEach(a=>{if(c.github){a.href=c.github;a.hidden=false}else a.hidden=true});
  document.querySelectorAll('[data-cv-pdf]').forEach(a=>{if(c.cvPdf){a.href=c.cvPdf;a.hidden=false}else a.hidden=true});
  const io=('IntersectionObserver'in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08}):null;
  document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
})();