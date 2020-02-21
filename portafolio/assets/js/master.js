function mensajeEnviado(x){
    var nombre = document.forms["forma_contacto"]["inputName"].value;
    var email = document.forms["forma_contacto"]["inputEmail"].value;
    var mensaje = document.forms["forma_contacto"]["Textarea1"].value;
    if (nombre == "" || email == "" || mensaje == "") {
      alert("Por favor rellene los campos requeridos.");
      return false;
    }else{
      alert("Información enviada satisfactoriamente.");
    }
  } 