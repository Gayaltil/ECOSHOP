// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Sustainability section - Trigger circle animation on scroll
window.addEventListener('scroll', function () {
    const sustainabilitySection = document.querySelector('.sustainability');
    const sustainabilityPosition = sustainabilitySection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    // Trigger animation if the section is visible in the viewport
    if (sustainabilityPosition < screenPosition) {
        sustainabilitySection.classList.add('visible');
    } else {
        sustainabilitySection.classList.remove('visible');
    }
});

// Form Validation
const form = document.querySelector('.contact form');
const submitButton = document.querySelector('.submit-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Check if required fields are filled out
    const nameInput = document.querySelector('#name'); // Example input field
    const emailInput = document.querySelector('#email'); // Example input field

    if (!nameInput.value || !emailInput.value) {
        alert('Please fill in all the fields!');
        return;
    }

    // If valid, submit the form (for demo purposes, just reset the form)
    form.reset();
    alert('Form submitted successfully!');
});

// Button hover effect using JavaScript (optional: adding extra functionality)
submitButton.addEventListener('mouseover', function () {
    submitButton.style.backgroundColor = '#3a9c4e'; // Change button color on hover
    submitButton.style.transform = 'translateY(-4px)';
});

submitButton.addEventListener('mouseout', function () {
    submitButton.style.backgroundColor = '#000000'; // Reset to original color
    submitButton.style.transform = 'translateY(0)';
});
