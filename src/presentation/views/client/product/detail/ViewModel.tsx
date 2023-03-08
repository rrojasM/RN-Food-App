import React, { useState, useEffect, useContext } from 'react';
import { Product } from '../../../../../domain/entities/Product';
import { ShoppingContext } from '../../../../context/ShoppingContext';
import { ToastAndroid } from 'react-native';

const ProductDetailViewModel = (product: Product) => {
    const productImages: string[] = [
        product.image1,
        product.image2,
        product.image3
    ];

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0.0);

    const { shoppingProducts, saveItem } = useContext(ShoppingContext);

    console.log('SHOPPING PRODUCTS LIST: ', JSON.stringify(shoppingProducts));

    useEffect(() => {
        const index = shoppingProducts.findIndex((p) => p.id === product.id);
        if (index !== -1) { //PRODUCTO EXISTE EN EL CARRITO
            setQuantity(shoppingProducts[index].quantity);
        }

    }, [shoppingProducts]);

    useEffect(() => {
        setPrice(product.price * quantity);
    }, [quantity]);

    const addCart = () => {
        if (quantity > 0) {
            product.quantity = quantity;
            saveItem(product);
            ToastAndroid.show('Producto agregado al Carrito', ToastAndroid.LONG);
        }
    }

    const addItem = () => {
        setQuantity(quantity + 1);
    }
    const removeItem = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return {
        productImages,
        addItem,
        removeItem,
        quantity,
        price,
        shoppingProducts,
        addCart
    }
}

export default ProductDetailViewModel;
