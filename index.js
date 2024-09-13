function simpleInterest(){

    alert("simple interest")
    
    document.getElementById("outputs").innerHTML = "SIMPLE INTEREST" 
    let deposit = window.prompt("input deposit here:")
    let rate = window.prompt("input rate in percentage here:")
    let time = window.prompt("input time in years here:")
    result = deposit * rate * time / 100
    toString(result)
    toString(deposit)
    toString(rate)
    toString(time)
    
    document.getElementById("info").innerHTML = "The formula used is deposit * rate * time / 100 therefore, we substitute your values" + deposit +  " * " + rate + " * " +  time +" / 100 "+ "and your result is  " + result

    
}
function compoundInterest(){

    alert("compoundInterest");
    document.getElementById("outputs").innerHTML = "COMPOUND INTEREST" 
    document.getElementById("info").innerHTML = "Unlocking Compound Interest: A Comprehensive Overview Compound interest is a powerful concept in finance, exponentially growing investments or debts over time. Unlike simple interest, compound interest includes interest on both the principal amount and previously earned interest, compounding periodically. This compounding effect accelerates growth, making it a cornerstone of long-term investments like retirement funds and savings accounts. The formula incorporates the principal amount, interest rate, compounding frequency, and time, showcasing the potential for substantial gains over extended periods. Understanding compound interest empowers individuals to make informed financial decisions, emphasizing the importance of starting early to maximize returns and secure a prosperous future."

    
    let deposit = window.prompt("input deposit here: ");
    let rate = window.prompt("input rate in percentage here: ")
    let time = window.prompt("input time in years: ")
    let result = deposit * (1 + (rate/100)) ** time - (deposit);

    toString(result)
    toString(deposit)
    toString(rate)
    toString(time)
    toString(result)

    document.getElementById("info").innerHTML = "The formula used is D * ( 1 + r/100 ) ^ n- D therefore,we substitute your values " +  deposit +  " * " + " 1 ( " + rate + " / 100) ^ " +  time +" - " + deposit + "and your result is  " + result 
    


}
function quadraticEquations(){

    // Coefficients for the quadratic equation ax^2 + bx + c = 0
let a = window.prompt("input value of a");
let b = window.prompt("input value of b");
let c = window.prompt("input value of c");

// Calculate the discriminant
let discriminant = b * b - 4 * a * c;

// Check if the discriminant is positive, zero, or negative
if (discriminant > 0) {
    // Two real and distinct roots
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("The solutions are x1 = " + x1 + " and x2 = " + x2);
} else if (discriminant === 0) {
    // One real root (both roots are the same)
    let x1 = -b / (2 * a);
    console.log("The solution is x = " + x1);
} else {
    // Complex roots
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    console.log("The solutions are x1 = " + realPart + " + " + imaginaryPart + "i and x2 = " + realPart + " - " + imaginaryPart + "i");
}

    

}
