const menuBtn=document.getElementById('menuBtn');
const navMenu=document.getElementById('navMenu');
const topBtn=document.getElementById('topBtn');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();

menuBtn.addEventListener('click',()=>navMenu.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>navMenu.classList.remove('open')));

window.addEventListener('scroll',()=>{
    topBtn.classList.toggle('show',window.scrollY>400);
});
topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

document.getElementById('printResume').addEventListener('click',()=>{
    window.print();
});

const contactForm=document.getElementById('contactForm');
const formMessage=document.getElementById('formMessage');
contactForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value.trim();
    formMessage.textContent=`Thanks, ${name}! This portfolio demo received your message.`;
    contactForm.reset();
});
