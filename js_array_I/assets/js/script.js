// Sesión 1

const radio=[{HORA:"11:00",ESPECIALISTA:"IGNACIO SCHULZ",PACIENTE:"FRANCISCA ROJAS",RUT:"9878782-1",PREVISION:"FONASA"},{HORA:"11:30",ESPECIALISTA:"FEDERICO SUBERCASEAUX",PACIENTE:"PAMELA ESTRADA",RUT:"15345241-3",PREVISION:"ISAPRE"},{HORA:"15:00",ESPECIALISTA:"FERNANDO WURTHZ",PACIENTE:"ARMANDO LUNA",RUT:"16445345-9",PREVISION:"ISAPRE"},{HORA:"15:30",ESPECIALISTA:"ANA MARIA GODOY",PACIENTE:"MANUEL GODOY",RUT:"17666419-0",PREVISION:"FONASA"},{HORA:"16:00",ESPECIALISTA:"PATRICIA SUAZO",PACIENTE:"RAMON ULLOA",RUT:"14989389-K",PREVISION:"FONASA"}]
const trauma=[{HORA:"8:00",ESPECIALISTA:"MARIA PAZ ALTUZARRA",PACIENTE:"PAULA SANCHEZ",RUT:"15554774-5",PREVISION:"FONASA"},{HORA:"10:00",ESPECIALISTA:"RAUL ARAYA",PACIENTE:"ANGÉLICA NAVAS",RUT:"15444147-9",PREVISION:"ISAPRE"},{HORA:"10:30",ESPECIALISTA:"MARIA ARRIAGADA",PACIENTE:"ANA KLAPP",RUT:"17879423-9",PREVISION:"ISAPRE"},{HORA:"11:00",ESPECIALISTA:"ALEJANDRO BADILLA",PACIENTE:"FELIPE MARDONES",RUT:"1547423-6",PREVISION:"ISAPRE"},{HORA:"11:30",ESPECIALISTA:"CECILIA BUDNIK",PACIENTE:"DIEGO MARRE",RUT:"16554741-K",PREVISION:"FONASA"},{HORA:"12:00",ESPECIALISTA:"ARTURO CAVAGNARO",PACIENTE:"CECILIA MENDEZ",RUT:"9747535-8",PREVISION:"ISAPRE"},{HORA:"12:30",ESPECIALISTA:"ANDRES KANACRI",PACIENTE:"MARCIAL SUAZO",RUT:"11254785-5",PREVISION:"ISAPRE"}]
const dental=[{HORA:"8:30",ESPECIALISTA:"ANDREA ZUÑIGA",PACIENTE:"MARCELA RETAMAL",RUT:"11123425-6",PREVISION:"ISAPRE"},{HORA:"11:00",ESPECIALISTA:"MARIA PIA ZAÑARTU",PACIENTE:"ANGEL MUÑOZ",RUT:"9878789-2",PREVISION:"ISAPRE"},{HORA:"11:30",ESPECIALISTA:"SCARLETT WITTING",PACIENTE:"MARIO KAST",RUT:"7998789-5",PREVISION:"FONASA"},{HORA:"13:00",ESPECIALISTA:"FRANCISCO VON TEUBER",PACIENTE:"KARIN FERNANDEZ",RUT:"18887662-K",PREVISION:"FONASA"},{HORA:"13:30",ESPECIALISTA:"EDUARDO VIÑUELA",PACIENTE:"HUGO SANCHEZ",RUT:"17665461-4",PREVISION:"FONASA"},{HORA:"14:00",ESPECIALISTA:"RAQUEL VILLASECA",PACIENTE:"ANA SEPULVEDA",RUT:"14441281-0",PREVISION:"ISAPRE"}];


var totalConsultas = radio.concat(trauma, dental);
document.getElementById("estadisticas_totales").innerHTML = totalConsultas.length;
document.getElementById("total_radio").innerHTML = "Total de consultas: " + radio.length;
document.getElementById("total_trauma").innerHTML = "Total de consultas: " + trauma.length;
document.getElementById("total_dental").innerHTML = "Total de consultas: " + dental.length;

function primeroUltimo (array){
    return "Primera atención: " +array[0].PACIENTE + ' - ' + array[0].RUT + ' - ' + array[0].PREVISION + ' | Última atención: ' + array[array.length-1].PACIENTE + '-' + array[array.length-1].RUT + '-' + array[array.length-1].PREVISION;
}

document.getElementById("pacientes_radio").innerHTML = primeroUltimo(radio);
document.getElementById("pacientes_trauma").innerHTML = primeroUltimo(trauma);
document.getElementById("pacientes_dental").innerHTML = primeroUltimo(dental);

// Sesión 2

var traumaExtra = [{HORA:"09:00",ESPECIALISTA:"RENÉ POBLETE",PACIENTE:"ANA GELLONA",RUT:"13123329-7",PREVISION:"ISAPRE"}, {HORA:"09:30",ESPECIALISTA:"MARIA SOLAR",PACIENTE:"RAMIRO ANDRADE",RUT:"12221451-K",PREVISION:"FONASA"}, {HORA:"10:00",ESPECIALISTA:"RAUL LOYOLA",PACIENTE:"CARMEN ISLA",RUT:"10112348-3",PREVISION:"ISAPRE"},{HORA:"10:30",ESPECIALISTA:"ANTONIO LARENAS",PACIENTE:"PABLO LOAYZA",RUT:"13453234-1",PREVISION:"ISAPRE"}, {HORA:"12:00",ESPECIALISTA:"MATIAS ARAVENA",PACIENTE:"SUSANA POBLETE",RUT:"14345656-6",PREVISION:"FONASA"},];

var traumaNew = trauma.concat(traumaExtra);

var radioNew = JSON.parse(JSON.stringify(radio)); 
radioNew.shift();
radioNew.pop();
var dentalNew = JSON.parse(JSON.stringify(dental));


dentalNew = dentalNew.map(function (x){
  if (x.PREVISION == "ISAPRE"){
      x.PREVISION = "Nueva Previsión: FONASA";
  }else{
      x.PREVISION = "Nueva Previsión: ISAPRE";
  }
  return x;
});



var totalConsultas2 = radioNew.concat(traumaNew, dentalNew);
document.getElementById("estadisticas_totales2").innerHTML = "/" + totalConsultas2.length + "(Cifra Actualizada)";
document.getElementById("total_radio2").innerHTML = "/" + radioNew.length + "(Cifra Actualizada)";
document.getElementById("total_trauma2").innerHTML = "/" + traumaNew.length + "(Cifra Actualizada)";
document.getElementById("total_dental2").innerHTML = "/" + dentalNew.length + "(Cifra Actualizada)";


radioNew.forEach(function(v){
  document.getElementById("extra_radio").innerHTML = document.getElementById("extra_radio").innerHTML + `${v.PACIENTE}</br>`;
});
traumaNew.forEach(function(v){
  document.getElementById("extra_trauma").innerHTML = document.getElementById("extra_trauma").innerHTML + `${v.PACIENTE}</br>`;
});
dental.forEach(function(v){
  document.getElementById("extra_dental").innerHTML = document.getElementById("extra_dental").innerHTML + `${v.HORA}` + `- ${v.ESPECIALISTA}` + `- ${v.PACIENTE}` + `- ${v.RUT}`+ `- ${v.PREVISION}</br>`;
});
dentalNew.forEach(function(v){
  document.getElementById("extra_dental2").innerHTML = document.getElementById("extra_dental2").innerHTML + `${v.PACIENTE}` + `; ${v.RUT}` + `; ${v.PREVISION}</br>`;
});

totalConsultas.forEach(function(v){
  document.getElementById("lista_pacientes").innerHTML = document.getElementById("lista_pacientes").innerHTML + `${v.PACIENTE}</br>`;
});

totalConsultas2.forEach(function(v){
  document.getElementById("lista_pacientes2").innerHTML = document.getElementById("lista_pacientes2").innerHTML + `${v.PACIENTE}</br>`;
});


// Funcionalidad Botón

function desplegar(btn_id, value) {
    var x = document.getElementById(value);
    var boton = document.getElementById(btn_id);
    if (x.style.display === "none") {
      x.style.display = "block";
      boton.innerHTML = "Esconder Datos";
    } else {
      x.style.display = "none";
      boton.innerHTML = "Mostrar Datos";
    }
  }