import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Rol } from '../../../domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigation: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

const RolesItem = ({ rol, height, width, navigation }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, height: height, width: width }}
            onPress={() => {
                if (rol.name === 'ADMIN') {
                    navigation.replace('AdminTabsNavigation');
                } else if (rol.name === 'CLIENTE') {
                    navigation.replace('ClientTabsNavigation');
                }
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: rol.image }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{rol.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RolesItem;


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 10,
        paddingHorizontal: 7,
    },
    image: {
        flex: 1,
        margin: 10,
        resizeMode: 'contain'
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
    },
    titleContainer: {
        height: 50,
        backgroundColor: MyColors.primary,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white'
    }
});
