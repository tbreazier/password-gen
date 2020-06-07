// Assignment code here
// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Character variables
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numbers = '0123456789'.split('');
var special = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

function randomize(charSet) {
    return Math.floor(Math.random() * charSet.length);
}

// // Write password to the #password input
function createPassword(pwCriteria) {
    var pwArray = [];
    while (pwArray.length < pwCriteria.pwLength) {
        if (pwCriteria.lower){
            pwArray.push(lowerCase[randomize(lowerCase)]);
        }
        if (pwCriteria.upper){
            pwArray.push(upperCase[randomize(upperCase)]);
        }
        if (pwCriteria.nums){
            pwArray.push(numbers[randomize(numbers)]);
        }
        if (pwCriteria.symbols){
            pwArray.push(special[randomize(special)]);
        }     
    }
    var pwString = pwArray.join("");
    
    var passwordText = document.querySelector("#password");
  
    passwordText.value = pwString;
}

// Character type prompts
function selectInput(pwLength) {
    var lower = confirm ("Would you like to use lowercase characters? (OK=YES, Cancel=NO)");
    var upper = confirm ("Would you like to use UPPERCASE characters? (OK=YES, Cancel=NO)");
    var nums = confirm ("Would you like to use numbers? OK=YES, CANCEL=NO)");
    var symbols = confirm ("Would you like to use special characters? (OK=YES, Cancel=NO)");

    while (!upper && !lower && !numbers && !symbols) {
        alert("You must select at least one character type!");
        upper = confirm("Would you like to use uppercase letters?");
        lower = confirm("Would you like to use lowercase letters?");
        nums = confirm("Would you like to use numbers?");
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

// Password prompt questions + validation
function generatePassword() {
    var pwLength = prompt("How many characters would you like your password to be? Please select a number between 8-128.");

    while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        if (pwLength === null) return; 
        pwLength = prompt("Please enter a number between 8-128");
    }

    selectInput(pwLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
