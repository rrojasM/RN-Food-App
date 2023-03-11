import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import styles from './Styles';
import CustomTextInput from '../../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import Button from '../../../../components/Button';
import { ModalPickImage } from '../../../../components/ModalPickImage';
import { MyColors } from '../../../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigation/ClientStackNavigator';

interface Props extends StackScreenProps<ClientStackParamList, 'AddressCreateScreen'> { };

export const AddressCreateScreen = ({ navigation, route }: Props) => {

    const { address, location, refPoint, onChange, onChangeRefPoint, loading, resMessage, saveAddress } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (route.params?.refPoint) {
            onChangeRefPoint(route.params?.refPoint, route.params?.latitude, route.params?.longitude);
        }
    }, [route.params?.refPoint]);



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
                    placeholder='Dirección'
                    image={require('../../../../../assets/location.png')}
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
                <TouchableOpacity onPress={() => navigation.navigate('ClientAddressMapScreen')}>
                    <CustomTextInput
                        placeholder='Referencias'
                        image={require('../../../../../assets/ref_point.png')}
                        keyboardType='default'
                        property='refPoint'
                        value={refPoint}
                        onChangeText={onChange}
                        editable={false}
                    />
                </TouchableOpacity>
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
