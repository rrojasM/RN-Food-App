import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Rol } from '../../../domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';
interface Props {
    rol: Rol,
    height: number,
    width: number,
}

const RolesItem = ({ rol, height, width }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, height: height, width: width }}
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
