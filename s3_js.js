// exercici 1
console.log("Hola mundo");
// exercici 2
window.alert("Me llamo Edurne");

// exercici 3
let nom = "Edurne";
let cognom = "Martinez";

// exercici 4
let num1 = 3;
let num2 = 5;
let resultat = num1 + num2;
console.log(resultat);

// exercici 5
let nota_examen = parseInt(prompt("Pon tu nota de examen"));
let respuesta;

if (nota_examen < 5) { respuesta = " Has suspendido el examen con un " + nota_examen } else { respuesta = " Has aprovado elexamen con" + nota_examen; }

window.alert(respuesta);

// exercici 6

let p = "Tinc un cotxe de color blau. "
let re = /blau/gi;
let reO = /o/gi;
let newP = p.replace(re, "verd");
let newPu = p.replace(reO, "u");

console.log(newP);
console.log(newPu);





// exercici 7 mirar m4-1
let llistat = ["taula", "cadira", "ordinador", "libreta"];
let posicio = "";

for (i = 0; i < llistat.length; i++) {
    posicio += llistat[i] + "<br>";
}

console.log(posicio);


// exercici 8 mejor mira m3_5
function calculadora() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let operador = document.getElementById("operador").value;
    let result = document.getElementById("demo");

    switch (operador) {
        case "+":
            result = suma(valor1, valor2);
            break;
        case "-":
            result = resta(valor1, valor2);
            break;
        case "*":
            result = multiplicacio(valor1, valor2);
            break;
        case "/":
            result = divisio(valor1, valor2);
            break;

        default:
            break;
    }

    function suma(valor1, valor2) {
        return valor1 + valor2;

    }

    function resta(valor1, valor2) {
        return valor1 - valor2;


    }

    function multiplicacio(valor1, valor2) {
        return valor1 * valor2;


    }

    // nivel 2    

    function divisio(valor1, valor2) {
        return valor1 / valor2;


    }

    document.getElementById("demo").innerHTML = result;


}


//window.alert()
//document.getElementById("output1").innerHTML = datos1 + datos2;