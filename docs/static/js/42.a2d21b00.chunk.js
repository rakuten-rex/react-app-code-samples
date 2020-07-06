/*! For license information please see 42.a2d21b00.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-code-samples"]=this["webpackJsonpreact-app-code-samples"]||[]).push([[42],{393:function(e,t,r){"use strict";e.exports=r(394)},394:function(e,t,r){"use strict";r(395),e.exports=r(396)},395:function(e,t,r){},396:function(e,t,r){"use strict";var n;window,e.exports=(n=r(0),function(e){function t(n){if(r[n])return r[n].exports;var l=r[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r||4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var l in e)t.d(n,l,function(t){return e[t]}.bind(null,l));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=25)}([function(e,t){e.exports=n},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){var n=r(5);e.exports=function(e,t){if(null==e)return{};var r,l=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++){var o=a[r];0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}}return l}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n={},l=Object.keys(e);for(r=0;r<l.length;r++){var a=l[r];0<=t.indexOf(a)||(n[a]=e[a])}return n}},function(e,t,r){function n(e){var t=e.className,r=e.id,n=e.placeholder,u=e.options,s=e.disabled,i=e.style,d=e.value,f=e.onChange,p=e.state,h=e.selectedIndex,v=e.name,b=e.selectRef,m=e.handleOnFocus,x=e.handleOnBlur,y=e.required;e=a()(e,"className id placeholder options label helper disabled style value onChange state selectedIndex name selectRef handleOnFocus handleOnBlur required".split(" "));var O=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(p),g=s?"disabled":"";return p=function(){var e;if(u.map((function(t,r){return e=r===h?t.value:null})),e)return e}(),t=["rex-select-native",t,d&&d!==n||!d&&p?"":"rex-select-placeholder",O].filter((function(e){return 0<e.length&&e})).join(" ").trim(),O=["rex-select",O,g].filter((function(e){return e&&0<e.length})).join(" ").trim(),g=Object(o.useRef)(null),c.a.createElement("div",{ref:g,className:O,style:i},c.a.createElement("select",l()({value:d||p||n,onChange:f,id:r,className:t,disabled:s,"aria-label":d||n,onFocus:m,onBlur:x,name:v,ref:b,required:y},e),c.a.createElement("option",{defaultValue:!0},n),u.map((function(e,t){return t="rex-select-key-".concat(t,"-").concat(e.value),c.a.createElement("option",{key:t,value:e.value},e.text)}))))}r.r(t),r.d(t,"default",(function(){return n})),e=r(1);var l=r.n(e);e=r(2);var a=r.n(e),o=r(0),c=r.n(o);e=r(12),r.n(e),e=r(13),r.n(e),n.displayName="SelectUi",n.defaultProps={className:"",label:"",id:null,helper:"",options:[],placeholder:"",disabled:!1,style:{},value:"",onChange:function(){},state:"",selectedIndex:null,name:null,selectRef:null,handleOnFocus:function(){},handleOnBlur:function(){},required:!1}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(16);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(17),l=r(3);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?l(e):t}},function(e,t,r){function n(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r=s()(e);if(t){var n=s()(this).constructor;r=Reflect.construct(r,arguments,n)}else r=r.apply(this,arguments);return u()(this,r)}}r.r(t),e=r(7);var l=r.n(e);e=r(8);var a=r.n(e);e=r(3);var o=r.n(e);e=r(9);var c=r.n(e);e=r(10);var u=r.n(e);e=r(4);var s=r.n(e);e=r(0);var i=r.n(e),d=r(6);r.d(t,"default",(function(){return f}));var f=function(e){function t(e){return l()(this,t),(e=r.call(this,e)).state={textValue:e.props.value},e.handleOnChange=e.handleOnChange.bind(o()(e)),e}c()(t,e);var r=n(t);return a()(t,[{key:"handleOnChange",value:function(e){this.setState({textValue:e.target.value}),e.target.blur()}},{key:"render",value:function(){var e=this,t=this.props;return i.a.createElement(d.default,{className:t.className,id:t.id,placeholder:t.placeholder,options:t.options,label:t.label,helper:t.helper,disabled:t.disabled,value:this.state.textValue,onChange:function(t){return e.handleOnChange(t)},style:t.style,state:t.state,selectedIndex:t.selectedIndex,name:t.name,onFocus:t.handleOnFocus,onBlur:t.handleOnBlur,selectRef:t.selectRef,required:t.required})}}]),t}(e.Component);f.displayName="Select",f.defaultProps={className:"",label:"",id:"",helper:"",options:[],placeholder:"",disabled:!1,style:{},value:"",state:"",selectedIndex:null,name:null,handleOnFocus:function(){},handleOnBlur:function(){},selectRef:null,required:!1}},function(e,t,r){},function(e,t,r){},function(e,t,r){var n=r(11);r.d(t,"a",(function(){return n.default}))},function(e,t,r){function n(e){var t=e.htmlFor,r=e.label,n=e.className,c=e.disabled,u=e.state,s=e.labelRef,i=e.required;return e=a()(e,"htmlFor label className disabled state labelRef required".split(" ")),n=["rex-select-label-ui",n,u=function(e){switch(e){case"error":return"error";case"valid":return"valid";case"active":return"active";case"hover":return"hover";default:return""}}(u),c?"disabled":""].filter((function(e){return e&&0<e.length})).join(" ").trim(),c=!!(t&&0<t.length),r=i?"".concat(r," *"):r,o.a.createElement("label",l()({htmlFor:c?t:null,className:n,ref:s},e),r)}r.r(t),r.d(t,"default",(function(){return n})),e=r(1);var l=r.n(e);e=r(2);var a=r.n(e);e=r(0);var o=r.n(e);e=r(20),r.n(e),n.displayName="LabelUi",n.defaultProps={htmlFor:"",label:"",className:"",disabled:!1,state:"",labelRef:null,required:!1}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return e.exports=r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},,,function(e,t,r){},,function(e,t,r){var n=r(15);r.d(t,"a",(function(){return n.default}))},,,function(e,t,r){function n(e){var t=e.htmlFor,r=e.disabled,n=e.className,i=e.label,d=e.state,f=e.name,p=e.placeholder,h=e.id,v=e.options,b=e.selectedIndex,m=e.required;e=a()(e,"htmlFor disabled className label state name placeholder id options selectedIndex required".split(" ")),n=["rex-select-label",n,function(e){switch(e){case"active":return"active";case"focus":return"focus";case"hover":return"hover";default:return""}}(d)].filter((function(e){return e&&0<e.length})).join(" ").trim();var x=Object(o.useRef)(null),y=Object(o.useRef)(null),O=Object(o.useRef)(null);return c.a.createElement("div",l()({className:n,ref:y},e),c.a.createElement(s.a,{label:i,state:d,disabled:r,htmlFor:t,labelRef:x,onMouseDown:function(){!r&&O.current.parentNode.classList.add("activated")},onMouseUp:function(){!r&&O.current.parentNode.classList.remove("activated")},required:m}),c.a.createElement(u.a,{name:f,placeholder:p,id:h,options:v,disabled:r,state:d,selectedIndex:b,handleOnFocus:function(e){var t=e.target;e=e.target.parentNode,r||(x.current.classList.add("active"),y.current.classList.add("active"),t.classList.add("active"),e.classList.add("active"))},handleOnBlur:function(e){var t=e.target;e=e.target.parentNode,r||(x.current.classList.remove("active"),y.current.classList.remove("active"),t.classList.remove("active"),e.classList.remove("active"))},selectRef:O,required:m}))}r.r(t),r.d(t,"default",(function(){return n})),e=r(1);var l=r.n(e);e=r(2);var a=r.n(e),o=r(0),c=r.n(o),u=r(14),s=r(22);e=r(26),r.n(e),n.displayName="SelectLabel",n.defaultProps={className:"",label:"",state:"",name:null,placeholder:"",id:"",options:[],htmlFor:"",disabled:!1,selectedIndex:null,required:!1}},function(e,t,r){}]))},569:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r(0),l=r.n(n),a=r(393),o=r.n(a);function c(){return l.a.createElement(o.a,{style:{"--rex-select-theme-text":"#A2006A","--rex-select-theme-border":"#CB0085","--rex-select-theme-placeholder":"#EF0AA1","--rex-select-theme-hover-text":"#830056","--rex-select-theme-hover-border":"#A2006A","--rex-select-theme-hover-placeholder":"#CB0085","--rex-select-theme-active-text":"#5A003C","--rex-select-theme-active-border":"#830056","--rex-select-theme-active-placeholder":"#A2006A","--rex-select-theme-disabled-border":"#686868","--rex-select-theme-disabled-placeholder":"#828282","--rex-select-theme-disabled-text":"#4D4D4D","--rex-select-theme-error-text":"#7D00BE","--rex-select-theme-error-border":"#9B00EC","--rex-select-theme-error-placeholder":"#B62AFF","--rex-select-theme-valid-text":"#006A9E","--rex-select-theme-valid-border":"#0085C7","--rex-select-theme-valid-placeholder":"#00A0F0","--rex-select-label-theme-text":"#CB0085","--rex-select-label-theme-hover-text":"#A2006A","--rex-select-label-theme-active-text":"#830056","--rex-select-label-theme-disabled-text":"#686868","--rex-select-label-theme-error-text":"#9B00EC","--rex-select-label-theme-valid-text":"#0085C7"},id:"age",label:"Label",placeholder:"Placeholder",options:[{text:"Option 1",value:"option_1"},{text:"Option 2",value:"option_2"},{text:"Option 3",value:"option_3"}],htmlFor:"age",selectedIndex:2})}}}]);
//# sourceMappingURL=42.a2d21b00.chunk.js.map