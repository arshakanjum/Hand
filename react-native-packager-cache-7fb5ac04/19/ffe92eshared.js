Object.defineProperty(exports,"__esModule",{value:true});exports.touchableBackground=exports.isAndroid=exports.alignItemsMap=exports.shadowStyle=exports.DEFAULT_ACTIVE_OPACITY=undefined;exports.





















getTouchableComponent=getTouchableComponent;var _reactNative=require('react-native');var DEFAULT_ACTIVE_OPACITY=exports.DEFAULT_ACTIVE_OPACITY=0.85;var shadowStyle=exports.shadowStyle={shadowOpacity:0.35,shadowOffset:{width:0,height:5},shadowColor:'#000',shadowRadius:3,elevation:5};var alignItemsMap=exports.alignItemsMap={center:'center',left:'flex-start',right:'flex-end'};var isAndroid=exports.isAndroid=_reactNative.Platform.OS==='android';function getTouchableComponent(useNativeFeedback){
if(useNativeFeedback===true&&isAndroid===true){
return _reactNative.TouchableNativeFeedback;
}
return _reactNative.TouchableOpacity;
}

var touchableBackground=exports.touchableBackground=isAndroid?
_reactNative.Platform['Version']>=21?
_reactNative.TouchableNativeFeedback.Ripple('rgba(255,255,255,0.75)',false):
_reactNative.TouchableNativeFeedback.SelectableBackground():
undefined;