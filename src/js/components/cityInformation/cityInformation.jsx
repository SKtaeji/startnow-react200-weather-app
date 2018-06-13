import React from "react";

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityWeatherData } = this.props;
    if (cityWeatherData === "") {
      return (
        <div className="col-sm">
          <div className="card border border-info">
            <div className="card-header text-blue bg-info">City Information</div>
            <div className="card-body cityInfoCard" />
          </div>
        </div>
      );
    }

    return (
      <div className="card border-info mb-3">
        <div className="card-header text-blue bg-info">City Information</div>
        <div className="card-body">
          <div className="row mx-auto">
            <img src={cityWeatherData.weatherIcon} height="60px" />
            <h2 className="card-title">{cityWeatherData.cityName}</h2>
            <div className="w-100" />
            <p className="card-text">
              Lat/Long: {cityWeatherData.cityLat}, {cityWeatherData.cityLon}
            </p>
          </div>
          <form>
            <div className="card-title text-center" />
            <div className="row">
              <div className="col">
                <a>Temperature (F)</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityTemp}°F</a>
              </div>
              <div className="col">
                <a>Pressure</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityPressure}</a>
              </div>
              <div className="col">
                <a>Humidity</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityHumid}%</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a>Lowest Temp. (F)</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityMin}°F</a>
              </div>
              <div className="col">
                <a>Highest Temp. (F)</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityMax}°F</a>
              </div>
              <div className="col">
                <a>Wind Speed</a>
                <div className="w-100" />
                <a className="text-success">{cityWeatherData.cityWind}mph</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
