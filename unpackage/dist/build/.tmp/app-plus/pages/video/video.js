(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/video/video"],{"0485":function(e,t,n){"use strict";var o=n("bf9a"),a=n.n(o);a.a},5329:function(e,t,n){"use strict";n.r(t);var o=n("de7d"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=a.a},"70fd":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},bf9a:function(e,t,n){},de7d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e.createInnerAudioContext(),a=plus.audio.createPlayer("_Doc/Audio/test.mp3"),c=function(){return Promise.all([n.e("common/vendor"),n.e("components/u-parse/u-parse")]).then(n.bind(null,"d250"))},i={data:function(){return{controls:!0,play:!0,full:!0,id:"",video:"",content:""}},components:{uParse:c},onShow:function(){console.log(o.src+"123"," at pages\\video\\video.vue:33"),o.src="",o.pause(),o.stop(),a.close(),a.pause(),a.stop()},onLoad:function(t){var n=this;this.videoContext=e.createVideoContext("myVideo");var o=this;o.$access_token=e.getStorageSync("access_token"),o.$level=e.getStorageSync("level"),o.id=t.id;var a=t.istype;console.log(a," at pages\\video\\video.vue:50"),0==a?e.request({url:o.$api+"default/video-detail&access_token="+o.$access_token+"&id="+t.id,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){o.video=e.data.data.url,o.content=e.data.data.content},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}):e.request({url:o.$api+"default/movies-detail&access_token="+o.$access_token+"&id="+t.id,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){o.video=e.data.data.url,n.videoContext.requestFullScreen(0)},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}})}};t.default=i}).call(this,n("6e42")["default"])},f14a:function(e,t,n){"use strict";n.r(t);var o=n("70fd"),a=n("5329");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("0485");var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"eee31e66",null);t["default"]=s.exports}},[["0806","common/runtime","common/vendor"]]]);