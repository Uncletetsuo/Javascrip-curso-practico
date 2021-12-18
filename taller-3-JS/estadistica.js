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
    100,
    200,
    500,
    10000000,
];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero) {
    if (numero % 2 === 0){
        return true
    }
    else {
        return false
    }
}

let mediana;

if (esPar(lista2.length)) {
const elemento1 = lista2[mitadLista2];
const elemento2 = lista2[mitadLista2 - 1];

const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
]);

mediana = promedioElemento1y2;
}
else {
 mediana = lista2[mitadLista2]
}
