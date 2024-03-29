// estrutura condicional simples

// if = se
// if só executa se a condição for verdadeira

let sensorTemperatura = 30;

if (sensorTemperatura >= 20) 
{
    console.log('Ligar ar condicionado');
}

console.log("FIM");

// estrutura condicional composta

let idade = 18;
if (idade < 18) 
{
    console.log(`Sua idade é de ${idade} ano(s).`);
    console.log("De menor");
}
else
{
    console.log(`Sua idade é de ${idade} ano(s).`);
    console.log("De maior");
}

// estrutura condicional aninhada ou encadeada
let mae = "beyonce".toLowerCase();
if (mae == "beyonce")
{
    console.log("Você é rico");
}
else if(mae == "rihanna")
{
    console.log("Você é um pouco menos rico");
}
else
{
    console.log("Você é F######");
}
