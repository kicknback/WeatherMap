const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function celsiusConversion(fahrTemp) {
    return Math.round((fahrTemp - 32) * (5 / 9));
}

function domBuilder(arr) {
    let cardContainer = $(".forecast-cards");
    cardContainer.empty();
    cardContainer.removeClass("justify-content-center").addClass("justify-content-between");
    arr.forEach(function (day) {
        let newDate = new Date((day.date * 1000) + 18000000);
        let date = days[newDate.getDay()];
        cardContainer.append(`
            <div class="card d-flex justify-content-between w3-animate-top" style="width: 18rem;">
              <div class="card-header d-flex justify-content-center">
                ${date}
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-center"><img  src="http://openweathermap.org/img/w/${day.icon}.png" alt="Weather icon"></div>
                <div class="d-flex justify-content-center"><p>${day.temp}°F -- ${celsiusConversion(day.temp)}°C</p></div>
             <!--   <div class="d-flex justify-content-center"><p class="feel-like">Will feel like: ${day.feelsLikeTemp}°F / ${day.feelsLikeTemp}°C</p></div> -->
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item description"><span>${day.description.toUpperCase()}</span></li>
                <li class="list-group-item">Humidity: <span>${day.humidity}</span></li>
                <li class="list-group-item">Pressure: <span>${day.pressure}</span></li>
                <li class="list-group-item">Wind(Mph): <span>${day.wind}</span></li>
                <li class="list-group-item">Feels like: <span>${day.feelsLikeTemp}°F -- ${celsiusConversion(day.feelsLikeTemp)}°C</span></li>
              </ul>
            </div>
        `)
    })
}



