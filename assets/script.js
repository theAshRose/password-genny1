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
        alert("PLEASE RE-READ THE QUESTION, ANSWER APPROPRIATELY!");    //<---------------------------if the 'if' statement returns TRUE an alert is displayed 
        generatePassword();    //<--------------------------------------------------------------------and the function is called again so the user may enter accepted input
    };
    var charLowerCaseOption = confirm("Press 'OK' if you'd like lowercase letters in your password! 'Cancel' if not");//prompt asking user Y/N question to acceptance of a character type into their password
    if (charLowerCaseOption) {                               //<--------------------------------------------------------if true, then..
        generatingPassword += generatingPassword.concat(charLowerCase);  //<--------------------------------------------generatingPassword adds the designated array into itself using += and .concat
    }
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
    if (generatingPassword.length === 0) {                                                          //<--above if statements are ran until this final conditional
        alert("You messed up, pick at least one character type for your password, buddy!");         //---where if true, generatePassword is run again - the user must start over
        generatePassword();
    }
    for (var x = 0; x < charLength.length; x++) { //-----For loop iterates through the subsequent math.random function for only the length of "charLength"                                      
        finalPassword = finalPassword + generatingPassword[Math.floor(Math.random() * generatingPassword.length)]; //compiling random elements from 'generatedPassword' array into 'finalPassword' in accordance with previous for loop(designated length)
    }
    return finalPassword; //finally generating our password and returning to the writePassword function, where it is converted into password -- > passwordText --> written into the document
}