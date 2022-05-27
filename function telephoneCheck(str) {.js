function telephoneCheck(str) {
  if (str[0] === "-"){
    return false;
  }
  if (str.match(/-/g) && str.match(/-/g).length > 2){
    return false;
  }
  if (str.indexOf("(") === -1 && str.indexOf(")") > -1){
    return false;
  }
   if (str.indexOf(")") - str.indexOf("(") >= 5 ){
  return false;
   }
 let newString = str.replace(/-| /g, "");

if (newString.indexOf("(") < newString.indexOf(")")){
  newString = newString.replace(/\(|\)/g, "");
}
if (newString.length == 10){
  return true;

} else if (newString.length === 11 && newString[0] === "1"){
  return true;
}
  return false;
}

let result = telephoneCheck("555-555-5555");