(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/account"],{"160a":function(t,e,a){"use strict";a.r(e);var n=a("f9c8"),o=a("8be6");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("9d9a");var c=a("2877"),s=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"32cbad8b",null);e["default"]=s.exports},"3a11":function(t,e,a){},"744b":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{address:{id:"",name:"",mobile:"",province:"",city:"",district:"",detail:"",is_default:"",len:0},content:"",cat_list:[],array:["微信支付","支付宝支付"],index:0,express_price:0,accountList:[{id:1,img:"../../static/order_img1.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:118},{id:2,img:"../../static/order_img2.jpg",title:"艾璐卡柔雾丝绒唇釉",info:"持久滋润·饱满显色·细腻亮泽·抚平唇纹",num:1,type:"6.8ml",price:138}],all:118,level_price:0,total_price:0,mch_list:[],payment:0,pay_type:"WECHAT_PAY"}},onBackPress:function(){t.reLaunch({url:"/pages/store/store"})},methods:{toAddress:function(){console.log(JSON.stringify(this.mch_list)," at pages\\account\\account.vue:118"),t.navigateTo({url:"/pages/address_list/address_list?mch_list="+JSON.stringify(this.mch_list)})},bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value," at pages\\account\\account.vue:129"),this.index=t.target.value,0==this.index?(this.payment=0,this.pay_type="WECHAT_PAY"):1==this.index&&(this.payment=1,this.pay_type="ALIPAY"),console.log(this.index," at pages\\account\\account.vue:142")},getMess:function(t){this.content=t.detail.value},toSubmit:function(e){var a=this;t.showLoading({title:"加载中",mask:!0}),console.log(a.mch_list," at pages\\account\\account.vue:153");for(var n=0;n<a.mch_list.length;n++)a.mch_list[n].show=!1,a.mch_list[n].show_length=0,a.mch_list[n].offline=0,a.mch_list[n].content=a.content;if(console.log(a.mch_list," at pages\\account\\account.vue:170"),a.all>1e4)return t.showToast({title:"联系平台下单",icon:"none"}),!1;t.request({url:a.$api+"order/new-submit&access_token="+a.$access_token,method:"POST",data:{payment:a.payment,use_integral:1,formId:void 0,mch_list:JSON.stringify(a.mch_list)},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){if(console.log(e.data.code," at pages\\account\\account.vue:205"),1==e.data.code)return t.showToast({title:e.data.msg,icon:"none",duration:1500}),!1;t.showToast({title:"提交成功",icon:"none",duration:1500});var n=e.data.data.order_id;if(a.all<1e4)if(2==a.payment)t.request({url:a.$api+"order/pay-data&access_token="+a.$access_token,method:"GET",data:{order_id:e.data.data.order_id,pay_type:a.pay_type,parent_user_id:0,condition:2,cat_list:a.cat_list},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data;t.showToast({title:e.data.msg,icon:"none",duration:1500}),0==e.data.code?t.navigateTo({url:"/pages/my_order/my_order?id=1"}):t.navigateTo({url:"/pages/my_order/my_order?id=0"})}});else{if(0==a.payment)var o="wxpay",i="http://app.youlan-china.com/wxpayv3/index.php";else o="alipay",i="http://app.youlan-china.com/alipayrsa2/index.php";t.request({url:i,method:"GET",dataType:"json",data:{price:e.data.data.total_price,goods_name:a.accountList[0].goods_name,order_no:e.data.data.order_no},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.hideLoading();var i=e.data;if(0==a.payment)var c=JSON.stringify({appid:i.appid,noncestr:i.noncestr,package:"Sign=WXPay",partnerid:i.partnerid,prepayid:i.prepayid,timestamp:i.timestamp,sign:i.sign});else c=i;t.getProvider({service:"payment",success:function(e){t.requestPayment({provider:o,orderInfo:c,success:function(e){t.request({url:a.$api+"order/wx-pay&order_id="+n+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:"支付成功！"}),t.navigateTo({url:"/pages/my_order/my_order?id=1"})},fail:function(e){t.navigateTo({url:"/pages/my_order/my_order?id=0"})}})},fail:function(e){console.log(JSON.stringify(e)," at pages\\account\\account.vue:321"),t.showToast({title:"支付失败",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)}})},fail:function(e){t.showToast({title:"支付失败",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)}})},fail:function(){t.hideLoading(),t.showToast({title:"支付失败！",icon:"none"})}})}else t.showToast({title:"金额大于一万请需通过其他渠道支付货款",icon:"none"}),setTimeout(function(){t.navigateTo({url:"/pages/my_order/my_order?id=0"})},1500)},fail:function(){t.showToast({title:"提交失败",icon:"none",duration:1500})}})}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level");var n=JSON.parse(e.data);a.len=n.mch_list.length-1,console.log(a.len," at pages\\account\\account.vue:386"),a.cat_list=e.cat_list,a.address=n.address,a.accountList=n.mch_list[a.len].goods_list,console.log(a.accountList," at pages\\account\\account.vue:390"),a.mch_list=n.mch_list,a.express_price=n.mch_list[a.len].express_price,a.level_price=n.mch_list[a.len].level_price,a.total_price=n.mch_list[a.len].total_price,a.all=parseFloat(a.level_price)+parseFloat(a.express_price)}};e.default=a}).call(this,a("6e42")["default"])},"8be6":function(t,e,a){"use strict";a.r(e);var n=a("744b"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},"9d9a":function(t,e,a){"use strict";var n=a("3a11"),o=a.n(n);o.a},f9c8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})}},[["c8cd","common/runtime","common/vendor"]]]);