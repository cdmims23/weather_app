let info_div = $(".info-div");
let body = $("body");

function getWeather(lat, lon) {
    let celsius = 0;
    let farenheight = 0;
    let info = "";
    let weather_api = "https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ "&lon=" +lon;
    console.log(weather_api)
    $.getJSON(weather_api, function(data) {
        //temperatures
        celsius += data.main.temp;
        farenheight += Math.round(celsius * 1.8 + 32);

        //Info Div
        info += "<h2>" +data.name+ "</h2>";
        info += "<h3>" +farenheight+ "</h3>";
        info += "<h3>" +data.weather[0].main+ "</h3>";
        info_div.html(info);

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
