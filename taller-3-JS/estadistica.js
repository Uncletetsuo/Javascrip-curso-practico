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
    400,
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

    let mitadLista = parseInt(userList.length / 2);

    if (esPar(userList.length)) {
const elemento1 = userList[mitadLista];
const elemento2 = userList[mitadLista - 1];

const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,

]);
 return mediana = promedioElemento1y2;

}
else {
 return mediana = userList[mitadLista]
}
}

// vamos con la moda 
//este es el array que nos deben de dar, tanto el usuario o una lista definida
const lista3 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1, 
];

// aqui estamos creando una const con un objeto vacio 
const lista3Count = {};

// aqui estamos integrando el metodo array.map() que construye toda un nuevo array apartir de un anterior, y como se nota estamos usando 
// el objeto vacio de lista3Count para llenarla con los resultados de lo que seria el ordenamiento de lista3
// esta funcion anonima lo que hace es que si se repite 
lista3.map(
    function (i){
        if (lista3Count[i]){
            lista3Count[i] += 1;
        }
        else {
            lista3Count[i] = 1;
        }
    }
);

const lista3Array = Object.entries(lista3Count).sort(
    function (a, b) {
        return a[1] - b[1];
    }
)

function calcularModa (userList) {
     let userListCount = {};

     userList.map(
         function (i) {
             if (userListCount[i]) {
                 userListCount[i] += 1;
             }
             else {
                userListCount[i] = 1;
             }
         }
     );
     let userListArray = Object.entries (userListCount).sort(
         function (a, b) {
             return a[1] - b[1];
         }
     );
    const moda = userListArray[userListArray.length - 1]

    return moda
}