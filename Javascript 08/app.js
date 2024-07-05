// 1. Write a function that displays current date & time in your
// browser.

var now = new Date()
document.write(now + "<br>")


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


function greetUser() {
    var firstName = prompt('Enter your first name:');
    var lastName = prompt('Enter your last name:');

    var fullName = firstName + ' ' + lastName;
    var greetingMessage = 'Hello, ' + fullName + '! Welcome!';
    
    return greetingMessage;
}
var greeting = greetUser();
document.write(greeting + "<br>");


//3: Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


function addNumbers() {

    var num1 = parseFloat(prompt('Enter the first number:'));
    var num2 = parseFloat(prompt('Enter the second number:'));
    var sum = num1 + num2;
    return sum;
}
var result = addNumbers();
document.write('The sum is:', result + "<br>");



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    return result;
}

var num1 = 10;
var num2 = 5;
var operator = '+';
var calculatedResult = calculator(num1, num2, operator);

document.write('Result of ' + num1 + ' ' + operator + ' ' + num2 + ' is: ' + calculatedResult);

// 5. Write a function that squares its argument.

function square(number) {
    return number * number;
}

console.log(square(6)); 
console.log(square(5)); 