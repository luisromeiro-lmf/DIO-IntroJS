function clicou(){
    //alert("obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>"; // é possível injetar html
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://www.google.com/"); // abre em nova aba
    //window.location.href = "https://www.google.com/"; // abre na mesma janela
}

function trocar(elemento){
/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";*/
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
/*function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";*/
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){  //em um "select" por exemplo, consegue-se capturar o valor selecionado
    console.log(elemento.value)
}

/* EXEMPLOS DE DATE
var d = new Date();
alert(d);
//alert(d.getMonth()+1); //o Month sempre começa a contar do zero, por isso o +1
//alert(d.getMinutes());
//alert(d.getDay());
*/

/* EXEMPLOS DE LAÇO DE REPETIÇÃO - "var" E "for"
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/

/* EXEMPLOS DE OPERADORES CONDICIONAIS - "if" E "else"
var idade = prompt("Informe sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/* EXEMPLOS DE DICIONÁRIOS COM ARRAY
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
*/

/* EXEMPLOS DE DICIONARIOS
var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta);
console.log(fruta.cor);
*/

/* EXEMPLOS DE ARRAY
var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/


/* EXEMPLOS DE "alert" e "console.log"
var nome = "Luis Romeiro - LMF";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/