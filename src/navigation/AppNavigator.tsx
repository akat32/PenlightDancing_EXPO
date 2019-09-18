import React from 'react';

import {
    Text,
    AsyncStorage
} from 'react-native';

import { LoginScreen, ProfileScreen, VRScreen, SettingScreen, NewsScreen, RankingScreen } from '../screens'
import { DefaultProfile } from '../screens/Profile/guestPage'
import { DefaultRanking } from '../screens/Rank/guestPage'
import { DefaultSetting } from '../screens/Setting/guestSetting' 
import { createStackNavigator } from 'react-navigation-stack';
async function isGuest () {
    try {
        let result = await AsyncStorage.getItem('isGuest')
        console.log(result)
        if( result == 'true') return true
        else return false
    } catch (e) {
        console.log(e)
    }
}
export const ProfileStack = createStackNavigator( { screen : (isGuest()) ? (DefaultSetting) : (ProfileScreen) },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Profile',
            header: null,
        }),
    }
)

export const RankingStack = createStackNavigator({ screen : (isGuest()) ? (DefaultRanking) : ( RankingScreen) }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Ranking',
            header: null
        }),
    }
)

export const VRStack = createStackNavigator({ VRScreen }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'VR',
        }),
    }
) 

export const NewsStack = createStackNavigator({ NewsScreen }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'News',
            header: null
        }),
    }
)

export const SettingStack = createStackNavigator({ SettingScreen }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
            header: null
        }),
    }
)

