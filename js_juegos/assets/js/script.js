
function menuJuegos(){
  var opcion;
  do {
    opcion = prompt("Ingrese una opción del 1 al 6:\n(1) Juegos de Números \n(2) Juego de adivinanzas \n(3)Sacando promedios \n(4) Juego de frutas \n(5) Juego de nombres \n(6)Cerrar menú de juegos ");
    if (opcion === null) {
      return; //boton cancelar
    }
    else{
      switch (opcion){
        case '1':
          juegoUno();
          break;
        case '2':
          juegoDos();
          break;
        case '3':
          juegoTres();
          break;
        case '4':
          juegoCuatro();
          break;
        case '5':
          juegoCinco();
          break;
        case '6':
          alert("Gracias por jugar");
          break;
        default:
          alert("Opción inválida");
          break;
      }
    } 
  }while (opcion !='6');

}


function juegoUno(){
  let validador = false;
  do{
    let input = parseInt(prompt("Ingrese un numéro de 1 al 100"));
    if(input>100 || input <0){
      alert("Opción inválida");
    }else{
      for (i=0; i <=input; i++){
        console.log(i);
        validador = true;
      }
    }
  }while(!validador);
}

function juegoDos(){
  let caballo =''; 
  do{
    let input = prompt('¿De qué color es el caballo blanco de Napoleón?');
    caballo = input.toLowerCase();
  }while(caballo != 'blanco');
  alert("Correcto");
}

function juegoTres() {
  let promedios = [{ramo: 'Matemáticas', promedio: 0}, {ramo: 'Física', promedio: 0}, {ramo: 'Ciencias', promedio: 0},];
  let validador;
  do{
    validador = 0;
    for (x of promedios) {
      x.promedio = parseFloat(prompt(`Ingrese el promedio de ${x.ramo}: `));
      if (x.promedio < 7 && x.promedio > 1){
        alert("Promedio válido");
        validador +=1;
      }
      else{
        alert("Promedio inválido");
        validador -=1;
      }
    }
  }while(validador < 3);
  alert("Su promedio general es " + Math.round((promedios[0].promedio+promedios[1].promedio+promedios[2].promedio)/promedios.length) + ", redondeado." );
}

function juegoCuatro(){
  let frutas = [];
  for (i=0; i<3; i++){
    frutas[i] = prompt(`Ingrese una fruta: `).toLowerCase();
  }
  for (let fruta of frutas){
    if (fruta != 'manzana'){
      console.log(`${fruta}`);
    }
  } 
}

function juegoCinco(){
  let nombre = prompt(`Ingrese su nombre completo: `).toLowerCase();
  let vocales = /[aeiou]/g;
  let espacios = /[\s]/g;
  let resultado = nombre.match(vocales);
  let resultado2 = nombre.match(espacios);
  alert(`La cantidad de vocales es: ${resultado.length}. La cantidad de consonantes es: ${(nombre.length-resultado2.length)-resultado.length}`);
}


