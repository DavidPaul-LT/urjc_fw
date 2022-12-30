export class Form{
    static displayForm(storage,productID=null){
        let aux = document.getElementById("form_section").style.display
        if(aux == "block"){
            document.getElementById("form_section").style.display = "none"
            document.getElementById("form_button").textContent = "añadir producto";
            console.log("Form hidden")
        }else{
            document.getElementById("form_section").style.display = "block"
            document.getElementById("form_button").textContent = "cerrar formulario";
            Form.showFormInputs(storage,productID)
            console.log("Form showed")
        }
    }
     static showFormInputs(storage,productID=null){
        Form.showFormInputs(storage,productID)
    }
    static showFormInputs(storage,productID=null){
        PageUtils.removeChilds("form_content")
        //PageUtils.removeChilds("submit_button_parent")//elm
        let auxButton = document.createElement("div")
        auxButton.className = "form-group py-3"
        let addButton = document.createElement("div");
        addButton.className = "btnContact bg-info";
        addButton.textContent = "+";
        let button = document.createElement("div")
        button.className = "btnContact bg-info"
        button.textContent = "Submit"
        //---Insert form
        if(productID==null){
            for (const defSubelement of Product.defaultSubelements){
                let atrib = document.createElement("div")
                atrib.className = "form-group py-1"
                let inp
                if(defSubelement != "description"){
                    inp = document.createElement("input")
                    inp.type = "text"
                }else{
                    inp = document.createElement("textarea")
                    inp.name = "txtMsg"
                }
                inp.className = "input_field form-control"
                inp.id = `form_${defSubelement}`
                inp.value = ""
                inp.placeholder = defSubelement
                atrib.appendChild(inp)
                document.getElementById("form_content").appendChild(atrib)
            }
            button.addEventListener("click",function(){
                Form.saveData(storage)
            })
        }
        //---Modification form
        else{
            let cantidadAtributos = 0;
            for (const [subName,subValue] of storage.getElement(productID).getSubelements()){
                if(subValue == ""){
                    storage.getElement(productID).deleteSubelement(subName);
                } else {
                    let atrib = document.createElement("div")
                    atrib.className = "form-group py-1"
                    let inp
                    inp = document.createElement("input")
                    inp.type = "text"
                    inp.className = "input_field form-control"
                    inp.id = subName
                    inp.value = subValue
                    inp.placeholder = subName
                    /*if(inp.value == ""){
                        storage.getElement(productID).deleteSubelement(subName);
                    }*/

                    atrib.appendChild(inp)
                    //atrib.appendChild(deleteSubElm)
                    document.getElementById("form_content").appendChild(atrib)
                }
            }
            addButton.addEventListener("click",function(){
                let newRow = document.createElement("div");
                newRow.className = "form-group py-1 input-group";

                let newAtrib = document.createElement("input");
                newAtrib.type = "text";
                newAtrib.className = "AtribName form-control";
                newAtrib.placeholder = "sub elemento";
                newAtrib.id = "newAN" + cantidadAtributos;
                let newValue = document.createElement("input");
                newValue.type = "text";
                newValue.className = "AtribValue form-control 25";
                newValue.placeholder = "valor";
                newValue.id = "newVN" + cantidadAtributos;
                cantidadAtributos += 1;

                newRow.appendChild(newAtrib);
                newRow.appendChild(newValue);
                document.getElementById("form_content").insertBefore(newRow, auxButton);
            })
            button.addEventListener("click",function(){
                Form.saveData(storage,productID)
            })
            document.getElementById("form_content").appendChild(addButton);
            console.log(storage.getElement(productID).getSubelements());
        }
        
        auxButton.appendChild(button)
        document.getElementById("form_content").appendChild(auxButton)
        //document.getElementById("submit_button_parent").appendChild(button)//elm
    } 
    static saveData(storage,deletePred=null){
        if(!deletePred){
            let newProduct = new Product()
            for (const inputField of document.getElementsByClassName("input_field")){
                console.log(inputField.id.substring(0))
                newProduct.setSubelement(inputField.id.substring(5),inputField.value)
                console.log("Atribute loaded")
            }
            storage.insertElement(newProduct,deletePred)
        } else {
            for(const [subName,subValue] of storage.getElement(deletePred).getSubelements()){
                storage.getElement(deletePred).setSubelement(document.getElementById(`${subName}`).placeholder,document.getElementById(`${subName}`).value)
            }
            let maximo = document.getElementsByClassName("AtribName").length;
            let i = 0;
            while(i < maximo){
                if(document.getElementById(`newAN${maximo - 1}`).value != ""){
                    storage.getElement(deletePred).setSubelement(document.getElementById(`newAN${i}`).value, document.getElementById(`newVN${i}`).value);
                }
                i++;
            }
        }
        console.log("Storage modified")
        document.getElementById("form_section").style.display = "block"
    }
}

let formulario = new Form();
