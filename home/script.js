document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const locationInput = document.getElementById("locationInput");
    const locationName = document.getElementById("locationName");
    const temperature = document.getElementById("temperature");
    const weatherCondition = document.getElementById("weatherCondition");

    searchButton.addEventListener("click", function () {
        // Simulating fetching weather data
        const fakeWeatherData = {
            location: "New York, USA",
            temp: "25°C",
            condition: "Sunny"
        };

        locationName.textContent = fakeWeatherData.location;
        temperature.textContent = fakeWeatherData.temp;
        weatherCondition.textContent = fakeWeatherData.condition;
    });
});
