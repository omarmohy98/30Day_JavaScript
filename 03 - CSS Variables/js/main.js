let inputs = document.querySelectorAll("input");
inputs.forEach((ele) => {
    ele.addEventListener("change", updateValue);
});
inputs.forEach((ele) => {
    ele.addEventListener("mousemove", updateValue);
});
function updateValue() {
    document.styleSheets[0].rules[1].style.setProperty(
        `--${this.name}`,
        `${this.value + this.getAttribute("data-unit")}`
    );
}
