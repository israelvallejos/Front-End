const REGISTER_STATUS = {closed: "CLOSED", insufficientFunds: "INSUFFICIENT_FUNDS", open: "OPEN"}

function checkCashRegister (price, cash, cid){
let cashRegister = {status: "", change: cid};
const changeNeeded = parseFloat(cash - price).toFixed(2);
const changeAvailable = getTotalCashRegisterChange(cid);
cashRegister.status = getTotalCashRegisterStatus(changeNeeded, changeAvailable)
cashRegister.change = getCustomersChange(changeNeeded, cid);
console.log(cashRegister.status)
console.log(cashRegister.change)

if (cashRegister.status === REGISTER_STATUS.insufficientFunds){
   cashRegister.change = [];
   return cashRegister;
}
if (changeNeeded > getTotalCashRegisterChange(cashRegister.change)){
	cashRegister.status = REGISTER_STATUS.insufficientFunds;
	cashRegister.change = [];
}
if (cashRegister.status === REGISTER_STATUS.closed){
   cashRegister.change = [...cid];
} 
 return cashRegister;
}
function getCustomersChange(changeNeeded, changeInDrawer){
const change = [];
const currencyDictionary = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};
for (let i = changeInDrawer.length - 1; i >= 0; i--){
const coinName = changeInDrawer[i][0];
const coinTotal = changeInDrawer[i][1];
const coinValue = currencyDictionary[coinName];
let coinAmount = (coinTotal / coinValue).toFixed(2);
let coinsToReturn = 0;
   while (changeNeeded >= coinValue && coinAmount > 0){
     changeNeeded -= coinValue;
     changeNeeded = changeNeeded.toFixed(2);
     coinAmount--;
     coinsToReturn++;
   }
   if (coinsToReturn > 0){
   change.push([coinName, coinsToReturn * coinValue])
}
}
  return change;
}
function getTotalCashRegisterStatus(changeNeeded, changeAvailable){
if (Number(changeNeeded) > Number(changeAvailable)){
return REGISTER_STATUS.insufficientFunds;
}
if (Number(changeNeeded) < Number(changeAvailable)){
return REGISTER_STATUS.open;
}
return REGISTER_STATUS.closed;
}
function getTotalCashRegisterChange(changeInDrawer){                            
let total = 0;
for (let change of changeInDrawer){
let changeValue = change[1];
total += changeValue;
}
return total.toFixed(2)
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
