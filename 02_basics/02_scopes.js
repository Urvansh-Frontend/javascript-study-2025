{ } //This is scope (NOt consider with object) 


// It is global scope

let b = 200;
if (true) { // it is block scope
    let b = 2;
    const c = 3;
    console.log(b)
}

console.log(b)
// console.log(c)

//  NESTING SCOPE 

function one() {

    const name = "Urvansh ";

    function two() {
        const website = "chai aur code";
        console.log(name + website);
    }
    // console.log(website);
    // console.log(name);
    two()

}


// ------------------------------------------------ INTRESTING -------------------------------------



//  Simple or Name function
function addone(num) {
    return num + 1;
}
console.log(addone(5))


//  Expresion function
const addTow = function (num) {
    return num + 2;
}
console.log(addTow(5))

