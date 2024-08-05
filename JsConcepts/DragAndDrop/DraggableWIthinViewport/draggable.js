const card = document.getElementById('draggable-card');

let isDragging = false;
let offsetX, offsetY;

card.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - card.getBoundingClientRect().left;
    offsetY = event.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        card.style.left = `${event.clientX - offsetX}px`;
        card.style.top = `${event.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    card.style.cursor = 'grab';
});
