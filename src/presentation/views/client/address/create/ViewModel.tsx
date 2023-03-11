import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CategoryContext } from '../../../../context/CategoryContext';
import { CreateAddressUseCase } from '../../../../../domain/useCases/address/CreateAddress';
import { UserContext } from '../../../../context/UserContext';


const AddressViewModel = () => {
    const [values, setValues] = useState({
        address: '',
        location: '',
        refPoint: '',
        lat: 0,
        lng: 0,
        id_user: '',
    });
    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { user, saveUserSession, getUserSession } = useContext(UserContext);

    useEffect(() => {
        if (user.id !== '') {
            onChange('id_user', user.id);
        }
    }, [user]);

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const onChangeRefPoint = (refPoint: string, lat: number, lng: number) => {
        setValues({ ...values, refPoint: refPoint, lat: lat, lng: lng });
    }

    const saveAddress = async () => {
        setLoading(true);
        const res = await CreateAddressUseCase(values);
        if (res.success) {
            setResMessage(res.message);
            user.address = values;
            user.address.id = res.data
            await saveUserSession(user);
            getUserSession();
            setLoading(false);
            resetForm();
        } else {
            setResMessage(res.message);
            setLoading(false);
            resetForm();
        }

    }

    const resetForm = async () => {
        setValues({
            address: '',
            location: '',
            refPoint: '',
            lat: 0,
            lng: 0,
            id_user: user.id,
        })
    }

    return {
        ...values,
        onChange,
        onChangeRefPoint,
        loading,
        resMessage,
        saveAddress,
    }
}


export default AddressViewModel;
