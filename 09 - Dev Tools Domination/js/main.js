const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];
const p = document.querySelector("p");
// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string!", "Take in Place");

// Styled
console.log("%c Styled Text", "font-size:18px; color:blue");

// warning!
console.warn("Warning Text");

// Error
console.error("Error Text");

// Info
console.info("Information Text");

// Testing
console.assert(2 === 1, "That is wrong!");
console.assert(1 === 1, "That is wrong!");

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`The Dog Name is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Hi");
console.count("User");
console.count("Hi");
console.count("User");
console.count("Hi");
console.count("User");
console.count("Hi");
console.count("User");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd("fetching data");
    });

// clearing
// console.clear();
