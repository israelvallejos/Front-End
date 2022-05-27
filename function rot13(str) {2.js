function rot13(str) {
    let decodedResult = "";
    let alphabet = "ABCDEFGHIJKLM";
    let rotAlphabet = "NOPQRSTUVWXYZ";
  str.split("").forEach(function(element, index){
    if (alphabet.indexOf(element) >= 0){
      decodedResult += rotAlphabet[alphabet.indexOf(element)];
    } else if (rotAlphabet.indexOf(element) >= 0){
      decodedResult += alphabet[rotAlphabet.indexOf(element)];
    } else {
      decodedResult += element;
    }
  })
  
    return decodedResult;
  }
  let result = rot13("SERR PBQR PNZC");
  //console.log(result)