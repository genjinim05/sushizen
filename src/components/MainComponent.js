import React from 'react';
import App from './MainPage/NewComponent';
import Cart from './MainPage/cart';
import Checkout from './checkout/checkout';
import Tables from './MainPage/tables';
import Payment from './checkout/Payment';

import { connect } from 'react-redux';
import {  Switch, Route } from 'react-router-dom';

class ListofProducts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };  
    }


    render() {
        return (
                <Switch>
                    <Route exact path="/" >
                        <Tables />
                    </Route>
                    <Route path="/products" render={(props) => <App {...props} /> }>
                    </Route>
                    <Route path="/cart" render={(props) => <Cart {...props} />} >
                    </Route>
                    <Route path="/checkout" component={Checkout}>
                        <Checkout />
                    </Route>
                    <Route path="/payment" component={Payment}>
                        <Payment />
                    </Route>
                </Switch>
    )};
}

export default connect()(ListofProducts);