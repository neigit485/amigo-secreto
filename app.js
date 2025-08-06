//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    // Atualiza a lista exibida
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = "";
    input.focus();
}

function atualizarListaAmigos() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}
