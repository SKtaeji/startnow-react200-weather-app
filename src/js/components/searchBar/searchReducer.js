const defaultState = {
  cityWeatherData: {
    cityName: "Space",
    cityLat: "0",
    cityLon: "0",
    cityTemp: "0",
    cityPressure: "0",
    cityHumid: "0",
    cityMin: "0",
    cityMax: "0",
    cityWind: "0",
    weatherIcon: "http://openweathermap.org/img/w/01d.png",
    error: false
  },
  searchHistory: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_WEATHER_FULFILLED": {
      
      return {
        ...state,
        cityWeatherData: payload
      };
    }

    case "GET_WEATHER_REJECTED": {
      return {
        ...state,
        error: true
      };
    }

    case "UPDATE_SEARCH_HISTORY": {
      // returning city search history
      return {
        ...state,
        searchHistory: [...state.searchHistory, payload]
      };
    }

    default: {
      return state;
    }
  }
}
