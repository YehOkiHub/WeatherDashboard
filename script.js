var userInput = document.getElementById("search");
var searchBtn = document.getElementById("button-submit");
var apiKey = "6a85240e0721490a7cbc7f502516be62";


searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let city = userInput.value;

  setHistory(city)
  fetchWeatherData(city)

  });

var inputHistory = (localStorage.inputHistory) ? JSON.parse(localStorage.inputHistory) : [];

searchBtn.addEventListener("click", ()=>{
    inputHistory.push(userInput.value)
    localStorage.inputHistory = JSON.stringify(inputHistory)


    
})


function fetchWeatherData(city){

  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,

    { method: "GET" }
  )
    .then((response) => response.json())
    .then((result) => {
      const lat = result[0].lat;
      const lon = result[0].lon;

      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      fetch(url, { method: "GET" })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          let fahrentemp =
            result.list[0].dt_txt +
            ((Math.round(result.list[0].main.temp - 273.15) * 9) / 5 + 32);
          $("#current-temp").text(fahrentemp);
          $("#current-wind").text(result.list[0].wind.gust + " MPH");
          $("#current-humidity").text(result.list[0].main.humidity + "%");
          $("#citymain").text(result.city.name);
          $(".hide").css("display", "block");

          // 5day forecast

          let day1 =
            result.list[6].dt_txt +
            " " +
            ((Math.round(result.list[6].main.temp - 273) * 9) / 5 + 32) +
            "°F " +
            " " +
            result.list[6].wind.gust +
            " MPH " +
            "Humidity " +
            result.list[6].main.humidity +
            "%";
          let day2 =
            result.list[14].dt_txt +
            " " +
            ((Math.round(result.list[14].main.temp - 273) * 9) / 5 + 32) +
            "°F " +
            " " +
            result.list[14].wind.gust +
            " MPH " +
            "Humidity " +
            result.list[14].main.humidity +
            "%";
          let day3 =
            result.list[22].dt_txt +
            " " +
            ((Math.round(result.list[22].main.temp - 273) * 9) / 5 + 32) +
            "°F " +
            " " +
            result.list[22].wind.gust +
            " MPH " +
            "Humidity " +
            result.list[22].main.humidity +
            "%";
          let day4 =
            result.list[30].dt_txt +
            " " +
            ((Math.round(result.list[30].main.temp - 273) * 9) / 5 + 32) +
            "°F " +
            " " +
            result.list[30].wind.gust +
            " MPH " +
            "Humidity " +
            result.list[30].main.humidity +
            "%";
          let day5 =
            result.list[38].dt_txt +
            " " +
            ((Math.round(result.list[38].main.temp - 273) * 9) / 5 + 32) +
            "°F " +
            " " +
            result.list[38].wind.gust +
            " MPH " +
            "Humidity " +
            result.list[38].main.humidity +
            "%";
          $("#1fore").text(day1);
          $("#2fore").text(day2);
          $("#3fore").text(day3);
          $("#4fore").text(day4);
          $("#5fore").text(day5);
          $("#5daycity").text(result.city.name + "'s 5 day Forecast");

          showHistory()
        });
    });



}
// to be changed with for loop

// history1.textContent = inputHistory[0]
// history2.textContent = inputHistory[1]
// history3.textContent = inputHistory[2]
// history4.textContent = inputHistory[3]
// history5.textContent = inputHistory[4]


function setHistory(cityname){

  var cities = getHistory()
  console.log(cities)
  if (cities == null){
    cities = []
    
  }
  else{
    cities = JSON.parse(cities)
  }

  cities.push(cityname);

  localStorage.setItem("cities", JSON.stringify(cities))

  console.log(cities)

}

function getHistory(){
  

  return localStorage.getItem("cities")
  
}


function showHistory(){

  var cities = getHistory()  
  if (cities == null){
    cities = []
    
  }
  else{
    cities = JSON.parse(cities)
  }

  cities = cities.reverse()
  for(let i = 0; i < cities.length; i++){
    var city = cities[i]
    var historyButton = document.getElementById("history" + (i+1))
    if(historyButton !== null){

      historyButton.textContent = city
    }

    
  }


}


document.getElementById("history1").addEventListener("click", function(){
  var cityName = event.target.textContent
  

  fetchWeatherData(cityName)

})
document.getElementById("history2").addEventListener("click", function(){
  var cityName = event.target.textContent
  

  fetchWeatherData(cityName)

})
document.getElementById("history3").addEventListener("click", function(){
  var cityName = event.target.textContent
  

  fetchWeatherData(cityName)

})
document.getElementById("history4").addEventListener("click", function(){
  var cityName = event.target.textContent
  

  fetchWeatherData(cityName)

})
document.getElementById("history5").addEventListener("click", function(){
  var cityName = event.target.textContent
  

  fetchWeatherData(cityName)

})
