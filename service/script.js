// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Map Loading Simulation
    const mapElement = document.getElementById("map");
    setTimeout(() => {
        mapElement.classList.add("loaded"); // Add 'loaded' class to hide placeholder text
        mapElement.style.background = "#fff"; // Simulated background for a loaded map
    }, 2000); // Simulate a 2-second delay for loading

    // Service Finder Button Click Event
    document.querySelector(".hero-actions button").addEventListener("click", findServices);

    // Mock Service Finder Functionality
    function findServices() {
        const locationInput = document.getElementById("locationInput").value.trim();

        // Check if the user has entered a location
        if (locationInput) {
            alert(`Searching for eco-friendly services in "${locationInput}"...`);
            // In a real application, you would make an API call or perform a search here
        } else {
            alert("Please enter a city or zip code to search.");
        }
    }

    // Optional: Interactive Category Cards
    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
