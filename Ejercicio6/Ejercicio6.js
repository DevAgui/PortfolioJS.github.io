document.getElementById('palindromo').addEventListener("click",esPalindromo);
function esPalindromo() {
    let cadena = document.getElementById('cadena').value;
    let lenCadena = cadena.length;
    // eliminamos los espacios en blanco y mayusculas /minusculas
    cadena = cadena.toLowerCase();
	var caracteres;
	var cadenaEspaciada = "";
	var cadenaVolteada = "";

    for (i = 0; i < lenCadena; i++) {
		caracteres = cadena.charAt(i);
                //Si el caracter es un espacio
		if (caracteres != " ") {
			cadenaEspaciada += caracteres;
			cadenaVolteada = caracteres + cadenaVolteada;
		}
	}
    if (cadenaEspaciada == cadenaVolteada) {
            document.getElementById("resultado").innerHTML = "La cadena  <strong> SI </strong> es Palindromo.";
        
    } else {
    document.getElementById("resultado").innerHTML = ( "La cadena <strong> NO </strong> es Palindromo.");
        
}
}
