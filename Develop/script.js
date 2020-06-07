// Assignment code here

// Character variables
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

// Password prompt questions + validation
function generatePassword() {
    var pwLength = prompt("How many characters would you like your password to be? Please select a number between 8-128.");

    while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        if (pwLength === null) return; 
        pwLength = prompt("Please enter a number between 8-128");
    }

    selectInput(pwLength);
}

// Character type prompts
function selectInput(pwLength) {
    var lower = confirm ("Would you like to use lowercase characters? (OK=YES, Cancel=NO");
    var upper = confirm ("Would you like to use UPPERCASE characters? (OK=YES, Cancel=NO");
    var nums = confirm ("Would you like to use numbers? OK=YES, CANCEL=NO");
    var symbols = confirm ("Would you like to use special characters? (OK=YES, Cancel=NO");

    while (!uppers && !lowers && !numbers && !symbols) {
        alert("You must select at least one character type!");
        uppers = confirm("Would you like to use uppercase letters?");
        lowers = confirm("Would you like to use lowercase letters?");
        numbers = confirm("Would you like to use numbers?");
        symbols = confirm("Would you like to use special characters?");      
}

var pwCriteria = {
    pwLength : pwLength,
    lower : lower,
    upper : upper,
    nums : nums,
    symbols :symbols
    };

    createPassword(pwCriteria);
}

function createPassword(pwCriteria) {
    var pwArray = [];
    while (pwArray.length < pwCriteria.pwLength) {
        if (pwLength.lower){
            pwArray.push(lowerCase[genRanom(lowerCase)]);
        }
        
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);