import React from 'react';
import { Link } from 'react-router-dom';
import { ECommerceContext } from '../context/context';
const Nav = () => {

  const {state} = React.useContext(ECommerceContext)

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">E-Commerce</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">Features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart {state.cartProducts.length ? state.cartProducts.length : ''}</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}
 
export default Nav;