const clockContainer = document.querySelector('.clock');
function updateClock () {
clockContainer.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

const container = document.getElementById('.clock');
const text = document.getElementById('.clock');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  clock.className = '.clock grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      clock.className = '.clock shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);