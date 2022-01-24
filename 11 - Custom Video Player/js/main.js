const video = document.querySelector(".video");
const playIcon = document.querySelectorAll(".left-controls i");
const volumeInput = document.querySelector(".volume-control");
const speedInput = document.querySelector(".speed");
const btn = document.querySelectorAll(".btn");
const controlsContainer = document.querySelector(".controls");
const progressBar = document.querySelector(".progress");
const progressFilledBar = document.querySelector(".progress-filled");
let change = false;

// Play video
function play() {
    if (video.paused) {
        playIcon[0].classList.remove("fa-play");
        playIcon[0].classList.add("fa-pause");
        video.play();
    } else {
        playIcon[0].classList.remove("fa-pause");
        playIcon[0].classList.add("fa-play");
        video.pause();
    }
}
// Play video when it Clicked
video.addEventListener("click", play);
// Play Video using PlayIcon
playIcon[0].addEventListener("click", play);

function controlSound() {
    volumeInput.classList.add("input-color");
    if (this === playIcon[1]) {
        video.muted = !video.muted;
    } else if (this === volumeInput) {
        video.volume = this.value;
        video.volume === 0 ? (video.muted = true) : (video.muted = false);
    }
    if (!video.muted) {
        playIcon[1].classList.remove("fa-volume-mute");
        playIcon[1].classList.add("fa-volume-up");
    } else {
        video.volume = 0.1;
        playIcon[1].classList.remove("fa-volume-up");
        playIcon[1].classList.add("fa-volume-mute");
    }
}
playIcon[1].addEventListener("click", controlSound);
volumeInput.addEventListener("change", controlSound);

// Control Speed
function speedControl() {
    speedInput.classList.add("input-color");
    video.playbackRate = this.value;
}
speedInput.addEventListener("change", speedControl);

// Move Forward or Backword
function moveTimmingOfVideo() {
    if (this.getAttribute("data-type") === "decrease") {
        video.currentTime -= +this.getAttribute("data-seconds");
    } else if (this.getAttribute("data-type") === "increase") {
        video.currentTime += +this.getAttribute("data-seconds");
    }
}
btn.forEach((ele) => {
    ele.addEventListener("click", moveTimmingOfVideo);
});

// Update Prograss bar
setInterval(() => {
    const prograssWidth = (video.currentTime / video.duration) * 100;
    document.styleSheets[1].rules[1].style.setProperty(
        "--play-width",
        `${Math.floor(prograssWidth)}%`
    );
}, 1);
function changeBar(event) {
    if (event.type === "mousemove") {
        if (change) {
            video.currentTime =
                (event.offsetX * video.duration) / progressBar.offsetWidth;
        }
    } else {
        video.currentTime =
            (event.offsetX * video.duration) / progressBar.offsetWidth;
    }
}
progressBar.addEventListener("click", changeBar);
progressBar.addEventListener("mousemove", changeBar);
progressBar.addEventListener("mouseup", () => (change = false));
progressFilledBar.addEventListener("mousedown", () => (change = true));
progressFilledBar.addEventListener("mouseup", () => (change = false));

// Change play&Pause Icon when Video End
video.addEventListener("ended", () => {
    playIcon[0].classList.remove("fa-pause");
    playIcon[0].classList.add("fa-play");
});
