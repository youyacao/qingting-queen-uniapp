!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=268)}({0:function(e,t){e.exports={"@VERSION":2}},1:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,s,u,c){var l,f="function"==typeof e?e.options:e;if(u){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(f.components,p)&&(f.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),t&&(f.render=t,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var m=f.render;f.render=function(e,t){return l.call(t),m(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:f}}r.d(t,"a",(function(){return n}))},10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(11))&&n.__esModule?n:{default:n};t.default=function(e){return(0,o.default)(e)}},11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(12)),o=a(r(13)),i=a(r(16));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,t){var r={};return e.forEach((function(e){void 0!==t[e]&&(r[e]=t[e])})),r};t.default=function(e){return new Promise((function(t,r){var a,s={url:(0,n.default)((0,o.default)(e.baseURL,e.url),e.params),header:e.header,complete:function(n){n.config=e;try{"string"==typeof n.data&&(n.data=JSON.parse(n.data))}catch(e){}(0,i.default)(t,r,n)}};if("UPLOAD"===e.method){delete s.header["content-type"],delete s.header["Content-Type"];var c={filePath:e.filePath,name:e.name};a=uni.uploadFile(u(u(u({},s),c),l(["files","formData"],e)))}else if("DOWNLOAD"===e.method)a=uni.downloadFile(s);else{a=uni.request(u(u({},s),l(["data","method","dataType","sslVerify","firstIpv4"],e)))}e.getTask&&e.getTask(a,e)}))}},12:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t)return e;var r;if(n.isURLSearchParams(t))r=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(2));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e&&!(0,n.default)(t))return(0,o.default)(e,t);return t};var n=i(r(14)),o=i(r(15));function i(e){return e&&e.__esModule?e:{default:e}}},14:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},142:function(e,t,r){"use strict";var n=r(143),o=r.n(n);t.default=o.a},143:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(41),o=r(6),i=weex.requireModule("modal"),a={data:function(){return{list:[],page:1,loading:!1,init:!0,noData:!1}},onShow:function(){this._getArticleList()},methods:{_getArticleList:function(){var e=this;(0,o.RrticleList)({page:this.page,limit:10}).then((function(t){var r=t.code,n=t.data;if(200===r){var o=n.total_page,i=n.current_page,a=n.list;e.list=1===i?a:e.list.concat(a),(0===o||i>=o)&&(e.noData=!0),e.init=!1,e.loading=!1}}))},_getImages:function(e){var t=[];for(var r in e)t.push(e[r]);return(0,n.toTwoArray)(t,3)},_viewImages:function(t){uni.previewImage({urls:t,longPressActions:{itemList:["\u53d1\u9001\u7ed9\u670b\u53cb","\u4fdd\u5b58\u56fe\u7247","\u6536\u85cf"],success:function(t){e("log","\u9009\u4e2d\u4e86\u7b2c"+(t.tapIndex+1)+"\u4e2a\u6309\u94ae,\u7b2c"+(t.index+1)+"\u5f20\u56fe\u7247"," at pages/my/article-list/article-list.nvue:110")},fail:function(t){e("log",t.errMsg," at pages/my/article-list/article-list.nvue:113")}}})},_loadmore:function(){this.noData||(this.page++,this.loading=!0,this._getArticleList())},_remove:function(e,t){var r=this;i.confirm({message:"\u662f\u5426\u786e\u8ba4\u5220\u9664\u8be5\u6761\u670b\u53cb\u5708?",okTitle:"\u786e\u8ba4",cancelTitle:"\u53d6\u6d88"},(function(n){"\u786e\u8ba4"===n&&(0,o.RemoveArticle)({id:e.id}).then((function(e){var n=e.code,o=e.msg;uni.showToast({title:o,icon:"none"}),200===n&&r.list.splice(t,1)}))}))}}};t.default=a}).call(this,r(3).default)},144:function(e,t){e.exports={active:{opacity:1},"color-red":{color:"#fa3534"},"flex-1":{flex:1},"text-right":{textAlign:"right"},"mb-12":{marginBottom:"12rpx"},"px-12":{paddingTop:0,paddingRight:"12rpx",paddingBottom:0,paddingLeft:"12rpx"},"item-images":{flexDirection:"row"},"item-image":{width:"220rpx",height:"220rpx"},"item-foot__text":{fontSize:"28rpx",color:"#808080"},"item-foot":{flexDirection:"row",paddingTop:"24rpx",paddingRight:0,paddingBottom:"24rpx",paddingLeft:0},"item-foot__col":{flexDirection:"row",alignItems:"center",flex:1},"item-foot__icon":{width:"40rpx",height:"40rpx",marginRight:"12rpx",opacity:.45},"item-content":{marginTop:"24rpx",marginRight:0,marginBottom:"24rpx",marginLeft:0},"item-content__text":{fontSize:"32rpx",color:"#FFFFFF"},item:{marginTop:"32rpx",marginRight:"32rpx",marginBottom:"32rpx",marginLeft:"32rpx",borderBottomColor:"rgba(144,147,153,0.2)",borderBottomWidth:"1rpx"},"item-head":{flexDirection:"row"},"item-head__time":{color:"#808080",fontSize:"24rpx"},"item-head__username":{color:"#333333",fontSize:"28rpx",marginBottom:"12rpx"},"item-head__avatar":{width:"90rpx",height:"90rpx",marginRight:"24rpx",borderRadius:50},alert:{fontSize:"24rpx",color:"#999999",textAlign:"center",paddingTop:"32rpx",paddingRight:0,paddingBottom:"32rpx",paddingLeft:0},body:{flex:1},"@VERSION":2}},15:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=r.config.validateStatus,o=r.statusCode;!o||n&&!n(o)?t(r):e(r)}},17:function(e,t,r){"use strict";function n(){this.handlers=[]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){this.handlers.forEach((function(t){null!==t&&e(t)}))};var o=n;t.default=o},18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e,t,r){var n={};return e.forEach((function(e){void 0!==r[e]?n[e]=r[e]:void 0!==t[e]&&(n[e]=t[e])})),n};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.method||e.method||"GET",o={baseURL:e.baseURL||"",method:r,url:t.url||"",params:t.params||{},custom:i(i({},e.custom||{}),t.custom||{}),header:(0,n.deepMerge)(e.header||{},t.header||{})},a=["getTask","validateStatus"];if(o=i(i({},o),s(a,e,t)),"DOWNLOAD"===r);else if("UPLOAD"===r){delete o.header["content-type"],delete o.header["Content-Type"];var u=["files","filePath","name","formData"];u.forEach((function(e){void 0!==t[e]&&(o[e]=t[e])}))}else{var c=["data","dataType","sslVerify","firstIpv4"];o=i(i({},o),s(c,e,t))}return o}},19:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={baseURL:"",header:{},method:"GET",dataType:"json",custom:{},sslVerify:!0,firstIpv4:!1,validateStatus:function(e){return e>=200&&e<300}}},2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=o,t.isObject=function(e){return null!==e&&"object"==typeof e},t.isDate=function(e){return"[object Date]"===n.call(e)},t.isURLSearchParams=function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},t.forEach=i,t.isBoolean=function(e){return"boolean"==typeof e},t.isPlainObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.deepMerge=function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)i(arguments[n],r);return t};var n=Object.prototype.toString;function o(e){return"[object Array]"===n.call(e)}function i(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}},20:function(e,t){},21:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BASE_URL=void 0;t.BASE_URL="https://qingtingapi.youyacao.com/api/v1/"},212:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["body"]},[r("list",{staticClass:["list"],on:{loadmore:e._loadmore}},[e._l(e.list,(function(t,n){return r("cell",{key:n,appendAsTree:!0,attrs:{append:"tree"}},[r("view",{staticClass:["item"]},[r("view",{staticClass:["item-head"]},[r("u-image",{staticClass:["item-head__avatar"],attrs:{src:t.avatar,mode:""}}),r("view",[r("u-text",{staticClass:["item-head__username"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.nickname||t.username))]),r("u-text",{staticClass:["item-head__time"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.created_at))])])],1),r("view",{staticClass:["item-content"]},[r("u-text",{staticClass:["item-content__text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.content))])]),e._l(e._getImages(t.images),(function(n,o){return r("view",{key:"images_"+o,staticClass:["item-images"],class:{"mb-12":o!==e._getImages(t.images).length-1}},e._l(n,(function(n,o){return r("view",{key:"image_"+o,staticClass:["item-image__box"],class:{"px-12":1===o}},[r("u-image",{staticClass:["item-image"],attrs:{src:n,mode:"aspectFill"},on:{click:function(r){e._viewImages(t.images)}}})],1)})),0)})),r("view",{staticClass:["item-foot"]},[r("view",{staticClass:["item-foot__col"]},[1===t.is_like?r("u-image",{staticClass:["item-foot__icon","active"],attrs:{src:"/static/images/dianzan-red.png",mode:"aspectFit"}}):r("u-image",{staticClass:["item-foot__icon"],attrs:{src:"/static/images/dianzan-white.png",mode:"aspectFit"}}),r("u-text",{staticClass:["item-foot__text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.like_num.length>3?t.like_num_str:t.like_num))])],1),r("view",{staticClass:["item-foot__col"]},[r("u-image",{staticClass:["item-foot__icon"],attrs:{src:"/static/images/comment-icon.png",mode:"aspectFit"}}),r("u-text",{staticClass:["item-foot__text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.comment_num))])],1),r("view",{staticClass:["item-foot__col"]},[r("u-image",{staticClass:["item-foot__icon"],attrs:{src:"/static/images/share-icon.png",mode:"aspectFit"}}),r("u-text",{staticClass:["item-foot__text"],appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.share_num))])],1),r("view",{staticClass:["item-foot__col"]},[r("u-text",{staticClass:["item-foot__text","text-right","flex-1","color-red"],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(r){e._remove(t,n)}}},[e._v("\u5220\u9664")])])])],2)])})),e.init?r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["alert"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6b63\u5728\u52a0\u8f7d...")])]):e._e(),e.init||0!==e.list.length?e._e():r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["alert"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6682\u65e0\u6570\u636e")])]),e.loading?r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["alert"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u52a0\u8f7d\u66f4\u591a\u4e2d...")])]):e._e(),e.noData&&e.list.length>10?r("cell",{appendAsTree:!0,attrs:{append:"tree"}},[r("u-text",{staticClass:["alert"],appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6ca1\u6709\u66f4\u591a\u4e86")])]):e._e()],2)])])},o=[]},235:function(e,t,r){"use strict";r.r(t);var n=r(144),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t.default=o.a},268:function(e,t,r){"use strict";r.r(t);r(4);var n=r(77);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}),n.default.mpType="page",n.default.route="pages/my/article-list/article-list",n.default.el="#root",new Vue(n.default)},3:function(e,t,r){"use strict";function n(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(e,t){switch(n(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];console[e].apply(console,r)},t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t.shift();if(o())return t.push(t.pop().replace("at ","uni-app:///")),console[a].apply(console,t);var s=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,i)+"---END:JSON---"}catch(r){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var r=n(e).toUpperCase();e="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+e+"---END:"+r+"---":String(e)}return e})),u="";if(s.length>1){var c=s.pop();u=s.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=s[0];console[a](u)}},4:function(e,t,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(5).default,Vue.prototype.__$appStyle__)},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toTwoArray=t.getToken=void 0;t.getToken=function(){var e=null;try{var t=uni.getStorageSync("TOKEN");t&&(e=t)}catch(e){}return e};t.toTwoArray=function(e,t){for(var r=[],n=Math.ceil(e.length/t),o=0;o<n;o++)r.push(e.slice(o*t,o*t+t));return r}},5:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t.default=o.a},6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AgentTotal=t.CardSecretExchange=t.Reward=t.MessageList=t.TaskPickup=t.TaskList=t.DownloadRecords=t.AddDownload=t.Config=t.PlayRecords=t.AddView=t.ReplyList=t.LikeVideoList=t.RemoveArticle=t.RrticleList=t.RemoveVideo=t.MyVideoList=t.AD=t.Unfollow=t.FollowList=t.Fans=t.PromotionRecord=t.UploadImage=t.CancelCommentPraise=t.CommentPraise=t.Comment=t.CommentList=t.PostArticle=t.FocusArticleList=t.ArticleList=t.Logout=t.ReleaseVideo=t.Categories=t.Follow=t.LiveHistory=t.LiveDetails=t.StopLive=t.StartLive=t.LiveList=t.VideoPlayback=t.User=t.Login=t.Captcha=t.EmailCaptcha=t.Register=t.SMS=t.CancelPraise=t.Praise=t.VList=t.VideoList=void 0;var n=r(7);t.VideoList=function(){return(0,n.post)("video/referList")};t.VList=function(e){return(0,n.post)("video/list",e)};t.Praise=function(e){return(0,n.post)("like/on",e)};t.CancelPraise=function(e){return(0,n.post)("like/off",e)};t.SMS=function(e){return(0,n.post)("smsGet",e)};t.Register=function(e){return(0,n.post)("register",e)};t.EmailCaptcha=function(e){return(0,n.post)("emailGet",e)};t.Captcha=function(){return(0,n.post)("captchaGet")};t.Login=function(e){return(0,n.post)("login",e)};t.User=function(){return(0,n.post)("user")};t.VideoPlayback=function(e){return(0,n.post)("video/view",e)};t.LiveList=function(e){return(0,n.post)("live/list",e)};t.StartLive=function(e){return(0,n.post)("live/start",e)};t.StopLive=function(){return(0,n.post)("live/close")};t.LiveDetails=function(e){return(0,n.post)("live/view",e)};t.LiveHistory=function(e){return(0,n.post)("live/history",e)};t.Follow=function(e){return(0,n.post)("follow/on",e)};t.Categories=function(e){return(0,n.post)("category",e)};t.ReleaseVideo=function(e){return(0,n.post)("video/add",e)};t.Logout=function(){return(0,n.post)("logout")};t.ArticleList=function(e){return(0,n.post)("article/list",e)};t.FocusArticleList=function(e){return(0,n.post)("article/followList",e)};t.PostArticle=function(e){return(0,n.post)("article/add",e)};t.CommentList=function(e){return(0,n.post)("comment/list",e)};t.Comment=function(e){return(0,n.post)("comment/add",e)};t.CommentPraise=function(e){return(0,n.post)("comment/onLike",e)};t.CancelCommentPraise=function(e){return(0,n.post)("comment/offLike",e)};t.UploadImage=function(){return(0,n.post)("upload")};t.PromotionRecord=function(){return(0,n.post)("refer")};t.Fans=function(e){return(0,n.post)("follow/fans",e)};t.FollowList=function(e){return(0,n.post)("follow/me",e)};t.Unfollow=function(e){return(0,n.post)("follow/off",e)};t.AD=function(e){return(0,n.post)("advert/list",e)};t.MyVideoList=function(e){return(0,n.post)("video/me",e)};t.RemoveVideo=function(e){return(0,n.post)("video/del",e)};t.RrticleList=function(e){return(0,n.post)("article/me",e)};t.RemoveArticle=function(e){return(0,n.post)("article/del",e)};t.LikeVideoList=function(e){return(0,n.post)("like/list",e)};t.ReplyList=function(e){return(0,n.post)("comment/commentList",e)};t.AddView=function(e){return(0,n.post)("video/historyAdd",e)};t.PlayRecords=function(e){return(0,n.post)("video/historyList",e)};t.Config=function(e){return(0,n.post)("config",e)};t.AddDownload=function(e){return(0,n.post)("download",{vid:e})};t.DownloadRecords=function(e){return(0,n.post)("downloadList",e)};t.TaskList=function(){return(0,n.post)("task/list")};t.TaskPickup=function(e){return(0,n.post)("task/receive",e)};t.MessageList=function(e){return(0,n.post)("message/getList",e)};t.Reward=function(e){return(0,n.post)("user/give",e)};t.CardSecretExchange=function(e){return(0,n.post)("cipher/receive",e)};t.AgentTotal=function(){return(0,n.post)("agentNum")}},7:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;var n,o=(n=r(8))&&n.__esModule?n:{default:n},i=(r(20),r(21));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=new o.default,l={baseURL:"",header:{},method:"GET",dataType:"json",custom:{},sslVerify:!0,firstIpv4:!1,validateStatus:function(e){return e>=200&&e<300}};t.get=function(e,t){return c.get("".concat(i.BASE_URL).concat(e),s({params:t},l))};t.post=function(e,t){return c.post("".concat(i.BASE_URL).concat(e),t,s(s({},l),{},{method:"POST"}))},c.interceptors.request.use((function(e){try{var t=uni.getStorageSync("TOKEN");t&&(e.header=s(s({},e.header),{},{authorization:t}))}catch(e){}return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data.code;if(500===t&&uni.navigateTo({url:"/pages/login/login"}),200===t){var r=e.header.authorization;if(r)try{uni.setStorageSync("TOKEN",r)}catch(e){}}return e.data}),(function(t){return e("log",t," at common/request.js:102"),Promise.reject(t)}))}).call(this,r(3).default)},77:function(e,t,r){"use strict";var n=r(212),o=r(142),i=r(1);var a=Object(i.a)(o.default,n.b,n.c,!1,null,"53c3c49c","1262653a",!1,n.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(235).default,this.options.style):Object.assign(this.options.style,r(235).default)}).call(a),t.default=a.exports},8:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r(9))&&n.__esModule?n:{default:n}).default;t.default=o},9:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(10)),o=u(r(17)),i=u(r(18)),a=u(r(19)),s=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d(this,t),(0,s.isPlainObject)(r)||(r={},e("warn","\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\u5fc5\u987b\u63a5\u6536\u4e00\u4e2aObject"," at js_sdk/luch-request/luch-request/core/Request.js:39")),this.config=l(l({},a.default),r),this.interceptors={request:new o.default,response:new o.default}}var r,u,c;return r=t,(u=[{key:"setConfig",value:function(e){this.config=e(this.config)}},{key:"middleware",value:function(e){e=(0,i.default)(this.config,e);var t=[n.default,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r}},{key:"request",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.middleware(e)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.middleware(l({url:e,method:"GET"},t))}},{key:"post",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"POST"},r))}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"PUT"},r))}},{key:"delete",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"DELETE"},r))}},{key:"connect",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"CONNECT"},r))}},{key:"head",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"HEAD"},r))}},{key:"options",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"OPTIONS"},r))}},{key:"trace",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.middleware(l({url:e,data:t,method:"TRACE"},r))}},{key:"upload",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.url=e,t.method="UPLOAD",this.middleware(t)}},{key:"download",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.url=e,t.method="DOWNLOAD",this.middleware(t)}}])&&p(r.prototype,u),c&&p(r,c),t}();t.default=m}).call(this,r(3).default)}});