// a ver a ver, tenemos que separar el chiquero que se estuvo generando 
// aqui empezamos con lo que seria la funcion para saber si es par o no es par el length de el objeto o array que esta dentro del parametro de la funcion
function esPar(numero) {
//el length que se pone en el parmetro se divide por dos y no tiene residuo (que sea 0) regresa como verdadero
    if (numero % 2 === 0){
        return true
    }
    // por ejemplo si hacemos lo que seria  5/2 daria 2.5 el residuo es distinto a 0 asi que el numero no es par, lo que da un resultado falso
    else {
        return false
    }
}

//aqui vamos a poner las variables importadas, aviso importante dentro del html, si no utilizamos import y export es mejor hacer un link a los dos archivos de JAvaScript
// en el orden que se invoquen dentro del HTML tambien cuenta, primero tenemos que poner el archivo donde las variables estan declaradas una vez hecho eso, el archivo donde se
// hacen las operaciones le debe de seguir, si no, aparecera como indefinido.

//aqui estamos creando una constante apartir del metodo .map como ya sabemos el map crea un array a partir de otro, aqui basicamente nos estamos deshaciendo de la persona
// y quedandonos con sus ingresos, todo eso en un array.

const salariosColombia = colombia.map(
    function(persona) { return persona.salary }
);

// aqui basicamente estamos ordenando de menor a mayor los ingresos dentro del array
const salariosColombiaSorted = salariosColombia.sort(
    function(a, b) 
    { return a - b;}
);

// empezamos con lo divertido, la primera funcion, aqui nada mas esta de apoyo pero puede funcionar como propia, un array o objeto puede entrar dentro del parametro
function calcularMediaAritmetica(userList) {
// generamos una variable a la cual le asignamos el metodo.reduce() este metodo lo que hace es sumar todos los valores dentro del array
const sumaLista = userList.reduce(
// tenemos que poner el = 0 asi la funcion puede correr de forma optima ahorrando el valor de inicializacion
    function(valorAcumulado = 0, nuevoElemento) {
        return parseInt(valorAcumulado+ nuevoElemento);
    }
)
// inicializamos la variable asginandole la division de la suma total sobre el numero de datos... ya sabes la formula del promedio, pero solo asi entiende este lenguaje de programacion
const promedioLista = sumaLista / userList.length;
//que nos regrese el valor que 
return promedioLista;

}


function calcularMediana(userList){
   
    let mitadLista = parseInt(userList.length / 2);

    if (esPar(userList.length)) {
const elemento1 = userList[mitadLista];
const elemento2 = userList[mitadLista - 1];

const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,

]);
 return promedioElemento1y2;

}
else {
 return mediana = userList[mitadLista]
}
}