/* CONDICIONAL IF */
const temperature = 25;

if (temperature > 30) {
  console.log("Está quente lá fora!");
} else {
  console.log("Não está tão quente lá fora.");
}

/* OPERADORES LÓGICOS */
const idade = 25;
const temCarteiraDeMotorista = true;

if (idade >= 18 && temCarteiraDeMotorista) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir!");
}


/* Operador || (OR): */

let temperatura = 25;

if (temperatura < 0 || temperatura > 30) {
    console.log("Está muito frio ou muito quente lá fora.");
} else {
    console.log("A temperatura está agradável.");
}


/* Operador ! (NOT): */

let diaChuvoso = true;

if (!diaChuvoso) {
    console.log("Vou dar um passeio.");
} else {
    console.log("Vou ficar em casa.");
}


/* Combinação de operadores: */

let x = 10;
let y = 5;
let z = 20;

if (x > y && x < z) {
    console.log("x está entre y e z.");
} else {
    console.log("x não está entre y e z.");
}

/* ELSE-IF STATEMENTS */
const hora = 14;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}