(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{"2a42":function(e,t,n){"use strict";n.r(t);var a=n("d6ef"),o=n("c39d");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("8428");var s=n("2877"),u=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"772730cc",null);t["default"]=u.exports},"670f":function(e,t,n){"use strict";n("283e");var a=i(n("b0ce")),o=i(n("2a42"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(o.default))},8428:function(e,t,n){"use strict";var a=n("e25b"),o=n.n(a);o.a},c39d:function(e,t,n){"use strict";n.r(t);var a=n("e74c"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},d6ef:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"message_box"},[n("view",{staticClass:"page_bg"}),n("view",{staticClass:"m_till"},[e._v("请您把问题留下，我们为您提供专业化解的解决方案！")]),n("form",{attrs:{eventid:"228efe9b-3"},on:{submit:e.formSubmit}},[n("view",{staticClass:"section"},[n("textarea",{attrs:{value:e.problem,name:"problem",maxlength:"-1",placeholder:"请把您的问题留给我们，我们会提供让您满意的答复~~",eventid:"228efe9b-0"},on:{input:e.getProblem}})]),n("view",{staticClass:"section"},[n("input",{attrs:{type:"text",name:"username",value:e.username,placeholder:"称呼",eventid:"228efe9b-1"},on:{input:e.getUsername}})]),n("view",{staticClass:"section"},[n("input",{attrs:{type:"text",name:"phone",maxlength:"11",value:e.phone,placeholder:"联系方式",eventid:"228efe9b-2"},on:{input:e.getPhone}})]),n("view",{staticClass:"btn-area"},[n("button",{attrs:{formType:"submit"}},[e._v("提交留言")])],1)])],1)},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},e25b:function(e,t,n){},e74c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{problem:"",username:"",phone:""}},methods:{getProblem:function(e){this.problem=e.detail.value},getUsername:function(e){this.username=e.detail.value},getPhone:function(e){this.phone=e.detail.value},formSubmit:function(t){var n=this;return""==n.problem?(e.showToast({title:"请填写问题！",icon:"none",duration:1500}),!1):""==n.username?(e.showToast({title:"请填写称呼！",icon:"none",duration:1500}),!1):""==n.phone?(e.showToast({title:"请填写联系方式！",icon:"none",duration:1500}),!1):void e.request({url:n.$api+"default/article-message&access_token="+n.$access_token,data:{cat_id:1,name:n.username,content:n.problem,mobile:n.phone},dataType:"json",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.showToast({title:t.data.msg,icon:"none",duration:1500}),setTimeout(function(){n.username="",n.problem="",n.phone=""},1500)},fail:function(t){e.showToast({title:res.data.msg,icon:"none",duration:1500})}})}}};t.default=n}).call(this,n("6e42")["default"])}},[["670f","common/runtime","common/vendor"]]]);