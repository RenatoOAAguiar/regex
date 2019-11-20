// ^ antes negará a expressão
// /[\^a-z]/ não irá trabalhar como excluding, mas como um match que busca o caracter
// Se o ^ estiver no final, também será tratado como um caracter no match

// ESCAPE

// - ^ no começo funcionam como escape
// \
// ]