import {combineReducers} from 'redux';
import {productReducer} from './productReducer';

// (IV) combine reducers
const reducers = combineReducers(
    {
        allProducts:productReducer
    }
)

export default reducers;
