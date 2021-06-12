// function getForecast() {
//     $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/weather",
//         type: "GET",
//         data: {
//             APPID: OPEN_WEATHER_TOKEN,
//             lat: currentCoordinates[1],
//             lon: currentCoordinates[0],
//             units: "imperial"
//         },
//         success: function (data) {
//             console.log(data);
//         }
//     })
// }

function getForecast() {
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?lat=${currentCoordinates[1]}&lon=${currentCoordinates[0]}&appid=${OPEN_WEATHER_TOKEN}`,
        type: "GET",
        data: {
            units: "imperial"
        },
        success: function (data) {
            console.log(data);
            forecastData = [];
            data.list.forEach(function (forecastItem, index, arr) {
                 if (forecastItem.dt_txt.includes("12:00:00")) {
                    forecastData.push({
                        date: forecastItem.dt_txt,
                        feelsLikeTemp: Math.round(forecastItem.main.feels_like),
                        humidity: forecastItem.main.humidity,
                        pressure: forecastItem.main.pressure,
                        temp: Math.round(forecastItem.main.temp),
                        description: forecastItem.weather[0].description,
                        icon: forecastItem.weather[0].icon,
                        wind: Math.round(forecastItem.wind.speed)
                    });
                 }
            })
            console.log(forecastData);
            domBuilder(forecastData);
        },
        error: function (data) {
            alert("Sorry, there was an issue retrieving weather data for this location.  Please try again later.")
        }
    })
}








/*
* Things I need:
*
* data.city.name
* data.list.forEach(forecastItem, index, arr)   look for 12:00:00 in each item
*   dt_txt (may want epoch time with 'dt')
*   .main -- feels like
*   .main -- humidity
*   .main -- pressure
*   .main -- temp
*   .weather[0].description
*   .weather[0].icon
*   .wind -- speed
*
*
*
* */
