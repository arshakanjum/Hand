Object.defineProperty(exports,"__esModule",{value:true});var _ShorthandsNormalizerFactory=require('./ShorthandsNormalizerFactory');var _ShorthandsNormalizerFactory2=babelHelpers.interopRequireDefault(_ShorthandsNormalizerFactory);var









StyleNormalizer=function(){
function StyleNormalizer(){babelHelpers.classCallCheck(this,StyleNormalizer);
this.normalizers={};
this.createNormalizers('margin',[_ShorthandsNormalizerFactory.HORIZONTAL,_ShorthandsNormalizerFactory.VERTICAL,_ShorthandsNormalizerFactory.SIDES]);
this.createNormalizers('padding',[_ShorthandsNormalizerFactory.HORIZONTAL,_ShorthandsNormalizerFactory.VERTICAL,_ShorthandsNormalizerFactory.SIDES]);
this.createNormalizers('border',[_ShorthandsNormalizerFactory.SIDES],'Width');
}babelHelpers.createClass(StyleNormalizer,[{key:'createNormalizers',value:function createNormalizers(

prop,shorthands){var _this=this;var suffix=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';
shorthands.forEach(function(shorthand){
var propName=prop+shorthand.type+suffix;

if(_this.normalizerExists(propName)){
throw Error('Normalizer for \''+propName+'\' shorthand already exists');
}

_this.normalizers[propName]=
_ShorthandsNormalizerFactory2.default.createNormalizer(prop,shorthand,suffix);
});
}},{key:'normalizerExists',value:function normalizerExists(

normalizerName){
return!!this.normalizers[normalizerName];
}},{key:'canNormalize',value:function canNormalize(

prop){
return this.normalizerExists(prop);
}},{key:'normalize',value:function normalize(

prop,val){
return this.normalizers[prop](val);
}}]);return StyleNormalizer;}();exports.default=StyleNormalizer;