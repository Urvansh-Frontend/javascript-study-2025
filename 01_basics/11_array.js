let myarray = [0 , 1 ,2 ,3 ,'Urvansh' , true, false]
let myFamily = [ 'Urvamsh' , 'Kunal' , 'Mom' , 'Ridhi' , 'Kashish']

// myarray.push('JAVA') // For Pushing values to array 
// myarray.push(false) // For Pushing values to array 
// myarray.pop(); // For  Removing Last Value


// myarray.unshift('Am using unshift'); // Add Value to front
// myarray.shift()  // Removes first value 

// const join = myarray.join()

// console.log( join); // convert it to string 
// console.log(myarray);


// Slice and Splice 

// console.log( 'A' , myarray);

// const myn1 = myarray.slice(1,4); // Slice definded number and dosent include last number dont change teh orignal array 
// console.log(  myn1);
// console.log( 'B' , myarray);


// const myn2 = myarray.splice(0,6);
// console.log(myn2)
// console.log( 'C' , myarray);


let cars = ['Hummer' , 'Bronco' , 'Swift' , 'Endavour']
let phone = ['apple' , 'Samsung' , 'Redmi' , 'vivo']

// let allmerge = cars.concat(phone); // Joins 2 arrays and  return new array 

// console.log(allmerge)


// const combined = [...cars , ...phone] // Spread Operator

// console.log(combined);


// const rare = [1, 2 ,3 ,[23 , 23 ,[2,6 ,7 , 8]]]
// console.log(rare.flat(Infinity))  // Converts inner child to one array 

console.log(Array.isArray([1]));
console.log(Array.from());