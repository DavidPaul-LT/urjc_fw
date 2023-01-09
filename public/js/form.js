/*
    insertNewSubelement():
        Add subelement button: inserts two new inputs into the form each time is pressed.
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
    }
    inp.placeholder = "name";
    inp2.placeholder = "value";
    inp.onchange = function() {
        inp2.name = inp.value;
    }
    document.getElementById("form_content").appendChild(subelement);
}