(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0897":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"routerView"},[a("NavigationBar",{attrs:{title:"Scan Face"}}),a("div",{staticClass:"mainContainer"},[a("div",{staticClass:"tipHeader"},[t._v("\n      Get ready to scan your face\n    ")]),t._m(0),a("div",{staticClass:"tipHeader"},[t._v("\n      Scan face tips\n    ")]),a("div",{staticClass:"tipText",domProps:{innerHTML:t._s(t.tipText)}})]),a("div",{staticClass:"footer"},[a("BottomButton",{attrs:{buttonText:"Scan Face",buttonClick:t.scanFace,disableClick:t.buttonDisable}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imgContainer"},[n("div",{staticClass:"gifContainer"},[n("img",{staticClass:"faceGuideImage",attrs:{src:a("724c")}})])])}],i=(a("28a5"),a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("3b8d")),s=a("d225"),c=a("b0b4"),o=a("308d"),u=a("6bb5"),l=a("4e2b"),f=a("9ab4"),d=a("60a3"),b=a("29cf"),v=a("641e"),p=a("3f7f"),h=a("8fb6"),m=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.tipText="&nbsp;&nbsp;· Make sure you're in a well-lit room<br/>&nbsp;&nbsp;· Place your face within the frame<br/>&nbsp;&nbsp;· Wait a few seconds for automatic scanning",t.state="",t.buttonDisable=!0,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=JSON.parse(decodeURIComponent(Object(h["a"])("response"))),this.state=Object(h["a"])("state"),1e3!==e.code&&2006!==e.code){t.next=11;break}return a={bizId:this.state},t.next=6,Object(p["a"])(a);case 6:n=t.sent,console.log(n),"NETWORK_ERROR"===n.error?alert("Network Error"):n.success?this.buttonDisable=!1:alert("Check Result Error"),t.next=12;break;case 11:window.history.back();case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=document.getElementsByClassName("routerView"),e=!0,a=!1,n=void 0;try{for(var r,i=t[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value;s.style.minHeight=window.innerHeight+"px"}}catch(c){a=!0,n=c}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}}},{key:"scanFace",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r,i,s,c,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={bizId:this.state},t.next=3,Object(p["d"])(e);case 3:a=t.sent,console.log(a),"NETWORK_ERROR"===a.error?alert("Network Error"):a.success?(n="https://zasia.oss-cn-beijing.aliyuncs.com/prod/zoloz-saas-face-demo/index.html",r=a.bizId,i=a.clientCfg,s=window.location.href,c=s.split("#")[0],o=c+"#/result",window.location.href="".concat(n,"?state=").concat(r,"&clientcfg=").concat(encodeURIComponent(i),"&callbackurl=").concat(encodeURIComponent(o))):alert("System Error");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(d["c"]);m=f["a"]([Object(d["a"])({components:{BottomButton:b["a"],NavigationBar:v["a"]}})],m);var g=m,x=g,w=(a("5fa5"),a("2877")),C=Object(w["a"])(x,n,r,!1,null,"7e7f82f5",null);e["default"]=C.exports},"386d":function(t,e,a){"use strict";var n=a("cb7c"),r=a("83a1"),i=a("5f1b");a("214f")("search",1,function(t,e,a,s){return[function(a){var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=s(a,t,this);if(e.done)return e.value;var c=n(t),o=String(this),u=c.lastIndex;r(u,0)||(c.lastIndex=0);var l=i(c,o);return r(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]})},"3b2b":function(t,e,a){var n=a("7726"),r=a("5dbc"),i=a("86cc").f,s=a("9093").f,c=a("aae3"),o=a("0bfb"),u=n.RegExp,l=u,f=u.prototype,d=/a/g,b=/a/g,v=new u(d)!==d;if(a("9e1e")&&(!v||a("79e5")(function(){return b[a("2b4c")("match")]=!1,u(d)!=d||u(b)==b||"/a/i"!=u(d,"i")}))){u=function(t,e){var a=this instanceof u,n=c(t),i=void 0===e;return!a&&n&&t.constructor===u&&i?t:r(v?new l(n&&!i?t.source:t,e):l((n=t instanceof u)?t.source:t,n&&i?o.call(t):e),a?this:f,u)};for(var p=function(t){t in u||i(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},h=s(l),m=0;h.length>m;)p(h[m++]);f.constructor=u,u.prototype=f,a("2aba")(n,"RegExp",u)}a("7a56")("RegExp")},4917:function(t,e,a){"use strict";var n=a("cb7c"),r=a("9def"),i=a("0390"),s=a("5f1b");a("214f")("match",1,function(t,e,a,c){return[function(a){var n=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=c(a,t,this);if(e.done)return e.value;var o=n(t),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var f,d=[],b=0;while(null!==(f=s(o,u))){var v=String(f[0]);d[b]=v,""===v&&(o.lastIndex=i(u,r(o.lastIndex),l)),b++}return 0===b?null:d}]})},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var i,s=e.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(t,i),t}},"5fa5":function(t,e,a){"use strict";var n=a("8b8c"),r=a.n(n);r.a},"724c":function(t,e,a){t.exports=a.p+"img/faceguide.e4594d56.gif"},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b8c":function(t,e,a){},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),i=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},"8fb6":function(t,e,a){"use strict";a.d(e,"a",function(){return n});a("28a5"),a("386d"),a("4917"),a("3b2b");function n(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(e);if(null!=a)return a[2];var n=window.location.hash.split("?")[1];if(n){var r=n.match(e);if(null!=r)return r[2]}return""}},ea89:function(t,e,a){},eeac:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"routerView"},[a("NavigationBar",{attrs:{title:"Verification Result"}}),a("div",{staticClass:"resultMainContainer"},[a("div",{staticClass:"imageContainer"},[a("img",{staticClass:"docImage",attrs:{src:t.docImage}}),a("img",{staticClass:"faceImage",attrs:{src:t.faceImage}})]),a("div",{staticClass:"textContainer"},[a("div",{staticClass:"leftText"},[t._v("Ekyc Success")]),a("div",{staticClass:"rightText"},[t._v(t._s(t.result))])]),a("div",{staticClass:"textContainer"},[a("div",{staticClass:"leftText"},[t._v("Same Person")]),a("div",{staticClass:"rightText"},[t._v(t._s(t.samePerson))])]),a("div",{staticClass:"textContainer"},[a("div",{staticClass:"leftText"},[t._v("Score")]),a("div",{staticClass:"rightText"},[t._v(t._s(t.score))])]),a("div",{staticClass:"textContainer"},[a("div",{staticClass:"leftText"},[t._v("Risk")]),a("div",{staticClass:"rightText"},[t._v(t._s(t.risk))])])]),a("div",{staticClass:"footer"},[a("BottomButton",{attrs:{buttonText:"OK",buttonClick:t.okClick}})],1)],1)},r=[],i=(a("ac4d"),a("8a81"),a("ac6a"),a("96cf"),a("3b8d")),s=a("d225"),c=a("b0b4"),o=a("308d"),u=a("6bb5"),l=a("4e2b"),f=a("9ab4"),d=a("60a3"),b=a("29cf"),v=a("641e"),p=a("3f7f"),h=a("8fb6"),m=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.docImage="",t.faceImage="",t.result="",t.samePerson="",t.score="",t.risk="",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=JSON.parse(decodeURIComponent(Object(h["a"])("response"))),a=Object(h["a"])("state"),1e3!==e.code&&2006!==e.code){t.next=11;break}return n={bizId:a},t.next=6,Object(p["b"])(n);case 6:r=t.sent,console.log(r),404===r.retCode?alert("Network Error"):(r.docImg&&(this.docImage="data:image/png;base64,".concat(r.docImg)),r.faceImg&&(this.faceImage="data:image/png;base64,".concat(r.faceImg)),this.result=r.success,this.samePerson=r.samePerson,this.score=r.score&&r.score.toFixed(2)||"",this.risk=r.risk),t.next=12;break;case 11:window.history.back();case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=document.getElementsByClassName("routerView"),e=!0,a=!1,n=void 0;try{for(var r,i=t[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value;s.style.minHeight=window.innerHeight+"px"}}catch(c){a=!0,n=c}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}}},{key:"okClick",value:function(){window.history.go(-2)}}]),e}(d["c"]);m=f["a"]([Object(d["a"])({components:{BottomButton:b["a"],NavigationBar:v["a"]}})],m);var g=m,x=g,w=(a("efbb"),a("2877")),C=Object(w["a"])(x,n,r,!1,null,"5b261d5e",null);e["default"]=C.exports},efbb:function(t,e,a){"use strict";var n=a("ea89"),r=a.n(n);r.a}}]);