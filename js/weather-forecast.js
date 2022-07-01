(function () {
  document.addEventListener('DOMContentLoaded', function () {

      const weatherResult = document.querySelector('#weatherResult');
      async function getWeather() {
          const response = await fetch('forecast.json');
          const forecast = await response.json;
      }

      document.querySelector('.check-weather').addEventListener('click', weatherForecast);

      async function weatherForecast() {
          const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=9049f90db361271300a108febe8ed053');
          const forecastNorway = await response.json();


          const weatherResultText = `
          Wind speed: ${forecastNorway.wind.speed} <br>
          Main weather: ${forecastNorway.weather[0].description}
      `;

          weatherResult.innerHTML = weatherResultText;
      }

  });
})();

/*
async function weatherForecast(name) 
{
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={name}&appid=9049f90db361271300a108febe8ed053
  `);
  let data = await response.json()
  return data;
}  

weatherForecast('yourCitynameHere')
  .then(data => console.log(data)); 
document.querySelector('.check-weather').addEventListener('click', weatherForecast);

/*
function weatherForecast() {
    fetch("forecast.json")
    .then(response => response.json())
    .then((data) => {
        window.open('https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=9049f90db361271300a108febe8ed053');
    })
    .catch((error) => console.error("oops:",error));
}
*/

/*
async function weatherForecast () {
    const response = await fetch('forecast.json');
    const forecast = await response.json;
    } 
    document.querySelector('.check-weather').addEventListener('click', weatherForecast);
    
    (async function weatherForecast () {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=9049f90db361271300a108febe8ed053');
        const forecastNorway = await response.json();
        const cityName = document.querySelector('.weather-input-value').value;
      })();
    */
    
    /*
      async function getWeather(){
        const dataObj;
        const response = await fetch('forecast.json');
        const data = await response.json();
        dataObj = data;
        console.log(dataObj);
        document.querySelector('.check-weather').addEventListener('click', weatherForecast);
    
    }
    document.querySelector('.check-weather').addEventListener('click', getWeather); */