import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const defaultStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    },
    back: {
        backgroundColor: '#0b141a',
        justifyContent: 'center'
    }, 
    backColor: {
        backgroundColor: '#0b141a',
    },
    textBox: {
        width: vw(86.7),
        height: vh(76.3),
        // backgroundColor: '#fff'
    },
    Box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: vw(3.3),
        lineHeight: vw(6),
        color: '#fff',
        opacity: .87
    }
})