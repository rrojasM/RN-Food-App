import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './Styles';
import CustomTextInput from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import Button from '../../../../components/Button';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors } from '../../../../theme/AppTheme';

export const AddressCreateScreen = () => {

    const { address, location, references, onChange, loading, resMessage, saveAddress } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (resMessage !== '') {
            ToastAndroid.show(resMessage, ToastAndroid.LONG);
        }
    }, [resMessage])


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={require('../../../../../assets/map.png')} />
            </View>

            <View style={styles.form}>
                <CustomTextInput
                    placeholder='Nombre Dirección'
                    image={require('../../../../../assets/location_home.png')}
                    keyboardType='default'
                    property='address'
                    value={address}
                    onChangeText={onChange}
                />
                <CustomTextInput
                    placeholder='Localidad'
                    image={require('../../../../../assets/neighborhood.png')}
                    keyboardType='default'
                    property='location'
                    value={location}
                    onChangeText={onChange}
                />
                <CustomTextInput
                    placeholder='Referencias'
                    image={require('../../../../../assets/ref_point.png')}
                    keyboardType='default'
                    property='references'
                    value={references}
                    onChangeText={onChange}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text='GUARDAR DIRECCIÓN'
                    onPress={() => saveAddress()}
                />
            </View>
            {
                loading && <ActivityIndicator style={styles.loading} size="large" color={MyColors.primary} />
            }
        </View>
    )
}
