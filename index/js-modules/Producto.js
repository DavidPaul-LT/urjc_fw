/* class Producto:
    Clase (pseudo)inmutable que sirve como contenedor de los atributos de un determinado producto de la página
*/
export class Producto{
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
    //--- Método getter del atributo -id-
    getId{
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
}