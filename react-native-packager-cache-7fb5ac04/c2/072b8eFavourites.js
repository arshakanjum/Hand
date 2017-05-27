Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Categories=require('./Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);
var _Add=require('./Add');var _Add2=babelHelpers.interopRequireDefault(_Add);


var _nativeBase=require('native-base');var


Favourites=function(_Component){babelHelpers.inherits(Favourites,_Component);
function Favourites(){babelHelpers.classCallCheck(this,Favourites);var _this=babelHelpers.possibleConstructorReturn(this,(Favourites.__proto__||Object.getPrototypeOf(Favourites)).call(this));

_this.state={
goHome:false,
goFav:false,
goCategories:false};return _this;


}babelHelpers.createClass(Favourites,[{key:'render',value:function render()


{var _this2=this;
if(this.state.goHome)return _react2.default.createElement(_Home2.default,null);
if(this.state.goCategories)return _react2.default.createElement(_Categories2.default,null);
if(this.state.goFav)return _react2.default.createElement(Favourites,null);
if(this.state.goAdd)return _react2.default.createElement(_Add2.default,null);
return(
_react2.default.createElement(_nativeBase.Container,null,
_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'}},


_react2.default.createElement(_nativeBase.Title,{style:{paddingTop:15,fontSize:20,fontWeight:'bold'}},'Favourites'),
_react2.default.createElement(_nativeBase.Right,null,
_react2.default.createElement(_nativeBase.Icon,{onPress:function onPress(){return _this2.setState({goAdd:true});},name:'ios-add',style:{fontSize:40,color:'white'}}))),



_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.Card,null,
_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Left,null,
_react2.default.createElement(_nativeBase.Icon,{active:true,name:'ios-person-outline'}),
_react2.default.createElement(_nativeBase.Body,null,
_react2.default.createElement(_nativeBase.Text,null,'Sivaprasad'),
_react2.default.createElement(_nativeBase.Text,{note:true},'Category: Plumbing'),
_react2.default.createElement(_nativeBase.Text,{note:true},'9544051678')))),



_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Left,null,
_react2.default.createElement(_nativeBase.Icon,{active:true,name:'ios-person-outline'}),
_react2.default.createElement(_nativeBase.Body,null,
_react2.default.createElement(_nativeBase.Text,null,'Babu'),
_react2.default.createElement(_nativeBase.Text,{note:true},'Category: Driver'),
_react2.default.createElement(_nativeBase.Text,{note:true},'9497628970')))),



_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Left,null,
_react2.default.createElement(_nativeBase.Icon,{active:true,name:'ios-person-outline'}),
_react2.default.createElement(_nativeBase.Body,null,
_react2.default.createElement(_nativeBase.Text,null,'Gopi'),
_react2.default.createElement(_nativeBase.Text,{note:true},'Category: Electrician'),
_react2.default.createElement(_nativeBase.Text,{note:true},'9544051678')))))),








_react2.default.createElement(_nativeBase.Footer,null,
_react2.default.createElement(_nativeBase.FooterTab,{style:{backgroundColor:'#333745'}},
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this2.setState({goHome:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Search'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-search-outline'})),

_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this2.setState({goCategories:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Categories'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-browsers-outline'})),

_react2.default.createElement(_nativeBase.Button,{active:true,onPress:function onPress(){return _this2.setState({goFav:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Favourites'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-heart-outline'}))))));





}}]);return Favourites;}(_react.Component);exports.default=Favourites;var




BackgroundImage=function(_Component2){babelHelpers.inherits(BackgroundImage,_Component2);function BackgroundImage(){babelHelpers.classCallCheck(this,BackgroundImage);return babelHelpers.possibleConstructorReturn(this,(BackgroundImage.__proto__||Object.getPrototypeOf(BackgroundImage)).apply(this,arguments));}babelHelpers.createClass(BackgroundImage,[{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.Image,{style:styles.backgroundImage,source:require('./flat-wallpaper.png')},

this.props.children));



}}]);return BackgroundImage;}(_react.Component);


var styles=_reactNative.StyleSheet.create({
backgroundImage:{
flex:1,
width:null,
height:null}});