// ============================
// AUTH SYSTEM
// ============================

function registerUser() {

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (!name || !email || !password) {
    alert("Fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Prevent duplicate email
  const exists = users.find(user => user.email === email);
  if (exists) {
    alert("Email already registered");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful 🚀");
  window.location.href = "login.html";
}

function handleLogin() {

  const username = document.querySelector("input[type='text']").value.trim();
  const password = document.querySelector("input[type='password']").value.trim();
  const role = document.getElementById("role").value;

  if (role === "admin") {
    localStorage.setItem("loggedInUser", "Admin");
    window.location.href = "admin.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(user =>
    user.name === username && user.password === password
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", validUser.name);
    window.location.href = "menu.html";
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

  cart.push({
    name: item,
    price: Number(price)
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  alert(item + " added to cart!");
}

function updateCartCount() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }
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
    total += Number(item.price);
  });

  if (totalEl) totalEl.innerText = total;
}


// ============================
// ADMIN ADD DRINK
// ============================

function addDrink() {

  const name = document.getElementById("drinkName")?.value.trim();
  const price = document.getElementById("drinkPrice")?.value.trim();

  if (!name || !price) {
    alert("Enter drink details");
    return;
  }

  let drinks = JSON.parse(localStorage.getItem("customDrinks")) || [];

  drinks.push({
    name,
    price: Number(price)
  });

  localStorage.setItem("customDrinks", JSON.stringify(drinks));

  alert("Drink Added: " + name + " ₹" + price);

  document.getElementById("drinkName").value = "";
  document.getElementById("drinkPrice").value = "";
}


// ============================
// PAGE LOAD EVENTS
// ============================

window.addEventListener("load", () => {

  updateCartCount();
  loadCartPage();

  const user = localStorage.getItem("loggedInUser");
  const navBtn = document.querySelector(".nav-btn");

  if (user && navBtn) {
    navBtn.innerText = "Logout";
    navBtn.onclick = logoutUser;
  }

});