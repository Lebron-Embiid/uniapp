(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_order/my_order"],{"00cc":function(e,t,a){},"39d2":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){return a.e("components/common-order").then(a.bind(null,"7bdf"))},n={data:function(){return{page0:1,page_count0:1,page1:1,page_count1:1,page2:1,page_coun2:1,page3:1,page_coun3:1,navbar:[{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"已完成"}],currentTab:0,orderList:[]}},components:{commonOrder:s},onBackPress:function(){e.reLaunch({url:"/pages/person/person"})},methods:{navbarTap:function(t){var a=this;a.currentTab=t,a.page0=1,a.page1=1,a.page2=1,a.page3=1,e.startPullDownRefresh(),e.request({url:a.$api+"order/list&status="+a.currentTab+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=[],s=e.data.data;for(var n in s.list)t.push({id:s.list[n].order_id,express:s.list[n].express,order_no:s.list[n].order_no,time:s.list[n].addtime,status:!s.list[n].pay_type,goods:s.list[n].goods_list,pay:s.list[n].pay_price,is_pay:s.list[n].is_pay,is_send:s.list[n].is_send,is_confirm:s.list[n].is_confirm,is_comment:s.list[n].is_comment,apply_delete:s.list[n].apply_delete});0==a.currentTab?a.page_count0=e.data.data.page_count:1==a.currentTab?a.page_count1=e.data.data.page_count:2==a.currentTab?a.page_count2=e.data.data.page_count:3==a.currentTab&&(a.page_count3=e.data.data.page_count),a.orderList=t},fail:function(){}})}},onLoad:function(t){var a=this;a.$access_token=e.getStorageSync("access_token"),a.$level=e.getStorageSync("level"),a.currentTab=parseInt(t.id),e.request({url:a.$api+"order/list&status="+t.id+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=[],s=e.data.data;for(var n in s.list)t.push({id:s.list[n].order_id,express:s.list[n].express,order_no:s.list[n].order_no,time:s.list[n].addtime,status:!s.list[n].pay_type,goods:s.list[n].goods_list,pay:s.list[n].pay_price,is_pay:s.list[n].is_pay,is_send:s.list[n].is_send,is_confirm:s.list[n].is_confirm,is_comment:s.list[n].is_comment,apply_delete:s.list[n].apply_delete});a.page_count0=e.data.data.page_count,a.orderList=t},fail:function(){}}),e.startPullDownRefresh()},onPullDownRefresh:function(){var t=this;t.page0=1,t.page1=1,t.page2=1,t.page3=1,setTimeout(function(){e.request({url:t.$api+"order/list&status="+t.currentTab+"&access_token="+t.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var a=[],s=e.data.data;for(var n in s.list)a.push({id:s.list[n].order_id,express:s.list[n].express,order_no:s.list[n].order_no,time:s.list[n].addtime,status:!s.list[n].pay_type,goods:s.list[n].goods_list,pay:s.list[n].pay_price,is_pay:s.list[n].is_pay,is_send:s.list[n].is_send,is_confirm:s.list[n].is_confirm,is_comment:s.list[n].is_comment,apply_delete:s.list[n].apply_delete});t.page_count0=e.data.data.page_count,t.orderList=a},fail:function(){}}),e.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this;if(0==t.currentTab){if(t.page0==t.page_count0)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page0=parseInt(t.page0)+parseInt(1);var a=t.page0}else if(1==t.currentTab){if(t.page1==t.page_count1)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page1=parseInt(t.page1)+parseInt(1);a=t.page1}else if(2==t.currentTab){if(t.page2==t.page_count2)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page2=parseInt(t.page2)+parseInt(1);a=t.page2}else if(3==t.currentTab){if(t.page3==t.page_count3)return e.showToast({title:"没有更多数据了",icon:"none"}),!1;e.showLoading({title:"加载中"}),t.page3=parseInt(t.page3)+parseInt(1);a=t.page3}e.request({url:t.$api+"order/list&status="+t.currentTab+"&access_token="+t.$access_token,method:"GET",dataType:"json",data:{page:a},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){var s=[],n=a.data.data;for(var o in n.list)s.push({id:n.list[o].order_id,order_no:n.list[o].order_no,time:n.list[o].addtime,status:!n.list[o].pay_type,goods:n.list[o].goods_list,pay:n.list[o].pay_price,is_pay:n.list[o].is_pay,is_send:n.list[o].is_send,is_confirm:n.list[o].is_confirm,is_comment:n.list[o].is_comment,apply_delete:n.list[o].apply_delete});t.orderList=t.orderList.concat(s),console.log(t.orderList," at pages\\my_order\\my_order.vue:324"),e.hideLoading()},fail:function(t){e.showToast({icon:"none",title:t.data.msg,duration:2e3})}})}};t.default=n}).call(this,a("6e42")["default"])},"9c6a":function(e,t,a){"use strict";a.r(t);var s=a("a518"),n=a("c2f1");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("e222");var i=a("2877"),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"2738ab10",null);t["default"]=r.exports},a518:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},c2f1:function(e,t,a){"use strict";a.r(t);var s=a("39d2"),n=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t["default"]=n.a},e222:function(e,t,a){"use strict";var s=a("00cc"),n=a.n(s);n.a}},[["caed","common/runtime","common/vendor"]]]);