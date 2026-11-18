
console.log("SpendWise JavaScript loaded successfully!");

const userName = prompt("Welcome to SpendWise! What is your name?") || "User";
const budgetMonth = prompt("Which month are you budgeting for? (e.g., November)") || "Current Month";

const totalBudget = parseFloat(prompt(`Hi ${userName}, enter your total budget for ${budgetMonth}:`)) || 0;

const expense1Name = prompt("Enter the name of your first expense (e.g., Rent):") || "Expense 1";
const expense1Amount = parseFloat(prompt(`Enter the amount for ${expense1Name}:`)) || 0;

const expense2Name = prompt("Enter the name of your second expense (e.g., Groceries):") || "Expense 2";
const expense2Amount = parseFloat(prompt(`Enter the amount for ${expense2Name}:`)) || 0;

const expense3Name = prompt("Enter the name of your third expense (e.g., Transport):") || "Expense 3";
const expense3Amount = parseFloat(prompt(`Enter the amount for ${expense3Name}:`)) || 0;

function calculateTotalExpenses(exp1, exp2, exp3) {
    return exp1 + exp2 + exp3;
}

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

function calculatePercentageSpent(budget, expenses) {
    if (budget <= 0) return 0;
    return ((expenses / budget) * 100).toFixed(2);
}


function displayBudgetSummary() {
    const totalExpenses = calculateTotalExpenses(expense1Amount, expense2Amount, expense3Amount);
    const remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);
    const percentageSpent = calculatePercentageSpent(totalBudget, totalExpenses);

    console.log("==========================================");
    console.log(`📊 SPENDWISE SUMMARY: ${budgetMonth.toUpperCase()}`);
    console.log(`👤 User: ${userName}`);
    console.log("==========================================");
    console.log(`💰 Total Budget:      $${totalBudget.toFixed(2)}`);
    console.log("------------------------------------------");
    console.log("📝 Expense Breakdown:");
    console.log(`   • ${expense1Name}: $${expense1Amount.toFixed(2)}`);
    console.log(`   • ${expense2Name}: $${expense2Amount.toFixed(2)}`);
    console.log(`   • ${expense3Name}: $${expense3Amount.toFixed(2)}`);
    console.log("------------------------------------------");
    console.log(`💸 Total Expenses:    $${totalExpenses.toFixed(2)} (${percentageSpent}% of budget)`);
    console.log(`💵 Remaining Balance: $${remainingBalance.toFixed(2)}`);
    console.log("==========================================");
}

displayBudgetSummary();