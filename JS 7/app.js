// Q1
var names = prompt('Enter name of your city', '')
if (names.toLowerCase() === 'karachi') {
    alert('Welcome to City of Lights')
}

var gender = prompt('Enter your gender', '')
if (gender.toLowerCase() === 'male') {
    alert('Good Morning Sir')
}
else if (gender.toLowerCase() === 'male') {
    alert("Good Morning Ma'am")
}

// Q2
var color = prompt('Enter the color of light you see', "")

switch (color.toLowerCase()) {
    case 'red':
        alert('Stop')
        break
    case 'yellow':
        alert('Get Ready')
        break
    case 'green':
        alert('Runnnn')
        break
}


// Q3
var fuel = +prompt('Enter fuel of your car in litres', "")
if (fuel < 0.25) {
    alert('Get a refill asap')
}
else {
    alert('Good to go nigga')

}
// Q4
var total = 300
var obt_total = 230
var percentage = ((obt_total / total) * 100).toFixed(1)
document.write('<h1>MarkSheet</h1>')
document.write('<h2>Total Marks ' + total + '</h2>')
document.write('<h2>Obtained Marks ' + obt_total + '</h2>')
document.write('<h2>Percentage ' + percentage + '%</h2>')
var grade;
var remarks
if (percentage >= 90) {
    grade = 'A-One'
    remarks = 'Excellent'
}
else if (percentage <= 80) {
    grade = 'A'
    remarks = 'Good'
}
else if (percentage <= 70) {
    grade = 'B'
    remarks = 'Need to improve'
}
else if (percentage <= 60) {
    grade = 'F'
    remarks = 'Get your ass off'
}
document.write('<h2>Grade ' + grade + '</h2>')
document.write('<h2>Remarks ' + remarks + '</h2>')

// Q6
var s_num = 2
var guess = +prompt('Enter a number ranging frmo 1-10', '')
if (guess === s_num) {
    document.write('<h2>You\'ve guessed it ' + s_num + ' was the secret number</h2>')

}

else if (guess + 1 === s_num) {
    document.write('<h2>This was close</h2>')
}

// Q7

var nums = +prompt('Enter number', "")
if (nums % 3 === 0) {
    document.write(
        '<h2>' + nums + ' is divisible by 3' + "</h2>"
    )

}
else {

}


// Q8

var num = +prompt('Enter number', "")
if (num % 2 === 0) {
    document.write(
        '<h2>' + num + ' is an even number' + "</h2>"
    )
}
else {
    ocument.write(
        '<h2>' + num + ' is an odd number' + "</h2>"
    )
}

// Q9


var tmp = +prompt('Enter tempratue in Centigrades', '')

if (tmp > 40) {
    document.write(
        '<h2>' + 'It is too hot outside. ' + "</h2>"
    )
}
else if (tmp > 30) {
    document.write(
        '<h2>' + 'The Weather today is Normal.' + "</h2>"
    )
}
else if (tmp > 20) {
    document.write(
        '<h2>' + 'Today’s weather is Cool.' + "</h2>"
    )
} else if (tmp > 10) {
    document.write(
        '<h2>' + '“OMG! Today’s weather is so Cool.' + "</h2>"
    )
}

// Q10


var num1 = +prompt('Enter 1st number you want to perform operation on', '')
var num2 = +prompt('Enter 2nd number you want to perform operation on', '')
var operation = prompt('Enter the operation you want to perform', '+, _, /, %, *')
var result;
if (operation == '+') {
    result = num1 + num2
}
else if (operation == '-') {
    result = num1 - num2
}
else if (operation == '*') {
    result = num1 * num2
}
else if (operation == '/') {
    result = num1 / num2
}
else if (operation == '%') {
    result = num1 % num2
}
else {
    result = 'Enter valid operator'
}

document.write('<h2>' + num1 + ' ' + operation + ' ' + num2 + " = " + result + '</h2>')