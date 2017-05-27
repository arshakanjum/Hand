Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');







var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Favourites=require('./Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);
var _Add=require('./Add');var _Add2=babelHelpers.interopRequireDefault(_Add);
var _Details=require('./Details');var _Details2=babelHelpers.interopRequireDefault(_Details);

var _nativeBase=require('native-base');
var _reactNativeActionButton=require('react-native-action-button');var _reactNativeActionButton2=babelHelpers.interopRequireDefault(_reactNativeActionButton);var

Categories=function(_Component){babelHelpers.inherits(Categories,_Component);
function Categories(){babelHelpers.classCallCheck(this,Categories);var _this=babelHelpers.possibleConstructorReturn(this,(Categories.__proto__||Object.getPrototypeOf(Categories)).call(this));

_this.state={
goHome:false,
goCategories:false,
goAdd:false,
goFav:false,
goDetails:false,
categories:[],
loader:true,
active:false,
id:''};return _this;

}babelHelpers.createClass(Categories,[{key:'fetchData',value:function fetchData()

{var _this2=this;
var gurl='http://f778227c.ngrok.io/categories.json';
var lurl='http://192.168.10.207:3000/categories.json';
fetch(lurl).
then(function(response){return response.json();}).
then(function(responseJson){_this2.setState({categories:responseJson,loader:false});}).
catch(function(error){console.error(error);});
}},{key:'postData',value:function postData()

{var _this3=this;
var lurl='http://192.168.10.207:3000/categories.json';
fetch(lurl).
then(function(response){return response.json();}).
then(function(responseJson){_this3.setState({categories:responseJson});}).
catch(function(error){console.error(error);});
}},{key:'componentDidMount',value:function componentDidMount()



{
this.fetchData();
}},{key:'render',value:function render()

{var _this4=this;


if(this.state.goHome)return _react2.default.createElement(_Home2.default,null);
if(this.state.goCategories)return _react2.default.createElement(Categories,null);
if(this.state.goFav)return _react2.default.createElement(_Favourites2.default,null);
if(this.state.goAdd)return _react2.default.createElement(_Add2.default,null);
if(this.state.goDetails)return _react2.default.createElement(_Details2.default,{id:this.state.id});

_reactNative.NetInfo.fetch().done(function(reach){
if(reach=='NONE'){

_this4.setState({goFav:true});

}});

setTimeout(function(){_this4.setState({timePassed:true});},50);
if(this.state.loader){
return _react2.default.createElement(_nativeBase.Spinner,{color:'blue'});
}else

{return(




_react2.default.createElement(_nativeBase.Container,null,
_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'}},


_react2.default.createElement(_nativeBase.Title,{style:{paddingTop:15,fontSize:20,fontWeight:'bold'}},'Categories'),
_react2.default.createElement(_nativeBase.Right,null,
_react2.default.createElement(_nativeBase.Icon,{onPress:function onPress(){return _this4.setState({goAdd:true});},name:'ios-add',style:{fontSize:40,color:'white'}}))),



_react2.default.createElement(_nativeBase.Content,{style:{flex:1,backgroundColor:'#f3f3f3'}},


_react2.default.createElement(_nativeBase.List,{dataArray:this.state.categories,

renderRow:function renderRow(category){return(
_react2.default.createElement(_nativeBase.ListItem,{onPress:function onPress(){_this4.setState({id:category.cname,goDetails:true});}},
_react2.default.createElement(_nativeBase.Text,null,category.cname)));}})),






_react2.default.createElement(_nativeBase.Footer,null,
_react2.default.createElement(_nativeBase.FooterTab,{style:{backgroundColor:'#333745'}},
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this4.setState({goHome:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Search'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-search-outline'})),

_react2.default.createElement(_nativeBase.Button,{active:true,onPress:function onPress(){return _this4.setState({goCategories:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Categories'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-browsers-outline'})),

_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this4.setState({goFav:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Favourites'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-heart-outline'}))))));




}
}}]);return Categories;}(_react.Component);exports.default=Categories;var


BackgroundImage=function(_Component2){babelHelpers.inherits(BackgroundImage,_Component2);function BackgroundImage(){babelHelpers.classCallCheck(this,BackgroundImage);return babelHelpers.possibleConstructorReturn(this,(BackgroundImage.__proto__||Object.getPrototypeOf(BackgroundImage)).apply(this,arguments));}babelHelpers.createClass(BackgroundImage,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.Image,{style:styles.backgroundImage,source:require('./flat-wallpaper.png')},

this.props.children));



}}]);return BackgroundImage;}(_react.Component);

var styles=_reactNative.StyleSheet.create({
actionButtonIcon:{
fontSize:20,
height:22,
color:'white'},

actionButton:{
width:60,
height:60,
borderRadius:30,
backgroundColor:'#ee6e73',
position:'absolute',
bottom:10,
right:10}});