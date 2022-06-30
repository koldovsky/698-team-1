(function() { const clockContainer = document.querySelector('.clock');
function updateClock () {
clockContainer.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
})();

async function weatherForecast() {
const response = await fetch('forecast.json');
console.log(response);
}
renderForecast(forecast);


