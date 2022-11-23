//Clase producto (faltan los metodos)

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
}

//Clase AlmacenProductos

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
}



let paginaprincipal = document.getElementById('paginaprincipal');
function pproducto (){

    paginaprincipal.innerHTML = `<p id='botonvlover' >Pagina nueva</p>`;
}

let producto10 = 'Sudadera';

let contenedor = document.getElementById('contenedor');
function añadir9 (){
    const elemento9 = document.createElement('div');
    elemento9.innerHTML = `<div class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    <!-- Product image-->
    <img class="card-img-top" src="../product/product_Images/1236.jpg" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
      <div class="text-center">
        <!-- Product name-->
        <h5 class="fw-bolder">${producto10}</h5>
        <!-- Product reviews-->
        <form>
          <span class="fa fa-star" onclick="calificar(this)" style="cursor: pointer; color: black;" id="c1estrella"></span>
          <span class="fa fa-star" onclick="calificar(this)" style="cursor: pointer; color: black;" id="c2estrella"></span>
          <span class="fa fa-star" onclick="calificar(this)" style="cursor: pointer; color: black;" id="c3estrella"></span>
          <span class="fa fa-star" onclick="calificar(this)" style="cursor: pointer; color: black;" id="c4estrella"></span>
          <span class="fa fa-star" onclick="calificar(this)" style="cursor: pointer; color: black;" id="c5estrella"></span>
        </form>
        <!-- Product price-->
        <span class="text-muted text-decoration-line-through">$45.00</span>
        $40.00
      </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
    </div>
  </div>`
    contenedor.appendChild(elemento9);
}

/*
let boton5 = document.getElementById('boton5');
boton5.addEventListener('click', borrar);*/


let boton7 = document.getElementById('boton7');
boton7.addEventListener('click', añadir9);


let boton8 = document.getElementById('boton8');
boton8.addEventListener('click', pproducto);
console.log(boton8);
let botonvolver = document.getElementById('botonvolver');


//pruebas localStorage

localStorage.setItem('pprincipal', JSON.stringify(paginaprincipal));

let prueba = localStorage.getItem('pprincipal');

console.log(prueba);