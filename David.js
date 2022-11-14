
// No creo que funcione solo con esto, pero la lógica será algo así, supongo
function PagExtra(){
    let PaginaPrincipal = document.getElementById("PaginaPrincipal");
    localStorage.PagMain = JSON.stringify(PaginaPrincipal);
    PaginaPrincipal.remove()
}

function PagMain(){
    document.body.appendChild(JSON.parse(localStorage.PagMain));
}


