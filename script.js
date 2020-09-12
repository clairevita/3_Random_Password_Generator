// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let nonalphaChar = '!@#$%^&*()_+-=[]{},<.>/?\"|'

// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
let passLength = prompt("How Long?");
let askLower = confirm("");
let askUpper = confirm("");
let askNum = confirm(""); 
let askspecialChar = confirm("");
}