'use strict';

import React, { Component } from 'react';
import {TabNavigator,TabBarBottom} from 'react-navigation';

import {
  StyleSheet,
  View,
} from 'react-native';

import Main from './navigator/MainPageNavigator';
import WeChat from './navigator/WeChatPageNavigator';
import UC from './navigator/UCPageNavigator';

// class RootPageNavigator extends Component {
//   render() {
//     return (
//       <View />
//     );
//   }
// }

const RootPage = TabNavigator({
	Main: {screen: Main},
	WeChat: {screen: WeChat},
	UC: {screen: UC}
},{
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	tabBarOptions: {
		showIcon: true,
		iconStyle: {width:20,height:20,marginTop:0,marginBottom:0},
		indicatorStyle: {height: 0},
		style: {backgroundColor: 'lightgray',height:50},
		labelStyle: {
		    fontSize: 12,
		    marginBottom:5,
		    marginTop:5,
		    color: 'darkgreen'
		},
	}
});

const styles = StyleSheet.create({

});


export default RootPage;