(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mater_detail/mater_detail"],{"29ad":function(t,a,e){"use strict";e.r(a);var s=e("bfd3"),i=e("8f35");for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);e("6bd6");var o=e("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,"892756b0",null);a["default"]=c.exports},"4ee8":function(t,a,e){},"6bd6":function(t,a,e){"use strict";var s=e("4ee8"),i=e.n(s);i.a},7542:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{avatar:"../../static/avatar1.png",name:"小黄鸭",time:"2018-03-24",num:123,sign:1,maters:["../../static/mater_img1.jpg","../../static/mater_img2.jpg","../../static/mater_img3.jpg"]}},methods:{downloadMater:function(a){var e=this;t.downloadFile({url:e.maters[a],success:function(a){200===a.statusCode&&t.saveImageToPhotosAlbum({filePath:a.tempFilePath,success:function(){t.showToast({title:"下载成功！",icon:"none",duration:1500})}})},fail:function(){t.showToast({title:"下载失败！",icon:"none",duration:1500})}})}},onNavigationBarButtonTap:function(){t.navigateTo({url:"/pages/release_mater/release_mater"})},onLoad:function(a){var e=this;t.request({url:e.$api+"default/source-detail&access_token="+e.$access_token+"&id="+a.id,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.data;e.avatar=a.source.avatar_url,e.name=a.source.username,e.time=a.source.addtime,e.num=a.source.browse_id,e.sign=a.source.type,e.maters=a.topic.cover_pic},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})}};a.default=e}).call(this,e("6e42")["default"])},"8f35":function(t,a,e){"use strict";e.r(a);var s=e("7542"),i=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);a["default"]=i.a},a1cd:function(t,a,e){"use strict";e("283e");var s=n(e("b0ce")),i=n(e("29ad"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},bfd3:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"mater_detail"},[e("view",{staticClass:"page_bg"}),e("view",{staticClass:"photo_head"},[e("image",{staticClass:"avatar_img",attrs:{src:t.avatar,mode:"widthFix"}}),e("text",{staticClass:"ph_name"},[t._v(t._s(t.name))]),1==t.sign?e("block",[e("text",{staticClass:"ph_sign"},[t._v("精选")])]):t._e(),e("text",{staticClass:"ph_txt"},[t._v(t._s(t.time))])],1),e("view",{staticClass:"photo_content"},t._l(t.maters,function(a,s){return e("view",{key:s,staticClass:"pc_item",attrs:{eventid:"2213ac2b-0-"+s},on:{click:function(a){t.downloadMater(s)}}},[e("image",{staticClass:"c_img",attrs:{src:a.cover_pic,mode:"widthFix"}}),e("image",{staticClass:"download_icon",attrs:{src:"../../static/download.png",mode:"widthFix"}})])})),e("view",{staticClass:"photo_bottom"},[t._m(0),e("view",{staticClass:"pb_num"},[t._v("浏览："+t._s(t.num))])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"pb_share"},[e("image",{attrs:{src:"../../static/share.png",mode:"widthFix"}}),t._v("一键转发")])}];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return i})}},[["a1cd","common/runtime","common/vendor"]]]);