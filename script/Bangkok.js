//Element-Left

const iconElementLeft = document.querySelector(".weather-icon-left");
const tempElementLeft = document.querySelector(".temperature-value-left p");
const descElementLeft = document.querySelector(".temperature-description-left p");
const locationElementLeft = document.querySelector(".location-left p");
const notifactionElementLeft = document.querySelector(".notification-left p");

const weatherBangkok = {};

weatherBangkok.temperature = {
    unit: "celsius"
}

// SHOW ERROR

function showErrorRight(error){
    notifactionElement.style.display = "block";
    notifactionElement.innerhtml = "<p> ${error.message} </p>";
}

//setPosition
    let lonBangkok = 100.5167;
    let latBangkok = 13.75;
    getWeatherLeft(latBangkok,lonBangkok);

//GET API
 function getWeatherLeft(){
    let api = `http://api.openweathermap.org/data/2.5/weather?&appid=${key}&lon=${lonBangkok}&lat=${latBangkok}`;
    

    fetch(api)
        .then(function(response){
            let data = response.json();
            
            return data;
        })
        .then(function(data){
            weatherBangkok.temperature.value = Math.floor(data.main.temp - KELVIN);
            weatherBangkok.description = data.weather[0].description;
            weatherBangkok.iconId = data.weather[0].icon;
            weatherBangkok.city = data.name;
            weatherBangkok.country = data.sys.country;
            
        })
        .then(function(){
            displayWeatherLeft();
        });
 
        
    } 
//DISPLAY WEATHER
function displayWeatherLeft(){
    iconElementLeft.innerHTML = `<img src="icons/${weatherBangkok.iconId}.png"/>`;
    tempElementLeft.innerHTML = `${weatherBangkok.temperature.value}°<span>C</span>`;
    descElementLeft.innerHTML = weatherBangkok.description;
    locationElementLeft.innerHTML = `${weatherBangkok.city} ${weatherBangkok.country}`;
}

//CELSIUS TO FAHRENHEIT CONVERT

function celsiusToFahrenheitRight(temperature){
    return (temperature * 9/5) + 32;
}
tempElementLeft.addEventListener("click", function(){
    if(weatherBangkok.temperature.value === undefined) return;

    if(weatherBangkok.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheitRight(weatherBangkok.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElementLeft.innerHTML = `${fahrenheit}°<span>F</span>`;
        weatherBangkok.temperature.unit = "fahrenheit";

    }else{
        tempElementLeft.innerHTML = `${weatherBangkok.temperature.value}°<span>C</span>`;
        weatherBangkok.temperature.unit = "celsius";
    }
});