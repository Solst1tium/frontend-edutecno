<<<<<<< HEAD
function infoRecibida(){
    nombre = document.getElementById("usr").value;
    x = "Gracias por contactarnos, ";
    z = ". Información enviada exitosamente.";
    alert(x + nombre + z);
}

function verifInfo() {
    var x = document.forms["formcontacto"]["usr"].value;
    var y = document.forms["formcontacto"]["exampleInputEmail"].value;
    if (x == "" || y == "" ) {
      alert("Por favor rellene los campos requeridos");
      return false;
    }else
         infoRecibida();
=======
function infoRecibida(){
    nombre = document.getElementById("usr").value;
    x = "Gracias por contactarnos, ";
    z = ". Información enviada exitosamente.";
    alert(x + nombre + z);
}

function verifInfo() {
    var x = document.forms["formcontacto"]["usr"].value;
    var y = document.forms["formcontacto"]["exampleInputEmail"].value;
    if (x == "" || y == "" ) {
      alert("Por favor rellene los campos requeridos");
      return false;
    }else
         infoRecibida();
>>>>>>> 84fb90846a4433896be1286075798e7f68b70842
  }