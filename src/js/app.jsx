import React from 'react';
import CityInformation from './components/cityInformation';
import SearchBar from './components/searchBar';
import SearchHistory from './components/searchHistory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Weather Application</h1>
          <h5 className='lead text-center'>Always know if you'll need an umbrella?</h5>
        </div>
        <div className='form-group row'>
          <SearchBar /> 
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformation />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
