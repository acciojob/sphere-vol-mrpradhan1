function volume_sphere() {
    // Get the input value
    const radius = parseFloat(document.getElementById('radius').value);
    
    // Calculate the volume
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the volume
    document.getElementById('volume').value = volume;

    // Prevent the form from submitting and refreshing the page
    return false;
}

// Set the volume_sphere function to be called when the form is submitted
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
