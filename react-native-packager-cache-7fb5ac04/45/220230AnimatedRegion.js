Object.defineProperty(exports,"__esModule",{value:true});
var _reactNative=require('react-native');

var AnimatedWithChildren=Object.getPrototypeOf(_reactNative.Animated.ValueXY);
if(__DEV__){
if(AnimatedWithChildren.name!=='AnimatedWithChildren')console.error('AnimatedRegion could not obtain AnimatedWithChildren base class');
}



var _uniqueId=1;var

AnimatedMapRegion=function(_AnimatedWithChildren){babelHelpers.inherits(AnimatedMapRegion,_AnimatedWithChildren);
function AnimatedMapRegion(valueIn){babelHelpers.classCallCheck(this,AnimatedMapRegion);var _this=babelHelpers.possibleConstructorReturn(this,(AnimatedMapRegion.__proto__||Object.getPrototypeOf(AnimatedMapRegion)).call(this));

var value=valueIn||{
latitude:0,
longitude:0,
latitudeDelta:0,
longitudeDelta:0};

_this.latitude=value.latitude instanceof _reactNative.Animated.Value?
value.latitude:
new _reactNative.Animated.Value(value.latitude);
_this.longitude=value.longitude instanceof _reactNative.Animated.Value?
value.longitude:
new _reactNative.Animated.Value(value.longitude);
_this.latitudeDelta=value.latitudeDelta instanceof _reactNative.Animated.Value?
value.latitudeDelta:
new _reactNative.Animated.Value(value.latitudeDelta);
_this.longitudeDelta=value.longitudeDelta instanceof _reactNative.Animated.Value?
value.longitudeDelta:
new _reactNative.Animated.Value(value.longitudeDelta);
_this._listeners={};return _this;
}babelHelpers.createClass(AnimatedMapRegion,[{key:'setValue',value:function setValue(

value){
this.latitude._value=value.latitude;
this.longitude._value=value.longitude;
this.latitudeDelta._value=value.latitudeDelta;
this.longitudeDelta._value=value.longitudeDelta;
}},{key:'setOffset',value:function setOffset(

offset){
this.latitude.setOffset(offset.latitude);
this.longitude.setOffset(offset.longitude);
this.latitudeDelta.setOffset(offset.latitudeDelta);
this.longitudeDelta.setOffset(offset.longitudeDelta);
}},{key:'flattenOffset',value:function flattenOffset()

{
this.latitude.flattenOffset();
this.longitude.flattenOffset();
this.latitudeDelta.flattenOffset();
this.longitudeDelta.flattenOffset();
}},{key:'__getValue',value:function __getValue()

{
return{
latitude:this.latitude.__getValue(),
longitude:this.longitude.__getValue(),
latitudeDelta:this.latitudeDelta.__getValue(),
longitudeDelta:this.longitudeDelta.__getValue()};

}},{key:'__attach',value:function __attach()

{
this.latitude.__addChild(this);
this.longitude.__addChild(this);
this.latitudeDelta.__addChild(this);
this.longitudeDelta.__addChild(this);
}},{key:'__detach',value:function __detach()

{
this.latitude.__removeChild(this);
this.longitude.__removeChild(this);
this.latitudeDelta.__removeChild(this);
this.longitudeDelta.__removeChild(this);
}},{key:'stopAnimation',value:function stopAnimation(

callback){
this.latitude.stopAnimation();
this.longitude.stopAnimation();
this.latitudeDelta.stopAnimation();
this.longitudeDelta.stopAnimation();
callback&&callback(this.__getValue());
}},{key:'addListener',value:function addListener(

callback){var _this2=this;
var id=String(_uniqueId++);
var jointCallback=function jointCallback(){
callback(_this2.__getValue());
};
this._listeners[id]={
latitude:this.latitude.addListener(jointCallback),
longitude:this.longitude.addListener(jointCallback),
latitudeDelta:this.latitudeDelta.addListener(jointCallback),
longitudeDelta:this.longitudeDelta.addListener(jointCallback)};

return id;
}},{key:'removeListener',value:function removeListener(

id){
this.latitude.removeListener(this._listeners[id].latitude);
this.longitude.removeListener(this._listeners[id].longitude);
this.latitudeDelta.removeListener(this._listeners[id].latitudeDelta);
this.longitudeDelta.removeListener(this._listeners[id].longitudeDelta);
delete this._listeners[id];
}},{key:'spring',value:function spring(

config){
var animations=[];
config.hasOwnProperty('latitude')&&
animations.push(_reactNative.Animated.timing(this.latitude,babelHelpers.extends({},
config,{
toValue:config.latitude})));


config.hasOwnProperty('longitude')&&
animations.push(_reactNative.Animated.timing(this.longitude,babelHelpers.extends({},
config,{
toValue:config.longitude})));


config.hasOwnProperty('latitudeDelta')&&
animations.push(_reactNative.Animated.timing(this.latitudeDelta,babelHelpers.extends({},
config,{
toValue:config.latitudeDelta})));


config.hasOwnProperty('longitudeDelta')&&
animations.push(_reactNative.Animated.timing(this.longitudeDelta,babelHelpers.extends({},
config,{
toValue:config.longitudeDelta})));


return _reactNative.Animated.parallel(animations);
}},{key:'timing',value:function timing(

config){
var animations=[];
config.hasOwnProperty('latitude')&&
animations.push(_reactNative.Animated.timing(this.latitude,babelHelpers.extends({},
config,{
toValue:config.latitude})));


config.hasOwnProperty('longitude')&&
animations.push(_reactNative.Animated.timing(this.longitude,babelHelpers.extends({},
config,{
toValue:config.longitude})));


config.hasOwnProperty('latitudeDelta')&&
animations.push(_reactNative.Animated.timing(this.latitudeDelta,babelHelpers.extends({},
config,{
toValue:config.latitudeDelta})));


config.hasOwnProperty('longitudeDelta')&&
animations.push(_reactNative.Animated.timing(this.longitudeDelta,babelHelpers.extends({},
config,{
toValue:config.longitudeDelta})));


return _reactNative.Animated.parallel(animations);
}}]);return AnimatedMapRegion;}(AnimatedWithChildren);exports.default=AnimatedMapRegion;