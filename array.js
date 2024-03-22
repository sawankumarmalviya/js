
//concat() method

//This method does not change the existing arrays, but instead returns a new array.

function concat(arr1,arr2){
arr1 = ["harda","timarni","seoni","hoshangabad"];
arr2 = ["sodalpur","betul"];

console.log(arr1.concat(arr2,arr1))// new array
console.log(arr1)
console.log(arr2)

}
concat();

function nestedconcat(arr1,arr2){
  arr1 = [[1]]  ,
  arr2 = [2,[3]]
  arr3 = [['sawan','malviya']]
  let result  = arr1.concat(arr2)
  console.log(result)
  arr1[0].push(4)
  console.log(result)
  console.log(arr1.concat(arr3)) 
}
nestedconcat();
   



