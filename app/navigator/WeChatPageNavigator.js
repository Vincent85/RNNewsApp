'use strict';

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

class WeChatPage extends Component {
	static navigationOptions = {
		tabBarLabel:'微信精选',
		tabBarIcon:
			<Image
	          source={require('../res/ic_btn_weixin.png')}
	        />
	};
  render() {
    return (
      <View >
      	<Text>I am WeChat</Text>
      </View>
    );
  }
}

const weChatNavigator = StackNavigator({
	WeChat: {screen: WeChatPage}
},{
  headerMode: 'none',
});
const styles = StyleSheet.create({

});


export default weChatNavigator;