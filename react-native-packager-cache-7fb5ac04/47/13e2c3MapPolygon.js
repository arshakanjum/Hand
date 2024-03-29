var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');


var _decorateMapComponent=require('./decorateMapComponent');var _decorateMapComponent2=babelHelpers.interopRequireDefault(_decorateMapComponent);




var propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{




coordinates:_react.PropTypes.arrayOf(_react.PropTypes.shape({



latitude:_react.PropTypes.number.isRequired,
longitude:_react.PropTypes.number.isRequired})),





holes:_react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({



latitude:_react.PropTypes.number.isRequired,
longitude:_react.PropTypes.number.isRequired}))),





onPress:_react.PropTypes.func,




strokeWidth:_react.PropTypes.number,




strokeColor:_react.PropTypes.string,




fillColor:_react.PropTypes.string,








zIndex:_react.PropTypes.number,







lineCap:_react.PropTypes.oneOf([
'butt',
'round',
'square']),








lineJoin:_react.PropTypes.oneOf([
'miter',
'round',
'bevel']),












miterLimit:_react.PropTypes.number,








geodesic:_react.PropTypes.bool,












lineDashPhase:_react.PropTypes.number,













lineDashPattern:_react.PropTypes.arrayOf(_react.PropTypes.number)});


var defaultProps={
strokeColor:'#000',
strokeWidth:1};var


MapPolygon=function(_React$Component){babelHelpers.inherits(MapPolygon,_React$Component);function MapPolygon(){babelHelpers.classCallCheck(this,MapPolygon);return babelHelpers.possibleConstructorReturn(this,(MapPolygon.__proto__||Object.getPrototypeOf(MapPolygon)).apply(this,arguments));}babelHelpers.createClass(MapPolygon,[{key:'render',value:function render()
{
var AIRMapPolygon=this.getAirComponent();
return(
_react2.default.createElement(AIRMapPolygon,this.props));

}}]);return MapPolygon;}(_react2.default.Component);


MapPolygon.propTypes=propTypes;
MapPolygon.defaultProps=defaultProps;

module.exports=(0,_decorateMapComponent2.default)(MapPolygon,{
componentType:'Polygon',
providers:{
google:{
ios:_decorateMapComponent.SUPPORTED,
android:_decorateMapComponent.USES_DEFAULT_IMPLEMENTATION}}});