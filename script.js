$( document ).ready(function() {
    console.log( "ready!" );
});

let apiKey = "6a85240e0721490a7cbc7f502516be62";
let city = $('#city-input');
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;



