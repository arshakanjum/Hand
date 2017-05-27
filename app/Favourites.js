
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  AppRegistry,
} from 'react-native';

import Home from './Home';
import Categories from './Categories';
import Add from './Add'


import { Container, Form, Item, Grid, Col, Card, CardItem, Row, Header, List, ListItem, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';


export default class Favourites extends Component {
  constructor () {
      super();
      this.state = {
        goHome: false,
        goFav: false,
        goCategories: false,

      };
   }


  render() {
    if(this.state.goHome) return <Home />
      if(this.state.goCategories) return <Categories />
      if(this.state.goFav) return <Favourites />
      if(this.state.goAdd) return <Add />
    return(
    <Container>
    <Header style={{ backgroundColor: '#333745' }}>


                <Title style={{paddingTop:15, fontSize: 20, fontWeight: 'bold'}}>Favourites</Title>
                <Right>
                <Icon onPress={() => this.setState({goAdd: true})} name="ios-add"  style={{fontSize: 40, color: 'white'}} />
                </Right>
            </Header>

            <Content>
            <Card>
                    <CardItem>
                        <Left>
                        <Icon active name="ios-person-outline" />
                          <Body>
                            <Text>Sivaprasad</Text>
                            <Text note>Category: Plumbing</Text>
                            <Text note>9544051678</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem>
                          <Left>
                          <Icon active name="ios-person-outline" />
                            <Body>
                              <Text>Babu</Text>
                              <Text note>Category: Driver</Text>
                              <Text note>9497628970</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem>
                            <Left>
                            <Icon active name="ios-person-outline" />
                              <Body>
                                <Text>Gopi</Text>
                                <Text note>Category: Electrician</Text>
                                <Text note>9544051678</Text>
                              </Body>
                            </Left>
                          </CardItem>
                   </Card>

            </Content>


    <Footer>
                  <FooterTab style={{ backgroundColor: '#333745' }}>
                      <Button onPress={() => this.setState({goHome: true})}>
                          <Text>Search</Text>
                          <Icon name='ios-search-outline' />
                      </Button>
                      <Button onPress={() => this.setState({goCategories: true})}>
                          <Text>Categories</Text>
                          <Icon name='ios-browsers-outline' />
                      </Button>
                      <Button active onPress={() => this.setState({goFav: true})}>
                          <Text>Favourites</Text>
                          <Icon name='ios-heart-outline' />
                      </Button>
                  </FooterTab>
              </Footer>
    </Container>
  );
  }_
}



class BackgroundImage extends Component {

    render() {
        return (
            <Image style={styles.backgroundImage} source={require('./flat-wallpaper.png')}>

                    {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
      }})
