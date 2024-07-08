document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('text-input');
    const outputElement = document.getElementById('content-answer');
    const button = document.getElementById('check-btn');

    button.addEventListener('click', function() {
        outputElement.classList.toggle('visible');
    });
});