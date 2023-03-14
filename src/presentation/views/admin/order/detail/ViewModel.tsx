import React, { useState, useEffect } from 'react'
import { Order } from '../../../../../domain/entities/Order';
import { GetDeliveryUserUseCase } from '../../../../../domain/useCases/user/GetDeliveryUser';
import { User } from '../../../../../domain/entities/User';

interface DropDawnProps {
    label: string,
    value: string
}

const OrderDetailViewModel = (order: Order) => {
    const [total, setTotal] = useState(0);
    const [deliveries, setDeliveries] = useState<User[]>([]);

    /* PICKER STATE */
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<DropDawnProps[]>([]);

    useEffect(() => {
        if (total === 0) {
            getTotal();
        }
    }, []);

    useEffect(() => {
        setDropDawnItems();
    }, [deliveries])

    const dispatchOrder = () => {
        console.log('REPARTIDOR SELECCIONADO', value);
    }

    const getDeliveries = async () => {
        const result = await GetDeliveryUserUseCase();
        console.log('DELIVERIES DISPONIBLES: ', JSON.stringify(result));

        setDeliveries(result);
    }

    const setDropDawnItems = () => {
        let itemsDelivery: DropDawnProps[] = [];

        deliveries.forEach(d => {
            itemsDelivery.push({
                label: d.name + ' ' + d.lastname,
                value: d.id!
            })
        });

        setItems(itemsDelivery);
    }

    const getTotal = () => {
        let totalProducts = 0;
        order.products.forEach(p => {
            totalProducts = totalProducts + (p.price * p.quantity!);
        });
        setTotal(totalProducts);
    }

    return {
        total,
        getTotal,
        deliveries,
        getDeliveries,
        open,
        value,
        items,
        setOpen,
        setValue,
        setItems,
        dispatchOrder
    }
}

export default OrderDetailViewModel;
