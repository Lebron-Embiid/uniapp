(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/car/car"],{"54ae":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},"749e":function(t,i,a){},b38f:function(t,i,a){"use strict";(function(t){var a;function e(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=(a={data:function(){return{isselectedall:!0,scrollposition:0,cart:[],ordercart:[],buymore:[],itemrecommend:[],totalamount:0,cntitems:0,shownullcart:!1}},onLoad:function(){var i=this;t.request({url:i.$api+"cart/list&access_token="+i.$access_token,method:"GET",success:function(t){var a=[],e=t.data.data.list;for(var s in e)a.push({id:e[s].cart_id,name:e[s].goods_name,imgsrc:e[s].goods_pic,quantity:e[s].num,price:e[s].price,type:"6.8ml"});i.cart=a;for(var n=0;n<i.cart.length;n++)i.totalamount=i.totalamount+i.cart[n].price*i.cart[n].quantity,i.cntitems=i.cntitems+i.cart[n].quantity;i.totalamount=i.fmamount(i.totalamount),0==i.cart.length?i.shownullcart=!0:i.shownullcart=!1},fail:function(){}})},onPullDownRefresh:function(){t.startPullDownRefresh(this.cart)}},e(a,"onPullDownRefresh",function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)}),e(a,"computed",{}),e(a,"beforeDestroy",function(){try{t.setStorageSync("cart",this.cart)}catch(i){}}),e(a,"methods",{toStore:function(){t.reLaunch({url:"/pages/store/store"})},scrollhoming:function(){this.scrollposition=this.scrollposition-1},scrollhomed:function(){this.scrollposition=0},clickitemselectedall:function(){if(this.isselectedall=!this.isselectedall,this.isselectedall){if(this.cart)for(var t=0;t<this.cart.length;t++)this.cart[t].id<0&&(this.cart[t].id=-this.cart[t].id,this.cntitems=this.cntitems+this.cart[t].quantity,this.totalamount=this.totalamount+this.cart[t].price*this.cart[t].quantity,this.totalamount=this.fmamount(this.totalamount))}else if(this.cart)for(t=0;t<this.cart.length;t++)this.isselected(this.cart[t].id)&&(this.cart[t].id=-this.cart[t].id,this.cntitems=this.cntitems-this.cart[t].quantity,this.totalamount=this.totalamount-this.cart[t].price*this.cart[t].quantity,this.totalamount=this.fmamount(this.totalamount))},clickitemselected:function(t){if(this.cart)for(var i=0;i<this.cart.length;i++)if(this.cart[i].id==t)return this.cart[i].id=-this.cart[i].id,void(this.isselected(this.cart[i].id)?(this.cntitems=this.cntitems+this.cart[i].quantity,this.totalamount=this.totalamount+this.cart[i].price*this.cart[i].quantity,this.totalamount=this.fmamount(this.totalamount),this._isselectedall()&&(this.isselectedall=!0)):(this.cntitems=this.cntitems-this.cart[i].quantity,this.totalamount=this.totalamount-this.cart[i].price*this.cart[i].quantity,this.totalamount=this.fmamount(this.totalamount),this.isselectedall=!1))},clickdel:function(i){var a=this,e=[];e.push(i),console.log(e),t.showModal({title:"提示",content:"确定删除该商品？",success:function(s){s.confirm&&t.request({url:a.$api+"cart/delete&access_token="+a.$access_token,data:{cart_id_list:JSON.stringify(e)},method:"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none"});for(var s=0;s<a.cart.length;s++)if(a.cart[s].id==i)return a.isselected(a.cart[s].id)?(a.cntitems=a.cntitems-a.cart[s].quantity,a.totalamount=a.totalamount-a.cart[s].price*a.cart[s].quantity,a.totalamount=a.fmamount(a.totalamount),a.cart[s].id=-99-i):a.cart[s].id=-99+i,a._isdeledall()&&(a.shownullcart=!0,a.isselectedall=!1),!1},fail:function(){t.showToast({title:s.data.msg,icon:"none"})}})}})},minusitem:function(t){for(var i=0;i<this.cart.length;i++)if(this.cart[i].id==t&&this.cart[i].quantity>0)return this.cart[i].quantity=this.cart[i].quantity-1,this.isselected(this.cart[i].id)&&(this.updatecntitems(-1),this.updatetotalamt(-this.cart[i].price)),void(0==this.cart[i].quantity&&(this.cart[i].id=this._unselected(this.cart[i].id)))},plusitem:function(t){for(var i=0;i<this.cart.length;i++)if(this.cart[i].id==t&&this.cart[i].quantity<100)return this.cart[i].quantity=this.cart[i].quantity+1,this.isselected(this.cart[i].id)?(this.updatecntitems(1),this.updatetotalamt(this.cart[i].price)):(this.cart[i].id=this._selected(this.cart[i].id),this.cntitems=this.cntitems+this.cart[i].quantity,this.totalamount=this.totalamount+this.cart[i].price*this.cart[i].quantity,this.totalamount=this.fmamount(this.totalamount)),void(this._isselectedall()&&(this.isselectedall=!0))},clickitemhref:function(i){t.navigateTo({url:"/pages/store_detail/store_detail?id="+i})},updatetotalamt:function(t){this.totalamount=this.totalamount+t,this.totalamount=this.fmamount(this.totalamount)},updatecntitems:function(t){this.cntitems=this.cntitems+t},fmamount:function(t){return Math.round(100*t)/100},_unselected:function(t){return-Math.abs(t)},_selected:function(t){return Math.abs(t)},isselected:function(t){return t>0},_isselectedall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id<0)return!1;return!0},_isdeledall:function(){for(var t=0;t<this.cart.length;t++)if(this.cart[t].id>-99)return!1;return!0},createorder:function(){var i=this;if(0==i.totalamount)t.showModal({content:"请选择下单的商品！"});else{for(var a=0;a<i.cart.length;a++)i.cart[a].items;t.request({url:i.$api+"order/new-submit-preview&access_token="+i.$access_token,method:"POST",data:{goods_list:i.cart},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){},fail:function(){t.showToast({title:res.data.msg,icon:"none",duration:1500})}}),t.navigateTo({url:"/pages/account/account"})}}}),a);i.default=s}).call(this,a("6e42")["default"])},bec4:function(t,i,a){"use strict";a.r(i);var e=a("b38f"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},f4bf:function(t,i,a){"use strict";var e=a("749e"),s=a.n(e);s.a},f66e:function(t,i,a){"use strict";a.r(i);var e=a("54ae"),s=a("bec4");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("f4bf");var c=a("2877"),o=Object(c["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=o.exports}},[["a88c","common/runtime","common/vendor"]]]);