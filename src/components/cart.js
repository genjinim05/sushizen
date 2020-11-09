import React, { Component } from "react";
import './cart.css';

import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { fetchProducts, addToCart, increaseProduct  } from '../actions/SimpleActions';
import { connect } from "react-redux";
import {  Link } from 'react-router-dom';
import history from "./history";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            price: 0.00,
            id: '',
            inputValue: '',
            remove: false,
        }
    }

    componentDidMount() {
        this.props.fetchProducts()
        this.setState({
            price: this.props.location.state.price.toFixed(2),
        })
    }


    addPro =() => {
        if (this.state.quantity === 0) {
            this.setState({
                remove: !this.state.remove,
                quantity: this.state.quantity + 1
            })
        }
        else if (this.state.quantity === 1 )  { 
            this.setState({
                quantity: this.state.quantity + 1,
            })
        }
        else if(this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
        console.log(this.props.cartItems)
    }

    decPro =() => {
        if (this.state.quantity === 1) {
            this.setState({
                remove: !this.state.remove,
                quantity: 0
            })  
        }
        else if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1,
            })
        }
        
    }

    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addToCart = () => {
        const { price, quantity, inputValue } = this.state;
        var values = {
            "id": this.props.location.state.productID,
            "price": price, 
            "quantity": quantity, 
            "instructions": inputValue,
            "image": this.props.location.state.image,
            "name": this.props.location.state.name,
            "unitprice": this.props.location.state.price
        };  
        this.props.addToCart(values);
        history.push({
            pathname: '/',
        });
        console.log(inputValue)
    }

    HandleRadioChange = (event) => {
        this.setState({
            mode: event.currentTarget.value,
        })
    } 
     
    componentDidUpdate(prevProps, prevState) {
      if ((prevState.quantity !== this.state.quantity)) {
        this.setState((state, props) => ({
            price: ((state.quantity * this.props.location.state.price).toFixed(2))
        }));
      }
    } 

  render() {
    const { error, loading, products } = this.props;

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    let selected = products.filter(datas => datas.prod_id === this.props.location.state.productID)
    let addbut = 
                <footer className="footer">
                <div> 
                    <Button className="addCartBut" onClick={this.addToCart} >  
                        <span className="addCartPrice">Add to Cart - RM {this.state.price}</span>
                    </Button> 
                </div>
                </footer>

    let removebut =   
                    <footer className="footer">
                    <div> 
                        <Link to='/' className="removebut btn btn-primary">
                            <span className="canceltag">Cancel</span>
                        </Link>
                    </div>
                    </footer>

    let togglebut = this.state.remove ? removebut : addbut;
    return (
      <div>
            {selected.map(item =>
            <div className="wrapper" key={item.prod_id}>
                <header>
                    <Link to='/'>
                        <img src="http://localhost:60348/Images/Icons/x-circle.png" alt="exit" className="cartexit"></img>
                    </Link>

                    <img src={item.prod_image} alt={item.prod_name} className="cartimg"/>
                </header>
                
                <Card>
                <Card.Body>
                    <Card.Title>
                        <h3 style={{ display: 'inline' }}>{item.prod_name}</h3>

                        <h3 className="cartprice" >RM {item.prod_price} </h3>
                    </Card.Title>
                        <p className="cartdesc" >{item.prod_description}</p>
                </Card.Body>
                </Card>

                <br />

                <Card>
                <Card.Body>
                    <div>
                        <h4 style={{display: 'inline' }}>Special Instructions</h4>
                        <p className="optional">Optional</p>
                    </div>
                    
                    <div>
                        <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}
                        placeholder="Eg. No Onions Please" className="instructions"></input>
                    </div>

                    <br/>

                    <div className="inner">
    
                            <ButtonGroup>
                                <button className="quantityButton" onClick={this.decPro}>-</button>
                                <span className="cartQuan">{this.state.quantity}</span>
                                <button className="quantityButton" onClick={this.addPro}>+</button>
                            </ButtonGroup>                            
                    </div>

                    <br/>
                </Card.Body>
                </Card>

                <div>
                  {togglebut}
                </div>

            </div>
            )}
      </div>
    );
  }
}
 
const mapStateToProps = state => {
    const products = state.productsReducer.items;
    const loading = state.productsReducer.loading;
    const error = state.productsReducer.error;
    const cartItems = state.productsReducer.cartItems
    return {
        products,
        loading,
        error,
        cartItems,
    }
  };  

const mapDispatchToProps = {
    fetchProducts,
    addToCart,
    increaseProduct
};

export default (connect(mapStateToProps,mapDispatchToProps)(Contact));