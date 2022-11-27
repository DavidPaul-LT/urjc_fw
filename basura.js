
function mostrarValoresProducto(){
    let contactForm = document.getElementById("contactForm"),
    btnMod = document.getElementById("btnMod");

    if(contactForm.style.display == 'none'){
        contactForm.style.display = 'block';
        btnMod.textContent = 'Cerrar Formulario';
    }else{
        contactForm.style.display = 'none';
        document.getElementById("form").reset();
    }

    if(contactForm.style.display == 'block'){
        let nombre = storage3.getProducto("1235");
        console.log(nombre);
        document.getElementById('codigo').value = "1235";
        document.getElementById('nombre').value = nombre.getNombre;
        document.getElementById('img').value = nombre.getImagen;
        document.getElementById('precio').value = nombre.getPrecio;
        document.getElementById('descripcion').value = nombre.getDescripcion;
    }
}


function modificarProducto(){
    let nombre = storage3.getProducto("1235");
    
    nombre.setNombre = document.getElementById('nombre').value;
    nombre.setImagen = document.getElementById('img').value;
    nombre.setPrecio = document.getElementById('precio').value;
    nombre.setDescripcion = document.getElementById('descripcion').value;
    console.log(nombre);
}

let storage3 = new AlmacenProductos();