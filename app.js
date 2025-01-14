//Element
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notifactionElement = document.querySelector(".notification p");



const weather = {};

weather.temperature = {
    unit: "celsius"
}

const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

//SUPPORTS GEOLOCATION
if("geolocation" in navigator){
navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notifactionElement.style.display = "block";
    notifactionElement.innerhtml = "<p>Browser dosen't Support Geolocation</p>";
}

//SET USERS POSITION

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude,longitude);
}
// SHOW ERROR

function showError(error){
    notifactionElement.style.display = "block";
    notifactionElement.innerhtml = "<p> ${error.message} </p>";
}

//GET API
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    /* console.log(api); */

    fetch(api)
        .then(function(response){
            let data = response.json();
            /* console.log(data); */
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            /* console.log(weather); */
        })
        .then(function(){
            displayWeather();
        });
 
}

//DISPLAY WEATHER
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city} ${weather.country}`;
}

//CELSIUS TO FAHRENHEIT CONVERT

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";

    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});

