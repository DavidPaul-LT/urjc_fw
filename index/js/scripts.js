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
    //--- Método getter del atributo -descripcion-
    getDescripcion(){
        return this.#descripcion
    }
    //--- Método setter del atributo -descripcion-
    setDescripcion(val){
        this.#descripcion = val
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
        ['1234','Stretch Sweater Fleece Shirt',60,'../product/1234.jpg','This shirt has a classic, versatile knit look, that is the perfect Fall layering shirt. Made with super soft and stretchy fabric, it provides a natural fit on your body.'],
        ['1235','Flowknit Ultra-Soft Performance Polo',[35,40],'../product/1235.jpg','Level up your perfect polo. This supersoft option is ideal for golf, travel, or date-night. Our insanely-soft Flowknit fabric is not only sustainable, but jam-packed with performance features like moisture-wicking and anti-odor for ultimate versatility. Our Flowknit is made from Global Recycle Standard poly yarn, which diverts and recycles plastics destined for landfill or the ocean, so you can feel and look good in what you wear.'],
        ['1236','Flowknit Ultra-Soft Performance Pant',[40,45],'../product/1236.jpg','Our favorite performance joggers are a slim but relaxed fit with the perfect amount of stretch for ultimate comfort. Thick drawstrings, cuffed ankles, and two pocket design give them a premium feel. Our Flowknit is made from Global Recycle Standard poly yarn, which diverts and recycles plastics destined for landfill or the ocean, so you can feel and look good in what you wear.'],
        ['1237','Flowknit Ultra-Soft Performance Short',35,'../product/1237.jpg',`They may be short in length but the list of features we've packed into these performance shorts is long! Moisture-wicking, anti-microbial, with a cell-phone pocket at front, and a secure zip back pocket. Perfect for training, travel, or lounging. Our Flowknit is made from Global Recycle Standard poly yarn, which diverts and recycles plastics destined for landfill or the ocean, so you can feel and look good in what you wear.`],
        ['1238','Mongolian Cashmere Crewneck Sweater',[50,90],'../product/1238.jpg',`This is the one that made us famous. And rightly so. The classic cashmere sweater is timeless. Lightweight, soft and cozy, it's perfect for just about any time of year and occasion. Our quality cashmere is incredibly long-lasting and three times as warm as wool, sourced sustainably and ethically. Read more on what makes it special in our Cashmere 101.`],
        ['1239','100% Merino Wool Shirt Jacket',120,'../product/1239.jpg',`Our 100% Merino Wool Shirt Jacket is your perfect go-to style as the temperature starts to drop. Expertly tailored with boiled merino wool, this shirt jacket - shacket - has the relaxed silhouette of a shirt, but provides the warmth of a jacket. With an intentionally oversized look, it's perfect for layering and made to throw on over any outfit with ease.`],
        ['1240','Ultra-Stretch Ponte Kick Flare Pant',[40,50],'../product/1240.jpg',`If work pants and yoga pants had a kid - this would be it. Part of our best-selling ponte pant collection, this stretchy, double knit style is cropped at the ankle and designed with a modern kick flare that looks great with flats or sneakers. Plus, they’re equally appropriate for the office or the couch.`],
        ['1241','Ultra-Soft Performance Legging - 25" Inseam',40,'../product/1241.jpg',`For leg days and lounge days these are the luxe leggings you need in your life. Our Ultra-soft Performance Leggings have everything you need to be your go-to workout bottoms, without compromising on looks. Quick-drying, moisture-wicking, anti-microbial fabric with the 4-way stretch you love so you can squat worry-free. Plus, the hidden waistband pocket fits a card or a key for unencumbered outdoor activities.`]
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
    #length
    constructor(){
        this.#elementos = new Map()
        this.#cart_obj = document.getElementById('carrito')
        this.#length = 0
    }
    //--- Devuelve la longitud del carrito
    length(){
        return this.#length
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
        this.#length += 1
        this.#cart_obj.textContent = `${this.#length}`
    }
    //--- Deja de referenciar al obj. -Producto- contenido en -AlmacenProductos-
    eliminar(id_producto){
        this.#elementos.set(id_producto,undefined)
        this.#length -= 1
        this.#cart_obj.textContent = `${this.#length}`
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
    //---La clase Pagina no se puede instanciar
    constructor(){
        throw "AssertionError"
    }
    //---Método que elimina todo el contenido (nodos hijos) del elemnto -section-
    static errase(section){
        let sec = document.getElementById(section)
        while (sec.lastElementChild){
            sec.removeChild(sec.lastElementChild)
        }
        console.log('Section borrado correctamente')
    }
    //---Método que oculta los elementos section que no tengan el ID de section_type
    static show_section(section_type){
        for (let sec of document.getElementsByTagName('section')) {
            if (section_type == sec.id) {
                sec.style.display = 'block'
            }
            else{
                sec.style.display = 'none'
            }
        }
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
    Pagina principal, aquella en la que se muestra los productos de AlmacenProductos
*/
class PaginaPrincipal{
    //---Método que crea y añade al DOM los elementos necesarios para mostrar el carrousel
    static mostrar_carrousel(){
        Carrousel.mostrar_carrousel()
        console.log('Carrousel cargado en la página')
    }
    //---Método que crea y añade al DOM los elementos necesarios para mostrar los elementos contenidos en un -AlmacenProductos-
    static almacen_creado = false
    static mostrar_almacen_productos(almacen,carrito){
        if(!PaginaPrincipal.almacen_creado){
        //---Crear master
        let master = document.createElement('div')
        master.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
        master.id = 'master'
        //---Crear -upper-container-
        let upper = document.createElement('div')
        upper.className = 'container px-4 px-lg-5 mt-5'
        upper.id = 'upper-container' //---Elemento padre de todos los elementos tipo card de productos
        upper.appendChild(master)
        document.getElementById('section_principal').appendChild(upper) //---Master añadido como hijo de -upper-container-
        for (let [key,value] of almacen.getAlmacen()) {
            //---Crea tarjetas de Producto para cada uno de los que está contenido en -AlmacenProducto-
            //---NOMBRE
            let nombre = document.createElement('h5')
            nombre.className = 'fw-bolder name'
            nombre.textContent = value.getNombre()
            //---PRECIO
            let aux_precio = document.createElement('p')
            let aux2_precio = value.getPrecio()
            if(aux2_precio.length == undefined){
                aux_precio.textContent = '$' + aux2_precio + '.00'
            }else{
                aux_precio.textContent = '$' + aux2_precio[0] + '.00 (DTO)'
            }
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
            final.addEventListener('click',function(){PaginaProducto.mostrar_pagina_producto(almacen,value.getId(),carrito)})
            final.id = value.getId()
            final.appendChild(card)
            //---Añadir a master
            master.appendChild(final)
        }
        console.log('Productos cargados en la página')
        PaginaPrincipal.almacen_creado = true
        }else{
            Pagina.show_section('section_principal')
            console.log(`Mostrando página principal`)
        }
    }
}
/*
    Pagina Producto, aquella en la que se muestran todos los atributos de un determinado producto
*/
class PaginaProducto{
    //---Método que crea y añade al DOM los elementos que se precisen para la creación de una página individual de producto
    static mostrar_pagina_producto(almacen,id,carrito){
        Pagina.show_section('section_producto')
        document.getElementById('product_id').textContent = 'ID: ' + id
        document.getElementById('product_name').textContent = almacen.getProducto(id).getNombre()
        document.getElementById('product_image').src = almacen.getProducto(id).getImagen()
        let aux_precio = almacen.getProducto(id).getPrecio()
        if(aux_precio.length > 1){
            document.getElementById('product_price1').textContent = `$${aux_precio[1]}.00`
            document.getElementById('product_price0').textContent = `$${aux_precio[0]}.00`
        }else{
            document.getElementById('product_price1').style.display = 'none'
            document.getElementById('product_price0').textContent = `$${aux_precio[0]}.00`
        }
        document.getElementById('product_descripcion').textContent = almacen.getProducto(id).getDescripcion()
        document.getElementById('product_add_to_cart').addEventListener('click',function(){carrito.insertar(id)})
        console.log(`Accediendo a página producto con id: ${almacen.getProducto(id).getNombre()}`)
    }
}
/*
    Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
*/
class PaginaCarrito{
    //---Método que crea y añade al DOM los elementos necesarios para crear una página específica para el carrito
    static mostrar_carrito(almacen,carrito){
        Pagina.show_section('section_carrito')
        if(carrito.length()>0){
            let master = document.getElementById('cart_productos_mostrados')
            Pagina.errase('cart_productos_mostrados')
            //crea carrito_modificable
            let modificable = document.createElement('div')
            modificable.className = 'd-flex justify-content-between align-items-center mb-5'
            let mod_cont = document.createElement('h6')
            mod_cont.className = 'mb-0 text-muted'
            mod_cont.textContent = `${carrito.length()} productos en tu carrito`
            modificable.appendChild(mod_cont)
            master.appendChild(modificable)
            let hr = document.createElement('hr')
            hr.className = 'my-4'
            master.appendChild(hr)
            let suma_total = 0
            for (let [producto_key,veces] of carrito.getCarrito()){
                //---Variable informadora
                let info = almacen.getProducto(producto_key)
                //---tag producto
                let producto = document.createElement('div')
                producto.className = 'producto_carrito row mb-4 d-flex justify-content-between align-items-center'
                //---imagen
                let aux_img = document.createElement('div')
                aux_img.className = 'col-md-2 col-lg-2 col-xl-2'
                let img = document.createElement('img')
                img.className = 'img-fluid rounded-3'
                img.src = info.getImagen()
                img.alt = '...'
                aux_img.appendChild(img)
                producto.appendChild(aux_img)
                //---nombre
                let aux_nombre = document.createElement('div')
                aux_nombre.className = 'col-md-3 col-lg-3 col-xl-3'
                let nombre = document.createElement('h6')
                nombre.className = 'text-black mb-0'
                nombre.textContent = info.getNombre()
                aux_nombre.appendChild(nombre)
                producto.appendChild(aux_nombre)
                //selector
                let master_sel = document.createElement('div')
                master_sel.className = 'col-md-3 col-lg-3 col-xl-2 d-flex'
                //-step down
                let step_down = document.createElement('button')
                step_down.className = 'btn btn-link px-2'
                step_down.addEventListener('click',function(){this.parentNode.querySelector('input[type=number]').stepDown()})
                let i1 = document.createElement('i')
                i1.className = 'fas fa-minus'
                step_down.appendChild(i1)
                master_sel.appendChild(step_down)
                //-form 1
                let inp = document.createElement('input')
                inp.className = 'form-control form-control-sm'
                inp.min = '1'
                inp.name = 'quantity'
                inp.value = `${veces}`
                inp.type = 'number'
                master_sel.appendChild(inp)
                //-step up
                let step_up = document.createElement('button')
                step_up.className = 'btn btn-link px-2'
                step_up.addEventListener('click',function(){this.parentNode.querySelector('input[type=number]').stepUp()})
                let i2 = document.createElement('i')
                i2.className = 'fas fa-plus'
                step_up.appendChild(i1)
                master_sel.appendChild(step_up)
                producto.appendChild(master_sel)
                //precio
                let aux_precio = document.createElement('div')
                aux_precio.className = 'col-md-3 col-lg-2 col-xl-2 offset-lg-1'
                let precio = document.createElement('h6')
                precio.className = 'mb-0'
                suma_total += veces*info.getPrecio()
                if(info.getPrecio().length > 1){
                    precio.textContent = `$${info.getPrecio()[0]}.00`
                }else{
                    precio.textContent = `$${info.getPrecio()}.00`
                }
                aux_precio.appendChild(precio)
                producto.appendChild(aux_precio)
                //borrar elemento
                let borrar = document.createElement('div')
                borrar.className = 'col-md-1 col-lg-1 col-xl-1 text-end'
                let a  = document.createElement('a')
                a.className = 'text-muted'
                a.addEventListener('click',function(){carrito.eliminar(info.getId())}) //falta recargar la pagina de carrito
                let aux_i = document.createElement('i')
                aux_i.className = 'fas fa-times'
                a.appendChild(aux_i)
                borrar.appendChild(a)
                producto.appendChild(borrar)
                master.append(producto)
                //hr
                let hr2 = document.createElement('hr')
                hr2.className = 'my-4'
                master.appendChild(hr2)
            }
            document.getElementById('resumen_items').textContent = `items ${carrito.length()}`
            document.getElementById('resumen_subtotal').textContent = `$${suma_total}.00`
            document.getElementById('resumen_precio_final').textContent = `$${suma_total}`
        }
        PaginaCarrito.loaded_once = true
        console.log('Desplegada página de carrito')
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
//---
//pagina();
let cart = new Carrito(); //---variable -Carrito-
let storage = new AlmacenProductos(); //---variable -AlmacenProductos-
document.getElementById('carrito_master').addEventListener('click',function(){PaginaCarrito.mostrar_carrito(storage,cart)})
document.getElementById('home').addEventListener('click',function(){PaginaPrincipal.mostrar_almacen_productos(storage)})
document.getElementById('solace_icon').addEventListener('click',function(){PaginaPrincipal.mostrar_almacen_productos(storage)})
PaginaPrincipal.mostrar_carrousel();
PaginaPrincipal.mostrar_almacen_productos(storage,cart);
storage.getProducto("1234").setNombre('POLO');