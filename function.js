
function myfunction() {
    let x = "sawan"
    console.log(x);
}

myfunction()
function myfunctions() {
    let y = "malviya";
    console.log(y)
}
myfunctions()

function ifElse() {
    let a = 5;
    let b = 15;
    let result = "";
    if (a == b) {
        result = "equal"
    } else {
        result = "not equal"
    }
    console.log(result)
}
ifElse();

function Functions() {
    let a = 10;
    let b = 20;
    let c = a;
    a = b;
    b = c;
    console.log('a =' + a + ' b =' + b)
}
Functions()

function swapNumber() {
    let a = 50;
    let b = 10;
    a = a + b
    b = a - b
    a = a - b
    console.log(`a = ${a} , b = ${b}`)
}
swapNumber();

function maximumNum() {
    let a = 100;
    let b = 20;
    if (a > b) {
        console.log("a is grater than b")
    } else {
        console.log("a is not grater than b")
    }
}
maximumNum()

function maximumThreeNumber() {
    let a = 100;
    let b = 200;
    let c = 320;
    if (a > b && a > c) {
        console.log("a is grater than b & c")
    } else if (b > a && b > c) {
        console.log("b is grater then a & c")
    } else {
        console.log("c is grater then a & b")
    }
}
maximumThreeNumber()

function positiveNegativeNUmber() {
    let num = -10;
    if (num > 0) {
        console.log('num is positive')
    } else if (num < 0) {
        console.log('num is negative')
    } else {
        console.log('num is 0')
    }
}
positiveNegativeNUmber();

function divisibleOrNot() {
    let num = 110;
    if (num % 5 == 0 && num % 11 == 0) {
        console.log("num is divisible")
    } else {
        console.log("num is not divisible")
    }
}
divisibleOrNot()

function evenOROdd() {
    let num = 21;
    if (num % 2 == 0) {
        console.log("num is even")
    } else {
        console.log("num is odd")
    }
}
evenOROdd()

function leapyear(year) {
    if (year % 4 == 0) {
        console.log(`${year} is leap year`)
    } else {
        console.log(`${year} is not leap year`)
    }
}
leapyear(1990);

function vovleOrConsonent(alphabet) {
    switch (alphabet) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U": console.log(`${alphabet} is vovel`)
            break
        default:
        case "U": console.log(`${alphabet} is consonent`)
    }
}
vovleOrConsonent("d");

function weekDay(num) {
    switch (num) {
        case 1: console.log(`${num} sunday`)
            break;
        case 2: console.log(`${num} monday`)
            break;
        case 3: console.log(`${num} tuesday`)
            break;
        case 4: console.log(`${num} wednesday`)
            break;
        case 5: console.log(`${num} thrusday`)
            break;
        case 6: console.log(`${num} friday`)
            break;
        case 7: console.log(`${num} saturday`)
            break;
    }
}
weekDay(7)

let d = new Date();
let currentMonth = d.toLocaleString('default', { month: 'short' }) // get current month
let currentYear = d.toLocaleString('default', { year: 'numeric' })//  get current year
function daysInMonth(year, month) {  // get number of days in a given  month
    return new Date(year, month, 0).getDate()
}
console.log(daysInMonth(2021, 4))

//amount = 550/-
function numberOfNotes(amount) {
    let note500 = note200 = note100 = note50 = note20 = note10 = note5 = note2 = note1 = 0
    if (amount >= 500) {
        note500 = (amount - (amount % 500)) / 500
        amount %= 500
    }
    if (amount >= 200) {
        note200 = (amount - (amount % 200)) / 200
        amount %= 200
    }
    if (amount >= 100) {
        note100 = (amount - (amount % 100)) / 100
        amount %= 100
    }
    if (amount >= 50) {
        note50 = (amount - (amount % 50)) / 50
        amount %= 50
    }
    if (amount >= 20) {
        note20 = (amount - (amount % 20)) / 20
        amount %= 20
    }
    if (amount >= 10) {
        note10 = (amount - (amount % 10)) / 10
        amount %= 10
    }
    if (amount >= 5) {
        note5 = (amount - (amount % 5)) / 5
        amount %= 5
    }
    if (amount >= 2) {
        note2 = (amount - (amount % 2)) / 2
        amount %= 2
    }
    if (amount >= 1) {
        note1 = (amount - (amount % 1)) / 1
        amount %= 1
    }
    return ` maximum notes of 
notes500 = ${note500} 
 notes200 = ${note200}
 notes100 = ${note100} 
 notes50 = ${note50} 
 notes20 = ${note20} 
 notes10 = ${note10} 
 notes5 = ${note5}
  notes2 = ${note2} 
  notes1 = ${note1}`


}
let totalNotess = numberOfNotes(13685)
console.log(totalNotess)

function tringle(sum){
    let angle1 = 100;
    let angle2 = 60;
    let angle3 = 20;
     sum = angle1+angle2+angle3
    if(sum==180){
        return `this is tringle`
    }else{
        return `this is not a tringle`
    }
}

console.log(tringle());

function simpleIntrest(princple,rate,time){
    return princple*rate*time/100
}
let intrest = simpleIntrest(16000,10,4);
console.log(intrest)



// Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and   Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 70% : Grade B
// Percentage >= 50% : Grade c
// Percentage >= 33% : Grade D

const subjects=(Physics,Chemistry,Biology,Mathematics,Computer)=>{
   Physics = 50;
   Chemistry=60;
   Biology=75;
   Mathematics=80;
   Computer=90;
   let result = (Physics+Chemistry+Biology+Mathematics+Computer)*100/500
   if(result>=90){
    return 'Grade A ' + result + '%'
   }else if(result>=70){
    return 'Grade b' + result + '%'
   }else if(result>=50){
    return 'Grade c' + result + '%'
   }else if(result>=33){
    return 'grade d' + result + '%'
   }else{
    return 'Fail'
   }
   
}
console.log(subjects() ) 
// loop in  within function 

function namePrint(){
   for(let i = 0; i<10;i++){
    console.log(i+ "sawan")
   } 
}
namePrint();


function ntimes(n){
for(let i = 0; i<n; i++){
    let x = "sawan kumar"
   console.log(x)
}
}
ntimes(5)


function myFunction(theObj){
    theObj.make = "toyota"
}

const mycar = {
    make: "Honda",
  model: "Accord",
  year: 1998,
}

console.log(mycar.make)

myFunction(mycar)
console.log(mycar.year)


function myCity(theObj){
 theObj.make = "indore"
}

const city = {
    make :"Bhopal",
    make2:"khandwa",
    make3:"ujjain",
    make4:"maksi"
}
console.log(city.make4);
console.log(city.make3)
console.log(city.make2)
console.log(city.make)

myCity(city)
console.log(city.make2)


function Arrays(thearr){
    thearr[0]=30
}

const arr = [45];
console.log(arr[0])
Arrays(arr)
console.log(arr[0])

const squar = function(number){
    return number*number
}
let x = squar(4)
console.log(x)

const sequance = function(number){
    return number + number
}
console.log(sequance(5))

const fun = function(number ){
return 500%number
}
console.log(fun(6))

const factorial = function fun(n){
return n<2 ? 1 : n* fun(n-1)
}
let resul = factorial(3)
console.log(resul)

const facts = function FD(n){
 if(n<2){
   return 1
}else{
  return  n*FD(n-1)
}
}
let multi = facts(5)
console.log(multi);

const num1 = 5;
const num2 = 6;
const names = "malviya"
function multiply(){
    return num1*num2
}
console.log(multiply())

function outsideFun(){
    const num1 = 50;
    const num2 = 60;
    function add(){
    return `${names} scord ${num1+num2}`
    } 
 return add()
}
console.log(outsideFun())



