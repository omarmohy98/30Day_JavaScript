const arr = [];
const code = "deep";

window.addEventListener("keyup", (e) => {
    arr.push(e.key);
    arr.splice(-code.length - 1, arr.length - code.length);
    if (arr.join("").includes(code)) {
        cornify_add();
    }
});
