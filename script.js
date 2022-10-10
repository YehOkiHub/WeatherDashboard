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
                    let fahrentemp = (result.list[0].main.temp -273.15) * 9/5 +32
                    $("#current-temp").text(fahrentemp);
                    $("#current-wind").text(result.list[0].wind.gust + " MPH");
                    $("#current-humidity").text(result.list[0].main.humidity + "%");
                    $("#citymain").text(result.city.name);
                    $( ".hide" ).css("display", "block")

                    for(i = 7; i < result.list[11]; i++) {

                        for(x = 1; x < 5; i++ ){

                            [x]fore.text(result.list[i])


                        }


                    }



                    // $("#1fore").text(result.list[7].wind.gust + " MPH");
                    // $("#2fore").text(result.list[8].wind.gust + " MPH");
                    // $("#3fore").text(result.list[9].wind.gust + " MPH");
                    // $("#4fore").text(result.list[10].wind.gust + " MPH");
                    // $("#5fore").text(result.list[11].wind.gust + " MPH");
                    
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

