(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_mater/release_mater"],{"0786":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{photos:[]}},methods:{selectPhoto:function(e){var o=this;t.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(e){for(var n=e.tempFilePaths.length,s=0;s<n;s++)t.getImageInfo({src:e.tempFilePaths[s],success:function(t){console.log(t)}}),o.photos.push(e.tempFilePaths[s])}})},previewPhoto:function(e){var o=this;t.previewImage({urls:o.photos,current:o.photos[e]})},deletePhoto:function(e){var o=this;t.showModal({title:"提示",content:"确定删除图片？",success:function(t){t.confirm&&o.photos.splice(e,1)}})}},onNavigationBarButtonTap:function(){var e=this;t.showModal({title:"提示",content:"确定发布？",success:function(o){if(o.confirm){var n=e;t.request({url:n.$api+"default/source-edit&access_token="+n.$access_token,dataType:"json",method:"GET",data:{content:n.photos},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1e3}),setTimeout(function(){t.navigateBack({delta:1})},1e3)},fail:function(){t.showToast({title:o.data.msg,icon:"none"})}})}else console.log(e.photos)},fail:function(t){console.log(t)}})}};e.default=o}).call(this,o("6e42")["default"])},"34e6":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"release_mater"},[o("view",{staticClass:"page_bg"}),o("view",{staticClass:"release_box"},[t._l(t.photos,function(e,n){return o("view",{key:n,staticClass:"release_item item_box"},[o("image",{staticClass:"photo_img",attrs:{src:e,mode:"widthFix",eventid:"6a023c92-0-"+n},on:{click:function(e){t.previewPhoto(n)}}}),o("image",{staticClass:"close_img",attrs:{src:"../../static/close.png",mode:"widthFix",eventid:"6a023c92-1-"+n},on:{click:function(e){t.deletePhoto(n)}}})])}),o("view",{staticClass:"release_btn item_box",attrs:{eventid:"6a023c92-2"},on:{click:t.selectPhoto}},[t._m(0)])],2)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"btn_box"},[o("image",{attrs:{src:"../../static/release_btn.png",mode:"widthFix"}}),o("text",[t._v("上传素材")])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},"3ef5":function(t,e,o){"use strict";var n=o("5f41"),s=o.n(n);s.a},"5dc3":function(t,e,o){"use strict";o.r(e);var n=o("34e6"),s=o("dd84");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("3ef5");var c=o("2877"),i=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,"c22af3cc",null);e["default"]=i.exports},"5f41":function(t,e,o){},ab25:function(t,e,o){"use strict";o("283e");var n=a(o("b0ce")),s=a(o("5dc3"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},dd84:function(t,e,o){"use strict";o.r(e);var n=o("0786"),s=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}},[["ab25","common/runtime","common/vendor"]]]);