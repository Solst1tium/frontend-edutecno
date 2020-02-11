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
  }