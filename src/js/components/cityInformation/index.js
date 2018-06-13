import { connect } from 'react-redux';
import CityInformation from './cityInformation';

function mapStoreToProps(store) {
    return {
        cityWeatherData: store.search.cityWeatherData
    }
}

export default connect(mapStoreToProps)(CityInformation);