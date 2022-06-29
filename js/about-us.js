const clockContainer = document.querySelector('.clock');
function updateClock () {
clockContainer.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

const frameHeight = 102;
const frames = 15;
const div = document.getElementsByClassName('.about__image');
let frame = 0;
setInterval(function () {
    const frameOffset = (++frame % frames) * -frameHeight;
    div.style.backgroundPosition = "0px " + frameOffset + "px";
}, 100);