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

header.classList.toggle('sticky', window.screenX>100)