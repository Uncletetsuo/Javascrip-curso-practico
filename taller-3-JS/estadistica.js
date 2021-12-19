const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(userList) {

    // let sumaLista = 0;
    // for (let i = 0; i < userList.length; i++) {
    //     sumaLista = sumaLista + userList[i]; 
    // }
    
    const sumaLista = userList.reduce(
        function(valorAcumulado, nuevoElemento) {
            return parseInt(valorAcumulado + nuevoElemento);
        }
    )

    const promedioLista = sumaLista / userList.length;
    return promedioLista;

}

// mediana

const lista2 = [
    500,
    100,
    5,
    200,
    300,
    500,
    2,
    10000000,
];

lista2.sort( function(a, b) {
    return a - b;
}); 

console.log(lista2);




function esPar(numero) {
    if (numero % 2 === 0){
        return true
    }
    else {
        return false
    }
}

let mediana;

function calcularMediana(userList){

    const mitadLista = parseInt(userList.length / 2);

    if (esPar(userList.length)) {
const elemento1 = userList[mitadLista];
const elemento2 = userList[mitadLista - 1];

const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
]);

mediana = promedioElemento1y2;
}
else {
 mediana = userList[mitadLista]
}
}