let imgs = document.querySelectorAll("img");
function slideInOut() {
    imgs.forEach((img) => {
        if (
            window.scrollY >= img.offsetTop - img.offsetHeight &&
            window.scrollY <= img.offsetTop + img.offsetHeight
        ) {
            img.classList.add("active");
        } else if (
            window.scrollY > img.offsetTop + img.offsetHeight ||
            window.scrollY < img.offsetTop - window.scrollY - img.offsetHeight
        ) {
            img.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", slideInOut);
