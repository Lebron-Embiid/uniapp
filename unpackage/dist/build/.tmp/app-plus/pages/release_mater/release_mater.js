(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_mater/release_mater"],{"2fd7":function(t,e,o){"use strict";o.r(e);var n=o("dbad"),i=o("7e97");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("782e");var s=o("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"50a02539",null);e["default"]=c.exports},"48c1":function(t,e,o){"use strict";o("1a7f");var n=a(o("b0ce")),i=a(o("2fd7"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"782e":function(t,e,o){"use strict";var n=o("bd44"),i=o.n(n);i.a},"7e97":function(t,e,o){"use strict";o.r(e);var n=o("9618"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=i.a},9618:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(o("b554"));function n(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{title:"",photos:[],isClick:0}},methods:{selectPhoto:function(e){var o=this;t.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album"],success:function(e){for(var n in console.log(e.tempFilePaths),t.showLoading({title:"上传中"}),e.tempFilePaths)console.log(e.tempFilePaths[n]),t.uploadFile({url:o.$api+"default/upload-image",filePath:e.tempFilePaths[n],name:"image",success:function(e){var n=JSON.parse(e.data);if(console.log(n),0==n.code){if(o.photos.length>=9)return t.showToast({title:"最多发布图片9张",icon:"none"}),!1;var i=n.data.url;o.photos.push(i)}else t.showToast({title:n.msg,icon:"none"})}});t.hideLoading()},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})},previewPhoto:function(e){var o=this;t.previewImage({urls:o.photos,current:o.photos[e]})},deletePhoto:function(e){var o=this;t.showModal({title:"提示",content:"确定删除图片？",success:function(t){t.confirm&&o.photos.splice(e,1)}})}},onLoad:function(e){var o=this;o.$access_token=t.getStorageSync("access_token"),o.$level=t.getStorageSync("level"),getApp().globalData.url=""},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(){var e=this,o=this;t.showModal({title:"提示",content:"确定发布？",success:function(n){if(n.confirm){if(1==o.isClick)return!1;if(0==o.photos.length)return t.showToast({title:"请上传图片！",icon:"none",duration:1e3}),!1;if(""==o.title)return t.showToast({title:"请输入标题！",icon:"none",duration:1e3}),!1;t.request({url:o.$api+"default/source-edit&access_token="+o.$access_token,dataType:"json",method:"POST",data:{user_id:0,content:o.photos,title:o.title,type:0,browse_id:0},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){o.isClick=1,0==e.data.code&&(t.showToast({title:e.data.msg,icon:"none",duration:1e3}),setTimeout(function(){t.navigateBack({delta:1})},1500))},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})}else console.log(e.photos)},fail:function(t){console.log(t)}})}};e.default=i}).call(this,o("6e42")["default"])},bd44:function(t,e,o){},dbad:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"release_mater"},[o("view",{staticClass:"page_bg"}),o("view",{staticClass:"release_box"},[o("view",{staticClass:"left_info"},[o("view",{staticClass:"input_box"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"输入标题",value:t.title,eventid:"6a023c92-0"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._l(t.photos,function(e,n){return o("view",{key:n,staticClass:"release_item item_box"},[o("image",{staticClass:"photo_img",attrs:{src:e,mode:"widthFix",eventid:"6a023c92-1-"+n},on:{click:function(e){t.previewPhoto(n)}}}),o("image",{staticClass:"close_img",attrs:{src:"../../static/close.png",mode:"widthFix",eventid:"6a023c92-2-"+n},on:{click:function(e){t.deletePhoto(n)}}})])}),o("view",{staticClass:"release_btn item_box",attrs:{eventid:"6a023c92-3"},on:{click:t.selectPhoto}},[t._m(0)])],2)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"btn_box"},[o("image",{attrs:{src:"../../static/release_btn.png",mode:"widthFix"}}),o("text",[t._v("上传图片")])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})}},[["48c1","common/runtime","common/vendor"]]]);