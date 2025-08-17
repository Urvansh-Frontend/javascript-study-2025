const coding = ["HTML", "JAVA", "PHP", "NODE"]

//  HIGHER ORDER FUNCTION
coding.forEach(function (item) {
    // console.log(item)
})

//  ARROW FUCNTION
coding.forEach((value) => {
    // console.log(value)
})


function printme(item) {
    console.log(item)
}

// coding.forEach(printme)


coding.forEach((value, index, arr) => {
    // console.log(value, index, arr)
})

//  MULTIPLE OBJECTS IN A SINGLE ARRAY 

const test = [
    {
        name: "Urvansh",
        gender: "Male",
    },
    {
        name: "Kunal",
        gender: "Male",
    },
    {
        name: "Ridhi",
        gender: "Female",
    }
];

test.forEach((item) => {
    console.log(item.name);
    console.log(item.gender);
})

