// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  /*
   Spaces should be maintained throughout.
   Capital letters can be ignored.*/

  function substitution(input, alphabet, encode = true) {
    const normalAbc = "abcdefghijklmnopqrstuvwxyz";
    let secretCode = "";

    if (!alphabet || alphabet.length != 26 || /([a-z]).*?\1/g.test(alphabet))
      return false;

    for (let letter of input.toLowerCase()) {
      if (letter === " ") {
        secretCode += letter;
      } else {
        if (encode === false) {
          let actualIndex = alphabet.indexOf(letter);
          secretCode += normalAbc[actualIndex];
        } else {
          let letterIndex = normalAbc.indexOf(letter);
          secretCode += alphabet[letterIndex];
        }
      }
    }
    return secretCode;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

///31 passing
/*const normalAbc = 'abcdefghijklmnopqrstuvwxyz'
    let secretCode = ''
    
    if(!alphabet ||alphabet.length != 26 || (/([a-z]).*?\1/g).test(alphabet)) return false

    for (let letter of input.toLowerCase()){
      if(letter === ' '){
         secretCode += letter
      }else{
       let letterIndex = normalAbc.indexOf(letter)
       secretCode += alphabet[letterIndex]        }      
       }
       return secretCode
      } x*/
