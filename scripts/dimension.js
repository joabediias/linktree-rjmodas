// Primeiro obtemos a altura da janela de visualização e a multiplicamos por 1% para obter um valor para uma unidade vh
let vh = window.innerHeight * 0.01;
// Em seguida, definimos o valor na propriedade personalizada --vh para a raiz do documento
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Ouvimos o evento de redimensionamento
window.addEventListener('resize', () => {
    // Executamos o mesmo script de antes
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}); 