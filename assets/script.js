var charLowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var charUpperCase = ["ABCDEFGHIJKLMMOPQRSTUVWXYZ"];
var charNumeric = ["1234567890"];
var charSpecial = ["!@#$%^&*()_-+=<,>.?/"];
var generatedPassword = [];
var finalPassword = [];
var charLength = [];
var generateBtn = document.querySelector("#generate");
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
    for (var x = 0; x < charLength.length; x++) {
        finalPassword = finalPassword + generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
    }
    return finalPassword;
}
generateBtn.addEventListener("click", writePassword);