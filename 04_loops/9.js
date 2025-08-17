//  REDUCE 

const myNums = [1, 2, 3, 4, 5, 6]

// SIMPLE Function

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc is ${acc} and Currval is ${currval}`)
//     return acc + currval
// }, 0)


//  ARROW FUNCTION 

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc is ${acc} and Currval is ${currval}`)
//     return acc + currval
// }, 0)


// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS",
        itemPrice: 999
    },
    {
        itemName: "Python",
        itemPrice: 1999
    },
    {
        itemName: "Python",
        itemPrice: 1999
    }
]

const myValue = shoppingCart.reduce((acc, item) => acc + item.itemPrice, 0)

console.log(myValue)