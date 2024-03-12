import {formlario} from './selectores.js';

class UI{
    
    imprimirAlerta(mensaje, tipo){
        const div = document.createElement('div');
        div.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        const p = document.createElement('p');
        p.style.color = "white";
        if(tipo === "error"){
            p.textContent = mensaje;
            div.style.background = "red";
        }else{
            p.textContent = mensaje
            div.style.background = "green"
        }

        
        div.appendChild(p);
        formlario.appendChild(div);
        setTimeout(() =>{
            formlario.removeChild(div);
        }, 3009);
        
    }
}

export default UI;