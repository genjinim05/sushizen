import React from 'react';

import { Card, Button, Table } from 'react-bootstrap';
import { setSelectedTable } from '../../actions/SimpleActions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import history from '../history';

import '../css/index.css'
import '../css/checkout.css'

class Payment extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            table: '',
            selected: null
        }
    }

    componentDidMount() {
        this.tableNumber();
        console.log(this.props.checkoutItems)
        console.log(this.props.tableDetails)
        console.log(this.props.total1)
    }

    tableNumber = () => {
        if (this.props.tableDetails.length > 0 ) {
          let tableNumber = this.props.tableDetails.find(item => item.number)
          console.log(tableNumber)
          this.setState({
            table: tableNumber.number
          }) 
    
        }
    }

    paymentMethod = (e) => {
        let selected = e.target.value
        console.log(selected)
        this.setState({
            selected: selected
        })
    }

    render() {
        let items = this.props.checkoutItems;
        return (
            <div>                
                <header className="sticky-top" >
                    <Card>
                        <Card.Body className="checkoutHeaderInnerDiv">
                            <Link to='/products'>
                            <img src="http://localhost:55959/Images/Icons/x-circle.png" alt="exit" className="cartexit"></img>
                            </Link>
                            <span className="tablenumber" >Table {this.state.table} </span>
                        </Card.Body>
                    </Card>
                </header>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9">
                        <div className="summaryDiv">
                        <Card  >
                            <h4 className="typeTitle">Order Summary </h4>
                            
                            {items.map(item => 
                            
                            <div key={item.timePlaced}>
                            
                            <ol>
                                <li>
                                    <div className="container-row">

                                        <div className="payItemContainer">
                                            <div>
                                                <span className="payItemTitle">{item.name} x{item.quantity}</span>

                                                <span className="payItemPrice">{item.total}.00</span>

                                                <p className="payItemInst" >Instructions: {item.instructions}</p>

                                                <p className="payItemInst" >Time Placed: {item.timePlaced}</p>

                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                </li>
                            </ol>
                        
                            </div>
                        
                            )}

                        <div className="paymentMethod">
                            <h5 className="paymentMethodTitle">Select Payment Method: </h5>

                            <div className="paymentMethodSelect">
                                <input type="radio" value="Visa/Master" id="visa/master" name="paymentMethod"
                                    onClick={(e) => this.paymentMethod(e)} className="paymentMethodRadio"/>
                                <span className="paymentMethodSelectSpan">Visa Master</span>
                            </div>
                            
                            <div className="paymentMethodSelect">
                                <input type="radio" value="E-Wallet" id="Ewallet" name="paymentMethod"
                                    onClick={(e) => this.paymentMethod(e)} className="paymentMethodRadio" />
                                <span className="paymentMethodSelectSpan">E-Wallet</span>
                            </div>

                            <div className="paymentMethodSelect">
                                <input type="radio" value="Online Banking" id="onlineBanking" name="paymentMethod"
                                    onClick={(e) => this.paymentMethod(e)} className="paymentMethodRadio" />
                                <span className="paymentMethodSelectSpan">Online Banking</span>
                            </div>
                        </div>
                    
                    </Card>
                    </div>
                    

                    <br />
                
                    <div className="wrapper">
                  
                        <footer className="checkoutFooter1">
                            <div className="billing">
                                <Card>
                                    <div className="billDiv">
                                        <span className="billingTitle1">Total Items: </span>
                                        <span className="billCount1">{this.props.itemCount1}</span>
                                    </div>

                                    <div className="billDiv">
                                        <span className="billingTitle1">Subtotal: </span>
                                        <span className="billCount1">RM {this.props.subtotal1}.00</span>
                                    </div>

                                    <div className="billDiv">
                                                <span className="billingTitle1">Service Tax (6%): </span>
                                                <span className="billCount1">RM {this.props.servicetax1} </span>
                                    </div>

                                    <div className="billDiv">
                                        <span className="totalTitle">Total: </span>
                                        <span className="totalCount">RM {this.props.total1} </span>
                                    </div>

                                </Card>
                            </div>

                            <div className="footerDiv"> 
                                
                                {this.state.selected != null ? 
                                    <Button className="checkoutBut" onClick={this.checkoutProducts} >  
                                        <span className="checkoutPrice">Confirm Payment </span>
                                    </Button> 
                                : 
                                    <Button className="checkoutBut1" >  
                                        <span className="checkoutPrice">Confirm Payment </span>
                                    </Button> 
                                }

                            </div>
                        </footer>
                    </div>

                </div>

            </div>
        </div>  
        );
    };
}

const mapStateToProps = state => {
    const checkoutItems = state.productsReducer.checkoutItems;
    const tableDetails = state.productsReducer.tableDetails;
    const subtotal1 = state.productsReducer.subtotal1;
    const itemCount1 = state.productsReducer.itemCount1;
    const servicetax1 = state.productsReducer.servicetax1;
    const total1 = state.productsReducer.total1;
    return {
        checkoutItems,
        tableDetails,        
        subtotal1,
        itemCount1,
        servicetax1,
        total1,
    }
  };      
  
const mapDispatchToProps = {
    setSelectedTable,
};


export default connect(mapStateToProps, mapDispatchToProps)(Payment);