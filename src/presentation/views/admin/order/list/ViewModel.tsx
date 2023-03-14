import React, { useState, useEffect } from 'react'
import GetByStatusOrderUseCase from '../../../../../domain/useCases/order/GetByStatusOrder';
import { Order } from '../../../../../domain/entities/Order';
const AdminOrderListViewModel = () => {

    const [orders, setOrders] = useState<Order[]>([])

    const getOrders = async (status: string) => {
        const result = await GetByStatusOrderUseCase(status);
        setOrders(result);
        console.log('ORDENES', JSON.stringify(result, null, 3));

    }

    return {
        getOrders,
        orders
    }
}
export default AdminOrderListViewModel;


