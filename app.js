const searchBtn = document.getElementById('searchBtn');
const inputBox = document.querySelector('.input-box');
const weatherImg = document.querySelector('.weather-img');
const tempture = document.querySelector('.temputure');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');




//* generate weather functionh

async function checkWeather(city) {
    const apiKey = "b14044498739039d823f330d5aff07b9";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(URL).then(response=>response.json())

    if (weatherData.cod === '404') {
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        return
    }
    
    weatherBody.style.display = "flex";
    locationNotFound.style.display = "none";
    tempture.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    windSpeed.innerHTML = `${weatherData.wind.speed}km/H`;

    switch (weatherData.weather[0].main) {
        case "Clear":
            weatherImg.src = "././img/sun.png"
            break;
        case "Clouds":
            weatherImg.src = "./img/cloudy.png"
            break;
        case "Rain":
            weatherImg.src = "././img/storm.png"
            break;
        case "Mist":
            weatherImg.src = "././img/mist.png"
            break;
        case "Snow":
            weatherImg.src = "./img/cloudy (1).png"
            break;
    
        default:
            break;
    }
}

//* add event listener for search weather

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value)
});