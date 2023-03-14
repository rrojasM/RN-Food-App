import React, { useState, useEffect, useContext } from 'react'
import { GetAddressByUserUseCase } from '../../../../../domain/useCases/address/GetAdressByUser';
import { Address } from '../../../../../domain/entities/Address';
import { UserContext } from '../../../../context/UserContext';
import CreateOrderUseCase from '../../../../../domain/useCases/order/CreateOrder';
import { Order } from '../../../../../domain/entities/Order';
import { ShoppingContext } from '../../../../context/ShoppingContext';


const CliendAddressListViewModel = () => {

    const [address, setAddress] = useState<Address[]>([]);
    const { user, saveUserSession, getUserSession } = useContext(UserContext);
    const { shoppingProducts } = useContext(ShoppingContext)
    const [checked, setChecked] = useState('');
    const [resMessage, setResMessage] = useState("")

    useEffect(() => {
        getAdress();

        if (user.address !== null && user.address !== undefined) {
            changeRadio(user.address!);
            console.log('USUARIO DE SESSION ADDRESS: ', JSON.stringify(user));
        }

    }, [user]);

    const createOrder = async () => {
        const order: Order = {
            id_client: user.id!,
            id_address: user.address?.id!,
            products: shoppingProducts
        }
        const result = await CreateOrderUseCase(order);
        setResMessage(result.message)
    }

    const getAdress = async () => {
        const res = await GetAddressByUserUseCase(user.id)
        setAddress(res);
    }

    const changeRadio = (address: Address) => {
        setChecked(address.id!);
        user.address = address;
        //ALMACENAMOS LA DIRECCIÓN SELELCCIONADA EN SESION DEL USUARIO
        saveUserSession(user);
    }

    return {
        address,
        getAdress,
        checked,
        changeRadio,
        createOrder,
        resMessage
    }
}

export default CliendAddressListViewModel;
