


// Let, var e const

// Exemplo usando var
var x = 10;
console.log("Valor de x antes do bloco:", x); // Output: Valor de x antes do bloco: 10
{
    var x = 20;
    console.log("Valor de x dentro do bloco:", x); // Output: Valor de x dentro do bloco: 20
}
console.log("Valor de x após o bloco:", x); // Output: Valor de x após o bloco: 20


// Exemplo usando let
let y = 30;
console.log("Valor de y antes do bloco:", y); // Output: Valor de y antes do bloco: 30
{
    let y = 40;
    console.log("Valor de y dentro do bloco:", y); // Output: Valor de y dentro do bloco: 40
}
console.log("Valor de y após o bloco:", y); // Output: Valor de y após o bloco: 30


// Exemplo usando const
const z = 50;
console.log("Valor de z antes do bloco:", z); // Output: Valor de z antes do bloco: 50
{
    const z = 60;
    console.log("Valor de z dentro do bloco:", z); // Output: Valor de z dentro do bloco: 60
}
console.log("Valor de z após o bloco:", z); // Output: Valor de z após o bloco: 50 

