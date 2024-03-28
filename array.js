
//concat() method

//This method does not change the existing arrays, but instead returns a new array.

function concat(arr1, arr2) {
  arr1 = ["harda", "timarni", "seoni", "hoshangabad"];
  arr2 = ["sodalpur", "betul"];

  console.log(arr1.concat(arr2, arr1))// new array
  console.log(arr1)
  console.log(arr2)

}
concat();

function nestedconcat(arr1, arr2) {
  arr1 = [[1]],
    arr2 = [2, [3]]
  arr3 = [['sawan', 'malviya']]
  let result = arr1.concat(arr2)
  console.log(result)
  arr1[0].push(4)
  console.log(result)
  console.log(arr1.concat(arr3))
}
nestedconcat();

function con() {
  let arr1 = ['graps', 'apple', 'banana']
  let arr2 = 'pinaple';
  console.log(arr1.concat(arr2))
}
con();

// Foreach function 

//Logging each element of an array:

let array = ["harda", "timarni", "seoni", "hoshangabad"];
array.forEach(function (item, index) {
  console.log(index, item)
})

let array2 = [1, 2, 3, 4]
array2.forEach(function (item, index) {
  console.log(index, item)
})

let array3 = [10, 20, 30, 40]
array3.forEach(function (item, index) {
  console.log(index, item);
})

let company = ['ibm', "microsoft", 'gallexy', 'facebook', 'google']
company.forEach((item, index, arrr) => {
  console.log(index, item)
})

// Modifying each element of an array:

let number = [1, 2, 3]
number.forEach((item, index, arr) => {
  arr[index] = item * 2
})
console.log(number)

//Summing up the values of an array:
function summingArray() {
  let numbers = [1, 2, 3, 4, 5, 6]
  let sum = 0
  numbers.forEach((item) => {
    sum = sum + item
  })
  console.log(sum)

  let multi = 1;
  numbers.forEach((item, index, arr) => {
    multi = multi * item
  })
  console.log(multi);

}
summingArray()

//Removing duplicates from an array:
const duplicates = [1, 2, 2, 3, 4, '4', 5];
const unique = []
duplicates.forEach((item) => {
  if (!unique.includes(item)) {
    unique.push(item)
  }
})
console.log(duplicates)
console.log(unique)

const students = ['monu', 'rajendra', 'dinesh', 'dinesh', 'ranu', 'rajendra']
const uniqueArray = [];
students.forEach((student) => {
  if (!uniqueArray.includes(student)) {
    uniqueArray.push(student)
  }
})
console.log(uniqueArray);

const companys = ['honda', 'honda', 'mahindra', 'tata', 'hundai', 'RR', 'tata', 'mahindra']
companys.forEach((car) => {
  if (!uniqueArray.includes(car)) {
    uniqueArray.push(car);
  }
})
console.log(uniqueArray)


//Filtering out elements based on a condition:
const evenArray = [20, 1, 90, 50, 6, 8, 4, 5, 9, 2, 1, 3, 5]
const even = []
evenArray.forEach((item) => {
  if (item % 3 == 0 && !even.includes(item)) {
    even.push(item)
  }
})

console.log(even)

// pop method =======>
//The pop() method removes the last element from an array:
even.pop();
console.log(even)
even.pop()
console.log(even)
even.pop()
console.log(even)
console.log('pop')


// push method =======>
//The push() method adds a new element to an array (at the end):
even.push(6)
console.log(even)
even.push(9)
console.log(even)
even.push(3)
console.log(even);
console.log("push")

// join method ==========>
//The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
const fru = ['banana', 'coconate', 'mango']
console.log(fru.join(" # "))
const nums = [10, 20, 30, 40, 50]
console.log(nums.toString())
console.log(fru)
fru.shift()
console.log(fru)
fru.shift();
console.log(fru)
fru.unshift("coconate")
console.log(fru)
fru.unshift("banana")
console.log(fru)

console.log(fru)
fru.fill('pinapple')
console.log(fru)


//filter method =====>
// the filter() method is used to create a new array with all elements that pass a certain condition defined by a provided function.

const Array = [10, 20, 15, 65, 35]
let res = Array.filter((item) => {
  if (item > 30) {
    return item
  }
})
console.log(res)
// find prime number 
const primeNumber = [1, 2, 3, 4, 5, 6, 20, 64, 58, 71]
//  const isPrime = (item) =>{
//       for(let i =2 ; i<item ; i++){
//         if(item%i===0){
//             return true
//         }
//       }
//       return  item>1
//  }
//  const resPrime = primeNumber.filter(isPrime) 
//  console.log(resPrime)
console.log(primeNumber)
const isPrime = primeNumber.filter((item) => {
  for (let i = 2; i < item; i++) {
    if (item % i === 0) {
      return false;

    }
  }
  return item > 1
})
console.log(isPrime)

//even number using filter methode
const num = [1, 2, 5, 8, 7, 9]
const evenNum = num.filter((number) => {
  if (number % 2 == 0) {
    return number
  }
})
console.log(evenNum)
const ev = num.filter(number => number % 2 === 0)
console.log(ev)


//Filtering strings longer than 3 characters:
const str = ['asdasdad', 'dfas', 'sad', 'asdasaf']
const r = str.filter(string => string.length > 3)
console.log(r);

//Filtering objects based on a property value:

const person = [
  { names: 'Alina raise', age: 25  }, 
  { names: 'srk', age: 52 },
  { names: 'rishabh', age: 17}
]
console.log(person[0].names)
console.log(person[1].names)
console.log(person[2].names)
let voter = person.filter((value) => {
  if (value.age >= 18){
   let name = value.names
    return name
  }
})
 console.log(voter)

//Filtering out null or undefined values:
 const values = [1, null, 2, undefined, 3];
  const nonNullvalue = values.filter((item)=>{
    if(item !== null && item !== undefined){
      return item
    }
  })
  console.log(nonNullvalue)
  
  let copy = []
  let y = values.forEach((item)=>{
    if(item!==null && item !==undefined){
          copy.push(item)
    }
  } )
  console.log(copy)
  //Filtering unique elements from an array:
  
  
  const uniqarray = [1,1,1,2,5,5,6,5,5,8,9,9,7]
  const uniquearr = []
  uniqarray.filter((item)=>{
    if(!uniquearr.includes(item)){
      uniquearr.push(item)
    }
  })
 console.log(uniquearr)

 //Filtering elements containing a specific substring:

  var strs = "sawan"
  console.log(typeof +strs) //expected output number
  console.log(typeof Number(strs))  //expected output number
  console.log(typeof parseInt(strs))  //expected output number
  console.log(typeof parseFloat(strs))  //expected output number
  console.log(typeof strs + " ") //expected output string
  console.log(typeof String(strs) ) //expected output string

  //find prime number using filter method into givin array

  let givArray = [2,3,52,4,8,7,5,3,6,9,11]
  
  let pr = givArray.filter((item)=>{
    for(let i =2; i<item; i++){
      if(item% i===0){
        return false;
        break;
      }
    }
    return item >1
  })
console.log(pr)


/* finde methode of the array . return the first element in the provided array that satisfies 
the provided testing function. if no value satisfy the testing function , undefine is return .*/

const found =  givArray.find((element)=>{
  if(element>10){
    return element
  }
})
console.log(found)

/* findeINdex methode of the array . return the first element index in the provided array that satisfies 
the provided testing function. if no value satisfy the testing function , -1 is return .*/

const foundIndex =  givArray.findIndex((element)=>{
  if(element>10){
    return element
  }
})
console.log(foundIndex)

/* findeLast methode of the array . return the Last element in the provided array that satisfies 
the provided testing function. if no value satisfy the testing function , undefine is return .*/

const foundlast =  givArray.findLast((element)=>{
  if(element>10){
    return element
  }
})
console.log(foundlast)

/* findeLast methode of the array . return the last  element  index in the provided array that satisfies 
the provided testing function. if no value satisfy the testing function , undefine is return .*/

const foundlastIndex =  givArray.findLastIndex((element)=>{
  if(element>10){
    return element
  }
})
console.log(foundlastIndex)

/* The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.*/

const fal = ["ram",["mohan","mishra",["was","go"]]]
const falt = fal.flat(2);
console.log(falt)
console.log(fal)

const flatArrat = [41,52,[20,30,[5,63,[52,[96]]]] ]
const flatNewArray = flatArrat.flat(4)
console.log(flatNewArray)
console.log(flatArrat)


//map mathod 
const maparray = [1,2,3,4,5]
const evenNumber = maparray.map((e)=>{
  return e*2;
})
console.log(evenNumber)
 const mapStr = ["apple","banana","graps"]
const uppercase = mapStr.map((e)=>{
  return e.toUpperCase() 
})
console.log(uppercase)


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];
const namemap = people.map(e=> e.name)
console.log(namemap)