import React from 'react';
import CartProducts from './cartproducts';
import './css/checkout.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

import { fetchProducts, clearCart } from '../actions/SimpleActions';

class Checkout extends React.Component{
    constructor(props) {
        super(props);  
          this.state = {
          data: [],
          cart: this.props.cartItems,
          servicetax: 0,
          total: 0
        }
    }

    componentDidMount() {
        var subtotal = parseFloat(this.props.subtotal, 10)
        var servicetax = parseFloat((subtotal * 0.06).toFixed(2), 10)
        let total = (subtotal + servicetax)
        this.setState({
            servicetax: servicetax,
            total: total
        })
    }

    clear = () => {
        this.props.clearCart();
        window.location.reload();
    }

    render(){
        return (      
            <div>
                <header className="sticky-top">
                        <Card>
                            <Card.Body className="checkoutHeaderInnerDiv">
                            <Link to='/'>
                            <img src="https://sushi-zen.azurewebsites.net/Images/Icons/x-circle.png" alt="exit" className="cartexit"></img>
                        </Link>

                        <Button className="clearAllButton" onClick={this.clear}>Clear All</Button>

                            </Card.Body>
                        </Card>
                       
                </header>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">

                        {
                            this.state.cart.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }
                    </div>
                </div>

                {
                    this.state.cart.length > 0 &&

                    <div className="billing">
                        <Card>
                            <Card.Body>
                                <div className="billDiv">
                                    <span className="billingTitle">Total Items: </span>
                                    <span className="billCount">{this.props.itemCount}</span>
                                </div>

                                <div className="billDiv">
                                    <span className="billingTitle">Subtotal: </span>
                                    <span className="billCount">RM {this.props.subtotal}.00</span>
                                </div>

                                <div className="billDiv">
                                    <span className="billingTitle">Service Tax (6%): </span>
                                    <span className="billCount">RM {this.props.servicetax} </span>
                                </div>

                                <div className="billDiv">
                                    <span className="totalTitle">Total: </span>
                                    <span className="totalCount">RM {this.props.total} </span>
                                </div>

                                <footer className="checkoutFooter">
                                    <div> 
                                        <Button className="checkoutBut" onClick={this.addToCart} >  
                                            <span className="checkoutPrice">Checkout </span>
                                        </Button> 
                                    </div>
                                    </footer>
                            </Card.Body>
                        </Card>
                    </div>
                }

            </div>
       )
    }
}

const mapStateToProps = state =>{
    const cartItems = state.productsReducer.cartItems;
    const subtotal = state.productsReducer.subtotal;
    const itemCount = state.productsReducer.itemCount;
    const servicetax = state.productsReducer.servicetax;
    const total = state.productsReducer.total;
    return{
        cartItems,
        subtotal,
        itemCount,
        servicetax,
        total
    }
}

const mapDispatchToProps = {
    fetchProducts,
    clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)