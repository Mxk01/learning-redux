import './App.css';
import Header from './containers/Header'
import {BrowserRouter as Router,Switch,Route} from 
'react-router-dom'
import ProductsListing from './containers/ProductsListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
 
    <div className="App">
    <Router> 
    <Header/>
    <Switch>

    
    <Route path="/" component={ProductsListing}/>
    <Route path="/product/:productId" component={ProductDetails}/>
    <Route>404 Not found</Route>
    </Switch>
    </Router>

    </div>
  );
}

export default App;
