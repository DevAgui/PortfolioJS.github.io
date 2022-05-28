/* Javascript para el ejercicio 2 del portfolio */

// indicamos al principio del javascrip,qué evento dispara qué función 
// utilizando el árbol DOM
//document.getElementById("calcular").onclick() = *** aqui iria la funcion ***
// esto se hace cuando la función es muy escueta

// segunda forma de hacerlo (y más correcta), con addEventListener

document.getElementById("calcular").addEventListener("click", calcular);
function calcular(){

    // Obtenemos los valores de los inputs

    const PI = 3.141592653589793; // no sería necesario declararlo como constante
    let radio = Number(document.getElementById('radio').value);

    // realizar calculos del area
    let circunferencia = 2 * Math.PI * radio;
    let circulo = Math.PI * Math.pow(radio, 2);
    let esfera = Math.PI * Math.pow(radio, 3);



    // mostrar resultados y refactorizar el código para que no se repita el código
    // primer nodo li creado y enganchado al árbol original


    // 1 - crear el nodo li
    let nuevoNodo1 = document.createElement("li");
    let nuevoNodo2 = document.createElement("li");
    let nuevoNodo3 = document.createElement("li");
    let verdadero = true;
   

    // 2 - meter contenido en el nodo : el resultado
    nuevoNodo1.innerHTML = "La longitud de la circunferencia es: " + circunferencia.toFixed(2);
    nuevoNodo2.innerHTML = "El area del circulo es: " + circulo.toFixed(2);
    nuevoNodo3.innerHTML = "El volumen de la esfera es: " + esfera.toFixed(2);

    // 3- enganchar el nodo en la lista padre
    while(verdadero){
        document.getElementById("resultados").appendChild(nuevoNodo1);
        document.getElementById("resultados").appendChild(nuevoNodo2);
        document.getElementById("resultados").appendChild(nuevoNodo3);
        verdadero = false;

    }
    document.getElementById("calcular").removeEventListener("click", calcular);


}   