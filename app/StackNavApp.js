import React,{Component} from 'react'
import {StackNavigator,NavigationActions} from 'react-navigation'
import {
	View,
	Text,
	Button,
} from 'react-native'
import {myTabNav} from './TabNavApp'

class MainScreen extends Component {
	constructor(props) {
	  super(props);
	}
	render() {
		const {navigate} = this.props.navigation;
		return(
			<View>
				<Text>I'm the first </Text>
				<Button title="Go to next" 
					onPress={()=> navigate('Second',{name: "Hello Vincent"})}/>
	
			</View>
			);
	}
}

class SecondScreen extends Component {
	render() {
		const {navigate,state,setParams} = this.props.navigation;
		return(
			<View>
				<Text>I'm the SecondScreen routeName : {state.params.name}</Text>
				<Button title="Go to third" onPress={()=> navigate('Third')} />
				<Button title="change params name" 
					onPress={ ()=> setParams({ name: "Hello Chenbisheng"}) } />
			</View>	
			);
	}
}

class ThirdScreen extends Component {

	render() {
		const {goBack,dispatch,navigate} = this.props.navigation;
		const navigateAction = NavigationActions.navigate({
		  routeName: 'Fourth',
		  params: {name: "Hello Tab"},

		  // navigate can have a nested navigate action that will be run inside the child router
		  action: NavigationActions.navigate({ routeName: 'Second'})
		})

		return(
			<View>
				<Text>I'm the ThirdScreen</Text>
				<Button title="Go back" onPress={()=> goBack()} />
				<Button title="Go to another navigator" 
					onPress={()=> dispatch(navigateAction)}  />
			</View>
			);
	}
}




export const MyNavigator = StackNavigator({
	Main : {screen: MainScreen},
	Second: {screen: SecondScreen},
	Third: {screen: ThirdScreen},
	Fourth: {screen: myTabNav}
});

