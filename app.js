//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function formatarNome(nome) {
 return nome
 .trim()
 .toLowerCase()
 .replace(/\b\w/g, letra => letra.toUpperCase());
}

function adicionarAmigo() {
 const input = document.getElementById("amigo");
 let nome = input.value;

 if (nome.trim() === "") {
 alert("Por favor, insira um nome.");
 return;
 }

 nome = formatarNome(nome);
 amigos.push(nome);

 atualizarListaAmigos();

 input.value = "";
 input.focus();
}

function atualizarListaAmigos() {
 const ul = document.getElementById("listaAmigos");
 ul.innerHTML = "";

 amigos.forEach((nome) => {
 const li = document.createElement("li");
 li.textContent = nome;
 ul.appendChild(li);
 });
}

function sortearAmigo() {
 if (amigos.length === 0) {
 alert("Adicione ao menos um amigo para sortear.");
 return;
 }

 const indiceSorteado = Math.floor(Math.random() * amigos.length);
 const nomeSorteado = amigos[indiceSorteado];

 const resultado = document.getElementById("resultado");
 resultado.innerHTML = `<li> Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}

// Evento para acionar "adicionarAmigo" com a tecla Enter
document.addEventListener("DOMContentLoaded", function () {
 const input = document.getElementById("amigo");
 input.addEventListener("keydown", function (event) {
 if (event.key === "Enter") {
 adicionarAmigo();
 }
 });

 // Auto capitaliza primeira letra enquanto digita
 input.addEventListener("input", function () {
 const valor = input.value;
 input.value = valor.charAt(0).toUpperCase() + valor.slice(1);
 });
});
