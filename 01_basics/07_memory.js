//  Stack  (Primitive)
// Gives Copy 

let name = "Urvansh"
let anotherName = name

anotherName = "Kunal"

// console.log( name)
// console.log( anotherName)

//  Heap Memory (Non-Primitive)
// Change Orignal value 


let user = {

    name: "Urvansh",
    age: 22,
    gender: "Male"

}

let userOne = user ;
userOne.name = 'Kunal';
userOne.age = 25;

console.log(user)
console.log(userOne)