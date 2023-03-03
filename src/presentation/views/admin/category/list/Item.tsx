import React from 'react';
import { Category } from '../../../../../domain/entities/Category';
import { Image, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../../App';
import { CategoryStackParamList } from '../../../../navigation/AdminCategoryNavigator';

interface Props {
    category: Category;
    remove: (id: string) => void;
}

const CategoryItem = ({ category, remove }: Props) => {
    const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('AdminProductNavigator', { category: category })}>
            <View style={styles.container}>
                <Image source={{ uri: category.image }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.title}>{category.name}</Text>
                    <Text style={styles.desc}>{category.description}</Text>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminCategoryUpdate', { category: category })}>
                        <Image style={styles.icon} source={require('../../../../../assets/edit.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            "Eliminar Categoria",
                            "Estas seguro de eliminar esta Categoria?",
                            [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        remove(category.id);
                                        //navigation.navigate('Home');
                                    },
                                },
                                {
                                    text: "Cancelar"
                                }
                            ]
                        )
                    }}>
                        <Image style={styles.icon} source={require('../../../../../assets/trash.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 130,
        marginTop: 10,
        //backgroundColor: 'rgba(228,232,237,1)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 20,
        resizeMode: 'cover'
    },
    info: {
        marginLeft: 2,
        marginRight: 5,
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 18,
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
    }
});

export default CategoryItem;