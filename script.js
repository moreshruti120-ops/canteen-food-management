// ============================
// AUTH SYSTEM
// ============================

function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("userData", JSON.stringify({
    name, email, password
  }));

  alert("Registration Successful 🚀");
  window.location.href = "login.html";
}

function handleLogin() {
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;
  const role = document.getElementById("role").value;

  if (role === "admin") {
    localStorage.setItem("loggedInUser", "Admin");
    window.location.href = "admin.html";
    return;
  }

  const saved = JSON.parse(localStorage.getItem("userData"));

  if (saved && username === saved.name && password === saved.password) {
    localStorage.setItem("loggedInUser", saved.name);
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials");
  }
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// ============================
// CART SYSTEM
// ============================

function addToCart(item, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: item, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(item + " added to cart!");
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerText = cart.length;
}

function loadCartPage() {
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if (!list) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li>Your cart is empty</li>";
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  if (totalEl) totalEl.innerText = total;
}

// ============================
// ADMIN ADD DRINK
// ============================

function addDrink() {
  const name = document.getElementById("drinkName").value;
  const price = document.getElementById("drinkPrice").value;

  if (!name || !price) {
    alert("Enter drink details");
    return;
  }

  alert("Drink Added: " + name + " ₹" + price);
}

// ============================
// PAGE LOAD EVENTS
// ============================

window.addEventListener("load", () => {
  updateCartCount();
  loadCartPage();

  const user = localStorage.getItem("loggedInUser");
  const nav = document.querySelector(".nav-btn");

  if (user && nav) {
    nav.innerText = "Logout";
    nav.onclick = logoutUser;
  }
});