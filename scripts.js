// Validated JavaScript
document.addEventListener('DOMContentLoaded', () => {
    try {
        const container = document.querySelector('.container');
        if (!container) throw new Error('Container element not found');
        
        const centerContent = () => {
            const windowHeight = window.innerHeight;
            const contentHeight = container.offsetHeight;
            const topMargin = Math.max(0, (windowHeight - contentHeight) / 2 - 20);
            container.style.marginTop = `${topMargin}px`;
        };

        centerContent();
        window.addEventListener('resize', centerContent);
        
        console.log('Initialization successful');

    } catch (error) {
        console.error('Initialization error:', error.message);
    }
});
