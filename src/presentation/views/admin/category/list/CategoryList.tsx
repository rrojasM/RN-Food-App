import React, { useState, useEffect } from 'react';
import { FlatList, Text, ToastAndroid, View } from 'react-native';
import useViewModel from './ViewModel';
import CategoryItem from './Item';

const AdminCategoryListScreen = () => {
    const { categories, getAll, responseMessage, deleteCategory } = useViewModel();

    useEffect(() => {
        if (responseMessage !== '') {
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage]);


    return (
        <View style={{ backgroundColor: 'white' }}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CategoryItem category={item} remove={deleteCategory} />}
            />
        </View>
    )
}

export default AdminCategoryListScreen;
