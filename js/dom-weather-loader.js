function celsiusConversion(fahrTemp) {
    return Math.round((fahrTemp - 32) * (5 / 9));
}

function domBuilder(arr) {
    let cardContainer = $(".forecast-cards");
    cardContainer.empty();
    arr.forEach(function (day, index) {
        cardContainer.append(`
            <div class="card">
<!--              <img class="card-img-top" src="..." alt="Card image cap">-->
              <div class="card-header">
                ${day.date}
              </div>
              <div class="card-body">
                <div>${day.icon}</div>
                <div>${day.temp}°F / ${celsiusConversion(day.temp)}°C</div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Description: <span>${day.description}</span></li>
                <li class="list-group-item">Humidity: <span>${day.humidity}</span></li>
                <li class="list-group-item">Pressure: <span>${day.pressure}</span></li>
                <li class="list-group-item">Wind(Mph): <span>${day.wind}</span></li>
              </ul>
            </div>
        `)
    })
}

// style="width: 18rem;"

    // date: forecastItem.dt_txt,
    // feelsLikeTemp: Math.round(forecastItem.main.feels_like),
    // humidity: forecastItem.main.humidity,
    // pressure: forecastItem.main.pressure,
    // temp: Math.round(forecastItem.main.temp),
    // description: forecastItem.weather[0].description,
    // icon: forecastItem.weather[0].icon,
    // wind: Math.round(forecastItem.wind.speed)




