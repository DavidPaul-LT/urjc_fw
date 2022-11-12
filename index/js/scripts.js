/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//---TEST
//---Producto
class Producto{
    //--- Parece que no se pueden definir private static properties :P
    static min_index = 1233
    static num = 1233 //--- 1233, valor por defecto desde el nombre de la primera imagen
    #id
    #nombre
    #precio
    #imagen
    //--- Crea un nuevo objeto de clase Producto
    constructor(nombre,precio,ruta_imagen){ // Extras(color)
        this.#id = this.num
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen//document.createElement(`<img src="${ruta_imagen}" alt="">`)
        this.num += 1
    }
    //--- Devuelve el índice del primer producto
    getMinIndex(){
        return this.min_index
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
//---Carrito
class Carrito{
    #elementos
    #CART
    //---Constructor: crea un nuevo hash map -elementos- que contendrá elementos de tipo Producto
    constructor(){
        //--- -elementos- llaves: identificador de producto; valores: número de ocurrencias del producto identificado
        this.#elementos = new Map()
        //--- -CART- variable que contiene el contenido html de la etiqueta /carrito/ de index.html (modificar el span para indicar el número de productos guardados)
        this.#CART = 0
    }
    //---insertar(obj Producto): inserta en el hash map -elementos- un nuevo elemento
    //  __Add-to-cart__ on-click parámetro de función
    insertar(elemento){
        //--Pendiente: exigir que el usuario de una talla para insertar else alert()
        //--- identificador - simula un puntero a elemento 
        let identificador = elemento.getId();
        //---Añade un nuevo elemento a -elementos-
        if (this.#elementos.get(identificador)==undefined){
            this.#elementos.set(identificador,[elemento,1])
        }
        //---Modifica las repeticiones de un elemento
        else{
            this.#elementos.set(identificador,[elemento,this.#elementos.get(identificador)[1]+1])
        }
        this.#CART += 1
        document.getElementById('carrito').textContent = this.#CART
    }
    //---eliminar(obj Producto): borra todas las repeticiones de un producto dentro de -elementos-
    //  __Remove-from-cart on click button submit form checklist of Product(s)
    eliminar(elemento){
        this.#elementos.set(elemento.getId(),undefined)
        this.#CART -= 1
        document.getElementById('carrito').textContent = this.#CART
    }
    //--- Debería desplegar el carrito en la página en la que se esté: icono-carrito onclick(obj.mostarCarrito())
    mostarCarrito(){
        for (const i of this.#elementos) {
            document.write(i)
        }
    }
    //---Longitud carrito
    length(){
        return this.#elementos.size
    }
    //---Show(): returns all content-array's elements
    show(){
        return this.#elementos
    }
}


//TEST
let new_pr = new Producto('skinny pant',13,null);
let new_pr2 = new Producto('pants',50,null);

let cart = new Carrito();
cart.insertar(new_pr);
cart.insertar(new_pr2);
cart.show();