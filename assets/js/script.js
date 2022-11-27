// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharactersArray = ["!","#","$","%","&","*","+", "-","/",":",";","<","=","]",">","?","@","[","^"];

function pickRandomChar(randomArray){
    var randomChar = Math.floor(Math.random() * randomArray.length);
    
    return randomArray[randomChar];

};

function generatePassword(){
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain?", "8 - 128 characters"));
    var password = '';
    var combinedArr = [];
    
    if(!(passwordLength >= 8 && passwordLength <= 128)){
        alert('Password must be a number betwween 8 and 128');
        return;
    }

    var includesNumber = confirm("Click OK to confirm including numeric characters.");
    var includesSpecialCharaters = confirm("Click OK to confirm including special characters.");
    var includesUppercase = confirm("Click OK to confirm including uppercase.")  ;
    var includesLowercase = confirm("Click OK to confirm including lowercase.")  ;

    if(!includesNumber || !includesSpecialCharaters || !includesUppercase || !includesLowercase){
        alert('Password must be inclueds number,special characters,uppercase,lowercase.');
        return;
    };

    if(includesNumber) {
        password += pickRandomChar(numberArray)
        combinedArr  =  combinedArr.concat(numberArray)
    }
    
    if(includesSpecialCharaters) {
        password += pickRandomChar(specialCharactersArray)
        combinedArr = combinedArr.concat(specialCharactersArray)
    }
    if(includesUppercase){
        password += pickRandomChar(uppercaseArray)
        combinedArr = combinedArr.concat(uppercaseArray)
    }
    if(includesLowercase){
        password += pickRandomChar(lowercaseArray)
        combinedArr = combinedArr.concat(lowercaseArray)
    }
    
    var remainingPasswordLength = passwordLength - password.length
    
    for(var i = 0; i < remainingPasswordLength; i++){
        password += pickRandomChar(combinedArr);
    }
    
    return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
