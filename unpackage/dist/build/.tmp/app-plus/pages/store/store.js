(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/store"],{2436:function(t,e,a){"use strict";a.r(e);var i=a("adb8"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"2d1f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"store_box"},[a("view",{staticClass:"index_swiper"},[a("view",{staticClass:"search_top",attrs:{eventid:"7a9930cf-0"},on:{click:t.toSearch}},[a("text",[t._v("请输入您要搜索的关键词")]),a("image",{attrs:{src:"../../static/search.png",mode:"widthFix"}})]),a("commonSwiper",{attrs:{swiperList:t.swiperList,mpcomid:"7a9930cf-0"}})],1),a("view",{staticClass:"store_content"},[a("view",{staticClass:"store_nav"},t._l(t.navbar,function(e,i){return a("view",{key:i,class:[t.currentTab==i?"active":""],attrs:{eventid:"7a9930cf-1-"+i},on:{click:function(e){t.navbarTap(i)}}},[t._v(t._s(e.name))])})),a("view",{staticClass:"store_list"},[a("commonStore",{attrs:{storeList:t.storeList,mpcomid:"7a9930cf-1"}})],1)])])},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"3b0e":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("e7e2")),s=n(a("4259"));function n(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{swiperList:["../../static/store_banner.jpg","../../static/store_banner.jpg","../../static/store_banner.jpg"],scrollLeft:0,tabIndex:0,navbar:[],currentTab:0,storeList:[]}},components:{commonSwiper:i.default,commonStore:s.default},methods:{navbarTap:function(e){var a=this;a.currentTab=e,0==a.currentTab?t.request({url:a.$api+"default/goods-list&cat_id=1&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=[],i=t.data.data;for(var s in i.list)e.push({id:i.list[s].id,src:i.list[s].pic_url,title:i.list[s].name,price:i.list[s].price,type:i.list[s].weight});a.storeList=e},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}}):1==a.currentTab?t.request({url:a.$api+"default/goods-list&cat_id=2&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=[],i=t.data.data;for(var s in i.list)e.push({id:i.list[s].id,src:i.list[s].pic_url,title:i.list[s].name,price:i.list[s].price,type:i.list[s].weight});a.storeList=e},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}}):t.request({url:a.$api+"default/goods-list&cat_id=3&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=[],i=t.data.data;for(var s in i.list)e.push({id:i.list[s].id,src:i.list[s].pic_url,title:i.list[s].name,price:i.list[s].price,type:i.list[s].weight});a.storeList=e},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})},toSearch:function(e){t.navigateTo({url:"/pages/search/search"})}},onLoad:function(e){var a=this;t.request({url:a.$api+"default/shop&access_token="+a.$access_token,dataType:"json",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=[],i=[],s=[],n=t.data.data;for(var r in n.cat)e.push({name:n.cat[r].name});for(var c in n.list)s.push({id:n.list[c].id,src:n.list[c].pic_url,title:n.list[c].name,price:n.list[c].price,type:n.list[c].weight});for(var o in n.shop_banner)i.push(n.shop_banner[o].pic_url);a.navbar=e,a.storeList=s,a.swiperList=i},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})}};e.default=r}).call(this,a("6e42")["default"])},"3d54":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"common_store"},t._l(t.storeList,function(e,i){return a("view",{key:i,staticClass:"store_item",attrs:{eventid:"534133ff-0-"+i},on:{click:function(a){t.toStoreDetail(e)}}},[a("image",{attrs:{src:e.src,mode:"widthFix"}}),a("view",{staticClass:"si_title"},[t._v(t._s(e.title))]),a("view",{staticClass:"si_info"},[t._v(t._s(e.info))]),a("view",{staticClass:"si_price"},[t._v("￥"+t._s(e.price)),a("text",[t._v("规格："+t._s(e.type))])])])}))},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},4259:function(t,e,a){"use strict";a.r(e);var i=a("3d54"),s=a("2436");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("a343");var r=a("2877"),c=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"21a3ee7e",null);e["default"]=c.exports},"4bfa":function(t,e,a){},a116:function(t,e,a){"use strict";var i=a("4bfa"),s=a.n(i);s.a},a151:function(t,e,a){},a343:function(t,e,a){"use strict";var i=a("a151"),s=a.n(i);s.a},a9a4:function(t,e,a){"use strict";a("283e");var i=n(a("b0ce")),s=n(a("cbc8"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},adb8:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{storeList:Array},methods:{toStoreDetail:function(e){t.navigateTo({url:"/pages/store_detail/store_detail?id="+e.id})}}};e.default=a}).call(this,a("6e42")["default"])},cbc8:function(t,e,a){"use strict";a.r(e);var i=a("2d1f"),s=a("fa2c");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("a116");var r=a("2877"),c=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"7b6fbcb1",null);e["default"]=c.exports},fa2c:function(t,e,a){"use strict";a.r(e);var i=a("3b0e"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a}},[["a9a4","common/runtime","common/vendor"]]]);