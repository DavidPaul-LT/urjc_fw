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
    #inner_html
    //--- Crea un nuevo ojeto de clase -Producto- con un -id- determinado por la ED -AlmacenProductos-
    constructor(id,nombre,precio,ruta_imagen,inner_html=null){
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen
        this.#inner_html = inner_html
    }
    //--- Devuelve la modificación del DOM (habría que especidicar que se añada a section)
    displayHTMLcontent(){
        if (this.#inner_html === null){
            //document.create algo
            //subir al DOM
            //actualizar -innner_html-
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
        //modificar -inner_html-
    }
    //--- Método getter del atributo -precio-
    getPrecio(){
        return this.#precio
    }
    //--- Método setter del atributo -precio-
    setPrecio(val){
        this.#precio = val
        //modificar -inner_html-
    }
    //--- Método getter del atributo -imagen-
    getImagen(){
        return this.#imagen
    }
    //--- Método setter del atributo -imagen-
    setImagen(val){
        this.#imagen = val
        //modificar -inner_html-
    }
}
/*class ReadProduct:
-Consigue del DOM la información relativa a un producto
*/
class ReadProducto{
    #inner_html
    constructor(id){
        this.#inner_html = document.getElementById(id).getElementsByClassName('name')[0]
    }
    getNombre(){
        return this.#inner_html
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
        if (this.#elementos.get(producto.getId()) != undefined){
            this.#elementos.set(producto.getId(),producto)
            producto.displayHTMLcontent() //--- Actualiza el DOM con la nueva información del producto (crea una nueva targeta)
        }
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
    #cart_obj
    constructor(){
        this.#elementos = new Map()
        this.#cart_obj = document.getElementById('carrito')
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
    //--- Consigue la información de cada -Producto- referenciado y la muestra por pantalla
    consultar(){

    }
}
//---EXTRA
<<<<<<< HEAD
function borrarSection(){
    let aux = document.getElementById('section');
    aux.innerHTML = '';
    console.log('hola');
=======
function destroySection(){
    let aux = document.getElementsByTagName("section")[0];
    aux.innerHTML = ''
>>>>>>> 86eaf034a42ceeeb9ad893ebab154f3f4de149c0
}
//---TEST
let cart = new Carrito();
