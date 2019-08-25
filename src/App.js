import React from 'react';

// import NavBar from './components/elements/navbar';
import Waitress from './components/views/waitress';
import WaitressLunch from './components/views/waitressLunch';
import Kitchen from './components/views/kitchen';
import Orders from './components/views/orders';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    
      <div className="App">
        {/* <NavBar /> */}
<BrowserRouter>
<Switch>
<Route exact path= {process.env.PUBLIC_URL + '/'} component={Waitress} />
 <Route exact path={'/waitress-breakfast'} component={Waitress} />
 <Route exact path={'/waitress-lunch'} component={WaitressLunch} />
<Route exact path={'/kitchen'} component={Kitchen} />
<Route exact path={'/orders'} component={Orders} />
</Switch>
</BrowserRouter>


         </div>

    
  );
}


export default App;
