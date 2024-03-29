
'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');
var _computeProps=require('../Utils/computeProps');var _computeProps2=babelHelpers.interopRequireDefault(_computeProps);
var _lodash=require('lodash');var _lodash2=babelHelpers.interopRequireDefault(_lodash);
var _Col=require('./Col');var _Col2=babelHelpers.interopRequireDefault(_Col);
var _Row=require('./Row');var _Row2=babelHelpers.interopRequireDefault(_Row);var


GridNB=function(_Component){babelHelpers.inherits(GridNB,_Component);function GridNB(){babelHelpers.classCallCheck(this,GridNB);return babelHelpers.possibleConstructorReturn(this,(GridNB.__proto__||Object.getPrototypeOf(GridNB)).apply(this,arguments));}babelHelpers.createClass(GridNB,[{key:'prepareRootProps',value:function prepareRootProps()
{

var type={
flex:1,
flexDirection:this.ifRow()?'column':'row'};


var defaultProps={
style:type};


return(0,_computeProps2.default)(this.props,defaultProps);

}},{key:'ifRow',value:function ifRow()

{
var row=false;
_react2.default.Children.forEach(this.props.children,function(child){
if(child.type==_Row2.default)
row=true;
});
return row;
}},{key:'setNativeProps',value:function setNativeProps(

nativeProps){
this._root.setNativeProps(nativeProps);
}},{key:'render',value:function render()

{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,babelHelpers.extends({
ref:function ref(component){return _this2._root=component;}},
this.props,
this.prepareRootProps()),
this.props.children));

}}]);return GridNB;}(_react.Component);exports.default=GridNB;