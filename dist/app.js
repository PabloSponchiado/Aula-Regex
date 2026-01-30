"use strict";
// EXPRESSÃO
/*
const cpfRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/

let cpf: string = "12345678909"

// TESTE
let cpfFormatado: string = cpf.replace(cpfRegex, "$1.$2.$3-$4")

console.log(`CPF formatado: ${cpfFormatado}`);
*/
Object.defineProperty(exports, "__esModule", { value: true });
let texto = "Gato cachoro Casa";
let resultado = texto.match(/\b[A-Z] [a-zA-Z]*/g);
console.log(resultado);
//# sourceMappingURL=app.js.map