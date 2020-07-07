var operando = 0;
var operando1 = '';
var operando2 = '';
var acumulador = 0;
var resultado = '';
var operador = '';

function createOperando(element){
    let operando_temp = document.getElementById("resultado").innerText;
    switch (element){
        case "uno":
            operando_temp = operando_temp.concat('1');
            break;

        case "dos":
            operando_temp = operando_temp.concat('2');
            break;

        case "tres":
            operando_temp = operando_temp.concat('3');
            break;

        case "cuatro":
            operando_temp = operando_temp.concat('4');
            break;

        case "cinco":
            operando_temp = operando_temp.concat('5');
            break;

        case "seis":
            operando_temp = operando_temp.concat('6');
            break;

        case "siete":
            operando_temp = operando_temp.concat('7');
            break;

        case "ocho":
            operando_temp = operando_temp.concat('8');
            break;

        case "nueve":
            operando_temp = operando_temp.concat('9');
            break;

        case "cero":
            operando_temp = operando_temp.concat('0');
            break;
    }
    
    document.getElementById("resultado").innerText  = operando_temp;
    operando = parseInt(operando_temp);
    console.log(`operando1: ${operando}`);
}

function operacionMat(element){
    switch (element){
        case "+":
            document.getElementById("resultado").innerText = document.getElementById("resultado").innerText + '\xa0' + '+' + '\xa0';
            break;

        case "-":
            document.getElementById("resultado").innerText = document.getElementById("resultado").innerText + '\xa0' + '-' + '\xa0';
            break;

        case "*":
            document.getElementById("resultado").innerText = document.getElementById("resultado").innerText + '\xa0' + '*' + '\xa0';
            break;

        case "/":
            document.getElementById("resultado").innerText = document.getElementById("resultado").innerText + '\xa0' + '/' + '\xa0';
            break;
    }
}


function entregarResultado(){
    let separable = document.getElementById("resultado").innerText;
    for (i=0; i>separable.length; )

    document.getElementById("resultado").innerText = eval(document.getElementById("resultado").innerText);
    // alert(`resultado: ${acumulador}`);
    // switch (operador){
    //     case "+":
    //         resultado = parseInt(operando1) +  parseInt(operando2);
    //         document.getElementById("resultado").innerText  = resultado;
    //         break;

    //     case "-":
    //         resultado = parseInt(operando1) -  parseInt(operando2);
    //         document.getElementById("resultado").innerText  = resultado;
    //         break;

    //     case "*":
    //         resultado = parseInt(operando1) *  parseInt(operando2);
    //         document.getElementById("resultado").innerText  = resultado;
    //         break;

    //     case "/":
    //         resultado = parseInt(operando1) /  parseInt(operando2);
    //         document.getElementById("resultado").innerText  = resultado;
    //         break;
    //     default:
    //         alert(`Ingrese dos operandos y una operación matématica`);
    //     break;
    // }
}

function resetVariables (){
    operando1 = '';
    operando2 = '';
    resultado = '';
    operador = '';
    document.getElementById("resultado").innerText = '';
}



// alert(`operando1: ${operando1} operador: ${operador} operando2: ${operando2}`);