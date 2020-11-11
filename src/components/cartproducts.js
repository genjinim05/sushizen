import React from 'react';
import './css/checkout.css'

import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { increaseProduct, decreaseProduct, removeProduct } from '../actions/SimpleActions'

class CartProducts extends React.Component{
    constructor(props) {
        super(props);  
          this.state = {
          cart: [],
          quantity: 0,
          remove: false
        }
    }

    componentDidMount() {
        this.setState({
            cart: this.props.cartItems
        })
    }

    increaseProduct = (e) => {
        var key2 = this.props.cartItems.find(item =>
            item.instructions === e.currentTarget.value && item.id === e.currentTarget.id)

        var item = this.props.cartItems.find(item => item.quantity === key2.quantity)
        var comments = this.props.cartItems.find(item => item.instructions === e.currentTarget.value )
        var values = {
            "id": key2.id,
            "quantity": item.quantity,
            "instructions": comments.instructions,   

        }
        this.props.increaseProduct(values);

        this.setState({
            quantity: item.quantity
        })

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
    }

    decreaseProduct = (e) => {
        var key2 = this.props.cartItems.find(item =>
            item.instructions === e.currentTarget.value && item.id === e.currentTarget.id)

        var item = this.props.cartItems.find(item => item.quantity === key2.quantity)
        var comments = this.props.cartItems.find(item => item.instructions === e.currentTarget.value )
        var values = {
            "id": key2.id,
            "quantity": item.quantity,
            "instructions": comments.instructions
        }

        this.props.decreaseProduct(values);

        this.setState({
            quantity: item.quantity
        })

        if (this.state.quantity === 0) {
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

    removeProduct = (e) => {
        var key2 = this.props.cartItems.find(item =>
            item.instructions === e.currentTarget.value && item.id === e.currentTarget.id)

        var item = this.props.cartItems.find(item => item.quantity === key2.quantity)
        var comments = this.props.cartItems.find(item => item.instructions === e.currentTarget.value )
        var values = {
            "id": key2.id,
            "quantity": item.quantity,
            "instructions": comments.instructions,
            "price": key2.price
        }
        console.log(key2)
        this.props.removeProduct(values)

        window.location.reload();
    }


    render(){
        let items = this.state.cart
        return (
            <div>
                {items.map(item => 
                <div key={item.id}>
                       
                <Card >
                <Card.Body>
                    <div className="container-row">
                        <div className="cartImageContainer">
                            <img alt={item.name} src={item.image} className="checkoutimg"/>

                        </div>  

                        <div className="cartItemsContainer">
                            <div>
                                <h4 className="cartItemTitle">{item.name}</h4>

                                <p className="cartItemPrice">{item.unitprice}.00</p>

                                <p className="cartItemComments">
                                    {item.instructions}
                                </p>

                                <span className="cartItemQuantity">Quantity: {item.quantity}</span>

                            </div>
                        </div>
                    </div>



                    <div className="container-row-buttons">
                      
                        <div className="cartItemImage">
                            <Button className="cartImagePlus" id={item.id} value={item.instructions} 
                                onClick={(e) => this.increaseProduct(e)}>
                                <img src="https://sushi-zen.azurewebsites.net/Images/Icons/plus-icon.png" alt="Plus Icon" 
                                     className="cartItemPlus">    
                                </img>
                            </Button>
                        </div>

                        &nbsp; &nbsp;

                        { 
                            item.quantity > 1 && 

                            <div className="cartItemImage">
                                <Button className="cartImageMinus" id={item.id} value={item.instructions} 
                                    onClick={(e) => this.decreaseProduct(e)}>
                                    <img src="https://sushi-zen.azurewebsites.net/Images/Icons/minus-icon.png" alt="Minus Icon" 
                                        className="cartItemMinus">    
                                    </img>
                                </Button>
                            </div>
                        }

                        { 
                            item.quantity === 1 &&
                            <div className="cartItemImage">
                                <Button className="cartImageRemove" id={item.id} value={item.instructions} 
                                    onClick={(e) => this.removeProduct(e)}>
                                    <img src="https://sushi-zen.azurewebsites.net/Images/Icons/trash-icon.png" alt="Remove Icon" 
                                        className="cartItemRemove">    
                                    </img>
                                </Button>
                            </div>
                        }
                    </div>
                </Card.Body>
                </Card>
                </div>
                )}
                <br /> <br/>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    const cartItems = state.productsReducer.cartItems;
    return{
        cartItems
    }
}

const mapDispatchToProps = {
    increaseProduct,
    decreaseProduct,
    removeProduct
};


export default connect(mapStateToProps, mapDispatchToProps)(CartProducts)