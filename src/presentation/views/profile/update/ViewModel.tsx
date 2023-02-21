import React, { useState, useContext } from 'react';
import { ApiDelivery } from '../../../../data/sources/remote/api/ApiDelivery';
import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { saveUserLocalUseCase } from '../../../../domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UpdateUser } from '../../../../domain/useCases/user/UpdateUser';
import { UpdateUserWithImage } from '../../../../domain/useCases/user/UpdateUserWithImage';
import { User } from '../../../../domain/entities/User';
import { ResponseAPIDelivery } from '../../../../data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [values, setValues] = useState(user);

    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>();
    const { getUserSession } = useUserLocal();
    const { saveUserSession } = useContext(UserContext);

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

    const update = async () => {
        if (isValidForm()) {
            setLoading(true);
            let response = {} as ResponseAPIDelivery;
            if (values.image?.includes('https://')) {
                response = await UpdateUser(values);
            } else {
                response = await UpdateUserWithImage(values, file!);

            }
            console.log('RESULT', JSON.stringify(response));
            setLoading(false);
            if (response.success) {
                //await saveUserLocalUseCase(response.data);
                //getUserSession();
                saveUserSession(response.data);
                setSuccessMessage('Datos actualizados correctamente!')

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

        return true;
    }

    return {
        ...values,
        onChange,
        update,
        errorMessage,
        successMessage,
        pickImage,
        takePhoto,
        user,
        getUserSession,
        loading,
        onChangeInfoUpdate
    }
}


export default ProfileUpdateViewModel;

