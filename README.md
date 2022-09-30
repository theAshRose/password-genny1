# Password-Genny1

## Description

    This is my first iteration of JavaScript logic in the form of a password generator. [Here is a link to the application](https://thedomconrad.github.io/password-genny1/)
    
    I am quite proud of this project as i had a hard time starting it, but learned a lot about JavaScript in the process. How functions, arrays and variables interact, along with some methods, are much more clear to me now than before.

## How to use

    Simply click the red button and answer the prompts accordingly! Don't worry, if you don't answer appropriately the application will just reset. If you do get your password generated and want a different one just refresh the page before clicking again. Thank you and enjoy!

## Screenshot of app

![screenshot](./assets/password-genny1.png)

## the Code!
    Everyones' favorite bit:
``
var charLowerCase = ["abcdefghijklmnopqrstuvwxyz"]; //Defining arrays as solid strings instead of an array of singular strings allows arrays to .concat without including commas as array elements
var charUpperCase = ["ABCDEFGHIJKLMMOPQRSTUVWXYZ"]; //uppercase array
var charNumeric = ["1234567890"];                   //number array
var charSpecial = ["!@#$%^&*()_-+=<,>.?/"];         //special character array
var generatingPassword = []; //<---------------intital aggregate array for user input
var finalPassword = [];     //<---------------final aggregate array for shuffled and trimmed user criteria
var charLength = [];        //<---------------length array defined by user, used to define length of 'finalPassword'
var generateBtn = document.querySelector("#generate"); //enables button on page
generateBtn.addEventListener("click", writePassword); //starting gun for our app, initiates writePassword function --VERY important
function writePassword() {   //<------------------------------function initiated upon our "click" event listener                         
    var password = generatePassword();  //<-------------------defining a variable by initiating "generatePassword" function, after
    var passwordText = document.querySelector("#password"); //takes the product of generatePassword function and prints it to designated location
    passwordText.value = password;   //<----------------------converts value from generatePassword function
}
function generatePassword() {  //Meat and potatoes of app where we gather all user data, combine it, shuffle and trim, then return
    charLength.length = prompt("Please enter a number for password length between 8-128 characters")//defining variable to gather length of user password via prompt
    if (charLength.length < 8 || charLength.length > 128) {     //<-----------------------------------returning boolean value as to whether length designated by user fits within certain peramiters
        alert("PLEASE RE-READ THE QUESTION, ANSWER APPROPRIATELY! Click 'Generate Password' to try again!"); //-------------------------------if the 'if' statement returns TRUE an alert is displayed
        window.location.reload();    //<--------------------------------------------------------------------page is refreshed to dump user data and prevent bugs
    };
    var charLowerCaseOption = confirm("Press 'OK' if you'd like lowercase letters in your password! 'Cancel' if not");//prompt asking user Y/N question to acceptance of a character type into their password
    if (charLowerCaseOption) {                               //<--------------------------------------------------------if true, then
        generatingPassword += generatingPassword.concat(charLowerCase);  //<--------------------------------------------generatingPassword adds the designated array into itself using += and .concat,
    }                                                                                                                 //repeating similar if statements until line 38
    var charUpperCaseOption = confirm("Press 'OK' if you'd like UPPERCASE letters in your password! 'Cancel' if not");
    if (charUpperCaseOption) {
        generatingPassword += generatingPassword.concat(charUpperCase);
    }
    var charNumericOption = confirm("Press 'OK' if you'd like numbers(0-9) in your password! 'Cancel' if not");
    if (charNumericOption) {
        generatingPassword += generatingPassword.concat(charNumeric);
    }
    var charSpecialOption = confirm("Press 'OK' if you'd like special(!@#$) letters in your password! 'Cancel' if not");
    if (charSpecialOption) {
        generatingPassword += generatingPassword.concat(charSpecial);
    }
    if (generatingPassword.length === 0) {            //<------------------------------------above if statements are ran until this final conditional
        alert("You messed up, pick at least one character type for your password, buddy! Click 'Generate Password' to try again!");//if true(aka, if they didnt select just one perameter);
        window.location.reload();                                                                                                 //and page is refreshed to dump all user data, preventing bugs/overwriting;
    }
    for (var x = 0; x < charLength.length; x++) {                                   
        finalPassword = finalPassword + generatingPassword[Math.floor(Math.random() * generatingPassword.length)]; 
    }                                //(line 44) For loop iterates through the subsequent math.random function for only the length of "charLength"
    return finalPassword; //-----------(line 45)compiling random elements from 'generatedPassword' array into 'finalPassword' in accordance with previous for loop(designated length)
}                         //-----------(line 47)finally generating our password and returning to the writePassword function, where it is converted into password -- > passwordText --> written into the document
``

## Author Links
---[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---