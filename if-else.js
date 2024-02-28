//>>>WAP to swap values of two variables.,A=10,B =20, Output = CONSOLE.LOG(A) //20  CONSOLE.LOG(B) //10
let a = 10;
let b = 20;
let c = a;
a = b
b = c
console.log(`a=${a}`)
console.log(`b=${b}`)

//>>>WAP to swap values of two variables without using third variable. x=10,y=20, Output = CONSOLE.LOG(x) //20  CONSOLE.LOG(y) //10
let x = 10;
let y = 20;
x = x + y
y = x - y
x = x - y
console.log(`x = ${x}`)
console.log(`y = ${y}`)

//>>> Write a  program to find maximum between two numbers.

if (x > y) {
    console.log(`x is bigger than y `)
} else {
    console.log(`y is bigger than x`)
}
//>>>Write a  program to find maximum between three numbers.

let e = 0;
if (a > b & a > e) {
    console.log(`a is bigger than b,e  `)
} else if (b > e & b > a) {
    console.log(`b is bigger than a,e  `)
} else if (e > a & e > b) {
    console.log(`e is bigger than a,b  `)
}

//>>> Write a  program to check whether a number is negative, positive or zero.

let num = 0;
if (num > 0) {
    console.log(`num is positive `)
} else if (num < 0) {
    console.log(`num is negetive `)
} else {
    console.log(`num is 0 `)
}

//>>>Write a  program to check whether a number is divisible by 5 and 11 or not.

let num5 = 55
if (num5 % 5 == 0 & num5 % 11 == 0) {
    console.log(`${num5} is divisible by 5 and 11`)
} else {
    console.log(`${num5} is not divisible 5 and 11`)
}

//>>>  Write a  program to check whether a number is even or odd.

let checknumber = 5
if (checknumber % 2 == 0) {
    console.log(`${checknumber} is even `)
} else {
    console.log(`${checknumber} is odd `)
}

//>>>Write a  program to check whether a year is leap year or not.
let year = 1994
if (year % 4 == 0) {
    console.log(`${year} is leap year `)
} else {
    console.log(`${year} is not leap year `)
}

switch (year) {
    case 1990: console.log(`${year} is leap year`)
        break;
    case 1991: console.log(`${year} is not leap year`)
        break;
    case 1992: console.log(`${year} is leap year`)
        break;
    case 1993: console.log(`${year} is not leap year`)
        break;
    case 1994: console.log(`${year} is not leap year`)
        break;
    case 1995: console.log(`${year} is not leap year`)
        break;
    default: console.log(`${year} is not leap year`)
}

//>>> Write a  program to input any alphabet and check whether it is vowel or consonant. 

let alphabet = "e";
switch (alphabet) {
    case "a":
    case "e":
    case 'i':
    case 'o':
    case "u":
    case 'A':
    case 'E':
    case 'I':
    case "O":
    case 'U':
        console.log(`${alphabet} is vowel`);
        break;
    default:
        console.log(`${alphabet} is consonent`)
}
//>>> Write a  program to input week number and print week day. 1 => Monday, 2 => Tuesday, 3 => Wednesday, 4 => Thursday, 5 => Friday, 6 => Saturday, 7 => Sunday

let weeknum = 4;
switch (weeknum) {
    case 1: console.log(`${weeknum} sunday`)
        break;
    case 2: console.log(`${weeknum} monday`)
        break;
    case 3: console.log(`${weeknum} tuesday`)
        break;
    case 4: console.log(`${weeknum} wednsday`)
        break;
    case 5: console.log(`${weeknum} thrusday`)
        break;
    case 6: console.log(`${weeknum} friday`)
        break;
    case 7: console.log(`${weeknum} seturday`)
        break;
    default: console.log()
}

//>>>Write a  program to input month name and print number of days in that month.

let month = "October";
switch (month) {
    case "January": console.log(`31 day in the ${month} month`)
        break;
    case "February": console.log(`28 day in the ${month} month`)
        break;
    case "March": console.log(`31 day in the ${month} month`)
        break;
    case "April": console.log(`30 day in the ${month} month`)
        break;
    case "May": console.log(`31 day in the ${month} month`)
        break;
    case "June": console.log(`30 day in the ${month} month`)
        break;
    case "July": console.log(`31 day in the ${month} month`)
        break;
    case "August": console.log(`31 day in the ${month} month`)
        break;
    case "September": console.log(`30 day in the ${month} month`)
        break;
    case "October": console.log(`31 day in the ${month} month`)
        break;
    case "November": console.log(`30 day in the ${month} month`)
        break;
    case "December": console.log(`31 day in the ${month} month`)
        break;
    default: "";
}

//>>>Write a  program to count total number of notes in given amount.

let amount = 41;
let notes500 = notes200 = notes100 = notes50 = notes20 = notes10 = notes5 = notes2 = notes1 = 0


if (amount >= 500) {
    notes500 = (amount - (amount % 500)) / 500;
    amount = amount % 500
}
if (amount >= 200) {
    notes200 = (amount - (amount % 200)) / 200;
    amount = amount % 200
}

if (amount >= 100) {
    notes100 = (amount - (amount % 100)) / 100;
    amount = amount % 100
}
if (amount >= 50) {
    notes50 = (amount - (amount % 50)) / 50;
    amount = amount % 50
}
if (amount >= 20) {
    notes20 = (amount - (amount % 20)) / 20;
    amount = amount % 20
}
if (amount >= 10) {
    notes10 = (amount - (amount % 10)) / 10;
    amount = amount % 10
}
if (amount >= 5) {
    notes5 = (amount - (amount % 5)) / 5;
    amount = amount % 5
}
if (amount >= 2) {
    notes2 = (amount - (amount % 2)) / 2;
    amount = amount % 2
}
if (amount >= 1) {
    notes1 = (amount - (amount % 1)) / 1;
    amount = amount % 1
}
console.log(` maximum notes of notes500 = ${notes500} notes200 = ${notes200}
 notes100 = ${notes100} notes50 = ${notes50} notes20 = ${notes20} notes10 = ${notes10} 
 notes5 = ${notes5} notes2 = ${notes2} notes1 = ${notes1}`)

//>>>Write a  program to input angles of a triangle and check whether triangle is valid or not.

let angle1 = 20;
let angle2 = 90;
let angle3 = 70;
let sum = angle1 + angle2 + angle3
if (sum == 180) {
    console.log(`this is tringle`)
} else {
    console.log(`there is no tringle`)
}

//>>> Write a  program to input all sides of a triangle and check whether triangle is valid or not.

let s1 = 2;
let s2 = 3;
let s3 = 4;
if (s1 + s2 > s3 && s2 + s3 > s1 && s3 + s1 > s2) {
    console.log('tringle is valid')
} else {
    console.log('tringle is not valid')
}

//>>> Write a  program to calculate profit or loss.
let princple = 6000;
let rate = 10;
let time = 1

let int = princple * rate * time / 100
console.log(int)

/*>>> Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and   Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
*/
let Physics = 90
let Chemistry = 90
let Biology = 90
let Mathematics = 90
let Computer = 95
let Percentage = (Physics + Chemistry + Biology + Mathematics + Computer) * 100 / 500
if (Percentage >= 90) {
    console.log("Grade A" + Percentage)
} else if (Percentage >= 80) {
    console.log("Grade B" + Percentage)
} else if (Percentage >= 70) {
    console.log("Grade C" + Percentage)
} else if (Percentage >= 60) {
    console.log("Grade D" + Percentage)
} else if (Percentage >= 50) {
    console.log("Grade E" + Percentage)
} else {
    console.log('fail')
}

/* Write a  program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
*/

let basic = 25000
let hra ,da
if (basic>=10000) {
   da= basic*80/100
   hra= basic*20/100 
}else if(basic>=20000){
    da= basic*90/100
    hra= basic*25/100 
}else  {
    da= basic*95/100
    hra= basic*30/100  
}
let grosssalary= basic+hra+da
console.log(grosssalary);

/* Write a  program to input electricity unit charges and calculate total electricity bill  
according to the given condition:
For first 50 units Rs. 0.50/unit = meter1 50
For next 100 units Rs. 0.75/unit = meter2 150
For next 100 units Rs. 1.20/unit = meter 3 250
For unit above 250 Rs. 1.50/unit = meter 4 
An additional surcharge of 20% is added to the bill

*/

let unit = 251
let res;
if (unit<=50) {
    res= unit*0.5
}else if (unit<=150) {
    res=unit*0.75
}else if (unit<=250) {
    res=unit*1.20 
}else{
    res= unit*1.50
}
console.log(res)

// Write a program that calculates the ticket price based on age with the following 
// conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, 
// age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

let age = 40
if (age<12) {
    console.log('price = 5')
}else if (age<18) {
    console.log('price = 10')
}else if(age<60){
    console.log('price = 20')
}else{
    console.log('price = 15')
}

// Write a program that calculates a discount based on the purchase amount.
// Prices equal or over 100 discount have a discount of 20.
// Prices equal or over 50 have a discount of 10. Otherwise discount is 0
 let price= 49;
 let discount;
 if (price>=100) {
    discount = price*20/100
    console.log(`${discount} over or equal 100RS`)
 }else if(price>=50){
    discount = price*10/100
    console.log(`${discount} over or equal 50RS`) 
 }else{
    discount = price*0/100
    console.log(`${discount} under  50RS`) 
 }

//  Write a program that greets the user based on the time of day.
//  Display good morning, good afternnon or good evening based on the time of day when you run the code.

let currentTime= new Date();
let hours= currentTime.getHours()

if (hours>=4 && hours<11.59) {
    console.log('good morning')
}else if(hours>=12 && hours<15.59){
    console.log('good after noon ')
}else if (hours>=16 && hours <19.59) {
    console.log('good evening')
}else{
    console.log('good night')  
}

// Write a program that calculates the Body Mass Index (BMI) and categorizes it.
// The formula for BMI is: weight / (height * height).

let weight = 40;
let height = 1.75
let BMI = weight/(height*height)
let categorizes;
if (BMI<18.5) {
    categorizes="under weight" 
}else if (BMI<24.9) {
    categorizes="Normal" 
}else if(BMI<29.9){
    categorizes="over weight "  
}else{
    categorizes="obese "   
}
console.log(`bmi = ${BMI} & categorizes = ${categorizes}`)


// Assignment operators
// -=
let co1 =10
let co2 = 20
co1-= co2
console.log(co1)

// +=
co1+=co2
console.log(co1)

// *=
co1*=co2
console.log(co1)

// /=
co1/=co2
console.log(co1)

co1++
console.log(co1)

--co1
console.log(co1)

console.log(co2%co1)
console.log(co2/co1)
console.log(co1**2)

