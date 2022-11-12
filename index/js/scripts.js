/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


/* class Producto:
-Se definen nuevos objetos de tipo Producto, tanto productos de prueba (aquellos que están por defecto en -index.html-) como nuevos productos a añadir.
-Se
*/
class Producto{
    #id
    #nombre
    #precio
    #imagen
    #displayed
    //--- Crea un nuevo ojeto de clase -Producto- con un -id- determinado por la ED -AlmacenProductos-
    constructor(id,nombre,precio,ruta_imagen,displayed=false){
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen
        this.#displayed = displayed
    }
    //--- Devuelve la modificación del DOM (habría que especidicar que se añada a section)
    displayHTMLcontent(){
        if (!this.#displayed){
            //document.create algo
            //subir al DOM
            this.#displayed = true
        }
    }
    //--- Método getter del atributo -id-
    getId(){
        return this.#id
    }
    //--- Método setter del atributo -id- (el acceso a este método debería estar lo más restringido posible)
    #setId(val){
        this.#id = val
    }
    //--- Método getter del atributo -nombre-
    getNombre(){
        return this.#nombre
    }
    //--- Método setter del atributo -nombre-
    setNombre(val){
        this.#nombre = val
    }
    //--- Método getter del atributo -precio-
    getPrecio(){
        return this.#precio
    }
    //--- Método setter del atributo -precio-
    setPrecio(val){
        this.#precio = val
    }
    //--- Método getter del atributo -imagen-
    getImagen(){
        return this.#imagen
    }
    //--- Método setter del atributo -imagen-
    setImagen(val){
        this.#imagen = val
    }
}

/*class AlmacenProductos:
-Sirve como estructura de datos que almacena los distintos objetos -Producto- que se instancien
-Una de sus funciones es la de supervisar que nunca se repita una id
*/
class AlmacenProductos{
    #elementos
    //--- Inicializa un mapa que contendrá los productos clasificados por sus atributos -id-
    constructor(){
        this.#elementos = new Map()
    }
    //--- Inserta un nuevo objeto -Producto- en -elementos-
    insertar(producto){
        this.#elementos.set(producto.getId(),producto)
        producto.displayHTMLcontent() //--- Ctualiza el DOM con la nueva información del producto (crea una nueva targeta)
    }
    //--- Eliminar un objeto -Producto- de entre los ya contenidos en -elementos-
    eliminar(producto){
        this.#elementos.set(producto.getId(),null)
    }
    invisibilizar(producto){
        aux = document.getElementById(producto.getId())
        aux.style.display = 'none'
    }
}

/* class Carrito
-Cada uno de sus elementos simula ser un puntero a una posición del objeto -AlmacenProductos-
*/
class Carrito{
    #elementos
    constructor(){
        this.#elementos = new Map()
    }
    //--- Guarda como llave el identificador de un obj. -Producto- ya almacenado en -AlmacenProductos-
    insertar(id_producto){
        aux = this.#elementos.get(id_producto)
        if (aux == undefined){
            this.#elementos.set(id_producto,1)
        }
        else{
            this.#elementos.set(id_producto,aux+1)
        }
    }
    //--- Deja de referenciar al obj. -Producto- contenido en -AlmacenProductos-
    eliminar(id_producto){
        this.#elementos.set(id_producto,undefined)
    }
    //--- Consigue la información de cada -Producto- referenciado y la muestra por pantalla
    consultar(){

    }
}