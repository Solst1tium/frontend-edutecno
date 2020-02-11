function sumarNum(){
    x = parseInt(document.getElementById("factor1").value);
    y = parseInt(document.getElementById("factor2").value);
    resultado = x + y;
    alert("Resultado: " + resultado);
}

function restarNum(){
    x = parseInt(document.getElementById("factor1").value);
    y = parseInt(document.getElementById("factor2").value);
    resultado = x - y;
    alert("Resultado: " + resultado);
}

function multiplicarNum(){
    x = parseInt(document.getElementById("factor1").value);
    y = parseInt(document.getElementById("factor2").value);
    resultado = x * y;
    alert("Resultado: " + resultado);
}

function dividirNum(){
    x = parseInt(document.getElementById("factor1").value);
    y = parseInt(document.getElementById("factor2").value);
    resultado = x / y;
    alert("Resultado: " + resultado);
}

function elevadoANum(){
    x = parseInt(document.getElementById("factor1").value);
    y = parseInt(document.getElementById("factor2").value);
    resultado = x ** y;
    alert("Resultado: " + resultado);
}

function modulusNum(){
    x = parseFloat(document.getElementById("factor1").value);
    y = parseFloat(document.getElementById("factor2").value);
    resultado = x % y;
    alert("Resultado: " + resultado);
}