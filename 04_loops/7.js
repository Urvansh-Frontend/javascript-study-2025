// const coding = ["HTML", "JAVA", "PHP", "NODE"]

// const values = coding.forEach((items) => {
//     // console.log(items);
//     return items
// })

// console.log(values)


//  FILTER 



let myNums = [1, 2, 3, 4, 5, 6];

// let newnums = myNums.filter((num) => num > 3)
// console.log(newnums)


// let newnums = myNums.filter((num) => {
//     return num > 3
// })
// console.log(newnums)


// const newnum = []

// myNums.forEach((num) => {

//     if (num > 4) {
//         newnum.push(num)
//     }
// })

// console.log(newnum)


const books = [
    {
        name: "The Alchemist",
        genre: "Fiction",
        published: "1988",
        edition: 1
    },
    {
        name: "Clean Code",
        genre: "Programming",
        published: "2008",
        edition: 2
    },
    {
        name: "Sapiens",
        genre: "History",
        published: "2011",
        edition: 1
    },
    {
        name: "Atomic Habits",
        genre: "Self-help",
        published: "2018",
        edition: 1
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        published: "1997",
        edition: 3
    }
];

// const userBooks = books.filter((child) => child.genre === "History")
let userBooks = books.filter((child) => child.genre === "History")

userBooks = books.filter((child) => child.published <= 2000 && child.genre === "Fiction")


console.log(userBooks)