function convertToRoman(num) {
    let answer = "";
      let pairs = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      }
    
      let keys = Object.keys(pairs);
        console.log(keys);
      while (num > 0) {
        let letter = "I"
        for (let i = 0; i < keys.length; i++) {
          if (num >= pairs[keys[i]]) {
            letter = keys[i];
            break;
          }
        }
    
      answer += letter;
      num = num - pairs[letter];
    
      }
    
     return answer;
    }