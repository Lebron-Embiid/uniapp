(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0d70":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"index_box"},[t._m(0),i("view",{staticClass:"search_fixed"},[i("view",{staticClass:"logo_box"},[i("image",{attrs:{src:t.logo,mode:"widthFix"}})]),i("form",{staticClass:"form_box",attrs:{eventid:"371817f1-0"},on:{click:t.toSearch}},[i("input",{attrs:{type:"text",disabled:"",placeholder:"请输入您要搜索的关键词",value:""}}),i("button",[i("image",{attrs:{src:"../../static/search.png",mode:""}})])],1)],1),i("view",{staticClass:"uni-padding-wrap mt130"},[i("view",{staticClass:"index_swiper"},[i("commonSwiper",{attrs:{swiperList:t.swiperList,mpcomid:"371817f1-0"}})],1)]),i("view",{staticClass:"index_nav"},t._l(t.navList,function(e,s){return i("view",{key:s,staticClass:"nav_item",attrs:{eventid:"371817f1-1-"+s},on:{click:function(i){t.toDetail(s,e.url)}}},[i("image",{attrs:{src:e.src,mode:"widthFix"}}),i("text",[t._v(t._s(e.text))])])})),i("view",{staticClass:"hot_product uni-padding-wrap uni-common-mt"},[t._m(1),i("view",{staticClass:"scroll_box"},[i("scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true"}},t._l(t.hot_products,function(e,s){return i("view",{key:s,staticClass:"scroll-view-item_H",attrs:{id:e.ref,eventid:"371817f1-2-"+s},on:{click:function(i){t.toProductDetail(e.id)}}},[i("div",{staticClass:"p_img"},[i("image",{attrs:{src:e.src,mode:"widthFix"}})]),i("view",{staticClass:"product_content"},[i("view",{staticClass:"product_title"},[t._v(t._s(e.title))]),i("view",{staticClass:"product_info"},[t._v(t._s(e.info))]),i("view",{staticClass:"product_price"},[t._v("￥"+t._s(e.price)),i("text",[t._v("规格："+t._s(e.format))])])])])}))],1)]),i("view",{staticClass:"featured_material uni-padding-wrap uni-common-mt"},[t._m(2),i("view",{staticClass:"scroll_box"},[i("scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":"true"}},t._l(t.mater_products,function(e,s){return i("view",{key:s,staticClass:"mater_item",attrs:{id:e.ref,eventid:"371817f1-3-"+s},on:{click:function(i){t.toMaterDetail(e.id)}}},[i("view",{staticClass:"m_img"},[i("image",{attrs:{src:e.src,mode:"widthFix"}})])])}))],1)]),i("view",{staticClass:"hot_news"},[t._m(3),i("view",{staticClass:"news_box"},[i("commonNews",{attrs:{news_list:t.news_list,mpcomid:"371817f1-1"}})],1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"status_bar"},[i("view",{staticClass:"top_view"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-title uni-common-mt"},[i("text",[t._v("热销产品")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-title uni-common-mt"},[i("text",[t._v("精选素材")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"uni-title"},[i("text",[t._v("热门资讯")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},"1acc":function(t,e,i){"use strict";i("283e");var s=c(i("b0ce")),a=c(i("e94d"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},6773:function(t,e,i){},"822e":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(i("e7e2")),a=c(i("55e4"));function c(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{logo:"../../static/logo.png",swiperList:["../../static/index_banner.jpg","../../static/index_banner.jpg","../../static/index_banner.jpg"],navList:[{url:"/pages/train/train",src:"../../static/nav_icon1.png",text:"培训"},{url:"/pages/news/news",src:"../../static/nav_icon2.png",text:"资讯"},{url:"/pages/science/science",src:"../../static/nav_icon3.png",text:"呦蓝百科"},{url:"/pages/about/about",src:"../../static/nav_icon4.png",text:"关于我们"}],hot_products:[{id:1,ref:"demo1",src:"../../static/product_img1.jpg",title:"艾璐卡-山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳山羊奶悦颜清透洁乳",info:"清洁皮肤，长效保湿滋润",price:98,format:"3.5g"},{id:2,ref:"demo2",src:"../../static/product_img2.jpg",title:"艾璐卡-艾璐卡水漾唇膏",info:"长久保湿·丝滑质感",price:118,format:"3.5g"},{id:3,ref:"demo2",src:"../../static/product_img2.jpg",title:"艾璐卡-艾璐卡水漾唇膏",info:"长久保湿·丝滑质感",price:118,format:"3.5g"}],mater_products:[{id:1,ref:"mater1",src:"../../static/chosen_img1.jpg"},{id:2,ref:"mater2",src:"../../static/chosen_img2.jpg"},{id:3,ref:"mater3",src:"../../static/chosen_img1.jpg"}],news_list:[{id:1,title:"艾璐卡“初见巴士”亮相法国巴黎街头，唤醒初见之美！",info:"法国时间1月20日，由艾璐卡eloo Doca...",look:"1.1w",date:"04.28",src:"../../static/hot_img1.jpg"},{id:2,title:"武钢体育馆·呦蓝YOULAN周年庆典完美落幕",info:"2017年10月10日，武汉武钢体育馆内...",look:"1.1w",date:"04.28",src:"../../static/hot_img2.jpg"}]}},components:{commonSwiper:s.default,commonNews:a.default},methods:{toDetail:function(e,i){0==e?t.reLaunch({url:i}):t.navigateTo({url:i})},toProductDetail:function(e){t.navigateTo({url:"/pages/store_detail/store_detail?id="+e})},toMaterDetail:function(t){},toSearch:function(e){t.navigateTo({url:"/pages/search/search"})}}};e.default=n}).call(this,i("6e42")["default"])},d336:function(t,e,i){"use strict";i.r(e);var s=i("822e"),a=i.n(s);for(var c in s)"default"!==c&&function(t){i.d(e,t,function(){return s[t]})}(c);e["default"]=a.a},d94c:function(t,e,i){"use strict";var s=i("6773"),a=i.n(s);a.a},e94d:function(t,e,i){"use strict";i.r(e);var s=i("0d70"),a=i("d336");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("d94c");var n=i("2877"),r=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,"9dae2b44",null);e["default"]=r.exports}},[["1acc","common/runtime","common/vendor"]]]);