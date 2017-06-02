'use strict';

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class MainPageScreen extends Component {
	static navigationOptions = {
		tabBarLabel:'潮流生活',
		tabBarIcon:
			<Image
	          source={require('../res/ic_btn_home.png')}
	        />
	};

  render() {
    return (
      <View >
      	<Text>I am MainPage</Text>
      </View>
    );
  }
}

const mainPageNavigator = StackNavigator({
	Main: {screen: MainPageScreen}
});
const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
});


export default mainPageNavigator;

