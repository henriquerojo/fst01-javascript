// operadores lógicos

// E &&
// OU ||
// NÃO !

// Lógica E

// E-MAIL   SENHA    ENTRAR NO SISTEMA
// TRUE     TRUE     TRUE
// TRUE     FALSE    FALSE
// FALSE    TRUE     FALSE
// FALSE    FALSE    FALSE

let email = "a@b.com";
let senha = "123";

//operação relacional abaixo
// console.log(email == "a@b.com");
// console.log(senha == "321");

let verificaEmail = email == "a@b.com";
let verificaSenha = senha == "123";

console.log(verificaEmail, verificaSenha);

// operação lógica && abaixo
console.log(verificaEmail && verificaSenha);


// lógica OU

// solzão     jogo do brasil   churras no dom
// true       true             true
// true       false            true
// false      true             true
// false      false            false

let sol = false;
let jogo = false;
let feriadoSegunda = true;

console.log(sol || jogo);

let verifica = true;
console.log(!verifica);

console.log("");

// verificação do voto opcional
let idade = 17;
let verificaMenorIdade = idade >= 16 || idade < 18;
console.log("Sua idade é de: " + idade + "Voto opcional para menor de idade: " + verificaMenorIdade);
let verificaMaiorIdade = idade > 70;
console.log("Sua idade é de: " + idade + "Voto opcional para maior de idade: " + verificaMaiorIdade);

// APLICANDO O OU
let votoOpcional = verificaMaiorIdade || verificaMenorIdade;
console.log(votoOpcional);


// operadores de incremento

let num = 5;
num = num + 1;
num++;
console.log(num);

console.log(num++); // 7 pós-fixado
console.log(num); // 8
console.log(++num); // 9

num--;
console.log(num); // 8

// operador de atribuição
num = num + 2; // 10 

num += 2;
console.log(num); // 12

num /= 2;
console.log(num); // 6