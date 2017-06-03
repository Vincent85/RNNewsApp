'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class NetUtil extends Component {

 static get(url, parseJson=true) {
    return this.request(url, 'get', undefined, parseJson);
  }

  static post(url, body, parseJson=true) {
    return this.request(url, 'post', body, parseJson);
  }

 static request(url, method, body, parseJson) {
 	return new Promise((resolve,reject)=> {
 		fetch(url,{
 			method: method,
 			body: body
 		}).then((response) => {
 			if(parseJson) {
 				return response.json();
 			}else {
 				return response.text();
 			}
 		}).then((responseData) => {
 			resolve(responseData);
 		}).catch((error) => {
 			reject(error);
 		}); 
 	});
 }
}
