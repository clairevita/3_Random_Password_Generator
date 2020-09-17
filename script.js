// Assignment Code
var generateBtn = document.querySelector("#generate");
let passChars = "abcdefghijklmnopqrstuvwxyz--ABCDEFGHIJKLMNOPQRSTUVWXYZ--1234567890123456789--!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";


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
    let unscrambledPW = "";

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
    if (passLength < 8 || passLength > 128){
        let caution = confirm("Secure passwords must be between 8 and 128 characters.")
        return "";
        
    }

    //This variable will be referenced to make sure at least one of each of the characters is being referenced in the final password.
    let safetyCheck = 0;
    //This establishes there should be at least 1 of each in the final password.
    let lowerBool = false;
    let upperBool = false;
    let numBool = false;
    let specialBool = false;

    //These boolean variables will be referenced after adding at least 1 of each in the final password.
    let lowerAdded = false;
    let upperAdded = false;
    let numAdded = false;
    let specialAdded = false;


    //The following prompts ask the user for password content preferences and modifies the pool it will be randomly selecting from.
    let askLower = confirm("Would you like to include lower case characters?");
    if (askLower){
    enabledChars += passPool[0];
    lowerBool = true;
    safetyCheck ++;
    }
    let askUpper = confirm("Would you like to include upper case characters?");
    if (askUpper){
    enabledChars += passPool[1];
    upperBool = true;
    safetyCheck ++;
    }
    let askNum = confirm("Would you like to include numerical characters?");
    if (askNum){
    enabledChars += passPool[2];
    numBool = true;
    safetyCheck ++;
    }
    let askspecialChar = confirm("Would you like to include specials characters?");
    if (askspecialChar){
    enabledChars += passPool[3];
    specialBool = true;
    safetyCheck ++;
    }

    // If the user selected "No" for each of the character types, it alerts them to use a character type, then resets the function.
    if (enabledChars == ""){
        alert("You must select at least one character type for your password!")
        return "";
    }

    for (let i = 0; i < passLength; i++) { 
        // If more than one character type is selected, which is identified by the safety check, then a safety sequences will be prompted, ensuring at least one of each selected character type is added.
        if(i<=3 && safetyCheck > 1){
            //If they selected lowercase, and a lowercase character hasn't been added yet, select one at random and add it to the string.
            if (lowerBool == true && lowerAdded == false){
                let passLower = passPool[0];
                let randomLower=Math.floor(Math.random() * passLower.length); unscrambledPW+= passLower[randomLower];
                lowerAdded = true;
            //If they selected uppercase, and an uppercase character hasn't been added yet, select one at random and add it to the string.
            } else if (upperBool == true && upperAdded == false){
                let passUpper = passPool[1];
                let randomUpper=Math.floor(Math.random() * passUpper.length); unscrambledPW+=passUpper[randomUpper];
                upperAdded = true;
            //If they selected numbers, and a numerical character hasn't been added yet, select one at random and add it to the string.
            } else if (numBool == true && numAdded == false){
                let passNum = passPool[2];
                let randomNum=Math.floor(Math.random() * passNum.length); unscrambledPW+=passNum[randomNum];
                numAdded = true;
            //If they selected special characters, and a special character hasn't been added yet, select one at random and add it to the string. 
            } else if (specialBool == true && specialAdded == false){
                let passSpecial = passPool[3];
                let randomSpecial=Math.floor(Math.random() * passSpecial.length); unscrambledPW+=passSpecial[randomSpecial];
            }
            //Once this process has been enacted for a maximum of 4 times (once for each possible character type), the algorithm begins to select them randomly.
        } else{
            let random=Math.floor(Math.random() * enabledChars.length); unscrambledPW +=enabledChars[random]; 
        } 
    } 
    
        //This splits the unscrambled password into an array so that it can be randomized.
        let jumbler = unscrambledPW.split("");

        let newPosition;
        let temporaryValue;

        //This is referred to as a Fisher-Yates Shuffle. It will be scrambling our password. Otherwise if the user selects lowercase, the password will always start with a lowercase character. 
        for (let i = passLength-1; i > 0; i--){
            //Starting with the last value in the jumbler array, this statement identifies the new position that a value in the array will be relocated to.
            newPosition = Math.floor(Math.random() * (i + 1));
            //The currently selected value in the for loop is assigned as a temporary value. 
            temporaryValue = jumbler[i];
            //It's replaced with the value from the original array that was randomly selected with the newPosition statement.
            jumbler[i] = jumbler[newPosition];
            //The newPosition location is replaced by the currently selected value in the for loop.
            jumbler[newPosition] = temporaryValue;    

            //This process is repeated until all of the items have been relocated (at least) once. They may be swapped more than once. 

        }
        //Composes the scrambled array as the password string.
        scrambledPW = jumbler.join('');
        
        //Returns the final password. 
        return scrambledPW;
    


    }
    
     
    