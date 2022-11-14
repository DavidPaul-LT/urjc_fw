function clicBtnMore(){
    let element = document.getElementById("Borrar");
    element.remove()
}


function clickBtnAbout(){
    // crea un nuevo div
    // y añade contenido
    
    let divCol = document.createElement("div");
        let divCard = document.createElement("div");
            let img = document.createElement("img");
            let divCardBody = document.createElement("div");
                let divTextCenter = document.createElement("div");
                    let h5 = document.createElement("h5");
                    let divCardFooter = document.createElement("div");
                        let divTextCenter2 = document.createElement("div");
                            let a = document.createElement("a");

    divCol.className = "col mb-5";
    divCol.id = "Borrar";
    divCard.className = "card h-100";
    img.className = "card-img-top";
    img.src = "../product/product_Images/1239.jpg";
    divCardBody.className = "card-body p-4";
    divTextCenter.className = "text-center";
    h5.className = "fw-bolder";
    divCardFooter.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";
    divTextCenter2.className = "text-center";
    a.className = "btn btn-outline-dark mt-auto";

    let h5Text = document.createTextNode("Flowknit Ultra-Soft Performance Polo");
    h5.appendChild(h5Text);
    let aText = document.createTextNode("Add to cart");
    a.appendChild(aText);

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(divTextCenter);
    divTextCenter.appendChild(h5);
    divTextCenter.appendChild(divCardFooter);
    divCardFooter.appendChild(divTextCenter2);
    divTextCenter2.appendChild(a);

    

    // añade el elemento creado y su contenido al DOM
    document.getElementById("Contenedor-Productos").appendChild(divCol);
}
