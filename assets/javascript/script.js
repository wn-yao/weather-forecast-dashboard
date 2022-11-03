//set DOM element HOOK

var citySearchEl = document.querySelector("#city");
var weatherResultsEl = document.querySelector(".container-result");
var searchHistoryEl = document.querySelector(".search-history");
var currentWeatherEl = document.querySelector("#current-weather");
var fiveDayEl = document.querySelector("#five-day-weather");

var APIkey = "abbf600e22d96772d150b6ff095a932f"
var baseURL ="https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=abbf600e22d96772d150b6ff095a932f"
//function to make API calls

fetch(baseURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
  });
