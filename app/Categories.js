
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

import { Container, Form,Fab, Item, Spinner,Grid, Card, CardItem, Col, Row, Header, List, ListItem, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';
import ActionButton from 'react-native-action-button';

import * as url from '../app/global';

export default class Categories extends Component {
  constructor () {
      super();
      this.state = {
        goHome: false,
        goCategories: false,
        goAdd: false,
        goFav: false,
        goDetails: false,
        categories:[],
        loader: true,
        active:false,
        id:'',
        name:''
      };
   }

   fetchData() {
         fetch(url.curl)
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ categories: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }


  componentWillMount()
  {
    this.fetchData();
  }

  render() {


    if(this.state.goHome) return <Home />
      if(this.state.goCategories) return <Categories />
      if(this.state.goFav) return <Favourites />
      if(this.state.goAdd) return <Add />
      if(this.state.goDetails) return <Details id={this.state.id} name={this.state.name} />

      NetInfo.fetch().done((reach) => {
        if(reach=='NONE') {

          this.setState({goFav: true})

        }})

        setTimeout(() => {this.setState({timePassed: true})}, 50)
        if (this.state.loader){
          return(<Spinner color="blue" />) ;
        }
        else
        {return(




      <Container>
      <Header style={{ backgroundColor: '#333745' }}>


                  <Title style={{paddingTop:15, fontSize: 20, fontWeight: 'bold'}}>Categories</Title>
                  <Right>
                  <Icon onPress={() => this.setState({goAdd: true})} name="ios-add"  style={{fontSize: 40, color: 'white'}} />
                  </Right>
       </Header>

              <Content style={{flex:1, backgroundColor: '#f3f3f3'}}>


              <List dataArray={this.state.categories }

                                    renderRow={ (category) =>
                                      <ListItem onPress={() => {this.setState({id: category.id, name: category.cname, goDetails:true});}}>
                                        <Text>{category.cname}</Text>
                                      </ListItem>
                                    } />


                </Content>

      <Footer>
                    <FooterTab style={{ backgroundColor: '#333745' }}>
                        <Button onPress={() => this.setState({goHome: true})}>
                            <Text>Search</Text>
                            <Icon name='ios-search-outline' />
                        </Button>
                        <Button active onPress={() => this.setState({goCategories: true})}>
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
    );}
}
}
