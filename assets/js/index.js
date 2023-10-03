let navlinks = document.querySelectorAll('.navlinks a')
let sections = document.querySelectorAll('section')

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top<offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header .navlinks a[href=' + id + ']').classList.add('active');
            });
        }

    });
}

let header = document.querySelector('header');

header.classList.toggle('sticky', window.screenX>100);

let toggler = document.getElementById('menuico1');
let toggler1 = document.getElementById('menuico');
let navdrawer = document.getElementById('navigation-drawer');
let menuitems = document.getElementsByClassName('menuitem');


toggler.addEventListener('click', ()=>{
    if(navdrawer.classList.contains('inactive')){
        navdrawer.classList.remove('inactive')
        navdrawer.classList.add('active')
    }else{
        navdrawer.classList.add('inactive');
        navdrawer.classList.remove('active');
    }
});
toggler1.addEventListener('click', ()=>{
    if(navdrawer.classList.contains('inactive')){
        navdrawer.classList.remove('inactive')
        navdrawer.classList.add('active')
    }else{
        navdrawer.classList.add('inactive');
        navdrawer.classList.remove('active');
    }
});

for (let index = 0; index < menuitems.length; index++) {
    const item = menuitems[index];
    item.addEventListener('click', ()=>{
        if(navdrawer.classList.contains('inactive')){
            navdrawer.classList.remove('inactive')
            navdrawer.classList.add('active')
        }else{
            navdrawer.classList.add('inactive');
            navdrawer.classList.remove('active');
        }
    });
}
