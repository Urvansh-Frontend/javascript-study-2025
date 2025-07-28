const username = ""

if (username) {
    console.log("SUCCESS");
} else {
    console.log("FAIL");

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



if (username.length === 0) {
    console.log("ARRAY IS EMPTY")
}

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("OBJECT IS EMPTY");

}

// Nullish Coalescing Operator (??) : Null undefined
