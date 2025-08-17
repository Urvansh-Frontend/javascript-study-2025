// TEST = 1

// Print numbers from 1 to 5 using a for loop.
// Expected Output:
// 1
// 2
// 3
// 4
// 5

for (let index = 1; index <= 5; index++) {
    // console.log(index);
}


//  TEST =  2
// 2. Print even numbers between 1 to 10 using a while loop.
// Expected Output: 2 4 6 8 10

let number = 1;
while (number <= 10) {
    if (number % 2 !== 1) {
        // console.log(number);
    }
    number++;
}


// ✅ 3. Print your name 3 times using a do...while loop.
// Expected Output:
// Urvansh
// Urvansh
// Urvansh

let name = 1
do {
    // console.log("urvansh")
    name++
} while (name <= 3)





// ✅ 4. Print each fruit in an array using for...of.
// let fruits = ["apple", "banana", "grapes"];
// Expected Output:
// apple
// banana
// grapes

let fruits = ["apple", "banana", "grapes"];
for (const fruit of fruits) {
    // console.log(fruit)
}


// ✅ 5. Print keys and values from an object using for...in.

// let person = {
//     name: "Urvansh",
//     age: 22,
//     job: "Designer"
// };

let person = {
    name: "Urvansh",
    age: 22,
    job: "Designer"
};
for (const key in person) {
    // console.log(`${key} : ${person[key]}`)
}




// ✅ 6. Use forEach() to print each element in an array.

// let numbers = [5, 10, 15];
// Expected Output:
// 5
// 10
// 15

let numbers = [5, 10, 15];
numbers.forEach((item) => {
    // console.log(item)
})


// 8. Print only odd numbers from 1 to 10 using a loop.

let test = 1
while (test <= 10) {
    if (test % 2 != 0) {

        // console.log(test)
    }
    test++;
}


// 9. Loop through an array of names and stop if you find "Urvansh"(use break).

let heros = ["Gagan", "Kunal", "Kishna", "Urvansh", "Nikhil", "Teji"]

for (const hero of heros) {
    if (hero === "Urvansh") {
        break;
    }
    // console.log(hero)
}


// 10. Skip the number 3 while printing 1–5(use continue).

for (let index = 1; index <= 5; index++) {
    if (index === 3) {
        continue
    }
    console.log(index)

}