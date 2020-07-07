var colaInputs = [];
var digito = 0;

function createOperando(element){ 
    if ( document.getElementById("panel").innerHTML ===  "ERROR"){ 
        document.getElementById("panel").innerHTML = ""; 
    }

    document.getElementById("panel").innerText  += element;
    digito += element;
}

function opMat(element){
    if (digito !== 0 && digito !== "-") { // suma, division, multiplicacion
        digito = parseFloat(digito);
        addCola(digito);
        addCola(element);
        document.getElementById("panel").innerHTML +=element;
        digito = 0;
    }

    if (element == "-"  && isNaN(colaInputs[0]) && digito !== "-"){ //resta o número negativo
        digito ="-";
        document.getElementById("panel").innerHTML = "-";
    }

}


function addCola(element){
    colaInputs.push(element);
}


function resetVariables (){
    colaInputs = [];
    digito = 0;
    resultado = 0;
    document.getElementById("panel").innerHTML = "";
}

function calcular(colaInputs){
    if (digito !==0) {
        digito = parseFloat(digito);
        addCola(digito);
    }

    var resultado = colaInputs[0];
    var dividedByZero = 0;

    for (  var i = 2; i < colaInputs.length; i= i+2) {

        switch (colaInputs[i-1]) {
            case '+':
                resultado+= colaInputs[i];
                break;
            case '-':
                resultado-= colaInputs[i];
                break;
            case '/':    if (colaInputs[i] === 0)   dividedByZero = 1;
                    else      resultado = resultado / colaInputs[i];

                break;
            case'*': resultado = resultado * colaInputs[i];
                break;
        }

    }

    resultado = parseFloat(resultado);
    if ( dividedByZero === 1) { 
        resetVariables();
        document.getElementById("panel").innerHTML =  "ERROR";
    }
    else{
        document.getElementById("panel").innerHTML =  resultado ;
        digito = resultado;
        colaInputs= [];
    }


}

// alert(`operando1: ${operando1} operador: ${operador} operando2: ${operando2}`);