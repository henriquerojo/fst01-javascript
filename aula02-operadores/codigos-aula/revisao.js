let nome = "Pedro";
console.log(nome);

const PI = 3.1415;

let valorLogico = false;
console.log(valorLogico, typeof(valorLogico));

//correção explicita
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof(valorLogico));

//correção implicita
let soma = "1" + 2;
console.log(soma, typeof(soma));

let ligado = false;
console.log(ligado, typeof(ligado));

ligado = String(ligado);
console.log(ligado, typeof(ligado));

let valorProduto = "10";
console.log(valorProduto, typeof(valorProduto));

valorProduto = parseInt(valorProduto);
// valorProduto = +valorProduto;
// valorProduto = Number(valorProduto);
console.log(valorProduto, typeof(valorProduto));
