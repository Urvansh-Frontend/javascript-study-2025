
function myName() {
    console.log("UR")
    console.log("VA")
    console.log("NS")
    console.log("H")
}

// myName()

// function addNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

// function addNumbers(number1 , number2){
//     let result = number1 + number2;
//     return result
// }

function addNumbers(number1, number2) {
    return Number(number1) + Number(number2)
}
const result = addNumbers(1, '30.50')

// console.log(`Result is -  ${result} (type : ${typeof result})`);


function nameprint(username) {
    if (!username) {
        // if(username === undefined){
        console.log("Please enter a user name")
        return
    } else {

        return `Welcome ${username} just logged in , How was the jounery so far`

    }
}
// console.log(nameprint("Sanya"));

// let letsPrint = nameprint();


// PART 2

function calculatePrice(...number) {  // use rest operator to convert multiple values into array 
    return number

}

// console.log(calculatePrice(1))
console.log(calculatePrice(300, 503, 65));


const user = {

    name: "Urvansh",
    age: 26,
    country: "Canada",
}

function handleobject(anyobject) {

    console.log(`User Name is ${anyobject.name}. He belongs to ${anyobject.country} and his age is ${anyobject.age}`)
}

handleobject({
    name: "kalu",
    country: 'Africa',
    age: 33,
})

const newarr = [300, 400, 500, 870]

function commonArr(anyArr) {

    console.log(`${anyArr[1]}`)
}

commonArr([
    500, "Urvansh", true
])