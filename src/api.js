const display = document.querySelector('.display');

fetch('http://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=11558c3112856939631bac223b8cddb5&units=metric', {mode: 'cors'})
.then(function(response) {
    return response.json()
})
.then(function(response){
    console.log(response)
    display.textContent = response.main.temp
});