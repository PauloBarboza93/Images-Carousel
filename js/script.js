// Carrossel com Bootstrap 5, em JavaScript puro (sem jQuery).
// Regras de acessibilidade (WCAG 2.2.2 "Pausar, parar, ocultar"):
// - troca a cada 3 segundos;
// - pausa enquanto o mouse está em cima do carrossel;
// - botão "Pausar / Continuar" para parar de vez;
// - se a pessoa pediu "reduzir movimento" no sistema, começa parado.

const galeria = document.querySelector('#galeria');
const botaoPausa = document.querySelector('#botao-pausa');

// true quando o sistema da pessoa pede menos animação
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ride: false e pause: false porque nós controlamos quando o carrossel gira.
// Assim a escolha da pessoa no botão não é desfeita pelo Bootstrap.
const carrossel = new bootstrap.Carousel(galeria, {
    interval: 3000,
    pause: false,
    ride: false
});

let pausado = reduzirMovimento;

function atualizarBotao() {
    botaoPausa.textContent = pausado ? 'Continuar' : 'Pausar';
}

if (!pausado) {
    carrossel.cycle(); // começa a girar
}
atualizarBotao();

// Botão Pausar / Continuar
botaoPausa.addEventListener('click', function () {
    pausado = !pausado;
    if (pausado) {
        carrossel.pause();
    } else {
        carrossel.cycle();
    }
    atualizarBotao();
});

// Pausa enquanto o mouse está em cima e volta ao sair (se não estiver pausado pelo botão)
galeria.addEventListener('mouseenter', function () {
    carrossel.pause();
});
galeria.addEventListener('mouseleave', function () {
    if (!pausado) {
        carrossel.cycle();
    }
});
