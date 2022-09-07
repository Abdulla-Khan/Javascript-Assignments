var num1 = +prompt('Enter 1st number', "")
var num2 = +prompt('Enter 2st number', "")
var add_result = num1 + num2
var sub_result = num1 - num2
var multi_result = num1 * num2
var div_result = num1 / num2
var mod_result = num1 % num2


document.write('<h2>The first number is ' + num1 + ' second number is ' + num2 + ' result after add is ' + add_result + '</h2>')
document.write('<h2>The first number is ' + num1 + ' second number is ' + num2 + ' result after sub is ' + sub_result + '</h2>')
document.write('<h2>The first number is ' + num1 + ' second number is ' + num2 + ' result after multiply is ' + multi_result + '</h2>')
document.write('<h2>The first number is ' + num1 + ' second number is ' + num2 + ' result after division is ' + div_result + '</h2>')
document.write('<h2>The first number is ' + num1 + ' second number is ' + num2 + ' result after modulus  is ' + mod_result + '</h2>')
document.write('<h2>End of Q1')

var a = 5
document.write('<h3>Initial Value is = ' + a + "</h3>")
a++
document.write('<h3>Value after increment = ' + a + "</h3>")
a += 6
document.write('<h3>Value after adding 6 = ' + a + "</h3>")
a--
document.write('<h3>Value after decrement = ' + a + "</h3>")

a %= 11
document.write('<h3>Remainder is = ' + a + "</h3>")


document.write('<h2>End of Q2</h2>')


var cost = 600

var quantity = +prompt('Enter number of tickets you want', "")

var total = cost * quantity

document.write('<h2>Cost of buying ' + quantity + " tickets is " + total + " where 1 ticket costs " + cost + '</h2>')

document.write('<h2>End of Q3</h2>')

var table = 4

for (var i = 1; i < 11; i++) {
    document.write('<h4>' + table + ' x ' + i + ' = ' + table * i + '</h4>')
}


document.write('<h2>End of Q4</h2>')
