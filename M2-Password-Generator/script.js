const generateBtn = document.querySelector("#generate-btn");
const generatedPasswords = document.querySelector("#generated-passwords");

generateBtn.addEventListener("click", function(){
  generatedPasswords.style.visibility = "visible";
})