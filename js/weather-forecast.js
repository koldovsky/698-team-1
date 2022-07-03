(function () {
  document.addEventListener('DOMContentLoaded', function () {

      const weatherInput = document.querySelector('.weather-input-value');

      async function getWeather() {
          const response = await fetch('forecast.json');
          const forecast = await response.json;
      }

      document.querySelector('.check-weather').addEventListener('click', weatherForecast);

      async function weatherForecast() {
      
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherInput.value}&appid=9049f90db361271300a108febe8ed053`);

          const forecastNorway = await response.json();

          let skyIcon = '';

          if (forecastNorway.weather[0].description == 'clear sky') {
            skyIcon = '<svg style="color: #f3da35" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16"> <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" fill="#f3da35"></path> </svg>';
          }

          if (forecastNorway.weather[0].description == 'cloudy') {
            skyIcon = '<svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloudy" viewBox="0 0 16 16"> <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973zM8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 5.5z" fill="blue"></path> </svg>';
          }

          if (forecastNorway.weather[0].description == 'overcast clouds') {
            skyIcon = '<svg style="color: blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="blue" d="M399.667,264.875v-3.813c0-79.4-64.6-144-144-144-2.2,0-4.391.057-6.569.156A116.689,116.689,0,1,0,112.315,247.444c-.422,4.484-.648,9.025-.648,13.618v3.813A116.633,116.633,0,0,0,132.287,496.3H379.046a116.633,116.633,0,0,0,20.621-231.427ZM48.75,132.688a84.677,84.677,0,0,1,168.705-10.47,144.606,144.606,0,0,0-98.59,93.876A84.807,84.807,0,0,1,48.75,132.688ZM379.046,464.3H132.287a84.619,84.619,0,0,1-3.9-169.148l15.277-.69v-33.4a112,112,0,1,1,224,0v33.4l15.277.69a84.619,84.619,0,0,1-3.9,169.148Z" class="ci-primary"></path> </svg>';
          }

          if (forecastNorway.weather[0].description == 'scattered clouds') {
            skyIcon = '<svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" fill="blue"></path> </svg>';
          }
          if (forecastNorway.weather[0].description == 'broken clouds') {
            skyIcon = '<svg style="color: blue" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" fill="blue"></path> </svg>';
          }

          const weatherResultText = `
              Wind speed: ${forecastNorway.wind.speed} <br>
              Main weather: ${forecastNorway.weather[0].description} ${skyIcon}
          `;
          document.querySelector('#weatherResult').innerHTML = weatherResultText;
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