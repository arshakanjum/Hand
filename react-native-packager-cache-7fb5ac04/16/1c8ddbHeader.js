Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');







var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Favourites=require('./Favourites');var _Favourites2=babelHelpers.interopRequireDefault(_Favourites);
var _Add=require('./Add');var _Add2=babelHelpers.interopRequireDefault(_Add);
var _Details=require('./Details');var _Details2=babelHelpers.interopRequireDefault(_Details);

var _nativeBase=require('native-base');var


Head=function(_Component){babelHelpers.inherits(Head,_Component);function Head(){babelHelpers.classCallCheck(this,Head);return babelHelpers.possibleConstructorReturn(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments));}babelHelpers.createClass(Head,[{key:'render',value:function render()
{var _this2=this;

return(
_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'}},


_react2.default.createElement(_nativeBase.Title,{style:{paddingTop:15,fontSize:20,fontWeight:'bold'}},'Categories'),
_react2.default.createElement(_nativeBase.Right,null,

_react2.default.createElement(_nativeBase.Icon,{onPress:function onPress(){return _this2.setState({goAdd:true});},name:'ios-add',style:{fontSize:40,color:'white'}}))));




}}]);return Head;}(_react.Component);exports.default=Head;