import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { UpdateCategoryCase } from '../../../../../domain/useCases/category/UpdateCategory';
import { UpdateWithImageCategoryCase } from '../../../../../domain/useCases/category/UpdateWithImageCategory';
import { Category } from '../../../../../domain/entities/Category';
import { ResponseAPIDelivery } from '../../../../../data/sources/remote/models/ResponseApiDelivery';
import { CategoryContext } from '../../../../context/CategoryContext';

const CategoryUpdateViewModel = (category: Category) => {
    const [values, setValues] = useState(category);
    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<any>();

    const { update, updateWithImage } = useContext(CategoryContext);


    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const updateCategory = async () => {
        setLoading(true);
        let response = {} as ResponseAPIDelivery;
        if (values.image?.includes('https://')) {
            response = await update(values);
        } else {
            response = await updateWithImage(values, file);
        }

        setLoading(false);
        setResMessage(response.message);
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

    return {
        ...values,
        onChange,
        takePhoto,
        pickImage,
        loading,
        resMessage,
        updateCategory
    }
}


export default CategoryUpdateViewModel;
