/*
    insertNewSubelement():
        Add subelement button inserts two new inputs into form element each time is pressed.
*/
function insertNewSubelement(){
    let subelement, inp, inp2;
    subelement = document.createElement("div");
    subelement.className = "form-group py-1 d-flex flex-row"
    inp = document.createElement("input");
    inp2 = document.createElement("input");
    for (let input of [inp, inp2]){
        input.type = "text";
        input.className = "input_field form-control";
        subelement.appendChild(input);
        console.log(input);
    }
    inp.placeholder = "name";
    inp2.placeholder = "value";
    inp2.name = inp.value;
    console.log(inp2.name);
    document.getElementById("form_content").appendChild(subelement);
}