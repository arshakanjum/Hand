Object.defineProperty(exports,"__esModule",{value:true});exports.default=










normalizeStyle;var _lodash=require('lodash');var _lodash2=babelHelpers.interopRequireDefault(_lodash);var _StyleNormalizer=require('./StyleNormalizer');var _StyleNormalizer2=babelHelpers.interopRequireDefault(_StyleNormalizer);var styleNormalizer=new _StyleNormalizer2.default();function normalizeStyle(style){
return _lodash2.default.reduce(style,function(normalizedStyle,val,prop){

if(_lodash2.default.isPlainObject(val)){
normalizedStyle[prop]=normalizeStyle(val);
}else if(styleNormalizer.canNormalize(prop)){
normalizedStyle=babelHelpers.extends({},
normalizedStyle,
styleNormalizer.normalize(prop,val));

}else{
normalizedStyle[prop]=val;
}


return normalizedStyle;
},{});
}