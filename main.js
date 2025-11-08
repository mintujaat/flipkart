// Mock product data
const products = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Latest model with high-end specs.',
    price: 15000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZjgOJbRbMuEkwG0HJz9Q8UkSwQ_zwuQvPQ&s',
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'Powerful laptop for all your needs.',
    price: 45000,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTC-zPcMn6giu3a5YVyxRKHJzVFlccsLPctDVafi6E5BzuRonlXASTQnNlHPF0cIsjyCQL2RKvQSmc81quiDuLfVXZ6HTy2cRBbct_4xdQkNhtaUJjhJ8wkOw',
  },
  // Add more products as needed
];

const cart = [];

// Display products on the homepage
const productsContainer = document.getElementById('products');
if (productsContainer) {
  products.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} INR</p>
        <a href="product.html?id=${product.id}">View Details</a>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
}

// Load product details on the product page
const productDetails = window.location.search;
if (productDetails.includes('?id=')) {
  const id = new URLSearchParams(productDetails).get('id');
  const product = products.find(p => p.id == id);

  if (product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = product.price;
  }
}

// Add to Cart
function addToCart() {
  const productId = new URLSearchParams(window.location.search).get('id');
  const product = products.find(p => p.id == productId);
  cart.push(product);
  alert('Product added to cart');
}

// Display cart items
const cartItemsContainer = document.getElementById('cart-items');
if (cartItemsContainer) {
  cart.forEach(item => {
    const cartItem = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>${item.price} INR</p>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItem;
  });
}

// Proceed to checkout (basic alert)
function checkout() {
  alert('Checkout functionality not implemented yet.');
}