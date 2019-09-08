import { 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native'

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
})