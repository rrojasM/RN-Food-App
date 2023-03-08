import React from 'react'
import { StyleSheet, View, Image, TextInput, KeyboardType } from 'react-native';

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    editable?: boolean,
    onChangeText: (property: string, value: any) => void
}

const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    editable = true,
    onChangeText,
}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon} source={image} />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={text => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAA',
        marginLeft: 15,
        padding: 5
    },
    formIcon: {
        width: 30,
        height: 30,
        marginTop: 10,
    },
});

export default React.memo(CustomTextInput);
