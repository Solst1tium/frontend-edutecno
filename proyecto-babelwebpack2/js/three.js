import functOne from './one.js';
import functTwo from './two.js';

var functThree = () => {
    let one = functOne();
    console.log(typeof(one));
    let two = functTwo();
    console.log(typeof(two));

    var arrayTest = { 
        "status":"OK", 
        "one": one, 
        "two": two,
    };
    return arrayTest;   
}

var arrayFinal = functThree();
console.log(arrayFinal);

for (const x in arrayFinal) {
    document.getElementById("receptor").innerHTML += arrayFinal[x] +`<br>`;
}
  