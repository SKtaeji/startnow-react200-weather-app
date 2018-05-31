import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-secondary">
            San Diego
          </button>
          <button type="button" className="btn btn-secondary">
            New York
          </button>
          <button type="button" className="btn btn-secondary">
            Washington D.C
          </button>
          <button type="button" className="btn btn-secondary">
            London
          </button>
          <button type="button" className="btn btn-secondary">
            Tokyo
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" id="city-name" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
