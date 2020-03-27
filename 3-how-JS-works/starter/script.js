///////////////////////////////////////
// Lecture: Function and variables Hoisting


// Functions
// Function can be called before function instruction description(but only function declaration!!!)
// calculateAge(1964);

// function calculateAge(year){
//     console.log(2016 - year);
// }

// calculateAge(1990);

// Doesn't works for function expression
// retirement(1956);

// let retirement = function(year){
//     console.log(65 - (2016 - year));
// }

// retirement(1990);


// Variables
// console.log(age);
// should be used var here to get undefined!!!
// var age = 23;
// let age;
// console.log(age);

// function foo() {
//     // console.log(age);
//     let age = 65;
//     console.log(age);
// }
// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// 'Hello!HI!Hey!'




// Example to show the differece between execution stack and scope chain


/* let a = 'Hello!';
first();

function first() {
    let b = 'Hi!';
    second();

    function second() {
        let c = 'Hey!';
        third();
    }
}

function third() {
    let d = 'John';
    // console.log(a + b + c + d);
    console.log(c);
} */




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/* calculateAge(1987);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
} */

// let john = {
//     name: 'John',
//     year: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2016 - this.year);

//         /* function innerFunction() {
//             console.log(this);
//         }
//         innerFunction(); */
//     }
// }

// john.calculateAge();

// let mike = {
//     name: 'Mike',
//     year: 1984,
// }


// // Method borrowing!!!
// mike.calculateAge = john.calculateAge;
// mike.calculateAge();




