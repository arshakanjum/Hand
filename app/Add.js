
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  AppRegistry,
  View,
  Picker,
  BackAndroid,
  TextInput,
  ToastAndroid,
  Alert
} from 'react-native';

var PickerItem = Picker.Item;

import ModalPicker from 'react-native-modal-picker'
import Home from './Home';
import Favourites from './Favourites';
import Categories from './Categories';

import * as url from '../app/global';

import { Container, Label, Form, Item, Grid, Card, Col, Row, CardItem, Header, List, ListItem, Button, Text, Left, Right, Icon, Body, Title, Content, Footer, FooterTab, TouchableOpacity, InputGroup, Input } from 'native-base';

export default class Add extends Component {
  constructor () {
      super();
      this.state = {
        goHome: false,
        fname:'',
        lname:'',
        phone:'',
        loc:'null',
        goCategories: false,
        selected1: false,
        services: ['a','b','c'],
        selectedcat: '1',
        categories:[],
        phonef:'',
        latitude:null,
        longitude:null,
        error:null,
        loc:'{"as":"AS55836 Reliance Jio Infocomm Limited","city":"Kochi","country":"India","countryCode":"IN","isp":"Jio","lat":9.9833,"lon":76.2833,"org":"Jio","query":"137.97.13.96","region":"KL","regionName":"Kerala","status":"success","timezone":"Asia/Kolkata","zip":"682011"}'
      };
   }

   fetchData() {
         fetch(url.curl)
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ categories: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }
   fetchLoc() {
         fetch('http://ip-api.com/json')
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ loc: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }
   fetchPhone() {
         fetch('http://192.168.43.92:3000/phone.json/?phone='+this.state.phone)
         .then((response) => response.json())
         .then((responseJson) => { this.setState({ phonef: responseJson, loader: false}); })
         .catch((error) => { console.error(error); });
       }
   postData()
      {
        fetch(url.uurl, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({
          fname:this.state.fname,
          lname:this.state.lname,
          phone:this.state.phone,
          lat:this.state.loc.lat,
          lon:this.state.loc.lon,
          category_id:this.state.selectedcat
      })

    })

    }



    handleChange() {
      this.fetchPhone();
      if (this.state.phonef.length= 0)
      {
        ToastAndroid.show('User with the phone number already exists', ToastAndroid.SHORT);
      }

      else if(this.state.fname.length==0||this.state.lname.length==0||this.state.phone.length==0||this.state.loc.length==0||this.state.selectedcat.length==0)
      {
      ToastAndroid.show('Required field cannot empty', ToastAndroid.SHORT);


      }
      else if(this.state.phone.length<10)
      {
      ToastAndroid.show('Please check phone number', ToastAndroid.SHORT);


      }
      else {
        ToastAndroid.show('Successfully Added', ToastAndroid.SHORT);
        this.postData();
        this.setState({goCategories: true});
      }
      }

       componentDidMount()
       {
         this.fetchLoc();
         this.fetchData();
    }

    componentWillMount()
    {
      BackAndroid.addEventListener('hardwareBackPress', () => {
      this.setState({goCategories: true})
        return true;
    });
    }


  render() {
    if(this.state.goHome) return <Home />
      if(this.state.goCategories) return <Categories />
      if(this.state.goFav) return <Favourites />
  return(
    <Container>

    <Header style={{ backgroundColor: '#333745' }}>

              <Left>
              <Icon name='ios-arrow-back-outline' onPress={() => this.setState({goCategories: true})} style={{fontSize: 30, color: 'white'}}/>
              </Left>
              <Body>
                <Title style={{fontSize: 20, fontWeight: 'bold'}}>Add Person</Title>
              </Body>
            </Header>

            <Content>
                    <InputGroup>
                        <Input onChangeText={(text) => this.setState({fname:text})}
                          placeholder="First Name" />
                    </InputGroup>
                    <InputGroup>

                        <Input onChangeText={(text) => this.setState({lname:text})}
                          placeholder="Last Name" />
                    </InputGroup>

                    <InputGroup>
                    <Text>Select Category:</Text>
                    </InputGroup>
                    <Picker
                    label='Select Category'
                    selectedValue={this.state.selectedcat}
                    onValueChange={ (category) => (this.setState({selectedcat:category}) ) }  >
                    { this.state.categories.map((s, i) => {
                        return <PickerItem
                                 key={i}
                                 value={s.id}
                                 label={s.cname} />
                     }) }
                     </Picker>

                    <InputGroup >
                        <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                        <Input onChangeText={(text) => this.setState({phone:text})}
                          placeholder="Phone" keyboardType="numeric" />
                    </InputGroup>




                    <Button onPress={()=>this.handleChange()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        <Text>Add</Text>
                    </Button>

                    <Text style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>Location :{this.state.loc.city}</Text>



                </Content>

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
    container: {
        flex: 1,
        flexDirection: 'column'
    }
    })
