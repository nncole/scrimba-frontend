import { menuArray } from "./data.js";

const menuContainer = document.querySelector("#menu-container");
const orderContainer = document.querySelector("#order-container");
const paymentModal = document.querySelector("#payment-modal");

// RENDER MENU

function renderMenu() {
  menuContainer.innerHTML = "";

  menuArray.forEach(item => {
    const createMenuItem = document.createElement("div");
    createMenuItem.classList.add("menu-item");

    createMenuItem.innerHTML += `
      <div class="emoji">${item.emoji}</div>
      <div class="item-info">
        <p class="name">${item.name}</p>
        <p class="ingredients">${item.ingredients.join(", ")}</p>
        <p class="price">$${item.price}</p>
      </div>
      <button class="add-btn" data-id="${item.id}">&plus;</button>
    `;

    menuContainer.appendChild(createMenuItem);
  });
};

renderMenu();

// EVENT LISTENER

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const itemID = Number(e.target.dataset.id);
    addOrder(itemID);
  } else if (e.target.classList.contains("remove-btn")) {
    const itemID = Number(e.target.dataset.id);
    removeOrder(itemID);
  } else if (e.target.id === "complete-order-btn") {
    renderModal();
  } else if (e.target.id === "pay-btn") {
    e.preventDefault();
    renderAlert();
  }
});

// ADD/REMOVE ORDERS

let orders = [];

function addOrder(itemID) {
  const item = menuArray.find(item => item.id === itemID);
  orders.push(item);
  renderOrder();
};

function removeOrder(itemID) {
  const index = orders.findIndex(item => item.id === itemID);
  
  if (index !== -1) {
    orders.splice(index, 1);
    renderOrder();
  }
};

// RENDER ORDERS

function renderOrder() {
  orderContainer.style.display = "none";

  if (orders.length !== 0) {
    orderContainer.style.display = "block";
    orderContainer.innerHTML = "";
  }

  orderContainer.innerHTML = `
    <h2>Your Order</h2>

    <div id="order-list">
      ${orders.map(item => `
        <div class="order-item">
          <p class="name">${item.name}</p>
          <button class="remove-btn" data-id="${item.id}">remove</button>
          <p class="price">$${item.price}</p>
        </div>
      `).join("")}
    </div>

    <div class="divider"></div>

    <div class="order-total">
      <h3>Total price:</h3>
      <div class="price" id="total-price">$${getTotalPrice()}</div>
    </div>

    <button id="complete-order-btn">Complete order</button>
  `;
};

// RENDER TOTAL PRICE

function getTotalPrice() {
  const totalPrice = orders.reduce((sum, item) => sum + item.price, 0);
  return totalPrice;
}

// RENDER PAYMENT MODAL

function renderModal() {
  paymentModal.innerHTML = "";
  
  const createModal = document.createElement("div");
  createModal.classList.add("modal");

  createModal.innerHTML = `
    <h2>Enter card details</h2>
    
    <form>
      <label for="form-name">Enter your name:</label>
      <input type="text" id="form-name" name="full-name" placeholder="Enter your name">

      <label for="form-number">Enter card number:</label>
      <input type="number" id="form-number" name="number" placeholder="Enter card number">

      <label for="form-cvv">Enter CVV:</label>
      <input type="number" id="form-cvv" name="cvv" placeholder="Enter CVV">

      <button id="pay-btn">Pay</button>
    </form>
  `;

  paymentModal.appendChild(createModal);

  paymentModal.style.display = "block";
};

function renderAlert() {
  paymentModal.style.display = "none";
  
  const createAlert = document.createElement("div");
  createAlert.classList.add("alert");

  const getName = document.getElementById("form-name").value;

  createAlert.innerHTML = `
    <p>Thanks, ${getName}! Your order is on its way!</p>
  `;

  document.body.appendChild(createAlert);

  orders = [];
  orderContainer.style.display = "none";
}