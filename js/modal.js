const geometria = document.getElementById("geometria");

geometria.addEventListener("click",function()   {
    let div = document.createElement("div")
    div.classList.add("modal")
    div.innerHTML = `
    <p>Geometria</p>
    <span>Description</span>
    <div class="contain-modal">
        <p class="description-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione dolorem animi maxime provident? Harum rem atque natus temporibus, accusamus sunt labore voluptas optio cumque suscipit, quam reprehenderit, aperiam nam.</p>
        
    </div>`
})