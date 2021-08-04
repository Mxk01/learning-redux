import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App';
 import {Provider} from 'react-redux'
 import store from './redux/store';
ReactDOM.render(
    /* (V) After making the store our react app still
   isn't connected to redux
   To connect it we need to wrap our app in a provider
    and pass the store to it  
   */

  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
