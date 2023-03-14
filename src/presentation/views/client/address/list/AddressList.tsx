import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ToastAndroid } from 'react-native';
import useViewModel from './ViewModel';
import AddressItem from './Item';
import Button from '../../../../components/Button';

const AddressListScreen = () => {
    const { address, getAdress, checked, changeRadio, createOrder, resMessage } = useViewModel();

    /*     useEffect(() => {
            getAdress();
        }, []); */

    useEffect(() => {
        if (resMessage !== "") {
            ToastAndroid.show(resMessage, ToastAndroid.LONG);
        }

    }, [resMessage])


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={address}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AddressItem address={item} checked={checked} changeRadioValue={changeRadio} />}
            />
            <View style={{ width: '100%', paddingHorizontal: 20, paddingVertical: 20 }}>
                <Button text='CONTINUAR' onPress={() => createOrder()} />
            </View>
        </View>
    )
}

export default AddressListScreen;