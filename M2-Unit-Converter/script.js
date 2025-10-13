const resLength = document.querySelector("#result-length");
const resVolume = document.querySelector("#result-volume");
const resMass = document.querySelector("#result-mass");

const convertBtn = document.querySelector("#convert-btn");

function getConversion() {
  let userInput = document.querySelector("#user-input").value;

  // Length (Meter/Feet)
  let feet = (userInput * 3.281).toFixed(3);
  let meter = (userInput / 3.281).toFixed(3);
  resLength.textContent = `${userInput} meters = ${feet} feet | ${userInput} feet = ${meter} meters`;

  // Volume (Liters/Gallons)
  let gallon = (userInput / 3.785).toFixed(3);
  let liter = (userInput * 3.785).toFixed(3);
  resVolume.textContent = `${userInput} liters = ${gallon} gallons | ${userInput} gallons = ${liter} liters`;

  // Mass (Kilograms/Pounds)
  let pound = (userInput * 2.205).toFixed(3);
  let kilogram = (userInput / 2.205).toFixed(3);
  resMass.textContent = `${userInput} kilos = ${pound} pounds | ${userInput} pounds = ${kilogram} kilos`;
};

convertBtn.addEventListener("click", () => {
  getConversion();
});