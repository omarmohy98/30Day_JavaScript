/* 
    The main idea of this challenge to sort an array elements alphabetically
    ignoring the & a & an if the element start with any of them
*/

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog",
];

//
// Sort Bands
function cutArticles(band) {
    const regex = /^the |^a |^an /i;
    return band.replace(regex, "");
}
const sortedBands = bands.sort((a, b) =>
    cutArticles(a) > cutArticles(b) ? 1 : -1
);

//
// Display sortedBands
function display(sortedBands) {
    const containerElement = document.querySelector(".container");
    sortedBands.forEach((band) => {
        const pEle = document.createElement("p");
        const pText = document.createTextNode(band);
        pEle.className = "item";
        pEle.appendChild(pText);
        containerElement.appendChild(pEle);
    });
}
display(sortedBands);
