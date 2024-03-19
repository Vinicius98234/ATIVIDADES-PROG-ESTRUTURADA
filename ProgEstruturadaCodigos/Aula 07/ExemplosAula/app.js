/* BREAK e CONTINUE */
// Exemplo usando break
console.log('Exemplo usando break:');
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // O loop é interrompido quando i for igual a 3
    }
    console.log(i);
}

// Exemplo usando continue
console.log('Exemplo usando continue:');
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // O loop passa para a próxima iteração quando i for igual a 3
    }
    console.log(i);
}


/* SWITCH */
console.log('Exemplo usando Switch:');
const diaDaSemana = 3;
for (let i = 1; i <= 5; i++) {

    switch (diaDaSemana) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia inválido");
    }
}