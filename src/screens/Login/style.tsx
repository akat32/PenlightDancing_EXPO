  import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    back: {
        backgroundColor: '#0b141a',
        justifyContent: 'center'
    },
    content: {
        alignItems: 'center'
    },
    buttonColor1: {
        backgroundColor: '#1e2c36',
        marginBottom: vh(3.8)
    },
    buttonColor2: {
        backgroundColor: '#111c24'
    },
    buttonSize: {
        width: vw(82.2),
        height: vh(7.5),
        borderWidth: vw(0.3),
        borderColor: '#727272'
    },
    buttonIcon: {
        width: vw(6.7),
        height: vw(6.7),
        position: 'absolute',
        left: vw(12.5)
    },
    buttonTitle: {
        fontSize: vw(4),
        color: '#e2e2e2'
    },
    buttonTitlePadding: {
        paddingLeft: vw(2.1)
    },
    logo: {
        width: vw(77.8),
        height: vw(45.124),
        // backgroundColor: '#fff',
        marginBottom: vh(10.5)
    },
    lineFont: {
        color: '#e2e2e2',
        fontSize: vw(3.8)
    },
    notYet: {
        marginBottom: vh(1.7),
        fontSize: vw(3.2)
    },
    lineBox: {
        marginBottom: vh(2.7),
        flexDirection: 'row',
        alignItems: 'center',
        width: vw(82.2)
    },
    line: {
        marginTop: -vw(0.3),
        width: vw(18.3),
        height: vw(0.2),
        backgroundColor: '#fff'
    }
})

export { styles }