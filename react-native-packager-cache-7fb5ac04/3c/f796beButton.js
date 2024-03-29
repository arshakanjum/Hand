Object.defineProperty(exports,"__esModule",{value:true});exports.Button=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _reactNative=require('react-native');
var _theme=require('@shoutem/theme');
var _platform=require('./../theme/variables/platform');var _platform2=_interopRequireDefault(_platform);
var _Badge=require('./Badge');
var _Text=require('./Text');
var _computeProps=require('../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);

var _mapPropsToStyleNames=require('../Utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Button=function(_Component){_inherits(Button,_Component);function Button(){_classCallCheck(this,Button);return _possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));}_createClass(Button,[{key:'getInitialStyle',value:function getInitialStyle()

{
return{
borderedBtn:{
borderWidth:this.props.bordered?1:undefined,
borderRadius:this.props.rounded&&this.props.bordered?_platform2.default.borderRadiusLarge:2}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{
var defaultProps={
style:this.getInitialStyle().borderedBtn};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()
{var _this2=this;
if(_reactNative.Platform.OS==='ios'||_platform2.default.androidRipple===false||_reactNative.Platform['Version']<=21){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({},
this.prepareRootProps(),{
ref:function ref(c){return _this2._root=c;},
activeOpacity:this.props.activeOpacity?this.props.activeOpacity:0.5}),

this.props.children));


}else
{
return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({ref:function ref(c){return _this2._root=c;},
onPress:this.props.onPress,
background:this.props.androidRippleColor?_reactNative.TouchableNativeFeedback.Ripple(this.props.androidRippleColor):_reactNative.TouchableNativeFeedback.Ripple(_platform2.default.androidRippleColor)},
this.prepareRootProps()),
_react2.default.createElement(_reactNative.View,this.prepareRootProps(),
this.props.children)));



}
}}]);return Button;}(_react.Component);


Button.propTypes=_extends({},
_reactNative.TouchableOpacity.propTypes,{
style:_react2.default.PropTypes.object,
block:_react2.default.PropTypes.bool,
primary:_react2.default.PropTypes.bool,
transparent:_react2.default.PropTypes.bool,
success:_react2.default.PropTypes.bool,
danger:_react2.default.PropTypes.bool,
warning:_react2.default.PropTypes.bool,
info:_react2.default.PropTypes.bool,
bordered:_react2.default.PropTypes.bool,
capitalize:_react2.default.PropTypes.bool,
disabled:_react2.default.PropTypes.bool,
rounded:_react2.default.PropTypes.bool,
large:_react2.default.PropTypes.bool,
small:_react2.default.PropTypes.bool,
active:_react2.default.PropTypes.bool,
badgeColor:_react2.default.PropTypes.string,
badgeValueStyle:_react2.default.PropTypes.object});


Button.defaultProps={
capitalize:true};


var StyledButton=(0,_theme.connectStyle)('NativeBase.Button',{},_mapPropsToStyleNames2.default)(Button);exports.

Button=StyledButton;