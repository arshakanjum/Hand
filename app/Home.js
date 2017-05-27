

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  AppRegistry,
} from 'react-native';

import Categories from './Categories';
import Favourites from './Favourites';
import * as url from '../app/global';
import { Container, Form, List, Item,ListItem, Grid, Col, Fab, Row,Tabs,Tab, Header, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';

import Communications from 'react-native-communications';

export default class Home extends Component {
  constructor (){
        super();
        this.state = {
        goHome: false,
        goCategories: false,
        goFav: false,
        active: true,
        search:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        users:'',
        cat:''

      };
   }

   fetchData() {
         fetch(url.surl+this.state.search)
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ users: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }
   fetchCat() {
         fetch(url.curl)
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ cat: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }

       handleChange() {
         this.fetchData();
       }
       componentWillMount()
       {
         this.fetchCat();
       }



  render() {
      if(this.state.goHome) return <Home />
      if(this.state.goCategories) return <Categories />
      if(this.state.goFav) return <Favourites />
  return(

    <Container>

    <Header style={{ backgroundColor: '#333745' }} searchBar rounded>
    <Item>
                    <InputGroup>
                        <Icon name="ios-search"/>
                        <Input onChangeText={(text) => this.setState({search:text})} placeholder="Search"/>
                    </InputGroup>
                    </Item>
                   <Button
                        title='1'
                        onPress={() => this.handleChange()}>
                        <Icon name='ios-search'/>
                    </Button>

    </Header>

    <Content>
    <Button block  info onPress={() => this.handleChange()}>
      <Icon name='ios-search'/>
      </Button>
      <List dataArray={this.state.users}
                            renderRow={(users) =>
              <ListItem>
                  <Icon active name="ios-person-outline" />
                  <Body>
                      <Text>{users.fname+ " " + users.lname}</Text>
                      <Text note>{users.phone}</Text>
                      <Text note>{this.state.cat[users.category_id-1].cname}</Text>
                       </Body>
                      <Button onPress={() =>  Communications.phonecall(users.phone, true)} small transparent >
                        <Icon name='ios-call' />
                      </Button>
                </ListItem>
              } />

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
                      <Button onPress={() => this.setState({goFav: true})}>
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
      },
    content: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
