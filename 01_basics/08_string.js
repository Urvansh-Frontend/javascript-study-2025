
let lastName = 'Gogna';

let Name = "Urvansh";
let newName = new String("UrvanshGogna")


// console.log(`Hello World user name is ${Name} and his last name is ${lastName}`)


// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(5));
// console.log(newName.indexOf('r'));

let newstring = newName.substring(0, 5);
// console.log(newstring)


let new1string = newName.slice(-8 , 12);
// console.log(new1string)

let newUser = "       Test Singh      "
// console.log(newUser);
// console.log(newUser.trim());



let arg = "Hello My name is Kunal Verma KUNAL VERMA from Mandi Gobindgarh"

console.log(arg.replace(/Verma/ig, "Gogna").split(" "));


