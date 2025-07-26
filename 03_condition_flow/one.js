const isUserLoggedin = true
const temperature = 41

// if (temperature != 50) {

//     console.log("YES Temp is less than 50")
// } else {
//     console.log("NO Temp is less than 50")

// }

// < Less Than
// >Greater than 
// <= Less then and equal to 
// >= Greater then and equal to 
// == Check comparison
// != Not equal to comparison 
//  === comparison + data type check


const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power = ${power}`)
// }

// console.log(`user power = ${power}`)


const balance = 751

//  Implecit Scope - Excutes in one Line , Always end with ; 
if (balance > 500) console.log("YES YES YES ");

// BASIC DONE ABOVE 



/////////////////////////////////////////////////////////////////////////////////////////

// if (balance < 500) {
//     console.log('Less than 500')
// } else if (balance < 750) {
//     console.log('Less than 750')
// }
// else if (balance < 900) {
//     console.log('Less than 900')
// }
// else {
//     console.log('Less than 1200')
// }

const userVerified = true
const debitCard = true
const loggedingoogle = false
const loggedinemail = true

//  each should be true 
if (userVerified && debitCard) {

    console.log("Yes you are elligible")
}
//  This is OR means one should be true 
if (loggedinemail || loggedinemail) {

    console.log("Welcome")
}