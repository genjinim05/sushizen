import React, { createContext, useEffect, useState } from 'react';
import { fetchProducts } from './SimpleActions';
import { connect } from "react-redux";


export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    // useEffect(() => {
    //     props.fetchProducts();
    //     productsData = props.products;
    // }, []);   
    
    // const [products] = useState(productsData);

    return ( 
        <ProductsContext.Provider value={{}} >
            { children }
        </ProductsContext.Provider>
     );
}


const mapStateToProps = state => {
    const products = state.productsReducer.items;
    return {
        products
    }
}
 
const mapDispatchToProps = {
    fetchProducts
}

export default (connect(mapStateToProps,mapDispatchToProps)(ProductsContextProvider));