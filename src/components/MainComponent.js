import React from 'react';
import App from './NewComponent';
import Cart from './cart';
import Checkout from './checkout';

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
            <div>
                <Switch>
                    <Route exact path="/" component={App}>
                        <App />
                    </Route>
                    <Route path="/cart" render={(props) => <Cart {...props} />} >
                    </Route>
                    <Route path="/checkout" component={Checkout}>
                        <Checkout />
                    </Route>
                </Switch>
            </div>
    )};
}

export default connect()(ListofProducts);