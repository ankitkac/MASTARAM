const products = [
    {id: 1, name: "Laptop", price: 500, image: "assets/images/laptop.jpg"},
    {id: 2, name: "Mobile", price: 300, image: "assets/images/mobile.jpg"},
    {id: 3, name: "Headphones", price: 50, image: "assets/images/headphones.jpg"}
];

window.onload = function() {
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150px" height="150px">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId) {
    alert("Product added to cart!");
}
const products = [
    {id: 1, name: "Laptop", price: 500, description: "High-performance laptop", image: "assets/images/laptop.jpg"},
    {id: 2, name: "Mobile", price: 300, description: "Latest smartphone", image: "assets/images/mobile.jpg"},
    {id: 3, name: "Headphones", price: 50, description: "Noise-cancelling headphones", image: "assets/images/headphones.jpg"}
];

// Function to render a product based on URL parameter
function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = `Price: $${product.price}`;
    } else {
        document.getElementById('product-name').innerText = "Product not found";
    }
}

// Add product to cart
function addToCart() {
    alert("Product added to cart!");
}

window.onload = loadProduct;
// Mock function to simulate adding items to the cart
const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
}

// Load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.querySelector('.cart-list');
    let total = 0;

    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        cartList.appendChild(div);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: $${total}`;
}

// Checkout function
function checkout() {
    alert('Proceeding to checkout');
}

window.onload = loadCart;
const reviews = [];

// Function to display reviews
function displayReviews() {
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';

    reviews.forEach((review, index) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <p><strong>Review ${index + 1}</strong></p>
            <p>${review.text}</p>
            <p>Rating: ${review.rating}/5</p>
        `;
        reviewsDiv.appendChild(reviewDiv);
    });
}

// Function to add a review
document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const reviewText = document.getElementById('review-text').value;
    const reviewRating = document.getElementById('review-rating').value;

    if (reviewText && reviewRating) {
        reviews.push({ text: reviewText, rating: reviewRating });
        displayReviews();
        document.getElementById('review-form').reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Call this function to load the reviews on page load
displayReviews();
const orders = [
    { id: 1, product: "Laptop", price: 500, date: "2024-10-05" },
    { id: 2, product: "Mobile", price: 300, date: "2024-10-10" }
];

function loadOrders() {
    const orderHistory = document.getElementById('order-history');
    
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerHTML = `
            <p>Order ID: ${order.id}</p>
            <p>Product: ${order.product}</p>
            <p>Price: $${order.price}</p>
            <p>Date: ${order.date}</p>
        `;
        orderHistory.appendChild(orderDiv);
    });
}

window.onload = loadOrders;
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150px" height="150px">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productDiv);
    });
}
const wishlist = [];

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${product.name} added to wishlist!`);
    }
}

function loadWishlist() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistDiv = document.querySelector('.wishlist-items');
    
    wishlistItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        wishlistDiv.appendChild(div);
    });
}
const product = [
    {id: 1, name: "Laptop", price: 500, description: "High-performance laptop", image: "assets/images/laptop.jpg"},
    {id: 2, name: "Mobile", price: 300, description: "Latest smartphone", image: "assets/images/mobile.jpg"},
    {id: 3, name: "Headphones", price: 50, description: "Noise-cancelling headphones", image: "assets/images/headphones.jpg"},
    {id: 4, name: "Smartwatch", price: 150, description: "Stylish smartwatch", image: "assets/images/smartwatch.jpg"},
    {id: 5, name: "Tablet", price: 200, description: "Latest tablet with high resolution", image: "assets/images/tablet.jpg"},
    {id: 6, name: "Camera", price: 600, description: "Professional DSLR camera", image: "assets/images/camera.jpg"}
];