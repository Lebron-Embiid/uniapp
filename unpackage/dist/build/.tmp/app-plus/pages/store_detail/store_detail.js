(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store_detail/store_detail"],{"45d1":function(t,e,a){},4619:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"9e6a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return a.e("components/common-swiper").then(a.bind(null,"b505"))},o={data:function(){return{swiperList:[],navbar:[{name:"商品详情"},{name:"评价"}],currentTab:0,id:"",title:"",info:"深层清洁皮肤，长效保湿滋润",price:"",max_price:"",type:"120g",content:"",fixed_show:1,animationData:{},buy_img:"../../static/store_img1.jpg",buy_price:"999.00",buy_save:7,buy_num:1,is_format:1,buy_format:[],mch_list:[],attr:[],attr_id:[],score_1:0,score_2:0,score_3:0,score_all:0,page:1,page_count:1,comment_count:{},comment_list:[]}},components:{commonSwiper:n},methods:{navbarTap:function(e){var a=this;a.currentTab=e,1==a.currentTab&&t.request({url:a.$api+"default/comment-list&goods_id="+a.id+"&access_token="+a.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t.data.data," at pages\\store_detail\\store_detail.vue:173"),a.comment_list=t.data.data.list,a.comment_count=t.data.data.comment_count},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})},toIndex:function(e){t.switchTab({url:"/pages/index/index"})},previewImgs:function(e){var a=this;t.previewImage({urls:a.swiperList,current:a.swiperList[e]})},toAddCar:function(e){var a=this;if(0!=a.is_format)return a.fixed_show=0,t.showToast({title:"请选择规格"}),!1;t.request({url:a.$api+"cart/add-cart&access_token="+a.$access_token,method:"POST",data:{cat_list:JSON.stringify(a.attr_id),goods_id:a.id,attr:JSON.stringify(a.attr),num:a.buy_num},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){0==e.data.code?t.showToast({title:"添加购物车成功！",icon:"success"}):t.showToast({title:"添加购物车失败！",icon:"success"})},fail:function(){t.showToast({title:"添加购物车失败",icon:"none"})}})},toBuy:function(e){var a=this;if(0!=a.is_format)return a.fixed_show=0,t.showToast({title:"请选择规格"}),!1;var n=[];n.push({goods_id:a.id,num:a.buy_num,attr:a.attr}),a.mch_list.push({mch_id:0,goods_list:n}),console.log(a.mch_list," at pages\\store_detail\\store_detail.vue:265"),t.request({url:a.$api+"order/new-submit-preview&access_token="+a.$access_token,method:"POST",data:{mch_list:JSON.stringify(a.mch_list)},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){0==e.data.code?setTimeout(function(){t.navigateTo({url:"/pages/account/account?data="+JSON.stringify(e.data.data)+"&cat_list="+JSON.stringify(a.attr_id)})},1e3):t.showToast({title:"立即购买失败",icon:"none"})},fail:function(){t.showToast({title:"立即购买失败",icon:"none"})}})},selectFormat:function(e,a,n,o){var i=this;i.attr[n]={attr_group_id:i.buy_format[n].id,attr_group_name:i.buy_format[n].name,attr_id:i.buy_format[n].list[o].attr_id,attr_name:i.buy_format[n].list[o].attr_name},i.attr_id[n]=i.attr[n].attr_id,i.buy_format[n].current=[n,o];var s=i.buy_format.length;if(i.attr.length==s&&(i.is_format=0),i.attr_id.length!=i.buy_format.length||void 0==i.attr_id[0])return!1;t.request({url:i.$api+"default/goods-attr-info&access_token="+i.$access_token,method:"GET",data:{attr_list:JSON.stringify(i.attr_id),goods_id:i.id},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data.data;i.buy_save=e.num,""!=e.pic&&(i.buy_img=e.pic)},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})},minus_num:function(t){this.buy_num--,this.buy_num<=0&&(this.buy_num=1)},plus_num:function(t){this.buy_num++,this.buy_num>=99&&(this.buy_num=99)},showFixed:function(t){this.fixed_show=0},hideFixed:function(t){this.fixed_show=1}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level"),setTimeout(function(){a.id=e.id,t.request({url:a.$api+"default/goods&id=1&access_token="+a.$access_token,method:"GET",data:{id:e.id},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=[],n=[],o=t.data.data;for(var i in o.pic_list)e.push(o.pic_list[i].pic_url);for(var s in o.attr_group_list)n.push({id:o.attr_group_list[s].attr_group_id,name:o.attr_group_list[s].attr_group_name,list:o.attr_group_list[s].attr_list,current:[-1,-1]});a.swiperList=e,a.title=o.name,a.price=o.price,a.max_price=o.max_price,a.buy_save=o.num,a.buy_format=n,a.buy_img=a.swiperList[0]},fail:function(e){t.showToast({title:JSON.stringify(e),icon:"none",duration:1500})}})},1e3),t.startPullDownRefresh()},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){var e=this;return 0!=e.currentTab&&(e.page==e.page_count?(t.showToast({title:"没有更多数据了",icon:"none"}),!1):(e.page=parseInt(e.page)+parseInt(1),void t.request({url:e.$api+"default/comment-list&goods_id="+e.id+"&access_token="+e.$access_token,method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data.data.list;e.comment_list=e.comment_list.concat(a),console.log(e.comment_list," at pages\\store_detail\\store_detail.vue:469")},fail:function(){t.showToast({title:res.data.msg,icon:"none"})}})))}};e.default=o}).call(this,a("6e42")["default"])},a387:function(t,e,a){"use strict";var n=a("45d1"),o=a.n(n);o.a},bb9e:function(t,e,a){"use strict";a.r(e);var n=a("4619"),o=a("e69b");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("a387");var s=a("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"122be905",null);e["default"]=r.exports},e69b:function(t,e,a){"use strict";a.r(e);var n=a("9e6a"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a}},[["1ba9","common/runtime","common/vendor"]]]);