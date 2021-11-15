// codigo del cuadrado
// const ladoCuadrado = 5;

// console.group("Cuadrados")
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
// console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");
// console.log("El area del cuadrado: " + areaCuadrada + "cm^2");
// console.groupEnd();
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado (lado) { 
    return lado * lado;
}


//codigo del triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo (ladoTriangulo1,  ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}


function areaTriangulo (baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}

// console.group("Triangulos")
// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );
// console.log(
//     "La altura del triangulo es de: " 
//     + alturaTriangulo 
//     + "cm"
// );
// console.log(
//     "El perimetro del triangulo es de: " 
//     + perimetroTriangulo 
//     + "cm"
// );
// console.log(
//     "El area del triangulos es de: " 
//     + areaTriangulo 
//     + "cm^2"
// );
// console.groupEnd();

// circulo
// const radioCirculo = 4;
// const diametroCirculo = 8;
const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// const areaCirculo = PI * (radioCirculo * radioCirculo)

function diametroCirculo (radio) {
    return radio * 2;
}
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI
}


// console.group("Circulo")
// console.log(
//     "El radio del circulo es de: " 
//     + radioCirculo
//     + "cm"
// );
// console.log(
//     "El diametro del circulo es de: " 
//     + diametroCirculo
//     + "cm"
// );
// console.log(
//     "El perimetro del circulo es de: " 
//     + perimetroCirculo
//     + "cm"
// );
// console.log(
//     "El area del circulo es de: " 
//     + areaCirculo
//     + "cm^2"
// );
// console.groupEnd();