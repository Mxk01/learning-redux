import {createStore} from 'redux';
// the combined reducers
import reducers from './reducers/index'


// store takes in as parameters:
// 1.the combined reducers
// 2.initial state 
const store = createStore(
    reducers,
    {},
    window._REDUX_DEVTOOLS_EXTENSION__ && 
    window._REDUX_DEVTOOLS_EXTENSION__()
     );

export default store;