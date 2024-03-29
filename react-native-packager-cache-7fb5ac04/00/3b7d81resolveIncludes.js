Object.defineProperty(exports,"__esModule",{value:true});exports.INCLUDE=undefined;exports.default=



















































resolveIncludes;var _lodash=require('lodash');var _=babelHelpers.interopRequireWildcard(_lodash);var INCLUDE=exports.INCLUDE='@@shoutem.theme/include';function includeSymbolMergeHandler(objVal,srcVal){var newObjVal=objVal;var include=void 0;if(srcVal&&srcVal[INCLUDE]){include=newObjVal&&newObjVal[INCLUDE]?[].concat(babelHelpers.toConsumableArray(newObjVal[INCLUDE]),babelHelpers.toConsumableArray(srcVal[INCLUDE])):srcVal[INCLUDE];}if(_.isUndefined(newObjVal)&&_.isPlainObject(srcVal)){var newObj=_.mergeWith({},srcVal,function(o,s){return s;});if(include){newObj[INCLUDE]=include;}return newObj;}if(_.isPlainObject(newObjVal)&&include){newObjVal[INCLUDE]=include;}}function resolveIncludes(target){var base=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};














function getStyle(styleName){
var defaultStyle={};
var style=defaultStyle;

var baseStyle=base[styleName];
if(baseStyle){
if(baseStyle[INCLUDE]){
throw Error('Base style cannot have includes, unexpected include in '+styleName+'.');
}
style=babelHelpers.extends({},baseStyle);
}

var targetStyle=target[styleName];
if(targetStyle){
style=babelHelpers.extends({},
style,
targetStyle);

}

if(style===defaultStyle){
console.warn('Including unexisting style: '+styleName);
}

return style;
}






function includeNodeStyles(styleNode,processingStyleNames){
if(!_.isPlainObject(styleNode)){
return styleNode;
}


var styleNamesToInclude=styleNode[INCLUDE];

var stylesToInclude={};
if(styleNamesToInclude){
if(!_.isArray(styleNamesToInclude)){
throw Error('Include should be array');
}

for(var _iterator=styleNamesToInclude,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var styleName=_ref;
if(processingStyleNames.has(styleName)){
throw Error('Circular style include, including '+styleName);
}
processingStyleNames.add(styleName);
stylesToInclude=_.mergeWith(
{},
stylesToInclude,
includeNodeStyles(getStyle(styleName),processingStyleNames),
includeSymbolMergeHandler);

processingStyleNames.delete(styleName);
}
}

var resultingStyle=_.mergeWith({},stylesToInclude,styleNode,includeSymbolMergeHandler);
delete resultingStyle[INCLUDE];

for(var _iterator2=_.keys(resultingStyle),_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _styleName=_ref2;
resultingStyle[_styleName]=
includeNodeStyles(resultingStyle[_styleName],processingStyleNames);
}
return resultingStyle;
}




var processingStyleNames=new Set();
return includeNodeStyles(target,processingStyleNames);
}