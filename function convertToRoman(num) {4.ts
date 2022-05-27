function convertToRoman(num) {
  let romanNumeral = "";
  while (num > 0){
    if (num < 4){
    romanNumeral += "I";
    num -= 1;
  } else if (num === 4){
    romanNumeral += "IV"
    num -= 4;
  } else if (num >= 5 && num < 9){
    romanNumeral += "V"
    num -= 5;
  } else if (num === 9){
    romanNumeral += "IX"
    num -= 9;
  } else if (num >= 10 && num < 40){
     romanNumeral += "X"
     num -= 10;
  } else if (num >= 40 && num < 50){
    romanNumeral += "XL";
    num -= 40;
  } else if (num >= 50 && num < 90){
    romanNumeral += "L";
    num -= 50;
  } else if (num >= 90 && num < 100){
    romanNumeral += "XC"
    num -= 90;
  } else if (num >= 100 && num < 400){
    romanNumeral += "C"
    num -= 100;
  } else if (num >= 400 && num < 500){
    romanNumeral += "CD"
    num -= 400;
  } else if (num >= 500 && num < 900){
    romanNumeral += "D";
    num -= 500;
  } else if (num >= 900 && num < 1000){
    romanNumeral += "CM";
    num -= 900;
  } else if (num >= 1000){
    romanNumeral += "M";
    num -= 1000;
  } else {
    romanNumeral += "ERROR";
    num -= 1;
  }
  }
 return romanNumeral;
}
console.log(convertToRoman(7));