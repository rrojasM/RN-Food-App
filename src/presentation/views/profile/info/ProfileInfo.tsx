import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';
import styles from './Style';
import Button from '../../../components/Button';

interface Props extends StackScreenProps<RootStackParamList> { };
export const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const { removeSession, user } = useViewModel();
    return (
        <View style={styles.container}>

            <Image style={styles.imageBack} source={require('../../../../assets/city.jpg')} />

            <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                    Alert.alert(
                        "Cerrar Sesión",
                        "Estas seguro de cerrar sesión?",
                        [
                            {
                                text: "OK",
                                onPress: () => {
                                    removeSession();
                                    navigation.navigate('Home');
                                },
                            },
                            {
                                text: "Cancelar"
                            }
                        ]
                    )

                }}>
                <Image style={styles.logoutImage}
                    source={require('../../../../assets/logout.png')}
                />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
                <Image style={styles.logoImage} source={{ uri: user?.image }} />
            </View>
            <View style={styles.formLogin}>
                <View style={styles.formInfo}>
                    <Image source={require('../../../../assets/user.png')}
                        style={styles.formImage}
                    />

                    <View style={styles.formContent}>
                        <Text>{user?.name} {user?.lastname}</Text>
                        <Text style={styles.formTextDescription}>Nombre del usuario</Text>
                    </View>
                </View>
                <View style={styles.formInfo}>
                    <Image source={require('../../../../assets/email.png')}
                        style={styles.formImage}
                    />

                    <View style={styles.formContent}>
                        <Text>{user?.email}</Text>
                        <Text style={styles.formTextDescription}>Correo electronico</Text>
                    </View>
                </View>
                <View style={{ ...styles.formInfo, marginBottom: 60 }}>
                    <Image source={require('../../../../assets/phone.png')}
                        style={styles.formImage}
                    />

                    <View style={styles.formContent}>
                        <Text>{user?.phone}</Text>
                        <Text style={styles.formTextDescription}>Telefono</Text>
                    </View>
                </View>

                <Button
                    onPress={() => {
                        navigation.navigate(('ProfileUpdateScreen'))
                    }}
                    text="ACTUALIZAR"
                />
            </View>

        </View>
    )
}
