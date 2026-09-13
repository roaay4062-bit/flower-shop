
// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// Shopping Cart
// ===============================

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const closeCart = document.getElementById("closeCart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

let cart = [];


// Open cart

cartBtn.addEventListener("click", () => {
    cartPopup.classList.add("active");
});


// Close cart

closeCart.addEventListener("click", () => {
    cartPopup.classList.remove("active");
});


// Close popup when clicking outside

cartPopup.addEventListener("click", (e) => {

    if (e.target === cartPopup) {
        cartPopup.classList.remove("active");
    }

});


// Add products

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const name = card.querySelector("h3").textContent;

        const price = parseFloat(
            card.querySelector("strong").textContent.replace("$", "")
        );

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1200);

    });

});


// Update cart

function updateCart() {

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">Your cart is empty.</p>`;

        cartTotal.textContent = "0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name}</span>
            <strong>$${item.price}</strong>
        `;

        cartItems.appendChild(div);

    });


    cartTotal.textContent = total.toFixed(2);

}


// ===============================
// Newsletter
// ===============================

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;

    if (email) {

        alert(
            "Thank you for subscribing to ROSE! 🌹"
        );

        newsletterForm.reset();

    }

});


// ===============================
// Quick View
// ===============================

document.querySelectorAll(".quick-view").forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.closest(".product-card");

        const name =
            product.querySelector("h3").textContent;

        const price =
            product.querySelector("strong").textContent;

        alert(
            `${name}\nPrice: ${price}\n\nBeautiful premium flower arrangement from ROSE.`
        );

    });

});