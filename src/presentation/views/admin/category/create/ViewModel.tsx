import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryCase } from '../../../../../domain/useCases/category/CreateCategory';

const CategoryViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        image: '',
    });
    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>();

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const createCategory = async () => {
        setLoading(true);
        const res = await CreateCategoryCase(values, file);
        if (res.success) {
            setResMessage(res.message);
            setLoading(false);
            resetForm();
        } else {
            setResMessage(res.message);
            setLoading(false);
            resetForm();
        }

    }

    const takePhoto = async () => {

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        });

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

    const resetForm = async () => {
        setValues({
            name: '',
            description: '',
            image: '',
        })
    }

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        loading,
        resMessage,
        createCategory
    }
}


export default CategoryViewModel;
