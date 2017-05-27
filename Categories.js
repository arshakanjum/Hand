
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import T from './index.android';

import { Container, Form, Item, Grid, Col, Row, Header, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';


export class Categories extends Component {
  constructor () {
      super();
      this.state = {
        goHome: false,
        goCategories: false,

      };
   }


  render() {
    if(this.state.goHome) return <T />
      if(this.state.goTeam) return <Categories />
  return(
    <Container>
    <Header style={{ backgroundColor: '#333745' }}>


                <Title>Categories</Title>
            </Header>

            <Content>
            </Content>

    <Footer>
                  <FooterTab style={{ backgroundColor: '#333745' }}>
                      <Button active onPress={() => this.setState({goHome: true})}>
                          <Text>Search</Text>
                          <Icon name='ios-search-outline' />
                      </Button>
                      <Button onPress={() => this.setState({goCategories: true})}>
                          <Text>Categories</Text>
                          <Icon name='ios-browsers-outline' />
                      </Button>
                  </FooterTab>
              </Footer>
    </Container>
  );
  }_
}
