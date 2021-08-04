import {createStore} from 'redux';
// the combined reducers
import reducers from './reducers/index'


// store takes in as parameters:
// 1.the combined reducers
// 2.initial state 
const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

export default store;