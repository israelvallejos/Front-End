function rot13(str) {
    let decodedResult = "";
    let alphabet = "ABCDEFGHIJKLM";
    let rotAlphabet = "NOPQRSTUVWXYZ";
    for (let i = 0; i < str.length; i++){
      let letterToDecode = str[i];
    if (alphabet.indexOf(letterToDecode) >= 0){
      decodedResult += rotAlphabet[alphabet.indexOf(letterToDecode)];
      //console.log(decodedResult)
    } else if (rotAlphabet.indexOf(letterToDecode) >= 0){
      decodedResult += alphabet[rotAlphabet.indexOf(letterToDecode)];
      console.log(decodedResult)
    } else {
      decodedResult += letterToDecode;
    }
    }
  
    return decodedResult;
  }
  let result = rot13("SERR PBQR PNZC");
  //console.log(result)