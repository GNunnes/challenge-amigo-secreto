//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
const listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = "";
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        ulLista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para o sorteio.");
        return;
    }
    
    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Sorteado: ${sorteado}`;
    ulResultado.appendChild(li);
}
