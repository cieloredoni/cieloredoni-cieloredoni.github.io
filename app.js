const contacto =document.getElementById("contacto");
const pagina2 = document.getElementById("pagina2");
const volver = document.getElementById("volver");

contacto.addEventListener("click",()=>{
    pagina2.classList.add("entrar");
});

volver.addEventListener("click",()=>{
    pagina2.classList.remove("entrar");
});