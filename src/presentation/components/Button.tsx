import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
    text: string,
    onPress: () => void
}

const Button = ({ text, onPress }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onPress()} style={styles.roundedButton}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 50,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default Button;

