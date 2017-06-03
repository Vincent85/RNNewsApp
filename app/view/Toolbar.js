'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ToolbarAndroid,
} from 'react-native';

class Toolbar extends Component {
  static propTypes = {
  	  title: React.PropTypes.string.isRequired
  }
  constructor(props) {
  	  super(props);
  	
  	  this.state = {
  	  	colorProps: {
	        titleColor: '#000000',
	        subtitleColor: '#6a7180',
      	}
  	  };
  }	
  render() {
  	const {title} = this.props;
    return (
      <ToolbarAndroid
       navIcon={require('../res/ic_arrow_back_white_24dp.png')}
       title={title}
       style={styles.toolbar}
       titleColor="#000000"/>
    );
  }
}

const styles = StyleSheet.create({
	toolbar: {
	    backgroundColor: '#0064ff',
	    height: 56,
	},
});


export default Toolbar;