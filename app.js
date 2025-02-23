//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
const listaAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    // Validação da entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array de amigos
    listaAmigos.push(nome);
    
    // Atualiza a lista exibida na tela
    atualizarLista();
    
    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = ""; // Limpa a lista existente

    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        ulLista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para o sorteio.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibirResultado(sorteado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(sorteado) {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpa o resultado anterior

    const li = document.createElement("li");
    li.textContent = `Sorteado: ${sorteado}`;
    ulResultado.appendChild(li);
}
