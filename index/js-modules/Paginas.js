import {AlmacenProductos} from './AlmacenProductos.js'
/*
    Pagina
*/
export class Pagina{
    //---La clase Pagina no se puede instanciar
    constructor(){
        throw "AssertionError"
    }
    //---Método que elimina todo el contenido (nodos hijos) del elemnto -section-
    static errase(){
        let sec = document.getElementsByTagName('section')[0]
        while (sec.lastElementChild){
            sec.removeChild(sec.lastElementChild)
        }
        console.log('Section borrado correctamente')
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
        carr.id = 'carouselExampleInterval' //---Identificador del carrousel
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
export class PaginaPrincipal{
    //---Método que crea y añade al DOM los elementos necesarios para mostrar el carrousel
    static mostrar_carrousel(){
        Carrousel.mostrar_carrousel()
        console.log('Carrousel cargado en la página')
    }
    //---Método que crea y añade al DOM los elementos necesarios para mostrar los elementos contenidos en un -AlmacenProductos-
    static mostrar_almacen_productos(almacen){
        //---Crear master
        let master = document.createElement('div')
        master.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
        master.id = 'master'
        //---Crear -upper-container-
        let upper = document.createElement('div')
        upper.className = 'container px-4 px-lg-5 mt-5'
        upper.id = 'upper-container' //---Elemento padre de todos los elementos tipo card de productos
        upper.appendChild(master)
        document.getElementsByTagName('section')[0].appendChild(upper) //---Master añadido como hijo de -upper-container-
        for (let [key,value] of almacen.getAlmacen()) {
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
            //final.setAttribute('onclick','Pagina.errase()')
            final.addEventListener('click',PaginaProducto.mostrar_pagina_producto)
            final.id = value.getId()
            final.appendChild(card)
            //---Añadir a master
            master.appendChild(final)
        }
        console.log('Productos cargados en la página')        
    }
}
/*
    Pagina Producto, aquella en la que se muestran todos los atributos de un determinado producto
*/
export class PaginaProducto{
    //---Método que crea y añade al DOM los elementos que se precisen para la creación de una página individual de producto
    static mostrar_pagina_producto(almacen,id){
        Pagina.errase()
        
        //NOT IMPLEMENTED
    }
}
/*
    Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
*/
export class PaginaCarrito{
    //---Método que crea y añade al DOM los elementos necesarios para crear una página específica para el carrito
    static mostrar_carrito(almacen,carrito){
        Pagina.errase()

        //NOT IMPLEMENTED
        console.log('Creada página')
    }
}