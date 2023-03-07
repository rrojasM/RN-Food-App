import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import useViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigation/ClientStackNavigator';
import ClientProductItem from './Item';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientProductListScreen'> { };

const ClientProductListScreen = ({ navigation, route }: Props) => {
    const { products, getProducts } = useViewModel();
    const { id_category } = route.params;

    useEffect(() => {
        getProducts(id_category);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => <ClientProductItem product={item} navigation={navigation} />}
            />
        </View>
    )
}

export default ClientProductListScreen;