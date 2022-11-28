import { Producto } from './Producto.js';
/* class AlmacenProductos:
    -Sirve como estructura de datos que almacena los distintos objetos -Producto- que se instancien
    -Garantiza la unicidad de los IDs
    -Parametros -producto- son facilitados por el formulario de creación/modificación
*/
export class AlmacenProductos{
    #elementos
    //---Añade al mapa de elementos unos productos de prueba
    static modelos = [
        ['1234','Stretch Sweater Fleece Shirt',60,'../product/1234.jpg'],
        ['1235','Flowknit Ultra-Soft Performance Polo',(35,40),'../product/1235.jpg'],
        ['1236','Flowknit Ultra-Soft Performance Pant',(40,45),'../product/1236.jpg'],
        ['1237','Flowknit Ultra-Soft Performance Short',35,'../product/1237.jpg'],
        ['1238','Mongolian Cashmere Crewneck Sweater',(50,90),'../product/1238.jpg'],
        ['1239','100% Merino Wool Shirt Jacket',120,'../product/1239.jpg'],
        ['1240','Ultra-Stretch Ponte Kick Flare Pant',(40,50),'../product/1240.jpg'],
        ['1241','Ultra-Soft Performance Legging - 25" Inseam',40,'../product/1241.jpg']
    ]
    //--- Inicializa un mapa que contendrá los productos clasificados por sus atributos -id-
    constructor(prods_prueba=true){
        this.#elementos = new Map()
        if (prods_prueba){
            this.#productos_de_prueba()
        }
    }
    //--- Método getter de -elementos-
    getAlmacen(){
        return this.#elementos
    }
    //--- Inserta un nuevo objeto -Producto- en -elementos-
    insertar(producto){
        if (this.#elementos.get(producto.getId()) != undefined){
            throw "KeyAlreadyUsedException" //---Raise KeyAlreadyUsedException (clave ya usada, busca otra o elimina el producto)
        }else{
            this.#elementos.set(producto.getId(),producto)
        }
    }
    //--- Inserta en -elementos- todos los productos de prueba
    #productos_de_prueba(){
        for (let producto of AlmacenProductos.modelos) {
            this.insertar(new Producto(producto[0],producto[1],producto[2],producto[3]))
        }
    }
    //--- Eliminar un objeto -Producto- de entre los ya contenidos en -elementos-
    eliminar(producto){
        this.#elementos.set(producto.getId(),null)
    }
    //--- Oculta al usuario un elemento de -AlmacenProductos-
    invisibilizar(producto){
        aux = document.getElementById(producto.getId())
        aux.style.display = 'none'
    }
    //--- Consigue un atributo en función de su -id-
    getProducto(id){
        return this.#elementos.get(id)
    }
}