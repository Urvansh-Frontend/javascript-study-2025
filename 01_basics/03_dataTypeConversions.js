let age = undefined
let DOJ = undefined

console.log(typeof age);
console.log(typeof (DOJ));

let NEWDOJ = Number(DOJ);

console.log(NEWDOJ); // NAN but bcoz it has string
console.log(typeof (NEWDOJ)); // Still number 


//  "24" => 24 
//  "24 M" => NAN           But type is Number
//  "null" => 0             But type is Number
//  "undefined" => NAN      But type is Number 
//  true => 1      
//  false => 0      







console.log("THIS IS TEST")

let verfiedAge = 100

let newVerfiedAge = String(verfiedAge);

 console.log( newVerfiedAge )
 console.log(typeof newVerfiedAge )