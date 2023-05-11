// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
  var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*_-+=";
  var randomPassword = "";
  var selected = "";

  var length = parseInt(prompt("Select a password length between 8 and 128 characters"));

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid password input. Please try again!");
  } else {

    var containsLower = confirm("Would you like to include lowercase letters?");
    var containsUpper = confirm("Would you like to include uppercase letters?");
    var containsNumbers = confirm("Would you like to include numbers?");
    var containsSpecial = confirm("Would you like to include special characters?");

    if (!containsLower && !containsUpper && !containsNumbers && !containsSpecial) {
      alert("You must choose at least one character type!");
    }
    if (containsLower) {
      selected += lowerLetter;
    }
    if (containsUpper) {
      selected += upperLetter;
    }
    if (containsNumbers) {
      selected += numbers;
    }
    if (containsSpecial) {
      selected += special;
    }
  }

  for (var i = 0; i < length; i++) {
    randomPassword += selected.charAt(Math.floor(Math.random() * selected.length));
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);