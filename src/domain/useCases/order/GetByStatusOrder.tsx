import React from 'react';
import { OrderRepositoryImpl } from "../../../data/repositories/OrderRepository";
import { Order } from '../../entities/Order';
const { getByStatus } = new OrderRepositoryImpl();

const GetByStatusOrderUseCase = async (status: string) => {
    return await getByStatus(status);
}

export default GetByStatusOrderUseCase;
