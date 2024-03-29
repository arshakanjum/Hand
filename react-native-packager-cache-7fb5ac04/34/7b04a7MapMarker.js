var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');








var _resolveAssetSource=require('react-native/Libraries/Image/resolveAssetSource');var _resolveAssetSource2=babelHelpers.interopRequireDefault(_resolveAssetSource);
var _decorateMapComponent=require('./decorateMapComponent');var _decorateMapComponent2=babelHelpers.interopRequireDefault(_decorateMapComponent);




var viewConfig={
uiViewClassName:'AIR<provider>MapMarker',
validAttributes:{
coordinate:true}};



var propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{


identifier:_react.PropTypes.string,
reuseIdentifier:_react.PropTypes.string,






title:_react.PropTypes.string,






description:_react.PropTypes.string,





image:_react.PropTypes.any,





pinColor:_react.PropTypes.string,




coordinate:_react.PropTypes.shape({



latitude:_react.PropTypes.number.isRequired,
longitude:_react.PropTypes.number.isRequired}).
isRequired,













centerOffset:_react.PropTypes.shape({



x:_react.PropTypes.number.isRequired,
y:_react.PropTypes.number.isRequired}),















calloutOffset:_react.PropTypes.shape({



x:_react.PropTypes.number.isRequired,
y:_react.PropTypes.number.isRequired}),


















anchor:_react.PropTypes.shape({



x:_react.PropTypes.number.isRequired,
y:_react.PropTypes.number.isRequired}),













calloutAnchor:_react.PropTypes.shape({



x:_react.PropTypes.number.isRequired,
y:_react.PropTypes.number.isRequired}),








flat:_react.PropTypes.bool,

draggable:_react.PropTypes.bool,




onPress:_react.PropTypes.func,






onSelect:_react.PropTypes.func,






onDeselect:_react.PropTypes.func,




onCalloutPress:_react.PropTypes.func,




onDragStart:_react.PropTypes.func,




onDrag:_react.PropTypes.func,





onDragEnd:_react.PropTypes.func});


var defaultProps={
onPress:function onPress(){}};var


MapMarker=function(_React$Component){babelHelpers.inherits(MapMarker,_React$Component);
function MapMarker(props){babelHelpers.classCallCheck(this,MapMarker);var _this=babelHelpers.possibleConstructorReturn(this,(MapMarker.__proto__||Object.getPrototypeOf(MapMarker)).call(this,
props));

_this.showCallout=_this.showCallout.bind(_this);
_this.hideCallout=_this.hideCallout.bind(_this);return _this;
}babelHelpers.createClass(MapMarker,[{key:'showCallout',value:function showCallout()

{
this._runCommand('showCallout',[]);
}},{key:'hideCallout',value:function hideCallout()

{
this._runCommand('hideCallout',[]);
}},{key:'_getHandle',value:function _getHandle()

{
return(0,_reactNative.findNodeHandle)(this.marker);
}},{key:'_runCommand',value:function _runCommand(

name,args){
switch(_reactNative.Platform.OS){
case'android':
_reactNative.NativeModules.UIManager.dispatchViewManagerCommand(
this._getHandle(),
this.getUIManagerCommand(name),
args);

break;

case'ios':
this.getMapManagerCommand(name).apply(undefined,[this._getHandle()].concat(babelHelpers.toConsumableArray(args)));
break;

default:
break;}

}},{key:'render',value:function render()

{var _this2=this;
var image=void 0;
if(this.props.image){
image=(0,_resolveAssetSource2.default)(this.props.image)||{};
image=image.uri;
}

var AIRMapMarker=this.getAirComponent();

return(
_react2.default.createElement(AIRMapMarker,babelHelpers.extends({
ref:function ref(_ref){_this2.marker=_ref;}},
this.props,{
image:image,
style:[styles.marker,this.props.style]})));


}}]);return MapMarker;}(_react2.default.Component);


MapMarker.propTypes=propTypes;
MapMarker.defaultProps=defaultProps;
MapMarker.viewConfig=viewConfig;

var styles=_reactNative.StyleSheet.create({
marker:{
position:'absolute',
backgroundColor:'transparent'}});



MapMarker.Animated=_reactNative.Animated.createAnimatedComponent(MapMarker);

module.exports=(0,_decorateMapComponent2.default)(MapMarker,{
componentType:'Marker',
providers:{
google:{
ios:_decorateMapComponent.SUPPORTED,
android:_decorateMapComponent.USES_DEFAULT_IMPLEMENTATION}}});