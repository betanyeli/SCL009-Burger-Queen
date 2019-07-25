import React from 'react';
import '../../components/components.css'
import Waitress from '../views/waitress';
import WaitressLunch from '../views/waitressLunch';
import Kitchen from '../views/kitchen';
import Orders from '../views/orders';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function NavBar() {
    return (

<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-warning">
  <a className="navbar-brand" href="./">Burger Queen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="./waitress-breakfast">Mesero-Desayuno</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="./waitress-lunch">Mesero-Almuerzo</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./kitchen">Cocina</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./orders">Orden lista</a>
      </li>
     
    </ul>
  </div>
</nav>
<BrowserRouter>
<Switch>
 <Route exact path="/waitress-breakfast" component={Waitress} />
 <Route exact path="/waitress-lunch" component={WaitressLunch} />
<Route exact path="/kitchen" component={Kitchen} />
<Route exact path="/orders" component={Orders} />
</Switch>
</BrowserRouter>
</div>
    );

}

export default NavBar;