// Contém duas letras na mesma palavra

let reg1 = /h.t/g;
let t1 = "hotel hoje com that h@t h t h t";

console.log(t1.match(reg1));

// Escaping metacharacters

// \

// Se quiser encontrar o \ utilizar \\

let reg2 = /d\./g;
let t2 = "this coud be the final word."

console.log(t2.match(reg2))