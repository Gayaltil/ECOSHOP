const centers = [
    {
        name: 'Recycling Centers A ',
        location: 'New York',
        services: 'Electronics, Furniture',
        image: 'images/03.jpeg' // Image path
    },
    {
        name: 'Recycling Centers B',
        location: 'San Francisco',
        services: 'Clothing, Appliances',
        image: 'images/04.jpeg' // Image path
    },
    {
        name: 'Recycling Centers B',
        location: 'Los Angeles',
        services: 'Electronics, Furniture, Clothing',
        image: 'images/05.jpeg' // Image path
    },
    {
        name: 'Recycling Centers B',
        location: 'Los Angeles',
        services: 'Electronics, Furniture, Clothing',
        image: 'images/05.jpeg' // Image path
    },
    {
        name: 'Recycling Centers C',
        location: 'Chicago',
        services: 'Appliances, Electronics',
        image: 'images/06.jpeg' // Image path
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const centerList = document.getElementById('center-list');

    // Function to render centers
    function renderCenters(filteredCenters) {
        centerList.innerHTML = ''; // Clear the list
        filteredCenters.forEach(center => {
            const listItem = document.createElement('li');
            listItem.classList.add('center-item'); // Add a class for styling

            listItem.innerHTML = `
                <img src="${center.image}" alt="${center.name}" class="center-image">
                <div class="center-info">
                    <h4>${center.name}</h4>
                    <p><strong>Location:</strong> ${center.location}</p>
                    <p><strong>Services:</strong> ${center.services}</p>
                </div>
            `;
            centerList.appendChild(listItem);
        });
    }

    // Initial render
    renderCenters(centers);

    // Search functionality
    searchButton.addEventListener('click', function () {
        const searchQuery = searchInput.value.toLowerCase();
        const filteredCenters = centers.filter(center =>
            center.name.toLowerCase().includes(searchQuery) ||
            center.location.toLowerCase().includes(searchQuery) ||
            center.services.toLowerCase().includes(searchQuery)
        );
        renderCenters(filteredCenters);
    });

    // Optional: Allow pressing 'Enter' to search
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
