import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
})

const guest = StyleSheet.create({
    contentBox: {        
    
    },
    title: {
        fontSize: vw(6.3),
        color: '#ffffff',
        opacity: 0.87,
        textAlign: 'center'
    },
    dump: {
        height: vh(7.7)
    },
    index: {
        opacity: 0.6,
        color: '#fff',
        fontSize: vw(3.8),
        textAlign: 'center'
    }
})

export { styles, guest }