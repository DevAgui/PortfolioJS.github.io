document.getElementById('mayusculaMinuscula').addEventListener("click",mayusculaMinuscula);
function mayusculaMinuscula() {

    
    let cadena = document.getElementById('texto').value;
    let resultado ="" ;
    

    
    // comprobación del texto
    if(cadena === cadena.toUpperCase()) {
      resultado += " en mayúsculas";
    }
    else if(cadena === cadena.toLowerCase()) {
      resultado += " en minúsculas";
    }
    else {
      resultado += " en mayúsculas y minúsculas";
    }
  
    return document.getElementById('resultado').innerHTML = "La cadena de texto está escrita " + resultado + ".";
    
  }