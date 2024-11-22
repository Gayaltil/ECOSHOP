// List of products
const products = [
    {
        name: "Mangoes",
        image: "images/07.jpeg",
        description: "Fresh and crisp organic Mangoes.",
        price: "$3.99 per lb"
    },
    {
        name: "Apples",
        image: "images/06.jpeg",
        description: "Fresh and crisp organic Apples.",
        price: "$2.99"
    },
    {
        name: "Berries",
        image: "images/05.jpeg",
        description: "Fresh and crisp organic Berries",
        price: "$6.49"
    },
    {
        name: "Spinach",
        image: "images/09.jpeg",
        description: "Fresh Spinach.",
        price: "$1.99 per bunch"
    },
    {
        name: "Carrot",
        image: "images/08.jpeg",
        description: "Fresh Carrot.",
        price: "$1.99 per bunch"
    },
    {
        name: "broccoli",
        image: "images/10.jpeg",
        description: "Fresh broccoli.",
        price: "$1.99 per bunch"
    },
    {
        name: "Grass-fed milk",
        image: "images/12.jpeg",
        description: "Fresh Grass-fed milk.",
        price: "$1.99 per bunch"
    },
    {
        name: "tomatoes",
        image: "images/11.jpeg",
        description: "Fresh tomatoes.",
        price: "$1.99 per bunch"
    },
    {
        name: "cheese",
        image: "images/13.jpeg",
        description: "Fresh cheese.",
        price: "$1.99 per bunch"
    },
    {
        name: "yogurt",
        image: "images/14.jpeg",
        description: "Fresh yogurt.",
        price: "$4.99"
    },
    {
        name: "Herbal teas",
        image: "images/17.jpeg",
        description: "Fresh herbal teas.",
        price: "$4.99"
    },
    {
        name: "Free-range eggs",
        image: "images/16.jpeg",
        description: "Fresh free-range eggs",
        price: "$4.99"
    },
    {
        name: "Organic honey",
        image: "images/15.jpeg",
        description: "Fresh Organic honey.",
        price: "$5.49 per dozen"
    }
];

// Render products dynamically
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <button>Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
});
