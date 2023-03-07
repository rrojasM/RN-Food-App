import React from 'react';
import { ShoppingRepositoryImpl } from "../../../data/repositories/ShoppingRepository";

const { getShopping } = new ShoppingRepositoryImpl();

export const GetShoppingUseCase = async () => {
    return await getShopping();
}
