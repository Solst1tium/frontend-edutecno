function validar(){
  var nombres = document.getElementById("Nombres").value;
  var apellidos = document.getElementById("Apellidos").value;
  var correo = document.getElementById("Correo").value;
  var rut = document.getElementById("RUT").value;
  var edad = document.getElementById("Edad").value;
  var fecha = document.getElementById("Fecha").value;
  var especialidad = document.getElementById("Especialidad").value;
  var hora = document.getElementById("Hora").value;
  
  if (nombres  === "" || apellidos  === "" || correo  === "" || rut  === "" || edad  === "" || fecha  === ""){
    alert("Todos los campos son obligatorios");
    return false;
  } else if(!valNombres(nombres)){ //si es falso
    mensajeFallo(1);
    return false;
  } else if(!valApellidos(apellidos)){ // si es falso
    mensajeFallo(2);
    return false;
  } else if(!valCorreo(correo)){ // si es falso
    mensajeFallo(3);
    return false;
  } else if(!valRUT(rut)){ //si es falso
    mensajeFallo(4);
    return false;
  } else if(!valEdad(edad)){ //si es falso
    mensajeFallo(5);
    return false;
  } else if(!valFecha(fecha)){ // si es falso
    mensajeFallo(6);
    return false;
  }else{
    document.getElementById("Mensaje").innerHTML = `Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`;
    return false;
  }
}

function mensajeFallo(value){
  switch (value){
    case (1):
      document.getElementById("Mensaje").innerHTML = "El nombre ingresado es inválido";
      break;
    case (2):
      document.getElementById("Mensaje").innerHTML = "El apellido ingresado es inválido";
      break;
    case (3):
      document.getElementById("Mensaje").innerHTML = "El correo ingresado es inválido";
      break;
    case (4):
      document.getElementById("Mensaje").innerHTML = "El rut ingresado es inválido";
      break;
    case (5):
      document.getElementById("Mensaje").innerHTML = "La edad ingresada es inválida";
      break;
    case (6):
      document.getElementById("Mensaje").innerHTML = "La fecha ingresada es inválida";
      break;
  }
}

function valNombres(nombres){
  let validador = /[\u00F1a-zA-Z\s]/gim.test(nombres);
  if (validador){
    console.log("true");
    return true;
  }else{
    console.log("false");
    return false;
  }
}

function valApellidos(apellidos){
  let validador = /[\u00F1a-zA-Z\s]/gim.test(apellidos);
  if (validador){
    return true;
  }else{
    return false;
  }
}

function valCorreo(correo){
  let validador = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(correo);
  if (validador){
    return true;
  }
  else{
    return false;
  }
}

function valRUT(rut){
  let validador = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim.test(rut);
  if (validador){
    return true;
  }
  else{
    return false;
  }
}

function valEdad(edad){
  let validador =  /\D|\d{4,}/gim.test(edad); //si encuentra cualquier cosa que no sea numero o mas de 4 digitos
  if (validador){ 
    return false;
  }
  else{
    return true;
  }
}

function valFecha(fecha){
  let validador = /\d{3,}\-\d{3,}\-\d{4}\b/gim.test(fecha); //si encuentra 3 o mas digitos en mes y dia, y mas de 4 en año
  if (validador){
    return false;
  }
  else{
    return true;
  }
}
    
