let inputs = document.querySelectorAll("input");
let img = document.querySelector("img");
let markedEle = document.querySelector(".mark");
inputs.forEach((ele) => {
    ele.addEventListener("change", updateValue);
});
function updateValue() {
    if (this.name === "space-input") {
        img.style.cssText = `padding: ${this.value}px`;
    } else if (this.name === "blur-input") {
        img.style.cssText = `filter: blur(${this.value}px)`;
    } else if (this.name === "base-color") {
        img.style.cssText = `background-color: ${this.value}`;
        markedEle.style.cssText = `color: ${ele.value}`;
    }
}
