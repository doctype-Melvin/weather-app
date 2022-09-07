import { getWeather } from "./api";

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    const search = document.getElementById('search')
    getWeather(search.value)
    e.preventDefault()
})

export async function getGif(value){
    let img = document.getElementById('gif')
    const key = '8c84sZD4EO32boZOg8d3eq1KqvuZdvHs'
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${value}`, {mode: 'cors'})
    const gifData = await response.json()
      img.src = gifData.data.images.original.url
}