document.addEventListener('DOMContentLoaded', () => {
    console.log('Weekend Circle initialized');

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
