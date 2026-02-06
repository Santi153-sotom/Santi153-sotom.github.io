let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function displayCart() {
    let list = document.getElementById("cartItems");
    let total = 0;

    if (!list) return;

    list.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₱" + item.price;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: ₱" + total;
}

function clearCart() {
    localStorage.removeItem("cart");
    alert("Thank you for your purchase!");
    window.location.href = "index.html"; 
}

displayCart();
