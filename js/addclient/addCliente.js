
const formlario = document.querySelector('.formulario');
console.log(formlario);
document.addEventListener('DOMContentLoaded',()=>{

    formlario.addEventListener('submit', validarformulario);
});




function validarformulario(e){
    e.preventDefault();
    console.log("equisdet");
    const nombre = document.querySelector("#name").value;
    const telefono = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    
    
    if(nombre === "" || email === "" || telefono === ""){
        console.log("hay un espacio vacio no puede agregar");
        return;
    }
    console.log(nombre + telefono + email);



}