const checkBoxes = document.querySelectorAll(".checkbox-container input");
let lastItem = 0;

// Change Background when checked
setInterval(() => {
    checkBoxes.forEach((ele) => {
        if (ele.checked) {
            ele.parentElement.classList.add("bg");
        }
    });
}, 1);

// Check item between when shiftKey is pressed
function checkItemBetween(event) {
    let flag = false;
    if (event.shiftKey && this.checked) {
        checkBoxes.forEach((ele) => {
            if (ele === lastItem || ele === this) {
                flag = !flag;
            }
            if (flag) {
                ele.checked = true;
            }
        });
    }
    lastItem = this;
}
checkBoxes.forEach((ele) => {
    ele.addEventListener("click", checkItemBetween);
});
