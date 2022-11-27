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
    static ir_pag_principal(varp,new_almacen){
        varp = new PaginaPrincipal(new_almacen)
    }
    //---Devuelve un objeto -PaginaProducto-
    static ir_pag_producto(varp,id,new_almacen){
        varp = new PaginaProducto(new_almacen,id)
    }
    static ir_pag_carrito(varp,new_almacen){
        varp =  new PaginaCarrito(new_almacen)
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
    static mostrar_almacen_productos(modificador,almacen){
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
            nombre.textContent = value.getNombre()
            //---PRECIO
            let aux_precio = document.createElement('p')
            aux_precio.textContent = '$' + value.getPrecio() + '.00'
            //---NOMBRE + PRECIO
            let precio = document.createElement('div')
            precio.className = 'text-center'
            precio.appendChild(nombre)
            precio.appendChild(aux_precio)
            //---PRODUCT DETAILS
            let detalles = document.createElement('div')
            detalles.className = 'card-body p-4'
            detalles.appendChild(precio)
            //---PRODUCT IMAGE
            let imagen = document.createElement('img')
            imagen.className = 'card-img-top'
            imagen.src = value.getImagen()
            imagen.alt = '...'
            //---PRODUCT IMAGE + PRODUCT DETAILS
            let card = document.createElement('div')
            card.className = 'card h-100'
            card.appendChild(imagen)
            card.appendChild(detalles)
            //---PRODUCTO DE PRUEBA
            let final = document.createElement('div')
            final.className = 'col mb-5'
            //final.setAttribute('onclick',`Pagina.ir_pag_producto(${modificador},value.getId())`) 
            //final.addEventListener('click',`Pagina.ir_pag_producto(modificador,value.getId())`)
            final.innerHTML = '<div class="col mb-5" id=`${value.getId()}` onclick=`Pagina.ir_pag_producto(modificador,value.getId())`></div>'
            final.id = value.getId()
            final.appendChild(card)
            //---Añadir a master
            master.appendChild(final)
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
        MuestraProductos.mostrar_almacen_productos(this,this.get_almacen())
        console.log('Cargada pagina principal')
    }
}
/*
    Pagina Producto, aquella en la que se muestran todos los atributos de un determinado producto
*/
class PaginaProducto extends Pagina{
    #id
    #mostrar_pag_producto(id){
        document.write('Hola mundo')
    }
    constructor(almacen_prods,id){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        this.#mostrar_pag_producto(id)
        console.log('Cargada página producto')
    }
}
/*
    MostrarCarrito() clase auxiliar que añade al DOM un nuevo carrito
*/
class MuestraCarrito{
    static mostrar_carrito(almacen,carrito){
        //---Crea el elemento upper
        let upper = document.createElement('div')
        upper.className = 'p-5'
        //---info cantidad productos
        let cant = document.createElement('div')
        cant.className = 'd-flex justify-content-between align-items-center mb-5'
        let h = document.createElement('h6')
        h.className = 'mb-0 text-muted'
        h.textContent = `${carrito.length()} productos en tu carrito`
        cant.appendChild(h)
        upper.appendChild(cant)
        //--- barra de separación obligatoria
        let bar = document.createElement('hr')
        bar.className = 'my-4'
        upper.appendChild(bar)
        for (let [key,value] of carrito){
            let producto = document.createElement('div')
            producto.className = 'row mb-4 d-flex justify-content-between align-items-center'
            //mini imagen de producto
            let div = document.createElement('div')
            div.className = 'col-md-2 col-lg-2 col-xl-2'
            let img = document.createElement('img')
            img.src = almacen.getProducto(key).getImagen()
            img.className = 'img-fluid rounded-3'
            img.alt = '...'
            div.appendChild(img)
            producto.appendChild(div)
            //nombre producto
            let nombre = document.createElement('div')
            nombre.className = 'col-md-3 col-lg-3 col-xl-3'
            let nombre_h = document.createElement('h6')
            nombre_h.textContent = almacen.getProducto(key).getNombre()
            nombre.appendChild(nombre_h)
            producto.appendChild(nombre)
            //selector cantidad
            let sel = document.createElement('div')
            sel.className = 'col-md-3 col-lg-3 col-xl-2 d-flex'
            let step_down = document.createElement('button')
            step_down.className = 'btn btn-link px-2'
            step_down.setAttribute('onclick',"this.parentNode.querySelector('input[type=number]').stepDown()")
            let i = document.createElement('i')
            i.className = 'fas fa-minus'
            step_down.appendChild(i)
            sel.appendChild(step_down)
            let inp = document.createElement('input')
            inp.id = "form1"
            inp.min = '1'
            inp.name = 'quantity'
            inp.value = `${value}`
            inp.type = 'number'
            inp.className = 'form-control form-control-sm'
            sel.appendChild(inp)
            let sel2 = document.createElement('div')
            sel.className = 'col-md-3 col-lg-3 col-xl-2 d-flex'
            let step_up = document.createElement('button')
            step_up.className = 'btn btn-link px-2'
            step_up.setAttribute('onclick',"this.parentNode.querySelector('input[type=number]').stepUp()")
            let i2 = document.createElement('i')
            i2.className = 'fas fa-plus'
            step_down.appendChild(i)
            sel2.appendChild(step_up)
            producto.appendChild(sel)
            producto.appendChild(inp)
            producto.appendChild(sel2)
            //---precio producto
            let precio = document.createElement('div')
            precio.className = 'col-md-1 col-lg-1 col-xl-1 text-end'
            let h6 = document.createElement('h6')
            h6.className = 'mb-0'
            h6.textContent = `$${almacen.getProducto(key).getPrecio()}.00`
            precio.appendChild(h6)
            producto.appendChild(precio)
            //---borrar producto del carrito
            let borrar = document.createElement('div')
            borrar.className = 'col-md-1 col-lg-1 col-xl-1 text-end'
            let aux = document.createElement('a')
            aux.setAttribute('onclick',algo) //pendiente por ajustar
            aux.className = 'text-muted'
            aux.textContent = 'X'
            let i3 = document.createElement('i')
            i3.className = 'fas fa-times'
            aux.appendChild(i3)
            borrar.appendChild(aux)
            producto.appendChild(borrar)
            upper.appendChild(producto)
            //---barra separación
            let barw = document.createElement('hr')
            barw.className = 'my-4'
            upper.appendChild(barw)
        }
        //---FALTA TERMINAR PAGINA CARRITO
    }
}
/*
    Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
*/
class PaginaCarrito extends Pagina{
    constructor(almacen_prods,carrito){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        //1) Header carrito
        //2) for AlmacenProductos[i] of Carrito{Display Producto}
        MuestraCarrito.mostrar_carrito(almacen_prods.get_almacen(),carrito.getCarrito())
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




class FormularioNuevoProducto{

    constructor()
    //Guarda en elemento la información del almacen
        almacen.getAlmacen().get(id)
        //producto
        let producto = document.createElement('div')
        let section = document.getElementsByTagName('section')[0]
        section.appendChild(producto)
        producto.id = 'producto'
        //nombre
        let nombre = document.createElement('div')
        producto.appendChild(nombre)
        nombre.textContent = 'Nombre: ' + elemento.getNombre()
        //precio
        let precio = document.createElement('div')
        producto.appendChild(precio)
        precio.textContent = 'Precio: $' + elemento.getPrecio() + '.00'
        //Ruta imagen
        let rutaImagen = document.createElement('div')
        producto.appendChild(rutaImagen)
        rutaImagen.textContent = 'Ruta imagen: ' + elemento.getImagen()
        //Imagen
        let imagen = document.createElement('img')
        imagen.className = 'h-1'
        producto.appendChild(imagen)
        imagen.src = elemento.getImagen()

        /*
        let imagen = document.createElement('img')
            imagen.className = 'card-img-top'
            imagen.src = value.getImagen()
            imagen.alt = '...'
        */
        //comprobar que detecta el elemento (prueba)
        console.log(id)
    }
    constructor(almacen_prods,id){
        super(almacen_prods) //---Borra por defecto todos los hijos de -section-
        let storage2 = new AlmacenProductos();
        this.#mostrar_pag_producto(storage2, id)
    }
}













//---
//pagina();
let cart = new Carrito();
let storage = new AlmacenProductos();
let page = new PaginaPrincipal(storage);