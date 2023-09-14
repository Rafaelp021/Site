const images = [
    'https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=400',
    'https://imgv3.fotor.com/images/videoImage/ai-generated-beautiful-girl-like-a-beautiful-model-by-Fotor-ai-image-generator_2023-05-16-073426_dnrx.jpg',
    'https://i.pinimg.com/236x/73/9f/84/739f84b67cdd22dac888a3fc5c6192d1.jpg'
];

let currentIndex = 0;
const slide = document.getElementById('slide');

function updateImage() {
    slide.style.opacity = 0;
    setTimeout(() => {
        slide.src = images[currentIndex];
        slide.style.opacity = 1;
    }, 500);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();
// Adiciona event listener para os círculos
document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', handleCircleClick);
});

function handleCircleClick(event) {
    const circle = event.currentTarget;
    const image = circle.querySelector('img');
    const textDiv = circle.querySelector('.image-text');
    
    // Obtém a imagem em tamanho completo
    const fullImageSrc = image.src.replace('https://via.placeholder.com/100', 'https://via.placeholder.com/800x600');
    
    // Cria uma caixa de diálogo para exibir a imagem e o texto
    const dialog = document.createElement('div');
    dialog.classList.add('dialog');
    dialog.innerHTML = `
        <div class="dialog-content">
            <img src="${fullImageSrc}" alt="${image.alt}">
            <p>${textDiv.innerText}</p>
            <button class="close-dialog">Fechar</button>
        </div>
    `;

    document.body.appendChild(dialog);

    // Adiciona event listener para o botão de fechar
    const closeButton = dialog.querySelector('.close-dialog');
    closeButton.addEventListener('click', () => {
        document.body.removeChild(dialog);
    });
}


