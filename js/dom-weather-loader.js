const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function celsiusConversion(fahrTemp) {
    return Math.round((fahrTemp - 32) * (5 / 9));
}

function domBuilder(arr) {
    let cardContainer = $(".forecast-cards");
    cardContainer.empty();
    cardContainer.removeClass("justify-content-center").addClass("justify-content-between");
    arr.forEach(function (day, index) {
        let removeTime = day.date.replace(" 00:00:00", "");
        let newDate = Date.parse(removeTime);
        let dateRemade = new Date(newDate);
        let date = days[dateRemade.getDay()]
        cardContainer.append(`
            <div class="card d-flex justify-content-between" style="width: 17rem;">
              <div class="card-header d-flex justify-content-center">
                ${date}
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-center"><img  src="http://openweathermap.org/img/w/${day.icon}.png" alt="Weather icon"></div>
                <div class="d-flex justify-content-center"><p>${day.temp}°F / ${celsiusConversion(day.temp)}°C</p></div>
                <div class="d-flex justify-content-center"><p>Will feel like: ${day.feelsLikeTemp}°F / ${day.feelsLikeTemp}°C</p></div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><span>${day.description.toUpperCase()}</span></li>
                <li class="list-group-item">Humidity: <span>${day.humidity}</span></li>
                <li class="list-group-item">Pressure: <span>${day.pressure}</span></li>
                <li class="list-group-item">Wind(Mph): <span>${day.wind}</span></li>
              </ul>
            </div>
        `)
    })
}



