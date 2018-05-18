let info_div = $(".info-div");

function getWeather(lat, lon) {
    let celsius = 0;
    let farenheight = 0;
    let info = "";
    let weather_api = "https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ "&lon=" +lon;
    console.log(weather_api)
    $.getJSON(weather_api, function(data) {
        //temperatures
        celsius += data.main.temp;
        farenheight += celsius * 1.8 + 32;

        //Info Div
        info += "<h2>" +data.name+ "</h2>";
        info += "<br>";
        info += farenheight;
        info_div.html(info);

        console.log(data.weather[0].main)
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
