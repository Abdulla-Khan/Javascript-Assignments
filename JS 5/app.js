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

var celsius = 25
var farenheit = 105
document.write('<h4>' + farenheit + 'F into celsius is ' + (farenheit - 32) * 5 / 9 + 'C</h4>')
document.write('<h4>' + celsius + 'C into fahrenheit is ' + ((celsius * 9 / 5) + 32) + 'F</h4>')
document.write('<h2>End of Q5</h2>')

var item1 = 200
var q_item1 = 3
var item2 = 400
var q_item2 = 1
var ship = 100
var total = (item1 * q_item1) + (item2 * q_item2) + ship
document.write('<h2>Price of Item 1 = ' + item1 + '</h2>')
document.write('<h2>Quantity of Item 1 = ' + q_item1 + '</h2>')
document.write('<h2>Price of Item 2 = ' + item2 + '</h2>')
document.write('<h2>Quantity of Item 2 = ' + q_item2 + '</h2>')
document.write('<h2>Shipping Charges = ' + ship + '</h2>')
document.write('<h2>Total Charges = ' + total + '</h2>')
document.write('<h2>End of Q6</h2>')

document.write('<h1>Marksheet</h1>')
var marks = 800
var total = 900
var percentage = (marks / total) * 100
document.write('<h2>Total Marks =' + total + ' </h2>')
document.write('<h2>Obtained Marks =' + marks + ' </h2>')
document.write('<h2>Percentage =' + percentage + ' </h2>')
document.write('<h2>End of Q7</h2>')

document.write('<h1>Currency In PKR</h1>')
var usd = 104.80
var sdr = 28
var total_c = (usd * 10) + (sdr * 25)
document.write('<h3>Total Currency in PKR =' + total_c + ' </h3>')
document.write('<h2>End of Q8</h2>')

var num3 = 10
var calc = ((10 + 5) * 10) / 2
document.write("<h1>" + calc + "</h1>")
document.write('<h2>End of Q9</h2>')

var date = new Date()
var year = 2003
var age = date.getFullYear() - year
document.write("<h2> Your birth year is  " + year)
document.write("<h2> Current year is  " + date.getFullYear())
document.write("<h2> Your age is  " + age)
document.write('<h2>End of Q10</h2>')

var radius = 20
var pie = 3.14
var cir = 2 * (pie * radius)
var area = pie * (radius * radius)
document.write("<h4>Radius of Circle " + radius + "</h4>")
document.write("<h4>Circumference of Circle " + cir + "</h4>")
document.write("<h4>Area of Circle " + area + "</h4>")

document.write('<h1> The Lifetime Supply Calculator:</h1>')
var snack = 'Doritos'
var c_age = 15
var m_age = 65
var per_day = 3
var max_snack = (m_age - c_age) * 365
document.write("<h4>Favourite Snack: " + snack + "</h4>")
document.write("<h4>Current Age: " + c_age + "</h4>")
document.write("<h4>Max Age: " + m_age + "</h4>")
document.write("<h4>Amount of Snack Per Day: " + per_day + "</h4>")
document.write("<h4>You'll need " + max_snack * per_day + " snacks to servive</h4>")