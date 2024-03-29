var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};















var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var React=require('react');var PropTypes=React.PropTypes,Component=React.Component;var ReactNative=require('react-native');var Dimensions=ReactNative.Dimensions,View=ReactNative.View,Animated=ReactNative.Animated,ScrollView=ReactNative.ScrollView,StyleSheet=ReactNative.StyleSheet,InteractionManager=ReactNative.InteractionManager,Platform=ReactNative.Platform;var TimerMixin=require('react-timer-mixin');

var SceneComponent=require('./SceneComponent');var _require=
require('./DefaultTabBar'),DefaultTabBar=_require.DefaultTabBar;
var ScrollableTabBar=require('./ScrollableTabBar');


var ScrollableTabView=React.createClass({displayName:'ScrollableTabView',
mixins:[TimerMixin],
statics:{
DefaultTabBar:DefaultTabBar,
ScrollableTabBar:ScrollableTabBar},


propTypes:{
tabBarPosition:PropTypes.oneOf(['top','bottom','overlayTop','overlayBottom']),
initialPage:PropTypes.number,
page:PropTypes.number,
onChangeTab:PropTypes.func,
onScroll:PropTypes.func,
renderTabBar:PropTypes.any,
style:View.propTypes.style,
contentProps:PropTypes.object,
scrollWithoutAnimation:PropTypes.bool,
locked:PropTypes.bool,
prerenderingSiblingsNumber:PropTypes.number},


getDefaultProps:function getDefaultProps(){
return{
tabBarPosition:'top',
initialPage:0,
page:-1,
onChangeTab:function onChangeTab(){},
onScroll:function onScroll(){},
contentProps:{},
scrollWithoutAnimation:false,
locked:false,
prerenderingSiblingsNumber:0};

},

getInitialState:function getInitialState(){
return{
currentPage:this.props.initialPage,
scrollValue:new Animated.Value(this.props.initialPage),
containerWidth:Dimensions.get('window').width,
sceneKeys:this.newSceneKeys({currentPage:this.props.initialPage})};

},

componentDidMount:function componentDidMount(){var _this=this;
var scrollFn=function scrollFn(){
if(_this.scrollView&&Platform.OS==='android'){
var x=_this.props.initialPage*_this.state.containerWidth;
_this.scrollView.scrollTo({x:x,animated:false});
}
};
this.setTimeout(function(){
InteractionManager.runAfterInteractions(scrollFn);
},0);
},

componentWillReceiveProps:function componentWillReceiveProps(props){
if(props.children!==this.props.children){
this.updateSceneKeys({page:this.state.currentPage,children:props.children});
}

if(props.page>=0&&props.page!==this.state.currentPage){
this.goToPage(props.page);
}
},

goToPage:function goToPage(pageNumber){
var offset=pageNumber*this.state.containerWidth;
if(this.scrollView){
this.scrollView.scrollTo({x:offset,y:0,animated:!this.props.scrollWithoutAnimation});
}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:pageNumber,
callback:this._onChangeTab.bind(this,currentPage,pageNumber)});

},

renderTabBar:function renderTabBar(props){
if(this.props.renderTabBar===false){
return null;
}else if(this.props.renderTabBar){
return React.cloneElement(this.props.renderTabBar(props),props);
}else{
return React.createElement(DefaultTabBar,props);
}
},

updateSceneKeys:function updateSceneKeys(_ref){var page=_ref.page,_ref$children=_ref.children,children=_ref$children===undefined?this.props.children:_ref$children,_ref$callback=_ref.callback,callback=_ref$callback===undefined?function(){}:_ref$callback;
var newKeys=this.newSceneKeys({previousKeys:this.state.sceneKeys,currentPage:page,children:children});
this.setState({currentPage:page,sceneKeys:newKeys},callback);
},

newSceneKeys:function newSceneKeys(_ref2){var _this2=this;var _ref2$previousKeys=_ref2.previousKeys,previousKeys=_ref2$previousKeys===undefined?[]:_ref2$previousKeys,_ref2$currentPage=_ref2.currentPage,currentPage=_ref2$currentPage===undefined?0:_ref2$currentPage,_ref2$children=_ref2.children,children=_ref2$children===undefined?this.props.children:_ref2$children;
var newKeys=[];
this._children(children).forEach(function(child,idx){
var key=_this2._makeSceneKey(child,idx);
if(_this2._keyExists(previousKeys,key)||
_this2._shouldRenderSceneKey(idx,currentPage)){
newKeys.push(key);
}
});
return newKeys;
},

_shouldRenderSceneKey:function _shouldRenderSceneKey(idx,currentPageKey){
var numOfSibling=this.props.prerenderingSiblingsNumber;
return idx<currentPageKey+numOfSibling+1&&
idx>currentPageKey-numOfSibling-1;
},

_keyExists:function _keyExists(sceneKeys,key){
return sceneKeys.find(function(sceneKey){return key===sceneKey;});
},

_makeSceneKey:function _makeSceneKey(child,idx){
return child.props.heading+'_'+idx;
},

renderScrollableContent:function renderScrollableContent(){var _this3=this;
var scenes=this._composeScenes();
return React.createElement(ScrollView,_extends({
horizontal:true,
pagingEnabled:true,
automaticallyAdjustContentInsets:false,
contentOffset:{x:this.props.initialPage*this.state.containerWidth},
ref:function ref(scrollView){_this3.scrollView=scrollView;},
onScroll:function onScroll(e){
var offsetX=e.nativeEvent.contentOffset.x;
_this3._updateScrollValue(offsetX/_this3.state.containerWidth);
},
onMomentumScrollBegin:this._onMomentumScrollBeginAndEnd,
onMomentumScrollEnd:this._onMomentumScrollBeginAndEnd,
scrollEventThrottle:16,
scrollsToTop:false,
showsHorizontalScrollIndicator:false,
scrollEnabled:!this.props.locked,
directionalLockEnabled:true,
alwaysBounceVertical:false,
keyboardDismissMode:'on-drag'},
this.props.contentProps),

scenes);

},

_composeScenes:function _composeScenes(){var _this4=this;
return this._children().map(function(child,idx){
var key=_this4._makeSceneKey(child,idx);
return React.createElement(SceneComponent,{
key:child.key,
shouldUpdated:_this4._shouldRenderSceneKey(idx,_this4.state.currentPage),
style:{width:_this4.state.containerWidth}},

_this4._keyExists(_this4.state.sceneKeys,key)?child:React.createElement(View,{heading:child.props.heading}));

});
},

_onMomentumScrollBeginAndEnd:function _onMomentumScrollBeginAndEnd(e){
var offsetX=e.nativeEvent.contentOffset.x;
var page=Math.round(offsetX/this.state.containerWidth);
if(this.state.currentPage!==page){
this._updateSelectedPage(page);
}
},

_updateSelectedPage:function _updateSelectedPage(nextPage){
var localNextPage=nextPage;
if(typeof localNextPage==='object'){
localNextPage=nextPage.nativeEvent.position;
}

var currentPage=this.state.currentPage;
this.updateSceneKeys({
page:localNextPage,
callback:this._onChangeTab.bind(this,currentPage,localNextPage)});

},

_onChangeTab:function _onChangeTab(prevPage,currentPage){
this.props.onChangeTab({
i:currentPage,
ref:this._children()[currentPage],
from:prevPage});

},

_updateScrollValue:function _updateScrollValue(value){
this.state.scrollValue.setValue(value);
this.props.onScroll(value);
},

_handleLayout:function _handleLayout(e){var _this5=this;var
width=e.nativeEvent.layout.width;

if(Math.round(width)!==Math.round(this.state.containerWidth)){
this.setState({containerWidth:width});
this.requestAnimationFrame(function(){
_this5.goToPage(_this5.state.currentPage);
});
}
},

_children:function _children(){var children=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props.children;
return React.Children.map(children,function(child){return child;});
},

render:function render(){
var overlayTabs=this.props.tabBarPosition==='overlayTop'||this.props.tabBarPosition==='overlayBottom';
var tabBarProps={
goToPage:this.goToPage,
tabs:this._children().map(function(child){return child.props.heading;}),
tabStyle:this._children().map(function(child){return child.props.tabStyle;}),
activeTabStyle:this._children().map(function(child){return child.props.activeTabStyle;}),
textStyle:this._children().map(function(child){return child.props.textStyle;}),
activeTextStyle:this._children().map(function(child){return child.props.activeTextStyle;}),
tabHeaderStyle:this._children().map(function(child){return _lodash2.default.get(child.props.heading.props,'style',undefined);}),
activeTab:this.state.currentPage,
scrollValue:this.state.scrollValue,
containerWidth:this.state.containerWidth};


if(this.props.tabBarBackgroundColor){
tabBarProps.backgroundColor=this.props.tabBarBackgroundColor;
}
if(this.props.tabBarActiveTextColor){
tabBarProps.activeTextColor=this.props.tabBarActiveTextColor;
}
if(this.props.tabBarInactiveTextColor){
tabBarProps.inactiveTextColor=this.props.tabBarInactiveTextColor;
}
if(this.props.tabBarTextStyle){
tabBarProps.textStyle=this.props.tabBarTextStyle;
}
if(this.props.tabBarUnderlineStyle){
tabBarProps.underlineStyle=this.props.tabBarUnderlineStyle;
}
if(overlayTabs){
tabBarProps.style=_defineProperty({
position:'absolute',
left:0,
right:0},
this.props.tabBarPosition==='overlayTop'?'top':'bottom',0);

}

return React.createElement(View,{style:[styles.container,this.props.style],onLayout:this._handleLayout},
this.props.tabBarPosition==='top'&&this.renderTabBar(tabBarProps),
this.renderScrollableContent(),
(this.props.tabBarPosition==='bottom'||overlayTabs)&&this.renderTabBar(tabBarProps));

}});


module.exports=ScrollableTabView;

var styles=StyleSheet.create({
container:{
flex:1},

scrollableContentAndroid:{
flex:1}});