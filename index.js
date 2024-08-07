let cart = [];

function addToCart(productId) {
  const product = document.querySelector(`[data-id="${productId}"]`);
  const productName = product.querySelector("h3").textContent;
  const productPrice = parseFloat(product.querySelector("p").textContent.replace("$", ""));
  
  cart.push({ id: productId, name: productName, price: productPrice });
  
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  
  cartItems.innerHTML = "";
  
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeFromCart(item.id);
    
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    
    total += item.price;
  });
  
  cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}