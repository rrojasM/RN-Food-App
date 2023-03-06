import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, FlatList, ToastAndroid } from 'react-native';
import { ProductStackParamList } from '../../../../navigation/AdminProductNavigator';
import useViewModel from './ViewModel';
import ProductItem from './Item';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'> { };

export const AdminProductListScreen = ({ navigation, route }: Props) => {

    const { category } = route.params;
    const { products, getProducts, deleteProduct, message } = useViewModel();

    useEffect(() => {
        getProducts(category.id);
    }, []);

    useEffect(() => {
        if (message !== "") {
            ToastAndroid.show(message, ToastAndroid.LONG);
        }
    }, [message])


    return (
        <View style={{ backgroundColor: 'white' }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ProductItem product={item} category={category} remove={deleteProduct} />}
            />
        </View>
    )
}
