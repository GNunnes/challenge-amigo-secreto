Amigo Secreto

Este é um simples projeto em JavaScript para sortear um nome aleatório de uma lista de amigos. Ideal para brincadeiras de Amigo Secreto!

🚀 Funcionalidades

Adicionar nomes à lista.

Evitar nomes duplicados.

Sortear um único nome aleatório da lista.

Exibir o resultado do sorteio.

🛠 Tecnologias Utilizadas

HTML

CSS

JavaScript

📌 Como Usar

Clone este repositório:

git clone https://github.com/seu-usuario/amigo-secreto.git

Abra o arquivo index.html em seu navegador.

Digite os nomes e clique em "Adicionar".

Clique em "Sortear amigo" para escolher um nome aleatório.

🎯 Estrutura do Código

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


