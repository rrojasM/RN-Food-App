import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Button from '../../../components/Button';
import CustomTextInput from '../../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
import { ModalPickImage } from '../../../components/ModalPickImage';
import { RootStackParamList } from '../../../../../App';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'ProfileUpdateScreen'> { };

const ProfileUpdateScreen = ({ navigation, route }: Props) => {
    const { user } = route.params;
    const { name, lastname, image, phone, errorMessage,
        onChange, onChangeInfoUpdate, update, pickImage, takePhoto, loading, successMessage } = useViewModel(user);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (successMessage != '') {
            ToastAndroid.show(successMessage, ToastAndroid.LONG);
        }
    }, [successMessage]);

    /*  useEffect(() => {
         onChangeInfoUpdate(user?.name, user?.lastname, user?.lastname);
     }, [user]) */


    return (
        <View style={styles.container}>
            <Image style={styles.imageBack} source={require('../../../../assets/city.jpg')} />
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.logoContainer} onPress={() => setModalVisible(true)}>
                    {
                        image == ''
                            ? <Image style={styles.logoImage} source={{ uri: user?.image }} />
                            : <Image style={styles.logoImage} source={{ uri: image }} />
                    }

                    <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.formLogin}>
                <Text style={styles.formText}>ACTUALIZAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/user.png')}
                    placeholder='Nombres'
                    keyboardType='default'
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />
                <CustomTextInput
                    image={require('../../../../assets/my_user.png')}
                    placeholder='Apellidos'
                    keyboardType='default'
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />

                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Telefono'
                    keyboardType='number-pad'
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />

                <View style={{ margin: 50 }}>
                    <Button text='CONFIRMAR' onPress={() => update()} />
                </View>
            </ScrollView>

            <ModalPickImage
                openGallery={pickImage}
                openCamara={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />
            {
                loading && <ActivityIndicator style={styles.loading} size="large" color={MyColors.primary} />
            }

        </View>
    )
}

export default React.memo(ProfileUpdateScreen);;
