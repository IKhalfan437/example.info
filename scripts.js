document.addEventListener('DOMContentLoaded', () => {
    console.log('Weekend Circle initialized');
    
    // Dynamic centering with floral effects
    const container = document.querySelector('.container');
    const floralBorder = document.querySelector('.floral-border');
    
    const centerContent = () => {
        const windowHeight = window.innerHeight;
        const contentHeight = container.offsetHeight;
        const marginTop = Math.max(0, (windowHeight - contentHeight)/2);
        container.style.marginTop = `${marginTop}px`;
        floralBorder.style.backgroundSize = `${windowHeight/20}px ${windowHeight/20}px`;
    };
    
    centerContent();
    window.addEventListener('resize', centerContent);

    // Add interactive floral effects
    document.addEventListener('mousemove', (e) => {
        const flowers = document.createElement('div');
        flowers.style.position = 'absolute';
        flowers.style.left = `${e.clientX}px`;
        flowers.style.top = `${e.clientY}px`;
        flowers.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        flowers.innerHTML = '✿';
        flowers.style.pointerEvents = 'none';
        flowers.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        flowers.style.animation = 'float 3s ease-out forwards';
        
        document.body.appendChild(flowers);
        
        setTimeout(() => flowers.remove(), 3000);
    });
});
