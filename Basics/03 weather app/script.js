document
  .querySelector(".searchBtn")
  .addEventListener("click", function getCity() {
    const city = document.getElementById("searchBar").value;
    checktemp(city);
    document.querySelector(".card-title").innerHTML = city;
    console.log("working");
    async function checktemp(city) {
      console.log(city);
      const url =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e9bb805f9amsh45d542badaf6095p1fd775jsn4d65d6f73cbb",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      const url1 =
        "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" +
        city;
      const options2 = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e9bb805f9amsh45d542badaf6095p1fd775jsn4d65d6f73cbb",
          "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        console.log(response);
        const result = await response.text();
        console.log(result);
        if (result == undefined || result == null) {
          document.getElementById("temp").innerHTML = "Not Found";
          document.getElementById("humid").innerHTML = "Not Found";
          document.getElementById("deg").innerHTML = "Not Found";

          document.getElementById("speed").innerHTML = "Not Found";

          document.getElementById("temp-default").innerHTML = "Not Found";
        }

        // Adding temp to display
        let weatherData = JSON.parse(result);
        let temperature = weatherData["temp"];
        console.log(temperature);
        document.getElementById("temp").innerHTML = weatherData["temp"];
        document.getElementById("humid").innerHTML = weatherData["humidity"];
        document.getElementById("deg").innerHTML = weatherData["wind_degrees"];
        document.getElementById("speed").innerHTML = weatherData["wind_speed"];
        document.getElementById("temp-default").innerHTML = weatherData["temp"];

        const response1 = await fetch(url1, options2);
        const result1 = await response1.text();
        console.log(result1);
        let airData = JSON.parse(result1);
        if (airData === undefined || airData === null) {
          return;
        } else {
          document.getElementById("air1").innerHTML =
            airData["CO"]["concentration"];
          document.getElementById("air2").innerHTML =
            airData["NO2"]["concentration"];
          document.getElementById("air3").innerHTML =
            airData["O3"]["concentration"];
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

async function checktemp1() {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9bb805f9amsh45d542badaf6095p1fd775jsn4d65d6f73cbb",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const url1 =
    "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Pune";
  const options2 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9bb805f9amsh45d542badaf6095p1fd775jsn4d65d6f73cbb",
      "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    console.log(response);
    const result = await response.text();
    console.log(result);
    let weatherData = JSON.parse(result);

    if (weatherData === undefined || weatherData === null) {
      document.getElementById("temp").innerHTML = "Not Found";
      document.getElementById("humid").innerHTML = "Not Found";
      document.getElementById("deg").innerHTML = "Not Found";
      document.getElementById("speed").innerHTML = "Not Found";
      document.getElementById("temp-default").innerHTML = "Not Found";
    }
    document.getElementById("temp").innerHTML = weatherData["temp"];
    document.getElementById("humid").innerHTML = weatherData["humidity"];
    document.getElementById("deg").innerHTML = weatherData["wind_degrees"];
    document.getElementById("speed").innerHTML = weatherData["wind_speed"];
    document.getElementById("temp-default").innerHTML = weatherData["temp"];

    const response1 = await fetch(url1, options2);
    const result1 = await response1.text();
    console.log(result1);
    let airData = JSON.parse(result1);

    document.getElementById("air1").innerHTML = airData["CO"]["concentration"];
    document.getElementById("air2").innerHTML = airData["NO2"]["concentration"];
    document.getElementById("air3").innerHTML = airData["O3"]["concentration"];
  } catch (error) {
    console.error(error);
  }
}

checktemp1();
