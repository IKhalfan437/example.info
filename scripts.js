// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Test button functionality
    const testButton = document.getElementById('testButton');
    if(testButton) {
        testButton.addEventListener('click', () => {
            alert('Button clicked successfully!');
        });
    }
});
