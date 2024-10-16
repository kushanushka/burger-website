/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap");
const foods = document.querySelectorAll(".food");
const snack = document.querySelectorAll(".snack");
const beverage = document.querySelectorAll(".beverage");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab =>{
        tab.classList.remove("active")
    })
    tab.classList.add("active")

        const tabval =tab.getAttribute('data-tabs')
       

        all.forEach(item => {
            item.style.display='none'
        })

        if(tabval ==='food'){
           foods.forEach(item=>{
            item.style.display='block'
           })
        }else if(tabval==='snack'){
            snack.forEach(item=>{
                item.style.display='block'
            })
        }else if(tabval==='beverage'){
            beverage.forEach(item=>{
                item.style.display='block'
            })
        }
        else{
            all.forEach(item=>{
                item.style.display='block'

            })
        }

    
})

})


/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html=document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");
if(localStorage.getItem("mode")=="dark"){
    darkMode();   
}else{
    lightMode();
}
themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem("mode")=="light"){
        darkMode();
        }else{
            lightMode();
        }
})
function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}
function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = ()=>{
    const scrollUpbtn = document.getElementById("scroll-up");
    if(this.scrollY >= 250){
        scrollUpbtn.classList.remove("-bottom-1/2");
        scrollUpbtn.classList.add("bottom-4");

}else{
    scrollUpbtn.classList.add("-bottom-1/2");
    scrollUpbtn.classList.remove("bottom-4");
   
}
}
window.addEventListener('scroll',scrollUp)
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollheader = ()=>{
    const header = document.getElementById("header");
    if(this.scrollY >= 50){
        
        header.classList.add("border-b","border-secondary");

        
}else{
    header.classList.remove("border-b","border-secondary");
   
}
}
window.addEventListener('scroll',scrollheader)

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activelink=()=>{
    const sections = document.querySelectorAll("section");
    const navlinks=document.querySelectorAll(".nav__link");
    let current ="home";
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        if(this.scrollY >=sectionTop - 60) {
            current = section.getAttribute("id");
        }
       
    });
    navlinks.forEach((item) => {
        item.classList.remove("text-secondary");
        if(item.href.includes(current)){
            item.classList.add("text-secondary");
        }
    })
};
window.addEventListener('scroll',activelink)

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr= ScrollReveal({
    origin:"top",
    distance:"60px",
    duration: 2500,
    delay: 400
})
sr.reveal(".home__image");

sr.reveal(".home__content",{origin:"bottom"});

sr.reveal(".category__card",{interval:300});

sr.reveal(".promo__card-1",{origin:"left"});
sr.reveal(".promo__card-2",{origin:"right"});

sr.reveal(".about__img",{origin:"bottom"});
sr.reveal(".about__content",{origin:"top"});

sr.reveal(".menu__items",{origin:"left"});
sr.reveal(".customer__review",{origin:"right"});

sr.reveal(".footer");

