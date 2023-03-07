import React from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../../../../../domain/entities/Category';
import { ClientStackParamList } from '../../../../navigation/ClientStackNavigator';
interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClientStackParamList, "ClientCategoryListScreen", undefined>
}

const ClientCategoryItem = ({ category, height, width, navigation }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, height: height, width: width }}
            onPress={() => {
                navigation.navigate('ClientProductListScreen', { id_category: category.id })
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: category.image }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ClientCategoryItem;


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 10,
        paddingHorizontal: 7,
    },
    image: {
        flex: 1,
        top: 30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
    },
    titleContainer: {
        height: 70,
        backgroundColor: 'white',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2
    },
    title: {
        color: 'black',
        fontSize: 23,
        fontWeight: '600',
        textTransform: 'uppercase'
    }
});
