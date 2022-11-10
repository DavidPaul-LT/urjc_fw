class Carrito{
    #elementos
    //---Constructor: crea un nuevo hash map -elementos- que contendrá elementos de tipo Producto
    constructor(){
        this.#elementos = new Map()
    }
    //---insertar(obj Producto): inserta en el hash map -elementos- un nuevo elemento
    //  __Add-to-cart__ on-click parámetro de función
    insertar(elemento){
        //--Pendiente: exigir que el usuario de una talla para insertar else alert()
        let identificador = elemento.getId();
        //---Añade un nuevo elemento a -elementos-
        if (this.#elementos.get(identificador)==undefined){
            this.#elementos.set(identificador,[elemento,1])
        }
        //---Modifica las repeticiones de un elemento
        else{
            this.#elementos.set(identificador,[elemento,this.#elementos.get(identificador)[1]+1])
        }
    }
    //---eliminar(obj Producto): borra todas las repeticiones de un producto dentro de -elementos-
    //  __Remove-from-cart on click button submit form checklist of Product(s)
    eliminar(elemento){
        this.#elementos.set(elemento.getId(),undefined)
    }
    //--- Debería desplegar el carrito en la página en la que se esté: icono-carrito onclick(obj.mostarCarrito())
    mostarCarrito(){
        for (const i of this.#elementos) {
            document.write(i)
        }
    }
    //---Show(): returns all content-array's elements
    show(){
        return this.#elementos
    }
}

//---TEST---//
let p1 = new Producto('calcetines',15,'verde',null);
let p2 = new Producto('pantalones',30,'negro',null);
let p3 = new Producto('sudadera',30,'azul',null);

let carro = new Carrito();
carro.insertar(p1);
carro.insertar(p2);
carro.insertar(p3);
//console.log(carro.show());
carro.mostarCarrito();