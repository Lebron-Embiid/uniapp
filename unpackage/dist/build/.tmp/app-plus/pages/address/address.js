(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"01e1":function(t,e,a){"use strict";var i=a("ac1d"),n=a.n(i);n.a},"22ca":function(t,e,a){"use strict";a.r(e);var i=a("de53"),n=a.n(i);for(var d in i)"default"!==d&&function(t){a.d(e,t,function(){return i[t]})}(d);e["default"]=n.a},ac1d:function(t,e,a){},ae56:function(t,e,a){"use strict";a.r(e);var i=a("fa9f"),n=a("22ca");for(var d in n)"default"!==d&&function(t){a.d(e,t,function(){return n[t]})}(d);a("01e1");var c=a("2877"),o=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"7191fc24",null);e["default"]=o.exports},de53:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return Promise.all([a.e("common/vendor"),a.e("components/citypicker/cityPicker")]).then(a.bind(null,"d20f"))},n=function(){return a.e("components/jm-address/jm-address").then(a.bind(null,"d91c"))},d={data:function(){return{cityPickerValueDefault:[0,0,0],themeColor:"#007AFF",pickerText:"请选择",arr:[],pic:[],name:"",phone:"",detail:"",id:0}},components:{cityPicker:i,addressd:n},methods:{childClick:function(t){this.province_id=t.province_id,this.city_id=t.city_id,this.district_id=t.district_id,console.log(this.province_id,this.city_id,this.district_id," at pages\\address\\address.vue:70")},getName:function(t){this.name=t.detail.value},getPhone:function(t){this.phone=t.detail.value},getDetail:function(t){this.detail=t.detail.value},addAddress:function(e){var a=this;t.request({url:a.$api+"user/address-save&access_token="+a.$access_token,method:"POST",data:{name:a.name,mobile:a.phone,province_id:a.province_id,city_id:a.city_id,district_id:a.district_id,detail:a.detail},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},1500)},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}})},editAddress:function(e){var a=this;t.request({url:a.$api+"user/address-edit&access_token="+a.$access_token,method:"POST",data:{id:a.id,name:a.name,mobile:a.phone,province_id:a.province_id,city_id:a.city_id,district_id:a.district_id,detail:a.detail},dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500}),setTimeout(function(){t.navigateBack({delta:1})},1500)},fail:function(e){t.showToast({title:e.data.msg,icon:"none",duration:1500})}})}},onLoad:function(e){var a=this;a.$access_token=t.getStorageSync("access_token"),a.$level=t.getStorageSync("level"),t.request({url:a.$api+"user/address-detail&access_token="+a.$access_token,dataType:"json",method:"GET",data:{id:e.id},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t," at pages\\address\\address.vue:203"),a.id=t.data.data.address_id,a.name=t.data.data.name,a.phone=t.data.data.mobile,a.arr[0]=t.data.data.district.province.id,a.arr[1]=t.data.data.district.city.id,a.pic[0]=t.data.data.district.province.name,a.pic[1]=t.data.data.district.city.name,a.pic[2]=t.data.data.district.district.name,a.arr[2]=t.data.data.district.district.id,a.detail=t.data.data.detail},fail:function(e){t.showToast({title:e.data.msg,icon:"none"})}})},onReachBottom:function(){}};e.default=d}).call(this,a("6e42")["default"])},fa9f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}},[["c773","common/runtime","common/vendor"]]]);