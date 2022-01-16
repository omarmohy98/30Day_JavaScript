function getTime() {
    const time = new Date();
    // Get Seconds and upgrade its hand degree
    let secondHand = document.querySelector(".second");
    let second = time.getSeconds();
    let secondDegree = second * 6;
    secondHand.style.cssText = `transform: rotate(${90 + secondDegree}deg)`;
    // Get Minutes and upgrade its hand degree
    let minuteHand = document.querySelector(".minute");
    let minute = time.getMinutes();
    let minuteDegree = minute * 6;
    minuteHand.style.cssText = `transform: rotate(${90 + minuteDegree}deg)`;
    // Get Hour and upgrade its hand degree
    let hourHand = document.querySelector(".hour");
    let hour = time.getHours();
    if (hour == 0) {
        hour += 12;
    } else if (hour > 12) {
        hour -= 12;
    }
    let hourDegree = hour * 30;
    hourHand.style.cssText = `transform: rotate(${90 + hourDegree}deg)`;
}
setInterval(getTime, 1000);
