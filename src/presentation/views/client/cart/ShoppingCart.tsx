import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import useViewModel from './ViewModel';
import { CartItem } from './Item';
import Button from '../../../components/Button';
import { currencyFormat } from '../../../utils/CurrencyFormat';
import { ClientStackParamList } from '../../../navigation/ClientStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientShoppingCartScreen'> { };

const ClientShoppingCartScreen = ({ navigation, route }: Props) => {
    const { shoppingProducts, total, addItem, restItem, deleteItem } = useViewModel();

    return (
        <View style={styles.container}>
            <FlatList
                data={shoppingProducts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem product={item} addItem={addItem} removeItem={restItem} deleteItem={deleteItem} />}
            />
            <View style={styles.containerTotal}>
                <View style={styles.totalInfo}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text>{currencyFormat(total)}</Text>
                </View>
                <View style={styles.buttonAdd}>
                    <Button text='CONFIRMAR ORDEN' onPress={() => navigation.navigate(('AddressListScreen'))} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerTotal: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    totalInfo: {
        alignItems: 'center'
    },
    buttonAdd: {
        width: '50%'
    }
});

export default ClientShoppingCartScreen