(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mater_detail/mater_detail"],{1110:function(t,a,e){"use strict";var n=e("1488"),s=e.n(n);s.a},1488:function(t,a,e){},"247f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"mater_detail"},[e("view",{staticClass:"photo_head"},[e("image",{staticClass:"avatar_img",attrs:{src:t.avatar,mode:"widthFix"}}),e("text",{staticClass:"ph_name"},[t._v(t._s(t.name))]),"true"==t.sign?e("block",[e("text",{staticClass:"ph_sign"},[t._v("精选")])]):t._e(),e("text",{staticClass:"ph_txt"},[t._v(t._s(t.time))])],1),e("view",{staticClass:"photo_content"},t._l(t.maters,function(a,n){return e("view",{key:n,staticClass:"pc_item",attrs:{eventid:"2213ac2b-0-"+n},on:{click:function(a){t.downloadMater(n)}}},[e("image",{staticClass:"c_img",attrs:{src:a,mode:"widthFix"}}),e("image",{staticClass:"download_icon",attrs:{src:"../../static/download.png",mode:"widthFix"}})])})),e("view",{staticClass:"photo_bottom"},[t._m(0),e("view",{staticClass:"pb_num"},[t._v("浏览："+t._s(t.num))])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"pb_share"},[e("image",{attrs:{src:"../../static/share.png",mode:"widthFix"}}),t._v("一键转发")])}];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return s})},"40a4":function(t,a,e){"use strict";e("d38b");var n=i(e("b0ce")),s=i(e("8869"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"43ec":function(t,a,e){"use strict";e.r(a);var n=e("e50e"),s=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=s.a},8869:function(t,a,e){"use strict";e.r(a);var n=e("247f"),s=e("43ec");for(var i in s)"default"!==i&&function(t){e.d(a,t,function(){return s[t]})}(i);e("1110");var r=e("2877"),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"45b84b2c",null);a["default"]=o.exports},e50e:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{name:"",avatar:"",time:"",num:0,sign:"",maters:[]}},methods:{downloadMater:function(a){var e=this;t.downloadFile({url:e.maters[a],success:function(t){200===t.statusCode&&console.log("下载成功")}})}},onNavigationBarButtonTap:function(){t.navigateTo({url:"/pages/release_mater/release_mater"})},onLoad:function(t){var a=this;a.name=t.name,a.avatar=t.avatar,a.time=t.time,a.num=t.num,a.sign=t.sign,a.maters=t.maters.split(",")}};a.default=e}).call(this,e("6e42")["default"])}},[["40a4","common/runtime","common/vendor"]]]);