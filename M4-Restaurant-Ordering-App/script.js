import { menuArray } from "./data.js";

const menuContainer = document.querySelector("#menu-container");
const orderContainer = document.querySelector("#order-container");

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
  }
});

// ADD/REMOVE ORDERS

let orders = [];

function addOrder(itemID) {
  const item = menuArray.find(item => item.id === itemID);
  orders.push(item);
  renderOrder();
};

// RENDER ORDERS

function renderOrder() {
  orderContainer.innerHTML = `
    <h2>Your Order</h2>

    <div class="order-item">
      ${orders.map(item => `
        <p class="name">${item.name}</p>
        <button class="remove-btn" data-id="${item.id}">remove</button>
        <p class="price">$${item.price}</p>
      `).join("")}
    </div>

    <div class="divider"></div>

    <div class="order-total">
      <h3>Total price:</h3>
      <div class="price" id="total-price">$0</div>
    </div>

    <button id="complete-order-btn">Complete order</button>
  `;
};