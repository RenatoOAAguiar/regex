// + match one or more occurrences
// ? match 0 or 1 occurrences
// * zero or more
// aplicado a caracteres da palavra onde o regex deu match
// /s[a-z]*/g


let reg = /warning!*/g // 0 ou mais do caracter !


let t = "warning!!!!"; 


console.log(t.match(reg))


let t1 = "<p>This is the first paragraph.</p><p>Paragraph number two.</p>";
let reg2 = /<p>.*?<\/p>/;

console.log(t1.match(reg2));