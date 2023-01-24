import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { LoginAuthCase } from '../../../domain/useCases/auth/LoginAuth';
import { saveUserLocalUseCase } from '../../../domain/useCases/userLocal/SaveUserLocal';
import { getUserLocalUseCase } from '../../../domain/useCases/userLocal/GetUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const { user, getUserSession } = useUserLocal();
    console.log('USUARIO DE SESSION: ', JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const login = async () => {
        if (isValidForm()) {
            const res = await LoginAuthCase(values.email, values.password);
            console.log('RESPONSE LOGIN: ', JSON.stringify(res));
            //Alert.alert("Success", res.message);
            if (!res.success) {
                setErrorMessage(res.message);
            } else {
                await saveUserLocalUseCase(res.data);
                getUserSession();
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.email === '') {
            setErrorMessage('Ingresa tu correo');
            return false
        }

        if (values.password === '') {
            setErrorMessage('Ingresa tu contraseña');
            return false
        }
        return true
    }

    return {
        user,
        ...values,
        onChange,
        login,
        errorMessage
    }
}


export default HomeViewModel;



