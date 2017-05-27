Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');



var _Home=require('./Home');var _Home2=babelHelpers.interopRequireDefault(_Home);
var _Categories=require('./Categories');var _Categories2=babelHelpers.interopRequireDefault(_Categories);
var _Add=require('./Add');var _Add2=babelHelpers.interopRequireDefault(_Add);


var _nativeBase=require('native-base');
var _reactNativeCommunications=require('react-native-communications');var _reactNativeCommunications2=babelHelpers.interopRequireDefault(_reactNativeCommunications);var

Details=function(_Component){babelHelpers.inherits(Details,_Component);
function Details(){babelHelpers.classCallCheck(this,Details);var _this=babelHelpers.possibleConstructorReturn(this,(Details.__proto__||Object.getPrototypeOf(Details)).call(this));

_this.state={
goHome:false,
goFav:false,
goCategories:false,
users:'',
loader:true,
categories:''};return _this;

}babelHelpers.createClass(Details,[{key:'fetchUsers',value:function fetchUsers()

{var _this2=this;
var gurl='http://f778227c.ngrok.io/users.json';
var lurl='http://192.168.10.207:3000/users.json';
fetch(lurl).
then(function(response){return response.json();}).
then(function(responseJson){_this2.setState({users:responseJson,loader:false});}).
catch(function(error){console.error(error);});
}},{key:'fetchCat',value:function fetchCat()
{var _this3=this;
var gurl='http://f778227c.ngrok.io/categories.json';
var lurl='http://192.168.10.207:3000/categories.json';
fetch(lurl).
then(function(response){return response.json();}).
then(function(responseJson){_this3.setState({categories:responseJson,loader:false});}).
catch(function(error){console.error(error);});
}},{key:'componentDidMount',value:function componentDidMount()


{
this.fetchUsers();
}},{key:'componentWillMount',value:function componentWillMount()


{var _this4=this;
_reactNative.BackAndroid.addEventListener('hardwareBackPress',function(){
_this4.setState({goCategories:true});
return true;
});
}},{key:'render',value:function render()

{var _this5=this;
if(this.state.goHome)return _react2.default.createElement(_Home2.default,null);
if(this.state.goCategories)return _react2.default.createElement(_Categories2.default,null);
if(this.state.goFav)return _react2.default.createElement(Favourites,null);
if(this.state.goAdd)return _react2.default.createElement(_Add2.default,null);
return(
_react2.default.createElement(_nativeBase.Container,null,
_react2.default.createElement(_nativeBase.Header,{style:{backgroundColor:'#333745'}},

_react2.default.createElement(_nativeBase.Left,null,
_react2.default.createElement(_nativeBase.Icon,{name:'ios-arrow-back-outline',onPress:function onPress(){return _this5.setState({goCategories:true});},style:{fontSize:30,color:'white'}})),

_react2.default.createElement(_nativeBase.Title,{style:{paddingTop:15,fontSize:20,fontWeight:'bold'}},this.props.id),
_react2.default.createElement(_nativeBase.Right,null,
_react2.default.createElement(_nativeBase.Icon,{onPress:function onPress(){return _this5.setState({goAdd:true});},name:'ios-add',style:{fontSize:40,color:'white'}}))),



_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.List,{dataArray:this.state.users,
renderRow:function renderRow(users){return(
_react2.default.createElement(_nativeBase.ListItem,null,
_react2.default.createElement(_nativeBase.Icon,{active:true,name:'ios-person-outline'}),
_react2.default.createElement(_nativeBase.Body,{style:{flex:1}},
_react2.default.createElement(_nativeBase.Text,null,users.fname+" "+users.lname),
_react2.default.createElement(_nativeBase.Right,null,
_react2.default.createElement(_nativeBase.Button,{onPress:function onPress(){return _reactNativeCommunications2.default.phonecall(users.phone,true);},transparent:true},
_react2.default.createElement(_nativeBase.Icon,{name:'ios-call'}))),


_react2.default.createElement(_nativeBase.Text,{note:true},users.phone))));}}))));









}}]);return Details;}(_react.Component);exports.default=Details;