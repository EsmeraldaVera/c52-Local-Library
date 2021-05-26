// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function getNumPairs(pair) {
    let numPairs = [];

    do {
      numPairs.push(pair.substring(0, 2));
      pair = pair.substring(2, pair.length);
    } while (pair.length > 0);
    return numPairs;
  }
  // you can add any code you want within this function scope
  const encodeAlpha = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const decode = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    let tempArray = "";

    if (encode) {
      return encoding(input);
    } else {
      return decodeHelper(input);
    }
  }

  function decodeHelper(input, encode = false) {
    const tempArray = [];

    for (let i = 0; i < input.length; i = i + 2) {
      if (input.split(" ").join("").length % 2 != 0) return false;
      let currentNum = input[i];
      let nextNum = input[i + 1];
      if (currentNum === " ") {
        tempArray.push(" ");
        i = i - 1;
      } else {
        tempArray.push(`${currentNum}${nextNum}`);
      }
    }
    let secretCode = tempArray.map((i) => {
      if (i === " ") return i;
      return decode[i];
    });
    return secretCode.join("");
  }

  function encoding(input) {
    let tempArray = "";

    for (let letter of input.toLowerCase()) {
      if (letter === " ") {
        tempArray += letter;
      } else if (letter === "i" || letter === "j") {
        tempArray += 42;
      } else {
        let num = encodeAlpha[letter];
        tempArray += num;
      }
    }
    return tempArray;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

/*46 passing

    function polybius(input, encode = true) {
      // your solution code here
    let tempArray = ''   
    
    if (encode === false){
      let numPairs = []      
      let noSpace =input.split('').join('') 
      let digitLength = ''
     do {
        numPairs.push(noSpace.substring(0, 2));
        noSpace = noSpace.substring(2, noSpace.length)    
      } while (noSpace.length > 0){
        for( let i = 0; i < numPairs.length; i++){
          let pairs = numPairs[i]
         
         if ((digitLength.length/2) != 0){
            return false
          }else {
            tempArray += decode[pairs]
          }
        }
       }    
       
    }else{
      for(let letter of input.toLowerCase()){
       if (letter === ' '){
         tempArray += letter
       }else if (letter === 'i' || letter === 'j'){
       tempArray += 42
      }else{
       let num = encodeAlpha[letter]
       tempArray += num
     }
    
  }
}
  return tempArray
}*/

/*after decode ideas:
let noSpace = input.split(" ");

    for (let i = 0; i < noSpace.length; i++) {
      let pair = noSpace[i];
      let numPairs = getNumPairs(pair);

      for (let couple of numPairs) {
        if (couple.length != 2) {
          return false;
        } else {
          tempArray += decode[couple];
        }
      }
    }
  }
  ///return tempArray;
  delete one of the brackets on the next line*/
