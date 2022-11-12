
function calificar(item){
    let primero = item.id[0]; //captura el primer caracter;
    let contador = item.id[1];
    let nombre = item.id.substring(2); //captura todo menos el primer caracter

    for(let i = 1; i < 6; i++){
        if(i > contador){
            document.getElementById((primero+i)+nombre).style.color = "black";
        } else {
            document.getElementById((primero+i)+nombre).style.color = "orange";
        }
    }
}