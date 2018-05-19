let info_div = $(".info-div");
let body = $("body");
let city = $(".city");
let temp = $(".temp");
let description = $(".description");

function getWeather(lat, lon) {
    let tempUnit = 'C'
    let celsius = 0;
    let farenheight = 0;
    let weather_api = "https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ "&lon=" +lon;
    console.log(weather_api)
    $.getJSON(weather_api, function(data) {
        //temperatures
        celsius += data.main.temp;
        farenheight += Math.round(celsius * 1.8 + 32);

        //Info Div
        city.html(data.name);
        temp.html(farenheight+ " &#8457;");
        description.html(data.weather[0].main);

        console.log(data.weather[0].main)

        if(data.weather[0].id >= 800) {
            body.css("background-image", "url('images/sunny.jpg')");
        } else if(data.weather[0].id >= 600 && data.weather[0].id <= 800) {
            body.css("background-image", "url('images/snowy.jpg')");
        }
        else if(data.weather[0].id >= 200 && data.weather[0].id <= 600) {
            body.css("background-image", "url('images/rainy.jpg')");
        } else {
            body.css("background-image", "url('images/sunny.jpg')");
        }
    });
}

function getLocation() {
    if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            getWeather(position.coords.latitude, position.coords.longitude)
        });
    } else {
        alert("Location is unavailable")
    }
}
