//Element-Right

const iconElementRight = document.querySelector(".weather-icon-right");
const tempElementRight = document.querySelector(".temperature-value-right p");
const descElementRight = document.querySelector(".temperature-description-right p");
const locationElementRight = document.querySelector(".location-right p");
const notifactionElementRight = document.querySelector(".notification-right p");

const weatherLondon = {};

weatherLondon.temperature = {
    unit: "celsius"
}

// SHOW ERROR

function showErrorRight(error){
    notifactionElement.style.display = "block";
    notifactionElement.innerhtml = "<p> ${error.message} </p>";
}

//setPosition
    let lonLondon = -0.1257;
    let latLondon = 51.5085;
    getWeatherRight(latLondon ,lonLondon);

//GET API
 function getWeatherRight(){
    let api = `https://api.openweathermap.org/data/2.5/weather?&appid=${key}&lon=${lonLondon}&lat=${latLondon}`;
    

    fetch(api)
        .then(function(response){
            let data = response.json();
            
            return data;
        })
        .then(function(data){
            weatherLondon.temperature.value = Math.floor(data.main.temp - KELVIN);
            weatherLondon.description = data.weather[0].description;
            weatherLondon.iconId = data.weather[0].icon;
            weatherLondon.city = data.name;
            weatherLondon.country = data.sys.country;
            
        })
        .then(function(){
            displayWeatherRight();
        });
 
        
    } 
//DISPLAY WEATHER
function displayWeatherRight(){
    iconElementRight.innerHTML = `<img src="icons/${weatherLondon.iconId}.png"/>`;
    tempElementRight.innerHTML = `${weatherLondon.temperature.value}°<span>C</span>`;
    descElementRight.innerHTML = weatherLondon.description;
    locationElementRight.innerHTML = `${weatherLondon.city} ${weatherLondon.country}`;
}

//CELSIUS TO FAHRENHEIT CONVERT

function celsiusToFahrenheitRight(temperature){
    return (temperature * 9/5) + 32;
}
tempElementRight.addEventListener("click", function(){
    if(weatherLondon.temperature.value === undefined) return;

    if(weatherLondon.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheitRight(weatherLondon.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        tempElementRight.innerHTML = `${fahrenheit}°<span>F</span>`;
        weatherLondon.temperature.unit = "fahrenheit";

    }else{
        tempElementRight.innerHTML = `${weatherLondon.temperature.value}°<span>C</span>`;
        weatherLondon.temperature.unit = "celsius";
    }
});