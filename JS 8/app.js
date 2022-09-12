var num = prompt(
    'Enter anything', ""
)
if (num > 0 || num < 0) {
    alert('It\'s a number')
}
else if (num == num.toLowerCase()) {
    alert('Lowercase Alphabet')
}
else if (num == num.toUpperCase()) {
    alert('Uppercase Alphabet')
}



var greater = +prompt('Enter 1st number', '')
var lesser = +prompt('Enter 2st number', '')

if (greater > lesser) {
    alert(greater + ' is greater then ' + lesser)
}
else if (lesser === greater) {
    alert('Both are equal ')

}
else {
    alert(lesser + ' is greater then ' + greater)
}



var num2 = +prompt('Enter number', '')

if (num2 > 0) {
    alert('Positive Integer')
}
else if (num2 < 0) {
    alert('Negative Integer')
}
else if (num2 === 0) {
    alert('Zero')
}

else {
    alert('Enter a number.')
}

var vowel = prompt('Enter a character', '')
if (vowel.toLowerCase() === 'a' || vowel.toLowerCase() === 'e' || vowel.toLowerCase() === 'i' || vowel.toLowerCase() === 'o' || vowel.toLowerCase() === 'u') {
    alert('Vowel    ')
}
else {
    alert('Constant')
}


var pass = prompt('Enter pass', '')

var passs = prompt('Re-Enter pass', '')

if (pass === passs) {
    alert('FF')
}





var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
alert(greeting)



var time = 1900

if (time >= 0000 && time < 1200) {
    alert('Good Mornings')
}
else if (time > 1200 && time < 1700) {
    alert('Good Afternoon')
}
else if (time > 1700 && time < 2100) {
    alert('Good Evening')
}

else if (time >= 2100 && time <= 2359) {
    alert('Good Night')
}