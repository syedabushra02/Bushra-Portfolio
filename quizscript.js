let visitorCount = 0;

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Increase visitor count
    visitorCount++;
    document.getElementById("visitorCount").textContent = visitorCount;

    // Clear the form fields
    document.getElementById("contactForm").reset();
});