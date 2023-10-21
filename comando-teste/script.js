// Obtém elementos HTML
const contadorElement = document.getElementById('contador');
const incrementarButton = document.getElementById('incrementar');
const decrementarButton = document.getElementById('decrementar');

let contador = 0;

// Atualiza o contador na página
function atualizarContador() {
    contadorElement.textContent = contador;
}

// Incrementa o contador quando o botão "Incrementar" é clicado
incrementarButton.addEventListener('click', function() {
    contador++;
    atualizarContador();
});

// Decrementa o contador quando o botão "Decrementar" é clicado
decrementarButton.addEventListener('click', function() {
    contador--;
    atualizarContador();
});

// Inicializa o contador na página
atualizarContador();
