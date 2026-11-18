Web-Development-Week6
SpendWise - Personal Budget Tracker

 What SpendWise Does
SpendWise is a web-based personal budgeting and expense-tracking application. Building upon the static HTML and CSS dashboard structure, this JavaScript implementation enables the application to collect live financial inputs from the user, calculate total spending and remaining balances, and generate a clear, formatted financial summary in the browser console.


JavaScript Concepts Implemented
To transform SpendWise into a data-processing application, the following foundational JavaScript concepts were applied:
Variables (`const`): Used to store and protect references to user details, budget figures, and calculated results.
Data Types (`String` & `Number`):** Handled text inputs (names, months, expense labels) as strings and converted numeric inputs into floating-point numbers using `parseFloat()`.
User Input (`prompt()`): Interacted with users via browser dialog boxes to capture real-time budgeting data.
Arithmetic Operators (`+`, `-`, `*`, `/`):** Performed financial computations, including summing expenses, deducting costs from the total budget, and computing spending percentages.
Reusable Functions: Structured the codebase into modular, single-purpose functions with parameters and return values.
Console Output (`console.log()`): Displayed structured, readable reports using template literals and `.toFixed(2)` currency formatting.

---

How Variables Are Used
Variables act as the data store for the application's state:
* **Budget Metadata (`String`):** `userName` and `budgetMonth` store identifying text provided by the user, with fallback defaults (e.g., `"User"`) if left blank.
* **Financial Figures (`Number`):** `totalBudget`, `expense1Amount`, `expense2Amount`, and `expense3Amount` hold numeric values converted via `parseFloat()`. Default fallbacks (`|| 0`) ensure that empty or invalid entries do not cause `NaN` (Not a Number) errors during calculations.
* **Computed Results (`Number`):** Variables such as `totalExpenses`, `remainingBalance`, and `percentageSpent` store the outputs returned by calculation functions for clean display.

---

How User Input Is Collected
User data is gathered sequentially when the page loads using JavaScript's built-in `prompt()` method:
1. The script prompts the user for their name and the target budgeting month.
2. It asks for the total available budget for that month.
3. It prompts the user to name and enter the cost for three individual expenses.
4. Because `prompt()` always returns data as a `String`, numeric inputs are wrapped in `parseFloat()` so they can be used in mathematical operations.

 How Calculations Are Performed
All financial logic is processed using standard arithmetic operations:
1. Total Expenses: Adds all individual expense variables together (`exp1 + exp2 + exp3`).
2. Remaining Balance: Subtracts the calculated total expenses from the user's total budget (`budget - expenses`).
3. Budget Utilization (%): Divides total expenses by the total budget and multiplies by `100` (`(expenses / budget) * 100`), formatted to two decimal places.

How Functions Organize the Code
Rather than running all calculations in the global scope, the code is separated into modular, reusable functions:
* `calculateTotalExpenses(exp1, exp2, exp3)`: Accepts individual expense amounts as parameters and returns their sum.
* `calculateRemainingBalance(budget, expenses)`: Accepts the total budget and total expenses, returning the leftover balance.
* `calculatePercentageSpent(budget, expenses)`: Safely computes the percentage of the budget used while guarding against division by zero.
* `displayBudgetSummary()`: Acts as the main controller function—calling the calculation functions, formatting the numbers, and printing a structured report to the browser console.
* `style.css` – Responsive CSS layout and styling.
* `script.js` – Core JavaScript logic for data collection, calculations, and console reporting.
* `README.md` – Project documentation.
