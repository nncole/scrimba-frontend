const passwordLength = document.querySelector("#password-length");
const sliderValue = document.querySelector("#slider-value");
const generateBtn = document.querySelector("#generate-btn");
const passwordsContainer = document.querySelector("#generated-passwords");
const generatedPassword = document.querySelectorAll(".password")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

passwordLength.addEventListener("input", function(){
  sliderValue.textContent = passwordLength.value;
})


function generatePassword(length) {
  let option = "";

  for (let i = 0; i < length; i++){
    const char = Math.floor(Math.random() * characters.length);
    option += characters[char]
  }
  return option;
}

generateBtn.addEventListener("click", function(){
  passwordsContainer.style.visibility = "visible";

  const length = parseInt(passwordLength.value, 10);

  for (const password of generatedPassword) {
    password.textContent = generatePassword(length);
  }
})