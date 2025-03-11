// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: Mostrar um alerta quando o formulário for enviado
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});
