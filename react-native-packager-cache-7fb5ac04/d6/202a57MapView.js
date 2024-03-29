var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');









var _MapMarker=require('./MapMarker');var _MapMarker2=babelHelpers.interopRequireDefault(_MapMarker);
var _MapPolyline=require('./MapPolyline');var _MapPolyline2=babelHelpers.interopRequireDefault(_MapPolyline);
var _MapPolygon=require('./MapPolygon');var _MapPolygon2=babelHelpers.interopRequireDefault(_MapPolygon);
var _MapCircle=require('./MapCircle');var _MapCircle2=babelHelpers.interopRequireDefault(_MapCircle);
var _MapCallout=require('./MapCallout');var _MapCallout2=babelHelpers.interopRequireDefault(_MapCallout);
var _MapUrlTile=require('./MapUrlTile');var _MapUrlTile2=babelHelpers.interopRequireDefault(_MapUrlTile);
var _AnimatedRegion=require('./AnimatedRegion');var _AnimatedRegion2=babelHelpers.interopRequireDefault(_AnimatedRegion);
var _decorateMapComponent=require('./decorateMapComponent');





var _ProviderConstants=require('./ProviderConstants');var ProviderConstants=babelHelpers.interopRequireWildcard(_ProviderConstants);

var MAP_TYPES={
STANDARD:'standard',
SATELLITE:'satellite',
HYBRID:'hybrid',
TERRAIN:'terrain',
NONE:'none'};


var GOOGLE_MAPS_ONLY_TYPES=[
MAP_TYPES.TERRAIN,
MAP_TYPES.NONE];


var viewConfig={
uiViewClassName:'AIR<provider>Map',
validAttributes:{
region:true}};



var propTypes=babelHelpers.extends({},
_reactNative.View.propTypes,{





provider:_react.PropTypes.oneOf([
'google']),






style:_reactNative.View.propTypes.style,







customMapStyle:_react.PropTypes.array,






customMapStyleString:_react.PropTypes.string,









showsUserLocation:_react.PropTypes.bool,







showsMyLocationButton:_react.PropTypes.bool,








followsUserLocation:_react.PropTypes.bool,






showsPointsOfInterest:_react.PropTypes.bool,







showsCompass:_react.PropTypes.bool,






zoomEnabled:_react.PropTypes.bool,






rotateEnabled:_react.PropTypes.bool,






cacheEnabled:_react.PropTypes.bool,






loadingEnabled:_react.PropTypes.bool,






loadingBackgroundColor:_reactNative.ColorPropType,






loadingIndicatorColor:_reactNative.ColorPropType,






scrollEnabled:_react.PropTypes.bool,






pitchEnabled:_react.PropTypes.bool,







toolbarEnabled:_react.PropTypes.bool,







moveOnMarkerPress:_react.PropTypes.bool,






showsScale:_react.PropTypes.bool,





showsBuildings:_react.PropTypes.bool,





showsTraffic:_react.PropTypes.bool,







showsIndoors:_react.PropTypes.bool,










mapType:_react.PropTypes.oneOf(Object.values(MAP_TYPES)),







region:_react.PropTypes.shape({



latitude:_react.PropTypes.number.isRequired,
longitude:_react.PropTypes.number.isRequired,





latitudeDelta:_react.PropTypes.number.isRequired,
longitudeDelta:_react.PropTypes.number.isRequired}),










initialRegion:_react.PropTypes.shape({



latitude:_react.PropTypes.number.isRequired,
longitude:_react.PropTypes.number.isRequired,





latitudeDelta:_react.PropTypes.number.isRequired,
longitudeDelta:_react.PropTypes.number.isRequired}),








liteMode:_react.PropTypes.bool,






maxDelta:_react.PropTypes.number,






minDelta:_react.PropTypes.number,





legalLabelInsets:_reactNative.EdgeInsetsPropType,




onRegionChange:_react.PropTypes.func,




onRegionChangeComplete:_react.PropTypes.func,




onPress:_react.PropTypes.func,




onLongPress:_react.PropTypes.func,




onPanDrag:_react.PropTypes.func,




onMarkerPress:_react.PropTypes.func,







onMarkerSelect:_react.PropTypes.func,







onMarkerDeselect:_react.PropTypes.func,




onCalloutPress:_react.PropTypes.func,




onMarkerDragStart:_react.PropTypes.func,




onMarkerDrag:_react.PropTypes.func,





onMarkerDragEnd:_react.PropTypes.func});var



MapView=function(_React$Component){babelHelpers.inherits(MapView,_React$Component);
function MapView(props){babelHelpers.classCallCheck(this,MapView);var _this=babelHelpers.possibleConstructorReturn(this,(MapView.__proto__||Object.getPrototypeOf(MapView)).call(this,
props));

_this.state={
isReady:_reactNative.Platform.OS==='ios'};


_this._onMapReady=_this._onMapReady.bind(_this);
_this._onChange=_this._onChange.bind(_this);
_this._onLayout=_this._onLayout.bind(_this);return _this;
}babelHelpers.createClass(MapView,[{key:'getChildContext',value:function getChildContext()

{
return{provider:this.props.provider};
}},{key:'componentWillUpdate',value:function componentWillUpdate(

nextProps){
var a=this.__lastRegion;
var b=nextProps.region;
if(!a||!b)return;
if(
a.latitude!==b.latitude||
a.longitude!==b.longitude||
a.latitudeDelta!==b.latitudeDelta||
a.longitudeDelta!==b.longitudeDelta)
{
this.map.setNativeProps({region:b});
}
}},{key:'componentDidMount',value:function componentDidMount()

{var
isReady=this.state.isReady;
if(isReady){
this._updateStyle();
}
}},{key:'_updateStyle',value:function _updateStyle()

{var
customMapStyle=this.props.customMapStyle;
this.map.setNativeProps({customMapStyleString:JSON.stringify(customMapStyle)});
}},{key:'_onMapReady',value:function _onMapReady()

{var _props=
this.props,region=_props.region,initialRegion=_props.initialRegion;
if(region){
this.map.setNativeProps({region:region});
}else if(initialRegion){
this.map.setNativeProps({region:initialRegion});
}
this._updateStyle();
this.setState({isReady:true});
}},{key:'_onLayout',value:function _onLayout(

e){var _props2=
this.props,region=_props2.region,initialRegion=_props2.initialRegion,onLayout=_props2.onLayout;var
isReady=this.state.isReady;var
layout=e.nativeEvent.layout;
if(!layout.width||!layout.height)return;
if(region&&isReady&&!this.__layoutCalled){
this.__layoutCalled=true;
this.map.setNativeProps({region:region});
}else if(initialRegion&&isReady&&!this.__layoutCalled){
this.__layoutCalled=true;
this.map.setNativeProps({region:initialRegion});
}
if(onLayout){
onLayout(e);
}
}},{key:'_onChange',value:function _onChange(

event){
this.__lastRegion=event.nativeEvent.region;
if(event.nativeEvent.continuous){
if(this.props.onRegionChange){
this.props.onRegionChange(event.nativeEvent.region);
}
}else if(this.props.onRegionChangeComplete){
this.props.onRegionChangeComplete(event.nativeEvent.region);
}
}},{key:'animateToRegion',value:function animateToRegion(

region,duration){
this._runCommand('animateToRegion',[region,duration||500]);
}},{key:'animateToCoordinate',value:function animateToCoordinate(

latLng,duration){
this._runCommand('animateToCoordinate',[latLng,duration||500]);
}},{key:'fitToElements',value:function fitToElements(

animated){
this._runCommand('fitToElements',[animated]);
}},{key:'fitToSuppliedMarkers',value:function fitToSuppliedMarkers(

markers,animated){
this._runCommand('fitToSuppliedMarkers',[markers,animated]);
}},{key:'fitToCoordinates',value:function fitToCoordinates()

{var coordinates=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var options=arguments[1];var _options$edgePadding=



options.edgePadding,edgePadding=_options$edgePadding===undefined?{top:0,right:0,bottom:0,left:0}:_options$edgePadding,_options$animated=options.animated,animated=_options$animated===undefined?true:_options$animated;

this._runCommand('fitToCoordinates',[coordinates,edgePadding,animated]);
}},{key:'takeSnapshot',value:function takeSnapshot(















args){var _this2=this;



if(_reactNative.Platform.OS==='ios'&&arguments.length===4){
console.warn('Old takeSnapshot API has been deprecated; will be removed in the near future');
var width=arguments[0];
var height=arguments[1];
var region=arguments[2];
var callback=arguments[3];
this._runCommand('takeSnapshot',[
width||0,
height||0,
region||{},
'png',
1,
'legacy',
callback]);

return undefined;
}


var config={
width:args.width||0,
height:args.height||0,
region:args.region||{},
format:args.format||'png',
quality:args.quality||1.0,
result:args.result||'file'};

if(config.format!=='png'&&
config.format!=='jpg')throw new Error('Invalid format specified');
if(config.result!=='file'&&
config.result!=='base64')throw new Error('Invalid result specified');


if(_reactNative.Platform.OS==='android'){
return _reactNative.NativeModules.AirMapModule.takeSnapshot(this._getHandle(),config);
}else if(_reactNative.Platform.OS==='ios'){
return new Promise(function(resolve,reject){
_this2._runCommand('takeSnapshot',[
config.width,
config.height,
config.region,
config.format,
config.quality,
config.result,
function(err,snapshot){
if(err){
reject(err);
}else{
resolve(snapshot);
}
}]);

});
}
return Promise.reject('takeSnapshot not supported on this platform');
}},{key:'_uiManagerCommand',value:function _uiManagerCommand(

name){
return _reactNative.NativeModules.UIManager[(0,_decorateMapComponent.getAirMapName)(this.props.provider)].Commands[name];
}},{key:'_mapManagerCommand',value:function _mapManagerCommand(

name){
return _reactNative.NativeModules[(0,_decorateMapComponent.getAirMapName)(this.props.provider)+'Manager'][name];
}},{key:'_getHandle',value:function _getHandle()

{
return(0,_reactNative.findNodeHandle)(this.map);
}},{key:'_runCommand',value:function _runCommand(

name,args){
switch(_reactNative.Platform.OS){
case'android':
_reactNative.NativeModules.UIManager.dispatchViewManagerCommand(
this._getHandle(),
this._uiManagerCommand(name),
args);

break;

case'ios':
this._mapManagerCommand(name).apply(undefined,[this._getHandle()].concat(babelHelpers.toConsumableArray(args)));
break;

default:
break;}

}},{key:'render',value:function render()

{var _this3=this;
var props=void 0;

if(this.state.isReady){
props=babelHelpers.extends({},
this.props,{
region:null,
initialRegion:null,
onChange:this._onChange,
onMapReady:this._onMapReady,
onLayout:this._onLayout});

if(_reactNative.Platform.OS==='ios'&&props.provider===ProviderConstants.PROVIDER_DEFAULT&&
GOOGLE_MAPS_ONLY_TYPES.includes(props.mapType)){
props.mapType=MAP_TYPES.standard;
}
props.handlePanDrag=!!props.onPanDrag;
}else{
props={
style:this.props.style,
region:null,
initialRegion:null,
onChange:this._onChange,
onMapReady:this._onMapReady,
onLayout:this._onLayout};

}

if(_reactNative.Platform.OS==='android'&&this.props.liteMode){
return(
_react2.default.createElement(AIRMapLite,babelHelpers.extends({
ref:function ref(_ref){_this3.map=_ref;}},
props)));


}

var AIRMap=getAirMapComponent(this.props.provider);

return(
_react2.default.createElement(AIRMap,babelHelpers.extends({
ref:function ref(_ref2){_this3.map=_ref2;}},
props)));


}}]);return MapView;}(_react2.default.Component);


MapView.propTypes=propTypes;
MapView.viewConfig=viewConfig;
MapView.childContextTypes=_decorateMapComponent.contextTypes;

MapView.MAP_TYPES=MAP_TYPES;

var nativeComponent=function nativeComponent(Component){return(0,_reactNative.requireNativeComponent)(Component,MapView,{
nativeOnly:{
onChange:true,
onMapReady:true,
handlePanDrag:true}});};


var airMaps={
default:nativeComponent('AIRMap')};

if(_reactNative.Platform.OS==='android'){
airMaps.google=airMaps.default;
}else{
airMaps.google=_decorateMapComponent.googleMapIsInstalled?nativeComponent('AIRGoogleMap'):
(0,_decorateMapComponent.createNotSupportedComponent)('react-native-maps: AirGoogleMaps dir must be added to your xCode project to support GoogleMaps on iOS.');
}
var getAirMapComponent=function getAirMapComponent(provider){return airMaps[provider||'default'];};

var AIRMapLite=_reactNative.NativeModules.UIManager.AIRMapLite&&
(0,_reactNative.requireNativeComponent)('AIRMapLite',MapView,{
nativeOnly:{
onChange:true,
onMapReady:true,
handlePanDrag:true}});



MapView.Marker=_MapMarker2.default;
MapView.Polyline=_MapPolyline2.default;
MapView.Polygon=_MapPolygon2.default;
MapView.Circle=_MapCircle2.default;
MapView.UrlTile=_MapUrlTile2.default;
MapView.Callout=_MapCallout2.default;
babelHelpers.extends(MapView,ProviderConstants);
MapView.ProviderPropType=_react.PropTypes.oneOf(Object.values(ProviderConstants));

MapView.Animated=_reactNative.Animated.createAnimatedComponent(MapView);
MapView.AnimatedRegion=_AnimatedRegion2.default;

module.exports=MapView;