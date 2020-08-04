/*! For license information please see 89.8e8655ce.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app-code-samples"]=this["webpackJsonpreact-app-code-samples"]||[]).push([[89],{413:function(e,t,n){"use strict";n(414),e.exports=n(415)},414:function(e,t,n){},415:function(e,t,n){"use strict";var r;window,e.exports=(r=n(0),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n||4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=14)}([function(e,t){e.exports=r},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){var r=n(6);e.exports=function(e,t){if(null==e)return{};var n,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++){var i=a[n];0<=t.indexOf(i)||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}}return o}},function(e,t,n){function r(e){var t=e.className,n=e.id,r=e.name,c=e.value,l=e.label,u=e.labelPosition,s=e.disabled,f=e.checked,p=e.required,d=e.onChange,h=e.style;e=a()(e,"className id name value label labelPosition disabled checked required onChange style".split(" ")),t=["rex-switch",s?"disabled":f?"checked":"",t].filter((function(e){return e&&0<e.length})).join(" ").trim();var b=l&&u?i.a.createElement("label",{className:"rex-switch-label label-left",htmlFor:n},l):"";return u=l&&!u?i.a.createElement("label",{className:"rex-switch-label label-right",htmlFor:n},l):"",i.a.createElement("div",{className:t,style:h},b,i.a.createElement("label",{className:"rex-switch-container",htmlFor:n,"aria-labelledby":n},i.a.createElement("input",o()({id:n,label:l,value:c,name:r,type:"checkbox",role:"switch",disabled:s,required:p,"aria-checked":f.toString(),checked:f,onChange:d},e)),i.a.createElement("span",{className:"rex-switch-knob"})),u)}n.r(t),n.d(t,"default",(function(){return r})),e=n(1);var o=n.n(e);e=n(2);var a=n.n(e);e=n(0);var i=n.n(e);e=n(7),n.n(e),r.displayName="Switch",r.defaultProps={className:"",disabled:!1,checked:!1,required:!1,id:"",name:"",label:"",labelPosition:!1,value:"",onChange:function(){return null}}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r={},o=Object.keys(e);for(n=0;n<o.length;n++){var a=o[n];0<=t.indexOf(a)||(r[a]=e[a])}return r}},function(e,t,n){},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(12);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(13),o=n(4);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return e.exports=n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){function r(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n=u()(e);if(t){var r=u()(this).constructor;n=Reflect.construct(n,arguments,r)}else n=n.apply(this,arguments);return l()(this,n)}}n.r(t),n.d(t,"default",(function(){return p})),e=n(8);var o=n.n(e);e=n(9);var a=n.n(e);e=n(4);var i=n.n(e);e=n(10);var c=n.n(e);e=n(11);var l=n.n(e);e=n(5);var u=n.n(e);e=n(0);var s=n.n(e),f=n(3),p=function(e){function t(e){o()(this,t);var r=(e=n.call(this,e)).props.options,a=e.setCheckedList(r);return e.state={options:r,checkedList:a},e.handleChange=e.handleChange.bind(i()(e)),e}c()(t,e);var n=r(t);return a()(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.options,n=!1;for(var r in t.length!==e.options.length&&(n=!0),t)if(t[r]!==e.options[r]){n=!0;break}n&&this.updateCheckedState(t)}},{key:"setCheckedList",value:function(e){var t=[];return e.forEach((function(e){t[e.id]=e.checked})),t}},{key:"updateCheckedState",value:function(e){var t=this.setCheckedList(e);this.setState({options:e,checkedList:t})}},{key:"handleChange",value:function(e){e=e.target;var t=this.state.checkedList;t[e.id]=e.checked,this.setState({checkedList:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,r=this.state,o=r.options,a=r.checkedList;return t=["rex-switch-group",t.className].join(" ").trim(),s.a.createElement("div",{className:t,style:n},o.map((function(t){var n=t.value,r=t.id,o=a[r];return s.a.createElement(f.default,{type:"checkbox",key:n.toString(),id:r,name:t.name,value:n,onChange:function(t){return e.handleChange(t)},label:t.label,disabled:t.disabled,required:t.required,"aria-checked":o,checked:o,labelPosition:t.labelPosition})})))}}]),t}(e.Component);p.displayName="SwitchToggleGroup",p.defaultProps={className:"",options:[]}}]))},606:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),o=n.n(r),a=n(413),i=n.n(a);function c(){return o.a.createElement(i.a,{options:[{id:"choice1",name:"setting",value:"airplane",label:"Airplane Mode",checked:!0,disabled:!1},{id:"choice2",name:"setting",value:"notification",label:"Notification",checked:!0,disabled:!1},{id:"choice5",name:"setting",value:"onoff",label:"Show lists",checked:!0,disabled:!1}]})}}}]);
//# sourceMappingURL=89.8e8655ce.chunk.js.map