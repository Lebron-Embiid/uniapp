(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"0a40":function(e,t,n){"use strict";var a=n("a281"),o=n.n(a);o.a},a281:function(e,t,n){},b9cc:function(e,t,n){"use strict";n.r(t);var a=n("dfe0"),o=n("ef0c");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("0a40");var s=n("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"25507f2b",null);t["default"]=c.exports},dfe0:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},ef0c:function(e,t,n){"use strict";n.r(t);var a=n("f801"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},f801:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{message:"",username:"",phone:""}},onLoad:function(){var t=this;t.$access_token=e.getStorageSync("access_token"),t.$level=e.getStorageSync("level")},methods:{getMessage:function(e){this.message=e.detail.value},getUsername:function(e){this.username=e.detail.value},getPhone:function(e){this.phone=e.detail.value},formSubmit:function(t){var n=this;return""==n.message?(e.showToast({title:"请填写问题！",icon:"none",duration:1500}),!1):""==n.username?(e.showToast({title:"请填写称呼！",icon:"none",duration:1500}),!1):""==n.phone?(e.showToast({title:"请填写联系方式！",icon:"none",duration:1500}),!1):void e.request({url:n.$api+"default/article-message&access_token="+n.$access_token,data:{cat_id:2,name:n.username,content:n.message,mobile:n.phone},dataType:"json",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.showToast({title:t.data.msg,icon:"none",duration:1500}),setTimeout(function(){e.navigateBack({delta:1})},1500)},fail:function(t){e.showToast({title:res.data.msg,icon:"none",duration:1500})}})}}};t.default=n}).call(this,n("6e42")["default"])}},[["c4e4","common/runtime","common/vendor"]]]);