(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/release_video/release_video"],{"0130":function(e,t,i){"use strict";i("283e");var o=a(i("b0ce")),s=a(i("b3d3"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},"29cb":function(e,t,i){"use strict";var o=i("c9cb"),s=i.n(o);s.a},"554b":function(e,t,i){"use strict";i.r(t);var o=i("f935"),s=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=s.a},b3d3:function(e,t,i){"use strict";i.r(t);var o=i("bec1"),s=i("554b");for(var a in s)"default"!==a&&function(e){i.d(t,e,function(){return s[e]})}(a);i("29cb");var n=i("2877"),c=Object(n["a"])(s["default"],o["a"],o["b"],!1,null,"235cb8cf",null);t["default"]=c.exports},bec1:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"release_mater"},[i("view",{staticClass:"page_bg"}),i("view",{staticClass:"edit_video_info"},[i("view",{staticClass:"left_info"},[i("view",{staticClass:"input_box"},[i("input",{attrs:{type:"text",placeholder:"输入标题",value:e.title,eventid:"12dd7e13-0"},on:{input:e.getTitle}})])]),i("view",{staticClass:"right_photo",attrs:{eventid:"12dd7e13-1"},on:{click:e.toEditPoster}},[""!=e.poster?i("view",{staticClass:"poster_box"},[i("image",{attrs:{src:e.poster,mode:"widthFix"}})]):i("block",[i("view",{staticClass:"edit_poster"},[e._v("编辑封面")])])],1)]),i("view",{staticClass:"release_box"},[""!=e.video?i("view",{staticClass:"release_item item_box"},[i("video",{attrs:{src:e.video,controls:e.isControls,"show-center-play-btn":e.isPlay}}),i("image",{staticClass:"close_img",attrs:{src:"../../static/close.png",mode:"widthFix",eventid:"12dd7e13-2"},on:{click:e.deleteVideo}})]):i("view",{staticClass:"release_btn item_box",attrs:{eventid:"12dd7e13-3"},on:{click:e.selectVideo}},[e._m(0)])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"btn_box"},[i("image",{attrs:{src:"../../static/release_btn.png",mode:"widthFix"}}),i("text",[e._v("上传视频")])])}];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return s})},c9cb:function(e,t,i){},f935:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"",info:"",poster:"",video:"",isControls:!1,isPlay:!1}},methods:{getTitle:function(e){this.title=e.detail.value},getInfo:function(e){this.info=e.detail.value},toEditPoster:function(t){var i=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.uploadFile({url:i.$api+"default/upload-image",filePath:t.tempFilePaths[0],name:"image",success:function(e){var t=JSON.parse(e.data);i.poster=t.data.url,console.log(i.poster)}})}})},selectVideo:function(t){var i=this;e.chooseVideo({count:1,sourceType:["album","camera"],success:function(e){i.video=e.tempFilePath}})},deleteVideo:function(t){var i=this;e.showModal({title:"提示",content:"确定删除视频？",success:function(e){e.confirm&&(i.video="")}})}},onNavigationBarButtonTap:function(){var t=this;e.showModal({title:"提示",content:"确定发布？",success:function(i){if(i.confirm){var o=t;if(""==o.title)return e.showToast({title:"请填写标题！",icon:"none",duration:1e3}),!1;o.poster="http://gao2.demenk.com/shop/web/uploads/image/store_1/00889d53464da7ea91f5fc5c7438ec59df0ee997.jpg",o.video="http://gao2.demenk.com/shop/web/uploads/video/test.mp3",e.request({url:o.$api+"default/movies-edit&access_token="+o.$access_token,dataType:"json",method:"POST",data:{title:o.title,cove_pic:o.poster,url:o.video},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.showToast({title:t.data.msg,icon:"none",duration:1e3})},fail:function(){e.showToast({title:i.data.msg,icon:"none"})}})}},fail:function(e){console.log(e)}})}};t.default=i}).call(this,i("6e42")["default"])}},[["0130","common/runtime","common/vendor"]]]);