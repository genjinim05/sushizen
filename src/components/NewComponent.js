import React from 'react';
import ProductsList from './ProductsList';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import NavBar from './sideNav';
import { Card } from 'react-bootstrap';
import { setSelectedTable } from '../actions/SimpleActions';

 class App extends React.Component {
  constructor(props) {
    super(props);  
      this.state = {
      data: [],
      cart: this.props.cartItems,
      table: '',
      tableDetails: this.props.tableDetails
    }
  }

  componentDidMount() {
    this.tableNumber();
    console.log(this.props.tableDetails )
    console.log(this.props.checkoutItems)
    console.log(this.props.cartItems)
  }

  // checkCart = () => {
  //   if(this.props.tableDetails.length > 0) {
  //       localStorage.clear();
  //       document.location.reload();
  //   }       
  //    console.log(this.props.tableDetails)
  // }

  tableNumber = () => {
    if (this.props.tableDetails.length == 0) {
      let authResult = new URLSearchParams(this.props.location.search); 
      let table = authResult.get('table')
      console.log(table) 
      let data = {}
      data.number = table
      this.props.setSelectedTable(data);
      this.setState({
        table: table
      })
    }    
    else if (this.props.location.search == null ) {
      let tableNumber = this.props.tableDetails.find(item => item.number)
      console.log(tableNumber)
      this.setState({
        table: tableNumber.number
      }) 

    }
    else if (this.props.tableDetails.length > 0 ) {
      let tableNumber = this.props.tableDetails.find(item => item.number)
      console.log(tableNumber)
      this.setState({
        table: tableNumber.number
      }) 

    }
  }

    render() {
    let basket =  <div style={{position:'center'}}>
                    <Link className="basketButton btn btn-primary" to='/checkout'>
                      <img src="https://sushi-zen.azurewebsites.net/Images/Icons/basket.png" alt="Cart Icon" className="cartbasket"></img>
                      <span  className="basketspan">View Basket &nbsp; - &nbsp; {this.state.cart.length} Dishes </span>
                    </Link>
                  </div>
    let added =       
                <div style={{position:'center'}}  className="container-row"> 
                  <div className="" style={{width: '40%'}}>
                    <Link className="" to='/checkout'>
                      <img src="https://sushi-zen.azurewebsites.net/Images/Icons/white-basket.png" alt="Cart Icon" className="cartbasket1"></img>
                      <span  className="basketspan1">View Basket  </span>
                    </Link>
                  </div>

                  <div className="" style={{width: '60%'}}>
                    <Link className="paymentButton btn btn-primary" to='/checkout'>
                      <img src="https://sushi-zen.azurewebsites.net/Images/Icons/basket.png" alt="Cart Icon" className="cartbasket"></img>
                      <span  className="basketspan">View Basket &nbsp; - &nbsp; {this.state.cart.length} Dishes </span>
                    </Link>
                    </div>
                </div>

      return (
      <div className="">

        <header className="sticky-top" >
          <Card className="headerDiv">
            <Card.Body className="headerInnerDiv">
              <img src="" alt="Logo"></img>
              <p className="restaurantName">Sushi Zen</p>
              <span className="tablenumber" >Table {this.state.table} </span>
              
              <NavBar />

            </Card.Body>
          </Card>
          
          {/* <Card className="navDiv">
            <Card.Body className="navInnerDiv">
            </Card.Body>
          </Card> */}
        </header>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9">

            <ProductsList />

          </div>
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
  const checkoutItems = state.productsReducer.checkoutItems;

  return {
      cartItems,
      tableDetails,
      checkoutItems
  }
};  

const mapDispatchToProps = {
    setSelectedTable,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
