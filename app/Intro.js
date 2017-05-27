
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  AppRegistry,
  View
} from 'react-native';

import Home from './Home';
import Favourites from './Favourites';
import Add from './Add';
import Categories from './Categories';
import Head from './Header'


import { Container, Form, Item, Grid, Col,Tab, Tabs, Spinner, Row, Header, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';


export default class Intro extends Component {
  constructor(props){
      super(props);
      this.state = {
      timePassed: false
      };
    }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 1000)
    if (this.state.timePassed){
      return <Categories/>;
    }else{
    return (
    <View style={styles.center}>
    <Image  style={styles.image}
    source={require('./hand-logo.png')}
    />

    <Spinner color='white' />

    </View>
      );
  }
}
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,

    },
    center: {
        flex:1,
        backgroundColor: '#333745' ,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        marginBottom:40,
        borderColor: 'white',
        alignItems: 'center',
        width: 150,
        height:150
    },

});
