const firstName = 'Pedro Augusto';
const secondName = 'Roseiro Ipolito';
const age = 20;
const peso = 68;
const altura = 1.72;

let imc = peso / (altura * altura);
let birchDate = (2022 - age);

console.log(`${firstName} ${secondName} tem ${age} ano de idade, ${peso} KG, e ${altura} de altura, seu IMC é de ${imc} e o ano de nascimento é ${birchDate}`)