document.write(
    "<h2>Result</h2>"
)
var a = 10
++a
document.write(
    "<h4>Value of a after ++a= " + a + "</h4>"
)

document.write(
    "<h4>Current Value of a= " + a + "</h4>"
)

document.write(
    "<h4>Value of a after a++= " + (a++) + "</h4>"
)

document.write(
    "<h4>Current Value of a= " + a + "</h4>"
)


--a
document.write(
    "<h4>Value of a after --a= " + a + "</h4>"
)

document.write(
    "<h4>Current Value of a= " + a + "</h4>"
)

a--
document.write(
    "<h4>Value of a after a--= " + a + "</h4>"
)

document.write(
    "<h4>Current Value of a= " + a + "</h4>"
)


document.write('<h2>End of Q1</h2>')




var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
--a
document.write(
    "<h4>Value of a after --a= " + a + "</h4>"
)


// (--a - --b)
document.write(
    "<h4>Value of a= " + a + "\nValue of b= " + b + "Value after --a - --b= " + ((--a) - (--b)) + "</h4>"
)



document.write(
    "<h4>Value of a= " + a + "\nValue of b= " + b + "Value after --a - --b + ++b= " + ((--a) - (--b) + (++b)) + "</h4>"
)

var result = --a - --b + ++b + b--;

document.write(
    "<h4>Value of a= " + a + "\nValue of b= " + b + "Value after --a - --b + ++b + b--= " + result + "</h4>"
)
document.write('<h2>End of Q2</h2>')

var names = prompt('Enter your name', "")

alert('Greetings ' + names)
document.write('<h2>End of Q3</h2>')


var table = +prompt('Enter number you want table of', "")
console.log(table)
table == 0 ? table = 5 : table

for (var i = 1; i < 11; i++) {
    document.write('<h4>' + table + ' x ' + i + ' = ' + table * i + '</h4>')
}

document.write('<h2>End of Q4</h2>')


var total = 100


var English = +prompt('Enter Marks For English', "")
var Science = +prompt('Enter Marks For Science', "")

var Maths = +prompt('Enter Marks For Maths', "")


var eng_per = ((English / total) * 100).toFixed(1)
var sci_per = ((Science / total) * 100).toFixed(1)
var math_per = ((Maths / total) * 100).toFixed(1)

document.write(
    "<h4>" + "<tr>Subjects</tr>" + "\t\t" + "<span style ='margin-left:1cm'>Total Marks</span>" + "\t\t" + "<span style ='margin-left:1cm'>Obtained Marks</span>" + "<span style ='margin-left:.6cm'>Percentage</span>" + "<h/4><br>"
)


document.write(
    "<td>English</td>" + "\t\t\t\t\t" + "<span style ='margin-left:2.1cm' >100</span>" + "<span style ='margin-left:2.1cm' >" + English + "</span> " + "<span style ='margin-left:3.1cm' >" + eng_per + "%</span><br>"
)

document.write(
    "<td>Science</td>" + "\t\t\t\t\t" + "<span style ='margin-left:2.1cm' >100</span>" + "<span style ='margin-left:2.1cm' >" + Science + "</span> " + "<span style ='margin-left:3.1cm' >" + sci_per + "%</span><br>"
)

document.write(
    "<td>Maths</td>" + "\t\t\t\t\t" + "<span style ='margin-left:2.28cm' >100</span>" + "<span style ='margin-left:2.1cm' >" + Maths + "</span>" + "<span style ='margin-left:3.2cm' >" + math_per + "%</span><br>"

)

document.write("<hr>")
total_per = (((English + Science + Maths) / 300) * 100).toFixed(1)
document.write(
    "<td>Total</td>" + "\t\t\t\t\t" + "<span style ='margin-left:2.5cm' >300</span>" + "<span style ='margin-left:2.1cm' >" + (English + Science + Maths) + "</span> " + "<span style ='margin-left:3.1cm' >" + total_per + "%</span><br>"
)