(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-order"],{"1a9c":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},r=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return r})},"34b5":function(e,o,t){"use strict";t.r(o);var n=t("815f"),r=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(o,e,function(){return n[e]})}(a);o["default"]=r.a},"7bdf":function(e,o,t){"use strict";t.r(o);var n=t("1a9c"),r=t("34b5");for(var a in r)"default"!==a&&function(e){t.d(o,e,function(){return r[e]})}(a);t("ef72");var c=t("2877"),i=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,"d4d630c8",null);o["default"]=i.exports},"815f":function(e,o,t){"use strict";(function(e,t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{pay_type:"-1",pay_list:["微信支付","支付宝支付"]}},props:{current:Number,orderList:Array},onLoad:function(){var o=this;o.$access_token=e.getStorageSync("access_token"),o.$level=e.getStorageSync("level")},methods:{toPay:function(o,n,r){var a=this;console.log(t(a.pay_type," at components\\common-order.vue:81"));var c=a.orderList[r].order_no,i=a.orderList[r].goods[0].goods_name,s=a.orderList[r].id;if(console.log(t(o,c,i,n,s," at components\\common-order.vue:85")),n>=1e4)return e.showToast({title:"联系平台下单",icon:"none"}),!1;e.showActionSheet({itemList:a.pay_list,success:function(o){if(0==o.tapIndex){a.pay_type=0;var t="http://app.youlan-china.com/wxpayv3/index.php",r="wxpay"}else{a.pay_type=1;t="http://app.youlan-china.com/alipayrsa2/index.php",r="alipay"}e.request({url:t,method:"GET",dataType:"json",data:{price:n,goods_name:i,order_no:c},header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){var t=o.data;if(0==a.pay_type)var n=JSON.stringify({appid:t.appid,noncestr:t.noncestr,package:"Sign=WXPay",partnerid:t.partnerid,prepayid:t.prepayid,timestamp:t.timestamp,sign:t.sign});else n=t;e.getProvider({service:"payment",success:function(o){e.requestPayment({provider:r,orderInfo:n,success:function(o){e.showToast({title:"支付成功！"}),e.request({url:a.$api+"order/wx-pay&order_id="+s+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){}}),e.navigateTo({url:"/pages/my_order/my_order?id=1"})},fail:function(o){e.showToast({title:"支付失败",icon:"none"})}})}})},fail:function(o){e.showToast({title:"支付失败！",icon:"none"})}})},fail:function(e){console.log(t(e.errMsg," at components\\common-order.vue:179"))}})},toContact:function(o){e.navigateTo({url:"/pages/feedback/feedback"})},toCancle:function(o){var t=this;e.showModal({title:"提示",content:"取消订单等同删除订单，请确定是否取消？",success:function(n){n.confirm&&e.request({url:t.$api+"order/revoke&order_id="+o+"&access_token="+t.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.showToast({title:o.data.msg,icon:"none"}),setTimeout(function(){e.redirectTo({url:"/pages/my_order/my_order?id="+t.current})},1e3)},fail:function(o){e.showToast({title:o.data.msg,icon:"none"})}})}})},toOrderDetail:function(o){console.log(t(o," at components\\common-order.vue:225")),e.navigateTo({url:"/pages/order_detail/order_detail?id="+o})},toOrderComment:function(o){e.navigateTo({url:"/pages/order_comment/order_comment?id="+o})},logisticsOrder:function(o){e.navigateTo({url:"/pages/logistics/logistics?id="+o})},queryOrder:function(o){var n=this;console.log(t(o," at components\\common-order.vue:242")),e.request({url:n.$api+"order/confirm&order_id="+o+"&access_token="+n.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(o){e.showToast({title:o.data.msg,icon:"none"}),setTimeout(function(){e.redirectTo({url:"/pages/my_order/my_order?id="+n.current})},1e3)},fail:function(o){e.showToast({title:o.data.msg,icon:"none"})}})}}};o.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},ccef:function(e,o,t){},ef72:function(e,o,t){"use strict";var n=t("ccef"),r=t.n(n);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-order-create-component',
    {
        'components/common-order-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("7bdf"))
        })
    },
    [['components/common-order-create-component']]
]);                
