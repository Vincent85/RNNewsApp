'use strict';

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  ListView,
} from 'react-native';
import { 
    FAKE_BANNER_NET_DATA,
    FAKE_NEWS_CATEGORY_NET_DATA,
    APP_KEY_WAN_NIAN_LI,
    URL_WAN_NIAN_LI,
    APP_RECENT_MOVIES,
    URL_RECENT_MOVIES,
} from  '../common/constants';
import NetUtil from '../util/NetUtil';
import Toolbar from '../view/Toolbar';
import Swipe from 'react-native-swiper';

// const RECENT_MOVIES_FETCH_URL = URL_RECENT_MOVIES+'?dtype=json&key='+APP_RECENT_MOVIES+'&city=';
var moviesDS = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

class MainPageScreen extends Component {
	static navigationOptions = {
		tabBarLabel:'潮流生活',
		tabBarIcon:
			<Image
	          source={require('../res/ic_btn_home.png')}
	        />
	};

	
	constructor(props) {
	  super(props);
	  
	  this.fetchRecentMovies = this.fetchRecentMovies.bind(this);
	  this.renderMovieItem = this.renderMovieItem.bind(this);
	  this.parseMoviesRowData = this.parseMoviesRowData.bind(this);

	  this.state = {dataSource: moviesDS.cloneWithRows([])};
	}

	componentDidMount() {
		this.fetchRecentMovies('汕头');
	}

  render() {
    return (
      <View style={styles.container}>
      	<Toolbar title="潮流生活" />
      	<ListView style={styles.listview}
      		enableEmptySections={true}
      		dataSource={this.state.dataSource}
      		renderRow={this.renderMovieItem}
        />
      </View>
    );
  }

  fetchRecentMovies(city) {
  	// NetUtil.get('http://op.juhe.cn/onebox/movie/pmovie?dtype=json&key=37621eeefd05cde6bf0e4aa8c1516b11&city=汕头')
  	// 		.then(function(result) {
  	// 			// if(result.error_code == 0) {
  	// 			// 	if(result.result.data.length > 0) {
  	// 			// 		//只取正在上映的电影信息
  	// 			// 		const movies = result.result.data[0];
  	// 			// 		// this.setState({dataSouce:this.moviesDS.cloneWithRows(movies.data)});
  	// 			// 		updateRowsData(movies.data);
  	// 			// 	}
  	// 			// }
  	// 			this.parseMoviesRowData(result);
  	// 		},function(){})
  	// 		.done();
  	fetch('http://op.juhe.cn/onebox/movie/pmovie?dtype=json&key=37621eeefd05cde6bf0e4aa8c1516b11&city=汕头',{
        method: 'get',
        headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		},
      })
  	.then((response) => response.json())
  	.then((responseData) => {
  		this.parseMoviesRowData(responseData);
  	}).catch((error) => {
  		console.log(error);
  	});
  }

  parseMoviesRowData(result) {
  	if(result.error_code == 0) {
  		if(result.result.data.length > 0) {
  			//只取正在上映的电影信息
  			const movies = result.result.data[0];
  			let moviesData = [];
  			for(var i=0; i<movies.data.length;i++) {
  				moviesData.push(movies.data[i]);
  			}
  			this.setState({dataSource:moviesDS.cloneWithRows(moviesData) });
  		}
  	}
  }
  renderMovieItem(movieData) {
  	return <Text>{movieData.tvTitle}</Text>;
  }

}

const mainPageNavigator = StackNavigator({
	Main: {screen: MainPageScreen}
},{
	headerMode: 'none',
});
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon: {
		width: 26,
		height: 26,
	},
	listview: {
		flex:1,
	}
});


export default mainPageNavigator;

