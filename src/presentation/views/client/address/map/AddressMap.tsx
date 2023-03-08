import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ToastAndroid, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import useViewModel from "./ViewModel";
import Button from '../../../../components/Button';

const ClientAddressMapScreen = () => {
    const { messagePermissions, position, mapRef, name, onRegionChange } = useViewModel();

    useEffect(() => {
        if (messagePermissions != '') {
            ToastAndroid.show(messagePermissions, ToastAndroid.LONG);
        }
    }, [messagePermissions]);

    return (
        <View style={styles.container}>
            <MapView style={{ height: '100%', width: '100%' }}
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                onRegionChangeComplete={(region) => {
                    onRegionChange(region.latitude, region.longitude);
                }}
            />

            <Image style={styles.icon} source={require('../../../../../assets/location.png')} />

            <View style={styles.refPoint}>
                <Text style={styles.refText}>{name}</Text>
            </View>

            <View style={styles.buttonRef}>
                <Button text="SELECCIONA TU UBICACIÓN" onPress={() => { }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        position: 'absolute'
    },
    refPoint: {
        position: 'absolute',
        backgroundColor: '#d4d4d4',
        width: '80%',
        paddingVertical: 4,
        borderRadius: 10,
        top: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refText: {
        textAlign: 'justify',
        textTransform: 'uppercase',
        fontWeight: '100',
        fontSize: 13
    },
    buttonRef: {
        position: 'absolute',
        bottom: 40,
        width: '70%'
    }
})

export default ClientAddressMapScreen;