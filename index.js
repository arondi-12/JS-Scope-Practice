let totalBudget = 0;

function addExpense(expense){
    totalBudget = expense + totalBudget;
    return totalBudget;
}
function getExpenseDetails(expDescription, cost){
    console.log(`Description: ${expDescription} cost: ${cost}`);
    return cost;
}

function resetTotalBudget(){
    totalBudget = 0;
    return totalBudget;
}

addExpense(250);
addExpense(75);


getExpenseDetails("Fruits", 75);

console.log(totalBudget);
console.log(resetTotalBudget());

addExpense(450);
addExpense(67);