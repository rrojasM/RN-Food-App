import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";


const ProfileInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBack: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%'
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
    },
    logoImage: {
        width: 180,
        height: 180,
        borderRadius: 100
    },
    logoText: {
        color: '#FFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    formLogin: {
        width: '100%',
        height: '50%',
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
    formImage: {
        width: 30,
        height: 30
    },
    formInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
    },
    formContent: {
        marginLeft: 15
    },
    formTextDescription: {
        fontSize: 12,
        color: 'gray'
    },
    logout: {
        position: "absolute",
        top: 50,
        right: 15,
    },
    logoutImage: {
        width: 40,
        height: 40,
    }
});


export default ProfileInfoStyle;