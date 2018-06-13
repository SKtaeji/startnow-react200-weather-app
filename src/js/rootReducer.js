import { combineReducers } from 'redux';
import SearchReducer from './components/searchBar/searchReducer';

const rootReducer = combineReducers({
    search: SearchReducer
});

export default rootReducer;
