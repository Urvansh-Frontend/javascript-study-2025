// for loop
// while loop
// do while loop

// //////////////////////////////////////////////////////////////


//  FROM NOW LOOPS ARE ARRAY SPECIFIC


// FOR OF LOOP - EASY 
const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
    // console.log(num)
}

const grettings = "Hello World"

for (const greet of grettings) {

    if (greet == " ") {
        continue;
    }
    // console.log(`Each character is ${greet}`);
}



// MAPS 

const map = new Map()
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("RS", "Russia");
map.set("CH", "China");

for (const [key, value] of map) {
    // console.log(`${[key]} - ${[value]}`)
}


//  FOR of is not iterable for Object

// const obj1 = {
//     user: "Urvansh",
//     gender: "Male",
//     email: "urvansh10@gmail.com"
// }

// for (const key of obj1) {
//     consle.log(key)
// }