(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/account"],{"160a":function(t,e,a){"use strict";a.r(e);var i=a("f9c8"),s=a("8be6");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("9d9a");var o=a("2877"),c=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"32cbad8b",null);e["default"]=c.exports},"3a11":function(t,e,a){},"8be6":function(t,e,a){"use strict";a.r(e);var i=a("9bd3"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"9bd3":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{address:{id:"",name:"",mobile:"",province:"",city:"",district:"",detail:"",is_default:"",len:0},content:"",cat_list:[],array:["微信支付","支付宝支付"],index:0,express_price:0,accountList:[{id:1,img:"../../static/order_img1.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:118},{id:2,img:"../../static/order_img2.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:138}],all:118,level_price:0,total_price:0,mch_list:[],payment:0,pay_type:"WECHAT_PAY"}},onBackPress:function(){t.reLaunch({url:"/pages/store/store"})},methods:{toAddress:function(){console.log(JSON.stringify(this.mch_list)),t.navigateTo({url:"/pages/address_list/address_list?mch_list="+JSON.stringify(this.mch_list)})},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value,0==this.index?(this.payment=0,this.pay_type="WECHAT_PAY"):1==this.index&&(this.payment=1,this.pay_type="ALIPAY"),console.log(this.index)},getMess:function(t){this.content=t.detail.value},toSubmit:function(e){var a=this;t.showLoading({title:"加载中",mask:!0}),console.log(a.mch_list);for(var i=0;i<a.mch_list.length;i++)a.mch_list[i].show=!1,a.mch_list[i].show_length=0,a.mch_list[i].offline=0,a.mch_list[i].content=a.content;if(console.log(a.mch_list),a.all>1e4)return t.showToast({title:"联系平台下单",icon:"none"}),!1;t.request({url:a.$api+"order/new-submit&access_token="+a.$access_token,method:"POST",data:{payment:a.payment,use_integral:1,formId:void 0,mch_list:JSON.stringify(a.mch_list)},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(console.log(e.data.code),1==e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:1500}),!1;t.showToast({title:"提交成功",icon:"none",duration:1500});var i=e.data.data.order_id;if(a.all<1e4)if(2==a.payment)t.request({url:a.$api+"order/pay-data&access_token="+a.$access_token,method:"GET",data:{order_id:e.data.data.order_id,pay_type:a.pay_type,parent_user_id:0,condition:2,cat_list:a.cat_list},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data;t.showToast({title:e.data.msg,icon:"none",duration:1500}),0==e.data.code?t.navigateTo({url:"/pages/my_order/my_order?id=1"}):t.navigateTo({url:"/pages/my_order/my_order?id=0"})}});else{if(0==a.payment)var s="wxpay",n="http://app.youlan-china.com/wxpayv3/index.php";else s="alipay",n="http://app.youlan-china.com/alipayrsa2/index.php";t.request({url:n,method:"GET",dataType:"json",data:{price:e.data.data.total_price,goods_name:a.accountList[0].goods_name,order_no:e.data.data.order_no},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.hideLoading();var n=e.data;if(0==a.payment)var o=JSON.stringify({appid:n.appid,noncestr:n.noncestr,package:"Sign=WXPay",partnerid:n.partnerid,prepayid:n.prepayid,timestamp:n.timestamp,sign:n.sign});else o=n;t.getProvider({service:"payment",success:function(e){t.requestPayment({provider:s,orderInfo:o,success:function(e){t.request({url:a.$api+"order/wx-pay&order_id="+i+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:"支付成功！"}),t.navigateTo({url:"/pages/my_order/my_order?id=1"})},fail:function(e){t.navigateTo({url:"/pages/my_order/my_order?id=0"})}})},fail:function(e){console.log(JSON.stringify(e)),t.showToast({title:"支付失败",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)}})},fail:function(e){t.showToast({title:"支付失败",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)}})},fail:function(){t.hideLoading(),t.showToast({title:"支付失败！",icon:"none"})}})}else t.showToast({title:"金额大于一万请需通过其他渠道支付货款",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)},fail:function(){t.showToast({title:"提交失败",icon:"none",duration:1500})}})}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level");var i=JSON.parse(e.data);a.len=i.mch_list.length-1,console.log(a.len),a.cat_list=e.cat_list,a.address=i.address,a.accountList=i.mch_list[a.len].goods_list,console.log(a.accountList),a.mch_list=i.mch_list,a.express_price=i.mch_list[a.len].express_price,a.level_price=i.mch_list[a.len].level_price,a.total_price=i.mch_list[a.len].total_price,a.all=parseFloat(a.level_price)+parseFloat(a.express_price)}};e.default=a}).call(this,a("6e42")["default"])},"9d9a":function(t,e,a){"use strict";var i=a("3a11"),s=a.n(i);s.a},c8cd:function(t,e,a){"use strict";a("1a7f");var i=n(a("b0ce")),s=n(a("160a"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},f9c8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"account_box"},[a("view",{staticClass:"page_bg"}),null==t.address||""==t.address?a("view",{staticClass:"acc_item borbom notop",attrs:{eventid:"bb42e632-1"},on:{click:t.toAddress}},[a("text",[t._v("请选择收货地址")]),t._m(0)]):a("view",{staticClass:"acc_item borbom notop default",attrs:{eventid:"bb42e632-0"},on:{click:t.toAddress}},[a("view",{staticClass:"default_address"},[a("view",{staticClass:"oi_name"},[t._v(t._s(t.address.name)),a("text",[t._v(t._s(t.address.mobile))])]),a("view",{staticClass:"oi_address"},[a("image",{attrs:{src:"../../static/car_icon2.png",mode:"widthFix"}}),t._v(t._s(t.address.province)+t._s(t.address.city)+t._s(t.address.district)+t._s(t.address.detail))])]),t._m(1)]),a("view",{staticClass:"acc_item borbom"},[a("text",[t._v("支付方式")]),a("picker",{staticClass:"acc_right",attrs:{value:t.index,range:t.array,eventid:"bb42e632-2"},on:{change:t.bindPickerChange}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))]),a("image",{attrs:{src:"../../static/next.png",mode:"widthFix"}})])],1),a("view",{staticClass:"acc_content borbom"},t._l(t.accountList,function(e,i){return a("view",{key:i,staticClass:"content_item"},[a("view",{staticClass:"ac_left"},[a("image",{attrs:{src:e.goods_pic,mode:"widthFix"}})]),a("view",{staticClass:"ac_right"},[a("view",{staticClass:"ac_title"},[t._v(t._s(e.goods_name))]),a("view",{staticClass:"ac_info"},t._l(e.attr_list,function(e,i){return a("text",{key:i},[t._v(t._s(e.attr_group_name)+": "+t._s(e.attr_name))])})),a("view",{staticClass:"ac_type"},[a("text",[t._v("x"+t._s(e.num))]),a("text",{staticClass:"ac_price"},[t._v("￥"+t._s(e.level_price))])])])])})),a("view",{staticClass:"acc_item borbom"},[a("text",[t._v("运费")]),a("view",{staticClass:"pr45",staticStyle:{color:"#fa3930"}},[t._v("￥"+t._s(t.express_price))])]),a("view",{staticClass:"acc_mess borbom"},[a("view",{staticClass:"txt"},[t._v("给买家留言")]),a("input",{attrs:{type:"text",placeholder:"请备注",name:"content",value:t.content,eventid:"bb42e632-3"},on:{input:t.getMess}})]),a("view",{staticClass:"fixed_account"},[a("view",{staticClass:"fa_left"},[t._v("总计：￥"+t._s(t.all))]),a("view",{staticClass:"fa_right",attrs:{eventid:"bb42e632-4"},on:{"~tap":function(e){t.toSubmit(e)}}},[t._v("提交")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"acc_right"},[a("image",{attrs:{src:"../../static/next.png",mode:"widthFix"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"acc_right"},[a("image",{attrs:{src:"../../static/next.png",mode:"widthFix"}})])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})}},[["c8cd","common/runtime","common/vendor"]]]);