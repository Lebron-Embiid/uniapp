(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/train/train"],{"4e6d":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"train"},[e("view",{staticClass:"page_bg"}),e("view",{staticClass:"train_box"},[e("view",{staticClass:"list_nav"},t._l(t.navbar,function(i,a){return e("view",{key:a,class:[t.currentTab==a?"active":""],attrs:{eventid:"406769dd-0-"+a},on:{click:function(i){t.navbarTap(a)}}},[t._v(t._s(i.name))])}))]),e("view",{staticClass:"mt44"}),e("view",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"video_list"},[e("commonVideo",{attrs:{video_list:t.video_list,mpcomid:"406769dd-0"}})],1),e("view",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"audio_list"},t._l(t.auto_list,function(i,a){return e("view",{key:a,staticClass:"audio_item",attrs:{eventid:"406769dd-1-"+a},on:{click:function(e){t.toAudioDetail(i)}}},[e("image",{attrs:{src:"../../static/audio_cd.png",mode:"widthFix"}}),e("view",{staticClass:"ai_title"},[t._v(t._s(i.title))]),e("view",{staticClass:"ai_info"},[t._v("听众："+t._s(i.look))])])}))])},o=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return o})},"63de":function(t,i,e){"use strict";e("283e");var a=n(e("b0ce")),o=n(e("9b4a"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(o.default))},"9b4a":function(t,i,e){"use strict";e.r(i);var a=e("4e6d"),o=e("d030");for(var n in o)"default"!==n&&function(t){e.d(i,t,function(){return o[t]})}(n);e("dc5a");var s=e("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"a0383a7c",null);i["default"]=c.exports},d030:function(t,i,e){"use strict";e.r(i);var a=e("f3b9"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=o.a},dc5a:function(t,i,e){"use strict";var a=e("e2da"),o=e.n(a);o.a},e2da:function(t,i,e){},f3b9:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("590b"));function o(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{navbar:[{name:"视频"},{name:"音频"}],currentTab:0,video_list:[{poster:"../../static/video_poster1.jpg",avatar:"../../static/video_img.png",title:"冬季水嫩肌肤养成法",look:"1.2w",video:"https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"},{poster:"../../static/video_poster2.jpg",avatar:"../../static/video_img.png",title:"问题性肌肤全解分析—说说色斑那点事",look:"10w",video:"https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"},{poster:"../../static/video_poster3.jpg",avatar:"../../static/video_img.png",title:"问题性肌肤全解分析—痘痘肌",look:"10w",video:"https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"}],auto_list:[{id:1,title:"如何快速找到精准粉丝",look:"1.0w",src:"http://other.web.nf01.sycdn.kuwo.cn/resource/n2/23/43/994306111.mp3",duration:229},{id:2,title:"如何快速找到精准粉丝",look:"1.2w",src:"http://mouyizhan.com/4.mp3",duration:205},{id:3,title:"如何快速找到精准粉丝",look:"1.0w",src:"http://mouyizhan.com/5.mp3",duration:228}]}},components:{commonVideo:a.default},methods:{navbarTap:function(t){this.currentTab=t},toAudioDetail:function(i){t.navigateTo({url:"/pages/audio/audio?id="+i.id+"&title="+i.title+"&look="+i.look+"&src="+i.src+"&duration="+i.duration})}},onLoad:function(i){var e=this;t.request({url:e.$api+"default/video-list",method:"GET",success:function(t){console.log(t)},fail:function(){}})}};i.default=n}).call(this,e("6e42")["default"])}},[["63de","common/runtime","common/vendor"]]]);