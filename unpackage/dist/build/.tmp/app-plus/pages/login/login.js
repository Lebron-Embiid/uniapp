(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"34bb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"379f":function(e,t,a){"use strict";var n=a("d023"),o=a.n(n);o.a},a4d9:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={onLoad:function(){},data:function(){return{phoneno:"",password:""}},methods:{bindLogin:function(){var t=this;11==this.phoneno.length?e.request({url:t.$api+"passport/mobile-login",data:{contact_way:this.phoneno,password:this.password},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){if(1!=a.data.code)e.showToast({title:a.data.data.msg,icon:"none"});else{var n=a.data.data.access_token;console.log(a," at pages\\login\\login.vue:69"),0==a.data.data.is_wx?e.login({provider:"weixin",success:function(o){e.getUserInfo({provider:"weixin",success:function(o){e.request({url:t.$api+"user/agent-information/&access_token="+n,dataType:"json",method:"POST",data:{nickname:o.userInfo.nickName,wechat_open_id:o.userInfo.openId,avatar_url:o.userInfo.avatarUrl},header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){n.data.data;0==n.data.code?(t.is_wx=1,e.showToast({title:n.data.msg,icon:"none"}),e.clearStorageSync(),e.setStorageSync("user_name",a.data.data.user_name),e.setStorageSync("access_token",a.data.data.access_token),e.setStorageSync("level",a.data.data.level),e.showToast({title:a.data.data.msg,icon:"none",duration:1500}),t.$access_token=e.getStorageSync("access_token"),t.$level=e.getStorageSync("level"),t.$user_name=e.getStorageSync("user_name"),console.log(t.$access_token," at pages\\login\\login.vue:106"),console.log(t.$level," at pages\\login\\login.vue:107"),console.log(t.$user_name," at pages\\login\\login.vue:108"),""==a.data.data.user_name?setTimeout(function(){e.redirectTo({url:"/pages/complete_mater/complete_mater"})},1500):setTimeout(function(){e.reLaunch({url:"/pages/index/index"})},1500)):e.showToast({title:n.data.msg,icon:"none"})}})}})},fail:function(t){e.showToast({title:"授权登录失败："+t.errMsg,icon:"none",duration:1500})}}):(e.clearStorageSync(),e.setStorageSync("user_name",a.data.data.user_name),e.setStorageSync("access_token",a.data.data.access_token),e.setStorageSync("level",a.data.data.level),e.showToast({title:a.data.data.msg,icon:"none",duration:1500}),t.$access_token=e.getStorageSync("access_token"),t.$level=e.getStorageSync("level"),t.$user_name=e.getStorageSync("user_name"),console.log(t.$access_token," at pages\\login\\login.vue:151"),console.log(t.$level," at pages\\login\\login.vue:152"),console.log(t.$user_name," at pages\\login\\login.vue:153"),""==a.data.data.user_name?setTimeout(function(){e.redirectTo({url:"/pages/complete_mater/complete_mater"})},1500):setTimeout(function(){e.reLaunch({url:"/pages/index/index"})},1500))}},fail:function(){e.showToast({title:res.data.msg,icon:"none"})}}):e.showToast({icon:"none",title:"手机号不正确"})}}};t.default=a}).call(this,a("6e42")["default"])},d023:function(e,t,a){},d1f7:function(e,t,a){"use strict";a.r(t);var n=a("a4d9"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},d2bb:function(e,t,a){"use strict";a.r(t);var n=a("34bb"),o=a("d1f7");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("379f");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports}},[["b061","common/runtime","common/vendor"]]]);