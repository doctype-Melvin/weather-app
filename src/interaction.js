import { getWeather } from "./api";

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const search = document.getElementById('search')
    console.log(search.value);
    getWeather(search.value)
    e.preventDefault()
})