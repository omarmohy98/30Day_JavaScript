const shadowEle = document.querySelector(".shadow-P");
const containerEle = document.querySelector(".container");
const walk = 200;

function shadow(event) {
    const width = containerEle.offsetWidth;
    const height = containerEle.offsetHeight;
    let x = event.offsetX;
    let y = event.offsetY;
    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);
    shadowEle.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}

containerEle.addEventListener("mousemove", shadow);
