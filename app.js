const PRECIO = 200;

let resumen = document.getElementById("resumen");
resumen.addEventListener("click", calcularTotal);

function calcularTotal(){
    let cantidad = document.getElementById("cantidad").value;
    let condicio = document.getElementById("categoria");
    let total;
    if(categoria.value === "1"){
        total = (cantidad * PRECIO) * 0.2;
    }else if(categoria.value === "2"){
        total = (cantidad * PRECIO) * 0.5;
    }else if(categoria.value === "3"){
        total = (cantidad * PRECIO) * 0.85;
    }
    let totalPagar = document.getElementById("totalPagar");
    return totalPagar.innerText = `Total a Pagar: $${total}`;
}

let borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarFormulario);

function borrarFormulario(){
    cantidad.value = 0;
    totalPagar.innerText = `Total a Pagar: $0`;
}