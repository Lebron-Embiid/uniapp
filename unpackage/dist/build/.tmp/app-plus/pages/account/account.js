(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/account"],{"0cb9":function(t,e,a){"use strict";var i=a("e55c"),s=a.n(i);s.a},"2f35":function(t,e,a){"use strict";a.r(e);var i=a("98bf"),s=a("364c");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);a("0cb9");var n=a("2877"),o=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,"0bb58623",null);e["default"]=o.exports},"364c":function(t,e,a){"use strict";a.r(e);var i=a("8d69"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"8d69":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{array:["在线支付","货到付款"],index:0,accountList:[{id:1,img:"../../static/order_img1.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:118},{id:2,img:"../../static/order_img2.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:138}],all:118}},methods:{toAddress:function(e){t.navigateTo({url:"/pages/address_list/address_list"})},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},toSubmit:function(e){var a=this;t.request({url:a.$api+"order/new-submit&access_token="+a.$access_token,method:"POST",data:{},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){},fail:function(){t.showToast({title:res.data.msg,icon:"none",duration:1500})}})}},onLoad:function(e){var a=this;t.request({url:a.$api+"order/pay-data&order_id=3&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){},fail:function(){t.showToast({title:res.data.msg,icon:"none",duration:1500})}})}};e.default=a}).call(this,a("6e42")["default"])},"98bf":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"account_box"},[a("view",{staticClass:"page_bg"}),a("view",{staticClass:"acc_item borbom notop"},[a("text",[t._v("请选择收货地址")]),a("view",{staticClass:"acc_right",attrs:{eventid:"bb42e632-0"},on:{click:t.toAddress}},[a("image",{attrs:{src:"../../static/next.png",mode:"widthFix"}})])]),t._m(0),a("view",{staticClass:"acc_content borbom"},t._l(t.accountList,function(e,i){return a("view",{key:i,staticClass:"content_item"},[a("view",{staticClass:"ac_left"},[a("image",{attrs:{src:e.img,mode:"widthFix"}})]),a("view",{staticClass:"ac_right"},[a("view",{staticClass:"ac_title"},[t._v(t._s(e.title))]),a("view",{staticClass:"ac_info"},[t._v(t._s(e.info))]),a("view",{staticClass:"ac_type"},[a("text",[t._v("x"+t._s(e.num))]),a("text",[t._v("规格："+t._s(e.type))]),a("text",{staticClass:"ac_price"},[t._v("￥"+t._s(e.price))])])])])})),t._m(1),t._m(2),a("view",{staticClass:"fixed_account"},[a("view",{staticClass:"fa_left"},[t._v("总计：￥"+t._s(t.all))]),a("view",{staticClass:"fa_right",attrs:{eventid:"bb42e632-1"},on:{click:t.toSubmit}},[t._v("提交")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"acc_item borbom"},[a("text",[t._v("支付方式")]),a("view",{staticClass:"acc_right pr45"},[t._v("在线支付")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"acc_item borbom"},[a("text",[t._v("运费")]),a("view",{staticClass:"pr45"},[t._v("在线支付")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"acc_mess borbom"},[a("view",{staticClass:"txt"},[t._v("给买家留言")]),a("input",{attrs:{type:"text",placeholder:"请备注",value:""}})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},c22f:function(t,e,a){"use strict";a("283e");var i=c(a("b0ce")),s=c(a("2f35"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},e55c:function(t,e,a){}},[["c22f","common/runtime","common/vendor"]]]);