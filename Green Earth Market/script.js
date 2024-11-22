// List of products
const products = [
    {
        name: "Organic Apples",
        image: "images/02.jpg",
        description: "Fresh and crisp organic apples.",
        price: "$3.99 per lb"
    },
    {
        name: "Almond Milk",
        image: "images/03.jpeg",
        description: "Dairy-free and vegan almond milk.",
        price: "$2.99"
    },
    {
        name: "Organic Honey",
        image: "images/05.jpeg",
        description: "Raw and natural organic honey.",
        price: "$6.49"
    },
    {
        name: "Kale",
        image: "images/06.jpeg",
        description: "Fresh and nutrient-rich organic kale.",
        price: "$1.99 per bunch"
    },
    {
        name: "Whole Grain Bread",
        image: "images/07.jpeg",
        description: "Healthy and delicious whole grain bread.",
        price: "$4.99"
    },
    {
        name: "Organic Eggs",
        image: "images/08.jpeg",
        description: "Free-range and organic eggs.",
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
