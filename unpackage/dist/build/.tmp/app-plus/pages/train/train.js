(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/train/train"],{4435:function(e,t,a){"use strict";var o=a("6395"),n=a.n(o);n.a},"5e8f":function(e,t,a){"use strict";a.r(t);var o=a("7473"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);t["default"]=n.a},6395:function(e,t,a){},7473:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e.createInnerAudioContext(),n=function(){return a.e("components/common-video").then(a.bind(null,"5238"))},i={data:function(){return{page_video:1,page_video_count:1,page_movie:1,page_movie_count:1,navbar:[{name:"视频"},{name:"音频"}],currentTab:0,video_list:[],auto_list:[],keyword:""}},components:{commonVideo:n},methods:{getAudioword:function(t){var a=this;a.keyword=t.detail.value,e.request({url:a.$api+"default/video-list&type="+a.currentTab+"&keyword="+a.keyword+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=[],o=e.data.data.list;for(var n in o)t.push({id:o[n].id,poster:o[n].pic_url,avatar:"../../static/video_img.png",title:o[n].title,look:o[n].num,video:o[n].url});0==a.currentTab?a.page_video_count=e.data.data.page_count:a.page_movie_count=e.data.data.page_count,a.video_list=t},fail:function(t){e.showToast({title:t.data.msg,icon:"none"})}})},navbarTap:function(t){var a=this;a.currentTab=t,a.page_video=1,a.page_video_count=1,a.page_movie=1,a.page_movie_count=1,e.startPullDownRefresh(),e.request({url:a.$api+"default/video-list&type="+a.currentTab+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=[],o=e.data.data.list;for(var n in o)t.push({id:o[n].id,poster:o[n].pic_url,avatar:"../../static/video_img.png",title:o[n].title,look:o[n].num,video:o[n].url});0==a.currentTab?a.page_video_count=e.data.data.page_count:a.page_movie_count=e.data.data.page_count,a.video_list=t},fail:function(t){e.showToast({title:t.data.msg,icon:"none"})}})},toAudioDetail:function(t){e.navigateTo({url:"/pages/audio/audio?id="+t.id})}},onShow:function(){var t=this;if(o.src="",o.pause(),t.$user_name=e.getStorageSync("user_name"),""==t.$user_name)return e.showToast({title:"请完善代理商资料！",icon:"none",duration:2e3}),setTimeout(function(){e.navigateTo({url:"/pages/complete_mater/complete_mater"})},2e3),!1},onLoad:function(t){var a=this;a.$access_token=e.getStorageSync("access_token"),a.$level=e.getStorageSync("level"),setTimeout(function(){e.request({url:a.$api+"default/video-list&type=0&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=[],o=e.data.data.list;for(var n in o)t.push({id:o[n].id,poster:o[n].pic_url,avatar:"../../static/video_img.png",title:o[n].title,look:o[n].num,video:o[n].url});a.page_video_count=e.data.data.page_count,a.video_list=t},fail:function(t){e.showToast({title:t.data.msg,icon:"none"})}})},1e3),e.startPullDownRefresh()},onPullDownRefresh:function(){var t=this;t.page_video=1,t.page_movie=1,setTimeout(function(){e.request({url:t.$api+"default/video-list&type="+t.currentTab+"&access_token="+t.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=[],o=e.data.data.list;for(var n in o)a.push({id:o[n].id,poster:o[n].pic_url,avatar:"../../static/video_img.png",title:o[n].title,look:o[n].num,video:o[n].url});0==t.currentTab?t.page_video_count=e.data.data.page_count:t.page_movie_count=e.data.data.page_count,t.video_list=a},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}),e.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this;if(0==t.currentTab){if(t.page_video==t.page_video_count)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page_video=parseInt(t.page_video)+parseInt(1);var a=t.page_video}else{if(t.page_movie==t.page_movie_count)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page_movie=parseInt(t.page_movie)+parseInt(1);a=t.page_movie}e.request({url:t.$api+"default/video-list&type="+t.currentTab+"&access_token="+t.$access_token,method:"GET",data:{page:a},success:function(a){var o=[],n=a.data.data.list;for(var i in n)o.push({id:n[i].id,poster:n[i].pic_url,avatar:"../../static/video_img.png",title:n[i].title,look:n[i].num,video:n[i].url});t.video_list=t.video_list.concat(o),e.hideLoading()},fail:function(t){e.showToast({icon:"none",title:t.data.msg,duration:2e3})}})}};t.default=i}).call(this,a("6e42")["default"])},"862e":function(e,t,a){"use strict";a.r(t);var o=a("ab7d"),n=a("5e8f");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("4435");var r=a("2877"),u=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"6cb7f170",null);t["default"]=u.exports},ab7d:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})}},[["8075","common/runtime","common/vendor"]]]);