

import React, { Component } from 'react';
import {
  BackAndroid,
} from 'react-native';

import Home from './Home';
import Categories from './Categories';
import Add from './Add'


import { Container, Header, List, ListItem, Button, Text, Left, Right, Icon, Body, Title, Content, InputGroup, Input } from 'native-base';
import Communications from 'react-native-communications';


import * as url from '../app/global';

export default class Details extends Component {
  constructor () {
      super();
      this.state = {
        goHome: false,
        goFav: false,
        goCategories: false,
        users: '',
        loader: true,
        cloader: true,
        categories: '',
        loc:''
      };
   }


   fetchLoc() {
         fetch('http://ip-api.com/json')
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ loc: responseJson, cloader: false}); })
         .catch((error) => { console.error(error); });
       }

   fetchUsers() {

         fetch('http://192.168.43.92:3000/home.json/?id='+this.props.id+'&lat=9.9833&lon=76.2833')
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ users: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });


       }
   fetchCat() {
         fetch('http://192.168.43.92:3000/categories.json')
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ categories: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }

       componentDidMount()
       {
         this.fetchUsers();
       }

       componentWillMount()
       {
         BackAndroid.addEventListener('hardwareBackPress', () => {
         this.setState({goCategories: true})
           return true;
       });
       }

       favourite(a,b,c,d)
       {
         RNFS.writeFile(path, a)
         .then((success) => {
           console.log('FILE WRITTEN!');
         })
         .catch((err) => {
           console.log(err.message);
         });

       }

  render() {
    if(this.state.goHome) return <Home />
      if(this.state.goCategories) return <Categories />
      if(this.state.goFav) return <Favourites />
      if(this.state.goAdd) return <Add />
    return(
    <Container>
    <Header style={{ backgroundColor: '#333745' }}>

                <Left>
                <Icon name='ios-arrow-back-outline' onPress={() => this.setState({goCategories: true})} style={{fontSize: 30, color: 'white'}}/>
                </Left>
                <Title style={{paddingTop:15, fontSize: 20, fontWeight: 'bold'}}>{this.props.name}</Title>
                <Right>
                <Icon onPress={() => this.setState({goAdd: true})} name="ios-add"  style={{fontSize: 40, color: 'white'}} />
                </Right>
            </Header>

            <Content>
            <List dataArray={this.state.users}
                                  renderRow={(users) =>
                    <ListItem>
                        <Icon active name="ios-person-outline" />
                        <Body>
                            <Text>{users.fname+ " " + users.lname}</Text>



                            <Text note>{users.phone}</Text>

                             </Body>
                            <Button onPress={() =>  Communications.phonecall(users.phone, true)} small transparent >
                              <Icon name='ios-call' />
                            </Button>
                            <Button onPress={() =>  this.favourite(users.fname,users.lname,users.phone,users.category_id)} small transparent >
                              <Icon name='ios-heart-outline' />
                            </Button>
                      </ListItem>
                    } />
            </Content>



    </Container>
  );
  }_
}
