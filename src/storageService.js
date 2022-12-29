import { Product } from "./productService.js"
/*
    Class Storage: Contains all the Product instances created
*/
export class Storage{ 
    static autoIndex = 1234
    static defaultProducts = [
        ['Camisa de lana elástica',60,'assets/product/1234.jpg','Esta camisa tiene un aspecto de punto clásico y versátil, perfecta para el otoño. Fabricada con un tejido súper suave y elástico, proporciona un ajuste natural al cuerpo.'],
        ['Polo de alto rendimiento',40,'assets/product/1235.jpg','Este polo supersuave es ideal para el golf, los viajes o las citas nocturnas. Nuestro tejido Flowknit, increíblemente suave, no solo es sostenible, sino que facilita la absorción de la humedad y evita el mal olor, ofreciendo la máxima versatilidad. Nuestro Flowknit está fabricado con hilo de poliéster Global Recycle Standard, que desvía y recicla los plásticos destinados a los vertederos o al océano, para que puedas sentirte y verte bien con lo que llevas puesto.'],
        ['Pantalón de alto rendimiento',45,'assets/product/1236.jpg','Nuestros joggers de alto rendimiento favoritos tienen un ajuste fino pero relajado siendo lo suficientemente elásticos para conseguir la máxima comodidad. Los gruesos cordones, los tobillos con puños y el diseño de dos bolsillos ofrecen una sensación de calidad.'],
        ['Pantalón corto de alto rendimiento',35,'assets/product/1237.jpg','Puede que sean cortos, pero consiguen evitar la humedad, son antimicrobianos, tienen un bolsillo para el móvil en la parte delantera y un bolsillo trasero con cremallera. Perfecto para entrenar, viajar o descansar.'],
        ['Jersey de cachemira mongola con cuello redondo',90,'assets/product/1238.jpg','El clásico jersey de cachemira es intemporal. Ligero, suave y acogedor, perfecto para cualquier época del año y ocasión. Nuestra cachemira de calidad es increíblemente duradera y tres veces más cálida que la lana, y se obtiene de forma sostenible y ética.'],
        ['Chaqueta camisera 100% lana merina',120,'assets/product/1239.jpg','Nuestra chaqueta camisera de lana merina 100% es perfecta cuando las temperaturas empiezan a bajar. Confeccionada por expertos con lana merina hervida, esta chaqueta camisera tiene la silueta de una camisa, pero proporciona la calidez de una chaqueta. Con un aspecto intencionadamente sobredimensionado, es perfecta para vestirse a capas y se puede poner sobre cualquier prenda con facilidad.'],
        ['Pantalón acampanado Ultra-Stretch',50,'assets/product/1240.jpg','Si los pantalones de trabajo y los de yoga tuvieran un hijo, sería éste. Este pantalón es de punto doble y muy elástico y además queda fabuloso con zapatos planos o con zapatillas de deporte.'],
        ['Leggings de alto rendimiento ultra suave',40,'assets/product/1241.jpg','Nuestros leggings de alto rendimiento tienen todo lo que necesitan para convertirse en tus pantalones de entrenamiento favoritos, sin comprometer la apariencia. Cuentan con un tejido de secado rápido, que absorbe la humedad y que es antimicrobiano, con la elasticidad óptima para que puedas hacer sentadillas sin preocupaciones.']
    ]
    #elements
    //---constructor
    constructor(useDefaultValues=true){
        this.#elements = new Map()
        if(useDefaultValues){
            for (const iterator of Storage.defaultProducts){
                let auxProduct = new Product()
                for (let index = 0; index < Product.defaultSubelements.length; index++) {
                    auxProduct.setSubelement(Product.defaultSubelements[index],iterator[index])
                }
                this.insertElement(auxProduct)
            }
        }
    }
    //---getElements: returns all the elemnts contained in elements
    getElements(){
        return this.#elements
    }
    //---insertElement: sets to -autoIndex- key the -element- value
    insertElement(element,pos=null){
        if(pos==null){
            this.#elements.set(Storage.autoIndex,element)
            Storage.autoIndex += 1
        }else{
            this.#elements.set(pos,element)
        }
        
    }
    //---getElement: return the value contained in -index- key position
    getElement(index){
        let aux = this.#elements.get(index)
        if(aux != undefined){
            return aux
        }
        return -1
    }
    //---deleteElement: deletes a determined key from -elements-
    deleteElement(key){
        this.#elements.delete(key)
    }
}
//---DINAMIC
export let storage = new Storage();