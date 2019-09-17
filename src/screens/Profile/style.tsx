import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
})

const guest = StyleSheet.create({
    textBox: {
        flex: 1,
        width: vw(91.2),
        marginLeft: vw(4.4),
        marginRight: vw(6.7),
        marginTop: vh(3.8),
        alignItems: 'flex-start'
    },
    title : {
        color: '#ffffff',
        opacity: 0.87,
        fontSize: vw(6)
    },
    contentBox: {
        height: vh(32.3),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        opacity: 0.6,
        fontSize: vw(4)
    },
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    more: {
        opacity: 0.3,
        fontSize: vw(3.6),
        color: '#fff'
    }
})

export { styles, guest }