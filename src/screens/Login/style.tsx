  import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    back: {
        backgroundColor: '#000',
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
        height: vh(7.5)
    },
    buttonIcon: {
        width: vw(6.7),
        height: vw(6.7),
        position: 'absolute',
        left: vw(14)
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
        backgroundColor: '#fff',
        marginBottom: vh(14.5)
    },
    lineFont: {

    },
    lineBox: {
        
    },
    line: {

    }
})

export { styles }