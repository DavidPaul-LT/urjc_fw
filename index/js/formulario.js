
function newProduct(){
    let contactForm = document.getElementById("contactForm"),
    btnAddProduct = document.getElementById("btnAddProduct");

    if(contactForm.style.display == 'none'){
        contactForm.style.display = 'block';
        btnAddProduct.value = 'Close Form';
    } else {
        contactForm.style.display = 'none';
        btnAddProduct.value = 'Añadir Producto';

    }
}