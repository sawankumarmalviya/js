let number  = [1,2,1,3,5,4,6,7]
let number2 = [10,20,40,0,100,120,4,20]
console.log(number[0])

let city = ["harda", "timarni","sodalpur", "seoni"]
console.log(city[1])

let exs = number.toString()
console.log(exs)
console.log(typeof(exs))
console.log(city)
console.log(city.length)
console.log(city.sort())
console.log(number.sort())
console.log(number2.sort())

function fruits(arr){
    arr  = ['apple','mango','banana','chicku','strobarry','pinapple'] 
    return arr
}
let fruitsArray = fruits();
console.log(fruitsArray.sort())

for(let i = 0; i<city.length; i++){
   console.log(i , city[i]) ;
}
function moterbike(arr){
    arr = ['honda','hero','royal Enfild','ktm','tvs','r15','yamaha']
    for(let i = 0; i<arr.length; i++){
        return arr[i]
    }
    return 1
}
let moterbikeArray = moterbike();
console.log(moterbikeArray);



