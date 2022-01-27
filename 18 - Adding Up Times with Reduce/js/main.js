/* 
    The Main Idea of this Challenge to get all videos duration
    into hour & minute & seconds and display them into DOM
*/
const videos = [...document.querySelectorAll("[data-time]")];

//
// Display each video time on it
videos.forEach((video) => {
    const span = document.createElement("span");
    span.innerHTML = video.getAttribute("data-time");
    video.appendChild(span);
});

//
// Get All videos duration into Seconds
let allSeconds = videos.reduce((acc, video) => {
    let [mins, secs] = video
        .getAttribute("data-time")
        .split(":")
        .map((ele) => +ele);
    return acc + mins * 60 + secs;
}, 0);

//
// Convert these Seconds into hours & minutes & Seconds Format
let remainSecs = allSeconds;
let hours = Math.floor(remainSecs / 3600);
remainSecs = remainSecs % 3600;
let minutes = Math.floor(remainSecs / 60);
remainSecs = remainSecs % 60;

//
// Display All Videos duration into DOM
function display(h, m, s) {
    const diplayContainer = document.querySelector(".display");
    diplayContainer.innerHTML = `Videos Duration is <span class="mark">${h}:${m}:${s}</span>`;
}
display(hours, minutes, remainSecs);
