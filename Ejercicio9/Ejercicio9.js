

 document.getElementById('buscaNombre').addEventListener("click", buscarNombre);
function buscarNombre() {
    const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let mes = Number(document.getElementById("mes").value);

    let numeroMes = mes - 1;


    /*if (numeroMes == -1) {
        respuesta = "No has elegido número de mes";
    } else {
        respuesta = Meses[numeroMes];
    }*/

    let respuesta = (numeroMes == -1) ? "No has elegido número de mes" : Meses[numeroMes];

    document.getElementById("nombreMes").innerHTML = respuesta;
    
}

function Mycolor() {

    if(document.getElementById('color').style.backgroundColor == "white"){

        document.getElementById('color').style.backgroundColor = "#0d99d7";
        document.getElementById('boton').innerHTML="Modo claro";

    } else{

        document.getElementById('color').style.backgroundColor = "white";
        document.getElementById('boton').innerHTML="Modo colorido";
    }

}