/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

class Producto{
    static #min_index = 1233
    static #num = Producto.#min_index //--- 1233, valor por defecto desde el nombre de la primera imagen
    #id
    #nombre
    #precio
    #imagen
    //--- Crea un nuevo objeto de clase Producto
    constructor(nombre,precio,ruta_imagen){ // Extras(color)
        this.#id = Producto.#num
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = document.createElement(`<img src="${ruta_imagen}" alt="">`)
        Producto.#num += 1
    }
    //--- Devuelve el índice del primer producto
    getMinIndex(){
        return Producto.#min_index
    }
    //--- Devuelve la propiedad -id- de cada producto (id no puede ser modificado, solo consultado)
    getId(){
        return this.#id
    }
    mostarNuevoProducto(){
        //--- Muestra el producto en la página principal: filtar por pendientes por mostrar?
    }
    modificar(){
        //--- Param func?
    }
}

class AlmacenProductos{
    #lista
    #length
    constructor(){
        this.#lista = new Array()
        this.#length = 0
    }
    //--- Inserta un nuevo producto en 
    insertarProducto(p){
        this.#lista[p.getId()] = p
        this.#length += 1
    }
    eliminarProducto(p_id){
        if (this.#length >= 0){
            this.#lista[p_id] = undefined
            this.#length -= 1
        }
    }
    //--- Sube al DOM todos los productos que se encuentren en -lista- (útil para cuando se añaden/borran productos)
    mostarProductos(){
        
    }
}