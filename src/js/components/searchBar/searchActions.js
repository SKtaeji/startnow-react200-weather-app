import axios from "axios";

export function getWeather(city) {
  return {
    type: "GET_WEATHER",
    payload: axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=3cd2eb49ad6a1132a828b88e9bfce92b"
      )
      .then(response => {
        const cityWeatherData = {
          cityName: response.data.name,
          cityLat: response.data.coord.lat,
          cityLon: response.data.coord.lon,
          cityTemp: response.data.main.temp,
          cityPressure: response.data.main.pressure,
          cityHumid: response.data.main.humidity,
          cityMin: response.data.main.temp_min,
          cityMax: response.data.main.temp_max,
          cityWind: response.data.wind.speed,
          weatherIcon:
            "https://openweathermap.org/img/w/" +
            response.data.weather[0].icon +
            ".png",
          error: false
        }

        return cityWeatherData;
      })
      .catch(error => {
        const cityWeatherData = {
          error: true
        }

        return cityWeatherData;
      })
  };
}

export function updateSearchHistory(city, date, time) {
  return {
    type: "UPDATE_SEARCH_HISTORY",
    payload: {
      city: city,
      date: date,
      time: time
    }
  };
}
