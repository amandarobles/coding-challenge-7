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
