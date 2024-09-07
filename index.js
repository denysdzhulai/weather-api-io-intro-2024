// Example API fetch
fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=49.4445&longitude=32.0574&hourly=temperature_2m,precipitation_probability,precipitation,pressure_msl,visibility"
) // Replace with your API endpoint
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
