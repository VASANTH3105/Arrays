let name = {
    firstname: "John",
    lastname: "S",
    printFullName: function() {
        console.log(`Hi ${this.firstname}. ${this.lastname}`);
    }
}

name.printFullName();

let name2 = {
    firstname: "Peter",
    lastname: "Patter",
    //I want to implement the same printFullName here 
    // one way is to copy paste the same function here
}
//Other way we can use call method ( Function borrowing )
//Can able to borrow functions from other objects can be used for other object data

name.printFullName.call(name2); //Inside the call method we are passing the object name2
// the argument should be the reference of another object
//___________________________
//Best pratices is to  use printFullName outside as seperate function
let car1 = {
    name: "Innova",
    type: "MPV"
}

let printCarDetails = function(make = "No data", year = 2000) {
    //NOTE: Arrow function will not bind
    console.log(`The car ${this.name} is type of ${this.type} made in ${make} and year ${year}`);
}

printCarDetails.call(car1);
printCarDetails.call(car1, "India");
// If you need to use this and dynamically bind it to a different object,
// always use a regular function instead of an arrow function. 
// Arrow functions are suitable when you want to inherit this from the enclosing scope.

printCarDetails.apply(car1, ["India", 2024]);
//apply is used when we need to pass multiple arguments in array and to handle dynamically
//Second argument as array list

//bind method is used to bind the function to the object and return the function
//If required it can be invoked later

let printMyCar = printCarDetails.bind(car1, "Germany", 2024);
//bind method returns a function with binded data which can be called later
console.log(printMyCar);
printMyCar();

//Currying in JS

let multiply = function(x, y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(2);
//one more way to use this is function closures

let add = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let addResult = add(3);
addResult(2);

//_______________________________________________
// Debouncing asked in FLIPKART interview
// Check flipkart open network tab type School bag in search box
// It makes an API call once you type school & then stops making API call for School bag
//___________________Check index.html file______________________


//_____________________________________________________________________________
//Async and  Defer asked by OLA
//Normal execution
//  |++++++parsing++++|                                     |+++parsing++++|
//                   |---SRC downloading---|===Execution===|

//Async
//  |++++++++++parsing+++++++++++|                 |++++parsing++++|
//       |----SRC downloading----|====Execution====|

//Defer
//  |+++++++++++++++++++parsing+++++++++++++++++|
//       |----SRC downloading----|              |====Execution====|
//_____________________________________________________________________________


