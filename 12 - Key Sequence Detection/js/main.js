const arr = [];
const code = "deep";

window.addEventListener("keyup", (event) => {
    arr.push(event.key);
    arr.splice(-code.length - 1, arr.length - code.length);
    if (arr.join("").includes(code)) {
        document.body.innerHTML = `<h1>You Guess the Code</h1>`;
    }
});
