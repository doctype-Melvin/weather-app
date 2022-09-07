import { getGif } from "./interaction";

//Weather API
//Sets text contents to weather data
//Calls GIF API function
export function getWeather(value){
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const wind = document.getElementById('wind');
    const perc = document.getElementById('perc');

    function clearResults(){
        temp.textContent = '';
        wind.textContent = '';
        perc.textContent = '';
    }

    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=11558c3112856939631bac223b8cddb5&units=metric`, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        console.log(response)
        city.textContent = response.name || response.message;
        temp.textContent = `Temperature: ${response.main.temp} Celcius`;
        wind.textContent = `Wind speed: ${response.wind.speed} kmh`;
        perc.textContent = `Percipitation: ${response.weather[0].description}`;
        getGif(response.weather[0].description + ' anime') //Calls GIF function
        document.querySelector('.forecast').reset()
    })
    .catch(function(){
        clearResults();
    });
}
