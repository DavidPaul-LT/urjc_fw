let productList = [];

function saveProduct(){
    let oname = document.querySelector("#nombreForm").value,
        oimg = document.querySelector("#imgForm").value,
        oprice = document.querySelector("#priceForm").value;

    addNewProduct(oname, oimg, oprice);
}

//Crear elemento
function addNewProduct(oname, oimg, oprice){
    let newProduct = {
        name: oname,
        img: oimg,
        price: '$' + oprice
    }
    productList.push(newProduct);
    showNewProduct(oname, oimg, oprice);
}

function showNewProduct(oname, oimg, oprice){
    let product = document.createElement("product"),
        card = document.createElement("card"),
        img = document.createElement("img"),
        card2 = document.createElement("card2"),
        attributes = document.createElement("atributes"),
        h5 = document.createElement("h5"),
        p = document.createElement("p"),
        footerCard = document.createElement("footerCard"),
        buttonDelete = document.createElement("buttonDelete");

    product.className = "col mb-5";
    product.style = "border: none; ; background-color: transparent;";
    card.className = "card h-100";
    img.className = "card-img-top";
    img.src = oimg;
    card2.className = "card-body p-4";
    attributes.className = "text-center";
    h5.className = "fw-bolder";
    h5.textContent = oname;
    p.textContent = "$" + oprice;
    footerCard.className = "card-footer p-4 pt-0 border-top-0 bg-transparent text-center";
    buttonDelete.className = "text-center btn btn-outline-dark";
    buttonDelete.setAttribute("onclick", "productRemover(this)");
    buttonDelete.textContent = "Delete";

    product.appendChild(card);
    card.appendChild(img);
    card.appendChild(card2);
    card2.appendChild(attributes);
    attributes.appendChild(h5);
    attributes.appendChild(p);
    card.appendChild(footerCard);
    footerCard.appendChild(buttonDelete);

    document.getElementById("ContenedorProductostwo").appendChild(product);
}


function productRemover(element){
    // Nos ubicamos en la etiqueta producto y la eliminamos el HTML.
    element = element.parentNode;
    element = element.parentNode;
    element = element.parentNode;
    element.remove();
}

// Mustra el formulario para añadir, modificar o crear un elemento
function btnShowForm(){
    let form = document.getElementById("form"),
    btnShowForm = document.getElementById("btnShowForm"),
    btnForm = document.getElementById("btnForm");
    
    if(form.style.display == "none"){
        form.style.display = "block";
        btnShowForm.textContent = "Salir";
        btnForm.style.display = "block";
    } else {
        btnShowForm.style.display = 'block';
        form.style.display = "none";
        btnShowForm.textContent = "Añadir Producto";
        btnForm.style.display = "none";
        
    }
}

/*
// Crea un div con todas las características de un producto ya existente - FALTA (anidarlo a los objetos al crearlos o modificarlos)
function btnForm(){
    let product = document.querySelector("producto"),
        newProduct = product.cloneNode(true);
    document.getElementById("formId").before(newProduct);
    //cambia el texto del boton y esconde el formulario
    btnShowForm();
}
*/