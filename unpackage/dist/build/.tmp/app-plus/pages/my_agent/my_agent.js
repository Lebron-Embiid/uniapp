(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_agent/my_agent"],{"1b99":function(n,t,a){"use strict";var e=a("395a"),o=a.n(e);o.a},"2aff":function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return a.e("components/common-agent").then(a.bind(null,"5d2c"))},o={data:function(){return{navbar:[{name:"一级代理",num:8},{name:"二级代理",num:5}],currentTab:0,agentList1:[{id:1,avatar:"../../static/avatar1.png",name:"小黄鸭",time:"2019-03-26",type:"天使代理"}],agentList2:[{id:2,avatar:"../../static/avatar2.png",name:"小黄鸭",time:"2019-03-26",type:"天使代理"}]}},components:{commonAgent:e},methods:{navbarTap:function(n){console.log(n),this.currentTab=n}},onLoad:function(t){var a=this;n.request({url:a.$api+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){n.data.code},fail:function(){n.showToast({title:res.data.msg,icon:"none"})}})}};t.default=o}).call(this,a("6e42")["default"])},"395a":function(n,t,a){},b10f:function(n,t,a){"use strict";a.r(t);var e=a("2aff"),o=a.n(e);for(var c in e)"default"!==c&&function(n){a.d(t,n,function(){return e[n]})}(c);t["default"]=o.a},baf1:function(n,t,a){"use strict";a.r(t);var e=a("e514"),o=a("b10f");for(var c in o)"default"!==c&&function(n){a.d(t,n,function(){return o[n]})}(c);a("1b99");var u=a("2877"),r=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,"295dcf8f",null);t["default"]=r.exports},e514:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})}},[["9fab","common/runtime","common/vendor"]]]);