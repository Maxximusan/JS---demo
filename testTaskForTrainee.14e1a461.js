parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dVPH":[function(require,module,exports) {
function o(o){return e(o)||n(o)||t(o)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(o,r){if(o){if("string"==typeof o)return a(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);return"Object"===t&&o.constructor&&(t=o.constructor.name),"Map"===t||"Set"===t?Array.from(o):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(o,r):void 0}}function n(o){if("undefined"!=typeof Symbol&&null!=o[Symbol.iterator]||null!=o["@@iterator"])return Array.from(o)}function e(o){if(Array.isArray(o))return a(o)}function a(o,r){(null==r||r>o.length)&&(r=o.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=o[t];return n}for(var l=[],c=0;c<51;c+=1)l.push(Math.round(1e3*Math.random()));console.log(l);var i=[332,14,974,194,613,916,998,516,905,592,679,859,682,442,708,14,273,142,670,743,847,541,173,10,607,896,364,895,27,782,209,477,68,644,609,542,70,934,479,122,22,784,613,893,234,393,541,383,744,499],s=[954,372,62,960,840,905,904,23,954,259,759,28,825,941,532,449,412,718,565,604,858,266,20,513,320,954,348,645,690,298,623,321,806,411,210,222,770,289,303,91,385,883,193,296,111,882,975,861,464,49,552],u=function(r){console.log("Hi, i am start to doing test task"),console.log(r);var t=Math.max.apply(Math,o(r)),n=Math.min.apply(Math,o(r));console.log(t),console.log(n),console.log(r.length);var e=o(r);console.log(e);var a=e.reduce(function(o,r){return o+r},0);console.log(a);var l=a/r.length;console.log(l);var c=o(r).sort(function(o,r){return o-r});console.log(c);var i=c.length/2;console.log(i);var s=Math.floor(c[i]);console.log(s)};u(i);
},{}]},{},["dVPH"], null)
//# sourceMappingURL=/testTaskForTrainee.14e1a461.js.map