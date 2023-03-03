import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { ProductStackParamList } from '../../../../navigation/AdminProductNavigator';

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'> { };

export const AdminProductListScreen = ({ navigation, route }: Props) => {

    const { category } = route.params;
    console.log('THIS IS THE CATEGORY', category);
    return (
        <View style={{ marginTop: 50 }}>
            <Text>Admin Products List Screen</Text>
        </View>
    )
}
