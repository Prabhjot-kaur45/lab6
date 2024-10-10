// Function to handle key press events
function handleKeyPress(event) {
    const keyInfoDiv = document.getElementById('keyInfo');
    const keyCode = event.keyCode; // Get the key code
    const keyValue = event.key; // Get the key value

    // Update the key information display
    keyInfoDiv.innerHTML = `Key Value: <strong>${keyValue}</strong><br>Key Code: <strong>${keyCode}</strong>`;
}

// Attach the event listener to the document
document.addEventListener('keydown', handleKeyPress);