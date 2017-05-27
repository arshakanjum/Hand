import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  AppRegistry,
  Animated,
  View,
  Alert,
  NetInfo,
  Easing
} from 'react-native';

import Home from './app/Home';
import Categories from './app/Categories';
import Favourites from './app/Favourites';
import Add from './app/Add';
import Intro from './app/Intro';

import { Container, Form, Item, Grid, Col,Tab, Tabs, Spinner, Row, Header, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';

export class Hand extends Component {

  constructor (){
        super();
        this.state = {
        goCategories: false,
        goFav: false,
      };
   }

  render() {
    if(this.state.goCategories) return <Intro />
    if(this.state.goFav) return <Intro />
    NetInfo.fetch().done((reach) => {
      if(reach=='NONE') {
        this.setState({goFav: true})
        Alert.alert(
           'No Connectivity',
           'Hand requires an active network connection, You can still access favourite contacts while disconnected.',
           [{text: 'Ok'}]
        )
        return <Favourites/>
      }
      else {
        this.setState({goCategories: true})
      }
    });
    return<Intro />

}
}


AppRegistry.registerComponent('Hand', () => Hand);
