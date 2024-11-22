// Handle idea submission
document.getElementById('idea-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Capture user input
    const name = document.getElementById('name').value.trim();
    const idea = document.getElementById('idea').value.trim();

    if (name && idea) {
        alert(`Thank you, ${name}! Your idea has been submitted.`);
        document.getElementById('idea-form').reset(); // Clear the form
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
