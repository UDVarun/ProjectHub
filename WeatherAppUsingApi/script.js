document.addEventListener('DOMContentLoaded',() =>{
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('get-weather-btn')
    const weatherinfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weather = document.getElementById('weather');
    const humidity = document.getElementById('humidity');
    const errorMessage = document.getElementById('error-message');
    const API_KEY = `ef0177864feaffb5043562eb99b80d2d`;

    searchBtn.addEventListener('click', async ()=>{
        const city = cityInput.value.trim()
        
        if (!city) return;
        try {
           const weatherData = await fetchWeatherData(city);
           displayWeatherdata(weatherData)
        } catch (error) {
            displayError()
        }
    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error("City Not Found");
    }
        const data = await response.json();
        return data;
    }

    function displayWeatherdata(weatherData){
        console.log(weatherData);
        
        const {name,main }=weatherData;
        cityName.textContent=name;
        temperature.textContent=`Temprature: ${weatherData.main.temp}°C`;
        humidity.textContent=`Humidity: ${main.humidity}%`;
        weather.textContent=`Weather: ${weatherData.weather[0].description}`;


        weatherinfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
    }
    
    function displayError(){
        weatherinfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
    }
})