(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_mater/release_mater"],{"2fd7":function(e,t,o){"use strict";o.r(t);var n=o("eca6"),a=o("7e97");for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);o("b453");var i=o("2877"),c=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"649f7244",null);t["default"]=c.exports},"7e97":function(e,t,o){"use strict";o.r(t);var n=o("b220"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},b220:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(o("b554"));function n(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{title:"",photos:[]}},methods:{selectPhoto:function(t){var o=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log(t.tempFilePaths[0]," at pages\\release_mater\\release_mater.vue:39"),e.uploadFile({url:o.$api+"default/upload-image",filePath:t.tempFilePaths[0],name:"image",success:function(t){var n=JSON.parse(t.data);if(0==n.code){var a=n.data.url;o.photos.push(a)}else e.showToast({title:n.msg,icon:"none"})}})},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}})},previewPhoto:function(t){var o=this;e.previewImage({urls:o.photos,current:o.photos[t]})},deletePhoto:function(t){var o=this;e.showModal({title:"提示",content:"确定删除图片？",success:function(e){e.confirm&&o.photos.splice(t,1)}})}},onLoad:function(t){var o=this;o.$access_token=e.getStorageSync("access_token"),o.$level=e.getStorageSync("level"),getApp().globalData.url=""},onPullDownRefresh:function(){setTimeout(function(){e.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(){var t=this;e.showModal({title:"提示",content:"确定发布？",success:function(o){if(o.confirm){var n=t;if(0==n.photos.length)return e.showToast({title:"请上传图片！",icon:"none",duration:1e3}),!1;if(""==n.title)return e.showToast({title:"请输入标题！",icon:"none",duration:1e3}),!1;e.request({url:n.$api+"default/source-edit&access_token="+n.$access_token,dataType:"json",method:"POST",data:{user_id:0,content:n.photos,title:n.title,type:0,browse_id:0},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){0==t.data.code&&(e.showToast({title:t.data.msg,icon:"none",duration:1e3}),setTimeout(function(){e.navigateBack({delta:1})},1500))},fail:function(){e.showToast({title:o.data.msg,icon:"none"})}})}else console.log(t.photos," at pages\\release_mater\\release_mater.vue:171")},fail:function(e){console.log(e," at pages\\release_mater\\release_mater.vue:175")}})}};t.default=a}).call(this,o("6e42")["default"])},b453:function(e,t,o){"use strict";var n=o("c14f"),a=o.n(n);a.a},c14f:function(e,t,o){},eca6:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})}},[["48c1","common/runtime","common/vendor"]]]);