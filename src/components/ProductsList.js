import React from 'react';
import SideNav from './sideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Nav } from 'react-bootstrap';
import { fetchProducts } from '../actions/SimpleActions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import './css/index.css'

class ProductsList extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {
            data: [],
            redirect: false,
            id: ''
        }

    }

    componentDidMount() {
        this.props.fetchProducts();
        // localStorage.clear('table');
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        let noodles = products.filter(datas => datas.prod_type === 'Noodles')
        let rice = products.filter(datas => datas.prod_type === 'Rice')
        let sushi = products.filter(datas => datas.prod_type === 'Sushi')
        let roll = products.filter(datas => datas.prod_type === 'Roll')
        let handroll = products.filter(datas => datas.prod_type === 'Handroll')

        return (
        
        <div className="container-row">

            <SideNav />
                        
            <div className="productsDiv">
                {/* Sushi Section */}
                <h4 id="sushi" className="typeTitle">Sushi </h4>
                {sushi.map(item =>
                    <Card key={item.prod_id} >                        
                    <Card.Body>
                        <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>

                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <h5 className="homeItemTitle">{item.prod_name}</h5>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                </div>
                            </div>
                        </div>

                        <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                                className="addbut btn btn-primary" >

                            <span className="addspan"  >+</span>
                        </Link>

                    </Card.Body>
                    </Card>
                )}

                {/* Roll Section */}
                <h3 id="roll">Maki / Roll </h3>
                {roll.map(item =>
                    <Card key={item.prod_id}>                        
                    <Card.Body>
                        <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>

                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <h4 className="homeItemTitle">{item.prod_name}</h4>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                </div>
                            </div>
                        </div>

                        <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                                className="addbut btn btn-primary" >

                            <span className="addspan"  >+</span>
                        </Link>

                    </Card.Body>
                    </Card>
                )}

                 {/* handroll Section */}
                <h3 id="handroll">Temaki / Handroll </h3>
                {handroll.map(item =>
                    <Card key={item.prod_id}>                        
                    <Card.Body>
                        <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>

                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <h4 className="homeItemTitle">{item.prod_name}</h4>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                </div>
                            </div>
                        </div>

                        <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                                className="addbut btn btn-primary" >

                            <span className="addspan"  >+</span>
                        </Link>

                    </Card.Body>
                    </Card>
                )}

                {/* Noodles Section */}
                <h3 id="ramen">Ramen / Noodles </h3>
                {noodles.map(item =>
                    <Card key={item.prod_id} >                        
                    <Card.Body>
                        <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>

                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <h4 className="homeItemTitle">{item.prod_name}</h4>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                </div>
                            </div>
                        </div>

                        <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                                className="addbut btn btn-primary" >

                            <span className="addspan"  >+</span>
                        </Link>

                    </Card.Body>
                    </Card>
                )}

                <div style={{ marginBottom: '55px'}}>
                {/* Rice Section */}
                <h3 id="rice">Don / Rice </h3>
                    {rice.map(item =>
                    <Card key={item.prod_id} style={{width: '100%'}}>                        
                    <Card.Body>
                        <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>

                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <h4 className="homeItemTitle">{item.prod_name}</h4>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                </div>
                            </div>
                        </div>

                        <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                                className="addbut btn btn-primary" >

                            <span className="addspan"  >+</span>
                        </Link>

                    </Card.Body>
                    </Card>
                    )}
                </div>  
            
            </div>
        </div>
    )} 
}  


const mapStateToProps = state => {
    const products = state.productsReducer.items;
    const loading = state.productsReducer.loading;
    const error = state.productsReducer.error;
    const cartItems = state.productsReducer.cartItems;
    return {
        products,
        loading,
        error,
        cartItems,
    }
  };      
  
const mapDispatchToProps = {
    fetchProducts,
};

export default (connect(mapStateToProps, mapDispatchToProps)(ProductsList));
