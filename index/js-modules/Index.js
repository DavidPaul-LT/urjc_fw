import {Producto} from './Producto.js';
import {AlmacenProductos} from './AlmacenProductos.js'
import {Carrito} from './Carrito.js'
import {Pagina,PaginaPrincipal,PaginaProducto,PaginaCarrito} from './Paginas.js';


//---utils
let storage = new AlmacenProductos();
let cart = new Carrito();
console.log('Version modularizada')
//---load page
PaginaPrincipal.mostrar_carrousel();
PaginaPrincipal.mostrar_almacen_productos(storage);