(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-store"],{"0c86":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.common_store[data-v-35dfc1e8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:%?30?%}.common_store .store_item[data-v-35dfc1e8]{width:50%;padding:%?10?% %?40?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #e5e5e5}.common_store .store_item[data-v-35dfc1e8]:nth-of-type(2n-1){border-right:%?1?% solid #e5e5e5}.common_store .store_item uni-image[data-v-35dfc1e8]{display:block;width:%?250?%;height:%?230?%!important;margin:%?10?% auto %?30?%}.common_store .store_item .si_title[data-v-35dfc1e8]{color:#160c11;font-size:%?22?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.common_store .store_item .si_info[data-v-35dfc1e8]{color:#7d7d7d;font-size:%?20?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin:%?5?% 0 %?10?%}.common_store .store_item .si_price[data-v-35dfc1e8]{color:#00001f;font-size:%?24?%}.common_store .store_item .si_price uni-text[data-v-35dfc1e8]{float:right;color:#4d4d4d;font-size:%?18?%}',""])},"184e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"common_store"},t._l(t.storeList,function(e,n){return i("v-uni-view",{key:n,staticClass:"store_item",on:{click:function(i){i=t.$handleEvent(i),t.toStoreDetail(e)}}},[i("v-uni-image",{attrs:{src:e.src,mode:"widthFix"}}),i("v-uni-view",{staticClass:"si_title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"si_info"},[t._v(t._s(e.info))]),i("v-uni-view",{staticClass:"si_price"},[t._v("￥"+t._s(e.price)),i("v-uni-text",[t._v("规格："+t._s(e.type))])],1)],1)}),1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"1cbc":function(t,e,i){"use strict";var n=i("3726"),r=i.n(n);r.a},2436:function(t,e,i){"use strict";i.r(e);var n=i("e656"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=r.a},2826:function(t,e,i){"use strict";var n=i("4094"),r=i.n(n);r.a},3726:function(t,e,i){var n=i("47f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("88d76b32",n,!0,{sourceMap:!1,shadowMode:!1})},"3baa":function(t,e,i){"use strict";i.r(e);var n=i("bf64"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=r.a},4094:function(t,e,i){var n=i("0c86");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("80b8f80a",n,!0,{sourceMap:!1,shadowMode:!1})},4259:function(t,e,i){"use strict";i.r(e);var n=i("184e"),r=i("2436");for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);i("2826");var a=i("2877"),o=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"35dfc1e8",null);e["default"]=o.exports},"47f7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-327d17d3]{height:%?400?%}.swiper .swiper-item uni-image[data-v-327d17d3]{display:block;width:100%}',""])},"8c7f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"common-swiper"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,circular:"true",autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.swiperList,function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})],1)],1)}),1)],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},9487:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("e7e2")),r=s(i("4259"));function s(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{swiperList:["/static/store_banner.jpg","/static/store_banner.jpg","/static/store_banner.jpg"],scrollLeft:0,tabIndex:0,navbar:[{name:"艾璐卡"},{name:"纽西之谜"}],currentTab:0,storeList1:[{id:1,src:"/static/store_img1.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:2,src:"/static/store_img2.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:3,src:"/static/store_img3.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:4,src:"/static/store_img4.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"}],storeList2:[{id:5,src:"/static/store_img5.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:6,src:"/static/store_img6.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:7,src:"/static/store_img7.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"},{id:8,src:"/static/store_img8.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,type:"3.5g"}]}},components:{commonSwiper:n.default,commonStore:r.default},methods:{navbarTap:function(t){console.log(t),this.currentTab=t},toSearch:function(t){uni.navigateTo({url:"/pages/search/search"})}}};e.default=a},9803:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"store_box"},[i("v-uni-view",{staticClass:"index_swiper"},[i("v-uni-view",{staticClass:"search_top",on:{click:function(e){e=t.$handleEvent(e),t.toSearch(e)}}},[i("v-uni-text",[t._v("请输入您要搜索的关键词")]),i("v-uni-image",{attrs:{src:"/static/search.png",mode:"widthFix"}})],1),i("commonSwiper",{attrs:{swiperList:t.swiperList}})],1),i("v-uni-view",{staticClass:"store_content"},[i("v-uni-view",{staticClass:"store_nav"},t._l(t.navbar,function(e,n){return i("v-uni-view",{key:n,class:[t.currentTab==n?"active":""],on:{click:function(e){e=t.$handleEvent(e),t.navbarTap(n)}}},[t._v(t._s(e.name))])}),1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"store_list"},[i("commonStore",{attrs:{storeList:t.storeList1}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"store_list"},[i("commonStore",{attrs:{storeList:t.storeList2}})],1)],1)],1)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},ab23:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index_swiper[data-v-937a8530]{position:relative}.index_swiper .search_top[data-v-937a8530]{position:absolute;z-index:5;width:90%;left:5%;top:%?30?%;background:#fff;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:%?5?%}.index_swiper .search_top uni-text[data-v-937a8530]{display:block;color:#9d9d9d;font-size:%?22?%}.index_swiper .search_top uni-image[data-v-937a8530]{display:block;width:%?31?%;height:%?31?%!important}.store_content[data-v-937a8530]{overflow:hidden;padding:0 %?20?%}.store_content .store_nav[data-v-937a8530]{color:#4e4e4e;font-size:%?28?%;text-align:center;margin-bottom:%?40?%}.store_content .store_nav uni-view[data-v-937a8530]{padding:%?20?% %?10?%;border-bottom:%?1?% solid rgba(0,0,0,0);display:inline-block;margin-left:%?20?%}.store_content .store_nav uni-view.active[data-v-937a8530]{color:#000027;border-bottom:%?1?% solid #000}',""])},af0a:function(t,e,i){var n=i("ab23");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0565aeab",n,!0,{sourceMap:!1,shadowMode:!1})},bf64:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800}},props:{swiperList:Array},methods:{}};e.default=n},c287:function(t,e,i){"use strict";var n=i("af0a"),r=i.n(n);r.a},cbc8:function(t,e,i){"use strict";i.r(e);var n=i("9803"),r=i("fa2c");for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);i("c287");var a=i("2877"),o=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"937a8530",null);e["default"]=o.exports},e656:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:{storeList:Array},methods:{toStoreDetail:function(t){uni.navigateTo({url:"/pages/store_detail/store_detail?id="+t.id})}}};e.default=n},e7e2:function(t,e,i){"use strict";i.r(e);var n=i("8c7f"),r=i("3baa");for(var s in r)"default"!==s&&function(t){i.d(e,t,function(){return r[t]})}(s);i("1cbc");var a=i("2877"),o=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"327d17d3",null);e["default"]=o.exports},fa2c:function(t,e,i){"use strict";i.r(e);var n=i("9487"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=r.a}}]);