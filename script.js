let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total;

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let html = "";
  cart.forEach((item, index) => {
    html += `<p>🛒 ${index + 1}. ${item.name} - ₹${item.price}</p>`;
  });

  html += `<p><strong>Total: ₹${total}</strong></p>`;

  cartContainer.innerHTML = html;
}
