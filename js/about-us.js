(function() { const clockContainer = document.querySelector('.clock');
function updateClock () {
clockContainer.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
})();


async function weatherForecast () {
const response = await fetch('forecast.json');
const forecast = await response.json;
} 
document.querySelector('.check-weather').addEventListener('click', weatherForecast);

async function weatherForecast () {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=9049f90db361271300a108febe8ed053');
    const forecastNorway = await response.json();
    const cityName = document.querySelector('.weather-input-value').value;
  }