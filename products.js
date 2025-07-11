const products = [
  { name: "Smartphone", category: "tech", price: 499, rating: 4.6 },
  { name: "Wireless Earbuds", category: "tech", price: 79, rating: 4.3 },
  { name: "Laptop", category: "tech", price: 999, rating: 4.8 },
  { name: "T-Shirt", category: "fashion", price: 25, rating: 4.2 },
  { name: "Sneakers", category: "fashion", price: 60, rating: 4.5 },
  { name: "Smartwatch", category: "tech", price: 199, rating: 4.4 },
  { name: "Jacket", category: "fashion", price: 85, rating: 4.1 }
];

let filtered = [...products];

function displayProducts(productArray) {
  const list = document.getElementById('productList');
  list.innerHTML = '';

  if (productArray.length === 0) {
    list.innerHTML = '<p>No products found 🚫</p>';
    return;
  }

  productArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>📂 Category:</strong> ${product.category}</p>
      <p><strong>💸 Price:</strong> $${product.price}</p>
      <p><strong>⭐ Rating:</strong> ${product.rating}</p>
    `;
    list.appendChild(card);
  });
}

function filterAndSort() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortFilter').value;

  filtered = category ? products.filter(p => p.category === category) : [...products];

  if (sort === 'price') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

window.onload = () => {
  filterAndSort(); // ✅ Ensure it loads products when the page loads
};
