!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=272)}({0:function(t,e){t.exports={"@VERSION":2}},1:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,s,c){var l,f="function"==typeof t?t.options:t;if(s){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in s)p.call(s,d)&&!p.call(f.components,d)&&(f.components[d]=s[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},10:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=(n=r(11))&&n.__esModule?n:{default:n};e.default=function(t){return(0,o.default)(t)}},11:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(r(12)),o=a(r(13)),i=a(r(16));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(t,e){var r={};return t.forEach((function(t){void 0!==e[t]&&(r[t]=e[t])})),r};e.default=function(t){return new Promise((function(e,r){var a,u={url:(0,n.default)((0,o.default)(t.baseURL,t.url),t.params),header:t.header,complete:function(n){n.config=t;try{"string"==typeof n.data&&(n.data=JSON.parse(n.data))}catch(t){}(0,i.default)(e,r,n)}};if("UPLOAD"===t.method){delete u.header["content-type"],delete u.header["Content-Type"];var c={filePath:t.filePath,name:t.name};a=uni.uploadFile(s(s(s({},u),c),l(["files","formData"],t)))}else if("DOWNLOAD"===t.method)a=uni.downloadFile(u);else{a=uni.request(s(s({},u),l(["data","method","dataType","sslVerify","firstIpv4"],t)))}t.getTask&&t.getTask(a,t)}))}},12:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!e)return t;var r;if(n.isURLSearchParams(e))r=e.toString();else{var o=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),r=o.join("&")}if(r){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t};var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=n?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=t[i]}r.default=t,e&&e.set(t,r);return r}(r(2));function o(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}},13:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t&&!(0,n.default)(e))return(0,o.default)(t,e);return e};var n=i(r(14)),o=i(r(15));function i(t){return t&&t.__esModule?t:{default:t}}},14:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},15:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},154:function(t,e,r){"use strict";var n=r(155),o=r.n(n);e.default=o.a},155:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(6);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={data:function(){return{list:[],page:1,loading:!1,noData:!1}},onLoad:function(){this._getLiveHistory()},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(22).mapState)(["userinfo"])),methods:{loadmore:function(){this.page++,this._getLiveHistory()},_getLiveHistory:function(){var t=this;(0,n.LiveHistory)({limit:10,page:this.page,streamName:this.userinfo.username}).then((function(e){t.loading=!0;var r=e.data,n=r.last_page,o=r.current_page,i=r.data;t.list=1===o?i:t.list.concat(i),(0===n||o>=n)&&(t.noData=!0)}))}}};e.default=a},156:function(t,e){t.exports={"tip-text":{paddingTop:"32rpx",paddingRight:0,paddingBottom:"32rpx",paddingLeft:0,fontSize:"24rpx",color:"#808080",textAlign:"center"},cover:{width:"702rpx",height:"225"},"cover-foot":{position:"absolute",bottom:0,left:0,right:0,paddingTop:"24rpx",paddingRight:"24rpx",paddingBottom:"24rpx",paddingLeft:"24rpx",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundImage:"linear-gradient(to top, black, transparent)"},count:{fontSize:"28rpx",color:"#FFFFFF"},time:{fontSize:"28rpx",color:"#FFFFFF"},title:{marginTop:"12rpx",color:"#FFFFFF",fontSize:"32rpx"},item:{marginTop:"32rpx",marginRight:"24rpx",marginBottom:0,marginLeft:"24rpx"},"@VERSION":2}},16:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){var n=r.config.validateStatus,o=r.statusCode;!o||n&&!n(o)?e(r):t(r)}},17:function(t,e,r){"use strict";function n(){this.handlers=[]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){this.handlers.forEach((function(e){null!==e&&t(e)}))};var o=n;e.default=o},18:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(2);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(t,e,r){var n={};return t.forEach((function(t){void 0!==r[t]?n[t]=r[t]:void 0!==e[t]&&(n[t]=e[t])})),n};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.method||t.method||"GET",o={baseURL:t.baseURL||"",method:r,url:e.url||"",params:e.params||{},custom:i(i({},t.custom||{}),e.custom||{}),header:(0,n.deepMerge)(t.header||{},e.header||{})},a=["getTask","validateStatus"];if(o=i(i({},o),u(a,t,e)),"DOWNLOAD"===r);else if("UPLOAD"===r){delete o.header["content-type"],delete o.header["Content-Type"];var s=["files","filePath","name","formData"];s.forEach((function(t){void 0!==e[t]&&(o[t]=e[t])}))}else{var c=["data","dataType","sslVerify","firstIpv4"];o=i(i({},o),u(c,t,e))}return o}},19:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={baseURL:"",header:{},method:"GET",dataType:"json",custom:{},sslVerify:!0,firstIpv4:!1,validateStatus:function(t){return t>=200&&t<300}}},191:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["body"]},[r("list",{on:{loadmore:t.loadmore}},[t._l(t.list,(function(e,n){return r("cell",{key:n,appendAsTree:!0,attrs:{append:"tree"}},[r("view",{staticClass:["item"]},[r("view",{staticClass:["cover-box"]},[r("u-image",{staticClass:["cover"],attrs:{src:e.thumb,mode:"aspectFill"}}),r("view",{staticClass:["cover-foot"]},[r("u-text",{staticClass:["count"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u89c2\u770b: "+t._s(e.view_num_str)+"\u4eba")]),r("u-text",{staticClass:["time"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.mtime))])])],1),r("u-text",{staticClass:["title"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.title))])])])})),t.loading?t._e():r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["tip-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6b63\u5728\u52a0\u8f7d...")])]),t.noData&&t.list.length?r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["tip-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6682\u65f6\u6ca1\u6709\u66f4\u591a\u4e86")])]):t._e(),t.noData&&0===t.list.length?r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["tip-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6682\u65e0\u6570\u636e")])]):t._e()],2)])])},o=[]},2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isArray=o,e.isObject=function(t){return null!==t&&"object"==typeof t},e.isDate=function(t){return"[object Date]"===n.call(t)},e.isURLSearchParams=function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},e.forEach=i,e.isBoolean=function(t){return"boolean"==typeof t},e.isPlainObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.deepMerge=function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]="object"==typeof r?t({},r):r}for(var n=0,o=arguments.length;n<o;n++)i(arguments[n],r);return e};var n=Object.prototype.toString;function o(t){return"[object Array]"===n.call(t)}function i(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),o(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}},20:function(t,e){},21:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BASE_URL=void 0;e.BASE_URL="https://qingtingapi.youyacao.com/api/v1/"},22:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.install=g,e.mapState=e.mapMutations=e.mapGetters=e.mapActions=e.createNamespacedHelpers=e.Store=e.default=void 0;var n=("undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t,e){Object.keys(t).forEach((function(r){return e(t[r],r)}))}function i(t){return null!==t&&"object"==typeof t}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=("function"==typeof r?r():r)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.hasChild=function(t){return t in this._children},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){o(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,u);var s=function(t){this.register([],t,!1)};s.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},s.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,r){return t+((e=e.getChild(r)).namespaced?r+"/":"")}),"")},s.prototype.update=function(t){!function t(e,r,n){0;if(r.update(n),n.modules)for(var o in n.modules){if(!r.getChild(o))return void 0;t(e.concat(o),r.getChild(o),n.modules[o])}}([],this.root,t)},s.prototype.register=function(t,e,r){var n=this;void 0===r&&(r=!0);var i=new a(e,r);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&o(e.modules,(function(e,o){n.register(t.concat(o),e,r)}))},s.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1];e.getChild(r).runtime&&e.removeChild(r)},s.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),r=t[t.length-1];return e.hasChild(r)};var c;var l=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var i=this,a=this.dispatch,u=this.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,r){return u.call(i,t,e,r)},this.strict=o;var l=this._modules.root.state;v(this,l,[],this._modules.root),h(this,l),r.forEach((function(t){return t(e)})),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){n.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){n.emit("vuex:action",t,e)}),{prepend:!0}))}(this)};e.Store=l;var f={state:{configurable:!0}};function p(t,e,r){return e.indexOf(t)<0&&(r&&r.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var r=t.state;v(t,r,[],t._modules.root,!0),h(t,r,e)}function h(t,e,r){var n=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,a={};o(i,(function(e,r){a[r]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,r,{get:function(){return t._vm[r]},enumerable:!0})}));var u=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:a}),c.config.silent=u,t.strict&&function(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}(t),n&&(r&&t._withCommit((function(){n._data.$$state=null})),c.nextTick((function(){return n.$destroy()})))}function v(t,e,r,n,o){var i=!r.length,a=t._modules.getNamespace(r);if(n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!o){var u=m(e,r.slice(0,-1)),s=r[r.length-1];t._withCommit((function(){c.set(u,s,n.state)}))}var l=n.context=function(t,e,r){var n=""===e,o={dispatch:n?t.dispatch:function(r,n,o){var i=y(r,n,o),a=i.payload,u=i.options,s=i.type;return u&&u.root||(s=e+s),t.dispatch(s,a)},commit:n?t.commit:function(r,n,o){var i=y(r,n,o),a=i.payload,u=i.options,s=i.type;u&&u.root||(s=e+s),t.commit(s,a,u)}};return Object.defineProperties(o,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var r={},n=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,n)===e){var i=o.slice(n);Object.defineProperty(r,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=r}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,r)}}}),o}(t,a,r);n.forEachMutation((function(e,r){!function(t,e,r,n){(t._mutations[e]||(t._mutations[e]=[])).push((function(e){r.call(t,n.state,e)}))}(t,a+r,e,l)})),n.forEachAction((function(e,r){var n=e.root?r:a+r,o=e.handler||e;!function(t,e,r,n){(t._actions[e]||(t._actions[e]=[])).push((function(e){var o,i=r.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(o=i)&&"function"==typeof o.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,o,l)})),n.forEachGetter((function(e,r){!function(t,e,r,n){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return r(n.state,n.getters,t.state,t.getters)}}(t,a+r,e,l)})),n.forEachChild((function(n,i){v(t,e,r.concat(i),n,o)}))}function m(t,e){return e.reduce((function(t,e){return t[e]}),t)}function y(t,e,r){return i(t)&&t.type&&(r=e,e=t,t=t.type),{type:t,payload:e,options:r}}function g(t){c&&t===c||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:r});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,e.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}f.state.get=function(){return this._vm._data.$$state},f.state.set=function(t){0},l.prototype.commit=function(t,e,r){var n=this,o=y(t,e,r),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),s=this._mutations[i];s&&(this._withCommit((function(){s.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(u,n.state)})))},l.prototype.dispatch=function(t,e){var r=this,n=y(t,e),o=n.type,i=n.payload,a={type:o,payload:i},u=this._actions[o];if(u){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,r.state)}))}catch(t){0}var s=u.length>1?Promise.all(u.map((function(t){return t(i)}))):u[0](i);return new Promise((function(t,e){s.then((function(e){try{r._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,r.state)}))}catch(t){0}t(e)}),(function(t){try{r._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,r.state,t)}))}catch(t){0}e(t)}))}))}},l.prototype.subscribe=function(t,e){return p(t,this._subscribers,e)},l.prototype.subscribeAction=function(t,e){return p("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},l.prototype.watch=function(t,e,r){var n=this;return this._watcherVM.$watch((function(){return t(n.state,n.getters)}),e,r)},l.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},l.prototype.registerModule=function(t,e,r){void 0===r&&(r={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),r.preserveState),h(this,this.state)},l.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var r=m(e.state,t.slice(0,-1));c.delete(r,t[t.length-1])})),d(this)},l.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},l.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},l.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(l.prototype,f);var b=S((function(t,e){var r={};return P(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){var e=this.$store.state,r=this.$store.getters;if(t){var n=L(this.$store,"mapState",t);if(!n)return;e=n.context.state,r=n.context.getters}return"function"==typeof o?o.call(this,e,r):e[o]},r[n].vuex=!0})),r}));e.mapState=b;var _=S((function(t,e){var r={};return P(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.commit;if(t){var i=L(this.$store,"mapMutations",t);if(!i)return;n=i.context.commit}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapMutations=_;var O=S((function(t,e){var r={};return P(e).forEach((function(e){var n=e.key,o=e.val;o=t+o,r[n]=function(){if(!t||L(this.$store,"mapGetters",t))return this.$store.getters[o]},r[n].vuex=!0})),r}));e.mapGetters=O;var j=S((function(t,e){var r={};return P(e).forEach((function(e){var n=e.key,o=e.val;r[n]=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var n=this.$store.dispatch;if(t){var i=L(this.$store,"mapActions",t);if(!i)return;n=i.context.dispatch}return"function"==typeof o?o.apply(this,[n].concat(e)):n.apply(this.$store,[o].concat(e))}})),r}));e.mapActions=j;var w=function(t){return{mapState:b.bind(null,t),mapGetters:O.bind(null,t),mapMutations:_.bind(null,t),mapActions:j.bind(null,t)}};function P(t){return function(t){return Array.isArray(t)||i(t)}(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function S(t){return function(e,r){return"string"!=typeof e?(r=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,r)}}function L(t,e,r){return t._modulesNamespaceMap[r]}e.createNamespacedHelpers=w;var C={Store:l,install:g,version:"3.4.0",mapState:b,mapMutations:_,mapGetters:O,mapActions:j,createNamespacedHelpers:w};e.default=C},239:function(t,e,r){"use strict";r.r(e);var n=r(156),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},272:function(t,e,r){"use strict";r.r(e);r(4);var n=r(81);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),n.default.mpType="page",n.default.route="pages/live/record/record",n.default.el="#root",new Vue(n.default)},3:function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)},e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),s="";if(u.length>1){var c=u.pop();s=u.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=u[0];console[a](s)}},4:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(5).default,Vue.prototype.__$appStyle__)},5:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AgentTotal=e.CardSecretExchange=e.Reward=e.MessageList=e.TaskPickup=e.TaskList=e.DownloadRecords=e.AddDownload=e.Config=e.PlayRecords=e.AddView=e.ReplyList=e.LikeVideoList=e.RemoveArticle=e.RrticleList=e.RemoveVideo=e.MyVideoList=e.AD=e.Unfollow=e.FollowList=e.Fans=e.PromotionRecord=e.UploadImage=e.CancelCommentPraise=e.CommentPraise=e.Comment=e.CommentList=e.PostArticle=e.FocusArticleList=e.ArticleList=e.Logout=e.ReleaseVideo=e.Categories=e.Follow=e.LiveHistory=e.LiveDetails=e.StopLive=e.StartLive=e.LiveList=e.VideoPlayback=e.User=e.Login=e.Captcha=e.EmailCaptcha=e.Register=e.SMS=e.CancelPraise=e.Praise=e.VList=e.VideoList=void 0;var n=r(7);e.VideoList=function(){return(0,n.post)("video/referList")};e.VList=function(t){return(0,n.post)("video/list",t)};e.Praise=function(t){return(0,n.post)("like/on",t)};e.CancelPraise=function(t){return(0,n.post)("like/off",t)};e.SMS=function(t){return(0,n.post)("smsGet",t)};e.Register=function(t){return(0,n.post)("register",t)};e.EmailCaptcha=function(t){return(0,n.post)("emailGet",t)};e.Captcha=function(){return(0,n.post)("captchaGet")};e.Login=function(t){return(0,n.post)("login",t)};e.User=function(){return(0,n.post)("user")};e.VideoPlayback=function(t){return(0,n.post)("video/view",t)};e.LiveList=function(t){return(0,n.post)("live/list",t)};e.StartLive=function(t){return(0,n.post)("live/start",t)};e.StopLive=function(){return(0,n.post)("live/close")};e.LiveDetails=function(t){return(0,n.post)("live/view",t)};e.LiveHistory=function(t){return(0,n.post)("live/history",t)};e.Follow=function(t){return(0,n.post)("follow/on",t)};e.Categories=function(t){return(0,n.post)("category",t)};e.ReleaseVideo=function(t){return(0,n.post)("video/add",t)};e.Logout=function(){return(0,n.post)("logout")};e.ArticleList=function(t){return(0,n.post)("article/list",t)};e.FocusArticleList=function(t){return(0,n.post)("article/followList",t)};e.PostArticle=function(t){return(0,n.post)("article/add",t)};e.CommentList=function(t){return(0,n.post)("comment/list",t)};e.Comment=function(t){return(0,n.post)("comment/add",t)};e.CommentPraise=function(t){return(0,n.post)("comment/onLike",t)};e.CancelCommentPraise=function(t){return(0,n.post)("comment/offLike",t)};e.UploadImage=function(){return(0,n.post)("upload")};e.PromotionRecord=function(){return(0,n.post)("refer")};e.Fans=function(t){return(0,n.post)("follow/fans",t)};e.FollowList=function(t){return(0,n.post)("follow/me",t)};e.Unfollow=function(t){return(0,n.post)("follow/off",t)};e.AD=function(t){return(0,n.post)("advert/list",t)};e.MyVideoList=function(t){return(0,n.post)("video/me",t)};e.RemoveVideo=function(t){return(0,n.post)("video/del",t)};e.RrticleList=function(t){return(0,n.post)("article/me",t)};e.RemoveArticle=function(t){return(0,n.post)("article/del",t)};e.LikeVideoList=function(t){return(0,n.post)("like/list",t)};e.ReplyList=function(t){return(0,n.post)("comment/commentList",t)};e.AddView=function(t){return(0,n.post)("video/historyAdd",t)};e.PlayRecords=function(t){return(0,n.post)("video/historyList",t)};e.Config=function(t){return(0,n.post)("config",t)};e.AddDownload=function(t){return(0,n.post)("download",{vid:t})};e.DownloadRecords=function(t){return(0,n.post)("downloadList",t)};e.TaskList=function(){return(0,n.post)("task/list")};e.TaskPickup=function(t){return(0,n.post)("task/receive",t)};e.MessageList=function(t){return(0,n.post)("message/getList",t)};e.Reward=function(t){return(0,n.post)("user/give",t)};e.CardSecretExchange=function(t){return(0,n.post)("cipher/receive",t)};e.AgentTotal=function(){return(0,n.post)("agentNum")}},7:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.post=e.get=void 0;var n,o=(n=r(8))&&n.__esModule?n:{default:n},i=(r(20),r(21));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=new o.default,l={baseURL:"",header:{},method:"GET",dataType:"json",custom:{},sslVerify:!0,firstIpv4:!1,validateStatus:function(t){return t>=200&&t<300}};e.get=function(t,e){return c.get("".concat(i.BASE_URL).concat(t),u({params:e},l))};e.post=function(t,e){return c.post("".concat(i.BASE_URL).concat(t),e,u(u({},l),{},{method:"POST"}))},c.interceptors.request.use((function(t){try{var e=uni.getStorageSync("TOKEN");e&&(t.header=u(u({},t.header),{},{authorization:e}))}catch(t){}return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){var e=t.data.code;if(500===e&&uni.navigateTo({url:"/pages/login/login"}),200===e){var r=t.header.authorization;if(r)try{uni.setStorageSync("TOKEN",r)}catch(t){}}return t.data}),(function(e){return t("log",e," at common/request.js:102"),Promise.reject(e)}))}).call(this,r(3).default)},8:function(t,e,r){"use strict";var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((n=r(9))&&n.__esModule?n:{default:n}).default;e.default=o},81:function(t,e,r){"use strict";var n=r(191),o=r(154),i=r(1);var a=Object(i.a)(o.default,n.b,n.c,!1,null,"30ea14d5","74ae6fa3",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(239).default,this.options.style):Object.assign(this.options.style,r(239).default)}).call(a),e.default=a.exports},9:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(r(10)),o=s(r(17)),i=s(r(18)),a=s(r(19)),u=r(2);function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,e),(0,u.isPlainObject)(r)||(r={},t("warn","\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\u5fc5\u987b\u63a5\u6536\u4e00\u4e2aObject"," at js_sdk/luch-request/luch-request/core/Request.js:39")),this.config=l(l({},a.default),r),this.interceptors={request:new o.default,response:new o.default}}var r,s,c;return r=e,(s=[{key:"setConfig",value:function(t){this.config=t(this.config)}},{key:"middleware",value:function(t){t=(0,i.default)(this.config,t);var e=[n.default,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r}},{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.middleware(t)}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.middleware(l({url:t,method:"GET"},e))}},{key:"post",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"POST"},r))}},{key:"put",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"PUT"},r))}},{key:"delete",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"DELETE"},r))}},{key:"connect",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"CONNECT"},r))}},{key:"head",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"HEAD"},r))}},{key:"options",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"OPTIONS"},r))}},{key:"trace",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:t,data:e,method:"TRACE"},r))}},{key:"upload",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.url=t,e.method="UPLOAD",this.middleware(e)}},{key:"download",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.url=t,e.method="DOWNLOAD",this.middleware(e)}}])&&d(r.prototype,s),c&&d(r,c),e}();e.default=h}).call(this,r(3).default)}});