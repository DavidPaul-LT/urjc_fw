import {Producto} from "./Producto.js";
import {AlmacenProductos} from "./AlmacenProductos.js";

function btnShowForm(){
    let form = document.getElementById("form"),
    btnShowForm = document.getElementById("btnShowForm"),
    sectionProducts = document.getElementById("sectionProducts"),
    bannerBF = document.getElementById("bannerBF");
    

    if(form.style.display == "none"){
        form.style.display = "block";
        sectionProducts.style.display = "none";
        bannerBF.style.display = "none";
    } else {
        bannerBF.style.display = "block";
        btnShowForm.style.display = 'block';
        form.style.display = "none";
        btnShowForm.textContent = "+";
        sectionProducts.style.display = "block";
    }
}
