'use strict';

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class UCPage extends Component {

	static navigationOptions = {
		tabBarLabel:'个人中心',
		tabBarIcon:
			<Image
	          source={require('../res/ic_btn_person.png')}
	        />
	};

  render() {
    return (
      <View >
      	<Text>I'm Uc</Text>
      </View>
    );
  }
}

const ucNavigator = StackNavigator({
	UC: {screen: UCPage}
},{
  headerMode: 'none',
});
const styles = StyleSheet.create({

});


export default ucNavigator;