// Assignment Code
var generateBtn = document.querySelector("#generate");
let passChars = "abcdefghijklmnopqrstuvwxyz--ABCDEFGHIJKLMNOPQRSTUVWXYZ--1234567890--!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";


    // Write password to the #password input
    function writePassword() {

    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    function generatePassword() {

    //This will be the final password returned at the end of the function.
    let finalPW = "";

    //Creates the space where the enabled character types will be placed.
    let enabledChars = "";

    //Creates an array from passChars, dividing it into the character type groups.
    let passPool = passChars.split("--");

    //Determines how long the password will be.
    let passLength = parseInt(prompt("How long would you like your password to be?"));

    //If they type in a non integer, to asks them to reenter their preferred length.
    if (Number.isInteger(passLength) == false || passLength == 0){
        alert("Please specify a valid password length.")
        return "";
    }

    //If they try to create a password less then 8 characters long, it prompts confirms that they are comfortable with an insecure password.
    if (passLength <= 7){
        let caution = confirm("Secure passwords must be at least 8 characters long. Are you sure you want to continue?")
        if (caution == false){
            return "";
        }
    }

    //The following prompts ask the user for password content preferences and modifies the pool it will be randomly selecting from.
    let askLower = confirm("Would you like to include lower case characters?");
    if (askLower){
    enabledChars += passPool[0];
    }
    let askUpper = confirm("Would you like to include upper case characters?");
    if (askUpper){
    enabledChars += passPool[1];
    }
    let askNum = confirm("Would you like to include numerical characters?");
    if (askNum){
    enabledChars += passPool[2];
    }
    let askspecialChar = confirm("Would you like to include specials characters?");
    if (askspecialChar){
    enabledChars += passPool[3];
    }

    // If the user selected "No" for each of the character types, it alerts them to use a character type, then resets the function.
    if (enabledChars == ""){
        alert("You must select at least one character type for your password!")
        return "";
    }

    //Parses the specified length into an integer.
    

    //According to how many characters long the user specified, repeatedly adds random characters from the pool defined by the prompts.
    for (let i = 0; i < passLength; i++) { let random=Math.floor(Math.random() * enabledChars.length); finalPW +=enabledChars[random]; } 
    //Returns the final password. 
    return finalPW; }
    