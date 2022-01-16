let keyElements = document.querySelectorAll(".container .click");
let keyCode = 0;
function playSound(event) {
    // Get Code of prased Key
    keyCode = event.keyCode;
    // Get equvalent element to prased Key
    let prasedKeyElement = document.querySelector(`div[data-key = "${keyCode}"]`);
    if (!prasedKeyElement) return;
    // add animation on key element
    prasedKeyElement.classList.add("play");
    // Get equvalent sound need to play
    let prasedKeySoundElement = document.querySelector(`audio[data-key = "${keyCode}"]`);
    if (!prasedKeySoundElement) return;
    // Play sound
    prasedKeySoundElement.currentTime = 0;
    prasedKeySoundElement.play();
}
function removePlayClass(ele) {
    ele.addEventListener("animationend", () => {
        ele.classList.remove("play");
    });
}
keyElements.forEach(removePlayClass);
window.addEventListener("keydown", playSound);