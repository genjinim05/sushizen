import React from 'react';
import ProductsList from './ProductsList';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import SideNav from './sideNav';

 class App extends React.Component {
  constructor(props) {
    super(props);  
      this.state = {
      data: [],
      cart: this.props.cartItems,
      table: this.props.tableDetails
    }
  }

  componentDidMount() {
    console.log(this.state.cart)
    console.log(this.state.table)
  }

    render() {
      let tableNumber = this.state.table.find(item => item.number)
      return (
      <div className="orderingHome">

        <header className="header" >
              <img src="" alt="Logo"></img>
              <p className="restaurantName">Sushi Zen</p>
              <span className="tablenumber" >Table: {tableNumber.number} </span>
        </header>
        
        <div className="orderContainer" >
  
          <ProductsList />
        </div>

        <footer className="footer">
          <div style={{position:'center'}}>
              <Link className="basketButton btn btn-primary" to='/checkout'>
                <img src="https://sushi-zen.azurewebsites.net/Images/Icons/basket.png" alt="Cart Icon" className="cartbasket"></img>
                <span  className="basketspan">View Basket &nbsp; - &nbsp; {this.state.cart.length} Dishes </span>
              </Link>
          </div>
        </footer>
      </div>
      
      )
    }
}


const mapStateToProps = state => {
  const cartItems = state.productsReducer.cartItems;
  const tableDetails = state.productsReducer.tableDetails;
  return {
      cartItems,
      tableDetails,
  }
};  

export default connect(mapStateToProps)(App);
