// Virtual Vending Machine
// Using JavaScript variables and conditionals

// Step 1: Define variables
let userMoney = 3.00; // User's money
let items = {  
// Available items
    A1: { name: "soda", price: 2.00 },
    A2: { name: "gum", price: 1.50 },
    A3: { name: "chips", price: 2.50 },
};

 
 // Step 2: Use a conditional statment
if (userMoney >= items.A1.price) { // Check if user has enough money for items A1
    console.log("You bought " + items.A1.name + " for $" + items.A1.price + ".");
    let change = userMoney - items.A1.price; // Calculate change
    console.log("Your change is $" + change + ".");
    
 

 
 
 

} else {    // some other code here
    console.log("Insufficient funds. Please add more money.");
}