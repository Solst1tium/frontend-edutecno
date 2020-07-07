function validar(){
    var nombre;
    var apellido;
    var correo;
    var nombreUser;
    var contrasena;
    var telefono;

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    nombreUser = document.getElementById("usuario").value;
    contrasena = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    if (nombre  === "" || apellido  === "" || correo  === "" || nombreUser  === "" ||contrasena  === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    } else if(!valNombre(nombre)){
        return false;
    } else if(!valApellido(apellido)){
        return false;
    } else if(!valCorreo(correo)){
        return false;
    } else if(!valUsuario(nombreUser)){
        return false;
    } else if(!valTelefono(telefono)){
        return false;
    }else{
        alert (`Bienvenido, ${nombre} ${apellido} . Tu nombre de usuario es ${nombreUser}. Tus datos han sido registrados correctamente.`);
        return false;
    }
}


function valNombre(nombre){
    if (nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else{
        return true;
    }
}
            
function valApellido(apellido){
    if (apellido.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    else{
        return true;
    }
}
            
function valCorreo(correo){
    let validador = correo.includes("@" || ".");
    if (validador){
        if (correo.length>100){
            alert("El correo es muy largo");
            return false;
        }else{
            return true;
        }
    }
    else {
        alert("El telefono no incluye arroba o punto");
        return false;
    }
}
            
function valUsuario(nombreUser){
    if (nombreUser.length>20){
        alert("El nombre de usuario es muy largo");
        return false;
    }
    else{
        return true;
    }
}
         
function valTelefono(telefono){
    let validador = /^\d+$/.test(telefono);
    if (validador){
        if (telefono.length>15){
            alert("El telefono es muy largo");
            return false;
        }else{
            return true;
        }
    }
    else {
        alert("El telefono incluye caracteres no numéricos");
        return false;
    }
}


