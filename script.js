$( document ).ready(function() {
    
});
let searchBtn = $("searchBtn");
let searchBar = $("searchBar");
let apiKey = "6a85240e0721490a7cbc7f502516be62";
var domain = "api.openweathermap.org";
let city = $('#city-input');
var path = "/geo/1.0/direct";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

searchBtn.on("click", getApi); {

    
    


};

function getApi() {
    
      
    fetch(queryURL)
      .then(function (response) {
        console.log("hello");
        return response.json();
        
      })
      .then(function (data) {
        console.log(data);
    }).catch(function(error) {
        console.log(error);
    });
    
}

