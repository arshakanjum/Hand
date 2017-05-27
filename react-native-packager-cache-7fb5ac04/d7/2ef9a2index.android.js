Object.defineProperty(exports,"__esModule",{value:true});exports.Hand=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');










var _Home=require('./app/Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Categories=require('./app/Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);
var _Favourites=require('./app/Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);
var _Add=require('./app/Add');var _Add2=babelHelpers.interopRequireDefault(_Add);
var _Intro=require('./app/Intro');var _Intro2=babelHelpers.interopRequireDefault(_Intro);

var _nativeBase=require('native-base');var

Hand=exports.Hand=function(_Component){babelHelpers.inherits(Hand,_Component);

function Hand(){babelHelpers.classCallCheck(this,Hand);var _this=babelHelpers.possibleConstructorReturn(this,(Hand.__proto__||Object.getPrototypeOf(Hand)).call(this));

_this.state={
goCategories:false,
goFav:false};return _this;

}babelHelpers.createClass(Hand,[{key:'render',value:function render()

{var _this2=this;
if(this.state.goCategories)return _react2.default.createElement(_Intro2.default,null);
if(this.state.goFav)return _react2.default.createElement(_Intro2.default,null);
_reactNative.NetInfo.fetch().done(function(reach){
if(reach=='NONE'){
_this2.setState({goFav:true});
_reactNative.Alert.alert(
'No Connectivity',
'Hand requires an active network connection, You can still access favourite contacts while disconnected.',
[{text:'Ok'}]);

return _react2.default.createElement(_Favourites2.default,null);
}else
{
_this2.setState({goCategories:true});
}
});
return _react2.default.createElement(_Intro2.default,null);

}}]);return Hand;}(_react.Component);


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




_reactNative.AppRegistry.registerComponent('Hand',function(){return Hand;});