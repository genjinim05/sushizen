import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Spinner } from 'react-bootstrap';
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
    }

    render() {
        const { error, loading, products } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className="justify-content-center align-items-center">
                
                <div className="col-sm-9 justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    Loading...
                    </div>
                </div>
        }
        let noodles = products.filter(datas => datas.prod_type === 'Noodles')
        let rice = products.filter(datas => datas.prod_type === 'Rice')
        let sushi = products.filter(datas => datas.prod_type === 'Sushi')
        let roll = products.filter(datas => datas.prod_type === 'Roll')
        let handroll = products.filter(datas => datas.prod_type === 'Handroll')

        return (
        
            <div className="productsDiv" >
        {/* ------------------------------------Sushi Section-------------------------------------------------------------*/}
                <Card >
                <h4 className="typeTitle"><span id="sushi"></span>Sushi </h4>

                {sushi.map(item =>
                
                <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                            key={item.prod_id}>

                    <ol>
                        <li >
                            <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>
                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <span className="homeItemTitle">{item.prod_name}</span>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                </div>
                            </div>
                            </div>
                            <hr />
                        </li>
                    </ol>
                </Link>

                )}
                </Card>

        {/* ------------------------------------Roll Section-------------------------------------------------------------*/}

                <Card className="cardDiv" >
                <h4 className="typeTitle"><span id="maki"></span>Maki / Roll </h4>

                {roll.map(item =>
                
                <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                            key={item.prod_id}>

                    <ol>
                        <li >
                            <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>
                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <span className="homeItemTitle">{item.prod_name}</span>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                </div>
                            </div>
                            </div>
                            <hr />
                        </li>
                    </ol>
                </Link>

                )}
                </Card>

        {/* ------------------------------------Handroll Section-------------------------------------------------------------*/}


                <Card className="cardDiv">
                <h4 className="typeTitle"><span id="temaki"></span>Temaki / HandRoll </h4>

                {handroll.map(item =>
                    
                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                                state: {productID: item.prod_id, price: item.prod_price, 
                                    image: item.prod_image, name: item.prod_name} }} 
                                key={item.prod_id}>

                        <ol>
                            <li >
                                <div className="container-row">

                                <div className="homeImageContainer">
                                    <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>
                                </div> 

                                <div className="homeItemContainer">
                                    <div>
                                        <span className="homeItemTitle">{item.prod_name}</span>

                                        <span className="homeItemPrice">{item.prod_price}.00</span>

                                        <p className="homeItemDesc" >{item.prod_description}</p>

                                    </div>
                                </div>
                                </div>
                                <hr />
                            </li>
                        </ol>
                    </Link>

                )}
                </Card>

        {/* ------------------------------------Noodles Section-------------------------------------------------------------*/}

                <Card className="cardDiv">
                <h4 className="typeTitle"><span id="ramen"></span>Ramen / Noodles </h4>

                {noodles.map(item =>
                
                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                            key={item.prod_id}>

                        <ol>
                            <li >
                                <div className="container-row">

                                <div className="homeImageContainer">
                                    <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>
                                </div> 

                                <div className="homeItemContainer">
                                    <div>
                                        <span className="homeItemTitle">{item.prod_name}</span>

                                        <span className="homeItemPrice">{item.prod_price}.00</span>

                                        <p className="homeItemDesc" >{item.prod_description}</p>

                                    </div>
                                </div>
                                </div>
                                <hr />
                            </li>
                        </ol>
                    </Link>

                )}
                </Card>

               

        {/* ------------------------------------Rice Section-------------------------------------------------------------*/}
                
                <div style={{ marginBottom: '55px'}}>

                <Card className="cardDiv" >
                <h4 className="typeTitle"><span id="don"></span>Don / Rice </h4>

                {rice.map(item =>
                
                <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                            state: {productID: item.prod_id, price: item.prod_price, 
                                image: item.prod_image, name: item.prod_name} }} 
                            key={item.prod_id}>

                    <ol>
                        <li >
                            <div className="container-row">

                            <div className="homeImageContainer">
                                <img alt={item.prod_ame} src={item.prod_image} className="homeimg"/>
                            </div> 

                            <div className="homeItemContainer">
                                <div>
                                    <span className="homeItemTitle">{item.prod_name}</span>

                                    <span className="homeItemPrice">{item.prod_price}.00</span>

                                    <p className="homeItemDesc" >{item.prod_description}</p>

                                </div>
                            </div>
                            </div>
                            <hr />
                        </li>
                    </ol>
                </Link>

                )}
                </Card>
                </div>                
            </div>
        )
    } 
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
