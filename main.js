const mahatma = document.getElementById('mahatma');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

mahatma.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});