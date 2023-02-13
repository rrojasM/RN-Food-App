import React, { useState } from 'react';
import { ApiDelivery } from '../../../../data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../../domain/useCases/auth/RegisterAuth';
import { PermissionsAndroid } from 'react-native';
import { RegisterWithImageAuthUseCase } from '../../../../domain/useCases/auth/RegisterWithImageAuth';
import * as ImagePicker from 'expo-image-picker';
import { saveUserLocalUseCase } from '../../../../domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';

const ProfileUpdateViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>();
    const { user, getUserSession } = useUserLocal();

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'App Delivery',
                    message: 'App Delivery REQUIERE PERMISOS DE TU CAMARA!',
                    buttonNegative: 'CANCELAR',
                    buttonPositive: 'ACEPTAR'
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('PERMISOS OTORGADOS CORRECTAMENTE');
            } else {
                console.log('PERMISOS DENEGADOS');
            }
        } catch (error) {
            console.log('ERROR AQUI ====> ', error);
        }
    }

    const takePhoto = async () => {
        await requestCameraPermission();

        /* let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        }); */

        const result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {
            //@ts-ignore
            onChange('image', result.uri);
            setFile(result);
        }
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            //@ts-ignore
            onChange('image', result.uri);
            //@ts-ignore
            setFile(result);
        }
    }

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }
    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
        setValues({ ...values, name, lastname, phone });
    }

    const register = async () => {
        if (isValidForm()) {
            setLoading(true);
            //const response = await RegisterAuthUseCase(values);
            //console.log('THIS IS THE IMAGE: ', Object.values(file));
            const response = await RegisterWithImageAuthUseCase(values, file!);
            console.log('RESULT', JSON.stringify(response));
            setLoading(false);

            if (response.success) {
                await saveUserLocalUseCase(response.data);
                getUserSession();
            } else {
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.name === '') {
            setErrorMessage('Ingresa tu nombre')
            return false
        }
        if (values.lastname === '') {
            setErrorMessage('Ingresa tus apellidos')
            return false
        }
        if (values.phone === '') {
            setErrorMessage('Ingresa tu telefono')
            return false
        }
        if (values.image === '') {
            setErrorMessage('Selecciona una Imagen')
            return false
        }
        return true;
    }

    return {
        ...values,
        onChange,
        register,
        errorMessage,
        pickImage,
        takePhoto,
        user,
        getUserSession,
        loading,
        onChangeInfoUpdate
    }
}


export default ProfileUpdateViewModel;

