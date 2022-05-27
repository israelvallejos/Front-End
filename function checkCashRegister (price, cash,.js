function checkCashRegister (price, cash, cid){
    let cashRegister = {status: "", change: cid};
    const changeNeeded = parseFloat(cash - price).toFixed(2);
    console.log(changeNeeded);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])