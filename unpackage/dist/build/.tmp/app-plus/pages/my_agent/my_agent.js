(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_agent/my_agent"],{"17c9":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"agent_box"},t._l(t.agentList,function(a,n){return e("view",{key:n,staticClass:"agent_item"},[e("view",{staticClass:"ai_left"},[e("image",{attrs:{src:a.avatar,mode:"widthFix"}}),e("text",[t._v(t._s(a.name))])]),e("view",{staticClass:"ai_right"},[e("view",{staticClass:"ar_time"},[t._v("加入时间："+t._s(a.time))]),e("view",{staticClass:"ar_type"},[t._v(t._s(a.type))])])])}))},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},"1a4f":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{}},props:{agentList:Array}};a.default=n},"22ba":function(t,a,e){"use strict";var n=e("c157"),r=e.n(n);r.a},"35d7":function(t,a,e){"use strict";var n=e("f15a"),r=e.n(n);r.a},"5d2c":function(t,a,e){"use strict";e.r(a);var n=e("17c9"),r=e("d075");for(var i in r)"default"!==i&&function(t){e.d(a,t,function(){return r[t]})}(i);e("22ba");var s=e("2877"),u=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"265e0d7a",null);a["default"]=u.exports},"9f63":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"my_agent_box"},[e("view",{staticClass:"page_bg"}),e("view",{staticClass:"agent_nav"},t._l(t.navbar,function(a,n){return e("view",{key:n,class:[t.currentTab==n?"active":""],attrs:{eventid:"fe9b69ea-0-"+n},on:{click:function(a){t.navbarTap(n)}}},[t._v(t._s(a.name)+"("+t._s(a.num)+"人)")])})),e("view",{directives:[{name:"show",rawName:"v-show",value:0==t.currentTab,expression:"currentTab == 0"}],staticClass:"agent_list"},[e("commonAgent",{attrs:{agentList:t.agentList1,mpcomid:"fe9b69ea-0"}})],1),e("view",{directives:[{name:"show",rawName:"v-show",value:1==t.currentTab,expression:"currentTab == 1"}],staticClass:"agent_list"},[e("commonAgent",{attrs:{agentList:t.agentList2,mpcomid:"fe9b69ea-1"}})],1)])},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},"9fab":function(t,a,e){"use strict";e("283e");var n=i(e("b0ce")),r=i(e("baf1"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(r.default))},b10f:function(t,a,e){"use strict";e.r(a);var n=e("e408"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=r.a},baf1:function(t,a,e){"use strict";e.r(a);var n=e("9f63"),r=e("b10f");for(var i in r)"default"!==i&&function(t){e.d(a,t,function(){return r[t]})}(i);e("35d7");var s=e("2877"),u=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"6ccfb276",null);a["default"]=u.exports},c157:function(t,a,e){},d075:function(t,a,e){"use strict";e.r(a);var n=e("1a4f"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=r.a},e408:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(e("5d2c"));function r(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{navbar:[{name:"一级代理",num:8},{name:"二级代理",num:5}],currentTab:0,agentList1:[{id:1,avatar:"../../static/avatar1.png",name:"小黄鸭",time:"2019-03-26",type:"天使代理"}],agentList2:[{id:2,avatar:"../../static/avatar2.png",name:"小黄鸭",time:"2019-03-26",type:"天使代理"}]}},components:{commonAgent:n.default},methods:{navbarTap:function(t){console.log(t),this.currentTab=t}}};a.default=i},f15a:function(t,a,e){}},[["9fab","common/runtime","common/vendor"]]]);