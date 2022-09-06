const search = document.getElementById('search')
const display = document.querySelector('.display');
const btn = document.getElementById('btn')

function getWeather(value){
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=11558c3112856939631bac223b8cddb5&units=metric`, {mode: 'cors'})
.then(function(response) {
    return response.json()
})
.then(function(response){
    console.log(response)
    display.textContent = response.main.temp
});
}
btn.addEventListener('click', (e) => {
    console.log(search.value);
    getWeather(search.value)
    e.preventDefault()
})