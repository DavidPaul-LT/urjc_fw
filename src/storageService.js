//--- Storage map contains all the product ocurrences
let storage = new Map();
let startingID = 1234;
//--- Returns all the elements contained in -storage- map
export function getStorage(){
    return [...storage.values()]
}
//--- Adds a new element into -storage- map
export function insertElement(element,customId=undefined){
    if(customId != undefined){
        storage.set(customId, element);
    }else{
        let id = startingID++;
        element.id = id.toString();
        storage.set(element.id, element);
    }
}
//--- Removes an element by its ID from -storage- map
export function removeElement(elementID){
    storage.delete(elementID);
}
//--- Returns the value of -elementID- key from -storage- map
export function getElement(elementID){
    return storage.get(elementID);
}
//--- Return subelements
export function getSubElements(elementID){
    let subelements = [];
    let subElement = {};
    Object.entries(storage.get(elementID)).map(entry => {
        const[key, value] = entry;
        if(true){
            subElement = {
                'name': key,
                'value': value,
                'id': elementID
            }
            subelements[subelements.length] = subElement;
        }
    })
    return subelements;
}
//--- Returns the default subelements
export function getDefaultSubElements(){
    let subelements = [];
    let subElement = {};
    let defaultSubelements = {name: '', price: '', image: '', description: ''};
    Object.entries(defaultSubelements).map(entry => {
        const[key, value] = entry;
        subElement = {
            'name': key,
            'value': value
        }
        subelements[subelements.length] = subElement;
    })
    return subelements;
}
//--- Discards a product's default attributes
export function discartDefaultAtt(productID){
    let subElements = Object.assign({}, getElement(productID));
    let subi = [];
    for (let key in subElements) {
        if (["name","price","image","description","id"].includes(key)){
            delete subElements[key];
        }else{
            subi.push(subElements[key]);
        }
    }
    return subi;
}
//--- Generates an array with n number of random products from storage
export function relatedProducts(n=4){
    let auxStorage = getStorage();
    let relatedProducts = []
    for (let i = 0; i < n; i++){
        const randomIndex = Math.floor(Math.random() * auxStorage.length);
        let randomElement = auxStorage.slice(randomIndex, randomIndex + 1)[0];
        relatedProducts.push(randomElement);
    }
    return relatedProducts;
}
/*
    DEFAULT ELEMENT COLLECTION
*/
insertElement({name: 'Camisa de lana elástica', price: 60, image: '/assets/product/1234.jpg', description: 'Esta camisa tiene un aspecto de punto clásico y versátil, perfecta para el otoño. Fabricada con un tejido súper suave y elástico, proporciona un ajuste natural al cuerpo.', tallas: "S/M/L"}); 
insertElement({name: 'Polo de alto rendimiento', price: 40, image: '/assets/product/1235.jpg', description: 'Este polo supersuave es ideal para el golf, los viajes o las citas nocturnas. Nuestro tejido Flowknit, increíblemente suave, no solo es sostenible, sino que facilita la absorción de la humedad y evita el mal olor, ofreciendo la máxima versatilidad. Nuestro Flowknit está fabricado con hilo de poliéster Global Recycle Standard, que desvía y recicla los plásticos destinados a los vertederos o al océano, para que puedas sentirte y verte bien con lo que llevas puesto.'});
insertElement({name: 'Pantalón de alto rendimiento', price: 45, image: '/assets/product/1236.jpg', description: 'Nuestros joggers de alto rendimiento favoritos tienen un ajuste fino pero relajado siendo lo suficientemente elásticos para conseguir la máxima comodidad. Los gruesos cordones, los tobillos con puños y el diseño de dos bolsillos ofrecen una sensación de calidad.'});
insertElement({name: 'Pantalón corto de alto rendimiento', price: 35, image: '/assets/product/1237.jpg', description: 'Puede que sean cortos, pero consiguen evitar la humedad, son antimicrobianos, tienen un bolsillo para el móvil en la parte delantera y un bolsillo trasero con cremallera. Perfecto para entrenar, viajar o descansar.'});
insertElement({name: 'Jersey de cachemira mongola con cuello redondo', price: 90, image: '/assets/product/1238.jpg', description: 'El clásico jersey de cachemira es intemporal. Ligero, suave y acogedor, perfecto para cualquier época del año y ocasión. Nuestra cachemira de calidad es increíblemente duradera y tres veces más cálida que la lana, y se obtiene de forma sostenible y ética.'});
insertElement({name: 'Chaqueta camisera 100% lana merina', price: 120, image: '/assets/product/1239.jpg', description: 'Nuestra chaqueta camisera de lana merina 100% es perfecta cuando las temperaturas empiezan a bajar. Confeccionada por expertos con lana merina hervida, esta chaqueta camisera tiene la silueta de una camisa, pero proporciona la calidez de una chaqueta. Con un aspecto intencionadamente sobredimensionado, es perfecta para vestirse a capas y se puede poner sobre cualquier prenda con facilidad.'});
insertElement({name: 'Pantalón acampanado Ultra-Stretch', price: 50, image: '/assets/product/1240.jpg', description: 'Si los pantalones de trabajo y los de yoga tuvieran un hijo, sería éste. Este pantalón es de punto doble y muy elástico y además queda fabuloso con zapatos planos o con zapatillas de deporte.'});
insertElement({name: 'Leggings de alto rendimiento ultra suave', price: 40, image: '/assets/product/1241.jpg', description: 'Nuestros leggings de alto rendimiento tienen todo lo que necesitan para convertirse en tus pantalones de entrenamiento favoritos, sin comprometer la apariencia. Cuentan con un tejido de secado rápido, que absorbe la humedad y que es antimicrobiano, con la elasticidad óptima para que puedas hacer sentadillas sin preocupaciones.'});
insertElement({name: 'Vestido camisero de seda elástica', price: 70, image: '/assets/product/1242.jpg', description: 'Nuestro vestido camisero de seda es elegante, aerodinámico y se anuda a la cintura sin esfuerzo. Un estilo versátil para el día y la noche, para reuniones y copas. Además, la fibra de seda contiene 18 tipos de aminoácidos que la hacen increíble para nutrir la piel, hipoalergénica y termorreguladora por naturaleza para ayudar a mantener la temperatura corporal.'});
insertElement({name: 'Chaqueta Chore Organic Comfort', price: 50, image: '/assets/product/1243.jpg', description: 'La sarga elástica orgánica supersuave y los bolsillos laterales ocultos harán que uses esta chaqueta todos los días de la semana. Con un corte estándar, es perfecta para llevar encima de una sudadera con capucha o simplemente con una camiseta.'});