let panel = document.querySelectorAll(".panel");
function show() {
    this.classList.toggle("stratch-panel");
    document
        .querySelector(`.${this.classList.item(1)} p:first-child`)
        .classList.toggle("p-show");
    document
        .querySelector(`.${this.classList.item(1)} p:last-child`)
        .classList.toggle("p-show");
}
panel.forEach((ele) => {
    ele.addEventListener("click", show);
});
