(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"0cf1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"feedback_box"},[a("form",{attrs:{eventid:"8a30ef2a-3"},on:{submit:e.formSubmit}},[a("view",{staticClass:"section"},[a("textarea",{attrs:{value:e.message,name:"message",maxlength:"-1",placeholder:"请把您的问题留给我们，我们会提供让您满意的答复~~",eventid:"8a30ef2a-0"},on:{input:e.getMessage}})]),a("view",{staticClass:"section"},[a("input",{attrs:{type:"text",name:"username",value:"",placeholder:"称呼",eventid:"8a30ef2a-1"},on:{input:e.getUsername}})]),a("view",{staticClass:"section"},[a("input",{attrs:{type:"text",name:"phone",value:"",placeholder:"联系方式",eventid:"8a30ef2a-2"},on:{input:e.getPhone}})]),a("view",{staticClass:"btn-area"},[a("button",{attrs:{formType:"submit"}},[e._v("提交留言")])],1)])],1)},s=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s})},"0e7a":function(e,t,a){"use strict";a.r(t);var n=a("0cf1"),s=a("703d");for(var u in s)"default"!==u&&function(e){a.d(t,e,function(){return s[e]})}(u);a("8041");var i=a("2877"),o=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"55d4d092",null);t["default"]=o.exports},"1a3c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{message:"",username:"",phone:""}},methods:{getMessage:function(e){this.message=e.detail.value},getUsername:function(e){this.username=e.detail.value},getPhone:function(e){this.phone=e.detail.value},formSubmit:function(e){console.log(this.message,this.username,this.phone)}}};t.default=n},"1e23":function(e,t,a){"use strict";a("d38b");var n=u(a("b0ce")),s=u(a("0e7a"));function u(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(s.default))},"6cd1":function(e,t,a){},"703d":function(e,t,a){"use strict";a.r(t);var n=a("1a3c"),s=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,function(){return n[e]})}(u);t["default"]=s.a},8041:function(e,t,a){"use strict";var n=a("6cd1"),s=a.n(n);s.a}},[["1e23","common/runtime","common/vendor"]]]);