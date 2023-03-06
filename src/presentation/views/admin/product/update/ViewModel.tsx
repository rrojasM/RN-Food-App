import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryCase } from '../../../../../domain/useCases/category/CreateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';
import { Category } from '../../../../../domain/entities/Category';
import { ProductContext } from '../../../../context/ProductContext';
import { Product } from '../../../../../domain/entities/Product';

const UpdateProductViewModel = (product: Product, category: Category) => {
    const [values, setValues] = useState(product);
    console.log('PRODUCT: ', JSON.stringify(product));

    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState<any>();
    const [file2, setFile2] = useState<any>();
    const [file3, setFile3] = useState<any>();

    const { create } = useContext(ProductContext);


    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const createProduct = async () => {

        let files = [];
        files.push(file1);
        files.push(file2);
        files.push(file3);

        setLoading(true);
        const res = await create(values, files);
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

    /* const takePhoto = async () => {

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
    } */

    const pickImage = async (numberImage: number) => {
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {

            if (numberImage === 1) {
                //@ts-ignore
                onChange('image1', result.uri);
                //@ts-ignore
                setFile1(result);
            } else if (numberImage === 2) {
                //@ts-ignore
                onChange('image2', result.uri);
                //@ts-ignore
                setFile2(result);
            } else if (numberImage === 3) {
                //@ts-ignore
                onChange('image3', result.uri);
                //@ts-ignore
                setFile3(result);
            }
        }
    }

    const resetForm = async () => {
        setValues({
            name: '',
            description: '',
            price: 0,
            image1: '',
            image2: '',
            image3: '',
            id_category: '',
        })
    }

    return {
        ...values,
        onChange,
        //takePhoto,
        pickImage,
        loading,
        resMessage,
        //createCategory
        createProduct
    }
}


export default UpdateProductViewModel;
