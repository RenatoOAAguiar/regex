// FLAGS

/*
    /pattern/flags;
    ou
    new RegExp("pattern", "flags");
*/
// g - global
// i - case insensitive match
// m - multi-line match
let txt1 = "texto padrãos para testeS ";

//let regex3 = /s\s/g;
let regex3 = /s\s/gi;

console.log(txt1.match(regex3));
console.log(regex3.exec(txt1));
console.log(regex3.exec(txt1));