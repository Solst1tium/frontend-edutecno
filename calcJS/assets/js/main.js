   
function sumarNum(){
    var x = document.forms["factores"]["factor1"].value;
    var y = document.forms["factores"]["factor1"].value;
    if (x == "" || y == "" ) {
      alert("Por favor rellene los campos requeridos");
      return false;
    }else{
        x = parseInt(document.getElementById("factor1").value);
        y = parseInt(document.getElementById("factor2").value);
        resultado = x + y;
        alert("Resultado: " + resultado);
        }
    }

function restarNum(){
        var x = document.forms["factores"]["factor1"].value;
        var y = document.forms["factores"]["factor1"].value;
        if (x == "" || y == "" ) {
          alert("Por favor rellene los campos requeridos");
          return false;
        }else{
            x = parseInt(document.getElementById("factor1").value);
            y = parseInt(document.getElementById("factor2").value);
            resultado = x - y;
            alert("Resultado: " + resultado);
            }
    }

function multiplicarNum(){
        var x = document.forms["factores"]["factor1"].value;
        var y = document.forms["factores"]["factor1"].value;
        if (x == "" || y == "" ) {
          alert("Por favor rellene los campos requeridos");
          return false;
        }else{
            x = parseInt(document.getElementById("factor1").value);
            y = parseInt(document.getElementById("factor2").value);
            resultado = x * y;
            alert("Resultado: " + resultado);
            }
    }

function dividirNum(){
        var x = document.forms["factores"]["factor1"].value;
        var y = document.forms["factores"]["factor1"].value;
        if (x == "" || y == "" ) {
          alert("Por favor rellene los campos requeridos");
          return false;
        }else{
            x = parseInt(document.getElementById("factor1").value);
            y = parseInt(document.getElementById("factor2").value);
            resultado = x / y;
            alert("Resultado: " + resultado);
            }
    }

function elevadoANum(){
        var x = document.forms["factores"]["factor1"].value;
        var y = document.forms["factores"]["factor1"].value;
        if (x == "" || y == "" ) {
          alert("Por favor rellene los campos requeridos");
          return false;
        }else{
            x = parseInt(document.getElementById("factor1").value);
            y = parseInt(document.getElementById("factor2").value);
            resultado = x ** y;
            alert("Resultado: " + resultado);
            }
    }

function modulusNum(){
        var x = document.forms["factores"]["factor1"].value;
        var y = document.forms["factores"]["factor1"].value;
        if (x == "" || y == "" ) {
          alert("Por favor rellene los campos requeridos");
          return false;
        }else{
            x = parseFloat(document.getElementById("factor1").value);
            y = parseFloat(document.getElementById("factor2").value);
            resultado = x % y;
            alert("Resultado: " + resultado);
            }
    }

