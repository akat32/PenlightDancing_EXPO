import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    SafeAreaView,
    FlatList,
    ScrollView
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { styles,headerStyle } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import {Icon} from 'react-native-elements'

interface Iprops { 
    isClickedSteam?: Boolean
    navigation
}

interface Istate { 
    isClickedSteam?: Boolean
}

class PreviewHeader extends React.Component<Iprops, Istate> {
    constructor ( props ) { 
        super(props)
    }
    goTabBar () {
        this.props.navigation.goBack ()
    }
    render() {
        return (
            <View style = { headerStyle.container}>
                <View style = {{width: vw(4.4)}}/>
                <Icon
                    name='arrow-back'
                    onPress = { () => { this.goTabBar()}}
                    type="material"
                    color= '#ffffff'
                    size={vw(5)}
                    marginTop = { vw (.5) }
                    marginLeft = {vw(4.4)}
                />
                <View style = {{ flex: 1}}/>
                <Text style = {headerStyle.title}>라이센스</Text>
                <View style = {{ flex: 1}}/>
                <Icon
                    name='arrow-back'
                    type="material"
                    color= '#151e24'
                    size={vw(5)}
                    marginRight = {vw(4.4)}
                />
            </View>
        )
    }
}
export default class License extends React.Component<Iprops, Istate> {
    constructor ( props ) {
        super ( props );
        this.state = {
            isDemo: true,
            copyright: 'asdasd'
        }
    }
    render() {
        return (
            <View style = {[defaultStyle.container, defaultStyle.backColor]}>
                <PreviewHeader navigation = { this.props.navigation}/>
            <View style = { defaultStyle.Box}> 
                    <View style = { defaultStyle.textBox }>
                        <ScrollView>
                            <Text style = { defaultStyle.text}>
Penlight Dancing Official App 오픈소스 라이센스{"\n"}
expo-cli{"\n"}
https://github.com/expo/expo-cli/blob/master/packages/json-file/LICENSE{"\n"}
react{"\n"}
https://github.com/facebook/react/blob/master/LICENSE{"\n"}
react-native{"\n"}
https://github.com/facebook/react-native/blob/master/LICENSE{"\n"}
react-native-expo-viewport-units{"\n"}
https://github.com/joetakara/react-native-expo-viewport-units/blob/master/LICENSE{"\n"}
react-native-elements{"\n"}
https://github.com/react-native-training/react-native-elements/blob/next/LICENSE{"\n"}
react-native-thumbnail-video{"\n"}
https://github.com/lucasbento/react-native-thumbnail-video/blob/master/LICENSE{"\n"}
react-navigation{"\n"}
https://github.com/react-navigation/react-navigation/blob/master/LICENSE{"\n"}
react-navigation-tabs{"\n"}
https://github.com/react-navigation/tabs/blob/master/LICENSE.md{"\n"}
react-navigation-stack{"\n"}
https://github.com/react-navigation/stack/blob/master/LICENSE.md{"\n"}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </View>

        )
    }
}