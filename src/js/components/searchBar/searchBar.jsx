import React from "react";
import { getWeather, updateSearchHistory } from "./searchActions";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCityTabs = this.handleCityTabs.bind(this);
  }

  handleSearch() {
    const { dispatch } = this.props;
    var city = document.getElementById("citySearch").value;

    var mm = new Date().getMonth() + 1;
    var dd = new Date().getDate();
    var yyyy = new Date().getFullYear();
    var date = String(mm + "/" + dd + "/" + yyyy);

    var hour = addZero(convertStandardTime(new Date().getHours()));
    var minute = addZero(new Date().getMinutes());
    var second = addZero(new Date().getSeconds());
    var time = String(hour + ":" + minute + ":" + second);

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    }

    function convertStandardTime(i) {
      if (i > 12) {
        i = i - 12;
      }
      return i;
    }

    dispatch(getWeather(city));
    dispatch(updateSearchHistory(city, date, time));
  }

  handleCityTabs(e) {
    const { dispatch } = this.props;
    var city = e.target.value;

    var mm = new Date().getMonth() + 1;
    var dd = new Date().getDate();
    var yyyy = new Date().getFullYear();
    var date = String(mm + "/" + dd + "/" + yyyy);

    var hour = addZero(convertStandardTime(new Date().getHours()));
    var minute = addZero(new Date().getMinutes());
    var second = addZero(new Date().getSeconds());
    var time = String(hour + ":" + minute + ":" + second);

    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }

      return i;
    }

    function convertStandardTime(i) {
      if (i > 12) {
        i = i - 12;
      }
      return i;
    }

    dispatch(getWeather(city));
    dispatch(updateSearchHistory(city, date, time));
  }

  render() {
    const { cityWeatherData } = this.props;
    var error = cityWeatherData.error;
    if (error == true) {
      return (
        <div className="container-fluid">
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              value="San Diego"
              onClick={this.handleCityTabs}
            >San Diego</button>
            <button
              type="button"
              className="btn btn-secondary"
              value="New York"
              onClick={this.handleCityTabs}
            >New York</button>
            <button
              type="button"
              className="btn btn-secondary"
              value="Washington D.C."
              onClick={this.handleCityTabs}
            >Washington D.C</button>
            <button
              type="button"
              className="btn btn-secondary"
              value="London"
              onClick={this.handleCityTabs}
            >London</button>
            <button
              type="button"
              className="btn btn-secondary"
              value="Tokyo"
              onClick={this.handleCityTabs}
            >Tokyo</button>
          </div>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="citySearch"
                name="citySearch"
                placeholder="Please enter a City or click a Tab"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.handleSearch}
                >Search</button>
              </div>
            </div>
          </form>
          <div className="card error p-1">
            <p className="errorText">
              An error occured while attempting to display your selected Cities
              Weather
            </p>
            <p>Please check spelling of your city and try again</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            value="San Diego"
            onClick={this.handleCityTabs}
          >San Diego</button>
          <button
            type="button"
            className="btn btn-secondary"
            value="New York"
            onClick={this.handleCityTabs}
          >New York</button>
          <button
            type="button"
            className="btn btn-secondary"
            value="Washington D.C."
            onClick={this.handleCityTabs}
          >Washington D.C</button>
          <button
            type="button"
            className="btn btn-secondary"
            value="London"
            onClick={this.handleCityTabs}
          >London</button>
          <button
            type="button"
            className="btn btn-secondary"
            value="Tokyo"
            onClick={this.handleCityTabs}
          >Tokyo</button>
        </div>
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="citySearch"
              name="citySearch"
              placeholder="Please enter a City or click a Tab"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleSearch}
              >Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
