//Dates

let myDate = new Date();

// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)

// let newDate = new Date(2023 , 0 , 21);
// let newDate = new Date(2023 , 0 , 21 , 5, 4);
let newDate = new Date("12-05-2025");

// console.log(newDate.toLocaleString());


let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now() / 1000));



let latestDate = new Date();

// console.log(latestDate.getTime());
// console.log(`${latestDate.toDateString()} & and time is ${latestDate.toLocaleTimeString()}`)

console.log(latestDate.toLocaleString('default', {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: 'Asia/Kolkata'
}));

console.log(latestDate.toLocaleTimeString())