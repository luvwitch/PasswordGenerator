// Assignment Code

// what are global variables? (create array for each)|| can use empty array to catalog randomly generated items based on what was selected
   
  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");

   var specialArr = [";",".","(",")","@","!","#","$","%","^","&","*","<",">","-","_","+","=","/","|"];
   var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var numArr = ["1","2","3","4","5","6","7","8","9","0"];  
    

  var passArr = [];
  var password = "";  

//functions!

//Start!

function start(){
  var numPrompt = prompt("How long would you like your password? (Min 8 characters, Max 128)");
  getNum = parseFloat(numPrompt);  
  console.log(getNum);

  if (getNum <= "129" && getNum >= "8") {
   confirmArr();
   writePassword();
  } else {     
    alert("Must be between 8 and 128. Please try again.")    
  }  
};
  
//create character array
  
 function confirmArr(){   
    var confirmSpecial = confirm("Use special characters?");
      console.log(confirmSpecial);
      if (confirmSpecial === true){
        passArr = specialArr.concat(passArr);     
        } else {
        console.log("no special characters")
        };

    var confirmLC = confirm("Use lowercase letters?");
      console.log(confirmLC)    
      if (confirmLC === true){
        passArr = lowerCase.concat(passArr);
        } else {
        console.log("no lowercase")
        };   
   
    var confirmUC= confirm("Use uppercase letters?");
      console.log(confirmUC);
      if (confirmUC === true){
      passArr = upperCase.concat(passArr);
      } else {
      console.log("no uppercase")
      };
   
   
    var confirmNum = confirm("Use numbers?");
      console.log(confirmNum); 
      if (confirmNum === true){
      passArr = numArr.concat(passArr)
      } else {
      console.log("no numbers")
      };
    

    if ((confirmSpecial === false) && (confirmLC === false) && (confirmUC === false) && (confirmNum === false)){
      alert("Your password must contain at least one of the following: special characters, lower case letters, upper case letters, numbers.")
      } else {      
      console.log(passArr)
      writePassword()
    };
 };

// Write password to the #password input        

function writePassword(){
  let newPassword = ""; 
  var length = parseFloat(getNum);
    for (let i = 0; i < length; i++ ){
      const n = Math.floor(Math.random() * passArr.length); 
    newPassword += passArr[n];
    };
  password = newPassword;
  console.log(password); 
  passwordText.textContent = password;
};   

// event listener for generate button!

generateBtn.addEventListener("click", function(event) { 
  event.preventDefault();
  start(); 
});