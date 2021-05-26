// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let secretCode = "";
    if (shift === 0 || shift > 25 || shift < -25) return false;

    for (let letter of input.toLowerCase()) {
      if (letter < "a" || letter > "z") {
        secretCode += letter;
      } else {
        let currentIndex = abc.indexOf(letter);
        let newIndex = (currentIndex + shift) % 26;
        if (newIndex < 0) {
          newIndex = newIndex + 26;
        }
        if (encode === false) {
          if (letter < "a" || letter > "z") {
            secretCode += letter;
          } else {
            let anIndex = (currentIndex - shift) % 26;
            if (anIndex < 0) {
              anIndex = anIndex + 26;
            }
            secretCode += abc[anIndex];
          }
        } else {
          secretCode += abc[newIndex];
        }
      }
    }

    return secretCode;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

///18 passing
/* 
 const abc = 'abcdefghijklmnopqrstuvwxyz'
    let secretCode = ''
      if (shift === 0 || shift > 25 || shift < -25 )return false
   
        for (let letter of input.toLowerCase()){
          
           if ( letter < 'a' || letter > 'z') {
             secretCode += letter
            }else{
              let currentIndex = abc.indexOf(letter)
              let newIndex = (currentIndex + shift) % 26 
              if (encode === false) {      
                if ( letter < 'a' || letter > 'z') {
                  secretCode += letter
                  }else {     
                    let anIndex = (currentIndex - shift) %26 
                    secretCode += abc[anIndex] }
               }else {
                secretCode += abc[newIndex]          
               }
  
            }
        }      
        
    return secretCode

*/
