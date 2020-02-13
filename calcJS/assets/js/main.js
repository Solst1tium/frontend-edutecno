function identID(x){
  var facto1 = document.forms["factores"]["factor1"].value;
  var facto2 = document.forms["factores"]["factor2"].value;
  if (facto1 == "" || facto2 == "" ) {
    alert("Por favor rellene los campos requeridos");
    return false;
  }else{
    opMat(x);
  }
}   

function opMat(etiqueta){
  console.log(etiqueta);
  var eleccion=etiqueta;
  x = parseInt(document.getElementById("factor1").value);
  y = parseInt(document.getElementById("factor2").value);

switch (eleccion){
  case "boton1":
        resultado = x + y;
        alert("Resultado: " + resultado);
        break;

  case "boton2":
        resultado = x - y;
        alert("Resultado: " + resultado);
        break;

  case "boton3":
        resultado = x * y;
        alert("Resultado: " + resultado);
        break;

  case "boton4":
        resultado = x / y;
        alert("Resultado: " + resultado);
        break;

  case "boton5":
        resultado = x ** y;
        alert("Resultado: " + resultado);
        break;

  case "boton6":
        resultado = x % y;
        alert("Resultado: " + resultado);
        break;
    }
} 

