import { menuArray } from "./data.js";

const menuContainer = document.querySelector("#menu-container");

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