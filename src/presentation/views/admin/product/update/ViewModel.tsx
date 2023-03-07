import React, { useState, useEffect, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { CreateCategoryCase } from '../../../../../domain/useCases/category/CreateCategory';
import { CategoryContext } from '../../../../context/CategoryContext';
import { Category } from '../../../../../domain/entities/Category';
import { ProductContext } from '../../../../context/ProductContext';
import { Product } from '../../../../../domain/entities/Product';
import { ResponseAPIDelivery } from '../../../../../data/sources/remote/models/ResponseApiDelivery';

const UpdateProductViewModel = (product: Product, category: Category) => {
    const [values, setValues] = useState(product);
    console.log('PRODUCT: ', JSON.stringify(product));

    const [resMessage, setResMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState<any>();
    const [file2, setFile2] = useState<any>();
    const [file3, setFile3] = useState<any>();

    const { update, updateWithImage } = useContext(ProductContext);


    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }

    const updateProduct = async () => {

        let files = [];
        files.push(file1);
        files.push(file2);
        files.push(file3);

        setLoading(true);
        let res = {} as ResponseAPIDelivery;
        if (values.image1.includes('https://') && values.image2.includes('https://') && values.image3.includes('https://')) {
            res = await update(values);
            if (res.success) {
                setResMessage(res.message);
                setLoading(false);

            } else {
                setResMessage(res.message);
                setLoading(false);

            }
        } else {
            res = await updateWithImage(values, files);
            if (res.success) {
                setResMessage(res.message);
                setLoading(false);

            } else {
                setResMessage(res.message);
                setLoading(false);

            }
        }
    }

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

    return {
        ...values,
        onChange,
        pickImage,
        loading,
        resMessage,
        updateProduct
    }
}


export default UpdateProductViewModel;
