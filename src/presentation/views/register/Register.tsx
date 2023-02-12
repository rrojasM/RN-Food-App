import React, { useState, useEffect } from 'react';
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';
import { ModalPickImage } from '../../components/ModalPickImage';
import { RootStackParamList } from '../../../../App';
import { StackScreenProps } from '@react-navigation/stack';
import { MyColors } from '../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };

const Register = ({ navigation, route }: Props) => {
    const { name, lastname, email, image, phone, password, confirmPassword, errorMessage,
        onChange, register, pickImage, takePhoto, user, loading } = useViewModel();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (errorMessage != '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined) {
            navigation.replace('ProfileInfoScreen');
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <Image style={styles.imageBack} source={require('../../../assets/chef.jpg')} />
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.logoContainer} onPress={() => setModalVisible(true)}>
                    {
                        image == ''
                            ? <Image style={styles.logoImage} source={require('../../../assets/user_image.png')} />
                            : <Image style={styles.logoImage} source={{ uri: image }} />
                    }

                    <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.formLogin}>
                <Text style={styles.formText}>REGISTRARSE</Text>

                <CustomTextInput
                    image={require('../../../assets/user.png')}
                    placeholder='Nombres'
                    keyboardType='default'
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />
                <CustomTextInput
                    image={require('../../../assets/my_user.png')}
                    placeholder='Apellidos'
                    keyboardType='default'
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />
                <CustomTextInput
                    image={require('../../../assets/email.png')}
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />
                <CustomTextInput
                    image={require('../../../assets/email.png')}
                    placeholder='Telefono'
                    keyboardType='number-pad'
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />
                <CustomTextInput
                    image={require('../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}

                />
                <CustomTextInput
                    image={require('../../../assets/confirm_password.png')}
                    placeholder='Confirmar contraseña'
                    keyboardType='default'
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />
                <View style={{ margin: 20 }}>
                    <Button text='CONFIRMAR' onPress={() => register()} />
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

export default React.memo(Register);;
