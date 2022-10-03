// GET FEDERAL TAX - PAGE 22 EXERCISE 3

/*
create a function that accepts gross pay *and*
*/

function getFederalTax(grossPay, withholdingCode){
    if (0 == withholdingCode){
return grossPay * 0.23;
    }else if (1 == withholdingCode){
        return grossPay * 0.21;
    }else if (2 == withholdingCode){
        return grossPay * 0.195;
    }else if (3 == withholdingCode){
        return grossPay * 0.185;
    }else if (4 >= withholdingCode >= 4){
        const defaultBase = 0.18;
        const halfPercent = 0.005;
        const codeBase = 4;
        //STEP BY STEP
        let over = withholdingCode - codeBase;
        let extra = halfPercent * over;
        let rate = (defaultBase - extra);
        console.log("RATE: " + rate);
        return grossPay * rate;
// OR ALL AT ONCE
// return grossPay * (default - ((withholdingCode - codebase) * halfPercent) )
    }else{
        console.log("Invalid Parameterfor withholdingCode")
    }
    }
    


console.log("P1 " + getFederalTax(750, 0)); //PERSON 1
console.log("P2 " + getFederalTax(1550, 2)); //PERSON 2
console.log("P3 " + getFederalTax(1100, 6)); //PERSON 3
