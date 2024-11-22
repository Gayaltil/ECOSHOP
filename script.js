// Function to handle navigation for buttons
function navigateTo(page) {
    console.log(`Navigating to: ${page}`);
    // Check which page to navigate to and set the appropriate URL
    const pageUrls = {
        product: 'product-page-url', // Replace with actual product page URL
        service: 'service-page-url'  // Replace with actual service page URL
    };

    const url = pageUrls[page];
    if (url) {
        window.location.href = url;
    } else {
        console.error(`Page not found: ${page}`);
    }
}

// Map search and newsletter functionality would remain unchanged as you provided earlier

// For auto-scrolling the deals carousel
function autoScrollDeals() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;  // Ensure the carousel exists

    const firstDeal = carousel.firstElementChild;
    carousel.appendChild(firstDeal); // Move the first deal to the end, creating a looping effect

    // Optional: Apply smooth transition for carousel movement
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = 'translateX(-100%)'; // Start transition to the left
    setTimeout(() => {
        // After the transition ends, reset the position of the carousel
        carousel.style.transition = 'none'; // Disable transition temporarily
        carousel.appendChild(firstDeal); // Move the first deal to the end
        carousel.style.transform = 'translateX(0)';
    }, 500); // Match the timing to the transition duration
}

// Call autoScrollDeals every 4 seconds to rotate the deals carousel
setInterval(autoScrollDeals, 4000);
