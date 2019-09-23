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
        this.props.navigation.goBack()
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
                <Text style = {headerStyle.title}>이용약관</Text>
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
export default class Terms extends React.Component<Iprops, Istate> {
    constructor ( props ) {
        super ( props );
    }
    render() {
        return (
            <View style = {[defaultStyle.container, defaultStyle.backColor]}>
                <PreviewHeader navigation = { this.props.navigation}/>
                <View style = { defaultStyle.Box}> 
                    <View style = { defaultStyle.textBox }>
                        <ScrollView>
                            <Text style = { defaultStyle.text}>
Penlight Dancing Official App 이용약관{"\n"}
(버전 1.0) – 20190922{"\n"}
제 1조(목적){"\n"}
Penlight Dancing Official App 이용약관(이하 ‘본 약관’)은 NUGUL Studio(이하 ‘제공자’)에서 제공하는 Penlight Dancing Official App(이하 ‘앱’)에 있어 제공자와 이용자의 권리 의무 및 책임 사항을 규정함을 목적으로 합니다.{"\n"}
제 2조(정의){"\n"}
1.‘이용자’란 ‘앱’에 접속하여 이 약관에 따라 ‘제공자’가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.{"\n"}
2.‘회원’이란 게임 플랫폼 서비스 Steam의 계정을 본 ‘앱’에 연동한 자로서, ‘앱’이 제공하는 모든 기능을 사용할 수 있는 자를 말합니다.{"\n"}
3.‘비회원’이란 ‘게스트 로그인’을 통하여 본 ‘앱’을 이용하는 자로서, ‘앱’이 제공하는 기능 중 VR프리뷰 및 뉴스 기능만을 사용할 수 있는 자를 말합니다.{"\n"}
제 3조(약관의 명시와 설명 및 개정){"\n"}
1.‘제공자’는 본 약관의 내용과 제공자 성명, 연락처 등을 알 수 있도록 ‘이용약관’ 버튼을 통해 본 약관을 확인할 수 있도록 합니다.{"\n"}
2.‘제공자’는 위법 행위 또는 ‘이용자’에게 무조건적으로 불리한 행위가 아닌 범위 내에서 약관을 개정할 수 있습니다.{"\n"}
3.약관이 개정될 경우 일주일 전 ‘이용자’가 확인할 수 있도록 ‘앱’에 팝업 화면 등을 표시하고, 개정된 이후에는 ‘이용자’에게 한 번 더 동의를 얻도록 합니다.{"\n"}
제 4조(Steam 개인정보 처리 방침){"\n"}
! 본 약관이 적용되는 ‘앱’은 아직 Steam 계정 연동을 지원하지 않습니다. 추후 개정될 항목입니다.{"\n"}
제 5조(홍보성){"\n"}
본 ‘앱’은 Steam 플랫폼에 출시 예정인 VR 게임 ‘Penlight Dancing’의 편의성 증진 및 홍보를 목적으로 제작되었음을 알립니다.{"\n"}

                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </View>

        )
    }
}