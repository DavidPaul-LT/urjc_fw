//  class Producto: Clase (pseudo)inmutable que sirve como contenedor de los atributos de un determinado producto de la página
class Producto{
    #id
    #nombre
    #precio
    #imagen
    #descripcion
    #atrib_extra
    //--- Crea un nuevo ojeto de clase -Producto- con un -id- determinado por la ED -AlmacenProductos-
    constructor(id,nombre,precio,ruta_imagen,descripcion){
        this.#id = id
        this.#nombre = nombre
        this.#precio = precio
        this.#imagen = ruta_imagen
        this.#descripcion = descripcion
        this.#atrib_extra = new Map() //guarda los atributos extra
    }
    //--- Método getter de -atrib-extra-
    get getAtribExtra(){
        return this.#atrib_extra
    }
    //--- Método setter de -atrib-extra-
    setAtribExtra(nombre_atrib,valor_atrib){
        this.#atrib_extra.set(nombre_atrib,valor_atrib)
    }
    //--- Método getter del atributo -id-
    get getId(){
        return this.#id
    }
    //--- Método setter del atributo -id- (el acceso a este método debería estar lo más restringido posible)
    #setId(val){
        this.#id = val
    }
    //--- Método getter del atributo -nombre-
    get getNombre(){
        return this.#nombre
    }
    //--- Método setter del atributo -nombre-
    setNombre(val){
        this.#nombre = val
        //modificar -inner_html-
    }
    //--- Método getter del atributo -precio-
    get getPrecio(){
        return this.#precio
    }
    //--- Método setter del atributo -precio-
    setPrecio(val){
        this.#precio = val
        //modificar -inner_html-
    }
    //--- Método getter del atributo -imagen-
    get getImagen(){
        return this.#imagen
    }
    //--- Método setter del atributo -imagen-
    setImagen(val){
        this.#imagen = val
    }
    //--- Método getter del atributo -descripcion-
    get getDescripcion(){
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
    -Parametros -producto- son facilitados por el formulario de creación/modificación */
    class AlmacenProductos{
        #elementos
        //---Añade al mapa de elementos unos productos de prueba
        static modelos = [
            ['1234','Camisa de lana elástica',[60],'images/product/1234.jpg','Esta camisa tiene un aspecto de punto clásico y versátil, perfecta para el otoño. Fabricada con un tejido súper suave y elástico, proporciona un ajuste natural al cuerpo.'],
            ['1235','Polo de alto rendimiento',[40],'images/product/1235.jpg','Este polo supersuave es ideal para el golf, los viajes o las citas nocturnas. Nuestro tejido Flowknit, increíblemente suave, no solo es sostenible, sino que facilita la absorción de la humedad y evita el mal olor, ofreciendo la máxima versatilidad. Nuestro Flowknit está fabricado con hilo de poliéster Global Recycle Standard, que desvía y recicla los plásticos destinados a los vertederos o al océano, para que puedas sentirte y verte bien con lo que llevas puesto.'],
            ['1236','Pantalón de alto rendimiento',[45],'images/product/1236.jpg','Nuestros joggers de alto rendimiento favoritos tienen un ajuste fino pero relajado siendo lo suficientemente elásticos para conseguir la máxima comodidad. Los gruesos cordones, los tobillos con puños y el diseño de dos bolsillos ofrecen una sensación de calidad.'],
            ['1237','Pantalón corto de alto rendimiento',[35],'images/product/1237.jpg','Puede que sean cortos, pero consiguen evitar la humedad, son antimicrobianos, tienen un bolsillo para el móvil en la parte delantera y un bolsillo trasero con cremallera. Perfecto para entrenar, viajar o descansar.'],
            ['1238','Jersey de cachemira mongola con cuello redondo',[90],'images/product/1238.jpg','El clásico jersey de cachemira es intemporal. Ligero, suave y acogedor, perfecto para cualquier época del año y ocasión. Nuestra cachemira de calidad es increíblemente duradera y tres veces más cálida que la lana, y se obtiene de forma sostenible y ética.'],
            ['1239','Chaqueta camisera 100% lana merina',[120],'images/product/1239.jpg','Nuestra chaqueta camisera de lana merina 100% es perfecta cuando las temperaturas empiezan a bajar. Confeccionada por expertos con lana merina hervida, esta chaqueta camisera tiene la silueta de una camisa, pero proporciona la calidez de una chaqueta. Con un aspecto intencionadamente sobredimensionado, es perfecta para vestirse a capas y se puede poner sobre cualquier prenda con facilidad.'],
            ['1240','Pantalón acampanado Ultra-Stretch',[50],'images/product/1240.jpg','Si los pantalones de trabajo y los de yoga tuvieran un hijo, sería éste. Este pantalón es de punto doble y muy elástico y además queda fabuloso con zapatos planos o con zapatillas de deporte.'],
            ['1241','Leggings de alto rendimiento ultra suave',[40],'images/product/1241.jpg','Nuestros leggings de alto rendimiento tienen todo lo que necesitan para convertirse en tus pantalones de entrenamiento favoritos, sin comprometer la apariencia. Cuentan con un tejido de secado rápido, que absorbe la humedad y que es antimicrobiano, con la elasticidad óptima para que puedas hacer sentadillas sin preocupaciones.']
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
            this.#elementos.set(producto.getId,producto)
        }
        //--- Inserta en -elementos- todos los productos de prueba
        #productos_de_prueba(){
            for (let producto of AlmacenProductos.modelos) {
                this.insertar(new Producto(producto[0],producto[1],producto[2],producto[3],producto[4]))
            }
        }
        //--- Eliminar un objeto -Producto- de entre los ya contenidos en -elementos-
        eliminar(producto){
            this.#elementos.delete(producto)
        }
        //--- Consigue un atributo en función de su -id-
        getProducto(id){
            return this.#elementos.get(id)
        }
    }

//  class Carrito: -Cada uno de sus elementos simula ser un puntero a una posición del objeto -AlmacenProductos-
class Carrito{
    #elementos
    #cart_obj
    #length
    constructor(){
        this.#elementos = new Map()
        this.#cart_obj = document.getElementById('carrito')
        this.#length = 0;
    }
    //--- Devuelve la longitud del carrito
    length(){
        return this.#length
    }
    //--- Guarda como llave el identificador de un obj. -Producto- ya almacenado en -AlmacenProductos-
    insertar(id_producto,cantidad=1){
        console.log(this.#elementos)
        let aux = this.#elementos.get(id_producto)
        if (aux == undefined){
            this.#elementos.set(id_producto,1)
        }
        else{
            this.#elementos.set(id_producto,aux+cantidad)
        }
        this.#length += cantidad
        console.log(this.#elementos)
        this.#cart_obj.textContent = `${this.#length}`
    }
    //--- Deja de referenciar al obj. -Producto- contenido en -AlmacenProductos-
    eliminar(id_producto){
        if(this.#length > 0){
            this.#length -= this.#elementos.get(id_producto)
        }
        this.#elementos.delete(id_producto)
        console.log(this.#elementos)
        this.#cart_obj.textContent = `${this.#length}`
    }
    //--- Devuelve el mapa de elemntos de -elemento-
    getCarrito(){
        return this.#elementos
    }
}


//    Pagina
class Pagina{
    //---La clase Pagina no se puede instanciar
    constructor(){
        throw "AssertionError"
    }
    //---Método que elimina todo el contenido (nodos hijos) del elemnto -section-
    static errase(section){
        let sec = document.getElementById(section)
        while (sec.firstChild){
            sec.removeChild(sec.lastChild)
        }
    }
    //---Método que oculta los elementos que no tengan el ID de section_type
    static show_section(section_type, section_formulario=null){
        for (let sec of document.getElementsByTagName('section')) {
            if ((section_type == sec.id) || (section_formulario == sec.id)) {
                sec.style.display = 'block'
            }
            else{
                sec.style.display = 'none'
            }
        }
    }
}


//  Pagina principal, aquella en la que se muestra los productos de AlmacenProductos
class PaginaPrincipal{
    static mostrar_almacen_productos(almacen,carrito){

        // 1- Ocultar otros section
        Pagina.show_section('section_principal')
        // 2- Borrar el anterior contenido del section
        Pagina.errase('section_principal_almacen')
        // 3- Obtener la información del almacen
        let producto_info = almacen.getAlmacen()
        // Creación del nuevo section* section_principal_almacen
        //---Crear master
        let master = document.createElement('div')
        master.className = 'row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'
        //---Crear -upper-container- (Elemento padre de todos los elementos tipo card de productos)
        let upper = document.createElement('div')
        upper.className = 'container px-4 px-lg-5 mt-5'
        upper.append(master)
        document.getElementById('section_principal_almacen').appendChild(upper)
        if(producto_info.size == 0){
            master.textContent = 'no hay productos en la lista';
        }
        //---Iteración sobre productos del almacén
            for (let [key,prod] of producto_info){
                //---Crea tarjetas de Producto para cada uno de los que está contenido en -AlmacenProducto-
                let final = document.createElement('div')
                //---NOMBRE
                let nombre = document.createElement('h5')
                nombre.className = 'fw-bolder name'
                nombre.textContent = prod.getNombre
                //---PRECIO
                let aux_precio = document.createElement('p')
                let aux2_precio = prod.getPrecio
                aux_precio.textContent = '$' + aux2_precio + '.00'
                //---NOMBRE + PRECIO
                let precio = document.createElement('div')
                precio.className = 'text-center'
                precio.appendChild(nombre)
                precio.appendChild(aux_precio)
                //---PRODUCT DETAILS (precio + nombre)
                let detalles = document.createElement('div')
                detalles.className = 'card-body p-4'
                detalles.appendChild(precio)
                //---PRODUCT IMAGE
                let imagen = document.createElement('img')
                imagen.className = 'card-img-top'
                imagen.src = prod.getImagen
                imagen.alt = '...'
                //---CARD = PRODUCT IMAGE + PRODUCT DETAILS
                let card = document.createElement('div')
                card.className = 'card h-100'
                card.appendChild(imagen)
                card.appendChild(detalles)
                //---FINAL = PADRE DE CARD
                final.className = 'col mb-5'
                final.addEventListener('click',function(){
                    PaginaProducto.mostrar_pagina_producto(almacen,key,carrito)
                })
                final.appendChild(card)
                //---Añadir a master
                master.appendChild(final)
                }
        document.getElementById('field').disabled = false;
        document.getElementById("btnSubmit").addEventListener('click', function(){
            crearNuevoElemento(almacen, carrito);
            document.getElementById('form').reset();
            document.getElementById('contactForm').style.display = 'none';
        });
    }
}


//  Página de producto, aquella en la que se muestra un Producto
class PaginaProducto{
    static mostrar_pagina_producto(almacen,id,carrito){
        // 1- Ocultar el resto de sections
        Pagina.show_section('section_producto')
        // 2- Obtener atributos del Producto
        let producto_info = almacen.getProducto(id)
        // 3- Modificar
        // Mod. id
        document.getElementById('product_id').textContent = 'ID: ' + id
        // Mod. nombre
        document.getElementById('product_name').textContent = producto_info.getNombre
        // Mod. imagen
        document.getElementById('product_image').src = producto_info.getImagen
        // Mod. descripcion
        document.getElementById('product_descripcion').textContent = producto_info.getDescripcion
        // Mod. precio
        let aux_precio = almacen.getProducto(id).getPrecio
        document.getElementById('product_price0').textContent = `$${aux_precio}.00`
        document.getElementById('product_price0').style.color = 'black'
        // Atributos extra

        // 3- Funcionalidad botones
        //Botón eliminar
        let elim = document.getElementById('button_eliminar')
        elim.addEventListener('click',function(){
            if(confirm('Estás seguro de querer borrar?')){
                almacen.eliminar(id)
                console.log(almacen.getAlmacen())
                Pagina.errase('section_principal_almacen')
                PaginaPrincipal.mostrar_almacen_productos(almacen,carrito)
                carrito.eliminar(id)
            }
        })
        //Botón modificar
        let button_modificar = document.getElementById("button_modificar");  //añadido Paul
        document.getElementById('field').disabled = true;
        button_modificar.addEventListener('click', function(){
            let i = confirm("Quieres modificar el producto?");
            if(i == true){
            mostrarValoresProducto(almacen.getProducto(id)); //añadido Paul
            }
        })
            
        //Botón modificarTrue
        let btnSubmit = document.getElementById("btnSubmit");
        btnSubmit.addEventListener('click', function(){
                modificarProducto(almacen.getProducto(id))
        });
        //Botón añadir al carrito
        document.getElementById('button_cart').addEventListener('click',function(){
            carrito.insertar(id);
            console.log('Producto insertado en el carrito');
        })
        //PRINT
        console.log(`Accediendo a página producto con id: ${id}`)
    }
}


//  Pagina Carrito, aquella en la que se muestra todos los pruductos ingresados en -Carrito-
class PaginaCarrito{
    static tipos_envio = [2,3,5]
    //---Método que crea y añade al DOM los elementos necesarios para crear una página específica para el carrito
    static mostrar_carrito(almacen,carrito){
        Pagina.show_section('section_carrito')
        if(carrito.length()>0){
            let master = document.getElementById('cart_productos_mostrados')
            Pagina.errase('cart_productos_mostrados')
            //document.getElementById('cart_productos_mostrados').style.display = 'none'
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
                if(veces != null){
                let info = almacen.getProducto(producto_key)
                //---tag producto
                let producto = document.createElement('div')
                producto.className = 'producto_carrito row mb-4 d-flex justify-content-between align-items-center'
                //---imagen
                let aux_img = document.createElement('div')
                aux_img.className = 'col-md-2 col-lg-2 col-xl-2'
                let img = document.createElement('img')
                img.className = 'img-fluid rounded-3'
                img.src = info.getImagen
                img.alt = '...'
                aux_img.appendChild(img)
                producto.appendChild(aux_img)
                //---nombre
                let aux_nombre = document.createElement('div')
                aux_nombre.className = 'col-md-3 col-lg-3 col-xl-3'
                let nombre = document.createElement('h6')
                nombre.className = 'text-black mb-0'
                nombre.textContent = info.getNombre
                aux_nombre.appendChild(nombre)
                producto.appendChild(aux_nombre)
                //selector
                let master_sel = document.createElement('div')
                master_sel.className = 'col-md-3 col-lg-3 col-xl-2 d-flex'
                //-step down
                let step_down = document.createElement('button')
                step_down.className = 'btn btn-link px-2'
                step_down.textContent = '-'
                //aux_veces
                let aux_veces = veces
                step_down.addEventListener('click',function(){
                    if(veces > 1){
                        carrito.insertar(producto_key,-1)
                        console.log(carrito.getCarrito())
                        PaginaCarrito.mostrar_carrito(almacen,carrito)
                    }
                })
                let i1 = document.createElement('i')
                i1.className = 'fas fa-minus'
                step_down.appendChild(i1)
                master_sel.appendChild(step_down)
                //-form 1
                let inp = document.createElement('div')
                inp.textContent = ` ${aux_veces} `
                master_sel.appendChild(inp)
                //-step up
                let step_up = document.createElement('button')
                step_up.className = 'btn btn-link px-2'
                step_up.textContent = '+'
                step_up.addEventListener('click',function(){
                    carrito.insertar(producto_key)
                    console.log(carrito.getCarrito())
                    PaginaCarrito.mostrar_carrito(almacen,carrito)
                })
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
                if(info.getPrecio.length > 1){
                    precio.textContent = `$${info.getPrecio[0]}.00`
                    suma_total += veces*info.getPrecio[0]
                }else{
                    precio.textContent = `$${info.getPrecio}.00`
                    suma_total += veces*info.getPrecio
                }
                aux_precio.appendChild(precio)
                producto.appendChild(aux_precio)
                //borrar elemento
                let borrar = document.createElement('div')
                borrar.className = 'col-md-1 col-lg-1 col-xl-1 text-end'
                let a  = document.createElement('button')
                a.className = 'text-muted'
                a.textContent = 'X'
                a.addEventListener('click',function(){
                    carrito.eliminar(info.getId);
                    if(carrito.length() == 0){
                        PaginaPrincipal.mostrar_almacen_productos(almacen,carrito)
                    }else{
                        PaginaCarrito.mostrar_carrito(almacen,carrito)
                    }})
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
            }
            document.getElementById('resumen_items').textContent = `items ${carrito.length()}`
            document.getElementById('resumen_subtotal').textContent = `$${suma_total}.00`
            let aux_selector = 0
            document.getElementById('resumen_precio_final').textContent = `$${suma_total+PaginaCarrito.tipos_envio[document.getElementById('select_envio').value]}.00`
            document.getElementById('select_envio').onchange = function(){
                PaginaCarrito.mostrar_carrito(almacen,carrito)
            }
        }
        console.log('Desplegada página de carrito')
    }
}


//  Formulario
//--- muestra el formulario con los valores del producto a modificar
function mostrarValoresProducto(producto){
    let contactForm = document.getElementById("contactForm"),
    btnMod = document.getElementById("button_modificar");
    document.getElementById("form").reset();
    if(contactForm.style.display == 'none'){        //condicion para mostrar o cerrar el formulario
        contactForm.style.display = 'block';
        btnMod.textContent = 'Cerrar Formulario';
        console.log(producto);
    }else{
        contactForm.style.display = 'none';
        btnMod.textContent = 'Modificar';
    }
    if(document.getElementById('field').disabled == true){      //condicion para confirmar que estamos en la pagina de producto
        document.getElementById('codigo').value = producto.getId;
        document.getElementById('nombre').value = producto.getNombre;
        document.getElementById('img').value = producto.getImagen;
        document.getElementById('precio').value = producto.getPrecio;
        document.getElementById('descripcion').value = producto.getDescripcion;
    }
}

//--- modifica el producto y nos lleva a la pagina principal
function modificarProducto(productoViejo){
    document.getElementById("button_modificar").textContent = 'Modificar';
    productoViejo[1] = document.getElementById('nombre').value;; 
    productoViejo[2] = document.getElementById('img').value;; 
    productoViejo[3] = document.getElementById('precio').value;; 
    productoViejo[4] = document.getElementById('descripcion').value;; 
    console.log('producto modificado');
    PaginaPrincipal.mostrar_almacen_productos(storage, cart);
    cerrarForm();
    }

//--- muestra el formulario o lo oculta al hacer click sobre el botón de la pagina principal
function mostrarForm(){
    document.getElementById("form").reset();
    if(document.getElementById("contactForm").style.display == 'none'){
        abrirForm();
    }else{
        cerrarForm();
    }
}

function cerrarForm(){
    document.getElementById("contactForm").style.display = 'none';
    document.getElementById("btnShowForm").textContent = 'Añadir Producto';
    document.getElementById("form").reset();
}

function abrirForm(){
    document.getElementById("contactForm").style.display = 'block';
    document.getElementById("btnShowForm").textContent = 'Cerrar Formulario';
}

//--- recoge los datos del formulario y crea un nuevo Producto que se añadirá a AlmacenProductos
function crearNuevoElemento(almacen, carrito){
    id = document.getElementById('codigo').value;
    nombre = document.getElementById('nombre').value;
    imagen = document.getElementById('img').value;
    precio = document.getElementById('precio').value;
    descripcion = document.getElementById('descripcion').value;
    let productoNuevo = new Producto(id, nombre, precio, imagen, descripcion);
    almacen.insertar(productoNuevo);
    console.log(almacen);
    btnShowForm = document.getElementById("btnShowForm").textContent = 'Añadir Producto';
    PaginaPrincipal.mostrar_almacen_productos(almacen, carrito);
}
// Hasta aquí el formulario


//Variables con valores generales 
//---variable -Carrito-
let cart = new Carrito(); 
//---variable -AlmacenProductos-
let storage = new AlmacenProductos(); 

document.getElementById('carrito_master').addEventListener('click',function(){
    if(cart.length() > 0){
        PaginaCarrito.mostrar_carrito(storage,cart)
    }else{
        alert('Ups, parece que no has añadido nada aún a tu carrito\n¿Por qué no pruebas insertar algun producto?')
    }
    
})
document.getElementById('home').addEventListener('click',function(){
    PaginaPrincipal.mostrar_almacen_productos(storage, cart)
})
document.getElementById('solace_icon').addEventListener('click',function(){
    PaginaPrincipal.mostrar_almacen_productos(storage, cart)
})
PaginaPrincipal.mostrar_almacen_productos(storage,cart);


 