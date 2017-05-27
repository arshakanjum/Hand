Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Categories=require('./Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);
var _Favourites=require('./Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);

var _nativeBase=require('native-base');var


Home=function(_Component){babelHelpers.inherits(Home,_Component);
function Home(){babelHelpers.classCallCheck(this,Home);var _this=babelHelpers.possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this));

_this.state={
goHome:false,
goCategories:false,
goFav:false,
active:true};return _this;


}babelHelpers.createClass(Home,[{key:'render',value:function render()


{var _this2=this;
if(this.state.goHome)return _react2.default.createElement(Home,null);
if(this.state.goCategories)return _react2.default.createElement(_Categories2.default,null);
if(this.state.goFav)return _react2.default.createElement(_Favourites2.default,null);
return(

_react2.default.createElement(_nativeBase.Container,null,

_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'},hasTabs:true,searchBar:true,rounded:true},
_react2.default.createElement(_nativeBase.Item,null,
_react2.default.createElement(_nativeBase.Icon,{name:'search'}),
_react2.default.createElement(_nativeBase.Input,{placeholder:'Search'})),

_react2.default.createElement(_nativeBase.Button,{transparent:true},
_react2.default.createElement(_nativeBase.Text,null,'Search'))),



_react2.default.createElement(_nativeBase.Content,null,

_react2.default.createElement(_nativeBase.Fab,{
active:this.state.active,
direction:'right',
containerStyle:{marginLeft:10},
style:{backgroundColor:'#5067FF'},
position:'bottomLeft',
onPress:function onPress(){return _this2.setState({active:!_this2.state.active});}},

_react2.default.createElement(_nativeBase.Icon,{name:'md-share'}),
_react2.default.createElement(_nativeBase.Button,{style:{backgroundColor:'#34A34F'}},
_react2.default.createElement(_nativeBase.Icon,{name:'logo-whatsapp'})),

_react2.default.createElement(_nativeBase.Button,{style:{backgroundColor:'#3B5998'}},
_react2.default.createElement(_nativeBase.Icon,{name:'logo-facebook'})),

_react2.default.createElement(_nativeBase.Button,{disabled:true,style:{backgroundColor:'#DD5144'}},
_react2.default.createElement(_nativeBase.Icon,{name:'ios-mail'})))),





_react2.default.createElement(_nativeBase.Footer,null,
_react2.default.createElement(_nativeBase.FooterTab,{style:{backgroundColor:'#333745'}},
_react2.default.createElement(_nativeBase.Button,{active:true,onPress:function onPress(){return _this2.setState({goHome:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Search'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-search-outline'})),

_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this2.setState({goCategories:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Categories'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-browsers-outline'})),

_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _this2.setState({goFav:true});}},
_react2.default.createElement(_nativeBase.Text,null,'Favourites'),
_react2.default.createElement(_nativeBase.Icon,{name:'ios-heart-outline'}))))));








}}]);return Home;}(_react.Component);exports.default=Home;var


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
height:null},

content:{
justifyContent:'center',
alignItems:'center'}});