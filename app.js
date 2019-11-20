let txt = "ok é uma frase";

//let regex1 = new RegExp("ok");
let regex1 = /word/;
let regex2 =  /ok/;

//console.log(regex1.test(txt));
//console.log(regex2.test(txt));
console.log(regex1.exec(txt));
console.log(regex2.exec(txt));
//search retorna o index da string
//match retorna array de matchs
//console.log(txt.replace("ok", "a"));
//replace

// espaço /\s/