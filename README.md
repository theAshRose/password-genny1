# Password-Genny1

## Description

This is my first iteration of JavaScript logic in the form of a password generator. [Here is a link to the application](https://thedomconrad.github.io/password-genny1/)
I am quite proud of this project as i had a hard time starting it, but learned a lot about JavaScript in the process. How functions, arrays and variables interact, along with some methods, are much more clear to me now than before.

## How to use

Simply click the red button and answer the prompts accordingly! Don't worry, if you don't answer appropriately the application will just reset. If you do get your password generated and want a different one just refresh the page before clicking again. Thank you and enjoy!

## Screenshot of app

![screenshot](./assets/password-genny1.png)

## the Code!
Everyones' favorite bit. (the notes were so long i had to snip the only chunk of code without them, please see files for notes!)

```
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

```

## Author Links
---[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---