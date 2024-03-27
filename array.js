
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

  