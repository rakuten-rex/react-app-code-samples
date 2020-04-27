/*! For license information please see 30.bb145421.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-code-samples"]=this["webpackJsonpreact-app-code-samples"]||[]).push([[30],{392:function(e,t,r){"use strict";e.exports=r(393)},393:function(e,t,r){"use strict";r(394),e.exports=r(395)},394:function(e,t,r){},395:function(e,t,r){"use strict";var a;window,e.exports=(a=r(0),function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(t){return e[t]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=21)}([function(e,t){e.exports=a},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){var a=r(4);e.exports=function(e,t){if(null==e)return{};var r,n=a(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++){var o=l[r];0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}}return n}},function(e,t,r){var a=r(8),n=r(9),l=r(10),o=r(12);e.exports=function(e,t){return a(e)||n(e,t)||l(e,t)||o()}},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,a={},n=Object.keys(e);for(r=0;r<n.length;r++){var l=n[r];0<=t.indexOf(l)||(a[l]=e[l])}return a}},function(e,t,r){function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,a=arguments[t];for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e){var t=e.placeholder,r=e.id,a=e.disabled,n=e.className,l=e.name,d=e.state,p=e.labelId,b=e.handleOnFocus,h=e.handleOnBlur,m=e.hasLabel,y=e.style,w=e.showPassword,g=e.value,O=e.required;e=i()(e,"placeholder id disabled className name state labelId handleOnFocus handleOnBlur hasLabel style showPassword value required".split(" ")),g=Object(u.useState)(g);var x=s()(g,2);g=x[0];var j=x[1];d=["rex-password-native",x=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(d)].filter((function(e){return e&&0<e.length})).join(" ").trim(),w=w?Object(u.useState)(!0):Object(u.useState)(!1);var P=(w=s()(w,2))[0],N=w[1];return w=function(){return N(!P)},n=["rex-password-ui",x,n].filter((function(e){return e&&0<e.length})).join(" ").trim(),c.a.createElement("div",o()({className:n,disabled:a,style:y},e),c.a.createElement("input",{id:r,name:l,type:"".concat(P?"text":"password"),placeholder:t,disabled:a,key:r,"aria-label":m?null:l||t,"aria-labelledby":m?p:null,className:d,onFocus:b,onBlur:h,onChange:function(e){j(e.target.value)},value:g,required:O}),c.a.createElement("span",{onClick:w,onKeyDown:w,role:"presentation"},P?c.a.createElement(f,{className:"rex-toggle-password rex-icon"}):c.a.createElement(v,{className:"rex-toggle-password rex-icon"})))}r.r(t),e=r(1);var o=r.n(e);e=r(3);var s=r.n(e);e=r(2);var i=r.n(e),u=r(0),c=r.n(u);r(13);var d=c.a.createElement("path",{clipRule:"evenodd",d:"M7.1 9.1a2 2 0 110-4 2 2 0 010 4zm0-7c-5 0-7 5-7 5s2 5 7 5 7-5 7-5-2-5-7-5z",fill:"#606060",fillRule:"evenodd"}),f=function(e){return c.a.createElement("svg",a({fill:"none",height:15,width:15},e),d)},p=c.a.createElement("path",{clipRule:"evenodd",d:"M7.101 9.101a2 2 0 01-2-2c0-.37.108-.712.283-1.01l2.727 2.727a1.98 1.98 0 01-1.01.284zm0-4a2 2 0 012 2c0 .37-.107.713-.283 1.01L6.093 5.384c.297-.175.639-.283 1.01-.283zm7.102 8.395l-2.852-2.852c1.921-1.475 2.75-3.542 2.75-3.542s-2-5-7-5c-1.344 0-2.47.363-3.4.892L.707 0 0 .707l2.851 2.852C.931 5.035.101 7.102.101 7.102s2 5 7 5c1.345 0 2.471-.364 3.401-.892l2.994 2.993z",fill:"#606060",fillRule:"evenodd"}),v=function(e){return c.a.createElement("svg",n({fill:"none",height:15,width:15},e),p)};r.d(t,"default",(function(){return l})),l.displayName="PasswordUi",l.defaultProps={placeholder:"",labelId:"",id:null,disabled:!1,className:"",state:null,handleOnFocus:function(){},handleOnBlur:function(){},name:null,hasLabel:!1,style:{},showPassword:!1,value:"",required:!1}},function(e,t,r){var a=r(5);r.d(t,"a",(function(){return a.default}))},function(e,t,r){function a(e){var t=e.htmlFor,r=e.label,a=e.className,s=e.disabled,i=e.state,u=e.id,c=e.labelRef,d=e.required;return e=l()(e,"htmlFor label className disabled state id labelRef required".split(" ")),a=["rex-password-label-ui",a,function(){switch(i){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return null}}()].filter((function(e){return e&&0<e.length})).join(" ").trim(),r=d?"".concat(r," *"):r,o.a.createElement("label",n()({id:u||null,htmlFor:t||null,className:a,disabled:s,ref:c},e),r)}r.r(t),r.d(t,"default",(function(){return a})),e=r(1);var n=r.n(e);e=r(2);var l=r.n(e);e=r(0);var o=r.n(e);e=r(16),r.n(e),a.displayName="LabelUi",a.defaultProps={htmlFor:"",label:"",className:"",disabled:!1,state:"",id:"",labelRef:null,required:!1}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(i){n=!0,l=i}finally{try{a||null==s.return||s.return()}finally{if(n)throw l}}return r}}},function(e,t,r){var a=r(11);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){},,,function(e,t,r){},,function(e,t,r){var a=r(7);r.d(t,"a",(function(){return a.default}))},,,function(e,t,r){function a(e){var t=e.placeholder,r=e.className,a=e.htmlFor,c=e.label,d=e.labelId,f=e.disabled,p=e.name,v=e.state,b=e.style,h=e.showPassword,m=e.value,y=e.required;e=l()(e,"placeholder className htmlFor label labelId disabled name state style showPassword value required".split(" "));var w=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(v),g=!!(c&&0<c.length);w=["rex-password-label",w].join(" ").trim();var O=Object(o.useRef)(null);return s.a.createElement("div",n()({className:w,disabled:f,style:b},e),s.a.createElement(u.a,{id:d,htmlFor:a,label:c,disabled:f,state:v,labelRef:O,required:y}),s.a.createElement(i.a,{placeholder:t,id:a,disabled:f,className:r,hasLabel:g,labelId:d,state:v,name:p,handleOnFocus:function(e){var t=e.target;e=e.target.parentNode,f||(O.current.classList.add("active"),t.classList.add("active"),e.classList.add("active"))},handleOnBlur:function(e){var t=e.target;e=e.target.parentNode,f||(O.current.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active"))},showPassword:h,value:m,required:y}))}r.r(t),r.d(t,"default",(function(){return a})),e=r(1);var n=r.n(e);e=r(2);var l=r.n(e),o=r(0),s=r.n(o);e=r(22),r.n(e);var i=r(6),u=r(18);a.displayName="PasswordLabel",a.defaultProps={className:"",placeholder:"",htmlFor:null,label:"",labelId:"",disabled:!1,name:"",state:null,style:{},showPassword:!1,value:"",required:!1}},function(e,t,r){}]))},535:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var a=r(0),n=r.n(a),l=r(392),o=r.n(l);function s(){return n.a.createElement(o.a,{placeholder:"Password",htmlFor:"password",label:"Label",labelId:"labelId",name:"Password",value:"Default Value"})}}}]);
//# sourceMappingURL=30.bb145421.chunk.js.map