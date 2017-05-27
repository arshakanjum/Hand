import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  AppRegistry,
  NetInfo,
  ListView
} from 'react-native';

import Home from './Home';
import Favourites from './Favourites';
import Add from './Add'
import Details from './Details'

import { Container, Form, Item, Spinner,Grid, Col, Row, Header, List, ListItem, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';


export default class Head extends Component {
render(){

return(
<Header style={{ backgroundColor: '#333745' }}>


            <Title style={{paddingTop:15, fontSize: 20, fontWeight: 'bold'}}>Categories</Title>
            <Right>

            <Icon onPress={() => this.setState({goAdd: true})} name="ios-add"  style={{fontSize: 40, color: 'white'}} />

            </Right>
 </Header>
 );
 }
 }
