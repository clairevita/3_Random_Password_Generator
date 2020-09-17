# 3_Random Password Generator

## Script.js

This script randomly generates passwords according to the users preference. This script can be broken into four sections, simply and effectively meeting the provided criteria.

### On Start

When the page is opened the DOM API is used to connect to the textarea where the password will be located. Most notably, all possible password characters are established in the string `passChars`. 

### Button Press Initiation

Once the HTML button is pressed, `finalPW` and `enabledChars` are opened as empty strings, acting as containers where the final password and selected character types will be stored. 

`passPool` is set to equal `passChars.split("--")`, so each of the character types are distributed as indexes into an array. 

### Prompt Initiation

The first prompt, `passLength`, is requests the user specify their preffered password length. A check is made to ensure that their inputted value is a valid integer, not equal to zero and then inbetween 8 and 128. 

Next, the confirm requests `askLower`, `askUpper`, `askNum`, and `askspecialChar` ask the user if they want lower case, upper case, number, and/or special characters. After each prompt, the respective `passPool[i]` will be added to the `enabledChars` container as a string.

If the user selected no characters, they will be alerted for their mistake, then returned.

### Random Character Selection

Once they've selected their character types, the follow for loop is called:
```
for (let i = 0; i < passLength; i++) { let random=Math.floor(Math.random() * enabledChars.length); finalPW +=enabledChars[random]; } 
```
Repeating for a length according to the user's `passLength`, the loop selects a number from `0` to 1 less than`enabledChars.length` as an index, defined as `random`. The loop adds a character from `enabledChars` from the `random` index slot, then adds it to the `finalPW` string.

After `passLength` loops, the  `finalPW` is returned to the user, populating the text area.

