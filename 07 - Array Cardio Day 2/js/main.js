const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];

// is at least one person 19 or older?
let currentYear = new Date().getFullYear();
let someArray = people.some((ele) => {
    let age = currentYear - ele.year;
    return age >= 19;
});
console.log(`some Method Test is ${someArray}`);

// is everyone 19 or older?
let everyArray = people.every((ele) => {
    let age = currentYear - ele.year;
    return age >= 19;
});
console.log(`every Method Test is ${everyArray}`);

// find the comment with the ID of 823423
let neededComment = comments.find((ele) => {
    return ele.id === 823423;
});
console.log(`Needed Comment is ${neededComment.text}`);

// Find the Index of comment with this ID 823423
let index = comments.findIndex((ele) => {
    return ele.id === 823423;
});
console.log(`The comment Index is ${index}`);

// delete the comment with the ID of 823423
comments.splice(index, 1);
console.log(comments);
