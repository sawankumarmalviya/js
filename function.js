
function myfunction(){
   let x = "sawan" 
   console.log(x);
}

myfunction()
function myfunctions(){
    let y = "malviya";
    console.log(y)
}
myfunctions()

function ifElse(){
    let a = 5;
    let b =15;
    let result = "";
    if(a==b){
        result = "equal"
    }else{
        result= "not equal"
    }
    console.log(result)
}
ifElse();

function Functions(){
let a = 10;
let b= 20;
let c = a;
a=b;
b=c;
console.log('a =' + a + ' b =' + b)
}
Functions()

function swapNumber(){
    let a = 50;
    let b = 10;
    a = a+b
     b =a-b
     a = a-b
     console.log(`a = ${a} , b = ${b}`)
}
swapNumber();

function maximumNum(){
    let a = 100;
    let b =  20;
    if(a>b){
        console.log("a is grater than b")
    }else{
        console.log("a is not grater than b")
    }
}
maximumNum()

function maximumThreeNumber(){
    let a = 100;
    let b = 200;
    let c= 320;
    if(a>b && a>c){
        console.log("a is grater than b & c")
    }else if(b>a && b>c){
        console.log("b is grater then a & c")
    }else{
        console.log("c is grater then a & b")
    }  
}
maximumThreeNumber()

function positiveNegativeNUmber(){
    let num = -10;
    if(num>0){
        console.log('num is positive')
    }else if(num<0){
        console.log('num is negative')
    }else{
        console.log('num is 0')
    }
}
positiveNegativeNUmber();

function divisibleOrNot(){
let num = 110;
if(num % 5==0  && num%11==0 ){
    console.log("num is divisible")
}else{
    console.log("num is not divisible")
}
}
divisibleOrNot()

function evenOROdd(){
    let num  = 21;
    if(num %2==0){
        console.log("num is even")
    }else{
        console.log("num is odd")
    }
}
evenOROdd()