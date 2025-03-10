$(document).ready(function() {
    $("#getWeather").click(function() {
        let city = $("#city").val();
        let apiKey = `e1fbf6decabf100d05b64aa4652f66f0`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            success: function(data) {
                let weatherHtml = `
                    <div class='alert alert-info'>
                        <h3>${data.name}</h3>
                        <p>Temperature: <strong>${data.main.temp} °C</strong></p>
                        <p>Weather: <strong>${data.weather[0].description}</strong></p>
                        
                        
                    </div>
                `;
                $("#weatherInfo").html(weatherHtml);
            },
            error: function() {
                $("#weatherInfo").html("<div class='alert alert-danger'>City not found or API request failed.</div>");
            }
        });
    });
});