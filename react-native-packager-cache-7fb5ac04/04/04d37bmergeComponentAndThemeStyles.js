Object.defineProperty(exports,"__esModule",{value:true});exports.default=

mergeComponentAndThemeStyles;var _lodash=require('lodash');var _=babelHelpers.interopRequireWildcard(_lodash);function mergeComponentAndThemeStyles(
componentStyle,themeComponentStyle,themeStyle){
var componentThemedStyle=_.merge({},componentStyle,themeComponentStyle);



var intersectedRootThemeStyle=_.pick(themeStyle,_.keys(componentThemedStyle));


return _.merge({},intersectedRootThemeStyle,componentThemedStyle);
}