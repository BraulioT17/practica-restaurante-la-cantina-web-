document.write("<h1>practica restaurante</h1>")

var platillo;
var optComida="pizza";

switch (optComida) {
    case "nachos":
        platillo=30;
        break;
    case "pizza":
        platillo=120;
        break
    case "tacos":
        platillo=10;
        break;
        default:
            alert("selecciona una opcion del menu")
}

//console.log("indique la cantidad de platillos")
var cantidadP=3;
var totalP=platillo*cantidadP;


var bebida;
var optBebida="cerveza";

switch (optBebida) {
    case "agua natural":
        bebida=15;
        break;
    case "soda":
        bebida=30;
        break
    case "cerveza":
        bebida=45;
        break;
        default:
            alert("selecciona una opcion del menu")
}

var cantidadB=5;
var totalB=bebida*cantidadB;
var total=totalB+totalP;

console.log("usted seleccionó "+optComida+" con cantidad de "+cantidadP+"\nusted seleccionó de beber "+optBebida+" con cantidad de "+cantidadB);
console.log("total por comida "+ totalP);
console.log("total por bebida "+ totalB);
console.log("consumo total "+ total);
