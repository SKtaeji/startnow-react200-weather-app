import axios from 'axios';

// const foo = () => ({
//   type: 'FOO',
//   payload: new Promise()
// });

export const getWeather = () => ({
  type: 'GET_WEATHER',
  payload: axios.get('api.openweathermap.org/data/2.5/weather?q=London&APPID={APIKEY}')
  .then(cityAPIData => this.setState({ cityWeather }))
  .catch(error => {
    
  })
});

// // pending action
// {
//   type:'FOO_PENDING'
// }

export function updateCityName(city) {
  return {
      type: 'UPDATE_CITY_NAME',
      payload: { city }
  };
}

export function addCity(city) {
  return {
      type: 'ADD_CITY',
      payload: { city }
  }
}