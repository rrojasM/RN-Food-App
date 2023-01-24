import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";
const RegisterStyles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    imageBack: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    formLogin: {
        width: '100%',
        height: '72%',
        backgroundColor: MyColors.background,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAA',
        marginLeft: 15,
        padding: 5
    },
    formInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    formIcon: {
        width: 30,
        height: 30,
        marginTop: 10,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100
    },
    logoText: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
});
export default RegisterStyles;