Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');













var _reactNativeMaps=require('react-native-maps');var _reactNativeMaps2=babelHelpers.interopRequireDefault(_reactNativeMaps);
var _reactNativeModalPicker=require('react-native-modal-picker');var _reactNativeModalPicker2=babelHelpers.interopRequireDefault(_reactNativeModalPicker);
var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Favourites=require('./Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);
var _Categories=require('./Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);

var _nativeBase=require('native-base');var PickerItem=_reactNative.Picker.Item;var

Add=function(_Component){babelHelpers.inherits(Add,_Component);
function Add(){babelHelpers.classCallCheck(this,Add);var _this=babelHelpers.possibleConstructorReturn(this,(Add.__proto__||Object.getPrototypeOf(Add)).call(this));

_this.state={
goHome:false,
fname:'',
lname:'',
phone:'',
loc:'null',
goCategories:false,
selected1:false,
services:['a','b','c'],
selectedcat:'1',
categories:[]};return _this;

}babelHelpers.createClass(Add,[{key:'fetchData',value:function fetchData()

{var _this2=this;
var gurl='http://f778227c.ngrok.io/categories.json';
var lurl='http://192.168.10.207:3000/categories.json';
fetch(lurl).
then(function(response){return response.json();}).
then(function(responseJson){_this2.setState({categories:responseJson,loader:false});}).
catch(function(error){console.error(error);});
}},{key:'postData',value:function postData()

{
var gurl='http://f778227c.ngrok.io/users.json';
var lurl='http://192.168.10.207:3000/users.json';
fetch(lurl,{
method:'POST',
headers:{'Accept':'application/json','Content-Type':'application/json'},
body:JSON.stringify({
fname:this.state.fname,
lname:this.state.lname,
phone:this.state.phone,
location:this.state.loc,
category_id:this.state.selectedcat})});




}},{key:'handleChange',value:function handleChange()

{
if(this.state.fname.length==0||this.state.lname.length==0||this.state.phone.length==0||this.state.loc.length==0||this.state.selectedcat.length==0)
{
_reactNative.ToastAndroid.show('Required field cannot empty',_reactNative.ToastAndroid.SHORT);


}else
{
_reactNative.ToastAndroid.show('Successfully Added',_reactNative.ToastAndroid.SHORT);
this.postData();
this.setState({goCategories:true});
}
}},{key:'componentDidMount',value:function componentDidMount()


{
this.fetchData();
}},{key:'componentWillMount',value:function componentWillMount()


{var _this3=this;
_reactNative.BackAndroid.addEventListener('hardwareBackPress',function(){
_this3.setState({goCategories:true});
return true;
});
}},{key:'render',value:function render()


{var _this4=this;
if(this.state.goHome)return _react2.default.createElement(_Home2.default,null);
if(this.state.goCategories)return _react2.default.createElement(_Categories2.default,null);
if(this.state.goFav)return _react2.default.createElement(_Favourites2.default,null);
return(
_react2.default.createElement(_nativeBase.Container,null,
_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'}},

_react2.default.createElement(_nativeBase.Left,null,
_react2.default.createElement(_nativeBase.Icon,{name:'ios-arrow-back-outline',onPress:function onPress(){return _this4.setState({goCategories:true});},style:{fontSize:30,color:'white'}})),

_react2.default.createElement(_nativeBase.Body,null,
_react2.default.createElement(_nativeBase.Title,{style:{fontSize:20,fontWeight:'bold'}},'Add Person'))),



_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.InputGroup,null,
_react2.default.createElement(_nativeBase.Input,{onChangeText:function onChangeText(text){return _this4.setState({fname:text});},
placeholder:'First Name'})),

_react2.default.createElement(_nativeBase.InputGroup,null,

_react2.default.createElement(_nativeBase.Input,{onChangeText:function onChangeText(text){return _this4.setState({lname:text});},
placeholder:'Last Name'})),


_react2.default.createElement(_nativeBase.InputGroup,null,
_react2.default.createElement(_nativeBase.Text,null,'Select Category:')),

_react2.default.createElement(_reactNative.Picker,{
label:'Select Category',
selectedValue:this.state.selectedcat,
onValueChange:function onValueChange(category){return _this4.setState({selectedcat:category});}},
this.state.categories.map(function(s,i){
return _react2.default.createElement(PickerItem,{
key:i,
value:s.id,
label:s.cname});
})),


_react2.default.createElement(_nativeBase.InputGroup,null,
_react2.default.createElement(_nativeBase.Icon,{name:'ios-call',style:{color:'#0A69FE'}}),
_react2.default.createElement(_nativeBase.Input,{onChangeText:function onChangeText(text){return _this4.setState({phone:text});},
placeholder:'Phone',keyboardType:'numeric'})),

_react2.default.createElement(_nativeBase.InputGroup,null,
_react2.default.createElement(_nativeBase.Icon,{name:'ios-pin',style:{color:'#0A69FE'}}),
_react2.default.createElement(_nativeBase.Input,{placeholder:'Location',keyboardType:'numeric'})),




_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this4.handleChange();},style:{alignSelf:'center',marginTop:20,marginBottom:20}},
_react2.default.createElement(_nativeBase.Text,null,'Add')))));








}}]);return Add;}(_react.Component);exports.default=Add;var


BackgroundImage=function(_Component2){babelHelpers.inherits(BackgroundImage,_Component2);function BackgroundImage(){babelHelpers.classCallCheck(this,BackgroundImage);return babelHelpers.possibleConstructorReturn(this,(BackgroundImage.__proto__||Object.getPrototypeOf(BackgroundImage)).apply(this,arguments));}babelHelpers.createClass(BackgroundImage,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.Image,{style:styles.backgroundImage,source:require('./flat-wallpaper.png')},

this.props.children));



}}]);return BackgroundImage;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
flexDirection:'column'}});