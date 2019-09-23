import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const styles = StyleSheet.create({
    
})

const headerStyle = StyleSheet.create({
    container : {
        width: '100%',
        height: vh(8),
        backgroundColor: '#151e24',
        borderBottomWidth: vw(0.3),
        borderColor: '#daffc0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title : {
        color: '#fff',
        fontSize: vw(4.3)
    },
    iconStyle: {
    },
})
export{  styles, headerStyle }