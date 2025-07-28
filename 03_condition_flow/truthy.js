const username = ''

if (username) {
    // console.log("SUCCESS");
} else {
    // console.log("FAIL");

}

// Fasly Values

// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NAN


//  TRUTHY VALUES
// "0"
// "false"
// " "
// {}
// []
// function(){}



if (username.length === 10) {
    console.log("ARRAY IS EMPTY")
}

const emptyobj = { user: true, }

if (Object.keys(emptyobj).length === 0) {
    // console.log("OBJECT IS EMPTY");

}

// Nullish Coalescing Operator (??) : (Null) (undefined)

let val1;
// val1 = 11 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 188
val1 = undefined ?? 900 ?? 155
console.log(val1)

//  Terniary operator - One Liner true and false     

// condition ? true : false

const goldprice = 500

goldprice >= 200 ? console.log("YES IT IS ABOVE 200 ") : console.log('no it is less than 200')

