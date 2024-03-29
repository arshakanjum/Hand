Object.defineProperty(exports,"__esModule",{value:true});exports.FadeOut=undefined;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _DriverShape=require('../drivers/DriverShape');var

























FadeOut=exports.FadeOut=function(_Component){babelHelpers.inherits(FadeOut,_Component);function FadeOut(){babelHelpers.classCallCheck(this,FadeOut);return babelHelpers.possibleConstructorReturn(this,(FadeOut.__proto__||Object.getPrototypeOf(FadeOut)).apply(this,arguments));}babelHelpers.createClass(FadeOut,[{key:'render',value:function render()

















{var _props=
this.props,driver=_props.driver,children=_props.children,_props$inputRange=_props.inputRange,inputRange=_props$inputRange===undefined?[0,1]:_props$inputRange,style=_props.style;

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[style,{
opacity:driver.value.interpolate({
inputRange:inputRange,
outputRange:[1,0],
extrapolate:'clamp'})}]},



children));


}}]);return FadeOut;}(_react.Component);FadeOut.propTypes={driver:_DriverShape.DriverShape.isRequired,children:_react2.default.PropTypes.node,inputRange:_react2.default.PropTypes.array,style:_react2.default.PropTypes.object};