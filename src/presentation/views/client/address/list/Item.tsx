import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Address } from '../../../../../domain/entities/Address';
import { RadioButton } from 'react-native-paper';

interface Props {
    address: Address,
    checked: string,
    changeRadioValue: (address: Address) => void
}

const AddressItem = ({ address, checked, changeRadioValue }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <RadioButton
                    //color='gray'
                    value={address.id}
                    status={checked === address.id ? 'checked' : 'unchecked'}
                    onPress={() => changeRadioValue(address)}
                />
                <View style={styles.infoAddress}>
                    <Text style={styles.address}>{address.address}</Text>
                    <Text style={styles.location}>{address.location}</Text>
                </View>
            </View>
            <View style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        top: 10
    },
    info: {
        flexDirection: 'row'
    },
    divider: {
        width: '100%',
        height: 1.5,
        backgroundColor: '#f2f2f2',
        marginTop: 10
    },
    address: {
        fontWeight: 'bold',
        textAlign: 'justify',
        fontSize: 14,

    },
    location: {
        fontSize: 12,
        textAlign: 'justify'

    },
    infoAddress: {
        marginLeft: 5
    }
});

export default AddressItem;
