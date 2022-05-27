function palindrome(str) {
let newString = str.replace(/\W+|_/g, "").toLowerCase();
let reverseString = newString.split('').reverse().join("");
console.log(reverseString);
if (newString !== reverseString){
  return false;
}
  return true;
}

palindrome("a;oisdlfjk /.:)a;lksdjfm;");