/*! For license information please see 55.f0d7240f.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-code-samples"]=this["webpackJsonpreact-app-code-samples"]||[]).push([[55],{409:function(e,t,n){"use strict";e.exports=n(410)},410:function(e,t,n){"use strict";n(411),e.exports=n(412)},411:function(e,t,n){},412:function(e,t,n){"use strict";var r;window,e.exports=(r=n(0),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n||4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=15)}([function(e,t){e.exports=r},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){var r=n(6);e.exports=function(e,t){if(null==e)return{};var n,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++){var c=a[n];0<=t.indexOf(c)||Object.prototype.propertyIsEnumerable.call(e,c)&&(o[c]=e[c])}}return o}},function(e,t,n){function r(e){var t=e.className,n=e.id,r=e.name,i=e.value,l=e.label,u=e.labelPosition,s=e.disabled,f=e.checked,p=e.required,d=e.onChange,b=e.style;e=a()(e,"className id name value label labelPosition disabled checked required onChange style".split(" ")),t=["rex-switch",s?"disabled":f?"checked":"",t].filter((function(e){return e&&0<e.length})).join(" ").trim();var h=l&&u?c.a.createElement("label",{className:"rex-switch-label label-left",htmlFor:n},l):"";return u=l&&!u?c.a.createElement("label",{className:"rex-switch-label label-right",htmlFor:n},l):"",c.a.createElement("div",{className:t,style:b},h,c.a.createElement("label",{className:"rex-switch-container",htmlFor:n,"aria-labelledby":n},c.a.createElement("input",o()({id:n,label:l,value:i,name:r,type:"checkbox",role:"switch",disabled:s,required:p,"aria-checked":f.toString(),checked:f,onChange:d},e)),c.a.createElement("span",{className:"rex-switch-knob"})),u)}n.r(t),n.d(t,"default",(function(){return r})),e=n(1);var o=n.n(e);e=n(2);var a=n.n(e);e=n(0);var c=n.n(e);e=n(7),n.n(e),r.displayName="Switch",r.defaultProps={className:"",disabled:!1,checked:!1,required:!1,id:"",name:"",label:"",labelPosition:!1,value:"",onChange:function(){return null}}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r={},o=Object.keys(e);for(n=0;n<o.length;n++){var a=o[n];0<=t.indexOf(a)||(r[a]=e[a])}return r}},function(e,t,n){},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(12);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(13),o=n(4);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return e.exports=n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},,function(e,t,n){function r(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n=u()(e);if(t){var r=u()(this).constructor;n=Reflect.construct(n,arguments,r)}else n=n.apply(this,arguments);return l()(this,n)}}n.r(t),e=n(8);var o=n.n(e);e=n(9);var a=n.n(e);e=n(4);var c=n.n(e);e=n(10);var i=n.n(e);e=n(11);var l=n.n(e);e=n(5);var u=n.n(e);e=n(0);var s=n.n(e),f=n(3);n.d(t,"default",(function(){return p}));var p=function(e){function t(e){return o()(this,t),(e=n.call(this,e)).state={checked:e.props.checked},e.handleChange=e.handleChange.bind(c()(e)),e}i()(t,e);var n=r(t);return a()(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.checked;t!==e.checked&&this.updateCheckedState(t)}},{key:"updateCheckedState",value:function(e){this.setState({checked:e})}},{key:"handleChange",value:function(e){this.updateCheckedState(e.target.checked)}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=this.state.checked;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.default,{className:t.className,key:n.toString(),name:t.name,id:t.id,value:n,onChange:function(t){return e.handleChange(t)},label:t.label,labelPosition:t.labelPosition,disabled:t.disabled,required:t.required,"aria-checked":r,checked:r,style:t.style}))}}]),t}(e.Component);p.displayName="SwitchToggle",p.defaultProps={className:"",disabled:!1,required:!1,checked:!1,labelPosition:!1,id:"",name:"",label:"",value:""}}]))},602:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(0),o=n.n(r),a=n(409),c=n.n(a);function i(){return o.a.createElement(c.a,{id:"switch5",label:"Label Text",name:"pet",value:"rabbit",disabled:!0})}}}]);
//# sourceMappingURL=55.f0d7240f.chunk.js.map