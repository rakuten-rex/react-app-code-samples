/*! For license information please see 48.a037f753.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-code-samples"]=this["webpackJsonpreact-app-code-samples"]||[]).push([[48],{399:function(e,t,n){"use strict";e.exports=n(400)},400:function(e,t,n){"use strict";n(401),e.exports=n(402)},401:function(e,t,n){},402:function(e,t,n){"use strict";var r;window,e.exports=(r=n(0),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n||4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(t){return e[t]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=25)}([function(e,t){e.exports=r},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){var r=n(5);e.exports=function(e,t){if(null==e)return{};var n,a=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++){var o=l[n];0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}}return a}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r={},a=Object.keys(e);for(n=0;n<a.length;n++){var l=a[n];0<=t.indexOf(l)||(r[l]=e[l])}return r}},function(e,t,n){function r(e){var t=e.className,n=e.id,r=e.placeholder,c=e.options,i=e.disabled,s=e.style,f=e.value,d=e.onChange,p=e.state,v=e.selectedIndex,h=e.name,b=e.selectRef,m=e.handleOnFocus,y=e.handleOnBlur,x=e.required;e=l()(e,"className id placeholder options label helper disabled style value onChange state selectedIndex name selectRef handleOnFocus handleOnBlur required".split(" "));var O=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(p),g=i?"disabled":"";return p=function(){var e=c.filter((function(e,t){return t===v}));return 0<e.length?e[0].value:null}(),t=["rex-select-native",t,f&&f!==r||!f&&p?"":"rex-select-placeholder",O].filter((function(e){return 0<e.length&&e})).join(" ").trim(),O=["rex-select",O,g].filter((function(e){return e&&0<e.length})).join(" ").trim(),g=Object(o.useRef)(null),u.a.createElement("div",{ref:g,className:O,style:s},u.a.createElement("select",a()({value:f||p||r,onChange:d,id:n,className:t,disabled:i,"aria-label":f||r,onFocus:m,onBlur:y,name:h,ref:b,required:x},e),u.a.createElement("option",{defaultValue:!0},r),c.map((function(e,t){return t="rex-select-key-".concat(t,"-").concat(e.value),u.a.createElement("option",{key:t,value:e.value},e.text)}))))}n.r(t),n.d(t,"default",(function(){return r})),e=n(1);var a=n.n(e);e=n(2);var l=n.n(e),o=n(0),u=n.n(o);e=n(12),n.n(e),e=n(13),n.n(e),r.displayName="SelectUi",r.defaultProps={className:"",label:"",id:null,helper:"",options:[],placeholder:"",disabled:!1,style:{},value:"",onChange:function(){},state:"",selectedIndex:null,name:null,selectRef:null,handleOnFocus:function(){},handleOnBlur:function(){},required:!1}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(16);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(17),a=n(3);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},function(e,t,n){function r(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n=i()(e);if(t){var r=i()(this).constructor;n=Reflect.construct(n,arguments,r)}else n=n.apply(this,arguments);return c()(this,n)}}n.r(t),e=n(7);var a=n.n(e);e=n(8);var l=n.n(e);e=n(3);var o=n.n(e);e=n(9);var u=n.n(e);e=n(10);var c=n.n(e);e=n(4);var i=n.n(e);e=n(0);var s=n.n(e),f=n(6);n.d(t,"default",(function(){return d}));var d=function(e){function t(e){return a()(this,t),(e=n.call(this,e)).state={textValue:e.props.value},e.handleOnChange=e.handleOnChange.bind(o()(e)),e}u()(t,e);var n=r(t);return l()(t,[{key:"handleOnChange",value:function(e){this.setState({textValue:e.target.value}),e.target.blur()}},{key:"render",value:function(){var e=this,t=this.props;return s.a.createElement(f.default,{className:t.className,id:t.id,placeholder:t.placeholder,options:t.options,label:t.label,helper:t.helper,disabled:t.disabled,value:this.state.textValue,onChange:function(t){return e.handleOnChange(t)},style:t.style,state:t.state,selectedIndex:t.selectedIndex,name:t.name,onFocus:t.handleOnFocus,onBlur:t.handleOnBlur,selectRef:t.selectRef,required:t.required})}}]),t}(e.Component);d.displayName="Select",d.defaultProps={className:"",label:"",id:"",helper:"",options:[],placeholder:"",disabled:!1,style:{},value:"",state:"",selectedIndex:null,name:null,handleOnFocus:function(){},handleOnBlur:function(){},selectRef:null,required:!1}},function(e,t,n){},function(e,t,n){},function(e,t,n){var r=n(11);n.d(t,"a",(function(){return r.default}))},function(e,t,n){function r(e){var t=e.htmlFor,n=e.label,r=e.className,u=e.disabled,c=e.state,i=e.labelRef,s=e.required;return e=l()(e,"htmlFor label className disabled state labelRef required".split(" ")),r=["rex-select-label-ui",r,c=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(c),u?"disabled":""].filter((function(e){return e&&0<e.length})).join(" ").trim(),u=!!(t&&0<t.length),n=s?"".concat(n," *"):n,o.a.createElement("label",a()({htmlFor:u?t:null,className:r,ref:i},e),n)}n.r(t),n.d(t,"default",(function(){return r})),e=n(1);var a=n.n(e);e=n(2);var l=n.n(e);e=n(0);var o=n.n(e);e=n(20),n.n(e),r.displayName="LabelUi",r.defaultProps={htmlFor:"",label:"",className:"",disabled:!1,state:"",labelRef:null,required:!1}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return e.exports=n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},,,function(e,t,n){},,function(e,t,n){var r=n(15);n.d(t,"a",(function(){return r.default}))},,,function(e,t,n){function r(e){var t=e.htmlFor,n=e.disabled,r=e.className,s=e.label,f=e.state,d=e.name,p=e.placeholder,v=e.id,h=e.options,b=e.selectedIndex,m=e.required;e=l()(e,"htmlFor disabled className label state name placeholder id options selectedIndex required".split(" ")),r=["rex-select-label",r,function(e){switch(e){case"active":return"active";case"focus":return"focus";case"hover":return"hover";default:return""}}(f)].filter((function(e){return e&&0<e.length})).join(" ").trim();var y=Object(o.useRef)(null),x=Object(o.useRef)(null),O=Object(o.useRef)(null);return u.a.createElement("div",a()({className:r,ref:x},e),u.a.createElement(i.a,{label:s,state:f,disabled:n,htmlFor:t,labelRef:y,onMouseDown:function(){!n&&O.current.parentNode.classList.add("activated")},onMouseUp:function(){!n&&O.current.parentNode.classList.remove("activated")},required:m}),u.a.createElement(c.a,{name:d,placeholder:p,id:v,options:h,disabled:n,state:f,selectedIndex:b,handleOnFocus:function(e){var t=e.target;e=e.target.parentNode,n||(y.current.classList.add("active"),x.current.classList.add("active"),t.classList.add("active"),e.classList.add("active"))},handleOnBlur:function(e){var t=e.target;e=e.target.parentNode,n||(y.current.classList.remove("active"),x.current.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active"))},selectRef:O,required:m}))}n.r(t),n.d(t,"default",(function(){return r})),e=n(1);var a=n.n(e);e=n(2);var l=n.n(e),o=n(0),u=n.n(o),c=n(14),i=n(22);e=n(26),n.n(e),r.displayName="SelectLabel",r.defaultProps={className:"",label:"",state:"",name:null,placeholder:"",id:"",options:[],htmlFor:"",disabled:!1,selectedIndex:null,required:!1}},function(e,t,n){}]))},631:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),a=n.n(r),l=n(399),o=n.n(l);function u(){return a.a.createElement(o.a,{id:"age",label:"Label",placeholder:"Placeholder",options:[{text:"Option 1",value:"option_1"},{text:"Option 2",value:"option_2"},{text:"Option 3",value:"option_3"}],htmlFor:"age",required:!0})}}}]);
//# sourceMappingURL=48.a037f753.chunk.js.map