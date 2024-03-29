
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
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// adds click listener to generate button
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

  //initializes desired characters
  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  //checks the desired password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password to be? \nPassword must be more than 8 and less than 128 characters.");

    //if the user presses cancel, returns this message
    if (passwordLength === null) {
      return "Didn't wanna give you one anyways. :(";
    }
    else {
      //makes sure the user enters a number; returns this message
      if (!isFinite(passwordLength)) {
        alert("You have to enter a number between 8 - 128");
        return "Gotta enter a number chief";
      }
      else {
        //checks if the password meets length criteria; if not returns this message
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 - 128 characters.");
          return "Gotta read the directions";
        }
        else {

          //this show prompts
          showPrompts();

          //adds selected characters until it reaches the desired number designated by user
          while (pwdCriteria.pwdLength < passwordLength) {
            //if statement to make sure the user selects at least one of the options  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You gotta select at least one option pal: lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            //these else if's determine what options the user selects and as long as there is still room for the character will randomly update the password length by 1 until the desired user amount is reached.
            else {
              if (upperCase === true && pwdCriteria.pwdLength < passwordLength) {
                    var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                    result = result + uc;
                    pwdCriteria.pwdLength++;
                  }
              if (lowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                    var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                    result = result + lc;
                    pwdCriteria.pwdLength++;
                  }
              if (numbers === true && pwdCriteria.pwdLength < passwordLength) {
                    var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                    result = result + num;
                    pwdCriteria.pwdLength++;
                  }            
              if (specialChar === true && pwdCriteria.pwdLength < passwordLength) {
                    var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                    result = result + sc;
                    pwdCriteria.pwdLength++;
                  }
    
            }
          }
        }
      }
    }

    //returns the generated password back to calling function
    return result;

    //prompts to select which characters the user would like in their password
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}