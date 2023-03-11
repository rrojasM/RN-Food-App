import React, { useState, useEffect, useContext } from 'react'
import { GetAddressByUserUseCase } from '../../../../../domain/useCases/address/GetAdressByUser';
import { Address } from '../../../../../domain/entities/Address';
import { UserContext } from '../../../../context/UserContext';
const CliendAddressListViewModel = () => {

    const [address, setAddress] = useState<Address[]>([]);
    const { user, saveUserSession, getUserSession } = useContext(UserContext);
    const [checked, setChecked] = useState('');

    useEffect(() => {
        getAdress();

        if (user.address !== null && user.address !== undefined) {
            changeRadio(user.address!);
            console.log('USUARIO DE SESSION ADDRESS: ', JSON.stringify(user));
        }

    }, [user]);

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
    }
}

export default CliendAddressListViewModel;
