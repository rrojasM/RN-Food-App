import React from 'react';
import { OrderRepositoryImpl } from "../../../data/repositories/OrderRepository";
import { Order } from '../../entities/Order';
const { create } = new OrderRepositoryImpl();

const CreateOrderUseCase = async (order: Order) => {
    return await create(order);
}

export default CreateOrderUseCase;
