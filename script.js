const textoAjolote = document.querySelector('#text-axolot');
let texts = ['Hola, soy un ajolote', 'Ya es Octubre', 'Halloween ya está aquí', '¡Digidraws está preparando algo!!!'];
const imgAjo = document.querySelector('#ajolote-img')
const btnContinue = document.querySelector('.btn-continuar');
let currentIndex = 0;

btnContinue.addEventListener('click', () => {
    if (currentIndex < texts.length) {
    if (currentIndex === 2) {
        imgAjo.src = 'ajolote2.png';
    }
    if (currentIndex === 3) {
        imgAjo.src = 'ajolote3.png'
    }
        textoAjolote.textContent = texts[currentIndex];
        currentIndex++; 
    } else {
 document.body.style.backgroundImage = 'url(fondo.webp)'
 document.body.style.color = 'white'
    currentIndex++
    if (document.body.style.color === 'white') {
        btnContinue.style.display = 'none'
    }
    }
});
