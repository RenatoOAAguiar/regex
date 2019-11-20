// Matching example

//gray or grey

//let re = /gr y/;

// ou melhor
// pegará uma das opções em colchete
let re = /gr[ae]y/g;

let t4 = "Make the outline for the squere grey and the fill for the circle gray."

console.log(t4.match(re))

// deverá fazer match com 1 do primeiro colchete + 1 do segundo e assim por diante
// podem ser encontrados de forma individual tbm, exemplo se meu testo possui '1234', e me regex é
// /[1234]/, o regex retornará 4 resultados 1 2 3 4

let re1 = /[rh][abcde][ i]/g

console.log(t4.match(re1));


// RANGE

// /[1-4]/
// /[\-.]/
// /[a-e]/

// Caracter único, então pode encontrar por exemplo 29, o 2 será selecionado no match
// [a-z] match com todas letras
// [a-zA-Z] todas minusculas e maiusculas
let re2 = /[1-7]/g;

let t5 = " there have been 4 - 5 times i have tried, but i will try it again 49";

console.log(t5.match(re2));

// /[10-20]/ não vai pegar o range entre 10 e 20, ele pegará os números de forma individual