import React,{Component} from 'react'

import {
	View,
	Text,
	Button,
} from 'react-native'

import {TabNavigator} from 'react-navigation'

class FirstTab extends Component {

	render() {
		const {state,navigate} = this.props.navigation;
		return(
			<View>
				<Button title="First Tab"  onPress={()=> navigate('Second')}/>
			</View>
			);
	}
}

class SecondTab extends Component {

	render() {
		const {state} = this.props.navigation;
		return(
			<View>
				<Button title="second tab" />
			</View>
		);
	}
}

export const myTabNav = TabNavigator({
	First: {screen:FirstTab},
	Second: {screen: SecondTab}
});
