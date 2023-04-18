
// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {

  //Property for length of password
  pwdLength: 0,

  //array to hold lowercase letters
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //array to hold uppercase letters
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //array to hold numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //array to hold special characters
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate new password
function generatePassword() {

  //holds password
  var result = "";

  //variables to collect inputs
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;

  //initialize characters
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password to be? \nPassword must be more than 8 and less than 128 characters.");

    //if the user presses cancel
    if (passwordLength === null) {
      return "Didn't wanna give you one anyways. :(";
    }
    else {
      //checking if the user enters a number
      if (!isFinite(passwordLength)) {
        alert("You have to enter a number between 8 - 128");
        return "Gotta enter a number chief";
      }
      else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 - 128 characters.");
          return "Gotta read the directions";
        }
        else {

          //this calls the internal function to show prompts for the criteria
          showPrompts();

          //this keeps adding characters until it reaches the desired number inputed by user
          while (pwdCriteria.pwdLength < passwordLength) {
            //if statement to make sure the user selects at least one of the options  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one of the options: lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            //these else if's determine what options the user selects and as long as there is still room for the character will randomly update the password length by 1 until the desired user amount is reached.
            else {
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }            
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }

    //return the generated password back to the calling function
    return result;

    //internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}