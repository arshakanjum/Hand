Object.defineProperty(exports,"__esModule",{value:true});exports.ThemeShape=undefined;var _react=require('react');
var _resolveIncludes=require('./resolveIncludes');var _resolveIncludes2=babelHelpers.interopRequireDefault(_resolveIncludes);
var _mergeComponentAndThemeStyles=require('./mergeComponentAndThemeStyles');var _mergeComponentAndThemeStyles2=babelHelpers.interopRequireDefault(_mergeComponentAndThemeStyles);
var _normalizeStyle=require('./StyleNormalizer/normalizeStyle');var _normalizeStyle2=babelHelpers.interopRequireDefault(_normalizeStyle);


var THEME_STYLE='@@shoutem.theme/themeStyle';
var THEME_STYLE_CACHE='@@shoutem.theme/themeCachedStyle';

var defaultTheme=void 0;

var resolveStyle=function resolveStyle(style,baseStyle){return(0,_normalizeStyle2.default)((0,_resolveIncludes2.default)(style,baseStyle));};var

























Theme=function(){
function Theme(themeStyle){babelHelpers.classCallCheck(this,Theme);
this[THEME_STYLE]=resolveStyle(themeStyle);
this[THEME_STYLE_CACHE]={};
}babelHelpers.createClass(Theme,[{key:'createComponentStyle',value:function createComponentStyle(































componentName,defaultStyle){
if(this[THEME_STYLE_CACHE][componentName]){
return this[THEME_STYLE_CACHE][componentName];
}

var componentIncludedStyle=resolveStyle(defaultStyle,this[THEME_STYLE]);






this[THEME_STYLE_CACHE][componentName]=(0,_mergeComponentAndThemeStyles2.default)(
componentIncludedStyle,
this[THEME_STYLE][componentName],
this[THEME_STYLE]);


return this[THEME_STYLE_CACHE][componentName];
}}],[{key:'setDefaultThemeStyle',value:function setDefaultThemeStyle(style){defaultTheme=new Theme(style);}},{key:'getDefaultTheme',value:function getDefaultTheme(){if(!defaultTheme){defaultTheme=new Theme({});}return defaultTheme;}}]);return Theme;}();exports.default=Theme;


var ThemeShape=exports.ThemeShape=_react.PropTypes.shape({
createComponentStyle:_react.PropTypes.func.isRequired});