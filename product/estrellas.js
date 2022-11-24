
function calificar(item){
    let primero = item.id[0]; //captura el primer caracter;
    let contador = item.id[1]; //captura el segundo caracter
    let nombre = item.id.substring(2); //captura todo menos el primer y segundo caracter

    // el let i del for, recorre cada estrella, como son 5 pues por eso se para en 6 (6-1 = 5) lo que se consigue con el for es que cambia cuando aprietas otro número de estrellas. 
    for(let i = 1; i < 6; i++){
        if(i > contador){
            document.getElementById((primero+i)+nombre).style.color = "black";
        } else {
            document.getElementById((primero+i)+nombre).style.color = "orange";
        }
    }
}