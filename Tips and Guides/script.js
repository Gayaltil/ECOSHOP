// Example JavaScript for interactivity (e.g., alert when "Read More" is clicked)
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('You clicked on Read More! This could open the full guide or article.');
    });
});
