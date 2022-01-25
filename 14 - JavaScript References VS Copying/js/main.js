// start with strings, numbers and booleans
let age = 20;
let age2 = age;
console.log(age, age2); // 20 20
age = 30;
console.log(age, age2); // 30 20
let name = "Omar";
let name2 = name;
console.log(name, name2); // Omar Omar
name = "Mohy";
console.log(name, name2); //Mohy Omar

/* */
// Let's say we have an array
const players = ["Ali", "Mohamed", "Mahmoud", "Ahmed"];
// and we want to make a copy of it.
const team = players;
console.log(players, team); // ["Ali", "Mohamed", "Mahmoud", "Ahmed"] ["Ali", "Mohamed", "Mahmoud", "Ahmed"]
// You might think we can just do something like this:
team[3] = "Amr";
console.log(players, team); // ["Ali", "Mohamed", "Mahmoud", "Amr"] ["Ali", "Mohamed", "Mahmoud", "Amr"]
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[3] = "Ali";
console.log(players, team2); // ["Ali", "Mohamed", "Mahmoud", "Amr"] ["Ali", "Mohamed", "Mahmoud", "Ali"]
// one way
// or create a new array and concat the old one in
// const team2 = [].concat(players);
// or use the new ES6 Spread
// const team2 = [...players];
// const team2 = Array.from(players);
// now when we update it, the original one isn't changed

/* */
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
    name: "Omar Mohy",
    age: 23,
};
// and think we make a copy:
// const captain = person;
// captain.number = 99;
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
// We will hopefully soon see the object ...spread
// const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@wesbos",
        facebook: "wesbos.developer",
    },
};
console.log(wes);
const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));
