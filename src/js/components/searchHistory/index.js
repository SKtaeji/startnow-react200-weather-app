import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

function mapStoreToProps(store) {
    return {
        searchHistory: store.search.searchHistory
    };
}

export default connect(mapStoreToProps)(SearchHistory);