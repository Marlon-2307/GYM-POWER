document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

//IMAGEN-ZOOM

document.addEventListener("DOMContentLoaded", function () {
    const imagenesConZoom = document.querySelectorAll('.imagen-con-zoom');

    imagenesConZoom.forEach(imagen => {
        const infoElemento = document.createElement('div');
        infoElemento.classList.add('imagen-info');
        infoElemento.innerHTML = `<p>${info}</p>`;
        imagen.appendChild(infoElemento);
    });
});

// BOTON DESLIZAR 

window.addEventListener('scroll', function () {
    showScrollButton();
});

function showScrollButton() {
    const botonTop = document.getElementById('boton-top');
    const scrollPosition =  window.scrollY;

    botonTop.style.display = (scrollPosition > 20) ? 'block' : 'none';
}

// Función para desplazarse suavemente al hacer clic en el botón
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Esto hace que el desplazamiento sea suave
    });
}

