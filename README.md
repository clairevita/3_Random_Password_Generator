# 3_Random Password Generator

## Script.js

This script randomly generates passwords according to the users preference. This script can be broken into four sections, simply and effectively meeting the provided criteria.

### On Start

When the page is opened the DOM API is used to connect to the textarea where the password will be located. Most notably, all possible password characters are established in the string `passChars`. 

### Button Press Initiation

Once the HTML button is pressed, `unscrambledPW` and `enabledChars` are opened as empty strings, acting as containers where the final password and selected character types will be stored. 

`passPool` is set to equal `passChars.split("--")`, so each of the character types are distributed as indexes into an array. 

### Prompt Initiation

The first prompt, `passLength`, is requests the user specify their preffered password length. A check is made to ensure that their inputted value is a valid integer, not equal to zero and then inbetween 8 and 128. 

Next, the confirm requests `askLower`, `askUpper`, `askNum`, and `askspecialChar` ask the user if they want lower case, upper case, number, and/or special characters. After each prompt, the respective `passPool[i]` will be added to the `enabledChars` container as a string. When a character type is selected, a boolean variable is set to `True` defined for that particular character style.

If the user selected no characters, they will be alerted for their mistake, then returned.

### Random Character Selection

Once they've selected their character types, a `for` loop is opened. To ensure that this loop includes at least once character type of each of the selected, it checks boolean statuses defined by the prompts and if it has been added yet.

If it has been ticked to be included and it has not been included yet, starting with lowercase characters, it uses the `passPool[i]` strings to randomly select a character. Once a character has been selected for particular bool-check, the added status is set to `True` for the following for loop pass. 

This process is only enacted is the index is less than or equal to 3 and if `safetyCheck` is greater than 1, an integer counter ensuring that more than one character type was selected. If `safetyCheck` is equal to 1, than there is no concern for exclusion of a particular character type, and free randomized character selection can be done.

The following script is our random character selection:

```
let random=Math.floor(Math.random() * enabledChars.length); unscrambledPW +=enabledChars[random]; 
``` 


### Jumbler

At this point in the script, we have a string called `unscrambledPW`. This is considered an unsecure password, because it will always start with the between 2 and 4 of the character criteria they selected in the listed order of lowercase, uppercase, numerical, then sepcial character. 

To ensure that the password is complete randomized with no consistent pattern, the script scrambles this previous string.

To do this we split the string into an array using:
```
let jumbler = unscrambledPW.split("");
```

Then performs the following Fisher-Yates Shuffle:
```
for (let i = passLength-1; i > 0; i--){
            //Starting with the last value in the jumbler array, this statement identifies the new position that a value in the array will be relocated to.
            newPosition = Math.floor(Math.random() * (i + 1));
            //The currently selected value in the for loop is assigned as a temporary value. 
            temporaryValue = jumbler[i];
            //It's replaced with the value from the original array that was randomly selected with the newPosition statement.
            jumbler[i] = jumbler[newPosition];
            //The newPosition location is replaced by the currently selected value in the for loop.
            jumbler[newPosition] = temporaryValue;
```

After this Fisher-Yates Shuffle is completed, we join the array values in their new order, then return the user the secure password. 