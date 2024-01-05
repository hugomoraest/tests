// script.js

document.getElementById('toggleNightMode').addEventListener('click', alternarModoNoturno);

function alternarModoNoturno() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Adicione qualquer lógica adicional relacionada ao modo noturno aqui, se necessário
}

// Restante do seu código JavaScript para lógica de chat, etc.
