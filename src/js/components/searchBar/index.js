import { connect } from 'react-redux';
import SearchBar from './searchBar';

function mapStoreToProps(store) {
    return {
        cityWeatherData: store.search.cityWeatherData || {},
        searchHistory: store.search.searchHistory || {}
    }
}

export default connect(mapStoreToProps)(SearchBar);