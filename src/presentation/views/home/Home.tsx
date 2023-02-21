import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import Button from '../../components/Button';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './Styles';


interface Props extends StackScreenProps<RootStackParamList, 'Home'> { };
const Home = ({ navigation, route }: Props) => {

    const { email, password, onChange, login, errorMessage, user } = useViewModel();
    //const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage]);

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined && user?.id !== '') {
            if (user.roles?.length > 1) {
                navigation.replace('RolesScreen');
            } else {
                navigation.replace('ClientTabsNavigation');
            }
        }
    }, [user])


    return (
        <View style={styles.container}>
            <Image style={styles.imageBack} source={require('../../../assets/chef.jpg')} />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={require('../../../assets/logo.png')} />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <ScrollView style={styles.formLogin}>
                <Text style={styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../assets/user.png')}
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
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

                <View style={{ marginTop: 20 }}>
                    <Button text='LOGIN' onPress={() => login()} />
                </View>
                <View style={styles.formRegister}>
                    <Text>No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default React.memo(Home);
