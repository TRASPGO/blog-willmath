const barra  = document.getElementById("bars");
const nav = document.getElementById("nav-fixed-script")
const cross =document.getElementById("cross")

barra.addEventListener("click",function(){  
    barra.classList.add("barra")
    barra.classList.remove("fa-bars")
    nav.classList.add("nav-script")
    nav.classList.remove("nav")
})

cross.addEventListener("click",function(){
    barra.classList.remove("barra")
    barra.classList.add("fa-bars")
    nav.classList.remove("nav-script")
    nav.classList.add("nav")
})