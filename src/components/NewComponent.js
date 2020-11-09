import React from 'react';
import ProductsList from './ProductsList';
import './css/index.css';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

 class App extends React.Component {
  constructor(props) {
    super(props);  
      this.state = {
      data: [],
      cart: this.props.cartItems
    }
  }

  componentDidMount() {
    console.log(this.state.cart)
  }

    render() {
      return (
      <div>
        <header>
          <div className="headerdiv">
              <img src="" alt="Logo"></img>
              <p className="restaurantName">Sushi Zen</p>
              <span className="tablenumber" >Table number </span>
          </div>
        </header>
        
        <ProductsList />

        <footer className="footer">
          <div style={{position:'center'}}>
              <Link className="basketButton btn btn-primary" to='/checkout'>
                <img src="http://localhost:60348/Images/Icons/basket.png" alt="Cart Icon" className="cartbasket"></img>
                <span  className="basketspan">View Basket &nbsp; - &nbsp; {this.state.cart.length} Dishes </span>
              </Link>
          </div>
        </footer>
      </div>
      
      )
    }
}


const mapStateToProps = state => {
  const quantity = state.productsReducer.quantity;
  const subtot = state.productsReducer.subtot;
  const unitPrice = state.productsReducer.unitPrice;
  const productID = state.productsReducer.productID;
  const cartItems = state.productsReducer.cartItems;
  return {
      quantity,
      subtot,
      unitPrice,
      productID,
      cartItems,
  }
};  

export default connect(mapStateToProps)(App);
