Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _ActionButtonItem=require('./ActionButtonItem');var _ActionButtonItem2=babelHelpers.interopRequireDefault(_ActionButtonItem);
var _shared=require('./shared');var

ActionButton=function(_Component){babelHelpers.inherits(ActionButton,_Component);
function ActionButton(props){babelHelpers.classCallCheck(this,ActionButton);var _this=babelHelpers.possibleConstructorReturn(this,(ActionButton.__proto__||Object.getPrototypeOf(ActionButton)).call(this,
props));

_this.state={
active:props.active};


_this.anim=new _reactNative.Animated.Value(props.active?1:0);
_this.timeout=null;return _this;
}babelHelpers.createClass(ActionButton,[{key:'componentWillUnmount',value:function componentWillUnmount()

{
clearTimeout(this.timeout);
}},{key:'getOrientation',value:function getOrientation()






{
return{alignItems:_shared.alignItemsMap[this.props.position]};
}},{key:'getOffsetXY',value:function getOffsetXY()

{
return{

paddingVertical:this.props.offsetY};

}},{key:'getOverlayStyles',value:function getOverlayStyles()

{
return[
styles.overlay,
{
justifyContent:this.props.verticalOrientation==='up'?'flex-end':'flex-start'}];


}},{key:'render',value:function render()






{
return(
_react2.default.createElement(_reactNative.View,{pointerEvents:'box-none',style:this.getOverlayStyles()},
_react2.default.createElement(_reactNative.Animated.View,{pointerEvents:'none',style:[this.getOverlayStyles(),{
backgroundColor:this.props.bgColor,
opacity:this.anim}]},

this.props.backdrop),

_react2.default.createElement(_reactNative.View,{pointerEvents:'box-none',style:[this.getOverlayStyles(),this.getOrientation(),this.getOffsetXY()]},
this.state.active&&!this.props.backgroundTappable&&this._renderTappableBackground(),

this.props.verticalOrientation==='up'&&
this.props.children&&this._renderActions(),
this._renderMainButton(),
this.props.verticalOrientation==='down'&&
this.props.children&&this._renderActions())));



}},{key:'_renderMainButton',value:function _renderMainButton()

{var _this2=this;
var animatedViewStyle={
transform:[{
scale:this.anim.interpolate({
inputRange:[0,1],
outputRange:[1,this.props.outRangeScale]})},

{
rotate:this.anim.interpolate({
inputRange:[0,1],
outputRange:['0deg',this.props.degrees+'deg']})}]};




var wrapperStyle={
backgroundColor:this.anim.interpolate({
inputRange:[0,1],
outputRange:[this.props.buttonColor,this.props.btnOutRange||this.props.buttonColor]}),

width:this.props.size,
height:this.props.size,
borderRadius:this.props.size/2};


var buttonStyle={
width:this.props.size,
height:this.props.size,
borderRadius:this.props.size/2,
alignItems:'center',
justifyContent:'center'};


var Touchable=(0,_shared.getTouchableComponent)(this.props.useNativeFeedback);

return(
_react2.default.createElement(_reactNative.View,{style:{paddingHorizontal:this.props.offsetX}},
_react2.default.createElement(Touchable,{
background:_shared.touchableBackground,
activeOpacity:this.props.activeOpacity,
onLongPress:this.props.onLongPress,
onPress:function onPress(){
_this2.props.onPress();
if(_this2.props.children)_this2.animateButton();
}},
_react2.default.createElement(_reactNative.Animated.View,{style:[wrapperStyle,!this.props.hideShadow&&_shared.shadowStyle]},
_react2.default.createElement(_reactNative.Animated.View,{style:[buttonStyle,animatedViewStyle]},
this._renderButtonIcon())))));





}},{key:'_renderButtonIcon',value:function _renderButtonIcon()

{var _props=
this.props,icon=_props.icon,btnOutRangeTxt=_props.btnOutRangeTxt,buttonTextColor=_props.buttonTextColor;
if(icon)return icon;

return(
_react2.default.createElement(_reactNative.Animated.Text,{style:[styles.btnText,{
color:this.anim.interpolate({
inputRange:[0,1],
outputRange:[buttonTextColor,btnOutRangeTxt||buttonTextColor]})}]},'+'));





}},{key:'_renderActions',value:function _renderActions()

{var _this3=this;var _props2=
this.props,children=_props2.children,verticalOrientation=_props2.verticalOrientation;

if(!this.state.active)return null;

var actionButtons=!Array.isArray(children)?[children]:children;

var actionStyle={
flex:1,
alignSelf:'stretch',

justifyContent:verticalOrientation==='up'?'flex-end':'flex-start',
paddingTop:this.props.verticalOrientation==='down'?this.props.spacing:0};


return(
_react2.default.createElement(_reactNative.View,{style:actionStyle,pointerEvents:'box-none'},
actionButtons.map(function(ActionButton,idx){return(
_react2.default.createElement(_ActionButtonItem2.default,babelHelpers.extends({
key:idx,
anim:_this3.anim},
_this3.props,
ActionButton.props,{
parentSize:_this3.props.size,
btnColor:_this3.props.btnOutRange,
onPress:function onPress(){
if(_this3.props.autoInactive){
_this3.timeout=setTimeout(_this3.reset.bind(_this3),200);
}
ActionButton.props.onPress();
}})));})));




}},{key:'_renderTappableBackground',value:function _renderTappableBackground()

{
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
activeOpacity:1,
style:this.getOverlayStyles(),
onPress:this.reset.bind(this)}));


}},{key:'animateButton',value:function animateButton()






{var animate=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;
if(this.state.active)return this.reset();

if(animate){
_reactNative.Animated.spring(this.anim,{toValue:1}).start();
}else{
this.anim.setValue(1);
}

this.setState({active:true});
}},{key:'reset',value:function reset()

{var _this4=this;var animate=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;
if(this.props.onReset)this.props.onReset();

if(animate){
_reactNative.Animated.spring(this.anim,{toValue:0}).start();
}else{
this.anim.setValue(0);
}

setTimeout(function(){return _this4.setState({active:false});},250);
}}]);return ActionButton;}(_react.Component);exports.default=ActionButton;


ActionButton.Item=_ActionButtonItem2.default;

ActionButton.propTypes={
active:_react.PropTypes.bool,

position:_react.PropTypes.string,

hideShadow:_react.PropTypes.bool,

bgColor:_react.PropTypes.string,
buttonColor:_react.PropTypes.string,
buttonTextColor:_react.PropTypes.string,

offsetX:_react.PropTypes.number,
offsetY:_react.PropTypes.number,
spacing:_react.PropTypes.number,
size:_react.PropTypes.number,
autoInactive:_react.PropTypes.bool,
onPress:_react.PropTypes.func,
backdrop:_react.PropTypes.oneOfType([
_react.PropTypes.bool,
_react.PropTypes.object]),

degrees:_react.PropTypes.number,
verticalOrientation:_react.PropTypes.oneOf(['up','down']),
backgroundTappable:_react.PropTypes.bool,
useNativeFeedback:_react.PropTypes.bool,
activeOpacity:_react.PropTypes.number};


ActionButton.defaultProps={
active:false,
bgColor:'transparent',
buttonColor:'rgba(0,0,0,1)',
buttonTextColor:'rgba(255,255,255,1)',
spacing:20,
outRangeScale:1,
autoInactive:true,
onPress:function onPress(){},
backdrop:false,
degrees:45,
position:'right',
offsetX:30,
offsetY:30,
size:56,
verticalOrientation:'up',
backgroundTappable:false,
useNativeFeedback:true,
activeOpacity:_shared.DEFAULT_ACTIVE_OPACITY};


var styles=_reactNative.StyleSheet.create({
overlay:{
position:'absolute',
bottom:0,
left:0,
right:0,
top:0,
backgroundColor:'transparent'},

btnText:{
marginTop:-4,
fontSize:24,
backgroundColor:'transparent'}});