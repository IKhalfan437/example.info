// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add any interactive functionality here
    console.log('Weekend Circle initialized!');
    
    // Example: Add date to the header
    const date = new Date().toLocaleDateString();
    const header = document.querySelector('.main-header');
    header.insertAdjacentHTML('afterend', `<p class="current-date">Today's Date: ${date}</p>`);
});
