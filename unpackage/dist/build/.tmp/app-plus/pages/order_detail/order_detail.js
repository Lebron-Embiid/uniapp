(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_detail/order_detail"],{"554e":function(t,e,s){},"760e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"order_detail_box"},[s("view",{staticClass:"order_top"},[s("image",{staticClass:"order_bg",attrs:{src:"../../static/order_bg.jpg",mode:"widthFix"}}),s("view",{staticClass:"ot_layer"},[s("view",{staticClass:"ot_word"},[s("view",[t._v("订单状态："+t._s(t.orders.status))]),s("view",[t._v("订单号："+t._s(t.orders.order_no))]),s("view",[t._v("下单时间："+t._s(t.orders.addtime))])]),s("image",{attrs:{src:"../../static/car.png",mode:"widthFix"}})])]),s("view",{staticClass:"order_info bb12"},[""!=t.orders.express_no?s("view",{staticClass:"order_next",attrs:{eventid:"1d1d72ea-0"},on:{click:function(e){t.toLogistics(t.id)}}},[s("image",{staticClass:"icon",attrs:{src:"../../static/car_icon1.png",mode:"widthFix"}}),s("view",{staticClass:"on_center"},[s("view",{staticClass:"oc_title"},[t._v("物流公司:"+t._s(t.orders.express))]),s("view",{staticClass:"oc_time"},[t._v("物流单号:"+t._s(t.orders.express_no))])]),s("image",{staticClass:"next",attrs:{src:"../../static/next.png",mode:"widthFix"}})]):t._e(),s("view",{staticClass:"oi_name"},[t._v(t._s(t.orders.name)),s("text",[t._v(t._s(t.orders.mobile))])]),s("view",{staticClass:"oi_address"},[s("image",{attrs:{src:"../../static/car_icon2.png",mode:"widthFix"}}),t._v(t._s(t.orders.address))])]),s("view",{staticClass:"order_content bb12"},[s("view",{staticClass:"oc_remark"},[t._v("商品信息")]),t._l(t.orders.goods_list,function(e,i){return s("view",{key:i,staticClass:"order_item"},[s("view",{staticClass:"oi_left"},[s("image",{attrs:{src:e.goods_pic,mode:"widthFix"}})]),s("view",{staticClass:"oi_center"},[s("view",{staticClass:"oi_title"},[t._v(t._s(e.name))]),s("view",{staticClass:"oi_info"},t._l(e.attr,function(e,i){return s("text",{key:i},[t._v(t._s(e.attr_group_name)+": "+t._s(e.attr_name))])}))]),s("view",{staticClass:"oi_right"},[s("view",{staticClass:"oi_price"},[t._v("￥"+t._s(e.total_price)),s("text",{staticClass:"oi_num"},[t._v("x"+t._s(e.num))])])])])})],2),s("view",{staticClass:"order_money"},[s("view",{staticClass:"money_item"},[t._v("商品总价"),s("text",[t._v("￥"+t._s(t.orders.goods_total_price))])]),s("view",{staticClass:"money_item"},[t._v("配送费"),s("text",[t._v("￥"+t._s(t.orders.express_price))])]),s("view",{staticClass:"money_item"},[t._v("实付款"),s("text",{staticClass:"red"},[t._v("￥"+t._s(t.orders.pay_price))])]),s("view",{staticClass:"money_btn"})])])},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},c724:function(t,e,s){"use strict";s.r(e);var i=s("760e"),a=s("fcf8");for(var o in a)"default"!==o&&function(t){s.d(e,t,function(){return a[t]})}(o);s("f598");var r=s("2877"),n=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"22b97deb",null);e["default"]=n.exports},ea11:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{id:1,orders:[]}},methods:{toLogistics:function(e){t.navigateTo({url:"/pages/logistics/logistics?id="+e})},toConfirm:function(e){var s=this;t.request({url:s.$api+"order/confirm&order_id="+e+"&access_token="+s.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}})}},onLoad:function(e){var s=this;s.$access_token=t.getStorageSync("access_token"),s.$level=t.getStorageSync("level"),s.id=e.id,t.request({url:s.$api+"order/detail&order_id="+s.id+"&access_token="+s.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data.data;s.orders=e,console.log(s.orders)},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}})}};e.default=s}).call(this,s("6e42")["default"])},f24a:function(t,e,s){"use strict";s("1a7f");var i=o(s("b0ce")),a=o(s("c724"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},f598:function(t,e,s){"use strict";var i=s("554e"),a=s.n(i);a.a},fcf8:function(t,e,s){"use strict";s.r(e);var i=s("ea11"),a=s.n(i);for(var o in i)"default"!==o&&function(t){s.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}},[["f24a","common/runtime","common/vendor"]]]);