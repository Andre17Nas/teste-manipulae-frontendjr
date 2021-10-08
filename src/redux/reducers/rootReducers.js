import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import favReducer from './favReducer';

export default combineReducers({
    searchReducer,
    favReducer
})
