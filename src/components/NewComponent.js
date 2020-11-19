import React from 'react';
import ProductsList from './ProductsList';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import NavBar from './sideNav';
import { Card, Button  } from 'react-bootstrap';
import QRCode from 'qrcode.react';

 class App extends React.Component {
  constructor(props) {
    super(props);  
      this.state = {
      data: [],
      cart: this.props.cartItems,
      // table: this.props.tableDetails
    }
  }

  downloadQR = () => {
    const canvas = document.getElementById("G1");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "g1.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  componentDidMount() {
    console.log(this.state.cart)
    console.log(this.state.table)
    let authResult = new URLSearchParams(window.location.search); 
    let code = authResult.get('code')
    console.log(code)
  }

    render() {
      // let tableNumber = this.state.table.find(item => item.number)
      return (
      <div className="">

        <header className="sticky-top" >
          <Card className="headerDiv">
            <Card.Body className="headerInnerDiv">
              <img src="" alt="Logo"></img>
              <p className="restaurantName">Sushi Zen</p>
              {/* <span className="tablenumber" >Table {tableNumber.number} </span> */}
            </Card.Body>
          </Card>
          
          <Card className="navDiv">
            <Card.Body className="navInnerDiv">
              <NavBar />
            </Card.Body>
          </Card>
        </header>
        
        <div>
          <QRCode 
            id="G1"
            value="https://sushizen.netlify.app/products"
            size={290}
            level={"H"}
            includeMargin={true}
          />
          <a onClick={this.downloadQR}> Download QR </a>

        </div>

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
  return {
      cartItems,
      tableDetails,
  }
};  

export default connect(mapStateToProps)(App);
