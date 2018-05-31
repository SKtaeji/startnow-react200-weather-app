import React from "react";

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card border-info mb-3">
        <div className="card-header text-blue bg-info">City Information</div>
        <div className="card-body">
          <div className='row mx-auto'>
            <h2 className="card-title">Tokyo</h2>
            <div className="w-100" />
            <p className="card-text">Lat/Long: 39°09'24.6''S 175°37'55.8''E</p>
          </div>
          <form>
            <div className="card-title text-center" />
            <div className="row">
              <div className="col">
                <a>Temperature (F)</a>
                <div className="w-100" />
                <a className="text-success">78.02°F</a>
              </div>
              <div className="col">
                <a>Pressure</a>
                <div className="w-100" />
                <a className="text-success">956</a>
              </div>
              <div className="col">
                <a>Humidity</a>
                <div className="w-100" />
                <a className="text-success">21%</a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a>Lowest Temp. (F)</a>
                <div className="w-100" />
                <a className="text-success">64.22°F</a>
              </div>
              <div className="col">
                <a>Highest Temp. (F)</a>
                <div className="w-100" />
                <a className="text-success">81.02°F</a>
              </div>
              <div className="col">
                <a>Wind Speed</a>
                <div className="w-100" />
                <a className="text-success">10.3mph</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
