(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_video/release_video"],{"48f0":function(e,t,o){},7669:function(e,t,o){"use strict";o.r(t);var a=o("b272"),n=o("f8c6");for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);o("b069");var s=o("2877"),l=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"15c928dd",null);t["default"]=l.exports},a447:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(o("b554"));function a(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{title:"",info:"",poster:"",video:"",isControls:!1,isPlay:!1}},methods:{getTitle:function(e){this.title=e.detail.value},getInfo:function(e){this.info=e.detail.value},toEditPoster:function(t){var o=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log(t," at pages\\release_video\\release_video.vue:58"),e.uploadFile({url:o.$api+"default/upload-image",filePath:t.tempFilePaths[0],name:"image",success:function(e){var t=JSON.parse(e.data);o.poster=t.data.url,console.log(o.poster," at pages\\release_video\\release_video.vue:66")}})}})},selectVideo:function(t){var o=this;e.chooseVideo({count:1,sourceType:["album","camera"],success:function(t){console.log(t," at pages\\release_video\\release_video.vue:87"),e.showLoading({title:"上传中..."});t.tempFilePath;e.uploadFile({url:o.$api+"default/upload-video",filePath:t.tempFilePath,name:"file",formData:{name:"123.mp4"},success:function(t){var a=JSON.parse(t.data);o.video=a.data.url,e.hideLoading(),console.log(o.video," at pages\\release_video\\release_video.vue:105")}})}})},deleteVideo:function(t){var o=this;e.showModal({title:"提示",content:"确定删除视频？",success:function(e){e.confirm&&(o.video="")}})}},onLoad:function(t){var o=this;o.$access_token=e.getStorageSync("access_token"),o.$level=e.getStorageSync("level"),getApp().globalData.url="",e.startPullDownRefresh()},onPullDownRefresh:function(){var t=this;setTimeout(function(){t.video=getApp().globalData.url,console.log(t.video," at pages\\release_video\\release_video.vue:135"),e.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(){var t=this;e.showModal({title:"提示",content:"确定发布？",success:function(o){var a=t;return""==a.title?(e.showToast({title:"请填写标题！",icon:"none",duration:1e3}),!1):""==a.poster?(e.showToast({title:"请上传封面图！",icon:"none",duration:1e3}),!1):""==a.video?(e.showToast({title:"请上传视频！",icon:"none",duration:1e3}),!1):(console.log(a.video," at pages\\release_video\\release_video.vue:172"),void e.request({url:a.$api+"default/movies-edit&access_token="+a.$access_token,dataType:"json",method:"POST",data:{title:a.title,cove_pic:a.poster,url:a.video},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){0==t.data.code&&(e.showToast({title:t.data.msg,icon:"none",duration:1e3}),setTimeout(function(){e.navigateBack({delta:1})},1e3))},fail:function(){e.showToast({title:o.data.msg,icon:"none"})}}))},fail:function(e){console.log(e," at pages\\release_video\\release_video.vue:210")}})}};t.default=n}).call(this,o("6e42")["default"])},b069:function(e,t,o){"use strict";var a=o("48f0"),n=o.n(a);n.a},b272:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},f8c6:function(e,t,o){"use strict";o.r(t);var a=o("a447"),n=o.n(a);for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);t["default"]=n.a}},[["9ae9","common/runtime","common/vendor"]]]);