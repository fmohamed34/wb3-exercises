
// absolute is the positive version even if its negative

console.log(123)
console.log(-123)

console.log(Math.abs(123))
console.log(Math.abs(-123))

function displayReceipt(totalDue, amountPaid){
    console.log("TOTAL DUE: $" + totalDue);
    console.log("AMOUNT PAID:$" + amountPaid);
    if(amountPaid < totalDue){
        let owed = (totalDue - amountPaid);
     console.log ("OWED: $" + owed);
    }else{
        let credit = Math.abs(totalDue - amountPaid); //NEVER NEGATIVE
        console.log ("CREDIT BALANCE: $" + credit);
    }
}
displayReceipt(100, 120);