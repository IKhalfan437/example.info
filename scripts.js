document.addEventListener('DOMContentLoaded', () => {
    // Ensure perfect vertical centering
    const container = document.querySelector('.container');
    const centerContent = () => {
        const windowHeight = window.innerHeight;
        const contentHeight = container.offsetHeight;
        const topMargin = Math.max(0, (windowHeight - contentHeight) / 2 - 20);
        container.style.marginTop = `${topMargin}px`;
    };

    // Initial centering
    centerContent();
    
    // Re-center on window resize
    window.addEventListener('resize', centerContent);
    
    // Print initialization message
    console.log('Weekend Circle initialized successfully');
});
