import React from 'react';

import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchProducts } from '../actions/SimpleActions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

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
        // localStorage.clear();
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
        <div>
            <div className="wrapper">
            {/* Sushi Section */}
            <h3>Sushi </h3>
                {sushi.map(item =>
                    <Card key={item.prod_id}>
                    <Card.Img src={item.prod_image} alt={item.prod_name} style={{ width:'100%', height:'220px'}} />
                    <Card.Body>
                    <Card.Title>
                        <h4 style={{ display: 'inline' }}>{item.prod_name}</h4>

                    </Card.Title>
                        <p className="cartdesc" >{item.prod_description}</p>

                        <h4 style={{ display: 'inline'}}>RM {item.prod_price}.00</h4>

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

            <div>
            {/* Roll Section */}
            <h3>Maki/Roll </h3>
                {roll.map(item =>
                <Card key={item.prod_id} >
                <Card.Img src={item.prod_image} alt={item.prod_name} style={{ width:'100%', height:'220px'}} />
                <Card.Body>
                <Card.Title>
                    <h4 style={{ display: 'inline' }}>{item.prod_name}</h4>

                </Card.Title>
                    <p className="cartdesc" >{item.prod_description}</p>

                    <h4 style={{ display: 'inline'}}>RM {item.prod_price}.00</h4>
    
                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                        state: {productID: item.prod_id, price: item.prod_price,
                            image: item.prod_image, name: item.prod_name} }} 
                            className="addbut btn btn-primary" >
                        <span className="addspan" >+</span>
                    </Link>
                </Card.Body>
                </Card>
                )}
            </div>

            <div>
            {/* handroll Section */}
            <h3>Temaki/Handroll </h3>
                {handroll.map(item =>
                <Card key={item.prod_id} >
                <Card.Img src={item.prod_image} alt={item.prod_name} style={{ width:'100%', height:'220px'}} />
                <Card.Body>
                <Card.Title>
                    <h4 style={{ display: 'inline' }}>{item.prod_name}</h4>

                </Card.Title>
                    <p className="cartdesc" >{item.prod_description}</p>

                    <h4 style={{ display: 'inline'}}>RM {item.prod_price}.00</h4>

                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                        state: {productID: item.prod_id, price: item.prod_price,
                            image: item.prod_image, name: item.prod_name} }} 
                            className="addbut btn btn-primary" >
                        <span className="addspan" >+</span>
                    </Link>

                </Card.Body>
                </Card>
                )}
            </div>

            <div>
            {/* Noodles Section */}
            <h3>Ramen/Noodles </h3>
                {noodles.map(item =>
                <Card key={item.prod_id} >
                <Card.Img src={item.prod_image} alt={item.prod_name} style={{ width:'100%', height:'220px'}} />
                <Card.Body>
                <Card.Title>
                    <h4 style={{ display: 'inline' }}>{item.prod_name}</h4>

                </Card.Title>
                    <p className="cartdesc" >{item.prod_description}</p>

                    <h4 style={{ display: 'inline'}}>RM {item.prod_price}.00</h4>
                    
                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                        state: {productID: item.prod_id, price: item.prod_price, 
                            image: item.prod_image, name: item.prod_name} }} 
                            className="addbut btn btn-primary" >
                        <span className="addspan" >+</span>
                    </Link>

                </Card.Body>
                </Card>
                )}
            </div>

            <div style={{ marginBottom: '55px'}}>
            {/* Rice Section */}
            <h3>Don/Rice </h3>
                {rice.map(item =>
                <Card key={item.prod_id} >
                <Card.Img src={item.prod_image} alt={item.prod_name} style={{ width:'100%', height:'220px'}} />
                <Card.Body>
                <Card.Title>
                    <h4 style={{ display: 'inline' }}>{item.prod_name}</h4>

                </Card.Title>
                    <p className="cartdesc" >{item.prod_description}</p>

                    <h4 style={{ display: 'inline'}}>RM {item.prod_price}.00</h4>
                    
                    <Link to={{pathname: '/cart', search: '?id=' + item.prod_id.toString(), 
                        state: {productID: item.prod_id, price: item.prod_price, 
                            image: item.prod_image, name: item.prod_name} }} 
                            className="addbut btn btn-primary" >
                        <span className="addspan" >+</span>
                    </Link>
                </Card.Body>
                </Card>
                )}
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
