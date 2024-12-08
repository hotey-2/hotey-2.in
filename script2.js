// JavaScript - Change Background Image with Fade Effect
const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg']; // List of background images
let currentImageIndex = 0; // Index to track the current image

// Function to change the background image with a fade effect
function changeBackgroundImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop back to the first image after the last image
    }

    // Change the background image of the body with the fade effect
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Set interval to change background every 5 seconds
setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

// JavaScript - Infinite Notification display
const messages = [
    "My name is Bharat Sharma",
    "I'm a Computer Science Engineer",
    "I'm a Developer",
    "I'm a Innovator",
    "I'm a Researcher",
    " Thanks for visiting",
    "Have a Marvelous day"
];

const notification = document.getElementById('notification');
let messageIndex = 0;

// Function to display each message
function showMessage() {
    notification.textContent = messages[messageIndex]; // Display the current message
    notification.classList.add('active'); // Make the notification visible

    // After 3 seconds, hide the notification
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000); // Message visible for 3 seconds

    // Move to the next message in the array
    messageIndex++;
    if (messageIndex >= messages.length) {
        messageIndex = 0; // If we've reached the end of the array, loop back to the beginning
    }
}

// Start the interval to repeat the notifications
setInterval(showMessage, 4000); // Show a new message every 4 seconds (3 seconds visible + 1 second wait)
