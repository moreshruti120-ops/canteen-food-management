// ============================
// AUTH SYSTEM
// ============================

function registerUser() {
<<<<<<< HEAD

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
=======
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b

  if (!name || !email || !password) {
    alert("Fill all fields");
    return;
  }

<<<<<<< HEAD
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Prevent duplicate email
  const exists = users.find(user => user.email === email);
  if (exists) {
    alert("Email already registered");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
=======
  localStorage.setItem("userData", JSON.stringify({
    name, email, password
  }));
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b

  alert("Registration Successful 🚀");
  window.location.href = "login.html";
}

function handleLogin() {
<<<<<<< HEAD

  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const role = document.getElementById("role")?.value;
=======
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;
  const role = document.getElementById("role").value;
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b

  if (role === "admin") {
    localStorage.setItem("loggedInUser", "Admin");
    window.location.href = "admin.html";
    return;
  }

<<<<<<< HEAD
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(user =>
    user.name === username && user.password === password
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", validUser.name);
    window.location.href = "menu.html";
=======
  const saved = JSON.parse(localStorage.getItem("userData"));

  if (saved && username === saved.name && password === saved.password) {
    localStorage.setItem("loggedInUser", saved.name);
    window.location.href = "index.html";
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
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
<<<<<<< HEAD

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: item,
    price: Number(price)
  });

  localStorage.setItem("cart", JSON.stringify(cart));

=======
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: item, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
  updateCartCount();
  alert(item + " added to cart!");
}

function updateCartCount() {
<<<<<<< HEAD

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

function loadCartPage() {

=======
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.innerText = cart.length;
}

function loadCartPage() {
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
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
<<<<<<< HEAD
    total += Number(item.price);
=======
    total += item.price;
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
  });

  if (totalEl) totalEl.innerText = total;
}

// ============================
// ADMIN ADD DRINK
// ============================

function addDrink() {
<<<<<<< HEAD

  const name = document.getElementById("drinkName")?.value.trim();
  const price = document.getElementById("drinkPrice")?.value.trim();
=======
  const name = document.getElementById("drinkName").value;
  const price = document.getElementById("drinkPrice").value;
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b

  if (!name || !price) {
    alert("Enter drink details");
    return;
  }

<<<<<<< HEAD
  let drinks = JSON.parse(localStorage.getItem("customDrinks")) || [];

  drinks.push({
    name,
    price: Number(price)
  });

  localStorage.setItem("customDrinks", JSON.stringify(drinks));

  alert("Drink Added: " + name + " ₹" + price);

  document.getElementById("drinkName").value = "";
  document.getElementById("drinkPrice").value = "";
=======
  alert("Drink Added: " + name + " ₹" + price);
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
}

// ============================
// PAGE LOAD EVENTS
// ============================

window.addEventListener("load", () => {
<<<<<<< HEAD

=======
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
  updateCartCount();
  loadCartPage();

  const user = localStorage.getItem("loggedInUser");
<<<<<<< HEAD
  const navBtn = document.querySelector(".nav-btn");

  if (user && navBtn) {
    navBtn.innerText = "Logout";
    navBtn.onclick = logoutUser;
  }

=======
  const nav = document.querySelector(".nav-btn");

  if (user && nav) {
    nav.innerText = "Logout";
    nav.onclick = logoutUser;
  }
>>>>>>> 07c61f22cd9bd541cdb8a332e02fda4644723b4b
});