const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click', () => { 
        nav.classList.toggle('nav-active');
    });
    //animate links
    navLinks.forEach((link, index) => { 
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.2}s`
    });
}

navSlide();

const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }
