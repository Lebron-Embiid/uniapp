(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_mater/release_mater"],{"2fd7":function(e,t,o){"use strict";o.r(t);var n=o("dbad"),a=o("7e97");for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);o("782e");var i=o("2877"),r=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"50a02539",null);t["default"]=r.exports},"782e":function(e,t,o){"use strict";var n=o("bd44"),a=o.n(n);a.a},"7e97":function(e,t,o){"use strict";o.r(t);var n=o("f79b"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},bd44:function(e,t,o){},dbad:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},f79b:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(o("b554"));function n(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{title:"",photos:[],isClick:0}},methods:{selectPhoto:function(t){var o=this;e.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album"],success:function(t){for(var n in console.log(t.tempFilePaths," at pages\\release_mater\\release_mater.vue:40"),e.showLoading({title:"上传中"}),t.tempFilePaths)console.log(t.tempFilePaths[n]," at pages\\release_mater\\release_mater.vue:45"),e.uploadFile({url:o.$api+"default/upload-image",filePath:t.tempFilePaths[n],name:"image",success:function(t){var n=JSON.parse(t.data);if(console.log(n," at pages\\release_mater\\release_mater.vue:52"),0==n.code){if(o.photos.length>=9)return e.showToast({title:"最多发布图片9张",icon:"none"}),!1;var a=n.data.url;o.photos.push(a)}else e.showToast({title:n.msg,icon:"none"})}});e.hideLoading()},fail:function(t){e.showToast({title:t.data.msg,icon:"none"})}})},previewPhoto:function(t){var o=this;e.previewImage({urls:o.photos,current:o.photos[t]})},deletePhoto:function(t){var o=this;e.showModal({title:"提示",content:"确定删除图片？",success:function(e){e.confirm&&o.photos.splice(t,1)}})}},onLoad:function(t){var o=this;o.$access_token=e.getStorageSync("access_token"),o.$level=e.getStorageSync("level"),getApp().globalData.url=""},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(){var t=this,o=this;e.showModal({title:"提示",content:"确定发布？",success:function(n){if(n.confirm){if(1==o.isClick)return!1;if(0==o.photos.length)return e.showToast({title:"请上传图片！",icon:"none",duration:1e3}),!1;if(""==o.title)return e.showToast({title:"请输入标题！",icon:"none",duration:1e3}),!1;e.request({url:o.$api+"default/source-edit&access_token="+o.$access_token,dataType:"json",method:"POST",data:{user_id:0,content:o.photos,title:o.title,type:0,browse_id:0},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){o.isClick=1,0==t.data.code&&(e.showToast({title:t.data.msg,icon:"none",duration:1e3}),setTimeout(function(){e.navigateBack({delta:1})},1500))},fail:function(t){e.showToast({title:t.data.msg,icon:"none"})}})}else console.log(t.photos," at pages\\release_mater\\release_mater.vue:191")},fail:function(e){console.log(e," at pages\\release_mater\\release_mater.vue:195")}})}};t.default=a}).call(this,o("6e42")["default"])}},[["48c1","common/runtime","common/vendor"]]]);