Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var _shared=require('./shared');var _Dimensions$get=

_reactNative.Dimensions.get('window'),WIDTH=_Dimensions$get.width;
var SHADOW_SPACE=10;
var TEXT_HEIGHT=22;

var TextTouchable=_shared.isAndroid?_reactNative.TouchableNativeFeedback:_reactNative.TouchableWithoutFeedback;var

ActionButtonItem=function(_Component){babelHelpers.inherits(ActionButtonItem,_Component);function ActionButtonItem(){babelHelpers.classCallCheck(this,ActionButtonItem);return babelHelpers.possibleConstructorReturn(this,(ActionButtonItem.__proto__||Object.getPrototypeOf(ActionButtonItem)).apply(this,arguments));}babelHelpers.createClass(ActionButtonItem,[{key:'render',value:function render()

















{var _props=
this.props,size=_props.size,position=_props.position,verticalOrientation=_props.verticalOrientation,hideShadow=_props.hideShadow,spacing=_props.spacing;

if(!this.props.active)return null;

var animatedViewStyle={
height:size+SHADOW_SPACE+spacing,
marginBottom:-SHADOW_SPACE,
paddingHorizontal:this.props.offsetX,
alignItems:_shared.alignItemsMap[position],


opacity:this.props.anim,
transform:[
{
translateY:this.props.anim.interpolate({
inputRange:[0,1],
outputRange:[verticalOrientation==='down'?-40:40,0]})}]};





var buttonStyle={
justifyContent:'center',
alignItems:'center',
width:size,
height:size,
borderRadius:size/2,
backgroundColor:this.props.buttonColor||this.props.btnColor};


if(position!=='center')buttonStyle[position]=(this.props.parentSize-size)/2;

var Touchable=(0,_shared.getTouchableComponent)(this.props.useNativeFeedback);

return(
_react2.default.createElement(_reactNative.Animated.View,{pointerEvents:'box-none',style:animatedViewStyle},
_react2.default.createElement(Touchable,{
background:_shared.touchableBackground,
activeOpacity:this.props.activeOpacity||_shared.DEFAULT_ACTIVE_OPACITY,
onPress:this.props.onPress},
_react2.default.createElement(_reactNative.View,{
style:[buttonStyle,!hideShadow&&_shared.shadowStyle,this.props.style]},

this.props.children)),


this._renderTitle()));


}},{key:'_renderTitle',value:function _renderTitle()

{
if(!this.props.title)return null;var _props2=

this.props,textContainerStyle=_props2.textContainerStyle,hideShadow=_props2.hideShadow,offsetX=_props2.offsetX,parentSize=_props2.parentSize,size=_props2.size,position=_props2.position,spaceBetween=_props2.spaceBetween;
var offsetTop=Math.max(size/2-TEXT_HEIGHT/2,0);
var positionStyles={top:offsetTop};

if(position!=='center'){
positionStyles[position]=offsetX+(parentSize-size)/2+size+spaceBetween;
}else{
positionStyles.right=WIDTH/2+size/2+spaceBetween;
}

var textStyles=[styles.textContainer,positionStyles,textContainerStyle,!hideShadow&&_shared.shadowStyle];

return(
_react2.default.createElement(TextTouchable,{
background:_shared.touchableBackground,
activeOpacity:this.props.activeOpacity||_shared.DEFAULT_ACTIVE_OPACITY,
onPress:this.props.onPress},
_react2.default.createElement(_reactNative.View,{style:textStyles},
_react2.default.createElement(_reactNative.Text,{style:[styles.text,this.props.textStyle]},this.props.title))));



}}],[{key:'defaultProps',get:function get(){return{active:true,spaceBetween:15,useNativeFeedback:true,activeOpacity:_shared.DEFAULT_ACTIVE_OPACITY};}},{key:'propTypes',get:function get(){return{active:_react.PropTypes.bool,useNativeFeedback:_react.PropTypes.bool,activeOpacity:_react.PropTypes.number};}}]);return ActionButtonItem;}(_react.Component);exports.default=ActionButtonItem;



var styles=_reactNative.StyleSheet.create({
textContainer:{
position:'absolute',
paddingVertical:_shared.isAndroid?2:3,
paddingHorizontal:8,
borderRadius:3,
borderWidth:_reactNative.StyleSheet.hairlineWidth,
borderColor:'#eee',
backgroundColor:'white',
height:TEXT_HEIGHT},

text:{
flex:1,
fontSize:12,
color:'#444'}});