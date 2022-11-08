class Producto{
    #nombre
    #precio
    #imagen
    //--- Crea un nuevo objeto de clase Producto
    constructor(nombre,precio,imagen){ // Extras(color)
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = document.createElement(`<img src="${imagen}" alt="">`)
    }
    mostarNuevoProducto(){

    }
    modificar(){

    }

}

class AlmacenProductos{
    #lista

}
let aux = document.getElementById("1");
aux.style.display = "none";