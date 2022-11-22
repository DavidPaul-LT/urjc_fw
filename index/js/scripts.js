/* class Producto:
    Clase (pseudo)inmutable que sirve como contenedor de los atributos de un determinado producto de la página
*/
class Producto{
    #id
    #nombre
    #precio
    #imagen
    //--- Crea un nuevo ojeto de clase -Producto- con un -id- determinado por la ED -AlmacenProductos-
    constructor(id,nombre,precio,ruta_imagen){
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen
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
    }
}
/* class AlmacenProductos:
    -Sirve como estructura de datos que almacena los distintos objetos -Producto- que se instancien
    -Garantiza la unicidad de los IDs
    -Parametros -producto- son facilitados por el formulario de creación/modificación
*/
class AlmacenProductos{
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
    //--- Inserta en -elementos- todos los productos de prueba
    static productos_de_prueba(){
        for (let producto of AlmacenProductos.modelos) {
            this.#elementos.insertar(new Producto(producto[0],producto[1],producto[2],producto[3]))
        }
    }
    //--- Inicializa un mapa que contendrá los productos clasificados por sus atributos -id-
    constructor(){
        this.#elementos = new Map()
    }
    //--- Inserta un nuevo objeto -Producto- en -elementos-
    insertar(producto){
        if (this.#elementos.get(producto.getId()) != undefined){
            throw "KeyAlreadyUsedException" //---Raise KeyAlreadyUsedException (clave ya usada, busca otra o elimina el producto)
        }else{
            this.#elementos.set(producto.getId(),producto)
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
}
/*
    Pagina
*/
class Pagina{
    #almacen
    //---constructor se encarga de eliminar todos los elementos contenidos en -section-
    constructor(almacen_prods){
        this.#almacen = almacen_prods
        let sec = document.getElementsByTagName('section')[0];
        while (sec.lastElementChild){
            sec.removeChild(sec.lastElementChild)
        }
        console.log('Cargada con exito la pagina')
    }
    //---Devuelve el -AlmacenProductos- usado por la superclase -Pagina-
    get_almacen(){
        return this.#almacen
    }
    //---Devuelve un objeto -PaginaPrincipal-
    ir_pag_almacen(new_almacen=this.#almacen){
        return PaginaPrincipal(new_almacen)
    }
    //---Devuelve un objeto -PaginaProducto-
    ir_pag_producto(new_almacen=this.#almacen){
        return PaginaProducto(new_almacen)
    }
    ir_pag_carrito(new_almacen=this.#almacen){
        return PaginaCarrito(new_almacen)
    }
}
/*  !!!PROCURAR QUE SEA INMUTABLE!!! (Así se obliga a cargar siempre y permite la actualización de los productos)
    Pagina principal, aquella en la que se muestra los productos de AlmacenProductos
*/
class PaginaPrincipal extends Pagina{
    #mostrar_almacen_productos(){
        for (let producto of almacen) {
            //---Crea tarjetas de Producto para cada uno de los que está contenido en -AlmacenProducto-
        }
    }
    constructor(almacen_prods){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        //1) Header
        //2) Carrousel
        //3) AlmacenProductos
        this.#mostrar_almacen_productos()
        console.log('Cargada pagina principal')
    }
}
/*
    Pagina Producto, aquella en la que se muestran todos los atributos de un determinado producto
*/
class PaginaProducto extends Pagina{
    #id
    #mostar_pag_producto(id){
        //1) Consulta -AlmacenProductos-
        //2) Crea la página
    }
    constructor(almacen_prods,id){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        this.#mostar_pag_producto(id)
    }
}
/*
    Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
*/
class PaginaCarrito extends Pagina{
    constructor(almacen_prods){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        //1) Header carrito
        //2) for AlmacenProductos[i] of Carrito{Diplay Producto}
        console.log('Cargada pagina del carrito')
    }
}
//---Extra clasificación
function calificar(item){
    let primero = item.id[0]; //captura el primer caracter;
    let contador = item.id[1];
    let nombre = item.id.substring(2); //captura todo menos el primer caracter

    for(let i = 1; i < 6; i++){
        if(i > contador){
            document.getElementById((primero+i)+nombre).style.color = "black";
        } else {
            document.getElementById((primero+i)+nombre).style.color = "orange";
        }
    }
}
//---TEST PÁGINA CARRITO
function pagina2(){
    alert(6);
}

function pagina(){
    let sec = document.getElementsByTagName('section')[0];
    //---Borra todos los hijos de section
    while (sec.lastElementChild){
        sec.removeChild(sec.lastElementChild)
    }
    let p = document.createElement('p');
    p.textContent = 'PAGINA 1';
    sec.appendChild(p);
    sec.innerHTML += '<button onclick="pagina2()">Ir a pagina 2</button>';

    
}
//---
//pagina();
let cart = new Carrito();