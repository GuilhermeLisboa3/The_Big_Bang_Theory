
var typed = new Typed('#digita', {
    strings: ["Uma das melhores séries de comedia do mundo.","Contendo 279 epsódios.","Um total de 12 Temporadas.",],
    typeSpeed:80,
    backSpeed:40,
    loop:true
  });


const menuMobile = document.querySelector(".menu-mobile")
const menu = document.querySelector(".color-top-menu")

menuMobile.addEventListener("click",()=>{
    menuMobile.classList.contains("bi-list")?menuMobile.classList.replace("bi-list","bi-x"):menuMobile.classList.replace("bi-x","bi-list")
    menu.classList.toggle("menu-nav-active")
})

const navv = document.querySelectorAll(".navv")


navv.forEach(item=>{
  item.addEventListener("click",()=>{
    if(menu.classList.contains("menu-nav-active")){
      menu.classList.remove("menu-nav-active")
      menuMobile.classList.replace("bi-x","bi-list")
    }
  })
})


const item = document.querySelectorAll("[data-anime]");

const animeScroll = ()=>{
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach(element =>{
    if(windowTop > element.offsetTop){
      element.classList.add("animate")
    }else{
      element.classList.remove("animate")
    }
    
  })
}

window.addEventListener("scroll",()=>{
  animeScroll();
})