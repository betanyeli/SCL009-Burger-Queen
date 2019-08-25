import React from 'react';
import '../../components/components.css'
import { Link } from 'react-router-dom';



function NavBar() {
    return (

<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-warning">
<li className="navbar-brand"> <Link to={process.env.PUBLIC_URL + '/'}>BurgerQueen</Link></li>
 

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-link"> <Link to='/waitress-breakfast'>Mesero-Desayuno</Link></li>
        {/* <a className="nav-link" href="./waitress-breakfast">Mesero-Desayuno</a> */}
       
      <li className="nav-link"><Link to='/waitress-lunch'>Mesero-Almuerzo</Link>
        {/* <a className="nav-link" href="./waitress-lunch">Mesero-Almuerzo</a> */}
      </li>
      <li className="nav-link"><Link to='/kitchen'>Cocina</Link>
        {/* <a className="nav-link" href="./kitchen">Cocina</a> */}
      </li>
      <li className="nav-link"><Link to='/orders'>Orden lista</Link>
        {/* <a className="nav-link" href="./orders">Orden lista</a> */}
      </li>
     
    </ul>
  </div>
</nav>

</div>
    );

}

export default NavBar;