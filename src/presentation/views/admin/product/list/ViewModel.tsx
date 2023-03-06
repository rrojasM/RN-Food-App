import React, { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../../../../context/ProductContext';
import { Product } from '../../../../../domain/entities/Product';

const AdminProductListViewModel = () => {

    const { products, getProducts, remove } = useContext(ProductContext);
    const [message, setMessage] = useState("");

    const deleteProduct = async (product: Product) => {
        const result = await remove(product);
        setMessage(result.message);
    }
    return {
        products,
        getProducts,
        deleteProduct,
        message
    }
}


export default AdminProductListViewModel;
