// Adicionar classe 'js-enabled' ao <html> para ativar o CSS de transição
document.documentElement.classList.add('js-enabled');

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= windowHeight &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para animar elementos quando pelo menos 20% está na viewport
function fadeInSlideUpElements() {
    var elements = document.querySelectorAll('.fade-in-slide-up');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Chame a função ao carregar a página e durante o scroll
document.addEventListener('DOMContentLoaded', fadeInSlideUpElements);
window.addEventListener('scroll', fadeInSlideUpElements);
