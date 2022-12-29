/*
    Class Product: Main element abstraction used to store all the page products' subelements
*/
export class Product{
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