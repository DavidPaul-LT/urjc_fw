/* class Carrito
-Cada uno de sus elementos simula ser un puntero a una posición del objeto -AlmacenProductos-
*/
export class Carrito{
    #elementos
    #cart_obj
    constructor(){
        this.#elementos = new Map()
        this.#cart_obj = document.getElementById('carrito')
    }
    //--- Devuelve la longitud del carrito
    length(){
        return this.#elementos.size
    }
    //--- Guarda como llave el identificador de un obj. -Producto- ya almacenado en -AlmacenProductos-
    insertar(id_producto){
        let aux = this.#elementos.get(id_producto)
        if (aux == undefined){
            this.#elementos.set(id_producto,1)
        }
        else{
            this.#elementos.set(id_producto,aux+1)
        }
        this.#cart_obj.textContent = `${parseInt(this.#cart_obj.textContent)+1}`
    }
    //--- Deja de referenciar al obj. -Producto- contenido en -AlmacenProductos-
    eliminar(id_producto){
        this.#elementos.set(id_producto,undefined)
        this.#cart_obj.textContent = `${parseInt(this.#cart_obj.textContent)-1}`
    }
    //--- Devuelve el mapa de elemntos de -elemento-
    getCarrito(){
        return this.#elementos
    }
}