let barras = document.getElementById("barras");
let cross = document.getElementById("cruz");
let nav = document.getElementById("nav");


barras.addEventListener("click",function()  {
    nav.classList.toggle("navigation-responsive")
    nav.classList.add("navigation-script")
})