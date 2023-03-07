import React from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../../App';
import { ProductStackParamList } from '../../../../navigation/AdminProductNavigator';
import { Product } from '../../../../../domain/entities/Product';
import { currencyFormat } from '../../../../utils/CurrencyFormat';
import { Category } from '../../../../../domain/entities/Category';
import { ClientStackParamList } from '../../../../navigation/ClientStackNavigator';

interface Props {
    product: Product;
    navigation: StackNavigationProp<ClientStackParamList, "ClientProductListScreen", undefined>
}

const ClientProductItem = ({ product, navigation }: Props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.desc}>{product.description}</Text>
                    <Text style={styles.price}>{currencyFormat(product.price)}</Text>
                </View>
                <Image source={{ uri: product.image1 }} style={styles.image} />
            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 90,
        marginTop: 20,
        //backgroundColor: 'rgba(228,232,237,1)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 5,
        resizeMode: 'cover'
    },
    info: {
        marginLeft: 2,
        marginRight: 5,
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 17,
        textTransform: 'uppercase',
    },
    desc: {
        color: 'gray',
        fontSize: 15,
        marginTop: 5,
        textAlign: 'auto',
        marginBottom: 2
    },
    icon: {
        width: 30,
        height: 30,
        marginVertical: 2,
    },
    action: {
        marginRight: 17,
    },
    divider: {
        height: 2,
        backgroundColor: '#f2f2f2'
    },
    price: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default ClientProductItem;