(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/person/person"],{"20c1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{code:"",id:"",avatar_url:"",money:0,nickname:"",orders:[],status_0:0,status_1:0,status_2:0,status_3:0,mobile:""}},methods:{toSettings:function(t){e.navigateTo({url:"/pages/complete_mater/complete_mater"})},logOut:function(){var t=this;t.$access_token=e.setStorageSync("access_token",""),t.$level=e.setStorageSync("level",""),e.removeStorageSync("access_token"),e.removeStorageSync("level"),e.clearStorageSync(),e.showToast({title:"退出成功",icon:"none"}),setTimeout(function(){e.reLaunch({url:"/pages/login/login"})},1500)}},onShow:function(){var t=this;if(t.$user_name=e.getStorageSync("user_name"),""==t.$user_name)return e.showToast({title:"请完善代理商资料！",icon:"none",duration:2e3}),setTimeout(function(){e.navigateTo({url:"/pages/complete_mater/complete_mater"})},2e3),!1},onLoad:function(t){var n=this;n.$access_token=e.getStorageSync("access_token"),n.$level=e.getStorageSync("level"),e.request({url:n.$api+"user/user-info&access_token="+n.$access_token,dataType:"json",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var o=t.data.data;n.code=o.user_info.code,n.id=o.user_info.id,n.avatar_url=o.user_info.avatar_url,n.money=o.user_info.money,n.nickname=o.user_info.nickname,n.orders=o.orders,n.status_0=o.order_count.status_0,n.status_1=o.order_count.status_1,n.status_2=o.order_count.status_2,n.status_3=o.order_count.status_3,n.mobile=o.user_info.mobile;var a=o.user_info.brand_id;e.setStorageSync("level",a),n.$level=e.getStorageSync("level"),console.log(n.$level," at pages\\person\\person.vue:163")},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}),e.startPullDownRefresh()},onPullDownRefresh:function(){var t=this;setTimeout(function(){e.request({url:t.$api+"user/user-info&access_token="+t.$access_token,dataType:"json",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){var o=n.data.data;t.code=o.user_info.code,t.id=o.user_info.id,t.avatar_url=o.user_info.avatar_url,t.money=o.user_info.money,t.nickname=o.user_info.nickname,t.orders=o.orders,t.status_0=o.order_count.status_0,t.status_1=o.order_count.status_1,t.status_2=o.order_count.status_2,t.status_3=o.order_count.status_3;var a=o.user_info.brand_id;e.setStorageSync("level",a),t.$level=e.getStorageSync("level"),console.log(t.$level," at pages\\person\\person.vue:199")},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}),e.stopPullDownRefresh()},1e3)}};t.default=n}).call(this,n("6e42")["default"])},"235e":function(e,t,n){"use strict";n.r(t);var o=n("a186"),a=n("d1ae");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("715e");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"715e":function(e,t,n){"use strict";var o=n("fe8b"),a=n.n(o);a.a},a186:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},d1ae:function(e,t,n){"use strict";n.r(t);var o=n("20c1"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=a.a},fe8b:function(e,t,n){}},[["8f0a","common/runtime","common/vendor"]]]);