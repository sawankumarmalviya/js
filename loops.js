//Write a program to print your name 10 times.
let names= 'sawan';

for (let i = 0; i < 10; i++) {
    console.log(i+ ' ' + names)
}

//WAP to print your name n times.
let n=5;
for(let i=0; i<n;i++){
    console.log(i+ ' ' +"sawan kumar n times")
}

//3. WAP to print given string 10 times
let strings = 'this is the string'
for(let i =0; i<10; i++){
    console.log(strings)
}
//4. WAP to print given string n times.
for(let i=0; i<n; i++){
    console.log(` ${i} ${strings}`)
}
//5. Write a program to print the first 10 natural numbers.
 for(let i=1; i<=10 ; i++){
     console.log(i)
 }
//6. WAP to print first n natural numbers.
for(let i = 1; i<=n ; i++){
    console.log(i)
}

//7. WAP to print counting from A to B
console.log('**************')
let a = 4;
let b= 12;
for(a; a<=b; a++){
    console.log(a);
}

//8. WAP to print reverse counting from n to 1.
for(let i=n; i>0; i--){
    console.log(i)
}

// let number = 6;
// for(let i = number ; i>=0; i--){
//     console.log("sawan" + ' ' + i)
// }

// Write a program to print table of 2.
let res;
for(let i=1; i<=10;i++){
    res= 2 + 'x' + i + '='+ i*2;
    console.log(res)
}

//WAP to print table of n.
let num= 10;
let resn
for(let i=1; i<=10 ;i++){
    resn= `${num} x ${i} = ${num*i}`
    console.log(resn)
}

//WAP to calculate the sum of first 10 natural number.
let naturalNum = 10;
let sum =0
for(let i= 1; i<=naturalNum;i++){
 sum += i
}
console.log(sum)

//WAP to calculate numA to the power of numB (using loop).
  let numA = 5;
  let numB = 3;
  let numSum=1
  for(let i =1; i<=numB; i++){
    numSum*=numA
  }
  console.log(numSum)

  //WAP to print all elements of an array.
  let arr = [12,2,5,5,4,8]
  for( let i=0; i<arr.length; i++){
    console.log(arr[i]);
  }

  //WAP to print sum of all elements of an array.
  let arr2 = [1,2,3,4,100,'sawan']
  let sumArray=0
  for(let i = 0 ; i<arr2.length; i++){
    sumArray +=arr2[i] 
  }
console.log(sumArray)

// WAP to create number using array elements.
let num2 = 0
for(i=0; i<arr.length; i++ ){
    num2=num2*10+arr[i]
}
console.log('num2=' +num2)

//WAP to print digits of a given number.
let dig = 245
let strdig = dig.toString();
for( let i = 0; i<strdig.length; i++){
    console.log(strdig[i])
}  


//. WAP to print sum of digits of a given number.
let givNUm = 245
let strnum = givNUm.toString();
let strnumadd = 0
for( let i = 0; i<strnum.length; i++){
    strnumadd+=parseInt( strnum[i])
}  
console.log(strnumadd)