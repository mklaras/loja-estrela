document.addEventListener('DOMContentLoaded', function() {
    // Implementando Dark Mode
    const toggleDarkModeButton = document.createElement('button');
    toggleDarkModeButton.textContent = 'Alternar Modo Escuro';
    document.body.appendChild(toggleDarkModeButton);

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Animação sutil nas transições
    document.querySelectorAll('.product-item').forEach(item => {
        item.style.transition = 'transform 0.3s ease-in-out';
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
