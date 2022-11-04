//set DOM element HOOK

var citySearchEl = document.querySelector("#input-city");
var weatherResultsEl = document.querySelector(".container-result");
var searchHistoryEl = document.querySelector(".search-history");
var currentWeatherEl = document.querySelector("#current-weather");
var fiveDayEl = document.querySelector("#five-day-weather");
var searchBtnEl = document.querySelector(".search-btn");
var inputCityEl = document.querySelector("#input-city");
var searchResultEl = document.querySelector("#search-result");
var currentCityEl = document.querySelector("#current-city");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind-speed");
var humidityEl = document.querySelector("#humidity");




//function to make API calls
var getCityWeather = function (city){
    //var apiKey = "abbf600e22d96772d150b6ff095a932f";
    var baseURL ='https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=abbf600e22d96772d150b6ff095a932f';
fetch(baseURL)
.then(function (response) {
    console.log(response);
})
.then(function (data) {
   displayWeather(data,city);
   console.log(data);
  });
};

