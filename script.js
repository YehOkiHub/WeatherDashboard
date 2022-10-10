var userInput = document.getElementById("search");
var searchBtn = document.getElementById("button-submit");
var apiKey = "6a85240e0721490a7cbc7f502516be62";


searchBtn.addEventListener("click", function (event){
    event.preventDefault();
    let city = userInput.value;

    let cities = [city];
    if (localStorage.getItem("cities")) {
        cities = JSON.parse(localStorage.getItem("cities"));
        cities.push(city);
    }
    localStorage.setItem("cities", JSON.stringify(cities));

    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`,

        { method: "GET" }
    )
        .then((response) => response.json())
        .then((result) => {

            const lat = result[0].lat;
            const lon = result[0].lon;

            const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            fetch(url, { method: "GET" })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    let fahrentemp = (Math.round(result.list[0].main.temp -273.15) * 9/5 +32)
                    $("#current-temp").text(fahrentemp);
                    $("#current-wind").text(result.list[0].wind.gust + " MPH");
                    $("#current-humidity").text(result.list[0].main.humidity + "%");
                    $("#citymain").text(result.city.name);
                    $(".hide").css("display", "block")

// 5day forecast

                    let day1 = (Math.round(result.list[6].main.temp - 273) * 9/5 + 32) + "°F " +  result.list[6].wind.gust + " MPH " + "Humidity " + result.list[6].main.humidity + "%"
                    let day2 = (Math.round(result.list[14].main.temp - 273)  * 9/5 + 32) + "°F " + result.list[14].wind.gust + " MPH " + "Humidity " + result.list[14].main.humidity + "%"
                    let day3 = (Math.round(result.list[22].main.temp - 273)  * 9/5 + 32) + "°F " + result.list[22].wind.gust + " MPH " + "Humidity " + result.list[22].main.humidity + "%"
                    let day4 = (Math.round(result.list[30].main.temp - 273)  * 9/5 + 32) + "°F " + result.list[30].wind.gust + " MPH " + "Humidity " + result.list[30].main.humidity + "%"
                    let day5 = (Math.round(result.list[38].main.temp - 273)  * 9/5 + 32) + "°F " + result.list[38].wind.gust + " MPH " + "Humidity " + result.list[38].main.humidity + "%"
                    $("#1fore").text(day1)
                    $("#2fore").text(day2)
                    $("#3fore").text(day3)
                    $("#4fore").text(day4)
                    $("#5fore").text(day5)
                    $("#5daycity").text(result.city.name +"'s 5 day Forecast")



                    



                    
                    





                    
                    // $("#1fore").text(result.list[6].wind.gust + " MPH");
                    // $("#2fore").text(result.list[14].wind.gust + " MPH");
                    // $("#3fore").text(result.list[22].wind.gust + " MPH");
                    // $("#4fore").text(result.list[30].wind.gust + " MPH");
                    // $("#5fore").text(result.list[38].wind.gust + " MPH");
                    // $(".11fore").text(result.list[6].main.humidity + "%");
                    // $("#22fore").text(result.list[14].main.humidity + "%");
                    // $("#33fore").text(result.list[22].main.humidity + "%");
                    // $("#44fore").text(result.list[30].main.humidity + "%");
                    // $("#55fore").text(result.list[38].main.humidity + "%");

                    






                    
                })
                .catch((error) => console.log("error", error));
        })
    });



// var searchBtn = $("searchBtn");
// var searchBar = $("searchBar");

// var domain = "api.openweathermap.org";
// var city = $('#city-input');
// var path = "/geo/1.0/direct";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
// var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

// searchBtn.addEventListener("click", getApi); {

    
    


// };

// function getApi() {    
      
//     fetch(queryURL)
//       .then(function (response) {
//         console.log("hello");
//         return response.json();
        
//       })
//       .then(function (data) {
//         console.log(data);
//     }).catch(function(error) {
//         console.log(error);
//     });
    
// }

// for(i = 7; i < result.list[11]; i++) {

//     for(x = 1; x < 5; i++ ){

//     l [x]fore.text(result.list[i])


//     }


// }

