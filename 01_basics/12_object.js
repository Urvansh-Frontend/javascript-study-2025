//  SINGLETON To Be Continued 
// Object.create


//  Object Literal 
let sym = Symbol('key1');
const user = { 
    'full name' : 'Urvansh Verma',
    name : 'Urvansh', 
    gender : 'Male', 
    hasaccount : true,
    age : 22, 
    [sym] : 'test',
}

// console.log(user[sym]); // TO CALL CUSTOM 
// console.log(typeof user[sym]); // TO CALL CUSTOM 

// Object.freeze(user);
// user.gender = "Female";
// console.log(user);

user.gretting = function(){
    console.log("Hello World");
}

user.grettingtwo = function(){
    console.log(`Hello World user is = ${this.name}`);
}

// console.log(user.gretting());
// console.log(user.grettingtwo());
// console.log(user['grettingtwo']());



// SECOND PART STARTS FROM HERE 

// Constructor and Singleton

const tinderuser  = new Object ();
// const tinderuser  =  {}
// console.log(typeof newtinderuser);


// console.log(tinderuser);

const regularuser = {
    email : 'urvanshgogna@gmail.com',
    fullname : {
        firstName: 'Urvansh',
        lastName: 'Verma',
    }
}
// console.log(regularuser.fullname.firstName);


// THIS IS NESTING ]] We can use ? for checks 

const Object1 = { name: 'urvansh', 1:'one' , 2:'two', 3:'three'}
const Object2 = { 4:'a' , 5:'b', 6:'c' , Loggedin: true}
// const Object3 = { Object1 , Object2}

// const Object3 = Object.assign( {} , Object1 , Object2)

//  MOST USED WAY this is spread WAY same as array 

const Object3 = {...Object1 , ...Object2}

// console.log(Object3)
// console.log(Object1)



const users = [ 

    {
        name: 'Urvansh',
        gender: 'Male'
    },
    {
        name: 'Nikhil',
        gender: 'Male'
    },
    {
        name: 'Sanya',
        gender: 'Female'
    },
]

// console.log(users[1].name);

// console.log(regularuser);
// console.log(Object.keys(regularuser)); // To extract Keys and convert it array 
// console.log(Object.values(regularuser));
// console.log(Object.entries(regularuser));


console.log(regularuser.hasOwnProperty('fullname'));