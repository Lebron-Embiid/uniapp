(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_agent/my_agent"],{1071:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"my_agent_box"},[a("view",{staticClass:"page_bg"}),a("view",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"agent_list"},[a("commonAgent",{attrs:{agentList:t.agentList1,mpcomid:"fe9b69ea-0"}})],1),a("view",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"agent_list"},[a("commonAgent",{attrs:{agentList:t.agentList1,mpcomid:"fe9b69ea-1"}})],1)])},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"2fe5":function(t,e,a){"use strict";a.r(e);var n=a("dc06"),o=a("d903");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("75fe");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"ab17fc6e",null);e["default"]=i.exports},"75fe":function(t,e,a){"use strict";var n=a("7be8"),o=a.n(n);o.a},"7be8":function(t,e,a){},a7ad:function(t,e,a){"use strict";var n=a("cee3"),o=a.n(n);o.a},aea4:function(t,e,a){"use strict";a.r(e);var n=a("1071"),o=a("f208");for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);a("a7ad");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"1fcfb74a",null);e["default"]=i.exports},bb09:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("2fe5"));function o(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{page_one:1,page_one_count:1,page_tow:1,page_tow_count:1,navbar:[{name:"一级代理",num:0},{name:"二级代理",num:5}],currentTab:0,agentList1:[],agentList2:[]}},components:{commonAgent:n.default},methods:{navbarTap:function(e){this.currentTab=e;var a=this;console.log(a.currentTab),t.request({url:a.$api+"user/agent-list&access_token="+a.$access_token,method:"GET",data:{level_id:a.currentTab},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){a.agentList1=t.data.data.list,0==a.currentTab?a.page_one_count=t.data.data.data.page_count:a.page_tow_count=t.data.data.data.page_count,console.log(1111),console.log(a.agentList1)},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level"),setTimeout(function(){t.request({url:a.$api+"user/agent-list&access_token="+a.$access_token,method:"GET",data:{level_id:0},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),a.agentList1=t.data.data.data.list,a.page_one_count=t.data.data.data.page_count,a.navbar[0].num=t.data.data.one_count,a.navbar[1].num=t.data.data.tow_count,console.log(1111),console.log(a.agentList1),console.log(a.page_one_count)},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})},1e3),t.startPullDownRefresh()},onPullDownRefresh:function(){var e=this;e.$access_token=t.getStorageSync("access_token"),e.$level=t.getStorageSync("level"),e.page_one=1,e.page_one_count=1,e.page_tow=1,e.page_tow_count=1,setTimeout(function(){t.request({url:e.$api+"user/agent-list&access_token="+e.$access_token,method:"GET",data:{level_id:0},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),e.agentList1=t.data.data.data.list,e.page_one_count=t.data.data.data.page_count,e.navbar[0].num=t.data.data.one_count,e.navbar[1].num=t.data.data.tow_count,console.log(1111),console.log(e.agentList1),console.log(e.page_one_count)},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}}),t.stopPullDownRefresh()},1e3)},onReachBottom:function(){var e=this;if(t.showLoading({title:"加载中"}),console.log(e.page_one),0==e.currentTab){if(e.page_one==e.page_one_count)return t.showToast({title:"没有更多数据了",icon:"none"}),!1;e.page_one=parseInt(e.page_one)+parseInt(1);var a=e.page_one}else{if(e.page_tow==e.page_tow_count)return t.showToast({title:"没有更多数据了",icon:"none"}),!1;e.page_tow=parseInt(e.page_tow)+parseInt(1);a=e.page_tow}t.request({url:e.$api+"user/agent-list&access_token="+e.$access_token,method:"GET",data:{page:a,level_id:e.currentTab},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var n=a.data.data.data.list;e.agentList1=e.agentList1.concat(n),t.hideLoading()},fail:function(e){t.showToast({icon:"none",title:e.data.msg,duration:2e3})}})}};e.default=s}).call(this,a("6e42")["default"])},bf3c:function(t,e,a){"use strict";a("1a7f");var n=s(a("b0ce")),o=s(a("aea4"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},cee3:function(t,e,a){},d903:function(t,e,a){"use strict";a.r(e);var n=a("e5dc"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},dc06:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"agent_box"},t._l(t.agentList,function(e,n){return a("view",{key:n,staticClass:"agent_item"},[a("view",{staticClass:"ai_left"},[a("view",{staticClass:"ai_img"},[a("image",{attrs:{src:e.avatar,mode:"widthFix"}}),a("span",{class:[""==e.user_team||null==e.user_team?"":"active"]},[t._v(t._s(e.user_team))])]),a("view",{staticClass:"ai_info"},[a("text",[t._v(t._s(e.nickname))]),a("view",[t._v(t._s(e.username))])])]),a("view",{staticClass:"ai_right"},[a("view",{staticClass:"ar_time"},[t._v("加入时间："+t._s(e.addtime))]),a("view",{staticClass:"ar_type",staticStyle:{color:"#FF4544"}},[a("text",[t._v("A"+t._s(e.level))]),a("text",[t._v("N"+t._s(e.west))])])])])}))},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},e5dc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},props:{agentList:Array}};e.default=n},f208:function(t,e,a){"use strict";a.r(e);var n=a("bb09"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["bf3c","common/runtime","common/vendor"]]]);