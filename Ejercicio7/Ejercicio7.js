document.getElementById('calculoEuclides').addEventListener("click",divisionEuclides);
function divisionEuclides() {
    
    let dividendo = Number(document.getElementById('dividendo').value);
    let divisor = Number(document.getElementById('divisor').value);
    let cociente = 0;


    while (dividendo>=divisor){

       dividendo -= divisor;
       cociente++;      

    }

    document.getElementById('resultado').innerHTML = "El cociente es <strong>"+ cociente +"</strong> y el resto es <strong>"+ dividendo +"</strong>.";
}
