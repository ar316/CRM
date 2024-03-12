import UI from "./UI.js";
import { formlario } from "./selectores.js";

console.log(formlario);

document.addEventListener('DOMContentLoaded',()=>{

    formlario.addEventListener('submit', validarformulario);
});

const ui = new UI();

function validarformulario(e){
    e.preventDefault();
    console.log("equisdet");
    const nombre = document.querySelector("#name").value;
    const telefono = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    
    
    if(nombre === "" || email === "" || telefono === ""){
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");
        return;
    }
    ui.imprimirAlerta("Cliente agregado correctamente", "bien");
    formlario.reset();
    console.log(nombre + telefono + email);


}