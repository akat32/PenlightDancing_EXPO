import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider } from 'react-native-elements';

import { defaultStyle } from '../defaultStyles'
import { guest } from './style'

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

interface Iprops { 
    navigation
}

interface Istate { 
}

export const DefaultProfile = (props: Iprops) => {
    return (
        <View style = {[defaultStyle.container, defaultStyle.backColor]}>
            <ScrollView>           
            <View style = {guest.textBox}>
                <Text style = { guest.title }>유저 프로필</Text>
                <View style = { guest.contentBox }>
                    <Text style=  {guest.text}>게스트 로그인 시 지원하지 않는 기능입니다.</Text>
                </View>
                <View style = { guest.menuBox}>
                    <Text style = { guest.title }>나의 업적</Text>
                    <View style = {{flex:1}}/> 
                    <Text style = { guest.more }>더보기></Text>
                </View>
                <View style = { guest.contentBox }>
                    <Text style=  {guest.text}>게스트 로그인 시 지원하지 않는 기능입니다.</Text>
                </View>
                <View style = { guest.menuBox}>
                    <Text style = { guest.title }>내 펜라이트</Text>
                    <View style = {{flex:1}}/> 
                    <Text style = { guest.more }>더보기></Text>
                </View>
                <View style = { guest.contentBox }>
                    <Text style=  {guest.text}>게스트 로그인 시 지원하지 않는 기능입니다.</Text>
                </View>
            </View>
            </ScrollView>

        </View>
    )
}