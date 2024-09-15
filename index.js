fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=49.4445&longitude=32.0574&hourly=temperature_2m,precipitation_probability,precipitation,pressure_msl,visibility"
)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.hourly.temperature_2m[0];
    const precipitation = data.hourly.precipitation[0];

    document.querySelector(
      "p"
    ).textContent = `Temperature in Cherkasy: ${temperature}°C, Precipitation: ${precipitation}mm`;
  })
  .catch((error) => console.error("Error:", error));
