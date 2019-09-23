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

import { Thumbnail } from 'react-native-thumbnail-video';
import { defaultStyle } from '../../defaultStyles'
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
                <Text style = {headerStyle.title}>채보 정보</Text>
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
export default class Preview extends React.Component<Iprops, Istate> {
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
                <View style = {{ position : 'relative', flex: 1}}>
                    <View style = { styles.youtubeSize}>
                        <Thumbnail showPlayIcon = { false } style= {{ width: '100%', height: '100%' }}  url="https://www.youtube.com/watch?v=9DwzBICPhdM" />
            
                    </View>
                    <View style = { styles.info }>
                        <View style = {[ styles.contentTextBox, { marginTop : vh(2.8), marginBottom : vh(3)} ]}>
                            <Text style = { styles.contentB }>Not Today (Demo.ver)</Text>
                            <View style = {{ flex: 1}}/>
                            <Text style = { styles.contentS}>Hard</Text>                        
                        </View>
                        <View style = {[ styles.contentTextBox, { marginBottom : vh(4.5)} ]}>
                            <Text style = { styles.contentB }>BTS</Text>
                            <View style = {{ flex: 1}}/>
                            <Text style = { styles.contentS}>BPM 110</Text>                        
                        </View>
                        <View style = { styles.copyrightBox }>
                            { this.state.isDemo ? (
                                <Text style = { styles.demoText }>Demo.ver 채보는 SK Planet 주관 STA+C을 위해 제작되었으며,{"\n"}저작권 문제로 출시 버전에서는 플레이하실 수 없습니다.</Text>
                            ) : (
                                <Text style = { styles.Text}>{ this.state.copyright }</Text>
                            )}
                        </View>
                        <View style = { styles.playInfo}>
                            <View style = {{
                                width: vw(100),
                                marginTop: vh(2),
                                marginBottom: vh(2.3)
                            }}>
                                <Text style = {[ styles.contentB, { fontSize: vw(4)}]}>노트 정보</Text>
                            </View>
                            <View style = {{
                                flex: 1
                            }}>
                                <View style = { styles.infoLine}>
                                    <View style = {[styles.box,{ marginRight: vw(8.9)} ]}>
                                        <Text style = { styles.infoBText}>Play time</Text>
                                        <View style = {{ flex: 1 }}/>
                                        <Text style = { styles.infoSText}>01:50:64</Text>
                                    </View>
                                    <View style = { styles.box}>
                                        <Text style = { styles.infoBText}>Long</Text>
                                        <View style= {{flex:1}}/>
                                        <Text style = { styles.infoSText}>13</Text>
                                    </View>
                                </View>
                                <View style = { styles.infoLine}>
                                    <View style = {[styles.box,{ marginRight: vw(8.9)} ]}>
                                        <Text style = { styles.infoBText}>Single</Text>
                                        <View style = {{ flex: 1 }}/>
                                        <Text style = { styles.infoSText}>53</Text>
                                    </View>
                                    <View style = { styles.box}>
                                        <Text style = { styles.infoBText}>Slide</Text>
                                        <View style= {{flex:1}}/>
                                        <Text style = { styles.infoSText}>28</Text>
                                    </View>
                                </View>
                                <View style = {[ styles.infoLine ]}>
                                    <View style = {[styles.box,{ marginRight: vw(8.9)} ]}>
                                        <Text style = { styles.infoBText}>Multi</Text>
                                        <View style = {{ flex: 1 }}/>
                                        <Text style = { styles.infoSText}>21</Text>
                                    </View>
                                    <View style = { styles.box}>
                                        <Text style = { styles.infoBText}>Spin</Text>
                                        <View style= {{flex:1}}/>
                                        <Text style = { styles.infoSText}>3</Text>
                                    </View>
                                </View>
                                <View style= {{ width: vw(100), height: vh(3)}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}