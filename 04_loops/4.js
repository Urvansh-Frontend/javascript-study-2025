const obj1 = {
    user: "Urvansh",
    gender: "Male",
    email: "urvansh10@gmail.com"
}
//  FOR IN LOOPS
//  MAP CANT BE USED HERE
//  IT RETURNS KEYS

for (const key in obj1) {
    // console.log(key, "=", obj1[key])
}


const program = ["java", "HTML", "Rubby"]

for (const key in program) {
    console.log(program[key])
}


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("RS", "Russia");
map.set("CH", "China");

for (const key in map) {
    console.log(key)
}