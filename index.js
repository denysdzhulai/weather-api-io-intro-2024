const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=45.4647&longitude=-98.4865&hourly=temperature_2m,relative_humidity_2m";

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    const path = window.location.pathname;

    if (path.includes("temperature.html")) {
      displayTemperature(data);
    } else if (path.includes("humidity.html")) {
      displayRelativeHumidity(data);
    } else {
      displayHome(data);
    }
  })
  .catch((error) => console.error("Error:", error));

// Display temperature data
function displayTemperature(data) {
  const temperature = data.hourly.temperature_2m[0];
  document.querySelector(
    "p"
  ).textContent = `Current Temperature: ${temperature}°C`;
}

// Display relative humidity data
function displayRelativeHumidity(data) {
  const humidity = data.hourly.relative_humidity_2m[0];
  document.querySelector("p").textContent = `Current Humidity: ${humidity}%`;
}

// Display home page with summary
function displayHome(data) {
  const temperature = data.hourly.temperature_2m[0];
  const humidity = data.hourly.relative_humidity_2m[0];
  document.querySelector(
    "p"
  ).textContent = `Temperature: ${temperature}°C, Humidity: ${humidity}%`;
}
