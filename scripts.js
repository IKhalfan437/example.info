document.addEventListener('DOMContentLoaded', () => {
    // Strictly design-related JS
    const container = document.querySelector('.container');
    container.style.minHeight = `${window.innerHeight}px`;
    
    window.addEventListener('resize', () => {
        container.style.minHeight = `${window.innerHeight}px`;
    });
});
