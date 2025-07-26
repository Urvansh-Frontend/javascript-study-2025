//  Immedately Invoked Function Expression (IIFE)

(function chai() {
    console.log("DB CONNECTED")
})();


//  SYNTAX 

// First one is Function Defination  SECOND ONE IS TO // To call function / Execution 
// TO PREVENT GLOBAL SCOPE VARIABLES POLLUTION USE IIFE
// ()()

(() => {
    console.log("DB CONNECTED TWO ")
})();

// NAMED IIFE 
(function chai() {
    console.log("DB CONNECTED THREE ")
})();

// UNNAMED IIFE 
((name) => {
    console.log("DB CONNECTED " + name)
})('Urvansh');
