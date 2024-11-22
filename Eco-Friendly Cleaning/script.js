// Sample product data
const products = [
    { id: 1, category: "home", name: "Eco Dish Soap", description: "Plant-based and biodegradable.", image: "images/02.jpeg" },
    { id: 2, category: "office", name: "Recycled Paper Towels", description: "Made from 100% recycled materials.", image: "images/03.jpeg" },
    { id: 3, category: "laundry", name: "Natural Laundry Detergent", description: "Gentle on clothes and the environment.", image: "images/04.jpeg" },
    { id: 4, category: "home", name: "All-Purpose Cleaner", description: "Non-toxic and eco-friendly.", image: "images/05.jpeg" },
];

// Render products dynamically
function renderProducts(category = "all") {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; // Clear existing products
    const filteredProducts = category === "all" ? products : products.filter(p => p.category === category);
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        grid.innerHTML += productCard;
    });
}

// Event listeners for filter
document.getElementById("filter-button").addEventListener("click", () => {
    const category = document.getElementById("category-filter").value;
    renderProducts(category);
});

// Initial render
renderProducts();
