import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import useViewModel from './ViewModel';
import AddressItem from './Item';

const AddressListScreen = () => {
    const { address, getAdress, checked, changeRadio } = useViewModel();

    /*     useEffect(() => {
            getAdress();
        }, []); */

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={address}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AddressItem address={item} checked={checked} changeRadioValue={changeRadio} />}
            />
        </View>
    )
}

export default AddressListScreen;