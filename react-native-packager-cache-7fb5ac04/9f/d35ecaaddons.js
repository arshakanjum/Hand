Object.defineProperty(exports,"__esModule",{value:true});exports.




































createVariations=createVariations;exports.












































createSharedStyle=createSharedStyle;var _lodash=require('lodash');var _lodash2=babelHelpers.interopRequireDefault(_lodash);function capitalizeFirstLetter(value){return value.charAt(0).toUpperCase()+value.slice(1);}function createVariations(baseName,nameSuffixes,key,value){return _lodash2.default.reduce(nameSuffixes,function(result,variant){var variantName=variant?baseName+'-'+variant:baseName;var keyName=variant?''+key+capitalizeFirstLetter(variant):key;result[variantName]=babelHelpers.defineProperty({},keyName,value);return result;},{});}function createSharedStyle(componentNames){var sharedStyle=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var customStyles=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
return _lodash2.default.reduce(componentNames,function(result,componentName){

result[componentName]=babelHelpers.extends({},
sharedStyle,
customStyles[componentName]);


return result;
},{});
}