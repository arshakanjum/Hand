Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Favourites=require('./Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);
var _Add=require('./Add');var _Add2=babelHelpers.interopRequireDefault(_Add);
var _Categories=require('./Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);
var _Header=require('./Header');var _Header2=babelHelpers.interopRequireDefault(_Header);

var _reactNativeMaps=require('react-native-maps');var _reactNativeMaps2=babelHelpers.interopRequireDefault(_reactNativeMaps);

var _nativeBase=require('native-base');var


Intro=function(_Component){babelHelpers.inherits(Intro,_Component);
function Intro(props){babelHelpers.classCallCheck(this,Intro);var _this=babelHelpers.possibleConstructorReturn(this,(Intro.__proto__||Object.getPrototypeOf(Intro)).call(this,
props));
_this.state={
timePassed:false};return _this;

}babelHelpers.createClass(Intro,[{key:'render',value:function render()

{var _this2=this;
setTimeout(function(){_this2.setState({timePassed:true});},50);
if(this.state.timePassed){
return _react2.default.createElement(_Categories2.default,null);
}else{
return(
_react2.default.createElement(_reactNative.View,{style:styles.center},
_react2.default.createElement(_reactNative.Image,{style:styles.image,
source:require('./hand-logo.png')}),


_react2.default.createElement(_nativeBase.Spinner,{color:'white'})));



}
}}]);return Intro;}(_react.Component);exports.default=Intro;var


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


center:{
flex:1,
backgroundColor:'#333745',
justifyContent:'center',
alignItems:'center'},


image:{
marginBottom:40,
borderColor:'white',
alignItems:'center',
width:150,
height:150}});