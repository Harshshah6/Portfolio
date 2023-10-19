let navlinks = document.querySelectorAll('.navlinks a')
let sections = document.querySelectorAll('section')

document.getElementById('uparrow').style.display = 'none';
if(window.scrollY > document.getElementById('home').clientHeight){
    document.getElementById('uparrow').style.display = 'flex'
}else{
    document.getElementById('uparrow').style.display = 'none';
}

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

    if(window.scrollY > document.getElementById('home').clientHeight){
        document.getElementById('uparrow').style.display = 'flex'
    }else{
        document.getElementById('uparrow').style.display = 'none';
    }

    

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


document.getElementById("contactmebtn").addEventListener('click',()=>{
    scrolltoId('contact');
});

document.getElementById("uparrow").addEventListener('click',()=>{
    scrolltoId('home');
});

function scrolltoId(id){
    var access = document.getElementById(id);
    access.scrollIntoView({behavior: 'smooth'}, true);
}

let smc_yt = document.getElementById('smcyt');
let smc_tg = document.getElementById('smctg');
let smc_ig = document.getElementById('smcig');
let smc_gh = document.getElementById('smcgh');
let smc_dc = document.getElementById('smcdc');

smc_yt.addEventListener('click', ()=>{ window.open("https://www.youtube.com/legendarystreamer","_blank") });
smc_tg.addEventListener('click', ()=>{ window.open("https://t.me/legendary_streamer_official","_blank") });
smc_ig.addEventListener('click', ()=>{ window.open("https://www.instagram.com/legendary_streamer_official","_blank") });
smc_gh.addEventListener('click', ()=>{ window.open("https://www.github.com/harshshah6","_blank") });
smc_dc.addEventListener('click', ()=>{ window.open("#","_blank") });