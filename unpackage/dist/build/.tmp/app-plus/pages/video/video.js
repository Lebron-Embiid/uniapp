(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/video/video"],{5329:function(e,t,n){"use strict";n.r(t);var a=n("de7d"),o=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=o.a},"63a7":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"954c":function(e,t,n){},de7d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(n.bind(null,"d250"))},o={data:function(){return{controls:!0,play:!0,full:!1,id:"",video:"",content:""}},components:{uParse:a},onLoad:function(t){var n=this;n.$access_token=e.getStorageSync("access_token"),n.$level=e.getStorageSync("level"),n.id=t.id;var a=t.istype;console.log(a," at pages\\video\\video.vue:34"),0==a?e.request({url:n.$api+"default/video-detail&access_token="+n.$access_token+"&id="+t.id,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){n.video=e.data.data.url,n.content=e.data.data.content},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}):e.request({url:n.$api+"default/movies-detail&access_token="+n.$access_token+"&id="+t.id,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){n.video=e.data.data.url},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}})}};t.default=o}).call(this,n("6e42")["default"])},f14a:function(e,t,n){"use strict";n.r(t);var a=n("63a7"),o=n("5329");for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);n("fa30");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"be9dc146",null);t["default"]=u.exports},fa30:function(e,t,n){"use strict";var a=n("954c"),o=n.n(a);o.a}},[["0806","common/runtime","common/vendor"]]]);