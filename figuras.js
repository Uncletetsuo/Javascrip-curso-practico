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


// interaccion con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)

}
// interaccion en HTML para el triangulo 
function calcularPerimetroTriangulo() {
    const Ladotriangulo = document.getElementById("inputLadoTriangulo");
    const baseTriangulo = document.getElementById("inputBaseTriangulo");

    const valorLado = Number(Ladotriangulo.value);
    const valorBase = Number(baseTriangulo.value);

    const perimetro = perimetroTriangulo(valorLado, valorLado, valorBase);
    alert(perimetro)
}
function calcularAreaTriangulo() {
    const baseTriangulo = document.getElementById("inputBaseTriangulo");
    const alturaTriangulo = document.getElementById("inputAlturaDelTriangulo");

    const valorBase = Number(baseTriangulo.value);
    const valorAltura = Number(alturaTriangulo.value);

    const area = areaTriangulo(valorBase, valorAltura);
    alert(area)
}

// interaccion en HTML con el circulo 
function calcularPerimetroCirculo () {
    const radio = document.getElementById("inputCirculo");
    const valorRadio = Number(radio.value);

    const perimetro = perimetroCirculo(valorRadio);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo");
    const valorRadio = Number(radio.value);

    const aera = areaCirculo(valorRadio);
    alert(aera);
}