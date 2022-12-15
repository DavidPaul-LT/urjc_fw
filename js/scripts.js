
/*
    Class Product: Main element abstraction used to store all the page products' subelements
*/
class Product{
    static defaultSubelements = ['name','price','image','description']
    #subelements
    //---constructor
    constructor(){
        this.#subelements = new Map()
    }
    //---getSubelements: returns this.#subelements
    getSubelements(){
        return this.#subelements
    }
    //---getSubelement: returns the value associated to -name- key in subelements
    getSubelement(name){
        let aux = this.#subelements.get(name)
        if (aux != undefined){
            return aux
        }
        return -1
    }
    //---setSubelement: sets the value of -name- key to -value-
    setSubelement(name,value){
        this.#subelements.set(name,value)
    }
    //---deleteSubelement: deletes the key associated value from -subelements-
    deleteSubelement(key){
        this.#subelements.delete(key)
    }
}
/*
    Class Storage: Contains all the Product instances created
*/
class Storage{
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
    insertElement(element){
        this.#elements.set(Storage.autoIndex,element)
        Storage.autoIndex += 1
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
/*
    class PageUtils
*/
class PageUtils{
    static removeChilds(upperNode){
        let aux = document.getElementById(upperNode)
        while(aux.firstChild){
            aux.removeChild(aux.lastChild)
        }
    }
    //---
    static showOnly(sectionToShow){
        for (const section of document.getElementsByTagName("section")){
            if(section.id == sectionToShow){
                section.style.display = "block"
            }
            else{
                section.style.display = "none"
            }
        }
    }
}
/*
    class MainPage: displays the main page
*/
class MainPage{
    static displayStorage(storage){
        //---Sets display none to all the -section- whose id != "main_section"
        PageUtils.showOnly("main_section")
        let upperContainer = document.getElementById("product_container")
        //---Deletes all -product_container-'s elements
        PageUtils.removeChilds("product_container")
        //---Creates all Products' cards
        for (const [key,product] of storage.getElements()) {
            let upper = document.createElement("div")
            upper.className = "col mb-5"
            upperContainer.appendChild(upper)
            let master = document.createElement("div")
            master.className = "card h-100"
            master.addEventListener("click",function(){
                ProductPage.displayProduct(storage,key,product)
            })
            upper.appendChild(master)
            let image = document.createElement("img")
            image.className = "card-img-top"
            image.src = product.getSubelement("image")
            master.appendChild(image)
            let details = document.createElement("div")
            details.className = "card-body p-4"
            master.appendChild(details)
            let detailsContent = document.createElement("div")
            detailsContent.className = "text-center"
            details.appendChild(detailsContent)
            let name = document.createElement("h5")
            name.className = "fw-bolder"
            name.textContent = product.getSubelement("name")
            detailsContent.appendChild(name)
            let price = document.createElement("p")
            price.textContent = `$${product.getSubelement("price")}.00`
            detailsContent.appendChild(price)
            //---
            console.log("Product was showed")
        }
        console.log("All products were shown successfuly!")
    }
}
/*
    class ProductPage: display all Product's subelemnets in "product_section"
*/
class ProductPage{
    static displayProduct(storage,productID,productInfo){
        //---Hide all section != "product_section"
        PageUtils.showOnly("product_section")
        //---Errases all the extra subelements div
        PageUtils.removeChilds("extra_subelements")
        //---gets the element from the map and displays its subelements
        let aux = productInfo.getSubelements().keys()
        document.getElementById("product_id").textContent = "ID: " + productID
        for (const subelement of aux){
            if (Product.defaultSubelements.includes(subelement)){
                if (subelement == "price"){
                    document.getElementById("product_price").textContent = `$${productInfo.getSubelement("price")}.00`
                }
                else if (subelement == "image"){
                    document.getElementById("product_image").src = productInfo.getSubelement("image")
                }
                else{
                    document.getElementById(`product_${subelement}`).textContent = productInfo.getSubelement(subelement)
                }
            }else{
                //---Creates and destroys -p- type element wich contains extra subelemnets info
                let p = document.createElement("p")
                p.textContent = productInfo.getSubelement(subelement)
                document.getElementById("extra_subelements").appendChild(p)
            }
        }
        console.log("All product's subelements were loaded")
        let prodButtons = document.getElementById("product_buttons")
        PageUtils.removeChilds("product_buttons")
        let quantity = document.createElement("input")
        quantity.id = "inputQuantity"
        quantity.className = "form-control text-center me-3"
        quantity.type = "num"
        quantity.value = "1"
        quantity.style = "max-width: 3rem"
        prodButtons.appendChild(quantity)
        for (const element_buttons of ["add_to_cart","add_subelement","modify_subelements","delete_element"]) {
            let button = document.createElement("button")
            button.className = "btn btn-outline-dark flex-shrink-0"
            button.id = element_buttons
            button.type = "button"
            button.textContent = element_buttons
            switch (element_buttons) {
                case "add_to_cart":
                    button.addEventListener("click",function(){
                        alert("Cart not implemented yet")
                    })
                    break;
                case "add_subelement":
                    button.addEventListener("click",function(){
                        alert("Add subelement form not implemneted yed")
                    })
                    break;
                case "modify_subelements":
                    button.addEventListener("click",function(){
                        Form.displayForm(storage,productID)
                    })
                    break;
                case "delete_element":
                    button.addEventListener("click",function(){
                        storage.deleteElement(productID)
                        MainPage.displayStorage(storage)
                        console.log("Product deleted")
                    })
                    break;
                default:
                    break;
            }
            prodButtons.appendChild(button)
        }
    }
}
/*
    class Form: Form utils
*/
class Form{
    static displayForm(storage,productID=null){
        let aux = document.getElementById("form_section").style.display
        if(aux == "block"){
            document.getElementById("form_section").style.display = "none"
            console.log("Form hidden")
        }else{
            console.log("Form showed")
            document.getElementById("form_section").style.display = "block"
            Form.showFormInputs(storage,productID)
        }
    }
    static showFormInputs(storage,productID=null){
        Form.showFormInputs(storage,productID)
    }
    static showFormInputs(storage,productID=null){
        PageUtils.removeChilds("submit_button_parent")
        let button = document.createElement("div")
        document.getElementById("submit_button_parent").appendChild(button)
        button.className = "btnContact bg-info"
        button.textContent = "Submit"
        //---Insert form
        if(productID==null){
            for (const defSubelement of Product.defaultSubelements) {
                document.getElementById(`form_${defSubelement}`).value = ""
            }
            button.addEventListener("click",function(){
                Form.saveData(storage)
            })
        }
        //---Modification form
        else{
            for (const [subName,subValue] of storage.getElement(productID).getSubelements()){
                document.getElementById(`form_${subName}`).value = subValue
            }
            button.addEventListener("click",function(){
                Form.saveData(storage,productID)
            })
        }
    }
    static saveData(storage,deletePred=null){
        let newProduct = new Product()
        for (const inputField of document.getElementsByClassName("input_field")){
            console.log(inputField.id.substring(5))
            newProduct.setSubelement(inputField.id.substring(5),inputField.value)
            console.log("Atribute loaded")
        }
        storage.insertElement(newProduct)
        if(deletePred != null){
            storage.deleteElement(deletePred)
        }
        console.log("Storage modified")
        document.getElementById("form_section").style.display = "block"
        MainPage.displayStorage(storage)
    }
}
//---TESTS
let storageSim = new Storage();
MainPage.displayStorage(storageSim);
//storageSim.getElement(1234).setSubelement("abrigo","ABRIGO NUEVO")
//---AJUSTES INDIVIDUALES
document.getElementById("brand").addEventListener("click",function(){
    MainPage.displayStorage(storageSim);
})

document.getElementById("form_button").addEventListener("click",function(){
    Form.displayForm(storageSim);
})

