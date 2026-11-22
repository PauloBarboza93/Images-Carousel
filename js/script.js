// Inicia o carrossel com Bootstrap 5, em JavaScript puro (sem jQuery).
// Mesmo comportamento da versão antiga: troca a cada 2 segundos e não pausa.
// Tempo e pausa serão ajustados na etapa 3 (acessibilidade).
const galeria = document.querySelector('#galeria');

new bootstrap.Carousel(galeria, {
    interval: 2000,
    pause: false,
    ride: 'carousel'
});
