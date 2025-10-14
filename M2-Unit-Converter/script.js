const resLength = document.querySelector("#result-length");
const resVolume = document.querySelector("#result-volume");
const resMass = document.querySelector("#result-mass");

const userInput = document.querySelector("#user-input");
const convertBtn = document.querySelector("#convert-btn");

function getConversion() {
  let val = userInput.value;

  // Length (Meter/Feet)
  let feet = (val * 3.281).toFixed(3);
  let meter = (val / 3.281).toFixed(3);
  resLength.textContent = `${val} meters = ${feet} feet | ${val} feet = ${meter} meters`;

  // Volume (Liters/Gallons)
  let gallon = (val / 3.785).toFixed(3);
  let liter = (val * 3.785).toFixed(3);
  resVolume.textContent = `${val} liters = ${gallon} gallons | ${val} gallons = ${liter} liters`;

  // Mass (Kilograms/Pounds)
  let pound = (val * 2.205).toFixed(3);
  let kilogram = (val / 2.205).toFixed(3);
  resMass.textContent = `${val} kilos = ${pound} pounds | ${val} pounds = ${kilogram} kilos`;
};

convertBtn.addEventListener("click", () => {
  if(userInput.value < 1 || userInput.value === "") {
    alert("Please enter a value greater than or equal to 1.");
    return;
  }
  
  getConversion();
});