import React from 'react';

import {
    Text
} from 'react-native';

import { LoginScreen, ProfileScreen, VRScreen, SettingScreen, NewsScreen, RankingScreen } from '../screens'


import { createStackNavigator } from 'react-navigation-stack';
import { TabNavigator } from './BottomTabBar'

export const ProfileStack = createStackNavigator({ ProfileScreen },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Profile',
        }),
    }
)

export const RankingStack = createStackNavigator({ RankingScreen }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Ranking',
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
        }),
    }
)

export const SettingStack = createStackNavigator({ SettingScreen }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
        }),
    }
)






export const AppNavigation = createStackNavigator({
    LoginScreen: LoginScreen,
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
})