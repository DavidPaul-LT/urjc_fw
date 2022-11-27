/* class Producto:
    Clase (pseudo)inmutable que sirve como contenedor de los atributos de un determinado producto de la página
*/
class Producto{
    #id
    #nombre
    #precio
    #imagen
    #descripcion
    //--- Crea un nuevo ojeto de clase -Producto- con un -id- determinado por la ED -AlmacenProductos-
    constructor(id,nombre,precio,ruta_imagen,descripcion){
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen
        this.#descripcion = descripcion
    }
    // Cambiado todos los get y set
    //--- Método getter del atributo -id-
    get getId(){
        return this.#id
    }
    //--- Método setter del atributo -id- (el acceso a este método debería estar lo más restringido posible)
    set setId(val){
        this.#id = val
    }
    //--- Método getter del atributo -nombre-
    get getNombre(){
        return this.#nombre
    }
    //--- Método setter del atributo -nombre-
    set setNombre(val){
        this.#nombre = val
        //modificar -inner_html-
    }
    //--- Método getter del atributo -precio-
    get getPrecio(){
        return this.#precio
    }
    //--- Método setter del atributo -precio-
    set setPrecio(val){
        this.#precio = val
        //modificar -inner_html-
    }
    //--- Método getter del atributo -imagen-
    get getImagen(){
        return this.#imagen
    }
    //--- Método setter del atributo -imagen-
    set setImagen(val){
        this.#imagen = val
    }
    //--- Método getter del atributo -descripcion-
    get getDescripcion(){
        return this.#descripcion
    }
    //--- Método setter del atributo -descripcion-
    set setDescripcion(val){
        this.#descripcion = val
        //modificar -inner_html-
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
        ['1234','Stretch Sweater Fleece Shirt',60,'../product/1234.jpg','Este es el elemento 1'],
        ['1235','Flowknit Ultra-Soft Performance Polo',(35,40),'../product/1235.jpg','Este es el elemento 2'],
        ['1236','Flowknit Ultra-Soft Performance Pant',(40,45),'../product/1236.jpg','Este es el elemento 3'],
        ['1237','Flowknit Ultra-Soft Performance Short',35,'../product/1237.jpg','Este es el elemento 4'],
        ['1238','Mongolian Cashmere Crewneck Sweater',(50,90),'../product/1238.jpg','Este es el elemento 5'],
        ['1239','100% Merino Wool Shirt Jacket',120,'../product/1239.jpg','Este es el elemento 6'],
        ['1240','Ultra-Stretch Ponte Kick Flare Pant',(40,50),'../product/1240.jpg','Este es el elemento 7'],
        ['1241','Ultra-Soft Performance Legging - 25" Inseam',40,'../product/1241.jpg','Este es el elemento 8']
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
        if (this.#elementos.get(producto.getId) != undefined){
            throw "KeyAlreadyUsedException" //---Raise KeyAlreadyUsedException (clave ya usada, busca otra o elimina el producto)
        }else{
            this.#elementos.set(producto.getId,producto)
        }
    }
    //--- Inserta en -elementos- todos los productos de prueba
    #productos_de_prueba(){
        for (let producto of AlmacenProductos.modelos) {
            this.insertar(new Producto(producto[0],producto[1],producto[2],producto[3],producto[4]))
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
    getProducto(id){
        return this.#elementos.get(id)
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
        return this.#almacen.getAlmacen()
    }
    //---Devuelve un objeto -PaginaPrincipal-
    ir_pag_almacen(new_almacen=this.#almacen){
        return new PaginaPrincipal(new_almacen)
    }
    //---Devuelve un objeto -PaginaProducto-
    ir_pag_producto(new_almacen=this.#almacen){
        return new PaginaProducto(new_almacen)
    }
    ir_pag_carrito(new_almacen=this.#almacen){
        return new PaginaCarrito(new_almacen)
    }
}
/*
    -----Carrousel()
        Crea los elementos necesarios para la generación del carrousel que contendrá -section-
*/
class Carrousel{
    //---Set de imágenes por defecto del carrousel
    static image_set = [
        'index_images/carrousel_images/carrousel1.jpg',
        'index_images/carrousel_images/carrousel2.jpg',
        'index_images/carrousel_images/carrousel3.jpg',
        'index_images/carrousel_images/carrousel4.jpg'
    ]
    static mostrar_carrousel(){
        //---main carrousel
        let carr = document.createElement('div')
        carr.id = 'carouselExampleInterval'
        carr.className = 'carousel slide'
        carr.setAttribute('data-bs-ride','carousel')
        //---Carrousel-inner
        let inner = document.createElement('div')
        inner.className = 'carousel-inner'
        for (let i = 0; i < 4; i++) {
            //---Carrousel-item
            let item = document.createElement('div')
            item.className = 'carousel-item'
            //---Establece como imagen por defecto la primera del set
            if (i==0) {
                item.className += ' active'
            }
            item.setAttribute('data-bs-interval','4000')
            //---Imagenes de carrousel
            let img = document.createElement('img')
            img.src = Carrousel.image_set[i]
            img.className = 'd-block w-100'
            img.alt = '...'
            item.appendChild(img)
            inner.appendChild(item)
        }
        carr.appendChild(inner)
        //---Botones previous y next
        for (let i of ['prev','next']) {
            let butt = document.createElement('button')
            butt.className = 'carousel-control-' + i
            butt.type = 'button'
            butt.setAttribute('data-bs-target','#carouselExampleInterval')
            butt.setAttribute('data-bs-slide',i)
            let control = document.createElement('span')
            control.className = `carousel-control-${i}-icon`
            control.setAttribute('aria-hidde','true')
            butt.appendChild(control)
            carr.appendChild(butt)
        }
        //---Añadir el carrusel a -section-
        document.getElementsByTagName('section')[0].appendChild(carr)
    }
}
/*
    -----MuestraProductos()
        Crea los elementos necesarios para la generación de las tarjetas de producto que contendrá -section-
*/
class MuestraProductos{
    //---Añade a -section- los productos contenidos en un objeto AlmacenProductos
    static mostrar_almacen_productos(almacen){
        //---Crear master
        let master = document.createElement('div')
        master.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
        master.id = 'master'
        //---Crear -upper-container-
        let upper = document.createElement('div')
        upper.className = 'container px-4 px-lg-5 mt-5'
        upper.id = 'upper-container'
        upper.appendChild(master)
        document.getElementsByTagName('section')[0].appendChild(upper) //---Master añadido como hijo de -upper-container-
        for (let [key,value] of almacen) {
            //---Crea tarjetas de Producto para cada uno de los que está contenido en -AlmacenProducto-
            //---NOMBRE
            let nombre = document.createElement('h5')
            nombre.className = 'fw-bolder name'
            nombre.textContent = value.getNombre
            //---PRECIO
            let aux_precio = document.createElement('p')
            aux_precio.textContent = '$' + value.getPrecio + '.00'
            //---NOMBRE + PRECIO
            let precio = document.createElement('div')
            precio.className = 'text-center'
            precio.appendChild(nombre)
            precio.appendChild(aux_precio)
            //precio.textContent += '$' + value.getPrecio() + '.00'
            //---PRODUCT DETAILS
            let detalles = document.createElement('div')
            detalles.className = 'card-body p-4'
            detalles.appendChild(precio)
            //---PRODUCT IMAGE
            let imagen = document.createElement('img')
            imagen.className = 'card-img-top'
            imagen.src = value.getImagen
            imagen.alt = '...'
            //---PRODUCT IMAGE + PRODUCT DETAILS
            let card = document.createElement('div')
            card.className = 'card h-100'
            card.appendChild(imagen)
            card.appendChild(detalles)
            //---PRODUCTO DE PRUEBA
            let final = document.createElement('div')
            final.className = 'col mb-5'
            final.setAttribute('onclick','new PaginaProducto(this.almacen, this.id)')
            final.id = value.getId
            final.appendChild(card)
            //---Añadir a master
            document.getElementById('master').appendChild(final)
        }
    }
}
/*  !!!PROCURAR QUE SEA INMUTABLE!!! (Así se obliga a cargar siempre y permite la actualización de los productos)
    Pagina principal, aquella en la que se muestra los productos de AlmacenProductos
*/
class PaginaPrincipal extends Pagina{
    constructor(almacen_prods,is_carrousel_deployed=false){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        //1) Header
        //2) Carrousel
        if (!is_carrousel_deployed){
            Carrousel.mostrar_carrousel()
            console.log('Carrousel mostrado')
        }
        //3) AlmacenProductos
        MuestraProductos.mostrar_almacen_productos(this.get_almacen())
        console.log('Cargada pagina principal')
    }
}
/*
    Pagina Producto, aquella en la que se muestran todos los atributos de un determinado producto
*/
class PaginaProducto extends Pagina{
    #id
    #mostrar_pag_producto(almacen, id){
        //Guarda en elemento la información del almacen
        let elemento = almacen.getAlmacen().get(id)
        //producto
        let producto = document.createElement('div')
        let section = document.getElementsByTagName('section')[0]
        section.appendChild(producto)
        producto.id = 'producto'
        //nombre
        let nombre = document.createElement('div')
        producto.appendChild(nombre)
        nombre.textContent = 'Nombre: ' + elemento.getNombre
        //precio
        let precio = document.createElement('div')
        producto.appendChild(precio)
        precio.textContent = 'Precio: $' + elemento.getPrecio + '.00'
        //Ruta imagen
        let rutaImagen = document.createElement('div')
        producto.appendChild(rutaImagen)
        rutaImagen.textContent = 'Ruta imagen: ' + elemento.getImagen
        //Descipción
        let descripcion = document.createElement('div')
        producto.appendChild(descripcion)
        descripcion.textContent = 'Descripcion: ' + elemento.getDescripcion 
        //Imagen
        let imagen = document.createElement('img')
        imagen.className = 'imagenProducto'
        producto.appendChild(imagen)
        imagen.src = elemento.getImagen
        imagen.alt = '...'
        //Boton modificar
        let modificar = document.createElement('button')
        modificar.className = "btn btn-outline-dark mt-auto"
        
        modificar.id = "btnMod";  //añadido Paul
        modificar.setAttribute('onclick', 'mostrarValoresProducto()', false); //añadido Paul

        producto.appendChild(modificar)
        modificar.textContent = 'Modificar';

        //Funcion para modificar
        //Boton añadir al carrito
        let añadirCarrito = document.createElement('button')
        añadirCarrito.className = "btn btn-outline-dark mt-auto"
        producto.appendChild(añadirCarrito)
        añadirCarrito.textContent = 'Añadir al carrito'
        //Funcion para añadir al carrito
        //Boton borrar
        let borrar = document.createElement('button')
        borrar.className = "btn btn-outline-dark mt-auto"
        producto.appendChild(borrar)
        borrar.textContent = 'Borrar'
        //Funcion para borrar
        //comprobar que detecta el elemento (prueba)
        console.log(id)
    }
    constructor(almacen_prods,id){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        this.#mostrar_pag_producto(storage, id)
    }
}
/*
    Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
*/
class PaginaCarrito extends Pagina{
    constructor(almacen_prods){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        //1) Header carrito
        //2) for AlmacenProductos[i] of Carrito{Display Producto}
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
//---Boton home

//---
//pagina();
let cart = new Carrito();
let storage = new AlmacenProductos();
let page = new PaginaPrincipal(storage);


//BASURA


function mostrarValoresProducto(){
    let contactForm = document.getElementById("contactForm"),
    btnMod = document.getElementById("btnMod");

    if(contactForm.style.display == 'none'){
        contactForm.style.display = 'block';
        btnMod.textContent = 'Cerrar Formulario';
    }else{
        contactForm.style.display = 'none';
        document.getElementById("form").reset();
        btnMod.textContent = 'Modificar';
    }

    if(contactForm.style.display == 'block'){
        let nombre = storage.getProducto("1235");
        console.log(nombre);
        document.getElementById('codigo').value = "1235";
        document.getElementById('nombre').value = nombre.getNombre;
        document.getElementById('img').value = nombre.getImagen;
        document.getElementById('precio').value = nombre.getPrecio;
        document.getElementById('descripcion').value = nombre.getDescripcion;
    }
}


function modificarProducto(){
    let nombre = storage.getProducto("1235");
    
    nombre.setNombre = document.getElementById('nombre').value;
    nombre.setImagen = document.getElementById('img').value;
    nombre.setPrecio = document.getElementById('precio').value;
    nombre.setDescripcion = document.getElementById('descripcion').value;
    console.log(nombre);
}
