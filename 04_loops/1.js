//  For

for (let test = 0; test < 10; test++) {
    const element = test;
    if (element == 5) {
        // console.log("Number 5 is best")

    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value ${i}`);
    for (let test = 1; test <= 10; test++) {
        // console.log(`Inner Loop  ${test} and i is ${i}`);
        // console.log(i + '*' + test + "=" + i*test)
    }

}

const myarray = ["Urvansh", "Kunal", "Kishna"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element)
}

//  Break and Continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is detcted")
//         break;
//     }
//     console.log(`value of index is ${index}`)
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detcted")
        continue;
    }
    console.log(`value of index is ${index}`)
}

for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

