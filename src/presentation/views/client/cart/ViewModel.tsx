import React, { useState, useEffect, useContext } from 'react';
import { ShoppingContext } from '../../../context/ShoppingContext';
import { Product } from '../../../../domain/entities/Product';

const CartViewModel = () => {
    const { shoppingProducts, saveItem, deleteItem, total, getTotal } = useContext(ShoppingContext);

    const addItem = async (product: Product) => {
        product.quantity = product.quantity + 1;
        await saveItem(product);
    }

    const restItem = async (product: Product) => {
        if (product.quantity > 1) {
            product.quantity = product.quantity + 1;
            await saveItem(product);
        }
    }


    return {
        shoppingProducts,
        total,
        addItem,
        restItem,
        deleteItem
    }
}

export default CartViewModel;
