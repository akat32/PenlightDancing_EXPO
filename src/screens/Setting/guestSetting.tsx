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
// 이미지 밑에 그림자.
// 프로필 박스 밑에 그림자
export const DefaultSetting = (props: Iprops) => {
    function logOut () {
        alert('로그인 화면으로 돌아갑니다.')
        props.navigation.replace('LoginScreen')
    }
    return (
        <View style = {[defaultStyle.container, defaultStyle.back]}>
            <View style = { guest.contentBox}>
                <View style = { guest.profileBox}>
                    <View>
                        <Text style = {guest.BText}>게스트 로그인 중</Text>
                        <Text style = {guest.SText}>자세한 프로필을 확인하시려면</Text>
                        <Text style = {guest.SText}>Steam으로 로그인 해주세요</Text>
                    </View>
                    <View style = {{flex:1}}/>
                    <Image source = { require('../../../assets/profile.png')} style = {[guest.profileImg, guest.shadow]}/>
                </View>
                <View style = {guest.menuBox}>
                    <View style = { guest.lineBox}>
                        <Text style = {guest.menuText}>국가 정보 변경</Text>
                        <View style = {{flex: 1}}/>
                        <Text style= {[guest.menuText, { marginRight: vw(2)}]}>KR</Text>
                    </View>
                    <View style = { guest.noLineBox}>
                        <Text style = {guest.menuText}>이용약관</Text>
                    </View>
                    <View style = { guest.lineBox}>
                        <Text style = {guest.menuText}>푸쉬 알림 설정</Text>
                    </View>
                    <View 
                        style = { guest.noLineBox} 
                    >
                        <Text 
                            onPress = { ()=> {
                                logOut()
                            }}
                            style = {[guest.menuText, { color : '#ff4141'}]}>로그아웃</Text>
                    </View>
                </View>
            </View>
        </View> 
    )
}

