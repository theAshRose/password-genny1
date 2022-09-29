//
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page





// Assignment Code
var charLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ",", ">", ".", "?", "/"];
var generatedPassword = []
var charLength = [];
var RNG = []

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  charLength.length = prompt("Please enter a number for password length between 8-128 characters")
  if (charLength.length < 8 || charLength.length > 128) {
    alert("PLEASE RE-READ THE QUESTION, ANSWER APPROPRIATELY!");
    generatePassword();
  };
  var charLowerCaseOption = confirm("Press 'OK' if you'd like lowercase letters in your password! 'Cancel' if not");
  if (charLowerCaseOption) {
    generatedPassword += generatedPassword.concat(charLowerCase);
  }
  var charUpperCaseOption = confirm("Press 'OK' if you'd like UPPERCASE letters in your password! 'Cancel' if not");
  if (charUpperCaseOption) {
    generatedPassword += generatedPassword.concat(charUpperCase);
  }
  var charNumericOption = confirm("Press 'OK' if you'd like numbers(0-9) in your password! 'Cancel' if not");
  if (charNumericOption) {
    generatedPassword += generatedPassword.concat(charNumeric);
  }
  var charSpecialOption = confirm("Press 'OK' if you'd like special(!@#$) letters in your password! 'Cancel' if not");
  if (charSpecialOption) {
    generatedPassword += generatedPassword.concat(charSpecial);
  }
  if (charLength.length === 0) {
    alert("You messed up, pick at least one character type for your password, buddy!");
    generatePassword();
  }
  }

  function randomEyes(){
    var RNG = generatedPassword[Math.floor(Math.random() * generatedPassword.length)]; 

    for (var x = 0; x < generatedPassword.length; x++)
   
      if (generatedPassword[x] > charLength.length) {
        generatedPassword.pop();
      }
    }
    randomEyes();


  console.log(generatedPassword);
  console.log(generatedPassword.length);
  console.log(charLength);
  console.log(charLength.length);
  console.log(RNG);
  


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


/// function order -->
/// 1. button clicky
/// 2. prompts eleminating/including arrays(character types) from final equation 
/// 3. prompts needed:
///     -pw length: 8-128. user enters a number, if user entry <8 or >128 alert error and prompt pw length again
///     -i would like multiple choice prompt including: lowercase, uppercase, numeric, special characters- minimum selection is one character type
///     // "Press 'OK' if you'd like lowercase letters in your password! 'Cancel' if not"

/// get final password length
/// get midway array password characters accepted by user compiled 
/// populate parent array with random selections from 
/// OR we shuffle all items in "generatedPassword" array, then cut away all array items past the user-defined charlength