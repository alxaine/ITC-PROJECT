// script.js

// Function to display adoption form
function showAdoptionForm() {
    alert("Thank you for considering adoption! Please contact us for more details.");
}

// Handle form submission (basic functionality)
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
};
