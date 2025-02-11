// task 1: Function Declaration
//Calcuating final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}

//test data
calculateInvoice(100, 0.08, 5); //Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); //Expected output: "Total Invoice: $530.00"

// task 2: Function Expression
//Declaring function expression that calculates hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
};

//test data
calculateHourlyWage(52000, 40); //Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); //Expected output: "Hourly Wage: $41.21"

// task 3: Arrow Function
//Using arrow function to apply discount 15%, 10%, and 5%
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discount);
    console.log(`Discounted Price : $${discountedPrice.toFixed(2)}`);
};
//test data
calculateLoyaltyDiscount(100, 6); //Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); //Expected output: "Discounted Price: $190.00"

// task 4: Parameters and Arguments
//Writing a function to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {
    let cost = location === "USA" ? 5 + (weight * 0.5) : 10 + (weight * 0.7);//USA, Canada, Expedited shipping
    if (expedited) cost += 10;
    console.log(`Shipping Cost: $${cost.toFixed(2)}`);
}

//test data
calculateShippingCost (10, "USA", true);//Expected output: "Shipping Cost: $20.00"
calculateShippingCost (5, "Canada", false);//Expected output: "Shipping Cost: $13.50"

// task 5: Returning Values
//Using a function that returns total interest
function calculateLoanInterest (principal, rate, years) {
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`);
}
//test data
calculateLoanInterest(1000, 0.05, 3);//Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5);//Expected output: "Total Interest: $1750.00"

// task 6: Higher-Order Function
//Declaring a transactions array with 5 amounts
let transactions = [500, 1200, 3000, 800, 2200];
//Using a higher-order function filtering transactions above $1000
const filterHighValueTransactions = (transactions, filterFunction) => {
    console.log(transactions.filter(filterFunction));
};
//test data
filterHighValueTransactions(transactions, amount => amount > 1000); //Expected output: [1200, 3000, 2200]


// task 7: Closures
//Using a function that returns another function to add expense and keep running balance
function createBudgetTracker() {
    let balance = 0;
    return function(expense){
        balance -= expense;
        console.log(`Current Balance: -$${Math.abs(balance)}`);
    };
}
//test data
let budget = createBudgetTracker();
budget(300);//Expected output: "Current Balance: -$300"
budget(200);//Expected output: "Current Balance: -$500"

// task 8: Recursion
//Using recursive function to project revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue;
    return calculateGrowth(years + 1, revenue * 1.05); //Increase revenue by 5% until reaching year 10
}
//test data
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);//Expected output: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);//Expected output: "Projected Revenue: $6381.41"