const user = {
    name: "Urvansh",
    price: 1499,
    welcomeMessage: function () {
        console.log(`${this.name} welcome code is good`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.name = 'Test'
// console.log(this)


//  THIS dont works directly in functions 
function one() {
    let name = "Urvansh"
    console.log(this.name);
}
// one()



function oneTwo() {
    let name = "Urvansh"
    console.log(this);
}

//  Arrow function basic 
const chai = () => {
    let name = "Urvansh"
    console.log(this);
}



//  ARROW SYNTAX 

// const add = (num1, num2) => {
//     return num1 + num2;
// }


//  Implicit Return 
const add = (num1, num2) => (num1 + num2);

console.log(add(3, 5))